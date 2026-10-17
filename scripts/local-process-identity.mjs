import { spawnSync } from "node:child_process";
import { readFileSync, readlinkSync, realpathSync } from "node:fs";
import { mkdir, rmdir } from "node:fs/promises";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";

// All cooperating run/stop callers hold this checkout-local lock from their
// first state read through their last mutation. Never evict an existing lock:
// interruption requires explicit owner inspection, not a PID/liveness guess.
// Writers outside this protocol must be quiesced before editing recovery state.
export async function withLocalAppStateLock(
  stateDir,
  operation,
  { makeDirectory = mkdir, removeDirectory = rmdir } = {},
) {
  await makeDirectory(stateDir, { recursive: true });
  const lockDir = path.join(stateDir, "state.lock");
  try {
    await makeDirectory(lockDir);
  } catch (error) {
    if (error.code === "EEXIST")
      throw new Error(
        "Local app state is locked by another operation or interrupted owner; state preserved. Inspect the owner before an explicitly approved lock recovery.",
      );
    throw error;
  }
  try {
    return await operation();
  } finally {
    await removeDirectory(lockDir);
  }
}

export function assertStartStateAvailable(state) {
  if (state !== null)
    throw new Error(
      "An existing local app record could not be reused; state preserved. Inspect the recorded PID, launch identity and logs. A free port is not recovery authority; confirm the old process is absent and obtain explicit approval before archiving its record.",
    );
}

export function parseRecordedState(raw) {
  const state = JSON.parse(raw);
  if (!state || typeof state !== "object" || Array.isArray(state))
    throw new Error("Invalid recorded local app state; state preserved");
  return state;
}

// Parse the Windows CRT quoting used by Node's shell:false launcher. Refuse
// malformed quotes rather than accepting a token found somewhere in prose.
export function splitWindowsCommandLine(command) {
  const args = [];
  let i = 0;
  while (i < command.length) {
    while (/\s/.test(command[i] || "") && i < command.length) i++;
    if (i === command.length) break;
    let value = "",
      quoted = false;
    while (i < command.length && (quoted || !/\s/.test(command[i]))) {
      let slashes = 0;
      while (command[i] === "\\") {
        slashes++;
        i++;
      }
      if (command[i] === '"') {
        value += "\\".repeat(Math.floor(slashes / 2));
        if (slashes % 2) value += '"';
        else quoted = !quoted;
        i++;
      } else {
        value += "\\".repeat(slashes);
        if (i < command.length) value += command[i++];
      }
    }
    if (quoted) throw new Error("Unverifiable process command quoting");
    args.push(value);
  }
  return args;
}

export function readProcessIdentity(
  pid,
  {
    platform = process.platform,
    run = spawnSync,
    readFile = readFileSync,
    readlink = readlinkSync,
  } = {},
) {
  if (!Number.isSafeInteger(pid) || pid <= 0)
    throw new Error("Invalid recorded PID");
  if (platform === "win32") {
    // Target one PID and only these fields. Never read process environments.
    const script = `$p = Get-CimInstance Win32_Process -Filter 'ProcessId = ${pid}'; if ($null -eq $p) { exit 3 }; [pscustomobject]@{ pid = [int]$p.ProcessId; executable = $p.ExecutablePath; commandLine = $p.CommandLine; generation = $p.CreationDate.ToUniversalTime().ToString('o') } | ConvertTo-Json -Compress`;
    const result = run(
      "powershell.exe",
      ["-NoProfile", "-NonInteractive", "-Command", script],
      { encoding: "utf8", windowsHide: true },
    );
    if (result.error || result.status !== 0)
      throw new Error(
        "Cannot verify live Windows process metadata; state preserved",
      );
    let data;
    try {
      data = JSON.parse(result.stdout);
    } catch {
      throw new Error("Invalid live Windows process metadata; state preserved");
    }
    if (
      !data.commandLine ||
      !data.executable ||
      !data.generation ||
      data.pid !== pid
    )
      throw new Error(
        "Incomplete live Windows process metadata; state preserved",
      );
    return {
      pid,
      executable: data.executable,
      argv: splitWindowsCommandLine(data.commandLine),
      generation: data.generation,
    };
  }
  if (platform === "linux") {
    try {
      const stat = readFile(`/proc/${pid}/stat`, "utf8");
      const fields = stat.slice(stat.lastIndexOf(")") + 2).split(" ");
      const generation = fields[19]; // Field 22, after (comm); boot-relative start ticks.
      const boot = readFile("/proc/sys/kernel/random/boot_id", "utf8").trim();
      if (!/^\d+$/.test(generation) || !boot)
        throw new Error("Missing start identity");
      return {
        pid,
        executable: readlink(`/proc/${pid}/exe`),
        argv: readFile(`/proc/${pid}/cmdline`, "utf8")
          .split("\0")
          .filter(Boolean),
        generation: `${boot}:${generation}`,
        groupId: Number(fields[2]),
        cwd: readlink(`/proc/${pid}/cwd`),
      };
    } catch {
      throw new Error(
        "Cannot verify live Linux process metadata; state preserved",
      );
    }
  }
  throw new Error(
    `Verified local process ownership is unsupported on ${platform}; state preserved`,
  );
}

function samePath(a, b, platform) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const api = platform === "win32" ? path.win32 : path.posix;
  const normalize = (value) =>
    platform === "win32"
      ? api.resolve(value).toLowerCase()
      : api.resolve(value);
  return normalize(a) === normalize(b);
}
export function assertProcessOwnership(
  state,
  live,
  {
    rootDir,
    launcherPath,
    executable = process.execPath,
    appId,
    port,
    host,
    platform = process.platform,
  },
) {
  if (
    state?.schemaVersion !== 2 ||
    state.appId !== appId ||
    state.host !== host ||
    state.port !== port ||
    !samePath(state.rootDir, rootDir, platform) ||
    !Number.isSafeInteger(state.pid) ||
    state.pid <= 0 ||
    !/^[0-9a-f-]{36}$/i.test(state.launchToken || "") ||
    !state.processGeneration ||
    !samePath(state.executable, executable, platform) ||
    !samePath(state.launcherPath, launcherPath, platform)
  )
    throw new Error(
      "Unverifiable or legacy recorded process ownership; state preserved",
    );
  const argv = live?.argv;
  if (
    live?.pid !== state.pid ||
    live.generation !== state.processGeneration ||
    !samePath(live.executable, executable, platform) ||
    !Array.isArray(argv) ||
    argv.length !== 8 ||
    !samePath(argv[0], executable, platform) ||
    !samePath(argv[1], launcherPath, platform) ||
    argv[2] !== "--root" ||
    !samePath(argv[3], rootDir, platform) ||
    argv[4] !== "--token" ||
    argv[5] !== state.launchToken ||
    argv[6] !== "--port" ||
    argv[7] !== String(port) ||
    (platform === "linux" &&
      (!samePath(live.cwd, rootDir, platform) || live.groupId !== state.pid))
  )
    throw new Error(
      "Live process does not match this checkout, launcher, token and PID generation; state preserved",
    );
  return true;
}

export async function stopVerifiedProcess(
  state,
  context,
  {
    readIdentity = readProcessIdentity,
    kill = killProcessTree,
    waitForExit = waitForProcessExit,
    readState,
    removeState,
  } = {},
) {
  if (removeState && typeof readState !== "function")
    throw new Error(
      "Recorded-state comparison is required before stop cleanup",
    );
  // Validate legacy/foreign state before touching a live process.
  assertProcessOwnership(
    state,
    {
      pid: state?.pid,
      executable: state?.executable,
      argv: [
        state?.executable,
        state?.launcherPath,
        "--root",
        state?.rootDir,
        "--token",
        state?.launchToken,
        "--port",
        String(state?.port),
      ],
      generation: state?.processGeneration,
      cwd: state?.rootDir,
      groupId: state?.pid,
    },
    context,
  );
  assertProcessOwnership(state, readIdentity(state.pid), context);
  // Re-read immediately before the consequential call to catch PID reuse.
  assertProcessOwnership(state, readIdentity(state.pid), context);
  await kill(state.pid);
  await waitForExit(state.pid);
  if (removeState) {
    // The caller must hold withLocalAppStateLock across its initial read and
    // this cleanup. This extra comparison catches earlier outside amendments;
    // comparison alone cannot make async read/unlink atomic for outside writers.
    if (!isDeepStrictEqual(await readState(), state))
      throw new Error(
        "Recorded state changed during stop; replacement preserved",
      );
    await removeState();
  }
}

export async function waitForProcessExit(
  pid,
  {
    isAlive = (id) => {
      try {
        process.kill(id, 0);
        return true;
      } catch (error) {
        if (error.code === "ESRCH") return false;
        throw new Error("Cannot confirm process exit; state preserved");
      }
    },
    delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    attempts = 20,
  } = {},
) {
  for (let i = 0; i < attempts; i++) {
    if (!isAlive(pid)) return;
    await delay(100);
  }
  throw new Error("OS stop did not confirm process exit; state preserved");
}

export function killProcessTree(
  pid,
  { platform = process.platform, run = spawnSync, signal = process.kill } = {},
) {
  if (platform === "win32") {
    const result = run("taskkill.exe", ["/PID", String(pid), "/T", "/F"], {
      encoding: "utf8",
      windowsHide: true,
    });
    if (result.error || result.status !== 0)
      throw new Error(
        `OS stop failed (${result.error?.code || result.status}); recorded state preserved`,
      );
    return;
  }
  if (platform !== "linux")
    throw new Error(
      `Verified stop unsupported on ${platform}; state preserved`,
    );
  try {
    signal(-pid, "SIGTERM");
  } catch (error) {
    throw new Error(
      `OS stop failed (${error.code || "unknown"}); recorded state preserved`,
    );
  }
}

export function canonicalCheckout(rootDir) {
  return realpathSync(rootDir);
}

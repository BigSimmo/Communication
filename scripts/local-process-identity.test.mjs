import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import {
  assertProcessOwnership,
  assertStartStateAvailable,
  killProcessTree,
  readProcessIdentity,
  parseRecordedState,
  splitWindowsCommandLine,
  stopVerifiedProcess,
  waitForProcessExit,
  withLocalAppStateLock,
} from "./local-process-identity.mjs";
import { parseLauncherArguments } from "./local-app-server.mjs";
import { main as appMain } from "./local-app.mjs";

const context = {
  rootDir: "C:\\Owned Checkout",
  launcherPath: "C:\\Owned Checkout\\scripts\\local-app-server.mjs",
  executable: "C:\\Program Files\\nodejs\\node.exe",
  appId: "communication-tc-reference",
  host: "127.0.0.1",
  port: 54112,
  platform: "win32",
};
const token = ["12345678", "1234", "4234", "8234", "123456789abc"].join("-");
function state() {
  return {
    ...context,
    schemaVersion: 2,
    pid: 123,
    launchToken: token,
    processGeneration: "2026-10-17T01:02:03.0000000Z",
  };
}
function live(s = state()) {
  return {
    pid: s.pid,
    executable: s.executable,
    generation: s.processGeneration,
    argv: [
      s.executable,
      s.launcherPath,
      "--root",
      s.rootDir,
      "--token",
      s.launchToken,
      "--port",
      String(s.port),
    ],
  };
}
function fixture() {
  const f = {
    state: state(),
    reads: 0,
    killed: [],
    removed: false,
    exited: false,
  };
  f.readIdentity = () => {
    f.reads++;
    return live(f.state);
  };
  f.readState = async () => f.state;
  f.kill = (pid) => f.killed.push(pid);
  f.waitForExit = async () => {
    f.exited = true;
  };
  f.removeState = async () => {
    assert(f.exited);
    f.removed = true;
  };
  return f;
}
test("modules are import safe and launcher args reject malformed identities", async () => {
  assert.equal(typeof appMain, "function");
  await assert.rejects(appMain(["stop", "ignored"]), /Usage/);
  assert.throws(() =>
    parseLauncherArguments([
      "--root",
      "relative",
      "--token",
      token,
      "--port",
      "123",
    ]),
  );
  assert.throws(() =>
    parseLauncherArguments([
      "--root",
      process.cwd(),
      "--token",
      token,
      "--port",
      "70000",
    ]),
  );
});
test("Windows command parser preserves quoted checkout/executable and backslashes", () => {
  const line = `"${context.executable}" "${context.launcherPath}" --root "${context.rootDir}" --token ${token} --port 54112`;
  assert.deepEqual(splitWindowsCommandLine(line), live().argv);
  assert.throws(() => splitWindowsCommandLine('node "unterminated'), /quoting/);
});
test("valid stop checks live identity twice, kills once, confirms exit then removes state", async () => {
  const f = fixture();
  await stopVerifiedProcess(f.state, context, f);
  assert.equal(f.reads, 2);
  assert.deepEqual(f.killed, [123]);
  assert(f.removed);
});
test("stop preserves a new launch record or owner amendment written during exit wait", async () => {
  for (const replacement of [
    {
      ...state(),
      pid: 456,
      launchToken: "22345678-1234-4234-8234-123456789abc",
      processGeneration: "new",
    },
    { ...state(), recoveryNote: "Owner is inspecting this record" },
  ]) {
    const f = fixture();
    const stoppedState = f.state;
    f.waitForExit = async () => {
      f.exited = true;
      f.state = replacement;
    };
    await assert.rejects(
      stopVerifiedProcess(stoppedState, context, f),
      /Recorded state changed/,
    );
    assert.deepEqual(f.killed, [123]);
    assert.equal(f.state, replacement);
    assert(!f.removed);
  }
});
test("state comparison and cleanup errors retain recovery information", async () => {
  const f = fixture();
  f.readState = async () => {
    throw new Error("state read failed");
  };
  await assert.rejects(
    stopVerifiedProcess(f.state, context, f),
    /state read failed/,
  );
  assert(!f.removed);
  const missingComparison = fixture();
  delete missingComparison.readState;
  await assert.rejects(
    stopVerifiedProcess(missingComparison.state, context, missingComparison),
    /comparison is required/,
  );
  assert.equal(missingComparison.killed.length, 0);
  const failedRemoval = fixture();
  failedRemoval.removeState = async () => {
    throw new Error("state removal failed");
  };
  await assert.rejects(
    stopVerifiedProcess(failedRemoval.state, context, failedRemoval),
    /state removal failed/,
  );
  assert(!failedRemoval.removed);
});
test("run admits only absent state after reuse fails, regardless of a free port", () => {
  assert.doesNotThrow(() => assertStartStateAvailable(null));
  for (const record of [
    state(),
    { appId: context.appId, pid: 123 },
    {},
    false,
    undefined,
  ]) {
    assert.throws(() => assertStartStateAvailable(record), /state preserved/);
  }
});
test("actual run path refuses an unreusable record before port checks or launching", async () => {
  const source = readFileSync(
    new URL("./local-app.mjs", import.meta.url),
    "utf8",
  );
  const body = source.slice(
    source.indexOf("async function run()"),
    source.indexOf("\nfunction spawnDevServer"),
  );
  let portChecks = 0;
  let launches = 0;
  await assert.rejects(
    vm.runInNewContext(body + "\nrun()", {
      mkdir: async () => {},
      stateDir: "synthetic",
      readState: async () => ({ appId: context.appId, pid: 123 }),
      isReusableState: async () => false,
      assertStartStateAvailable,
      isPortFree: async () => {
        portChecks++;
        return true;
      },
      spawnDevServer: () => {
        launches++;
        throw new Error("Unexpected launch");
      },
    }),
    /state preserved/,
  );
  assert.equal(portChecks, 0);
  assert.equal(launches, 0);
});
test("a present JSON null, scalar or array cannot masquerade as an absent state file", () => {
  for (const raw of ["null", "false", "42", '"text"', "[]", "bad-json"]) {
    assert.throws(() => parseRecordedState(raw));
  }
  assert.deepEqual(parseRecordedState(JSON.stringify(state())), state());
});
test("foreign checkout/executable/launcher/token/port/start generation all prevent a kill and preserve state", async () => {
  const mutations = [
    (l) => (l.generation = "RECYCLED_PID"),
    (l) => (l.executable = "C:\\other.exe"),
    (l) => (l.argv[1] = "C:\\other.mjs"),
    (l) => (l.argv[3] = "C:\\other-checkout"),
    (l) => (l.argv[5] = "foreign-token"),
    (l) => (l.argv[7] = "12345"),
    (l) => l.argv.push("unexpected"),
    (l) => (l.pid = 999),
  ];
  for (const mutate of mutations) {
    const f = fixture();
    f.readIdentity = () => {
      const l = live();
      mutate(l);
      return l;
    };
    await assert.rejects(
      stopVerifiedProcess(f.state, context, f),
      /does not match/,
    );
    assert.equal(f.killed.length, 0);
    assert.equal(f.removed, false);
  }
});
test("saved appId/root/legacy/missing start identity fails before any live process operation", async () => {
  for (const mutate of [
    (s) => delete s.schemaVersion,
    (s) => (s.processGeneration = null),
    (s) => (s.appId = "other"),
    (s) => (s.rootDir = "C:\\other"),
    (s) => (s.pid = -1),
  ]) {
    const f = fixture();
    mutate(f.state);
    await assert.rejects(
      stopVerifiedProcess(f.state, context, f),
      /legacy recorded/,
    );
    assert.equal(f.reads, 0);
    assert.equal(f.killed.length, 0);
    assert(!f.removed);
  }
});
test("PID generation change immediately before stop prevents kill", async () => {
  const f = fixture();
  f.readIdentity = () => ({
    ...live(),
    generation: ++f.reads === 1 ? state().processGeneration : "new-generation",
  });
  await assert.rejects(stopVerifiedProcess(f.state, context, f), /generation/);
  assert.equal(f.killed.length, 0);
  assert(!f.removed);
});
test("unavailable metadata, OS kill failure and unconfirmed exit preserve recorded state", async () => {
  for (const failure of ["readIdentity", "kill", "waitForExit"]) {
    const f = fixture();
    f[failure] = () => {
      throw new Error(`${failure} failed`);
    };
    await assert.rejects(
      stopVerifiedProcess(f.state, context, f),
      new RegExp(`${failure} failed`),
    );
    assert(!f.removed);
  }
});
test("Windows taskkill failures propagate OS status without discarding state or raw diagnostics", () => {
  let args;
  assert.throws(
    () =>
      killProcessTree(123, {
        platform: "win32",
        run: (_cmd, a) => {
          args = a;
          return { status: 5, stderr: "private raw diagnostic" };
        },
      }),
    /OS stop failed \(5\)/,
  );
  assert.deepEqual(args, ["/PID", "123", "/T", "/F"]);
});
test("Windows metadata query targets only the exact PID and selected fields", () => {
  const identity = readProcessIdentity(123, {
    platform: "win32",
    run: (command, args) => {
      assert.equal(command, "powershell.exe");
      assert(args.at(-1).includes("ProcessId = 123"));
      assert(!args.at(-1).includes("Environment"));
      return {
        status: 0,
        stdout: JSON.stringify({
          pid: 123,
          executable: context.executable,
          generation: state().processGeneration,
          commandLine: `"${context.executable}" "${context.launcherPath}" --root "${context.rootDir}" --token ${token} --port 54112`,
        }),
      };
    },
  });
  assertProcessOwnership(state(), identity, context);
  assert.throws(
    () => readProcessIdentity(123, { platform: "darwin" }),
    /unsupported/,
  );
  assert.throws(
    () =>
      readProcessIdentity(123, {
        platform: "win32",
        run: () => ({ status: 0, stdout: "{}" }),
      }),
    /Incomplete/,
  );
});
test("Linux process identity binds boot/start ticks, executable, cwd and own process group", () => {
  const linuxContext = {
    ...context,
    platform: "linux",
    rootDir: "/owned",
    launcherPath: "/owned/scripts/local-app-server.mjs",
    executable: "/usr/bin/node",
  };
  const s = { ...state(), ...linuxContext, processGeneration: "boot:987" };
  const l = { ...live(s), cwd: "/owned", groupId: 123 };
  assertProcessOwnership(s, l, linuxContext);
  assert.throws(
    () => assertProcessOwnership(s, { ...l, groupId: 999 }, linuxContext),
    /does not match/,
  );
  const fields = Array(20).fill("0");
  fields[0] = "S";
  fields[2] = "123";
  fields[19] = "987";
  const parsed = readProcessIdentity(123, {
    platform: "linux",
    readFile: (p) =>
      p.endsWith("stat")
        ? `123 (name with spaces) ${fields.join(" ")}`
        : p.endsWith("boot_id")
          ? "boot\n"
          : l.argv.join("\0") + "\0",
    readlink: (p) => (p.endsWith("exe") ? "/usr/bin/node" : "/owned"),
  });
  assertProcessOwnership(s, parsed, linuxContext);
});
test("bounded exit confirmation fails if process survives and never treats permission failure as exit", async () => {
  let delays = 0;
  await assert.rejects(
    waitForProcessExit(123, {
      isAlive: () => true,
      attempts: 2,
      delay: async () => {
        delays++;
      },
    }),
    /did not confirm/,
  );
  assert.equal(delays, 2);
  await assert.rejects(
    waitForProcessExit(123, {
      isAlive: () => {
        throw new Error("permission failure");
      },
    }),
    /permission failure/,
  );
});
test("negative control: saved app ID plus PID liveness accepts a recycled process; live identity refuses", () => {
  const saved = state(),
    recycled = { ...live(), generation: "reused" };
  const legacyWouldKill = saved.appId === context.appId && saved.pid > 0;
  assert(legacyWouldKill);
  assert.throws(
    () => assertProcessOwnership(saved, recycled, context),
    /generation/,
  );
});

test("state coordination refuses overlapping owners and releases after failure without evicting a held lock", async () => {
  let held = false;
  let removals = 0;
  const io = {
    makeDirectory: async (_path, options) => {
      if (options?.recursive) return;
      if (held) throw Object.assign(new Error("exists"), { code: "EEXIST" });
      held = true;
    },
    removeDirectory: async () => {
      held = false;
      removals++;
    },
  };
  await assert.rejects(
    withLocalAppStateLock(
      "synthetic",
      async () => {
        await assert.rejects(
          withLocalAppStateLock(
            "synthetic",
            async () => assert.fail("Second owner admitted"),
            io,
          ),
          /locked/,
        );
        assert(held);
        assert.equal(removals, 0);
        throw new Error("Synthetic operation failure");
      },
      io,
    ),
    /Synthetic operation failure/,
  );
  assert.equal(held, false);
  assert.equal(removals, 1);
});

test("real main dispatcher holds state coordination around run and stop, including the final cleanup gap", async () => {
  const source = readFileSync(
    new URL("./local-app.mjs", import.meta.url),
    "utf8",
  );
  const body = source
    .slice(
      source.indexOf("export async function main("),
      source.search(/\r?\nif \(\r?\n {2}process.argv\[1\]/),
    )
    .replace("export async", "async");
  let held = false;
  let saved = state();
  let replacements = 0;
  const io = {
    makeDirectory: async (_path, options) => {
      if (options?.recursive) return;
      if (held) throw Object.assign(new Error("exists"), { code: "EEXIST" });
      held = true;
    },
    removeDirectory: async () => {
      held = false;
    },
  };
  let main;
  main = vm.runInNewContext(body + "\nmain", {
    stateDir: "synthetic",
    withLocalAppStateLock: (dir, operation) =>
      withLocalAppStateLock(dir, operation, io),
    run: async () => {
      assert(held);
      replacements++;
      saved = { ...state(), pid: 456 };
    },
    guard: async () => {},
    stop: () => {
      assert(held);
      const captured = saved;
      return stopVerifiedProcess(captured, context, {
        readIdentity: () => live(captured),
        kill: () => {},
        waitForExit: async () => {},
        readState: async () => {
          const read = saved;
          await assert.rejects(main(["run"]), /locked/);
          return read;
        },
        removeState: async () => {
          assert(held);
          assert.equal(saved, captured);
          saved = null;
        },
      });
    },
  });
  await main(["stop"]);
  assert.equal(saved, null);
  assert.equal(replacements, 0);
  await main(["run"]);
  assert.equal(saved.pid, 456);
  assert.equal(replacements, 1);
  const runBody = source.slice(
    source.indexOf("async function run()"),
    source.indexOf("\nfunction spawnDevServer"),
  );
  assert(!runBody.includes("process.exit("));
});

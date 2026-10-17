import { spawn } from "node:child_process";
import { existsSync, openSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import {
  assertProcessOwnership,
  assertStartStateAvailable,
  canonicalCheckout,
  parseRecordedState,
  readProcessIdentity,
  stopVerifiedProcess,
  withLocalAppStateLock,
} from "./local-process-identity.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = canonicalCheckout(path.resolve(__dirname, ".."));
const launcherPath = path.join(rootDir, "scripts", "local-app-server.mjs");
const appDir = path.join(rootDir, "artifacts", "tc-reference");
const stateDir = path.join(rootDir, ".local", "communication-app");
const statePath = path.join(stateDir, "state.json");
const browserProfileDir = path.join(stateDir, "browser-profile");
const stdoutPath = path.join(stateDir, "dev-server.log");
const stderrPath = path.join(stateDir, "dev-server.err.log");
const port = Number(
  process.env.COMMUNICATION_APP_PORT ?? process.env.LOCAL_APP_PORT ?? "54112",
);
const host = "127.0.0.1";
const url = `http://${host}:${port}/`;
const identityUrl = `${url}local-app-identity.json`;
const appId = "communication-tc-reference";

if (!Number.isInteger(port) || port <= 0 || port > 65535) {
  throw new Error(`Invalid local app port: ${port}`);
}

export async function main(args = process.argv.slice(2)) {
  if (
    args.length > 1 ||
    (args[0] && !["run", "guard", "stop"].includes(args[0]))
  )
    throw new Error("Usage: node ./scripts/local-app.mjs <run|guard|stop>");
  switch (args[0] ?? "run") {
    case "run":
      return withLocalAppStateLock(stateDir, run);
    case "guard":
      return guard();
    case "stop":
      return withLocalAppStateLock(stateDir, stop);
  }
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    await main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

async function run() {
  await mkdir(stateDir, { recursive: true });

  const state = await readState();
  if (await isReusableState(state)) {
    await openProtectedBrowser();
    console.log(`communication-app running at ${url}`);
    console.log(`isolated browser profile: ${browserProfileDir}`);
    return;
  }

  assertStartStateAvailable(state);

  if (!(await isPortFree())) {
    throw new Error(
      `${url} is already in use, but it is not the recorded ${appId} server. Use a different COMMUNICATION_APP_PORT or stop the other app.`,
    );
  }

  if (!["win32", "linux"].includes(process.platform))
    throw new Error(
      `Verified process ownership is unsupported on ${process.platform}; no server started`,
    );
  const launchToken = randomUUID();
  const child = spawnDevServer(launchToken);
  await new Promise((resolve, reject) => {
    child.once("spawn", resolve);
    child.once("error", reject);
  });
  child.unref();

  // Store only the live process generation actually observed, never a wall-clock
  // approximation that could accidentally match a recycled PID.
  const nextState = {
    schemaVersion: 2,
    appId,
    pid: child.pid,
    port,
    host,
    url,
    rootDir,
    appDir,
    browserProfileDir,
    stdoutPath,
    stderrPath,
    startedAt: new Date().toISOString(),
    launchToken,
    launcherPath,
    executable: process.execPath,
    processGeneration: null,
  };
  // If metadata is unavailable, retain a pending identity for manual recovery;
  // never invent a generation or leave an unrecorded launched process.
  await writeState(nextState);
  try {
    const live = readProcessIdentity(child.pid);
    nextState.processGeneration = live.generation;
    assertProcessOwnership(nextState, live, ownershipContext());
    await writeState(nextState);
  } catch {
    throw new Error(
      `Server launch recorded at ${statePath}, but live process identity is unverifiable; automatic stop refused. Inspect its PID and logs manually.`,
    );
  }

  try {
    await waitForHealthyUrl();
  } catch (error) {
    throw new Error(
      `${error.message}\nServer log: ${stdoutPath}\nError log: ${stderrPath}`,
    );
  }

  await openProtectedBrowser();
  console.log(`communication-app running at ${url}`);
  console.log(`isolated browser profile: ${browserProfileDir}`);
}

function spawnDevServer(launchToken) {
  const commonOptions = {
    cwd: rootDir,
    detached: true,
    env: {
      ...process.env,
      BROWSER: "none",
      PORT: String(port),
    },
    stdio: ["ignore", openLogHandle(stdoutPath), openLogHandle(stderrPath)],
    windowsHide: true,
  };

  return spawn(
    process.execPath,
    [
      launcherPath,
      "--root",
      rootDir,
      "--token",
      launchToken,
      "--port",
      String(port),
    ],
    commonOptions,
  );
}

async function guard() {
  const state = await readState();
  if (await isReusableState(state)) {
    console.log(`identity-verified ${appId} ${url} pid=${state.pid}`);
    return;
  }

  if (await isPortFree()) {
    console.log(`not-running ${appId} ${url}`);
    return;
  }

  console.log(`blocked ${url} is in use by another process`);
  process.exit(1);
}

async function stop() {
  const state = await readState();
  if (!state) {
    console.log(`not-running ${appId} ${url}`);
    return;
  }

  await stopVerifiedProcess(state, ownershipContext(), {
    readState,
    removeState: () => rm(statePath),
  });
  console.log(`stopped ${appId} ${url}`);
}

function ownershipContext() {
  return {
    rootDir,
    launcherPath,
    executable: process.execPath,
    appId,
    port,
    host,
  };
}

async function isReusableState(state) {
  if (
    !state ||
    state.appId !== appId ||
    state.rootDir !== rootDir ||
    state.port !== port ||
    !isPidAlive(state.pid)
  ) {
    return false;
  }

  try {
    assertProcessOwnership(
      state,
      readProcessIdentity(state.pid),
      ownershipContext(),
    );
    await waitForHealthyUrl(2_000);
    return true;
  } catch {
    return false;
  }
}

function isPidAlive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) {
    return false;
  }

  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

async function isPortFree() {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });
    server.listen(port, "0.0.0.0");
  });
}

async function waitForHealthyUrl(timeoutMs = 15_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(identityUrl, { redirect: "manual" });
      const identity = await response.json();
      if (
        response.ok &&
        identity.appId === appId &&
        identity.repo === "Communication"
      ) {
        return;
      }
      lastError = new Error(
        `Unexpected identity response from ${identityUrl}: ${response.status}`,
      );
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(
    `Timed out waiting for ${appId} at ${url}: ${lastError?.message ?? "no response"}`,
  );
}

async function openProtectedBrowser() {
  await mkdir(browserProfileDir, { recursive: true });

  const executable = findBrowserExecutable();
  if (!executable) {
    console.log(`Open ${url}`);
    console.log("No supported local Chrome/Edge executable was found.");
    return;
  }

  const args = [
    `--user-data-dir=${browserProfileDir}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-background-mode",
    `--app=${url}`,
  ];

  const browser = spawn(executable, args, {
    detached: true,
    stdio: "ignore",
    windowsHide: false,
  });
  browser.unref();
}

function findBrowserExecutable() {
  const candidates = [
    process.env.CHROME,
    process.env.BROWSER,
    path.join(
      process.env.LOCALAPPDATA ?? "",
      "Google",
      "Chrome",
      "Application",
      "chrome.exe",
    ),
    path.join(
      process.env.PROGRAMFILES ?? "",
      "Google",
      "Chrome",
      "Application",
      "chrome.exe",
    ),
    path.join(
      process.env["PROGRAMFILES(X86)"] ?? "",
      "Google",
      "Chrome",
      "Application",
      "chrome.exe",
    ),
    path.join(
      process.env.LOCALAPPDATA ?? "",
      "Microsoft",
      "Edge",
      "Application",
      "msedge.exe",
    ),
    path.join(
      process.env.PROGRAMFILES ?? "",
      "Microsoft",
      "Edge",
      "Application",
      "msedge.exe",
    ),
    path.join(
      process.env["PROGRAMFILES(X86)"] ?? "",
      "Microsoft",
      "Edge",
      "Application",
      "msedge.exe",
    ),
  ].filter(Boolean);

  return candidates.find((candidate) => {
    return existsSync(candidate);
  });
}

async function readState() {
  try {
    return parseRecordedState(await readFile(statePath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw new Error("Cannot read recorded local app state; state preserved");
  }
}

async function writeState(state) {
  await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

function openLogHandle(filePath) {
  return openSync(filePath, "a");
}

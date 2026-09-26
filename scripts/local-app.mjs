import { spawn, spawnSync } from "node:child_process";
import { existsSync, openSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
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

const command = process.argv[2] ?? "run";

switch (command) {
  case "run":
    await run();
    break;
  case "guard":
    await guard();
    break;
  case "stop":
    await stop();
    break;
  default:
    console.error(`Unknown command: ${command}`);
    console.error("Usage: node ./scripts/local-app.mjs <run|guard|stop>");
    process.exit(1);
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

  if (!(await isPortFree())) {
    console.error(
      `${url} is already in use, but it is not the recorded ${appId} server.`,
    );
    console.error(
      "Use a different COMMUNICATION_APP_PORT or stop the other app.",
    );
    process.exit(1);
  }

  const child = spawnDevServer();

  child.unref();

  await writeState({
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
  });

  try {
    await waitForHealthyUrl();
  } catch (error) {
    console.error(error.message);
    console.error(`Server log: ${stdoutPath}`);
    console.error(`Error log: ${stderrPath}`);
    process.exit(1);
  }

  await openProtectedBrowser();
  console.log(`communication-app running at ${url}`);
  console.log(`isolated browser profile: ${browserProfileDir}`);
}

function spawnDevServer() {
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

  if (process.platform === "win32") {
    return spawn(
      process.env.ComSpec ?? "cmd.exe",
      [
        "/d",
        "/s",
        "/c",
        `pnpm --filter @workspace/tc-reference exec vite --config vite.config.ts --host ${host}`,
      ],
      commonOptions,
    );
  }

  return spawn(
    "pnpm",
    [
      "--filter",
      "@workspace/tc-reference",
      "exec",
      "vite",
      "--config",
      "vite.config.ts",
      "--host",
      host,
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
  if (!state?.pid || state.appId !== appId) {
    console.log(`not-running ${appId} ${url}`);
    return;
  }

  if (isPidAlive(state.pid)) {
    stopProcessTree(state.pid);
  }

  await rm(statePath, { force: true });
  console.log(`stopped ${appId} ${url}`);
}

function stopProcessTree(pid) {
  if (process.platform === "win32") {
    spawnSync("taskkill.exe", ["/PID", String(pid), "/T", "/F"], {
      stdio: "ignore",
      windowsHide: true,
    });
    return;
  }

  try {
    process.kill(-pid);
  } catch {
    try {
      process.kill(pid);
    } catch {
      // The process may exit between the liveness check and the signal.
    }
  }
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
    return JSON.parse(await readFile(statePath, "utf8"));
  } catch {
    return null;
  }
}

async function writeState(state) {
  await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

function openLogHandle(filePath) {
  return openSync(filePath, "a");
}

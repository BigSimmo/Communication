// A unique, directly observable Node owner for the Vite server (no cmd/pnpm PID).
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

export function parseLauncherArguments(args) {
  if (
    args.length !== 6 ||
    args[0] !== "--root" ||
    args[2] !== "--token" ||
    args[4] !== "--port" ||
    !path.isAbsolute(args[1]) ||
    !/^[0-9a-f-]{36}$/i.test(args[3]) ||
    !/^[1-9]\d*$/.test(args[5]) ||
    Number(args[5]) > 65535
  )
    throw new Error("Invalid local app launcher identity");
  return { rootDir: args[1], token: args[3], port: Number(args[5]) };
}
export async function main(args = process.argv.slice(2)) {
  const { rootDir, port } = parseLauncherArguments(args);
  if (
    path.resolve(rootDir, "scripts/local-app-server.mjs") !==
    fileURLToPath(import.meta.url)
  )
    throw new Error("Launcher checkout mismatch");
  const appDir = path.join(rootDir, "artifacts/tc-reference");
  const require = createRequire(path.join(appDir, "package.json"));
  const viteCLI = path.join(
    path.dirname(require.resolve("vite/package.json")),
    "bin/vite.js",
  );
  // Keep a checkout cwd in /proc while Vite receives its explicit app root.
  process.chdir(rootDir);
  process.argv = [
    process.execPath,
    viteCLI,
    appDir,
    "--config",
    path.join(appDir, "vite.config.ts"),
    "--host",
    "127.0.0.1",
    "--port",
    String(port),
    "--strictPort",
  ];
  await import(pathToFileURL(viteCLI).href);
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    await main();
  } catch (error) {
    console.error(
      `Local app launcher failed: ${error.code || "startup error"}`,
    );
    process.exitCode = 1;
  }
}

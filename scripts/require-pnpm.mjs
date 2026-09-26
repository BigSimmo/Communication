import { rmSync } from "node:fs";

for (const lockfile of ["package-lock.json", "yarn.lock"]) {
  rmSync(lockfile, { force: true });
}

const userAgent = process.env.npm_config_user_agent ?? "";
const execPath = process.env.npm_execpath ?? "";

const isPnpm =
  userAgent.startsWith("pnpm/") ||
  /[\\/]pnpm(?:\.c?js|\.cmd)?$/i.test(execPath);
const isKnownOtherPackageManager =
  /^(npm|yarn)\//.test(userAgent) ||
  /[\\/](?:npm-cli|yarn)(?:\.c?js|\.cmd)?$/i.test(execPath);

if (!isPnpm && isKnownOtherPackageManager) {
  console.error("Use pnpm instead");
  process.exit(1);
}

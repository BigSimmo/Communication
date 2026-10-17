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

// verifyDepsBeforeRun (pnpm-workspace.yaml) needs pnpm 10.15.0+; reject older clients.
const pnpmVersion = /^pnpm\/(\d+)\.(\d+)\./.exec(userAgent);
if (pnpmVersion) {
  const [major, minor] = [Number(pnpmVersion[1]), Number(pnpmVersion[2])];
  if (major < 10 || (major === 10 && minor < 15)) {
    console.error("Use pnpm 10.15.0 or newer (see package.json engines.pnpm)");
    process.exit(1);
  }
}

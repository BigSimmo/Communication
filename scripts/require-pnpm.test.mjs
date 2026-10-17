import test from "node:test";
import assert from "node:assert/strict";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  writeFileSync,
  readFileSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const guard = fileURLToPath(new URL("./require-pnpm.mjs", import.meta.url));
for (const [label, ua, executable, status] of [
  ["npm", "npm/11", "", 1],
  ["yarn", "yarn/1", "", 1],
  ["npm executable", "", "C:/bin/npm-cli.js", 1],
  ["yarn executable", "", "C:/bin/yarn.cjs", 1],
  ["pnpm", "pnpm/10.15.0", "", 0],
  ["pnpm 11", "pnpm/11.1.1", "", 0],
  ["pnpm 9", "pnpm/9.15.0", "", 1],
  ["pnpm 10.14", "pnpm/10.14.0", "", 1],
  ["pnpm executable", "", "C:/bin/pnpm.cjs", 0],
  ["unknown", "", "", 0],
])
  test(`${label} preserves both existing lockfiles`, () => {
    const root = mkdtempSync(join(tmpdir(), "communication-guard-fixture-"));
    try {
      const contents = Buffer.from("owned fixture\r\n");
      for (const name of ["package-lock.json", "yarn.lock"])
        writeFileSync(join(root, name), contents);
      const result = spawnSync(process.execPath, [guard], {
        cwd: root,
        env: {
          ...process.env,
          npm_config_user_agent: ua,
          npm_execpath: executable,
        },
        encoding: "utf8",
      });
      assert.equal(result.status, status, result.stderr);
      for (const name of ["package-lock.json", "yarn.lock"])
        assert.deepEqual(readFileSync(join(root, name)), contents);
    } finally {
      assert.equal(
        root.startsWith(join(tmpdir(), "communication-guard-fixture-")),
        true,
      );
      rmSync(root, { recursive: true });
    }
  });

test("outer pnpm run applies the workspace policy without installing stale dependencies", (t) => {
  const cli =
    process.env.COMMUNICATION_TEST_PNPM_CLI || process.env.npm_execpath || "";
  if (!/[/\\]pnpm\.[cm]?js$/i.test(cli) || !existsSync(cli)) {
    t.skip(
      "Set COMMUNICATION_TEST_PNPM_CLI or run after an explicit pnpm dependency install to verify the real CLI.",
    );
    return;
  }
  const manifest = JSON.parse(
    readFileSync(resolve(dirname(cli), "../package.json"), "utf8"),
  );
  assert.equal(manifest.name, "pnpm");
  const root = mkdtempSync(join(tmpdir(), "communication-pnpm-policy-"));
  t.after(() =>
    rmSync(root, {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 100,
    }),
  );
  const workspace = readFileSync(
    new URL("../pnpm-workspace.yaml", import.meta.url),
    "utf8",
  );
  const files = {
    "pnpm-workspace.yaml": workspace,
    "package.json": JSON.stringify({
      name: "communication-synthetic-policy-fixture",
      version: "1.0.0",
      private: true,
      packageManager: `pnpm@${manifest.version}`,
      dependencies: { "synthetic-must-not-install": "0.0.0" },
      scripts: {
        "agent-rules:check": "node probe.mjs",
        preinstall: "node install-probe.mjs",
      },
    }),
    "pnpm-lock.yaml":
      "lockfileVersion: '9.0'\nsettings:\n  autoInstallPeers: false\nimporters:\n  .:\n    dependencies:\n      synthetic-must-not-install:\n        specifier: 0.0.0\n        version: 0.0.0\npackages:\n  synthetic-must-not-install@0.0.0:\n    resolution: {integrity: sha512-Zg==}\nsnapshots:\n  synthetic-must-not-install@0.0.0: {}\n",
    "probe.mjs":
      'import { writeFileSync } from "node:fs"; writeFileSync("script-ran", "unexpected");\n',
    "install-probe.mjs":
      'import { writeFileSync } from "node:fs"; writeFileSync("install-ran", "unexpected");\n',
  };
  for (const [name, contents] of Object.entries(files))
    writeFileSync(join(root, name), contents);
  mkdirSync(join(root, "node_modules"));
  const result = spawnSync(
    process.execPath,
    [cli, "run", "agent-rules:check"],
    {
      cwd: root,
      timeout: 15_000,
      encoding: "utf8",
      // The workspace is the policy under test. No inherited pnpm/npm override,
      // project credentials, user config or real dependency tree enters this child.
      env: {
        PATH: process.env.PATH,
        SystemRoot: process.env.SystemRoot,
        WINDIR: process.env.WINDIR,
        NODE_ENV: "test",
        HOME: root,
        USERPROFILE: root,
        XDG_CACHE_HOME: join(root, ".cache"),
        XDG_STATE_HOME: join(root, ".state"),
        XDG_DATA_HOME: join(root, ".data"),
        npm_config_manage_package_manager_versions: "false",
        pnpm_config_manage_package_manager_versions: "false",
        npm_config_offline: "true",
        pnpm_config_offline: "true",
        npm_config_registry: "https://registry.synthetic.invalid",
        pnpm_config_registry: "https://registry.synthetic.invalid",
      },
    },
  );
  assert.equal(result.error, undefined);
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(
    result.stdout + result.stderr,
    /ERR_PNPM_VERIFY_DEPS_BEFORE_RUN/,
  );
  assert.equal(existsSync(join(root, "script-ran")), false);
  assert.equal(existsSync(join(root, "install-ran")), false);
  assert.deepEqual(readdirSync(join(root, "node_modules")), []);
  for (const [name, contents] of Object.entries(files))
    assert.equal(readFileSync(join(root, name), "utf8"), contents);
});

test("manifest requires a pnpm client that honours verifyDepsBeforeRun", () => {
  const manifest = JSON.parse(
    readFileSync(new URL("../package.json", import.meta.url), "utf8"),
  );
  assert.equal(manifest.engines.pnpm, ">=10.15.0");
  const pinned = /^pnpm@(\d+)\.(\d+)\.\d+/.exec(manifest.packageManager);
  assert.ok(pinned, "packageManager must pin pnpm");
  const [major, minor] = [Number(pinned[1]), Number(pinned[2])];
  assert.ok(major > 10 || (major === 10 && minor >= 15));
  const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
  assert.doesNotMatch(readme, /pnpm 9\+/);
});

import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const guard = fileURLToPath(new URL("./require-pnpm.mjs", import.meta.url));
for (const [label, ua, executable, status] of [
  ["npm", "npm/11", "", 1],
  ["yarn", "yarn/1", "", 1],
  ["npm executable", "", "C:/bin/npm-cli.js", 1],
  ["yarn executable", "", "C:/bin/yarn.cjs", 1],
  ["pnpm", "pnpm/10.15.0", "", 0],
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

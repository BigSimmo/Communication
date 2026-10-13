import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

test("Node declarations match the minimum supported and CI runtime", () => {
  const manifest = JSON.parse(read("package.json"));
  const supported = Number(manifest.engines.node.match(/\d+/)?.[0]);
  const ci = Number(
    read(".github/workflows/code-review.yml").match(
      /node-version:\s*(\d+)/,
    )?.[1],
  );
  const declared = Number(
    read("pnpm-workspace.yaml").match(/"@types\/node":\s*[~^]?(\d+)/)?.[1],
  );
  const locked = Number(
    read("pnpm-lock.yaml").match(
      /'@types\/node':\s*\n\s*specifier:[^\n]+\n\s*version:\s*(\d+)/,
    )?.[1],
  );
  assert.ok(
    Number.isInteger(supported),
    "Minimum Node runtime must be explicit",
  );
  assert.equal(ci, supported, "CI must exercise the minimum supported runtime");
  assert.equal(declared, supported, "Catalog must not expose newer Node APIs");
  assert.equal(locked, supported, "Locked declarations must match the runtime");
});

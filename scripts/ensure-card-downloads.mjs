// Regenerate card downloads only when their inputs change. Generation takes
// ~11s, and dev, test and build all need the files, so repeat runs skip it
// when the card sources and generators hash to the same value as last time.
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inputs = [
  path.join(root, "scripts/src"),
  path.join(root, "artifacts/tc-reference/src/lib"),
];
// Any one generated file stands in for the set; a clean checkout has none.
const sample = path.join(
  root,
  "artifacts/tc-reference/public/cards/TC002/TC002_Reference.pdf",
);
const stamp = path.join(root, "node_modules/.cache/tc-card-downloads.hash");

function hashTree(hash, dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name),
  )) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) hashTree(hash, file);
    else if (/\.(ts|tsx)$/.test(entry.name)) {
      hash.update(path.relative(root, file));
      hash.update(readFileSync(file));
    }
  }
}

const hash = createHash("sha256");
for (const dir of inputs) hashTree(hash, dir);
const digest = hash.digest("hex");

if (
  process.env.FORCE_CARD_DOWNLOADS !== "1" &&
  existsSync(sample) &&
  existsSync(stamp) &&
  readFileSync(stamp, "utf8") === digest
) {
  console.log("Card downloads up to date, skipping generation.");
  process.exit(0);
}

const result = spawnSync(
  "pnpm",
  ["--filter", "@workspace/scripts", "run", "generate:card-downloads"],
  { cwd: root, stdio: "inherit" },
);
if (result.status !== 0) process.exit(result.status ?? 1);

mkdirSync(path.dirname(stamp), { recursive: true });
writeFileSync(stamp, digest);

// Fails when a key production chunk grows past its gzip budget. Run after
// `pnpm run build`. Budgets sit about 10% above the sizes when they were set,
// so ordinary edits pass and a regression (a new heavy import in the entry,
// a dependency landing in vendor, the text index doubling) stops CI.
// Raising a budget is fine when the growth is intended: say why in the PR.
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const KB = 1024;
// gzip -9 bytes (KiB), about 10% above the build of 2026-11-21 after the
// design round: entry 34.3, vendor 59.4, main CSS 12.7, card text index 178.5.
export const BUDGETS = {
  "entry JS": 38 * KB,
  "vendor JS": 66 * KB,
  "main CSS": 14 * KB,
  "card-text-data JS": 196 * KB,
};

const root = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "dist",
  "public",
);

/** The budgeted files, found through Vite's build manifest. */
export function budgetedFiles(manifest) {
  const entry = manifest["index.html"];
  if (!entry?.file) throw new Error("manifest has no index.html entry");
  const vendor = Object.values(manifest).find((chunk) =>
    /^assets\/vendor-[^/]+\.js$/.test(chunk.file),
  );
  const textIndex = manifest["virtual:card-text-index"];
  const css = entry.css?.[0];
  const files = {
    "entry JS": entry.file,
    "vendor JS": vendor?.file,
    "main CSS": css,
    "card-text-data JS": textIndex?.file,
  };
  for (const [label, file] of Object.entries(files)) {
    if (!file) throw new Error(`build manifest has no ${label} chunk`);
  }
  return files;
}

export function checkBudgets(readFile, manifest) {
  const rows = [];
  for (const [label, file] of Object.entries(budgetedFiles(manifest))) {
    const gzip = gzipSync(readFile(file), { level: 9 }).length;
    rows.push({ label, file, gzip, budget: BUDGETS[label] });
  }
  return rows;
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  const manifest = JSON.parse(
    readFileSync(path.join(root, ".vite", "manifest.json"), "utf8"),
  );
  const rows = checkBudgets(
    (file) => readFileSync(path.join(root, file)),
    manifest,
  );
  let failed = false;
  for (const { label, file, gzip, budget } of rows) {
    const over = gzip > budget;
    failed ||= over;
    const pct = ((gzip / budget) * 100).toFixed(0);
    console.log(
      `${over ? "OVER" : "ok  "} ${label.padEnd(18)} ${(gzip / KB).toFixed(1).padStart(6)} KB gz / ${(budget / KB).toFixed(1)} KB (${pct}%)  ${file}`,
    );
  }
  if (failed) {
    console.error(
      "\nBundle budget exceeded. Trim the growth, or raise the budget in scripts/check-bundle-budget.mjs and explain why in the PR.",
    );
    process.exit(1);
  }
}

import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, "..", "..");
const COMMITTED_DIR = process.env.CARD_DOWNLOADS_COMMITTED_DIR
  ? path.resolve(process.env.CARD_DOWNLOADS_COMMITTED_DIR)
  : path.join(ROOT, "artifacts", "tc-reference", "public", "cards");
const GENERATED_NAME =
  /^TC\d{3}_(?:Reference|Detailed_Guide|Quick_Card)\.pdf$|^TC\d{3}_(?:Phrase_Bank|Anki_Flashcards)\.csv$/;

function generatedFiles(baseDir: string): string[] {
  const files: string[] = [];
  const visit = (directory: string) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        visit(absolutePath);
        continue;
      }

      const relativePath = path
        .relative(baseDir, absolutePath)
        .replaceAll(path.sep, "/");
      if (
        !relativePath.startsWith("TC001/") &&
        GENERATED_NAME.test(entry.name)
      ) {
        files.push(relativePath);
      }
    }
  };

  visit(baseDir);
  return files.sort();
}

function printGroup(label: string, paths: string[]) {
  if (paths.length === 0) return;
  console.error(`${label}: ${paths.length}`);
  for (const file of paths.slice(0, 20)) console.error(`  ${file}`);
  if (paths.length > 20) console.error(`  ... and ${paths.length - 20} more`);
}

const generatedDir = mkdtempSync(path.join(tmpdir(), "tc-card-downloads-"));
const previousOutputDir = process.env.CARD_DOWNLOADS_OUT_DIR;
const originalLog = console.log;

try {
  process.env.CARD_DOWNLOADS_OUT_DIR = generatedDir;
  console.log = () => undefined;
  for (const generator of [
    "generate-card-pdfs.ts",
    "generate-card-csvs.ts",
    "generate-card-guides.ts",
    "generate-card-quickcards.ts",
  ]) {
    await import(pathToFileURL(path.join(SCRIPT_DIR, generator)).href);
  }
  console.log = originalLog;

  const expected = generatedFiles(generatedDir);
  const committed = generatedFiles(COMMITTED_DIR);
  const expectedSet = new Set(expected);
  const committedSet = new Set(committed);
  const missing = expected.filter((file) => !committedSet.has(file));
  const unexpected = committed.filter((file) => !expectedSet.has(file));
  const stale = expected.filter(
    (file) =>
      committedSet.has(file) &&
      !readFileSync(path.join(generatedDir, file)).equals(
        readFileSync(path.join(COMMITTED_DIR, file)),
      ),
  );

  if (missing.length || unexpected.length || stale.length) {
    console.error("Generated card downloads are not current.");
    printGroup("Missing", missing);
    printGroup("Unexpected", unexpected);
    printGroup("Stale", stale);
    console.error(
      "Run: pnpm --filter @workspace/scripts run generate:card-downloads",
    );
    process.exitCode = 1;
  } else {
    console.log(
      `Verified ${expected.length} generated card downloads byte-for-byte.`,
    );
  }
} finally {
  console.log = originalLog;
  if (previousOutputDir === undefined)
    delete process.env.CARD_DOWNLOADS_OUT_DIR;
  else process.env.CARD_DOWNLOADS_OUT_DIR = previousOutputDir;
  rmSync(generatedDir, { recursive: true, force: true });
}

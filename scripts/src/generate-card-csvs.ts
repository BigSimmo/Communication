/**
 * Generates practice-tool CSVs for every technique card that doesn't already
 * ship curated ones (i.e. all cards except TC001):
 *
 *   <id>_Phrase_Bank.csv      — category,phrase (category = phrase-group label)
 *   <id>_Anki_Flashcards.csv  — front,back study deck derived from the card
 *
 * Output: artifacts/tc-reference/public/cards/<id>/
 * Run:    pnpm --filter @workspace/scripts run generate:card-csvs
 *
 * Content derives entirely from CARD_DATA in
 * artifacts/tc-reference/src/lib/cards.ts, so output is deterministic —
 * run generate:card-downloads after content edits.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const OUT_BASE = process.env.CARD_DOWNLOADS_OUT_DIR
  ? path.resolve(process.env.CARD_DOWNLOADS_OUT_DIR)
  : path.join(ROOT, "artifacts", "tc-reference", "public", "cards");

// Minimal shapes of the tc-reference card data this script consumes.
interface CardData {
  overview: { coreFormula: string[]; minimumViableMove: string };
  phraseBank: { label: string; phrases: string[] }[];
  ladder: { weak: string; better: string; best: string }[];
  calibration: { working: string[] };
  notFor: string[];
  fieldTip?: { headline: string };
  commonMistakes?: { mistake: string; soundsLike: string; better: string }[];
  bestRecoveryLine?: string;
}

const cardsModule = (await import(
  pathToFileURL(path.join(ROOT, "artifacts", "tc-reference", "src", "lib", "cards.ts")).href
)) as { CARD_DATA: Record<string, CardData> };
const { CARD_DATA } = cardsModule;

// RFC 4180 field escaping: quote when the value contains a comma, quote, or
// newline; double any embedded quotes.
function csvField(value: string): string {
  return /[",\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
}

function csv(rows: string[][]): string {
  return rows.map((r) => r.map(csvField).join(",")).join("\n") + "\n";
}

function phraseBankCsv(card: CardData): string {
  const rows: string[][] = [["category", "phrase"]];
  for (const group of card.phraseBank) {
    for (const phrase of group.phrases) rows.push([group.label, phrase]);
  }
  return csv(rows);
}

function ankiCsv(cardId: string, card: CardData): string {
  const rows: string[][] = [["front", "back"]];
  const add = (front: string, back: string) => rows.push([`${cardId}: ${front}`, back]);

  add("What is the minimum viable move?", card.overview.minimumViableMove);
  add("What is the core sequence?", card.overview.coreFormula.join(" -> ") + ".");
  if (card.fieldTip) add("What is the field tip?", card.fieldTip.headline);
  for (const row of card.ladder.slice(0, 3)) {
    add(`What is the strong version of: ${row.weak}?`, row.best);
  }
  for (const m of (card.commonMistakes ?? []).slice(0, 3)) {
    add(`What is better than: ${m.soundsLike}?`, m.better);
  }
  add("What are signs it is working?", card.calibration.working.join(" "));
  add("When should you avoid this technique?", card.notFor.slice(0, 2).join(" "));
  if (card.bestRecoveryLine) add("What is the best recovery line?", card.bestRecoveryLine);
  return csv(rows);
}

let written = 0;
for (const cardId of Object.keys(CARD_DATA).sort()) {
  if (cardId === "TC001") continue; // TC001 ships curated CSVs
  const card = CARD_DATA[cardId];
  const dir = path.join(OUT_BASE, cardId);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, `${cardId}_Phrase_Bank.csv`), phraseBankCsv(card));
  writeFileSync(path.join(dir, `${cardId}_Anki_Flashcards.csv`), ankiCsv(cardId, card));
  written += 2;
}
console.log(`generated ${written} CSVs into ${OUT_BASE}`);

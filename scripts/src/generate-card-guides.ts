/**
 * Generates a full "Detailed Guide" PDF for every technique card that doesn't
 * already ship a designed guide (i.e. all cards except TC001).
 *
 * Output: artifacts/tc-reference/public/cards/<id>/<id>_Detailed_Guide.pdf
 * Run:    pnpm --filter @workspace/scripts run generate:card-guides
 *
 * Unlike the compact <id>_Reference.pdf, this guide renders the full enriched
 * content — why it works, what it is (and isn't), the influence payoff, the
 * step-by-step method, field tips, common mistakes, recovery lines, technique
 * chains and related techniques — none of which the reference sheet includes.
 * It mirrors TC001's designed Detailed Guide for the other 30 cards.
 *
 * Content is rendered straight from CARD_DATA in
 * artifacts/tc-reference/src/lib/cards.ts, so output is deterministic —
 * re-run after content edits (the tc-reference build does this automatically).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from "pdf-lib";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const OUT_BASE = path.join(ROOT, "artifacts", "tc-reference", "public", "cards");

// Minimal shapes of the tc-reference card data this script consumes.
// Loaded dynamically (tsx resolves the .ts modules at runtime) so the
// scripts package tsconfig doesn't need cross-package rootDir access.
interface CardData {
  overview: {
    coreFormula: string[];
    minimumViableMove: string;
    impact: string;
    difficulty: string;
    misuse: string;
    bestFor: string[];
  };
  phraseBank: { label: string; tag: string; phrases: string[] }[];
  ladder: { weak: string; better: string; best: string }[];
  decisionTree: { condition: string; action: string; phrase: string }[];
  scenarios: { situation: string; move: string; phrase: string }[];
  calibration: { working: string[]; adjust: string[] };
  drill: { day: string; title: string; task: string }[];
  checklist: string[];
  whyItWorks: string;
  example: { without: string[]; with: string[]; note?: string };
  notFor: string[];
  whatItIsNot?: string[];
  influencePayoff?: { feeling: string; principle: string; gains: string[]; whyMostFail: string[] };
  fieldTip?: { headline: string; body: string; example?: string; dont?: string; do?: string };
  method?: { step: string; title: string; body: string; examples?: { label: string; text: string }[] }[];
  commonMistakes?: { mistake: string; soundsLike: string; better: string }[];
  recoveryPhrases?: string[];
  bestRecoveryLine?: string;
  chains?: { label: string; sequence: string; example: string[] }[];
  relatedTechniques?: { id: string; reason: string }[];
}

const cardsModule = (await import(
  pathToFileURL(path.join(ROOT, "artifacts", "tc-reference", "src", "lib", "cards.ts")).href
)) as { CARD_DATA: Record<string, CardData> };
const dataModule = (await import(
  pathToFileURL(path.join(ROOT, "artifacts", "tc-reference", "src", "lib", "data.ts")).href
)) as { LIBRARY_CATEGORIES: Record<string, { id: string; title: string }[]> };

const { CARD_DATA } = cardsModule;
const { LIBRARY_CATEGORIES } = dataModule;

// ── Palette (matches the app) ────────────────────────────────────────────────
const NAVY = rgb(0x0f / 255, 0x17 / 255, 0x24 / 255);
const AMBER = rgb(0xf5 / 255, 0x9e / 255, 0x0b / 255);
const GREY = rgb(0.42, 0.45, 0.5);
const LIGHT = rgb(0.94, 0.95, 0.96);

const PAGE_W = 595.28; // A4 portrait
const PAGE_H = 841.89;
const MARGIN = 48;
const CONTENT_W = PAGE_W - MARGIN * 2;

// WinAnsi cannot encode a handful of characters used in card copy
function sanitize(text: string): string {
  return text
    .replaceAll("→", "->") // →
    .replaceAll("✓", "-") // ✓
    .replace(/[^\x20-\x7E -ÿ–—‘’“”]/g, "?");
}

function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = sanitize(text).split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

interface Writer {
  page: PDFPage;
  y: number;
}

async function buildPdf(cardId: string, title: string, category: string) {
  const card = CARD_DATA[cardId];
  const doc = await PDFDocument.create();
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const oblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  doc.setTitle(`${cardId} — ${title} — Detailed Guide`);
  doc.setSubject(`TC Reference Tool — ${category}`);
  // Fixed dates keep the output byte-for-byte deterministic, so re-running
  // the generator only dirties git when card content actually changed
  const FIXED_DATE = new Date("2026-01-01T00:00:00Z");
  doc.setCreationDate(FIXED_DATE);
  doc.setModificationDate(FIXED_DATE);

  const w: Writer = { page: doc.addPage([PAGE_W, PAGE_H]), y: PAGE_H };

  const newPage = () => {
    w.page = doc.addPage([PAGE_W, PAGE_H]);
    w.y = PAGE_H - MARGIN;
  };

  const ensure = (needed: number) => {
    if (w.y - needed < MARGIN) newPage();
  };

  const drawText = (
    text: string,
    opts: { font?: PDFFont; size?: number; color?: ReturnType<typeof rgb>; indent?: number; gapAfter?: number } = {}
  ) => {
    const { font = regular, size = 9.5, color = NAVY, indent = 0, gapAfter = 3 } = opts;
    const lineHeight = size * 1.35;
    const lines = wrap(text, font, size, CONTENT_W - indent);
    for (const line of lines) {
      ensure(lineHeight);
      w.y -= lineHeight;
      w.page.drawText(line, { x: MARGIN + indent, y: w.y, size, font, color });
    }
    w.y -= gapAfter;
  };

  const sectionHeading = (label: string) => {
    ensure(34);
    w.y -= 22;
    w.page.drawRectangle({ x: MARGIN, y: w.y - 2, width: 3, height: 12, color: AMBER });
    w.page.drawText(sanitize(label.toUpperCase()), {
      x: MARGIN + 9,
      y: w.y,
      size: 10,
      font: bold,
      color: NAVY,
    });
    w.y -= 10;
  };

  // A small bold sub-heading inside a section (method steps, chain labels…)
  const subHeading = (text: string) => {
    ensure(18);
    drawText(text, { font: bold, size: 9.5, gapAfter: 1 });
  };

  const bullet = (text: string, opts: { font?: PDFFont; size?: number; indent?: number } = {}) => {
    const { font = regular, size = 9.5, indent = 0 } = opts;
    const lineHeight = size * 1.35;
    ensure(lineHeight);
    const lines = wrap(text, font, size, CONTENT_W - 14 - indent);
    lines.forEach((line, i) => {
      ensure(lineHeight);
      w.y -= lineHeight;
      if (i === 0) w.page.drawCircle({ x: MARGIN + 4 + indent, y: w.y + size * 0.32, size: 1.4, color: AMBER });
      w.page.drawText(line, { x: MARGIN + 14 + indent, y: w.y, size, font, color: NAVY });
    });
    w.y -= 2.5;
  };

  // ── Header band ──
  w.page.drawRectangle({ x: 0, y: PAGE_H - 96, width: PAGE_W, height: 96, color: NAVY });
  w.page.drawRectangle({ x: MARGIN, y: PAGE_H - 46, width: 46, height: 18, color: AMBER });
  w.page.drawText(cardId, { x: MARGIN + 5, y: PAGE_H - 41, size: 10, font: bold, color: NAVY });
  w.page.drawText(sanitize(title), {
    x: MARGIN + 56,
    y: PAGE_H - 42,
    size: 17,
    font: bold,
    color: rgb(1, 1, 1),
  });
  w.page.drawText(sanitize(`${category}  ·  Detailed Guide`), {
    x: MARGIN + 56,
    y: PAGE_H - 60,
    size: 8.5,
    font: regular,
    color: rgb(0.72, 0.76, 0.82),
  });
  w.page.drawText(
    sanitize(`Impact: ${card.overview.impact}   Difficulty: ${card.overview.difficulty}   Misuse risk: ${card.overview.misuse}`),
    { x: MARGIN, y: PAGE_H - 84, size: 8.5, font: regular, color: AMBER }
  );
  w.y = PAGE_H - 96 - 8;

  // ── Why it works ──
  sectionHeading("Why it works");
  drawText(card.whyItWorks, { size: 10 });

  // ── What it is (and isn't) ──
  if (card.whatItIsNot?.length) {
    sectionHeading("What it is (and isn't)");
    for (const item of card.whatItIsNot) bullet(item);
  }

  // ── The payoff ──
  if (card.influencePayoff) {
    const p = card.influencePayoff;
    sectionHeading("The payoff");
    drawText(`How it lands: ${p.feeling}`, { size: 9.5, gapAfter: 2 });
    drawText(`Principle: ${p.principle}`, { size: 9.5, gapAfter: 4 });
    if (p.gains.length) {
      subHeading("What you gain");
      for (const g of p.gains) bullet(g, { size: 9 });
    }
    if (p.whyMostFail.length) {
      w.y -= 2;
      subHeading("Why most people fail at it");
      for (const f of p.whyMostFail) bullet(f, { size: 9 });
    }
  }

  // ── Core formula ──
  sectionHeading("Core formula");
  drawText(card.overview.coreFormula.join("  ->  "), { font: bold, size: 10.5 });

  sectionHeading("Minimum viable move");
  drawText(card.overview.minimumViableMove, { size: 10 });

  sectionHeading("Best for");
  for (const item of card.overview.bestFor) bullet(item);

  // ── Method, step by step ──
  if (card.method?.length) {
    sectionHeading("Method, step by step");
    card.method.forEach((m, i) => {
      ensure(40);
      subHeading(`${i + 1}. ${m.step} — ${m.title}`);
      drawText(m.body, { size: 9, gapAfter: 2 });
      for (const ex of m.examples ?? []) {
        drawText(`${ex.label}: ${ex.text}`, { font: oblique, size: 8.5, indent: 14, gapAfter: 1 });
      }
      w.y -= 4;
    });
  }

  // ── Field tip ──
  if (card.fieldTip) {
    const t = card.fieldTip;
    sectionHeading("Field tip");
    drawText(t.headline, { font: bold, size: 9.5, gapAfter: 2 });
    drawText(t.body, { size: 9 });
    if (t.example) drawText(`Situation: ${t.example}`, { font: oblique, size: 9, gapAfter: 2 });
    if (t.dont) drawText(`Don't: ${t.dont}`, { size: 9, indent: 14, gapAfter: 1 });
    if (t.do) drawText(`Do: ${t.do}`, { font: bold, size: 9, indent: 14 });
  }

  // ── Phrase bank ──
  sectionHeading("Phrase bank");
  for (const group of card.phraseBank) {
    ensure(30);
    drawText(`${group.label}  ·  ${group.tag}`, { font: bold, size: 9.5, gapAfter: 1 });
    for (const phrase of group.phrases) bullet(`"${phrase}"`, { size: 9 });
    w.y -= 4;
  }

  sectionHeading("Weak -> Better -> Best");
  card.ladder.forEach((row, i) => {
    ensure(44);
    drawText(`${i + 1}. Weak: ${row.weak}`, { size: 9, gapAfter: 1 });
    drawText(`Better: ${row.better}`, { size: 9, indent: 14, gapAfter: 1 });
    drawText(`Best: ${row.best}`, { font: bold, size: 9, indent: 14, gapAfter: 5 });
  });

  sectionHeading("Decision tree");
  for (const node of card.decisionTree) {
    ensure(34);
    drawText(`If ${node.condition}`, { font: bold, size: 9, gapAfter: 1 });
    drawText(node.action, { size: 9, indent: 14, gapAfter: 1 });
    if (node.phrase) drawText(`"${node.phrase}"`, { font: oblique, size: 9, indent: 14, gapAfter: 5 });
    else w.y -= 4;
  }

  sectionHeading("Scenarios");
  for (const s of card.scenarios) {
    ensure(34);
    drawText(s.situation, { font: bold, size: 9, gapAfter: 1 });
    drawText(`${s.move} — "${s.phrase}"`, { size: 9, indent: 14, gapAfter: 5 });
  }

  // ── Worked example ──
  sectionHeading("Worked example");
  subHeading("Without the technique");
  for (const line of card.example.without) drawText(line, { size: 9, indent: 14, gapAfter: 1 });
  w.y -= 4;
  subHeading("With the technique");
  for (const line of card.example.with) drawText(line, { size: 9, indent: 14, gapAfter: 1 });
  if (card.example.note) {
    w.y -= 2;
    drawText(card.example.note, { font: oblique, size: 9 });
  }

  // ── Common mistakes ──
  if (card.commonMistakes?.length) {
    sectionHeading("Common mistakes");
    for (const m of card.commonMistakes) {
      ensure(40);
      drawText(m.mistake, { font: bold, size: 9, gapAfter: 1 });
      drawText(`Sounds like: ${m.soundsLike}`, { font: oblique, size: 9, indent: 14, gapAfter: 1 });
      drawText(`Better: ${m.better}`, { size: 9, indent: 14, gapAfter: 5 });
    }
  }

  // ── Reading the room ──
  sectionHeading("Reading the room");
  subHeading("Signs it is working");
  for (const item of card.calibration.working) bullet(item, { size: 9 });
  w.y -= 2;
  subHeading("Signs to adjust");
  for (const item of card.calibration.adjust) bullet(item, { size: 9 });

  sectionHeading("When not to use");
  for (const item of card.notFor) bullet(item, { size: 9 });

  // ── Recovery lines ──
  if (card.recoveryPhrases?.length || card.bestRecoveryLine) {
    sectionHeading("Recovery lines");
    if (card.bestRecoveryLine) drawText(`Best line: ${card.bestRecoveryLine}`, { font: bold, size: 9, gapAfter: 4 });
    for (const line of card.recoveryPhrases ?? []) bullet(`"${line}"`, { size: 9 });
  }

  // ── Technique chains ──
  if (card.chains?.length) {
    sectionHeading("Technique chains");
    for (const chain of card.chains) {
      ensure(40);
      subHeading(chain.label);
      drawText(chain.sequence, { font: oblique, size: 9, gapAfter: 2 });
      for (const line of chain.example) drawText(line, { size: 9, indent: 14, gapAfter: 1 });
      w.y -= 4;
    }
  }

  // ── Related techniques ──
  if (card.relatedTechniques?.length) {
    sectionHeading("Related techniques");
    for (const r of card.relatedTechniques) {
      ensure(24);
      const relTitle = CARD_META[r.id]?.title;
      drawText(relTitle ? `${r.id} — ${relTitle}` : r.id, { font: bold, size: 9, gapAfter: 1 });
      drawText(r.reason, { size: 9, indent: 14, gapAfter: 5 });
    }
  }

  sectionHeading("7-day practice drill");
  for (const d of card.drill) {
    ensure(24);
    drawText(`${d.day} — ${d.title}`, { font: bold, size: 9, gapAfter: 1 });
    drawText(d.task, { size: 9, indent: 14, gapAfter: 4 });
  }

  sectionHeading("After-action checklist");
  for (const item of card.checklist) bullet(item, { size: 9 });

  // Footer on every page
  const pages = doc.getPages();
  pages.forEach((page, i) => {
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: 26, color: LIGHT });
    page.drawText(sanitize(`${cardId} · ${title} · Detailed Guide`), {
      x: MARGIN,
      y: 9,
      size: 7.5,
      font: regular,
      color: GREY,
    });
    page.drawText(`Page ${i + 1} of ${pages.length}`, {
      x: PAGE_W - MARGIN - 60,
      y: 9,
      size: 7.5,
      font: regular,
      color: GREY,
    });
  });

  return doc.save();
}

const CARD_META: Record<string, { title: string; category: string }> = {};
for (const [category, cards] of Object.entries(LIBRARY_CATEGORIES)) {
  for (const c of cards) CARD_META[c.id] = { title: c.title, category };
}

let generated = 0;
for (const cardId of Object.keys(CARD_DATA).sort()) {
  if (cardId === "TC001") continue; // ships a designed Detailed Guide already
  const meta = CARD_META[cardId];
  if (!meta) {
    console.warn(`WARNING: ${cardId} has no LIBRARY_CATEGORIES entry — using id as title`);
  }
  const { title, category } = meta ?? { title: cardId, category: "" };
  const bytes = await buildPdf(cardId, title, category);
  const dir = path.join(OUT_BASE, cardId);
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${cardId}_Detailed_Guide.pdf`);
  writeFileSync(file, bytes);
  generated++;
  console.log(`${cardId} -> ${path.relative(ROOT, file)} (${(bytes.length / 1024).toFixed(1)} kB)`);
}
console.log(`Generated ${generated} detailed guide PDFs.`);

/**
 * Generates a compact one-page "Quick Card" PDF for every technique card that
 * doesn't already ship a designed card (i.e. all cards except TC001).
 *
 * Output: artifacts/tc-reference/public/cards/<id>/<id>_Quick_Card.pdf
 * Run:    pnpm --filter @workspace/scripts run generate:card-quickcards
 *
 * This is the glance-and-go format — a single designed page you can print, pin
 * to a monitor or screenshot to your phone: the core move, the one thing to do,
 * a handful of signature lines, and what to avoid. It complements the dense
 * <id>_Reference.pdf and the full multi-page <id>_Detailed_Guide.pdf, mirroring
 * TC001's designed one-card format for the other 30 cards.
 *
 * Content is curated straight from CARD_DATA in
 * artifacts/tc-reference/src/lib/cards.ts, so output is deterministic —
 * run generate:card-downloads after content edits.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from "pdf-lib";

const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
);
const OUT_BASE = process.env.CARD_DOWNLOADS_OUT_DIR
  ? path.resolve(process.env.CARD_DOWNLOADS_OUT_DIR)
  : path.join(ROOT, "artifacts", "tc-reference", "public", "cards");

interface CardData {
  overview: {
    coreFormula: string[];
    minimumViableMove: string;
    impact: string;
    difficulty: string;
    misuse: string;
  };
  phraseBank: { label: string; tone: string; phrases: string[] }[];
  notFor: string[];
  fieldTip?: { headline: string };
}

const cardsModule = (await import(
  pathToFileURL(
    path.join(ROOT, "artifacts", "tc-reference", "src", "lib", "cards.ts"),
  ).href
)) as { CARD_DATA: Record<string, CardData> };
const dataModule = (await import(
  pathToFileURL(
    path.join(ROOT, "artifacts", "tc-reference", "src", "lib", "data.ts"),
  ).href
)) as { LIBRARY_CATEGORIES: Record<string, { id: string; title: string }[]> };

const { CARD_DATA } = cardsModule;
const { LIBRARY_CATEGORIES } = dataModule;

// ── Palette (matches the app) ────────────────────────────────────────────────
const NAVY = rgb(0x0f / 255, 0x17 / 255, 0x24 / 255);
const AMBER = rgb(0xf5 / 255, 0x9e / 255, 0x0b / 255);
const AMBER_DEEP = rgb(0xb4 / 255, 0x53 / 255, 0x09 / 255);
const INK = rgb(0.12, 0.15, 0.19);
const GREY = rgb(0.42, 0.45, 0.5);
const HAIR = rgb(0.88, 0.9, 0.92);
const TINT = rgb(0.985, 0.965, 0.92); // faint amber wash

const PAGE_W = 595.28; // A4 portrait
const PAGE_H = 841.89;
const MARGIN = 40;
const CONTENT_W = PAGE_W - MARGIN * 2;

// WinAnsi cannot encode a handful of characters used in card copy
function sanitize(text: string): string {
  return text
    .replaceAll("→", "->")
    .replaceAll("✓", "-")
    .replace(/[^\x20-\x7E -ÿ–—‘’“”]/g, "?");
}

function fit(
  text: string,
  font: PDFFont,
  size: number,
  maxWidth: number,
): string {
  text = sanitize(text);
  if (font.widthOfTextAtSize(text, size) <= maxWidth) return text;
  const ell = "…";
  let s = text;
  while (s.length > 1 && font.widthOfTextAtSize(s + ell, size) > maxWidth)
    s = s.slice(0, -1);
  return s.trimEnd() + ell;
}

function wrap(
  text: string,
  font: PDFFont,
  size: number,
  maxWidth: number,
  maxLines = 3,
): string[] {
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
    if (lines.length === maxLines) break;
  }
  if (line && lines.length < maxLines) lines.push(line);
  // If we truncated, add an ellipsis to the last line
  if (lines.length === maxLines) {
    const joined = words.join(" ");
    const rendered = lines.join(" ");
    if (rendered.length < sanitize(joined).length) {
      lines[maxLines - 1] = fit(
        lines[maxLines - 1] + " …",
        font,
        size,
        maxWidth,
      );
    }
  }
  return lines;
}

async function buildPdf(cardId: string, title: string, category: string) {
  const card = CARD_DATA[cardId];
  const doc = await PDFDocument.create();
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const oblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  doc.setTitle(`${cardId} — ${title} — Quick Card`);
  doc.setSubject(`TC Reference Tool — ${category}`);
  const FIXED_DATE = new Date("2026-01-01T00:00:00Z");
  doc.setCreationDate(FIXED_DATE);
  doc.setModificationDate(FIXED_DATE);

  const page: PDFPage = doc.addPage([PAGE_W, PAGE_H]);

  // ── Header band ──
  const HEADER_H = 118;
  page.drawRectangle({
    x: 0,
    y: PAGE_H - HEADER_H,
    width: PAGE_W,
    height: HEADER_H,
    color: NAVY,
  });
  page.drawRectangle({
    x: 0,
    y: PAGE_H - HEADER_H,
    width: PAGE_W,
    height: 4,
    color: AMBER,
  });

  page.drawRectangle({
    x: MARGIN,
    y: PAGE_H - 46,
    width: 52,
    height: 20,
    color: AMBER,
  });
  page.drawText(cardId, {
    x: MARGIN + 7,
    y: PAGE_H - 41,
    size: 11,
    font: bold,
    color: NAVY,
  });
  page.drawText(fit(title, bold, 22, CONTENT_W - 70), {
    x: MARGIN + 64,
    y: PAGE_H - 44,
    size: 22,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page.drawText(sanitize(`${category}  ·  Quick Card`), {
    x: MARGIN + 64,
    y: PAGE_H - 62,
    size: 9,
    font: regular,
    color: rgb(0.72, 0.76, 0.82),
  });
  page.drawText(
    sanitize(
      `Impact ${card.overview.impact}   ·   Difficulty ${card.overview.difficulty}   ·   Misuse risk ${card.overview.misuse}`,
    ),
    { x: MARGIN, y: PAGE_H - 92, size: 9, font: bold, color: AMBER },
  );

  let y = PAGE_H - HEADER_H - 26;

  const label = (text: string) => {
    page.drawRectangle({
      x: MARGIN,
      y: y - 1,
      width: 3,
      height: 11,
      color: AMBER,
    });
    page.drawText(sanitize(text.toUpperCase()), {
      x: MARGIN + 9,
      y,
      size: 9.5,
      font: bold,
      color: NAVY,
    });
    y -= 16;
  };

  // ── The move (hero: core formula) ──
  label("The move");
  const steps = card.overview.coreFormula.map(sanitize);
  const heroSize = 12.5;
  // Lay the formula out as "A -> B -> C", wrapping across lines if needed
  const heroLines = wrap(
    steps.join("  ->  "),
    bold,
    heroSize,
    CONTENT_W - 24,
    3,
  );
  const heroBoxH = heroLines.length * (heroSize * 1.5) + 16;
  page.drawRectangle({
    x: MARGIN,
    y: y - heroBoxH + 6,
    width: CONTENT_W,
    height: heroBoxH,
    color: TINT,
    borderColor: AMBER,
    borderWidth: 0.8,
  });
  let hy = y - heroSize;
  for (const line of heroLines) {
    page.drawText(line, {
      x: MARGIN + 12,
      y: hy,
      size: heroSize,
      font: bold,
      color: AMBER_DEEP,
    });
    hy -= heroSize * 1.5;
  }
  y = y - heroBoxH - 6;

  // ── Start here (minimum viable move) ──
  y -= 8;
  label("Start here");
  for (const line of wrap(
    card.overview.minimumViableMove,
    regular,
    10.5,
    CONTENT_W,
    3,
  )) {
    page.drawText(line, {
      x: MARGIN,
      y,
      size: 10.5,
      font: regular,
      color: INK,
    });
    y -= 10.5 * 1.4;
  }

  // ── Say this (signature phrases, one per group up to 6) ──
  y -= 12;
  label("Say this");
  const picks = card.phraseBank
    .slice(0, 6)
    .map((g) => ({ tone: g.label, phrase: g.phrases[0] }));
  for (const p of picks) {
    const toneW = 96;
    page.drawText(fit(p.tone, bold, 8, toneW - 6), {
      x: MARGIN,
      y,
      size: 8,
      font: bold,
      color: GREY,
    });
    const phraseLines = wrap(
      `"${p.phrase}"`,
      oblique,
      10,
      CONTENT_W - toneW,
      2,
    );
    phraseLines.forEach((line, i) => {
      page.drawText(line, {
        x: MARGIN + toneW,
        y,
        size: 10,
        font: oblique,
        color: INK,
      });
      if (i < phraseLines.length - 1) y -= 10 * 1.35;
    });
    y -= 10 * 1.5;
  }

  // ── Avoid (top "not for" cases; the misuse *level* is already in the header) ──
  y -= 10;
  label("Avoid");
  const avoids = card.notFor.slice(0, 3).filter(Boolean);
  for (const a of avoids) {
    const lines = wrap(a, regular, 9.5, CONTENT_W - 14, 2);
    lines.forEach((line, i) => {
      if (i === 0)
        page.drawCircle({
          x: MARGIN + 4,
          y: y + 3,
          size: 1.5,
          color: AMBER_DEEP,
        });
      page.drawText(line, {
        x: MARGIN + 14,
        y,
        size: 9.5,
        font: regular,
        color: INK,
      });
      y -= 9.5 * 1.4;
    });
    y -= 2;
  }

  // ── Field-tip closer ──
  if (card.fieldTip) {
    y -= 6;
    page.drawLine({
      start: { x: MARGIN, y: y + 6 },
      end: { x: PAGE_W - MARGIN, y: y + 6 },
      thickness: 0.6,
      color: HAIR,
    });
    y -= 6;
    page.drawText("REMEMBER", {
      x: MARGIN,
      y,
      size: 8,
      font: bold,
      color: AMBER_DEEP,
    });
    y -= 13;
    for (const line of wrap(card.fieldTip.headline, bold, 10.5, CONTENT_W, 2)) {
      page.drawText(line, {
        x: MARGIN,
        y,
        size: 10.5,
        font: bold,
        color: NAVY,
      });
      y -= 10.5 * 1.4;
    }
  }

  // ── Footer ──
  page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: 24, color: NAVY });
  page.drawText(sanitize(`${cardId} · ${title}`), {
    x: MARGIN,
    y: 8,
    size: 8,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page.drawText("TC Reference Tool · Quick Card", {
    x:
      PAGE_W -
      MARGIN -
      regular.widthOfTextAtSize("TC Reference Tool · Quick Card", 8),
    y: 8,
    size: 8,
    font: regular,
    color: rgb(0.72, 0.76, 0.82),
  });

  return doc.save();
}

const CARD_META: Record<string, { title: string; category: string }> = {};
for (const [category, cards] of Object.entries(LIBRARY_CATEGORIES)) {
  for (const c of cards) CARD_META[c.id] = { title: c.title, category };
}

let generated = 0;
for (const cardId of Object.keys(CARD_DATA).sort()) {
  if (cardId === "TC001") continue; // ships a designed one-card already
  const meta = CARD_META[cardId];
  if (!meta)
    console.warn(
      `WARNING: ${cardId} has no LIBRARY_CATEGORIES entry — using id as title`,
    );
  const { title, category } = meta ?? { title: cardId, category: "" };
  const bytes = await buildPdf(cardId, title, category);
  const dir = path.join(OUT_BASE, cardId);
  mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${cardId}_Quick_Card.pdf`);
  writeFileSync(file, bytes);
  generated++;
  console.log(
    `${cardId} -> ${path.relative(ROOT, file)} (${(bytes.length / 1024).toFixed(1)} kB)`,
  );
}
console.log(`Generated ${generated} quick card PDFs.`);

import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { CARD_DATA, CANONICAL_TONES, isSpeakablePhrase } from "@/lib/cards";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { getAllAggregatedPhrases } from "@/lib/phrases-data";

const PUBLIC_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "public");

// Structural guarantees the app relies on. cards.ts is hand-edited content —
// these tests turn silent content mistakes into loud test failures.

const CARD_IDS = Object.keys(CARD_DATA);
const LIBRARY_CARDS = Object.values(LIBRARY_CATEGORIES).flat();

describe("card content invariants", () => {
  it("has all 31 cards, TC001–TC031, in both cards.ts and data.ts", () => {
    const expected = Array.from({ length: 31 }, (_, i) => `TC${String(i + 1).padStart(3, "0")}`);
    expect(CARD_IDS.sort()).toEqual(expected);
    expect(LIBRARY_CARDS.map((c) => c.id).sort()).toEqual(expected);
  });

  it("gives every card exactly 7 drill entries labelled Day 1–Day 7", () => {
    for (const [id, card] of Object.entries(CARD_DATA)) {
      expect(card.drill.map((d) => d.day), id).toEqual([
        "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7",
      ]);
    }
  });

  it("uses only canonical tones and unique group ids within each card", () => {
    for (const [id, card] of Object.entries(CARD_DATA)) {
      const seen = new Set<string>();
      for (const group of card.phraseBank) {
        expect(CANONICAL_TONES, `${id}/${group.id} tone`).toContain(group.tone);
        expect(seen.has(group.id), `${id} duplicate group id ${group.id}`).toBe(false);
        seen.add(group.id);
      }
    }
  });

  it("only references existing cards from relatedTechniques", () => {
    for (const [id, card] of Object.entries(CARD_DATA)) {
      for (const related of card.relatedTechniques ?? []) {
        expect(CARD_IDS, `${id} → ${related.id}`).toContain(related.id);
      }
    }
  });

  it("matches overview.impact against the library impact for every card", () => {
    for (const libCard of LIBRARY_CARDS) {
      const impact = CARD_DATA[libCard.id]?.overview.impact.toLowerCase();
      expect(impact, libCard.id).toBe(libCard.impact);
    }
  });

  it("keeps stage directions out of the aggregated phrase pool", () => {
    // Assert the bracketed format directly rather than via isSpeakablePhrase,
    // so a regression in the predicate itself can't hide leaked entries
    for (const phrase of getAllAggregatedPhrases()) {
      expect(phrase.text, phrase.text).not.toMatch(/^\[[\s\S]*\]$/);
    }
  });

  it("points every pdfUrl and resource href at a real file in public/", () => {
    for (const [id, card] of Object.entries(CARD_DATA)) {
      if (card.pdfUrl) {
        expect(existsSync(path.join(PUBLIC_DIR, card.pdfUrl)), `${id}: ${card.pdfUrl}`).toBe(true);
      }
      for (const resource of card.resources ?? []) {
        expect(existsSync(path.join(PUBLIC_DIR, resource.href)), `${id}: ${resource.href}`).toBe(true);
      }
    }
  });

  it("classifies bracketed stage directions as non-speakable", () => {
    expect(isSpeakablePhrase("[Plant feet. Pause. Continue.]")).toBe(false);
    expect(isSpeakablePhrase("What happened next?")).toBe(true);
    // A bracketed cue prefix on a real line is still speakable
    expect(isSpeakablePhrase("[Pause] So what would good look like?")).toBe(true);
  });
});

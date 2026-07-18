import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { CANONICAL_TONES, CARD_DATA, inferPhraseTone, isSpeakablePhrase } from "@/lib/cards";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { getAllAggregatedPhrases } from "@/lib/phrases-data";

const PUBLIC_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "public");

// Structural guarantees the app relies on. Card content is hand-edited /
// generated from the source technique packages — these tests turn silent
// content mistakes into loud test failures.

const CARD_IDS = Object.keys(CARD_DATA);
const LIBRARY_CARDS = Object.values(LIBRARY_CATEGORIES).flat();

// The catalogue is the Top500 sequence TC001–TC100 with two intentional gaps:
// TC055 and TC097 were duplicate builds in the source set (of TC054 and TC096),
// so those ids are deliberately absent. Result: 98 unique techniques.
const MISSING_IDS = new Set(["TC055", "TC097"]);
const EXPECTED_IDS = Array.from({ length: 100 }, (_, i) => `TC${String(i + 1).padStart(3, "0")}`).filter(
  (id) => !MISSING_IDS.has(id),
);

describe("card content invariants", () => {
  it("has all 98 techniques (TC001–TC100 minus TC055/TC097) in both cards.ts and data.ts", () => {
    expect(CARD_IDS.slice().sort()).toEqual(EXPECTED_IDS);
    expect(LIBRARY_CARDS.map((c) => c.id).sort()).toEqual(EXPECTED_IDS);
  });

  it("lists every card in exactly one library category", () => {
    const libIds = LIBRARY_CARDS.map((c) => c.id);
    expect(new Set(libIds).size, "duplicate id across categories").toBe(libIds.length);
  });

  it("gives every card exactly 7 drill entries labelled Day 1–Day 7", () => {
    // The daily-drill feature (drill-state.ts) cycles through a fixed 7 days,
    // so every card must carry exactly Day 1..Day 7.
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
        const tone = inferPhraseTone(group);
        expect(CANONICAL_TONES, `${id}/${group.id} tone`).toContain(tone);
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

  it("keeps every declared download resource well-formed", () => {
    const groups = new Set(["Visual Cards", "Written Guides", "Practice Tools"]);
    const types = new Set(["pdf", "docx", "png", "csv"]);
    for (const [id, card] of Object.entries(CARD_DATA)) {
      for (const r of card.resources ?? []) {
        expect(groups, `${id} resource group ${r.group}`).toContain(r.group);
        expect(types, `${id} resource type ${r.type}`).toContain(r.type);
        expect(r.href.startsWith(`cards/${id}/`), `${id} resource href ${r.href}`).toBe(true);
      }
    }
  });

  it("ships the generated download pack for every card except TC001", () => {
    // TC001 ships hand-designed assets; every other card must carry the
    // generated Quick Card + Detailed Guide so downloads never lag the card.
    const expected = [
      { suffix: "_Quick_Card.pdf", group: "Visual Cards" },
      { suffix: "_Detailed_Guide.pdf", group: "Written Guides" },
    ] as const;
    for (const [id, card] of Object.entries(CARD_DATA)) {
      if (id === "TC001") continue;
      const resources = card.resources ?? [];
      for (const { suffix, group } of expected) {
        const has = resources.some((r) => r.href === `cards/${id}/${id}${suffix}` && r.group === group);
        expect(has, `${id} missing ${suffix} (${group}) resource`).toBe(true);
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

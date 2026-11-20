import { describe, expect, it } from "vitest";
import { CANONICAL_TONES } from "@/lib/card-types";
import {
  NO_FILTER,
  PHRASE_LENGTHS,
  countFacets,
  filterPhrases,
  groupByCard,
  phraseLength,
  sentenceCount,
  wordCount,
} from "@/lib/phrase-filters";
import { loadAllAggregatedPhrases } from "@/lib/phrases-data";
import type { AggregatedPhrase } from "@/lib/phrases-data";

function phrase(
  text: string,
  over: Partial<AggregatedPhrase> = {},
): AggregatedPhrase {
  return {
    text,
    groupId: "g",
    groupLabel: "Group",
    groupTag: "tag",
    tone: "Warm",
    cardId: "TC001",
    cardTitle: "Live thread follow-ups",
    ...over,
  };
}

describe("phrase length", () => {
  it("counts words and sentences", () => {
    expect(wordCount("  Say more?  ")).toBe(2);
    expect(wordCount("")).toBe(0);
    expect(sentenceCount("Oof, that's rough. What happened?")).toBe(2);
    expect(sentenceCount("The specific thing I need is...")).toBe(1);
    expect(sentenceCount('He said "no." Then he left.')).toBe(2);
  });

  it.each([
    ["Say more?", "short"],
    ["Oof, that's rough. What happened?", "short"],
    ["I got that wrong. I'm sorry.", "short"],
    ["I can't take that on right now.", "sentence"],
    ["The one specific thing I need is...", "sentence"],
    [
      "That sounds like it took real effort. What was the key obstacle?",
      "longer",
    ],
  ] as const)("%s is %s", (text, expected) => {
    expect(phraseLength(text)).toBe(expected);
  });
});

describe("filterPhrases and countFacets", () => {
  const bank = [
    phrase("Say more?", { tone: "Quick" }),
    phrase("I can hear why that landed badly.", { tone: "Repair" }),
    phrase("That’s a fair concern, and I want to fix it.", {
      tone: "Repair",
      cardId: "TC014",
      cardTitle: "Validate the concern",
    }),
    phrase("Let me check. Then I'll come back to you.", { tone: "Direct" }),
  ];

  it("returns everything with no filter", () => {
    expect(filterPhrases(bank, NO_FILTER)).toHaveLength(4);
  });

  it("combines tone, length and search", () => {
    expect(
      filterPhrases(bank, { tone: "Repair", length: null, query: "" }),
    ).toHaveLength(2);
    expect(
      filterPhrases(bank, { tone: "Repair", length: "sentence", query: "" }),
    ).toHaveLength(2);
    expect(
      filterPhrases(bank, { tone: null, length: "longer", query: "" }).map(
        (p) => p.text,
      ),
    ).toEqual(["Let me check. Then I'll come back to you."]);
    // Straight apostrophe finds a curly one, and titles are searched too
    expect(
      filterPhrases(bank, { tone: null, length: null, query: "THAT'S A" }),
    ).toHaveLength(1);
    expect(
      filterPhrases(bank, { tone: null, length: null, query: "validate" }),
    ).toHaveLength(1);
  });

  it("counts each chip against the other filters, not its own", () => {
    const counts = countFacets(bank, {
      tone: "Repair",
      length: "short",
      query: "",
    });
    // Tones are counted among short lines; lengths among Repair lines
    expect(counts.tone).toEqual({ Quick: 1 });
    expect(counts.length).toEqual({ sentence: 2 });
  });

  it("groups by card in first-seen order", () => {
    const groups = groupByCard(bank);
    expect(groups.map((g) => g.cardId)).toEqual(["TC001", "TC014"]);
    expect(groups[0].phrases).toHaveLength(3);
  });
});

describe("on the real Phrase Bank", () => {
  it("gives every tone and every length a useful share", async () => {
    const all = await loadAllAggregatedPhrases();
    const counts = countFacets(all, NO_FILTER);
    for (const tone of CANONICAL_TONES)
      expect(counts.tone[tone] ?? 0, tone).toBeGreaterThan(100);
    for (const { id } of PHRASE_LENGTHS)
      expect(counts.length[id] ?? 0, id).toBeGreaterThan(all.length / 10);
    const lengthTotal = PHRASE_LENGTHS.reduce(
      (n, l) => n + (counts.length[l.id] ?? 0),
      0,
    );
    expect(lengthTotal).toBe(all.length);
  });
});

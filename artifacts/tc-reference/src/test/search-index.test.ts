import { beforeEach, describe, expect, it, vi } from "vitest";
import { loadAllCards } from "../lib/card-loader";
import type { CardData } from "../lib/card-types";
import { CARD_IDS } from "../lib/drill-state";
import { highlightMatch, searchCards } from "../lib/search-index";

vi.mock("../lib/card-loader", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../lib/card-loader")>()),
  loadAllCards: vi.fn(),
}));

// Synthetic card content keyed by real card ids, so titles and categories come
// from the real library metadata (data.ts) while the searchable body text is
// fully controlled here.
function card(id: string, overrides: Partial<CardData> = {}): CardData {
  return {
    id,
    overview: {
      coreFormula: ["step one"],
      minimumViableMove: "",
      impact: "High",
      difficulty: "Easy",
      misuse: "",
      bestFor: ["generic use"],
    },
    phraseBank: [
      {
        id: "g",
        label: "Group",
        tag: "general",
        tone: "Warm",
        phrases: ["Plain line."],
      },
    ],
    scenarios: [],
    whyItWorks: "shared rationale",
    ...overrides,
  } as CardData;
}

const CORPUS: Record<string, CardData> = Object.fromEntries(
  CARD_IDS.slice(0, 20).map((id) => [id, card(id)]),
);
// TC014 "Validate the concern" (Clarity / Direction)
CORPUS.TC014 = card("TC014", {
  phraseBank: [
    {
      id: "open",
      label: "Openers",
      tag: "general",
      tone: "Warm",
      phrases: ["I hear why that worries you."],
    },
  ],
  whyItWorks: "Naming the concern lowers defences.",
});
// TC001 "Live thread follow-ups" (Connection / Warmth): mentions TC014's
// title inside a phrase
CORPUS.TC001 = card("TC001", {
  phraseBank: [
    {
      id: "p",
      label: "Bridges",
      tag: "general",
      tone: "Warm",
      phrases: ["First validate the concern, then ask."],
    },
  ],
});
// TC002: accented text
CORPUS.TC002 = card("TC002", {
  whyItWorks: "Avoids the Cliché of instant advice.",
});
// TC003: references TC014 by id inside a scenario
CORPUS.TC003 = card("TC003", {
  scenarios: [{ situation: "They push back", move: "See TC014", phrase: "" }],
});

beforeEach(() => {
  vi.mocked(loadAllCards).mockResolvedValue(Object.freeze(CORPUS));
});

function expectSortedByScore(results: { score: number }[]) {
  for (let i = 1; i < results.length; i++) {
    expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score);
  }
}

describe("searchCards", () => {
  it.each(["", "   ", "\n\t"])(
    "returns nothing for an empty query %j without loading cards",
    async (q) => {
      const calls = vi.mocked(loadAllCards).mock.calls.length;
      expect(await searchCards(q)).toEqual([]);
      expect(vi.mocked(loadAllCards).mock.calls.length).toBe(calls);
    },
  );

  it("ranks an exact id match first", async () => {
    const results = await searchCards("TC014");
    expect(results[0]).toEqual({
      id: "TC014",
      title: "Validate the concern",
      category: "Clarity / Direction",
      loaded: true,
      score: 100,
      matchedIn: "id",
    });
    // A card that only mentions the id in its body ranks far below
    expect(results.find((r) => r.id === "TC003")).toMatchObject({
      score: 23,
      matchedIn: "scenarios",
    });
    expect(results).toHaveLength(2);
  });

  it("matches ids case-insensitively and by prefix", async () => {
    expect((await searchCards("tc014"))[0]).toMatchObject({
      id: "TC014",
      score: 100,
    });
    const prefix = await searchCards("tc01");
    const ids = prefix.filter((r) => r.matchedIn === "id").map((r) => r.id);
    expect(ids).toEqual(expect.arrayContaining(["TC014", "TC010"]));
    for (const r of prefix.filter((r) => r.matchedIn === "id")) {
      expect(r.id.startsWith("TC01")).toBe(true);
      expect(r.score).toBe(80);
    }
  });

  it("ranks an exact title above a phrase that quotes it", async () => {
    const results = await searchCards("Validate the concern");
    expect(results[0]).toMatchObject({
      id: "TC014",
      score: 95,
      matchedIn: "title",
    });
    expect(results.find((r) => r.id === "TC001")).toMatchObject({
      score: 33,
      matchedIn: "phrases",
    });
    expectSortedByScore(results);
  });

  it("scores title prefix above title substring above category", async () => {
    expect((await searchCards("validate"))[0]).toMatchObject({
      id: "TC014",
      score: 85,
      matchedIn: "title",
    });
    expect(
      (await searchCards("the concern")).find((r) => r.id === "TC014"),
    ).toMatchObject({ score: 70, matchedIn: "title" });

    const category = await searchCards("clarity / direction");
    expect(category.find((r) => r.id === "TC014")).toMatchObject({
      score: 60,
      matchedIn: "category",
    });
  });

  it("finds a phrase-bank match", async () => {
    const results = await searchCards("hear why that worries");
    expect(results).toEqual([
      expect.objectContaining({ id: "TC014", score: 33, matchedIn: "phrases" }),
    ]);
  });

  it("is case-insensitive, including for accented text", async () => {
    const lower = await searchCards("validate the concern");
    const upper = await searchCards("VALIDATE THE CONCERN");
    expect(upper).toEqual(lower);

    expect(await searchCards("cliché")).toEqual([
      expect.objectContaining({
        id: "TC002",
        score: 18,
        matchedIn: "explanation",
      }),
    ]);
    expect((await searchCards("CLICHÉ"))[0]?.id).toBe("TC002");
  });

  it("trims surrounding whitespace", async () => {
    expect(await searchCards("  TC014  ")).toEqual(await searchCards("TC014"));
  });

  it("falls back to per-word matching for multi-word queries", async () => {
    // Neither full phrase appears anywhere, but each word does in TC014:
    // "worries" in phrases (4) + "defences" in the explanation (1).
    const results = await searchCards("worries defences");
    expect(results).toEqual([
      expect.objectContaining({ id: "TC014", score: 5, matchedIn: "phrases" }),
    ]);
  });

  it("caps per-word scores below any full-phrase match", async () => {
    // Every word hits TC001's title (3 x 10), capped at 17.
    const results = await searchCards("thread live follow");
    expect(results[0]).toMatchObject({
      id: "TC001",
      score: 17,
      matchedIn: "title",
    });
  });

  it("returns nothing for a single unmatched word", async () => {
    expect(await searchCards("zzzqqq")).toEqual([]);
  });

  it("returns at most 12 results, best first", async () => {
    // Every synthetic card shares this explanation text
    const results = await searchCards("shared rationale");
    expect(results).toHaveLength(12);
    expect(results.every((r) => r.score === 20)).toBe(true);
    expectSortedByScore(await searchCards("tc0"));
  });
});

describe("highlightMatch", () => {
  it("returns the whole text unhighlighted for a blank query", () => {
    expect(highlightMatch("Validate the concern", "  ")).toEqual([
      { text: "Validate the concern", highlight: false },
    ]);
  });

  it("highlights every case-insensitive occurrence", () => {
    expect(highlightMatch("Concern about the concern", "CONCERN")).toEqual([
      { text: "", highlight: false },
      { text: "Concern", highlight: true },
      { text: " about the ", highlight: false },
      { text: "concern", highlight: true },
      { text: "", highlight: false },
    ]);
  });

  it("treats regex metacharacters literally", () => {
    const parts = highlightMatch("Ask (why?) twice", "(why?)");
    expect(parts.filter((p) => p.highlight).map((p) => p.text)).toEqual([
      "(why?)",
    ]);
  });
});

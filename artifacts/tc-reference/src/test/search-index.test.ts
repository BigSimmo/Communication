import { beforeEach, describe, expect, it, vi } from "vitest";
import { loadAllCards } from "../lib/card-loader";
import type { CardData, PhraseGroup } from "../lib/card-types";
import { CORE_CARD_IDS } from "../lib/data";
import { CARD_IDS } from "../lib/drill-state";
import {
  DEFAULT_LIMITS,
  highlightMatch,
  preloadSearchIndex,
  searchAll,
  searchCards,
  suggestSearches,
  type SearchOptions,
} from "../lib/search-index";

vi.mock("../lib/card-loader", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../lib/card-loader")>()),
  loadAllCards: vi.fn(),
}));

// Synthetic card content keyed by real card ids, so titles and categories come
// from the real library metadata (data.ts) while the searchable body text is
// fully controlled here. Playbooks are the real templates.
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

function group(
  label: string,
  phrases: string[],
  extra: Partial<PhraseGroup> = {},
): PhraseGroup {
  return { id: label.toLowerCase(), label, tag: "general", phrases, ...extra };
}

const GENERIC_IDS = CARD_IDS.slice(0, 20);
const CORPUS: Record<string, CardData> = Object.fromEntries(
  GENERIC_IDS.map((id) => [id, card(id)]),
);
// TC014 "Validate the concern" (Clarity / Direction)
CORPUS.TC014 = card("TC014", {
  phraseBank: [
    group("Openers", ["I hear why that worries you."], { tone: "Warm" }),
  ],
  whyItWorks: "Naming the concern lowers defences.",
});
// TC001 "Live thread follow-ups": mentions TC014's title inside a phrase
CORPUS.TC001 = card("TC001", {
  phraseBank: [group("Bridges", ["First validate the concern, then ask."])],
});
// TC002: accented text
CORPUS.TC002 = card("TC002", {
  whyItWorks: "Avoids the Cliché of instant advice.",
});
// TC003: references TC014 by id inside a scenario
CORPUS.TC003 = card("TC003", {
  scenarios: [{ situation: "They push back", move: "See TC014", phrase: "" }],
});
// TC006 "Emotional labelling": only card vocabulary, never the word "upset"
CORPUS.TC006 = card("TC006", {
  overview: {
    ...card("TC006").overview,
    bestFor: ["When someone is frustrated or hurt"],
  },
  phraseBank: [group("Labels", ["That sounds frustrating."])],
});
// TC007: a stage direction that is not a line to say out loud
CORPUS.TC007 = card("TC007", {
  phraseBank: [
    group("Practice", ["[Plant feet. Pause. Continue.]", "Keep it short."]),
  ],
});
// TC008: a phrase group whose tone is the match
CORPUS.TC008 = card("TC008", {
  phraseBank: [
    group("Restart lines", ["Can we start again?"], { tone: "Repair" }),
  ],
});
// TC010: a phrase with the everyday word itself
CORPUS.TC010 = card("TC010", {
  phraseBank: [group("Noticing", ["You seem upset."])],
});
// TC029 "Strategic silence"
CORPUS.TC029 = card("TC029", {
  overview: { ...card("TC029").overview, bestFor: ["Awkward pauses"] },
  phraseBank: [group("Holding", ["Let the silence do the work."])],
});
// TC101 "Effective apology"
CORPUS.TC101 = card("TC101", {
  phraseBank: [group("Apologies", ["I'm sorry. That was on me."])],
  whyItWorks: "A clean apology repairs trust.",
});
// TC102 "Positive no (Yes! No. Yes?)"
CORPUS.TC102 = card("TC102", {
  overview: {
    ...card("TC102").overview,
    bestFor: ["Declining a request kindly"],
  },
});

const NO_BOOSTS: SearchOptions = {
  boosts: {
    savedCardIds: [],
    savedPhrases: [],
    recentCardIds: [],
    startHereCardIds: [],
  },
};

function boosted(boosts: NonNullable<SearchOptions["boosts"]>): SearchOptions {
  return { boosts: { ...NO_BOOSTS.boosts, ...boosts } };
}

beforeEach(() => {
  localStorage.clear();
  vi.mocked(loadAllCards).mockResolvedValue(Object.freeze(CORPUS));
});

function expectSortedByScore(results: { score: number }[]) {
  for (let i = 1; i < results.length; i++) {
    expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score);
  }
}

const ids = (results: { id: string }[]) => results.map((r) => r.id);

describe("searchCards", () => {
  it.each(["", "   ", "\n\t"])(
    "returns nothing for an empty query %j without loading cards",
    async (q) => {
      const calls = vi.mocked(loadAllCards).mock.calls.length;
      expect(await searchCards(q)).toEqual([]);
      expect(await searchAll(q)).toMatchObject({
        techniques: [],
        phrases: [],
        playbooks: [],
        correctedQuery: null,
      });
      expect(vi.mocked(loadAllCards).mock.calls.length).toBe(calls);
    },
  );

  it("ranks an exact id match first, with the same result shape as before", async () => {
    const results = await searchCards("TC014", NO_BOOSTS);
    expect(results[0]).toEqual({
      id: "TC014",
      title: "Validate the concern",
      category: "Clarity / Direction",
      loaded: true,
      score: expect.any(Number),
      matchedIn: "id",
    });
    // A card that only mentions the id in its body ranks far below
    const mention = results.find((r) => r.id === "TC003");
    expect(mention).toMatchObject({ matchedIn: "scenarios" });
    expect(results[0].score).toBeGreaterThan(mention!.score * 5);
    expect(results).toHaveLength(2);
  });

  it("matches ids case-insensitively, by prefix and by number alone", async () => {
    expect((await searchCards("tc014"))[0]).toMatchObject({ id: "TC014" });
    expect((await searchCards("014"))[0]).toMatchObject({
      id: "TC014",
      matchedIn: "id",
    });
    const prefix = await searchCards("tc01", NO_BOOSTS);
    const byId = prefix.filter((r) => r.matchedIn === "id").map((r) => r.id);
    expect(byId).toEqual(expect.arrayContaining(["TC014", "TC010"]));
    for (const id of byId) expect(id.startsWith("TC01")).toBe(true);
  });

  it("ranks an exact title above a phrase that quotes it", async () => {
    const results = await searchCards("Validate the concern", NO_BOOSTS);
    expect(results[0]).toMatchObject({ id: "TC014", matchedIn: "title" });
    const quote = results.find((r) => r.id === "TC001");
    expect(quote).toMatchObject({ matchedIn: "phrases" });
    expect(results[0].score).toBeGreaterThan(quote!.score);
    expectSortedByScore(results);
  });

  it("finds title words, title substrings and categories", async () => {
    expect((await searchCards("validate", NO_BOOSTS))[0]).toMatchObject({
      id: "TC014",
      matchedIn: "title",
    });
    expect((await searchCards("the concern", NO_BOOSTS))[0]).toMatchObject({
      id: "TC014",
      matchedIn: "title",
    });
    const category = await searchCards("clarity / direction", NO_BOOSTS);
    expect(category.find((r) => r.id === "TC014")).toMatchObject({
      matchedIn: "category",
    });
  });

  it("finds a phrase-bank match", async () => {
    const results = await searchCards("hear why that worries");
    expect(results).toEqual([
      expect.objectContaining({ id: "TC014", matchedIn: "phrases" }),
    ]);
  });

  it("is case-insensitive and ignores accents", async () => {
    const lower = await searchCards("validate the concern");
    expect(await searchCards("VALIDATE THE CONCERN")).toEqual(lower);

    for (const q of ["cliché", "CLICHÉ", "cliche"]) {
      expect(await searchCards(q)).toEqual([
        expect.objectContaining({ id: "TC002", matchedIn: "explanation" }),
      ]);
    }
  });

  it("trims surrounding whitespace", async () => {
    expect(await searchCards("  TC014  ")).toEqual(await searchCards("TC014"));
  });

  it("matches entries that contain every word, wherever they are", async () => {
    // "worries" is in a phrase and "defences" in the explanation.
    expect(ids(await searchCards("worries defences"))).toEqual(["TC014"]);
  });

  it("falls back to entries with any of the words when none has all", async () => {
    const results = await searchCards("worries quokka", NO_BOOSTS);
    expect(results[0]?.id).toBe("TC014");
    expect(results).toEqual(await searchCards("worries", NO_BOOSTS));
  });

  it("returns nothing for a word that matches nothing", async () => {
    expect(await searchCards("zzzqqq")).toEqual([]);
    expect(await searchAll("zzzqqq")).toMatchObject({
      correctedQuery: null,
      totals: { techniques: 0, phrases: 0, playbooks: 0 },
    });
  });

  it("returns at most 12 results, best first", async () => {
    // Every generic card shares this explanation text
    const results = await searchCards("shared rationale");
    expect(results).toHaveLength(DEFAULT_LIMITS.techniques);
    expectSortedByScore(results);
    expectSortedByScore(await searchCards("tc0"));
  });

  it("does not search for filler words unless nothing else was typed", async () => {
    expect(await searchCards("the worries")).toEqual(
      await searchCards("worries"),
    );
    expect((await searchCards("the")).length).toBeGreaterThan(0);
  });
});

describe("smart matching", () => {
  it("matches word beginnings as you type", async () => {
    const word = "silence";
    for (let length = 3; length <= word.length; length++) {
      const results = await searchCards(word.slice(0, length), NO_BOOSTS);
      expect(results[0]?.id, word.slice(0, length)).toBe("TC029");
    }
  });

  it("matches other forms of a word through its stem", async () => {
    expect((await searchCards("silent", NO_BOOSTS))[0]?.id).toBe("TC029");
    for (const q of ["apologise", "apologising", "apologies", "apologize"]) {
      expect((await searchCards(q, NO_BOOSTS))[0]?.id, q).toBe("TC101");
    }
    expect((await searchCards("labelled", NO_BOOSTS))[0]?.id).toBe("TC006");
  });

  it("corrects a misspelt word and says what it searched for", async () => {
    const results = await searchAll("apolgy", NO_BOOSTS);
    expect(results.correctedQuery).toBe("apology");
    expect(results.query).toBe("apolgy");
    expect(results.techniques[0]?.id).toBe("TC101");

    const silence = await searchAll("silense", NO_BOOSTS);
    expect(silence.correctedQuery).toBe("silence");
    expect(silence.techniques[0]?.id).toBe("TC029");
  });

  it("keeps the other words when correcting one", async () => {
    const results = await searchAll("clean apolgy", NO_BOOSTS);
    expect(results.correctedQuery).toBe("clean apology");
    expect(results.techniques[0]?.id).toBe("TC101");
  });

  it("does not correct a word that is still being typed", async () => {
    expect((await searchAll("apol")).correctedQuery).toBeNull();
    expect((await searchAll("silen")).correctedQuery).toBeNull();
  });

  it("does not correct short words or ids", async () => {
    expect((await searchAll("qz")).correctedQuery).toBeNull();
    expect((await searchAll("tc999")).correctedQuery).toBeNull();
  });

  it("expands everyday words through the synonym list", async () => {
    // TC006 never says "upset", only "frustrated" and "hurt".
    const results = await searchAll("upset", NO_BOOSTS);
    expect(ids(results.techniques)).toContain("TC006");
    // Named by the field a synonym matched, as nothing matched directly.
    expect(results.techniques.find((r) => r.id === "TC006")).toMatchObject({
      matchedIn: "title",
    });
    expect(results.correctedQuery).toBeNull();
  });

  it("ranks the typed word above its synonyms", async () => {
    const phrases = (await searchAll("upset", NO_BOOSTS)).phrases;
    const literal = phrases.findIndex((p) => p.text === "You seem upset.");
    const synonym = phrases.findIndex(
      (p) => p.text === "That sounds frustrating.",
    );
    expect(literal).toBeGreaterThanOrEqual(0);
    expect(synonym).toBeGreaterThan(literal);
  });

  it("expands everyday phrases such as 'say no'", async () => {
    const results = await searchCards("say no", NO_BOOSTS);
    expect(ids(results)).toContain("TC102");
  });
});

describe("searchAll", () => {
  it("returns phrases with their card, group and tone", async () => {
    const { phrases } = await searchAll("worries", NO_BOOSTS);
    expect(phrases[0]).toEqual({
      id: expect.stringMatching(/^TC014#/),
      text: "I hear why that worries you.",
      cardId: "TC014",
      cardTitle: "Validate the concern",
      category: "Clarity / Direction",
      groupLabel: "Openers",
      tone: "Warm",
      score: expect.any(Number),
      matchedIn: "text",
    });
  });

  it("matches a phrase by its group's tone", async () => {
    const { phrases } = await searchAll("repair", NO_BOOSTS);
    expect(phrases).toContainEqual(
      expect.objectContaining({
        text: "Can we start again?",
        tone: "Repair",
        matchedIn: "group",
      }),
    );
  });

  it("leaves stage directions out of phrase results but still finds the card", async () => {
    const results = await searchAll("plant feet", NO_BOOSTS);
    expect(results.phrases).toEqual([]);
    expect(ids(results.techniques)).toEqual(["TC007"]);
  });

  it("returns playbooks by name, description and the cards they use", async () => {
    const handover = await searchAll("handover", NO_BOOSTS);
    expect(handover.playbooks[0]).toMatchObject({
      id: "clinical-handover-isbar",
      name: "Clinical handover",
      context: "Clinical",
      section: "medical",
      matchedIn: "name",
    });
    expect(handover.playbooks[0].cardIds).toContain("TC011");

    // "Summary check" (TC011) is one of the handover playbook's cards
    const viaCard = await searchAll("summary check", NO_BOOSTS);
    expect(ids(viaCard.playbooks)).toContain("clinical-handover-isbar");

    const declining = await searchAll("declining", NO_BOOSTS);
    expect(ids(declining.playbooks)).toContain("declining-a-request");
  });

  it("applies limits and reports totals before them", async () => {
    const results = await searchAll("shared rationale", {
      ...NO_BOOSTS,
      limits: { techniques: 3, phrases: 2 },
    });
    expect(results.techniques).toHaveLength(3);
    expect(results.totals.techniques).toBeGreaterThanOrEqual(15);
    const plain = await searchAll("plain line", {
      ...NO_BOOSTS,
      limits: { phrases: 2 },
    });
    expect(plain.phrases).toHaveLength(2);
    expect(plain.totals.phrases).toBeGreaterThan(2);
  });

  it("gives the same technique results as searchCards", async () => {
    for (const q of ["concern", "upset", "tc01", "apolgy"]) {
      expect((await searchAll(q, NO_BOOSTS)).techniques, q).toEqual(
        await searchCards(q, NO_BOOSTS),
      );
    }
  });
});

describe("ranking boosts", () => {
  // Every generic card has the same "shared rationale" text, so only the
  // boosts separate them.
  const Q = "shared rationale";

  it("lifts saved cards", async () => {
    const results = await searchCards(Q, boosted({ savedCardIds: ["TC019"] }));
    expect(results[0].id).toBe("TC019");
  });

  it("lifts recently opened cards, most recent first", async () => {
    const results = await searchCards(
      Q,
      boosted({ recentCardIds: ["TC020", "TC018"] }),
    );
    expect(ids(results).slice(0, 2)).toEqual(["TC020", "TC018"]);
  });

  it("lifts Start here cards", async () => {
    const results = await searchCards(
      Q,
      boosted({ startHereCardIds: ["TC017"] }),
    );
    expect(results[0].id).toBe("TC017");
  });

  it("ranks saved above recent", async () => {
    const results = await searchCards(
      Q,
      boosted({ savedCardIds: ["TC019"], recentCardIds: ["TC020"] }),
    );
    expect(ids(results).slice(0, 2)).toEqual(["TC019", "TC020"]);
  });

  it("never lets a boost outrank a much better match", async () => {
    const results = await searchCards(
      "validate the concern",
      boosted({ savedCardIds: ["TC001"], recentCardIds: ["TC001"] }),
    );
    expect(results[0].id).toBe("TC014");
  });

  it("lifts saved phrases, then phrases from saved cards", async () => {
    const saved = await searchAll(
      "plain line",
      boosted({ savedPhrases: [{ cardId: "TC019", text: "Plain line." }] }),
    );
    expect(saved.phrases[0].cardId).toBe("TC019");

    const fromCard = await searchAll(
      "plain line",
      boosted({ savedCardIds: ["TC018"] }),
    );
    expect(fromCard.phrases[0].cardId).toBe("TC018");
  });

  it("reads saved and recent cards from the device by default", async () => {
    localStorage.setItem(
      "tc_favourites",
      JSON.stringify({ cardIds: ["TC019"], phrases: [] }),
    );
    localStorage.setItem("tc_recent_cards", JSON.stringify(["TC020"]));
    const results = await searchCards(Q);
    expect(ids(results).slice(0, 2)).toEqual(["TC019", "TC020"]);
  });

  it("lifts the Start here set by default", async () => {
    const results = await searchCards(Q);
    expect(CORE_CARD_IDS).toContain(results[0].id);
  });
});

describe("suggestSearches", () => {
  it("completes the word being typed", async () => {
    expect(await suggestSearches("sil")).toContain("silence");
    expect(await suggestSearches("let the sil")).toContain("let the silence");
  });

  it("suggests nothing for very short or finished input", async () => {
    expect(await suggestSearches("")).toEqual([]);
    expect(await suggestSearches("s")).toEqual([]);
    expect(await suggestSearches("sil ")).toEqual([]);
  });

  it("respects the limit", async () => {
    expect((await suggestSearches("s", 2)).length).toBeLessThanOrEqual(2);
    expect((await suggestSearches("st", 2)).length).toBeLessThanOrEqual(2);
  });
});

describe("preloadSearchIndex", () => {
  it("builds the index once and reuses it", async () => {
    await preloadSearchIndex();
    const calls = vi.mocked(loadAllCards).mock.calls.length;
    await preloadSearchIndex();
    await searchAll("concern");
    expect(vi.mocked(loadAllCards).mock.calls.length).toBe(calls);
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

  it("highlights each word of a multi-word query, but not filler words", () => {
    const parts = highlightMatch(
      "Validate the concern",
      "validate the concern",
    );
    expect(parts.filter((p) => p.highlight).map((p) => p.text)).toEqual([
      "Validate the concern",
    ]);
    const words = highlightMatch("Validate the concern", "concern validate");
    expect(words.filter((p) => p.highlight).map((p) => p.text)).toEqual([
      "Validate",
      "concern",
    ]);
    const filler = highlightMatch("the theme", "the theme");
    expect(filler.filter((p) => p.highlight).map((p) => p.text)).toEqual([
      "the theme",
    ]);
  });

  it("highlights the corrected words", () => {
    const parts = highlightMatch("Effective apology", "apolgy", "apology");
    expect(parts.filter((p) => p.highlight).map((p) => p.text)).toEqual([
      "apology",
    ]);
  });
});

// Ranking boosts, suggestions and highlighting for smart search.
import { beforeEach, describe, expect, it, vi } from "vitest";
import { loadAllCards } from "../lib/card-loader";
import { CORE_CARD_IDS } from "../lib/data";
import {
  highlightMatch,
  searchAll,
  searchCards,
  suggestSearches,
} from "../lib/search-index";
import { boosted, CORPUS, ids } from "./search-fixtures";

vi.mock("../lib/card-loader", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../lib/card-loader")>()),
  loadAllCards: vi.fn(),
}));

beforeEach(() => {
  localStorage.clear();
  vi.mocked(loadAllCards).mockResolvedValue(Object.freeze(CORPUS));
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

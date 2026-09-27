import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  loadFavouritesState,
  saveFavouritesState,
  toggleFavouriteCard,
  toggleFavouritePhrase,
  type FavouritePhrase,
  type FavouritesState,
} from "../lib/favourites-state";

const KEY = "tc_favourites";
const EMPTY: FavouritesState = { cardIds: [], phrases: [] };

function phrase(
  cardId: string,
  text: string,
  extra: Partial<FavouritePhrase> = {},
): FavouritePhrase {
  return {
    cardId,
    cardTitle: `Title ${cardId}`,
    groupLabel: "Openers",
    text,
    ...extra,
  };
}

function stored(): unknown {
  return JSON.parse(localStorage.getItem(KEY) ?? "null");
}

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("toggleFavouriteCard", () => {
  it("adds a card, then removes it, persisting each step", () => {
    const added = toggleFavouriteCard(EMPTY, "TC001");
    expect(added.cardIds).toEqual(["TC001"]);
    expect(stored()).toEqual({ cardIds: ["TC001"], phrases: [] });

    const two = toggleFavouriteCard(added, "TC014");
    expect(two.cardIds).toEqual(["TC001", "TC014"]);

    const removed = toggleFavouriteCard(two, "TC001");
    expect(removed.cardIds).toEqual(["TC014"]);
    expect(stored()).toEqual({ cardIds: ["TC014"], phrases: [] });
  });

  it("does not mutate the previous state", () => {
    const before: FavouritesState = { cardIds: ["TC001"], phrases: [] };
    toggleFavouriteCard(before, "TC002");
    expect(before.cardIds).toEqual(["TC001"]);
  });

  it("still updates in memory when storage writes fail", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    expect(toggleFavouriteCard(EMPTY, "TC001").cardIds).toEqual(["TC001"]);
  });
});

describe("toggleFavouritePhrase", () => {
  it("keys phrases by card id and text", () => {
    const a = phrase("TC001", "Tell me more.");
    const sameTextOtherCard = phrase("TC002", "Tell me more.");
    let state = toggleFavouritePhrase(EMPTY, a);
    state = toggleFavouritePhrase(state, sameTextOtherCard);
    expect(state.phrases).toEqual([a, sameTextOtherCard]);

    // A different title/group label for the same (cardId, text) still matches
    state = toggleFavouritePhrase(
      state,
      phrase("TC001", "Tell me more.", { groupLabel: "Other" }),
    );
    expect(state.phrases).toEqual([sameTextOtherCard]);
    expect(stored()).toEqual({ cardIds: [], phrases: [sameTextOtherCard] });
  });
});

describe("loadFavouritesState", () => {
  it("returns an empty state when nothing is stored", () => {
    expect(loadFavouritesState()).toEqual(EMPTY);
  });

  it("round-trips valid state without rewriting storage", () => {
    const state: FavouritesState = {
      cardIds: ["TC001", "TC014"],
      phrases: [phrase("TC001", "What happened next?")],
    };
    saveFavouritesState(state);
    const setItem = vi.spyOn(Storage.prototype, "setItem");
    expect(loadFavouritesState()).toEqual(state);
    expect(setItem).not.toHaveBeenCalled();
  });

  it("fills a missing field with its default", () => {
    localStorage.setItem(KEY, JSON.stringify({ cardIds: ["TC003"] }));
    expect(loadFavouritesState()).toEqual({ cardIds: ["TC003"], phrases: [] });
  });

  describe("phrase normalisation migration", () => {
    it("strips full-wrap quotes, converts ellipses and applies rewordings", () => {
      localStorage.setItem(
        KEY,
        JSON.stringify({
          cardIds: ["TC028"],
          phrases: [
            phrase("TC001", '"Tell me more about that."'),
            phrase("TC001", "'Single quoted'"),
            phrase("TC001", "And then…"),
            phrase("TC028", '"Let me think for a second."'),
            phrase("TC028", "The honest answer is…"),
            phrase("TC003", "In one sentence: …"),
            phrase(
              "TC015",
              "The next step is X, and [name] owns it by [date].",
            ),
            phrase("TC001", "Already clean."),
          ],
        }),
      );

      const expected: FavouritesState = {
        cardIds: ["TC028"],
        phrases: [
          phrase("TC001", "Tell me more about that."),
          phrase("TC001", "Single quoted"),
          phrase("TC001", "And then..."),
          phrase("TC028", "Let me take a second with that."),
          phrase("TC028", "My honest take is..."),
          phrase("TC003", "Up front: ..."),
          phrase("TC015", "The next step is X, and [Name] owns it by [date]."),
          phrase("TC001", "Already clean."),
        ],
      };
      expect(loadFavouritesState()).toEqual(expected);
      // The migrated state is written back...
      expect(stored()).toEqual(expected);
      // ...and a second load is a no-op.
      const setItem = vi.spyOn(Storage.prototype, "setItem");
      expect(loadFavouritesState()).toEqual(expected);
      expect(setItem).not.toHaveBeenCalled();
    });

    it("only applies rewordings to the card they belong to", () => {
      const other = phrase("TC001", "Let me think for a second.");
      localStorage.setItem(
        KEY,
        JSON.stringify({ cardIds: [], phrases: [other] }),
      );
      expect(loadFavouritesState().phrases).toEqual([other]);
    });

    it("leaves a lone quote character alone", () => {
      const lone = phrase("TC001", '"');
      localStorage.setItem(
        KEY,
        JSON.stringify({ cardIds: [], phrases: [lone] }),
      );
      expect(loadFavouritesState().phrases).toEqual([lone]);
    });
  });

  describe("corrupted storage", () => {
    it.each(["{nope", "null", "[]", '["TC001"]', '"TC001"', "12", "false"])(
      "falls back to an empty state for %s",
      (raw) => {
        localStorage.setItem(KEY, raw);
        expect(loadFavouritesState()).toEqual(EMPTY);
      },
    );

    it("drops a non-array phrases field but keeps valid card ids", () => {
      localStorage.setItem(
        KEY,
        JSON.stringify({ cardIds: ["TC001"], phrases: "x" }),
      );
      expect(loadFavouritesState()).toEqual({
        cardIds: ["TC001"],
        phrases: [],
      });
    });

    it("keeps valid entries and drops malformed ones", () => {
      const good = phrase("TC002", "Good phrase.");
      localStorage.setItem(
        KEY,
        JSON.stringify({
          cardIds: ["TC001", 7, null, { id: "TC9" }, "TC002"],
          phrases: [
            good,
            null,
            "text",
            { cardId: "TC001", cardTitle: "T", groupLabel: "G" }, // no text
            { ...good, cardId: 5 },
            { ...good, groupLabel: undefined },
          ],
        }),
      );
      expect(loadFavouritesState()).toEqual({
        cardIds: ["TC001", "TC002"],
        phrases: [good],
      });
    });

    it("does not crash when cardIds is not an array", () => {
      localStorage.setItem(
        KEY,
        JSON.stringify({ cardIds: "TC001", phrases: [] }),
      );
      const state = loadFavouritesState();
      expect(state.cardIds).toEqual([]);
      // Toggling afterwards works normally
      expect(toggleFavouriteCard(state, "TC001").cardIds).toEqual(["TC001"]);
    });
  });
});

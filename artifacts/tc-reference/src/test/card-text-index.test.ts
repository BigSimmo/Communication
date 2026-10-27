import { describe, expect, it, vi } from "vitest";
import { CARD_DATA } from "../lib/cards";
import {
  projectCardText,
  type CardTextEntry,
} from "../lib/card-text-index-build";
import { loadCardTextIndex } from "../lib/card-text-index";
import {
  MAX_TEXT_INDEX_BYTES,
  verifyOfflineTextIndex,
} from "../../scripts/verify-card-build";

vi.mock("../lib/card-loader", () => ({
  loadAllCards: vi.fn().mockResolvedValue({ TC001: { whyItWorks: "x" } }),
  loadCard: vi.fn(),
}));

describe("card text index (F-02)", () => {
  it("keeps exactly the text search and phrases need, for every card", () => {
    for (const [id, card] of Object.entries(CARD_DATA)) {
      const entry: CardTextEntry = projectCardText(card);
      expect(entry.phraseBank, id).toEqual(
        card.phraseBank.map((g) => ({ ...g })),
      );
      expect(entry.scenarios).toEqual(card.scenarios);
      expect(entry.whyItWorks).toBe(card.whyItWorks);
      expect(entry.overview).toEqual({
        bestFor: card.overview.bestFor,
        coreFormula: card.overview.coreFormula,
      });
      expect(entry).not.toHaveProperty("drill");
    }
  });

  it("stays well under the precache budget", () => {
    const all = Object.fromEntries(
      Object.entries(CARD_DATA).map(([id, c]) => [id, projectCardText(c)]),
    );
    expect(JSON.stringify(all).length).toBeLessThan(MAX_TEXT_INDEX_BYTES);
  });

  it("falls back to loading every card when the index is absent", async () => {
    await expect(loadCardTextIndex()).resolves.toEqual({
      TC001: { whyItWorks: "x" },
    });
  });
});

describe("verifyOfflineTextIndex", () => {
  const file = "assets/card-text-data-abc123.js";
  const read = () => new Uint8Array(10);

  it("accepts one precached, small index", () => {
    expect(
      verifyOfflineTextIndex([file, "assets/x.js"], `[{url:"${file}"}]`, read),
    ).toMatchObject({ file, bytes: 10, precached: true });
  });

  it("rejects a missing, duplicated, unprecached or oversized index", () => {
    expect(() => verifyOfflineTextIndex([], "", read)).toThrow(/exactly one/);
    expect(() =>
      verifyOfflineTextIndex(
        [file, "assets/card-text-data-zzz999.js"],
        file,
        read,
      ),
    ).toThrow(/exactly one/);
    expect(() => verifyOfflineTextIndex([file], "", read)).toThrow(/precache/);
    expect(() =>
      verifyOfflineTextIndex(
        [file],
        file,
        () => new Uint8Array(MAX_TEXT_INDEX_BYTES + 1),
      ),
    ).toThrow(/above/);
  });
});

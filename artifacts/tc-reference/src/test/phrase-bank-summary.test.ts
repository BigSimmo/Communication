import { describe, expect, it } from "vitest";
import { phraseBankSummary } from "../../card-text-index-plugin";
import { loadAllCards } from "@/lib/card-loader";
import { projectCardText } from "@/lib/card-text-index-build";
import { loadAllAggregatedPhrases } from "@/lib/phrases-data";

describe("build-time Phrase Bank summary", () => {
  it("counts exactly the phrases the page aggregates at runtime", async () => {
    const cards = await loadAllCards();
    // The build plugin projects each card the same way before summarising.
    const index = Object.fromEntries(
      Object.entries(cards).map(([id, card]) => [id, projectCardText(card)]),
    );
    const phrases = await loadAllAggregatedPhrases();
    expect(phrases.length).toBeGreaterThan(1000);
    expect(phraseBankSummary(index)).toEqual({ phraseCount: phrases.length });
  });
});

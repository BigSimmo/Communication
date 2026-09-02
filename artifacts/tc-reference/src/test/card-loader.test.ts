import { describe, expect, it } from "vitest";
import { loadAllCards, loadCard } from "../lib/card-loader";

describe("card loader", () => {
  it("loads and caches one requested card", async () => {
    const firstLoad = loadCard("TC001");
    const secondLoad = loadCard("TC001");

    expect(secondLoad).toBe(firstLoad);

    const card = await firstLoad;
    expect(card?.id).toBe("TC001");
    expect(await secondLoad).toBe(card);
  });

  it("returns null for an unknown card instead of substituting content", async () => {
    const firstLoad = loadCard("not-a-card");
    const secondLoad = loadCard("not-a-card");

    expect(secondLoad).toBe(firstLoad);
    await expect(firstLoad).resolves.toBeNull();
  });

  it("loads and caches the aggregate catalogue on demand", async () => {
    const firstLoad = loadAllCards();
    const secondLoad = loadAllCards();

    expect(secondLoad).toBe(firstLoad);

    const cards = await firstLoad;
    expect(Object.keys(cards)).toHaveLength(98);
    expect(cards.TC001.id).toBe("TC001");
    expect(await secondLoad).toBe(cards);
  });
});

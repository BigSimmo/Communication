import { describe, expect, it, vi } from "vitest";
import { createCardLoader, loadAllCards, loadCard } from "../lib/card-loader";
import { TC001 } from "../lib/cards/TC001";
import { TC002 } from "../lib/cards/TC002";

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

  it("retries an individual card import after a failure", async () => {
    const importCard = vi
      .fn()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValueOnce({ TC001 });
    const loader = createCardLoader(new Map([["TC001", importCard]]));

    const failedLoad = loader.loadCard("TC001");
    expect(loader.loadCard("TC001")).toBe(failedLoad);
    await expect(failedLoad).rejects.toThrow("offline");

    await expect(loader.loadCard("TC001")).resolves.toBe(TC001);
    expect(importCard).toHaveBeenCalledTimes(2);
  });

  it("rebuilds an aggregate load after a card import failure", async () => {
    const importFirstCard = vi.fn().mockResolvedValue({ TC001 });
    const importSecondCard = vi
      .fn()
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValueOnce({ TC002 });
    const loader = createCardLoader(
      new Map([
        ["TC001", importFirstCard],
        ["TC002", importSecondCard],
      ]),
    );

    const failedLoad = loader.loadAllCards();
    expect(loader.loadAllCards()).toBe(failedLoad);
    await expect(failedLoad).rejects.toThrow("offline");

    const retry = loader.loadAllCards();
    expect(retry).not.toBe(failedLoad);
    await expect(retry).resolves.toEqual({ TC001, TC002 });
    expect(loader.loadAllCards()).toBe(retry);
    expect(importFirstCard).toHaveBeenCalledTimes(1);
    expect(importSecondCard).toHaveBeenCalledTimes(2);
  });
});

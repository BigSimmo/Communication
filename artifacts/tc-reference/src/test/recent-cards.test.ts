import { beforeEach, describe, expect, it, vi } from "vitest";
import { readRecentCards, recordRecentCard } from "../lib/recent-cards";

const KEY = "tc_recent_cards";

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("recent cards (F-12)", () => {
  it("records newest first without duplicates", () => {
    recordRecentCard("TC001");
    recordRecentCard("TC002");
    recordRecentCard("TC001");
    expect(readRecentCards()).toEqual(["TC001", "TC002"]);
  });

  it("keeps at most six", () => {
    for (let i = 1; i <= 8; i++) recordRecentCard(`TC00${i}`);
    expect(readRecentCards()).toEqual([
      "TC008",
      "TC007",
      "TC006",
      "TC005",
      "TC004",
      "TC003",
    ]);
  });

  it("ignores invalid ids", () => {
    recordRecentCard("nope");
    recordRecentCard("TC1");
    expect(localStorage.getItem(KEY)).toBeNull();
  });

  it.each(["{bad", "{}", '"TC001"'])("survives corrupt storage %s", (raw) => {
    localStorage.setItem(KEY, raw);
    expect(readRecentCards()).toEqual([]);
  });

  it("filters junk entries from storage", () => {
    localStorage.setItem(KEY, JSON.stringify(["TC003", 4, "x", "TC004"]));
    expect(readRecentCards()).toEqual(["TC003", "TC004"]);
  });

  it("does not throw when storage is blocked", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    expect(() => recordRecentCard("TC001")).not.toThrow();
  });
});

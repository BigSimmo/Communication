import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useRecentSearches } from "../lib/use-recent-searches";

const KEY = "tc-recent-searches";

function stored(): unknown {
  return JSON.parse(localStorage.getItem(KEY) ?? "null");
}

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("useRecentSearches", () => {
  it("starts empty", () => {
    const { result } = renderHook(() => useRecentSearches());
    expect(result.current.recents).toEqual([]);
  });

  it("puts the newest search first and persists the list", () => {
    const { result } = renderHook(() => useRecentSearches());
    act(() => result.current.addRecent("boundary"));
    act(() => result.current.addRecent("feedback"));
    act(() => result.current.addRecent("TC014"));
    expect(result.current.recents).toEqual(["TC014", "feedback", "boundary"]);
    expect(stored()).toEqual(["TC014", "feedback", "boundary"]);
  });

  it("trims terms and ignores blank ones", () => {
    const { result } = renderHook(() => useRecentSearches());
    act(() => result.current.addRecent("  pause  "));
    act(() => result.current.addRecent("   "));
    act(() => result.current.addRecent(""));
    expect(result.current.recents).toEqual(["pause"]);
  });

  it("de-duplicates case-insensitively, moving the term to the front with its latest casing", () => {
    const { result } = renderHook(() => useRecentSearches());
    act(() => result.current.addRecent("apology"));
    act(() => result.current.addRecent("pause"));
    act(() => result.current.addRecent("Apology"));
    expect(result.current.recents).toEqual(["Apology", "pause"]);
  });

  it("keeps at most five, dropping the oldest", () => {
    const { result } = renderHook(() => useRecentSearches());
    for (const term of ["a1", "a2", "a3", "a4", "a5", "a6", "a7"]) {
      act(() => result.current.addRecent(term));
    }
    expect(result.current.recents).toEqual(["a7", "a6", "a5", "a4", "a3"]);
    expect(stored()).toEqual(["a7", "a6", "a5", "a4", "a3"]);

    // Re-adding an existing term does not evict anything
    act(() => result.current.addRecent("a4"));
    expect(result.current.recents).toEqual(["a4", "a7", "a6", "a5", "a3"]);
  });

  it("clears the list and storage", () => {
    const { result } = renderHook(() => useRecentSearches());
    act(() => result.current.addRecent("x"));
    act(() => result.current.clearRecents());
    expect(result.current.recents).toEqual([]);
    expect(stored()).toEqual([]);
  });

  it("loads a valid stored list unchanged", () => {
    localStorage.setItem(KEY, JSON.stringify(["one", "Two", "three"]));
    const { result } = renderHook(() => useRecentSearches());
    expect(result.current.recents).toEqual(["one", "Two", "three"]);
  });

  it.each(["{x", "null", '{"0":"a"}', '"term"', "5"])(
    "falls back to an empty list for corrupted storage %s",
    (raw) => {
      localStorage.setItem(KEY, raw);
      const { result } = renderHook(() => useRecentSearches());
      expect(result.current.recents).toEqual([]);
    },
  );

  it("drops non-string, blank and duplicate entries and enforces the limit on load", () => {
    localStorage.setItem(
      KEY,
      JSON.stringify([
        "first",
        3,
        null,
        "  ",
        { term: "obj" },
        "FIRST",
        "b",
        "c",
        "d",
        "e",
        "f",
      ]),
    );
    const { result } = renderHook(() => useRecentSearches());
    expect(result.current.recents).toEqual(["first", "b", "c", "d", "e"]);
    // Adding still works on top of the repaired list
    act(() => result.current.addRecent("new"));
    expect(result.current.recents).toEqual(["new", "first", "b", "c", "d"]);
  });

  it("keeps working in memory when storage writes fail", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    const { result } = renderHook(() => useRecentSearches());
    act(() => result.current.addRecent("offline"));
    expect(result.current.recents).toEqual(["offline"]);
  });
});

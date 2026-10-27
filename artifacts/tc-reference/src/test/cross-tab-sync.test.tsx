import { act, render, renderHook, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import Drill from "../pages/drill";
import { loadCard } from "../lib/card-loader";
import { TC001 } from "../lib/cards/TC001";
import { getTodayISO, loadDrillState } from "../lib/drill-state";
import { PlaybookProvider, usePlaybooks } from "../lib/playbook-context";
import { FavouritesProvider, useFavourites } from "../lib/favourites-context";
import { useStorageSync } from "../lib/storage-sync";

/** Simulates another tab writing `key`: storage changes, then the event. */
function writeFromOtherTab(key: string, value: string | null) {
  const oldValue = localStorage.getItem(key);
  if (value === null) localStorage.removeItem(key);
  else localStorage.setItem(key, value);
  act(() => {
    window.dispatchEvent(
      new StorageEvent("storage", {
        key,
        oldValue,
        newValue: value,
        storageArea: localStorage,
      }),
    );
  });
}

vi.mock("wouter");
vi.mock("../lib/card-loader", () => ({
  loadCard: vi.fn(),
  loadAllCards: vi.fn(),
}));

beforeEach(() => {
  localStorage.clear();
  vi.mocked(useLocation).mockReturnValue(["/drill", vi.fn()]);
  vi.mocked(loadCard).mockResolvedValue(TC001);
});

describe("useStorageSync", () => {
  it("fires only for watched keys and for storage.clear()", () => {
    let calls = 0;
    renderHook(() => useStorageSync(["a", "b"], () => calls++));
    writeFromOtherTab("a", "1");
    writeFromOtherTab("other", "1");
    writeFromOtherTab("b", "1");
    act(() => {
      window.dispatchEvent(new StorageEvent("storage", { key: null }));
    });
    expect(calls).toBe(3);
  });

  it("stops listening on unmount", () => {
    let calls = 0;
    const { unmount } = renderHook(() => useStorageSync(["a"], () => calls++));
    unmount();
    writeFromOtherTab("a", "1");
    expect(calls).toBe(0);
  });
});

describe("cross-tab playbooks", () => {
  it("keeps a playbook created in another tab when this tab adds one", () => {
    const { result } = renderHook(() => usePlaybooks(), {
      wrapper: PlaybookProvider,
    });
    const other = {
      id: "pb_other",
      name: "Other tab",
      description: "",
      cardIds: [],
    };
    writeFromOtherTab("tc_playbooks", JSON.stringify([other]));
    expect(result.current.playbooks).toEqual([other]);

    act(() => {
      result.current.createPlaybook("This tab", "");
    });
    const saved = JSON.parse(localStorage.getItem("tc_playbooks") ?? "[]");
    expect(saved.map((p: { name: string }) => p.name)).toEqual([
      "Other tab",
      "This tab",
    ]);
  });

  it("drops a playbook deleted in another tab", () => {
    localStorage.setItem(
      "tc_playbooks",
      JSON.stringify([
        { id: "pb_1", name: "One", description: "", cardIds: [] },
      ]),
    );
    const { result } = renderHook(() => usePlaybooks(), {
      wrapper: PlaybookProvider,
    });
    expect(result.current.playbooks).toHaveLength(1);
    writeFromOtherTab("tc_playbooks", "[]");
    expect(result.current.playbooks).toEqual([]);
    expect(localStorage.getItem("tc_playbooks")).toBe("[]");
  });
});

describe("cross-tab favourites", () => {
  it("builds the next toggle on the other tab's favourites", () => {
    const { result } = renderHook(() => useFavourites(), {
      wrapper: FavouritesProvider,
    });
    writeFromOtherTab(
      "tc_favourites",
      JSON.stringify({ cardIds: ["TC001"], phrases: [] }),
    );
    expect(result.current.isCardFav("TC001")).toBe(true);

    act(() => result.current.toggleCard("TC002"));
    expect(
      JSON.parse(localStorage.getItem("tc_favourites") ?? "{}").cardIds,
    ).toEqual(["TC001", "TC002"]);
  });
});

describe("cross-tab drill progress", () => {
  it("shows a drill completed in another tab instead of offering it again", async () => {
    render(<Drill />);
    expect(
      await screen.findByRole("button", { name: /good/i }),
    ).toBeInTheDocument();

    const before = loadDrillState();
    const completed = {
      ...before,
      cardIndex: 1,
      prevCardIndex: 0,
      prevDayIndex: 0,
      streak: 1,
      lastCompletionDate: getTodayISO(),
    };
    writeFromOtherTab("tc_drill_state", JSON.stringify(completed));

    expect(screen.queryByRole("button", { name: /good/i })).toBeNull();
    expect(loadDrillState()).toEqual(completed);
  });
});

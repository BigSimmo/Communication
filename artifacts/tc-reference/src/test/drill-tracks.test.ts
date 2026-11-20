import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CORE_CARD_IDS, LIBRARY_CATEGORIES } from "../lib/data";
import {
  applySM2,
  CARD_IDS,
  completeDrill,
  CORE_FIRST_CARD_IDS,
  DEFAULT_PACE,
  DRILL_PACES,
  DRILL_RATINGS,
  drillCardId,
  drillTaskIndex,
  getDueCardIds,
  getDueCardsCount,
  loadDrillState,
  loadSRSMap,
  playbookTrack,
  RATING_QUALITY,
  sanitiseDrillState,
  sanitiseDrillTrack,
  saveDrillState,
  setDrillPace,
  setDrillTrack,
  trackCardIds,
  trackDays,
  trackProgress,
  updateSRS,
  type CardSRS,
  type DrillState,
} from "../lib/drill-state";

const DRILL_KEY = "tc_drill_state";
const SRS_KEY = "tc_srs_reviews";

const FRESH: DrillState = {
  cardIndex: 0,
  dayIndex: 0,
  streak: 0,
  lastCompletionDate: null,
  prevCardIndex: -1,
  prevDayIndex: -1,
  order: "core-first",
  track: { kind: "everything" },
  pace: 7,
  rounds: 0,
};

const FIRST_CATEGORY = Object.keys(LIBRARY_CATEGORIES)[0];
const FIRST_CATEGORY_IDS = LIBRARY_CATEGORIES[FIRST_CATEGORY].map((c) => c.id);

/** Complete one drill a day for `days` days, starting today. */
function drillForDays(start: DrillState, days: number) {
  let state = start;
  const visited: string[] = [];
  for (let i = 0; i < days; i++) {
    visited.push(drillCardId(state, state.cardIndex));
    state = completeDrill(state);
    vi.setSystemTime(new Date(Date.now() + 24 * 60 * 60 * 1000));
  }
  return { state, visited };
}

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 2, 10, 12, 0, 0));
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("migration from drills saved before tracks and pace", () => {
  it("reads an old saved state as the Everything track at a week, keeping place and streak", () => {
    const old = {
      cardIndex: 41,
      dayIndex: 4,
      streak: 23,
      lastCompletionDate: "2026-03-09",
      prevCardIndex: 41,
      prevDayIndex: 3,
    };
    localStorage.setItem(DRILL_KEY, JSON.stringify(old));
    const state = loadDrillState();
    expect(state).toEqual({
      ...old,
      track: { kind: "everything" },
      pace: 7,
      rounds: 0,
    });
    // No order field: still id order, so index 41 is the same card as before.
    expect(state.order).toBeUndefined();
    expect(drillCardId(state, state.cardIndex)).toBe(CARD_IDS[41]);
  });

  it("keeps a core-first drill on the same card", () => {
    localStorage.setItem(
      DRILL_KEY,
      JSON.stringify({
        cardIndex: 20,
        dayIndex: 6,
        streak: 2,
        lastCompletionDate: null,
        prevCardIndex: 19,
        prevDayIndex: 6,
        order: "core-first",
      }),
    );
    const state = loadDrillState();
    expect(state.track).toEqual({ kind: "everything" });
    expect(state.pace).toBe(7);
    expect(state.dayIndex).toBe(6);
    expect(drillCardId(state, 20)).toBe(CORE_FIRST_CARD_IDS[20]);
  });

  it("carries on a migrated week the way it ran before", () => {
    localStorage.setItem(
      DRILL_KEY,
      JSON.stringify({ cardIndex: 5, dayIndex: 6, streak: 1 }),
    );
    const next = completeDrill(loadDrillState());
    expect(next.cardIndex).toBe(6);
    expect(next.dayIndex).toBe(0);
    expect(next.pace).toBe(7);
  });

  it("round-trips a new-format state through storage", () => {
    const state: DrillState = {
      ...FRESH,
      cardIndex: FIRST_CATEGORY_IDS.length - 1,
      dayIndex: 1,
      track: { kind: "category", category: FIRST_CATEGORY },
      pace: 3,
      rounds: 1,
    };
    saveDrillState(state);
    expect(loadDrillState()).toEqual(state);
  });

  it.each([
    ["an unknown kind", { kind: "favourites" }],
    ["a missing category", { kind: "category" }],
    [
      "a category that no longer exists",
      { kind: "category", category: "Gone" },
    ],
    [
      "a playbook with no known cards",
      { kind: "playbook", playbookId: "p", cardIds: ["TC999"] },
    ],
    ["a playbook without an id", { kind: "playbook", cardIds: ["TC004"] }],
    ["a string", "core"],
  ])("falls back to Everything for %s", (_label, track) => {
    localStorage.setItem(
      DRILL_KEY,
      JSON.stringify({ ...FRESH, cardIndex: 2, track }),
    );
    const state = loadDrillState();
    expect(state.track).toEqual({ kind: "everything" });
    expect(state.cardIndex).toBe(2);
  });

  it.each([0, 2, 5, "7", null, 7.5])(
    "reads an unknown pace %s as a week",
    (pace) => {
      localStorage.setItem(DRILL_KEY, JSON.stringify({ ...FRESH, pace }));
      expect(loadDrillState().pace).toBe(DEFAULT_PACE);
    },
  );

  it("drops a day or card index the stored track and pace can't hold", () => {
    const state = sanitiseDrillState({
      ...FRESH,
      track: { kind: "core" },
      pace: 3,
      cardIndex: CORE_CARD_IDS.length,
      dayIndex: 3,
      rounds: -1,
    });
    expect(state.cardIndex).toBe(0);
    expect(state.dayIndex).toBe(0);
    expect(state.rounds).toBe(0);
  });
});

describe("tracks", () => {
  it("Everything covers every card in the drill's order", () => {
    expect(trackCardIds(FRESH)).toEqual(CORE_FIRST_CARD_IDS);
    expect(trackCardIds({ ...FRESH, order: undefined })).toEqual(CARD_IDS);
  });

  it("Core 15 is the Start here set in its curated order", () => {
    const ids = trackCardIds({ ...FRESH, track: { kind: "core" } });
    expect(ids).toEqual(CORE_CARD_IDS);
    expect(ids).toHaveLength(15);
  });

  it("a category track lists that category's cards", () => {
    const state = {
      ...FRESH,
      track: { kind: "category" as const, category: FIRST_CATEGORY },
    };
    expect(trackCardIds(state)).toEqual(FIRST_CATEGORY_IDS);
    expect(drillCardId(state, 0)).toBe(FIRST_CATEGORY_IDS[0]);
  });

  it("a playbook track keeps playbook order and drops unknown or repeated cards", () => {
    const track = playbookTrack({
      id: "p1",
      cardIds: ["TC016", "TC999", "TC004", "TC016"],
    });
    expect(track).toEqual({
      kind: "playbook",
      playbookId: "p1",
      cardIds: ["TC016", "TC004"],
    });
    expect(trackCardIds({ ...FRESH, track })).toEqual(["TC016", "TC004"]);
  });

  it("drillCardId falls back to the first card for an out-of-range index", () => {
    expect(drillCardId({ ...FRESH, track: { kind: "core" } }, 99)).toBe(
      CORE_CARD_IDS[0],
    );
  });

  it("sanitiseDrillTrack returns null for anything unreadable", () => {
    expect(sanitiseDrillTrack(undefined)).toBeNull();
    expect(sanitiseDrillTrack({ kind: "core", extra: 1 })).toEqual({
      kind: "core",
    });
  });
});

describe("pace", () => {
  it("offers one day, three days or a week per technique", () => {
    expect(DRILL_PACES).toEqual([1, 3, 7]);
  });

  it("Core 15 at three days finishes in about six weeks", () => {
    const start = setDrillPace(setDrillTrack(FRESH, { kind: "core" }), 3);
    const days = trackDays({ kind: "core" }, 3);
    expect(days).toBe(45);
    expect(Math.round(days / 7)).toBe(6);

    const { state, visited } = drillForDays(start, days);
    expect(state.rounds).toBe(1);
    expect(state.cardIndex).toBe(0);
    expect(state.dayIndex).toBe(0);
    expect(state.streak).toBe(days);
    // Each core card for exactly three days, in order.
    expect(visited).toEqual(CORE_CARD_IDS.flatMap((id) => [id, id, id]));
  });

  it("is not finished one day short", () => {
    const start = setDrillPace(setDrillTrack(FRESH, { kind: "core" }), 3);
    const { state } = drillForDays(start, 44);
    expect(state.rounds).toBe(0);
    expect(state.cardIndex).toBe(14);
    expect(state.dayIndex).toBe(2);
  });

  it("one day per technique moves to a new card every day", () => {
    const start = setDrillPace(setDrillTrack(FRESH, { kind: "core" }), 1);
    const { state, visited } = drillForDays(start, 3);
    expect(visited).toEqual(CORE_CARD_IDS.slice(0, 3));
    expect(state.cardIndex).toBe(3);
    expect(state.dayIndex).toBe(0);
  });

  it("maps each day of a pace onto the card's seven tasks", () => {
    expect([0, 1, 2, 3, 4, 5, 6].map((d) => drillTaskIndex(7, d))).toEqual([
      0, 1, 2, 3, 4, 5, 6,
    ]);
    expect([0, 1, 2].map((d) => drillTaskIndex(3, d))).toEqual([0, 3, 6]);
    expect(drillTaskIndex(1, 0)).toBe(0);
    // Out-of-range days clamp rather than read past the task list.
    expect(drillTaskIndex(3, 9)).toBe(6);
    expect(drillTaskIndex(3, -1)).toBe(0);
  });

  it("reports progress through the track", () => {
    const state: DrillState = {
      ...FRESH,
      track: { kind: "core" },
      pace: 3,
      cardIndex: 2,
      dayIndex: 1,
    };
    expect(trackProgress(state)).toEqual({
      cardNumber: 3,
      cardCount: 15,
      dayNumber: 2,
      daysPerCard: 3,
      daysDone: 7,
      daysTotal: 45,
    });
  });
});

describe("changing track or pace", () => {
  const midway: DrillState = {
    ...FRESH,
    cardIndex: 30,
    dayIndex: 5,
    streak: 12,
    lastCompletionDate: "2026-03-09",
    prevCardIndex: 30,
    prevDayIndex: 4,
    rounds: 2,
  };

  it("a new track starts at its first card and keeps the streak and pace", () => {
    const next = setDrillTrack(midway, { kind: "core" });
    expect(next).toEqual({
      ...midway,
      track: { kind: "core" },
      cardIndex: 0,
      dayIndex: 0,
      prevCardIndex: -1,
      prevDayIndex: -1,
      rounds: 0,
    });
  });

  it("ignores a track that can't be drilled", () => {
    expect(setDrillTrack(midway, { kind: "category", category: "Gone" })).toBe(
      midway,
    );
    expect(
      setDrillTrack(midway, { kind: "playbook", playbookId: "p", cardIds: [] }),
    ).toBe(midway);
  });

  it("a slower or faster pace keeps the card and clamps the day", () => {
    const faster = setDrillPace(midway, 3);
    expect(faster.cardIndex).toBe(30);
    expect(faster.dayIndex).toBe(2);
    expect(faster.streak).toBe(12);
    expect(setDrillPace(faster, 7).dayIndex).toBe(2);
    expect(setDrillPace(midway, 1).dayIndex).toBe(0);
  });

  it("ignores an unknown pace", () => {
    expect(setDrillPace(midway, 5 as never)).toBe(midway);
  });
});

describe("ratings feed SM-2", () => {
  function fresh(): CardSRS {
    return {
      cardId: "TC004",
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      nextReviewDate: "2026-03-10",
    };
  }

  it("offers Not yet, Getting there and Confident", () => {
    expect(DRILL_RATINGS).toEqual(["not-yet", "getting-there", "confident"]);
  });

  it("maps them to SM-2 qualities 2, 3 and 5", () => {
    expect(RATING_QUALITY["not-yet"]).toBe(2);
    expect(RATING_QUALITY["getting-there"]).toBe(3);
    expect(RATING_QUALITY.confident).toBe(5);
  });

  it("Not yet brings the card back tomorrow and resets its run", () => {
    updateSRS("TC004", "confident");
    vi.setSystemTime(new Date(2026, 2, 11, 12));
    const after = updateSRS("TC004", "not-yet");
    expect(after.repetition).toBe(0);
    expect(after.interval).toBe(1);
    expect(after.nextReviewDate).toBe("2026-03-12");
    expect(after.efactor).toBeCloseTo(2.6 - 0.32, 10);
  });

  it("Getting there passes but brings the card back sooner than Confident", () => {
    let unsure = fresh();
    let sure = fresh();
    for (let i = 0; i < 4; i++) {
      unsure = applySM2(unsure, RATING_QUALITY["getting-there"]);
      sure = applySM2(sure, RATING_QUALITY.confident);
    }
    expect(unsure.repetition).toBe(4);
    expect(unsure.efactor).toBeLessThan(2.5);
    expect(sure.efactor).toBeGreaterThan(2.5);
    expect(unsure.interval).toBeLessThan(sure.interval);
  });

  it("persists the review so it shows as due when its date comes", () => {
    updateSRS("TC004", "getting-there");
    updateSRS("TC006", "confident");
    expect(loadSRSMap().TC004.nextReviewDate).toBe("2026-03-11");
    expect(getDueCardsCount()).toBe(0);
    vi.setSystemTime(new Date(2026, 2, 11, 12));
    expect(getDueCardIds()).toEqual(["TC004", "TC006"]);
  });

  it("still accepts the earlier Hard, Good and Easy ratings", () => {
    expect(updateSRS("TC004", "hard").repetition).toBe(0);
    expect(updateSRS("TC006", "good").repetition).toBe(1);
    expect(updateSRS("TC011", "easy").efactor).toBeCloseTo(2.6, 10);
  });
});

describe("getDueCardIds", () => {
  it("lists due cards most overdue first, ties by card id", () => {
    const entry = (cardId: string, nextReviewDate: string): CardSRS => ({
      cardId,
      interval: 1,
      repetition: 1,
      efactor: 2.5,
      nextReviewDate,
    });
    localStorage.setItem(
      SRS_KEY,
      JSON.stringify({
        TC016: entry("TC016", "2026-03-10"),
        TC006: entry("TC006", "2026-03-01"),
        TC004: entry("TC004", "2026-03-10"),
        TC011: entry("TC011", "2026-03-11"),
      }),
    );
    expect(getDueCardIds()).toEqual(["TC006", "TC004", "TC016"]);
    expect(getDueCardIds(loadSRSMap(), "2026-03-11")).toEqual([
      "TC006",
      "TC004",
      "TC016",
      "TC011",
    ]);
  });
});

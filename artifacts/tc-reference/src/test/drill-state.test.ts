import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  applySM2,
  CARD_IDS,
  completeDrill,
  DRILL_STATE_EVENT,
  getDueCardsCount,
  getTodayISO,
  isCompletedToday,
  isStreakActive,
  loadDrillState,
  loadSRSMap,
  MIN_EFACTOR,
  saveDrillState,
  updateSRS,
  type CardSRS,
  type DrillState,
} from "../lib/drill-state";

const DRILL_KEY = "tc_drill_state";
const SRS_KEY = "tc_srs_reviews";

const DEFAULT_DRILL: DrillState = {
  cardIndex: 0,
  dayIndex: 0,
  streak: 0,
  lastCompletionDate: null,
  prevCardIndex: -1,
  prevDayIndex: -1,
};

function fresh(overrides: Partial<CardSRS> = {}): CardSRS {
  return {
    cardId: "TC001",
    interval: 0,
    repetition: 0,
    efactor: 2.5,
    nextReviewDate: "2026-03-10",
    ...overrides,
  };
}

function storedSRS(): Record<string, CardSRS> {
  return JSON.parse(localStorage.getItem(SRS_KEY) ?? "{}");
}

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  // Local noon, so date arithmetic is unambiguous in any time zone.
  vi.setSystemTime(new Date(2026, 2, 10, 12, 0, 0));
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("applySM2 (SM-2 update)", () => {
  it.each([
    // quality, repetition, interval, efactor after one response from fresh
    [0, 0, 1, 1.7],
    [1, 0, 1, 1.96],
    [2, 0, 1, 2.18],
    [3, 1, 1, 2.36],
    [4, 1, 1, 2.5],
    [5, 1, 1, 2.6],
  ])(
    "quality %i from a fresh card -> repetition %i, interval %i, efactor %f",
    (q, repetition, interval, efactor) => {
      const next = applySM2(fresh(), q);
      expect(next.repetition).toBe(repetition);
      expect(next.interval).toBe(interval);
      expect(next.efactor).toBeCloseTo(efactor, 10);
      expect(next.cardId).toBe("TC001");
    },
  );

  it("progresses the interval 1, 6, then round(interval x efactor)", () => {
    let card = fresh();
    const intervals: number[] = [];
    for (let i = 0; i < 5; i++) {
      card = applySM2(card, 4); // quality 4 keeps efactor at 2.5
      intervals.push(card.interval);
    }
    // 6 * 2.5 = 15; 15 * 2.5 = 37.5 -> 38; 38 * 2.5 = 95
    expect(intervals).toEqual([1, 6, 15, 38, 95]);
    expect(card.repetition).toBe(5);
    expect(card.efactor).toBeCloseTo(2.5, 10);
  });

  it("uses the efactor from before the current response when scaling", () => {
    let card = fresh();
    card = applySM2(card, 5); // i=1, ef 2.6
    card = applySM2(card, 5); // i=6, ef 2.7
    card = applySM2(card, 5); // i=round(6 * 2.7)=16, ef 2.8
    expect(card.interval).toBe(16);
    expect(card.efactor).toBeCloseTo(2.8, 10);
  });

  it("resets repetition and interval on a failed recall (quality < 3)", () => {
    const learned = fresh({ repetition: 4, interval: 38, efactor: 2.5 });
    const next = applySM2(learned, 2);
    expect(next.repetition).toBe(0);
    expect(next.interval).toBe(1);
    expect(next.efactor).toBeCloseTo(2.18, 10);
    // The next pass restarts the 1, 6, ... ladder
    expect(applySM2(next, 4).interval).toBe(1);
  });

  it("floors the efactor at 1.3", () => {
    let card = fresh();
    const efactors: number[] = [];
    for (let i = 0; i < 5; i++) {
      card = applySM2(card, 2);
      efactors.push(card.efactor);
    }
    expect(efactors[0]).toBeCloseTo(2.18, 10);
    expect(efactors[1]).toBeCloseTo(1.86, 10);
    expect(efactors[2]).toBeCloseTo(1.54, 10);
    expect(efactors[3]).toBe(MIN_EFACTOR); // 1.22 floored
    expect(efactors[4]).toBe(MIN_EFACTOR);
    expect(applySM2(fresh({ efactor: 1.3 }), 0).efactor).toBe(1.3);
  });

  it("clamps out-of-range quality to 0..5", () => {
    expect(applySM2(fresh(), 9)).toEqual(applySM2(fresh(), 5));
    expect(applySM2(fresh(), -3)).toEqual(applySM2(fresh(), 0));
  });

  it("schedules the next review as a local calendar date", () => {
    // Just after local midnight and just before the next one: the review date
    // must follow the local day, not the UTC day.
    vi.setSystemTime(new Date(2026, 2, 10, 0, 30));
    expect(applySM2(fresh(), 4).nextReviewDate).toBe("2026-03-11");
    vi.setSystemTime(new Date(2026, 2, 10, 23, 30));
    expect(applySM2(fresh(), 4).nextReviewDate).toBe("2026-03-11");
    // Month and year boundaries
    vi.setSystemTime(new Date(2026, 11, 31, 9, 0));
    expect(applySM2(fresh({ repetition: 1, interval: 1 }), 4)).toMatchObject({
      interval: 6,
      nextReviewDate: "2027-01-06",
    });
  });
});

describe("updateSRS", () => {
  it("maps hard/good/easy to qualities 2/4/5 and persists the entry", () => {
    const easy = updateSRS("TC001", "easy");
    expect(easy).toMatchObject({
      cardId: "TC001",
      repetition: 1,
      interval: 1,
      nextReviewDate: "2026-03-11",
    });
    expect(easy.efactor).toBeCloseTo(2.6, 10);

    const good = updateSRS("TC001", "good");
    expect(good).toMatchObject({ repetition: 2, interval: 6 });
    expect(good.nextReviewDate).toBe("2026-03-16");

    const hard = updateSRS("TC001", "hard");
    expect(hard).toMatchObject({ repetition: 0, interval: 1 });
    expect(hard.efactor).toBeCloseTo(2.28, 10);

    expect(storedSRS()).toEqual({ TC001: hard });
  });

  it("keeps other cards' entries untouched", () => {
    const other = fresh({
      cardId: "TC002",
      repetition: 2,
      interval: 6,
      efactor: 2.36,
      nextReviewDate: "2026-03-01",
    });
    localStorage.setItem(SRS_KEY, JSON.stringify({ TC002: other }));
    updateSRS("TC001", "good");
    expect(storedSRS().TC002).toEqual(other);
  });

  it.each([
    ["invalid JSON", "{not json"],
    ["null", "null"],
    ["an array", "[1,2,3]"],
    ["a string", '"x"'],
  ])("starts fresh when the stored map is %s", (_label, raw) => {
    localStorage.setItem(SRS_KEY, raw);
    const next = updateSRS("TC001", "good");
    expect(next).toMatchObject({ repetition: 1, interval: 1, efactor: 2.5 });
    expect(Object.keys(storedSRS())).toEqual(["TC001"]);
  });

  it("restarts a card whose stored entry is malformed instead of producing NaN", () => {
    localStorage.setItem(
      SRS_KEY,
      JSON.stringify({
        TC001: { interval: "6", repetition: 2, efactor: 2.5 },
      }),
    );
    const next = updateSRS("TC001", "good");
    expect(next.interval).toBe(1);
    expect(Number.isNaN(next.efactor)).toBe(false);
    expect(next.nextReviewDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("still returns the update when storage writes fail", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    expect(updateSRS("TC001", "good").interval).toBe(1);
  });
});

describe("getDueCardsCount / loadSRSMap", () => {
  const entry = (nextReviewDate: string): Omit<CardSRS, "cardId"> => ({
    interval: 1,
    repetition: 1,
    efactor: 2.5,
    nextReviewDate,
  });

  it("counts entries due today or earlier", () => {
    localStorage.setItem(
      SRS_KEY,
      JSON.stringify({
        TC001: entry("2026-03-09"),
        TC002: entry("2026-03-10"),
        TC003: entry("2026-03-11"),
        TC004: entry("2025-12-31"),
      }),
    );
    expect(getDueCardsCount()).toBe(3);

    vi.setSystemTime(new Date(2026, 2, 11, 8, 0));
    expect(getDueCardsCount()).toBe(4);

    vi.setSystemTime(new Date(2026, 2, 8, 8, 0));
    expect(getDueCardsCount()).toBe(1);
  });

  it("is 0 with no stored reviews", () => {
    expect(getDueCardsCount()).toBe(0);
  });

  it.each(["{oops", "null", "[]", "42", '"due"'])(
    "is 0 for corrupted storage %s",
    (raw) => {
      localStorage.setItem(SRS_KEY, raw);
      expect(getDueCardsCount()).toBe(0);
      expect(loadSRSMap()).toEqual({});
    },
  );

  it("drops malformed entries and keeps valid ones", () => {
    localStorage.setItem(
      SRS_KEY,
      JSON.stringify({
        TC001: entry("2026-03-01"),
        TC002: { interval: 1, repetition: 1, efactor: 2.5 }, // no date
        TC003: { ...entry("2026-03-01"), interval: "1" },
        TC004: { ...entry("2026-03-01"), efactor: null },
        TC005: { ...entry("2026-03-01"), repetition: -1 },
        TC006: entry("yesterday"),
        TC007: entry("2026-02-30"),
        TC008: null,
        TC009: [1, 2],
        TC010: { ...entry("2026-03-01"), efactor: 1.0 },
      }),
    );
    expect(getDueCardsCount()).toBe(1);
    expect(loadSRSMap()).toEqual({
      TC001: { cardId: "TC001", ...entry("2026-03-01") },
    });
  });

  it("round-trips valid data unchanged", () => {
    const map = {
      TC001: fresh({ repetition: 3, interval: 15, efactor: 2.36 }),
      TC050: fresh({ cardId: "TC050", efactor: 1.3 }),
    };
    localStorage.setItem(SRS_KEY, JSON.stringify(map));
    expect(loadSRSMap()).toEqual(map);
  });
});

describe("daily streak (completeDrill)", () => {
  const base: DrillState = { ...DEFAULT_DRILL, cardIndex: 3, dayIndex: 2 };

  it("starts a streak of 1 on the first completion", () => {
    const next = completeDrill(base);
    expect(next).toEqual({
      cardIndex: 3,
      dayIndex: 3,
      streak: 1,
      lastCompletionDate: "2026-03-10",
      prevCardIndex: 3,
      prevDayIndex: 2,
    });
    expect(isCompletedToday(next)).toBe(true);
    expect(isStreakActive(next)).toBe(true);
  });

  it("extends the streak when yesterday was completed", () => {
    const next = completeDrill({
      ...base,
      streak: 4,
      lastCompletionDate: "2026-03-09",
    });
    expect(next.streak).toBe(5);
  });

  it("does not double count a second completion on the same day", () => {
    const next = completeDrill({
      ...base,
      streak: 4,
      lastCompletionDate: "2026-03-10",
    });
    expect(next.streak).toBe(4);
  });

  it("resets to 1 after a missed day", () => {
    const next = completeDrill({
      ...base,
      streak: 9,
      lastCompletionDate: "2026-03-08",
    });
    expect(next.streak).toBe(1);
  });

  it("treats the last day of the previous month as yesterday", () => {
    vi.setSystemTime(new Date(2026, 2, 1, 12));
    const state = { ...base, streak: 2, lastCompletionDate: "2026-02-28" };
    expect(isStreakActive(state)).toBe(true);
    expect(completeDrill(state).streak).toBe(3);
  });

  it("reports the streak as inactive after a missed day", () => {
    const state = { ...base, streak: 3, lastCompletionDate: "2026-03-08" };
    expect(isStreakActive(state)).toBe(false);
    expect(isCompletedToday(state)).toBe(false);
    vi.setSystemTime(new Date(2026, 2, 9, 12));
    expect(isStreakActive(state)).toBe(true);
  });

  it("advances to the next card after day 7 and wraps at the end", () => {
    expect(completeDrill({ ...base, dayIndex: 6 })).toMatchObject({
      cardIndex: 4,
      dayIndex: 0,
    });
    const last = CARD_IDS.length - 1;
    expect(
      completeDrill({ ...base, cardIndex: last, dayIndex: 6 }),
    ).toMatchObject({ cardIndex: 0, dayIndex: 0, prevCardIndex: last });
  });

  it("getTodayISO uses the local date", () => {
    vi.setSystemTime(new Date(2026, 0, 5, 23, 59));
    expect(getTodayISO()).toBe("2026-01-05");
  });
});

describe("loadDrillState / saveDrillState", () => {
  it("returns defaults when nothing is stored", () => {
    expect(loadDrillState()).toEqual(DEFAULT_DRILL);
  });

  it("round-trips a valid state exactly", () => {
    const state: DrillState = {
      cardIndex: 12,
      dayIndex: 6,
      streak: 40,
      lastCompletionDate: "2026-03-09",
      prevCardIndex: 12,
      prevDayIndex: 5,
    };
    saveDrillState(state);
    expect(JSON.parse(localStorage.getItem(DRILL_KEY)!)).toEqual(state);
    expect(loadDrillState()).toEqual(state);
  });

  it("fills missing fields from defaults (older stored shapes)", () => {
    localStorage.setItem(
      DRILL_KEY,
      JSON.stringify({ cardIndex: 2, dayIndex: 1, streak: 3 }),
    );
    expect(loadDrillState()).toEqual({
      ...DEFAULT_DRILL,
      cardIndex: 2,
      dayIndex: 1,
      streak: 3,
    });
  });

  it.each(["{bad", "null", "[]", "[1,2]", '"state"', "7", "true"])(
    "falls back to defaults for corrupted storage %s",
    (raw) => {
      localStorage.setItem(DRILL_KEY, raw);
      expect(loadDrillState()).toEqual(DEFAULT_DRILL);
    },
  );

  it("replaces each wrong-shaped field with its default and keeps the rest", () => {
    localStorage.setItem(
      DRILL_KEY,
      JSON.stringify({
        cardIndex: "3",
        dayIndex: 9,
        streak: 5,
        lastCompletionDate: "yesterday",
        prevCardIndex: 1.5,
        prevDayIndex: 4,
      }),
    );
    expect(loadDrillState()).toEqual({
      ...DEFAULT_DRILL,
      streak: 5,
      prevDayIndex: 4,
    });
  });

  it("rejects out-of-range card indices and negative streaks", () => {
    localStorage.setItem(
      DRILL_KEY,
      JSON.stringify({
        cardIndex: CARD_IDS.length,
        prevCardIndex: -2,
        streak: -4,
        dayIndex: -1,
      }),
    );
    expect(loadDrillState()).toEqual(DEFAULT_DRILL);
  });

  it("notifies listeners and survives a failing storage write", () => {
    const listener = vi.fn();
    window.addEventListener(DRILL_STATE_EVENT, listener);
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    expect(() => saveDrillState(DEFAULT_DRILL)).not.toThrow();
    expect(listener).toHaveBeenCalledTimes(1);
    window.removeEventListener(DRILL_STATE_EVENT, listener);
  });
});

import { describe, expect, it } from "vitest";
import { LIBRARY_CATEGORIES } from "../lib/data";
import {
  applySM2,
  RATING_QUALITY,
  sanitiseDrillState,
  type CardSRS,
  type DrillState,
} from "../lib/drill-state";
import {
  CORE_TRACK_NAME,
  daysBetween,
  daysLeft,
  drillProgress,
  dueLabel,
  durationLabel,
  gapClause,
  gapLabel,
  returnWords,
  leftLabel,
  previewGaps,
  sameTrack,
  srsStatus,
  takesLabel,
  trackName,
  weekStrip,
} from "../lib/drill-view";

const state = (patch: Partial<DrillState>): DrillState => ({
  ...sanitiseDrillState({}),
  ...patch,
});

describe("track names", () => {
  it("names each kind of track", () => {
    expect(trackName({ kind: "everything" })).toBe("Everything");
    expect(trackName({ kind: "core" })).toBe(CORE_TRACK_NAME);
    expect(CORE_TRACK_NAME).toBe("Core 15");
    expect(
      trackName({ kind: "category", category: "Connection / Warmth" }),
    ).toBe("Connection and warmth");
  });

  it("looks a playbook's name up: saved first, then starter, then plain", () => {
    const track = (playbookId: string) =>
      ({ kind: "playbook", playbookId, cardIds: ["TC001"] }) as const;
    expect(trackName(track("pb_1"), [{ id: "pb_1", name: "Ward round" }])).toBe(
      "Ward round",
    );
    expect(trackName(track("breaking-bad-news-spikes"))).toBe(
      "Breaking bad news",
    );
    expect(trackName(track("pb_gone"))).toBe("Playbook");
  });

  it("treats tracks as the same only when they drill the same cards", () => {
    expect(sameTrack({ kind: "core" }, { kind: "core" })).toBe(true);
    expect(sameTrack({ kind: "core" }, { kind: "everything" })).toBe(false);
    expect(
      sameTrack(
        { kind: "category", category: "Voice / Presence" },
        { kind: "category", category: "Clarity / Direction" },
      ),
    ).toBe(false);
    const pb = (cardIds: string[]) =>
      ({ kind: "playbook", playbookId: "p", cardIds }) as const;
    expect(sameTrack(pb(["TC001", "TC002"]), pb(["TC001", "TC002"]))).toBe(
      true,
    );
    // An edited playbook is a different drill
    expect(sameTrack(pb(["TC001", "TC002"]), pb(["TC002", "TC001"]))).toBe(
      false,
    );
  });
});

describe("how long a track takes", () => {
  it.each([
    [1, "1 day", false],
    [5, "5 days", false],
    [13, "13 days", false],
    [15, "2 weeks", true],
    [45, "6 weeks", true],
    [105, "3 months", true],
    [350, "12 months", true],
    [749, "2 years", true],
  ])("%i days reads as %s", (days, text, about) => {
    expect(durationLabel(days)).toEqual({ text, about });
  });

  it("only says 'about' for rounded lengths", () => {
    expect(takesLabel(45)).toBe("Takes about 6 weeks");
    expect(takesLabel(5)).toBe("Takes 5 days");
    expect(leftLabel(45)).toBe("About 6 weeks left");
    expect(leftLabel(1)).toBe("1 day left");
  });

  it("counts the days left in this round, today included", () => {
    const core = state({ track: { kind: "core" }, pace: 3 });
    expect(daysLeft(core)).toBe(45);
    expect(daysLeft({ ...core, cardIndex: 14, dayIndex: 2 })).toBe(1);
    // At a new pace, a day past its end counts as the last day
    expect(daysLeft({ ...core, cardIndex: 14, dayIndex: 2 }, 1)).toBe(1);
    expect(daysLeft({ ...core, cardIndex: 13, dayIndex: 1 }, 7)).toBe(13);
  });
});

describe("review gaps", () => {
  it("words a gap in everyday terms", () => {
    expect(gapLabel(1)).toBe("Back tomorrow");
    expect(gapLabel(3)).toBe("Back in 3 days");
    expect(gapLabel(7)).toBe("Back in a week");
    expect(gapLabel(13)).toBe("Back in 13 days");
    expect(gapLabel(14)).toBe("Back in 2 weeks");
    expect(gapLabel(18)).toBe("Back in about 3 weeks");
    expect(gapLabel(49)).toBe("Back in 7 weeks");
    expect(gapLabel(90)).toBe("Back in about 3 months");
    expect(gapLabel(400)).toBe("Back in about a year");
    expect(gapClause(1)).toBe("comes back tomorrow");
    expect(gapClause(7)).toBe("comes back in a week");
    expect(returnWords(3)).toBe("in 3 days");
  });

  it("previews exactly the gap the real save would set", () => {
    const current: CardSRS = {
      cardId: "TC001",
      interval: 6,
      repetition: 2,
      efactor: 2.2,
      nextReviewDate: "2026-03-10",
    };
    const gaps = previewGaps("TC001", current);
    for (const rating of ["not-yet", "getting-there", "confident"] as const) {
      expect(gaps[rating]).toBe(
        applySM2(current, RATING_QUALITY[rating]).interval,
      );
    }
    expect(gaps["not-yet"]).toBe(1);
    expect(gaps.confident).toBeGreaterThan(1);
  });

  it("previews a first rating as 1, 3 and 7 days", () => {
    expect(previewGaps("TC001", undefined)).toEqual({
      "not-yet": 1,
      "getting-there": 3,
      confident: 7,
    });
  });

  it("says how late a review is", () => {
    expect(daysBetween("2026-02-27", "2026-03-02")).toBe(3);
    expect(dueLabel("2026-03-10", "2026-03-10")).toBe("Due today");
    expect(dueLabel("2026-03-09", "2026-03-10")).toBe("Due yesterday");
    expect(dueLabel("2026-03-01", "2026-03-10")).toBe("9 days overdue");
  });
});

describe("this week's strip", () => {
  const marks = (
    streak: number,
    lastCompletionDate: string | null,
    today: string,
  ) => weekStrip({ streak, lastCompletionDate }, today).map((d) => d.state);

  it("starts on Monday and marks the days still to come", () => {
    // Thursday 12 March 2026, nothing drilled
    expect(marks(0, null, "2026-03-12")).toEqual([
      "open",
      "open",
      "open",
      "open",
      "ahead",
      "ahead",
      "ahead",
    ]);
  });

  it("marks today and the streak behind it", () => {
    expect(marks(3, "2026-03-12", "2026-03-12")).toEqual([
      "open",
      "done",
      "done",
      "today",
      "ahead",
      "ahead",
      "ahead",
    ]);
  });

  it("keeps yesterday's streak lit before today's drill", () => {
    expect(marks(2, "2026-03-11", "2026-03-12")).toEqual([
      "open",
      "done",
      "done",
      "open",
      "ahead",
      "ahead",
      "ahead",
    ]);
  });

  it("shows nothing for a streak that has lapsed", () => {
    expect(marks(5, "2026-03-09", "2026-03-12")).toEqual([
      "open",
      "open",
      "open",
      "open",
      "ahead",
      "ahead",
      "ahead",
    ]);
  });

  it("handles a long streak on a Sunday and a Monday", () => {
    expect(marks(30, "2026-03-15", "2026-03-15")).toEqual([
      "done",
      "done",
      "done",
      "done",
      "done",
      "done",
      "today",
    ]);
    expect(marks(30, "2026-03-16", "2026-03-16")).toEqual([
      "today",
      "ahead",
      "ahead",
      "ahead",
      "ahead",
      "ahead",
      "ahead",
    ]);
  });
});

describe("progress", () => {
  const review = (patch: Partial<CardSRS> & { cardId: string }): CardSRS => ({
    interval: 3,
    repetition: 1,
    efactor: 2.36,
    nextReviewDate: "2026-03-20",
    ...patch,
  });

  it("reads a technique's status from its latest rating", () => {
    expect(srsStatus(undefined)).toBe("not-started");
    expect(srsStatus(review({ cardId: "TC001", rating: "confident" }))).toBe(
      "confident",
    );
    expect(srsStatus(review({ cardId: "TC001", rating: "not-yet" }))).toBe(
      "not-yet",
    );
  });

  it("reads reviews saved before ratings were kept from their schedule", () => {
    expect(srsStatus(review({ cardId: "TC001", repetition: 0 }))).toBe(
      "not-yet",
    );
    expect(srsStatus(review({ cardId: "TC001", efactor: 2.6 }))).toBe(
      "confident",
    );
    expect(srsStatus(review({ cardId: "TC001", efactor: 2.36 }))).toBe(
      "getting-there",
    );
  });

  it("counts every technique overall and per category", () => {
    const [firstCategory, cards] = Object.entries(LIBRARY_CATEGORIES)[0];
    const [a, b, c] = cards.map((card) => card.id);
    const map = {
      [a]: review({ cardId: a, rating: "confident" }),
      [b]: review({
        cardId: b,
        rating: "getting-there",
        nextReviewDate: "2026-03-09",
      }),
      [c]: review({
        cardId: c,
        rating: "not-yet",
        nextReviewDate: "2026-03-10",
      }),
    };
    const { overall, categories } = drillProgress(map, "2026-03-10");
    const total = Object.values(LIBRARY_CATEGORIES).flat().length;
    expect(overall).toEqual({
      total,
      due: 2,
      byStatus: {
        confident: 1,
        "getting-there": 1,
        "not-yet": 1,
        "not-started": total - 3,
      },
    });
    expect(categories.map((x) => x.category)).toEqual(
      Object.keys(LIBRARY_CATEGORIES),
    );
    expect(categories[0]).toMatchObject({
      category: firstCategory,
      total: cards.length,
      due: 2,
      byStatus: { confident: 1, "not-started": cards.length - 3 },
    });
    expect(categories[1].byStatus["not-started"]).toBe(categories[1].total);
  });
});

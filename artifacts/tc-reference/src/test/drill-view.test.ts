import { describe, expect, it } from "vitest";
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
  dueLabel,
  durationLabel,
  gapClause,
  gapLabel,
  leftLabel,
  previewGaps,
  sameTrack,
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
  it("words a gap of one day as tomorrow", () => {
    expect(gapLabel(1)).toBe("Back tomorrow");
    expect(gapLabel(6)).toBe("Back in 6 days");
    expect(gapClause(1)).toBe("comes back tomorrow");
    expect(gapClause(16)).toBe("comes back in 16 days");
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

  it("previews a first rating as back tomorrow, whatever the rating", () => {
    expect(previewGaps("TC001", undefined)).toEqual({
      "not-yet": 1,
      "getting-there": 1,
      confident: 1,
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

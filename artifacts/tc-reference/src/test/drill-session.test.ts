import { beforeEach, describe, expect, it } from "vitest";
import {
  completeDrill,
  getTodayISO,
  loadDrillState,
  loadSRSMap,
  sanitiseDrillState,
  setDrillPace,
  SRS_STORAGE_KEY,
  updateSRS,
  type DrillState,
} from "../lib/drill-state";
import {
  clearDraft,
  DRILL_NOTE_MAX_LENGTH,
  DRILL_SESSION_KEY,
  draftKey,
  emptyDraft,
  loadDraft,
  loadUndo,
  saveDraft,
  saveUndo,
  undoDrill,
  type DrillUndo,
} from "../lib/drill-session";

const fresh = (): DrillState => sanitiseDrillState({});

function finishOnce(cardId = "TC004"): DrillUndo {
  const before = fresh();
  const srsBefore = loadSRSMap()[cardId] ?? null;
  const srsAfter = updateSRS(cardId, "confident");
  const after = completeDrill(before);
  const undo: DrillUndo = {
    before,
    after,
    cardId,
    srsBefore,
    srsAfter,
    rating: "confident",
    ahead: false,
  };
  saveUndo(undo);
  return undo;
}

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

describe("today's draft", () => {
  it("is tied to one task on one day", () => {
    expect(draftKey("TC004", 2, "2026-03-10")).toBe("TC004:2:2026-03-10");
    const key = draftKey("TC004", 0);
    saveDraft({ ...emptyDraft(key), recallShown: true, rating: "not-yet" });
    expect(loadDraft(key)).toMatchObject({
      recallShown: true,
      rating: "not-yet",
    });
    // Another day of the same card starts clean
    expect(loadDraft(draftKey("TC004", 1))).toEqual(
      emptyDraft(draftKey("TC004", 1)),
    );
  });

  it("is kept for the sitting only: never in the saved progress", () => {
    saveDraft({ ...emptyDraft("k"), note: "private thought" });
    expect(localStorage.length).toBe(0);
    expect(sessionStorage.getItem(DRILL_SESSION_KEY)).toContain(
      "private thought",
    );
  });

  it("ignores anything wrong-shaped", () => {
    sessionStorage.setItem(DRILL_SESSION_KEY, "{not json");
    expect(loadDraft("k")).toEqual(emptyDraft("k"));
    sessionStorage.setItem(
      DRILL_SESSION_KEY,
      JSON.stringify({
        draft: {
          key: "k",
          recallShown: "yes",
          note: "x".repeat(DRILL_NOTE_MAX_LENGTH + 50),
          rating: "easy",
          ahead: 1,
        },
      }),
    );
    const draft = loadDraft("k");
    expect(draft.recallShown).toBe(false);
    expect(draft.rating).toBeNull();
    expect(draft.ahead).toBe(false);
    expect(draft.note).toHaveLength(DRILL_NOTE_MAX_LENGTH);
  });

  it("can be cleared without losing the undo", () => {
    const undo = finishOnce();
    saveDraft(emptyDraft("k"));
    clearDraft();
    expect(loadUndo(undo.after)).not.toBeNull();
  });
});

describe("undo", () => {
  it("is offered while the saved drill is what the finish left", () => {
    const undo = finishOnce();
    expect(loadUndo(undo.after)).toEqual(undo);
  });

  it("is withdrawn once the drill has moved on", () => {
    const undo = finishOnce();
    // Progress made elsewhere, or a setting changed since
    expect(loadUndo(completeDrill(undo.after))).toBeNull();
    expect(loadUndo(setDrillPace(undo.after, 3))).toBeNull();
    // A finish from another day
    expect(loadUndo(undo.after, "2099-01-01")).toBeNull();
  });

  it("is withdrawn when the record is damaged", () => {
    const undo = finishOnce();
    sessionStorage.setItem(
      DRILL_SESSION_KEY,
      JSON.stringify({ undo: { ...undo, rating: "superb" } }),
    );
    expect(loadUndo(undo.after)).toBeNull();
  });

  it("is withdrawn once the technique has been reviewed again", () => {
    const undo = finishOnce();
    // A review sheet left open in another tab saves its rating afterwards
    updateSRS("TC004", "not-yet");
    expect(loadUndo(undo.after)).toBeNull();
  });

  it("never overwrites a review saved after the finish", () => {
    const undo = finishOnce();
    const later = updateSRS("TC004", "getting-there");
    // Undo was already on screen when the later review landed
    const restored = undoDrill(undo);
    expect(restored).toEqual(undo.before);
    expect(loadSRSMap().TC004).toEqual(later);
  });

  it("restores the drill and removes a review record the finish created", () => {
    const undo = finishOnce();
    expect(loadSRSMap().TC004).toBeDefined();
    const restored = undoDrill(undo);
    expect(restored).toEqual(undo.before);
    expect(loadDrillState()).toEqual(undo.before);
    expect(loadSRSMap().TC004).toBeUndefined();
    expect(loadUndo(undo.after)).toBeNull();
  });

  it("restores an earlier review record and leaves other cards alone", () => {
    localStorage.setItem(
      SRS_STORAGE_KEY,
      JSON.stringify({
        TC004: {
          cardId: "TC004",
          interval: 6,
          repetition: 2,
          efactor: 2.36,
          nextReviewDate: getTodayISO(),
        },
        TC001: {
          cardId: "TC001",
          interval: 1,
          repetition: 1,
          efactor: 2.5,
          nextReviewDate: "2026-01-02",
        },
      }),
    );
    const earlier = loadSRSMap();
    const undo = finishOnce();
    expect(loadSRSMap().TC004.interval).not.toBe(6);
    undoDrill(undo);
    expect(loadSRSMap()).toEqual(earlier);
  });

  it("reopens the task with its rating still chosen", () => {
    const undo = finishOnce();
    undoDrill(undo);
    expect(loadDraft(draftKey("TC004", 0))).toMatchObject({
      rating: "confident",
      recallShown: true,
      ahead: false,
    });
  });
});

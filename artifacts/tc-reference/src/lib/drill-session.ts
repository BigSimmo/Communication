import {
  DRILL_RATINGS,
  getTodayISO,
  loadSRSMap,
  sanitiseDrillState,
  sanitiseSRSMap,
  saveDrillState,
  SRS_STORAGE_KEY,
  type CardSRS,
  type DrillRating,
  type DrillState,
} from "./drill-state";
import { isOneOf, isRecord, safeParseJSON } from "./storage-validation";

// What the Daily Drill screen needs to remember for a sitting, not for good:
// where the reader was in today's task (so opening the full card and coming
// back keeps their place) and what the last "Finish" changed (so Undo can put
// it back). It lives in sessionStorage: it is gone when the app is closed,
// is never backed up, and adds nothing to the saved drill progress.

export const DRILL_SESSION_KEY = "tc_drill_session";

/** The longest reflection line kept. */
export const DRILL_NOTE_MAX_LENGTH = 200;

/** Progress through one day's task. */
export interface DrillDraft {
  /** Which task this belongs to: see draftKey. */
  key: string;
  recallShown: boolean;
  note: string;
  rating: DrillRating | null;
  /** The reader chose to do the next task early, after finishing today's. */
  ahead: boolean;
}

/** What one "Finish" changed, so it can be put back. */
export interface DrillUndo {
  before: DrillState;
  after: DrillState;
  cardId: string;
  /** The card's review record before the rating, or null if it had none. */
  srsBefore: CardSRS | null;
  /** The record the rating left, to tell whether it has been reviewed since. */
  srsAfter: CardSRS;
  rating: DrillRating;
  /** The task was done early, on a day already completed. */
  ahead: boolean;
}

/** One task on one day: a draft never carries over to another. */
export function draftKey(
  cardId: string,
  dayIndex: number,
  today: string = getTodayISO(),
): string {
  return `${cardId}:${dayIndex}:${today}`;
}

export function emptyDraft(key: string): DrillDraft {
  return { key, recallShown: false, note: "", rating: null, ahead: false };
}

function readSession(): Record<string, unknown> {
  try {
    const raw = sessionStorage.getItem(DRILL_SESSION_KEY);
    const value = raw ? safeParseJSON(raw) : null;
    return isRecord(value) ? value : {};
  } catch {
    return {};
  }
}

function writeSession(patch: Record<string, unknown>): void {
  // Best-effort, like the drill's own saves: private browsing or a full
  // store must not stop the drill.
  try {
    sessionStorage.setItem(
      DRILL_SESSION_KEY,
      JSON.stringify({ ...readSession(), ...patch }),
    );
  } catch {}
}

/** The saved draft for this task, or a fresh one. */
export function loadDraft(key: string): DrillDraft {
  const value = readSession().draft;
  if (!isRecord(value) || value.key !== key) return emptyDraft(key);
  return {
    key,
    recallShown: value.recallShown === true,
    note:
      typeof value.note === "string"
        ? value.note.slice(0, DRILL_NOTE_MAX_LENGTH)
        : "",
    rating: isOneOf(value.rating, DRILL_RATINGS) ? value.rating : null,
    ahead: value.ahead === true,
  };
}

export function saveDraft(draft: DrillDraft): void {
  writeSession({ draft });
}

export function clearDraft(): void {
  writeSession({ draft: null });
}

function sameState(a: DrillState, b: DrillState): boolean {
  return (
    a.cardIndex === b.cardIndex &&
    a.dayIndex === b.dayIndex &&
    a.streak === b.streak &&
    a.lastCompletionDate === b.lastCompletionDate &&
    a.prevCardIndex === b.prevCardIndex &&
    a.prevDayIndex === b.prevDayIndex &&
    a.order === b.order &&
    a.pace === b.pace &&
    a.rounds === b.rounds &&
    JSON.stringify(a.track) === JSON.stringify(b.track)
  );
}

function sameSRS(a: CardSRS | undefined, b: CardSRS): boolean {
  return (
    a !== undefined &&
    a.cardId === b.cardId &&
    a.interval === b.interval &&
    a.repetition === b.repetition &&
    a.efactor === b.efactor &&
    a.nextReviewDate === b.nextReviewDate
  );
}

export function saveUndo(undo: DrillUndo): void {
  writeSession({ undo });
}

export function clearUndo(): void {
  writeSession({ undo: null });
}

/**
 * The last finish, if it can still be undone: it happened today, and the
 * saved drill and the card's review record are exactly what that finish
 * left. Anything else (a new day, a track change, progress or a review made
 * in another tab) means putting the old state back would lose work, so
 * there is nothing to undo.
 */
export function loadUndo(
  current: DrillState,
  today: string = getTodayISO(),
  srsMap: Record<string, CardSRS> = loadSRSMap(),
): DrillUndo | null {
  const value = readSession().undo;
  if (!isRecord(value)) return null;
  if (typeof value.cardId !== "string") return null;
  if (!isOneOf(value.rating, DRILL_RATINGS)) return null;
  if (!isRecord(value.before) || !isRecord(value.after)) return null;
  const after = sanitiseDrillState(value.after);
  if (after.lastCompletionDate !== today || !sameState(after, current))
    return null;
  const cardId = value.cardId;
  const record = (entry: unknown): CardSRS | undefined =>
    sanitiseSRSMap({ [cardId]: entry })[cardId];
  const srsAfter = record(value.srsAfter);
  if (!srsAfter || !sameSRS(srsMap[cardId], srsAfter)) return null;
  return {
    before: sanitiseDrillState(value.before),
    after,
    cardId,
    srsBefore: record(value.srsBefore) ?? null,
    srsAfter,
    rating: value.rating,
    ahead: value.ahead === true,
  };
}

/**
 * Put back what the last finish changed: the drill's place and streak, and
 * the card's review record. Returns the restored drill state. The task
 * reopens with its rating still chosen.
 *
 * The review record is only put back while it is still the one the finish
 * left: a review saved since (in another tab, after loadUndo last looked)
 * is newer work and stays.
 */
export function undoDrill(undo: DrillUndo): DrillState {
  const srsMap = loadSRSMap();
  if (sameSRS(srsMap[undo.cardId], undo.srsAfter)) {
    if (undo.srsBefore) srsMap[undo.cardId] = undo.srsBefore;
    else delete srsMap[undo.cardId];
    try {
      localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(srsMap));
    } catch {}
  }
  saveDrillState(undo.before);
  writeSession({
    undo: null,
    draft: {
      ...emptyDraft(draftKey(undo.cardId, undo.before.dayIndex)),
      recallShown: true,
      rating: undo.rating,
      ahead: undo.ahead,
    },
  });
  return undo.before;
}

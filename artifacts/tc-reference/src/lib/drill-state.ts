import { LIBRARY_CATEGORIES } from "./data";
import {
  isFiniteNumber,
  isIntegerInRange,
  isISODate,
  isRecord,
  safeParseJSON,
} from "./storage-validation";

// Sourced from the light data.ts metadata (not the heavy card content) so the
// drill badge in the app shell doesn't pull the card-data chunk on first paint.
export const CARD_IDS = Object.values(LIBRARY_CATEGORIES)
  .flat()
  .map((c) => c.id)
  .sort();

export interface DrillState {
  cardIndex: number;
  dayIndex: number;
  streak: number;
  lastCompletionDate: string | null;
  prevCardIndex: number;
  prevDayIndex: number;
}

const STORAGE_KEY = "tc_drill_state";

const DEFAULT_STATE: DrillState = {
  cardIndex: 0,
  dayIndex: 0,
  streak: 0,
  lastCompletionDate: null,
  prevCardIndex: -1,
  prevDayIndex: -1,
};

function localISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getTodayISO(): string {
  return localISO(new Date());
}

function getYesterdayISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return localISO(d);
}

/** Days in the weekly drill cycle (dayIndex runs 0..6). */
const LAST_DAY_INDEX = 6;

/**
 * Field-by-field check of a stored drill state: each valid field is kept and
 * each missing or wrong-shaped one falls back to its default. Indices must be
 * integers in range so CARD_IDS / drill lookups never go out of bounds.
 */
export function sanitiseDrillState(value: unknown): DrillState {
  if (!isRecord(value)) return DEFAULT_STATE;
  const lastCard = CARD_IDS.length - 1;
  const pick = <K extends keyof DrillState>(
    key: K,
    valid: (v: unknown) => boolean,
  ): DrillState[K] =>
    valid(value[key]) ? (value[key] as DrillState[K]) : DEFAULT_STATE[key];

  return {
    cardIndex: pick("cardIndex", (v) => isIntegerInRange(v, 0, lastCard)),
    dayIndex: pick("dayIndex", (v) => isIntegerInRange(v, 0, LAST_DAY_INDEX)),
    streak: pick("streak", (v) =>
      isIntegerInRange(v, 0, Number.MAX_SAFE_INTEGER),
    ),
    lastCompletionDate: pick(
      "lastCompletionDate",
      (v) => v === null || isISODate(v),
    ),
    prevCardIndex: pick("prevCardIndex", (v) =>
      isIntegerInRange(v, -1, lastCard),
    ),
    prevDayIndex: pick("prevDayIndex", (v) =>
      isIntegerInRange(v, -1, LAST_DAY_INDEX),
    ),
  };
}

export function loadDrillState(): DrillState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return sanitiseDrillState(safeParseJSON(raw));
  } catch {
    return DEFAULT_STATE;
  }
}

/** Fired after every drill-state save so listeners (the nav badge in
    AppLayout) can re-read without polling localStorage each render. */
export const DRILL_STATE_EVENT = "tc-drill-state-changed";

export function saveDrillState(state: DrillState): void {
  // Private browsing / quota-exceeded must not break drill completion —
  // the in-memory state still updates, persistence just silently degrades.
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
  window.dispatchEvent(new Event(DRILL_STATE_EVENT));
}

export function completeDrill(state: DrillState): DrillState {
  const today = getTodayISO();
  const yesterday = getYesterdayISO();

  const newStreak =
    state.lastCompletionDate === yesterday
      ? state.streak + 1
      : state.lastCompletionDate === today
        ? state.streak
        : 1;

  const nextDayIndex = state.dayIndex < LAST_DAY_INDEX ? state.dayIndex + 1 : 0;
  const nextCardIndex =
    state.dayIndex < LAST_DAY_INDEX
      ? state.cardIndex
      : (state.cardIndex + 1) % CARD_IDS.length;

  return {
    cardIndex: nextCardIndex,
    dayIndex: nextDayIndex,
    streak: newStreak,
    lastCompletionDate: today,
    prevCardIndex: state.cardIndex,
    prevDayIndex: state.dayIndex,
  };
}

export function isCompletedToday(state: DrillState): boolean {
  return state.lastCompletionDate === getTodayISO();
}

export function isStreakActive(state: DrillState): boolean {
  const yesterday = getYesterdayISO();
  const today = getTodayISO();
  return (
    state.lastCompletionDate === yesterday || state.lastCompletionDate === today
  );
}

export interface CardSRS {
  cardId: string;
  interval: number;
  repetition: number;
  efactor: number;
  nextReviewDate: string;
}

const SRS_STORAGE_KEY = "tc_srs_reviews";

/** SM-2 never lets the ease factor drop below this. */
export const MIN_EFACTOR = 1.3;

function isValidSRSEntry(value: unknown): value is Omit<CardSRS, "cardId"> {
  return (
    isRecord(value) &&
    isIntegerInRange(value.interval, 0, Number.MAX_SAFE_INTEGER) &&
    isIntegerInRange(value.repetition, 0, Number.MAX_SAFE_INTEGER) &&
    isFiniteNumber(value.efactor) &&
    value.efactor >= MIN_EFACTOR &&
    isISODate(value.nextReviewDate)
  );
}

/**
 * Keeps every stored SRS entry with numeric interval / repetition / efactor
 * and a YYYY-MM-DD nextReviewDate; drops the rest. The map key is the card id,
 * so cardId is taken from the key.
 */
export function sanitiseSRSMap(value: unknown): Record<string, CardSRS> {
  const out: Record<string, CardSRS> = {};
  if (!isRecord(value)) return out;
  for (const [cardId, entry] of Object.entries(value)) {
    if (!isValidSRSEntry(entry)) continue;
    out[cardId] = {
      cardId,
      interval: entry.interval,
      repetition: entry.repetition,
      efactor: entry.efactor,
      nextReviewDate: entry.nextReviewDate,
    };
  }
  return out;
}

export function loadSRSMap(): Record<string, CardSRS> {
  try {
    const stored = localStorage.getItem(SRS_STORAGE_KEY);
    if (!stored) return {};
    return sanitiseSRSMap(safeParseJSON(stored));
  } catch {
    return {};
  }
}

export type SRSRating = "hard" | "good" | "easy";

/** The SM-2 quality (0-5) each drill rating button maps to. */
export const RATING_QUALITY: Record<SRSRating, number> = {
  hard: 2,
  good: 4,
  easy: 5,
};

/**
 * One SM-2 step for a response of quality q (0-5; 3+ counts as recalled).
 * A pass advances the interval 1 -> 6 -> round(interval x efactor); a fail
 * resets repetition and schedules the card for tomorrow. The ease factor is
 * adjusted on every response and floored at MIN_EFACTOR. The next review date
 * is a local calendar date, matching getTodayISO() used for due counts.
 */
export function applySM2(
  current: CardSRS,
  quality: number,
  now: Date = new Date(),
): CardSRS {
  const q = Math.min(5, Math.max(0, Math.round(quality)));

  let nextRep = current.repetition;
  let nextInterval = current.interval;
  let nextEfactor = current.efactor;

  if (q >= 3) {
    if (nextRep === 0) {
      nextInterval = 1;
    } else if (nextRep === 1) {
      nextInterval = 6;
    } else {
      nextInterval = Math.round(nextInterval * nextEfactor);
    }
    nextRep += 1;
  } else {
    nextRep = 0;
    nextInterval = 1;
  }

  nextEfactor = nextEfactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (nextEfactor < MIN_EFACTOR) nextEfactor = MIN_EFACTOR;

  const nextDate = new Date(now);
  nextDate.setDate(nextDate.getDate() + nextInterval);

  return {
    cardId: current.cardId,
    interval: nextInterval,
    repetition: nextRep,
    efactor: nextEfactor,
    nextReviewDate: localISO(nextDate),
  };
}

export function updateSRS(cardId: string, rating: SRSRating): CardSRS {
  const srsMap = loadSRSMap();

  const current = srsMap[cardId] || {
    cardId,
    interval: 0,
    repetition: 0,
    efactor: 2.5,
    nextReviewDate: getTodayISO(),
  };

  const updated = applySM2(current, RATING_QUALITY[rating] ?? 4);

  srsMap[cardId] = updated;
  // Same best-effort persistence as saveDrillState.
  try {
    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(srsMap));
  } catch {}
  return updated;
}

export function getDueCardsCount(): number {
  const today = getTodayISO();
  return Object.values(loadSRSMap()).filter(
    (item) => item.nextReviewDate <= today,
  ).length;
}

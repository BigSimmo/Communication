import { CORE_CARD_IDS, LIBRARY_CATEGORIES } from "./data";
import {
  isFiniteNumber,
  isIntegerInRange,
  isISODate,
  isOneOf,
  isRecord,
  safeParseJSON,
  sanitiseStringArray,
} from "./storage-validation";

// Sourced from the light data.ts metadata (not the heavy card content) so the
// drill badge in the app shell doesn't pull the card-data chunk on first paint.
export const CARD_IDS = Object.values(LIBRARY_CATEGORIES)
  .flat()
  .map((c) => c.id)
  .sort();

/**
 * Drill order for readers who start fresh: the "Start here" core set first,
 * then every other card in id order. Same length as CARD_IDS.
 */
export const CORE_FIRST_CARD_IDS: readonly string[] = [
  ...CORE_CARD_IDS.filter((id) => CARD_IDS.includes(id)),
  ...CARD_IDS.filter((id) => !CORE_CARD_IDS.includes(id)),
];

/** "core-first" for new drills; absent on drills saved before it existed,
    which keep the id order so a saved cardIndex still means the same card. */
export type DrillOrder = "core-first";

/**
 * Which cards a drill works through.
 * - everything: every card, in the drill's `order`.
 * - core: the "Start here" core set, in its curated order.
 * - category: one library category, in its listed order.
 * - playbook: a snapshot of a playbook's cards, taken when the track was
 *   chosen, so editing or deleting the playbook can't move the drill's place.
 */
export type DrillTrack =
  | { kind: "everything" }
  | { kind: "core" }
  | { kind: "category"; category: string }
  | { kind: "playbook"; playbookId: string; cardIds: string[] };

/** Days spent on each technique: one day, three days or a week. */
export const DRILL_PACES = [1, 3, 7] as const;
export type DrillPace = (typeof DRILL_PACES)[number];

/** The track and pace every drill saved before they existed reads as. */
export const DEFAULT_TRACK: DrillTrack = { kind: "everything" };
export const DEFAULT_PACE: DrillPace = 7;

export interface DrillState {
  /** Position in the track's card list. */
  cardIndex: number;
  /** Day within the current card, 0..pace-1. */
  dayIndex: number;
  streak: number;
  lastCompletionDate: string | null;
  prevCardIndex: number;
  prevDayIndex: number;
  order?: DrillOrder;
  track: DrillTrack;
  pace: DrillPace;
  /** Times the whole track has been finished and started again. */
  rounds: number;
}

export const DRILL_STORAGE_KEY = "tc_drill_state";
const STORAGE_KEY = DRILL_STORAGE_KEY;

const DEFAULT_STATE: DrillState = {
  cardIndex: 0,
  dayIndex: 0,
  streak: 0,
  lastCompletionDate: null,
  prevCardIndex: -1,
  prevDayIndex: -1,
  order: "core-first",
  track: DEFAULT_TRACK,
  pace: DEFAULT_PACE,
  rounds: 0,
};

const KNOWN_CARD_IDS = new Set(CARD_IDS);

/** The core set as a track: CORE_CARD_IDS that exist, in curated order. */
const CORE_TRACK_CARD_IDS: readonly string[] = CORE_CARD_IDS.filter((id) =>
  KNOWN_CARD_IDS.has(id),
);

function categoryCardIds(category: string): string[] {
  if (!Object.prototype.hasOwnProperty.call(LIBRARY_CATEGORIES, category)) {
    return [];
  }
  return LIBRARY_CATEGORIES[category]
    .map((c) => c.id)
    .filter((id) => KNOWN_CARD_IDS.has(id));
}

/** Known card ids, first occurrence only, in the order given. */
function knownUniqueIds(ids: readonly string[]): string[] {
  const seen = new Set<string>();
  return ids.filter((id) => {
    if (!KNOWN_CARD_IDS.has(id) || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

/**
 * The cards a drill works through, in order. Never empty: a track whose
 * cards have all gone (a removed category, a playbook of retired cards)
 * falls back to every card.
 */
export function trackCardIds(
  state: Pick<DrillState, "order"> & { track?: DrillTrack },
): readonly string[] {
  const everything =
    state.order === "core-first" ? CORE_FIRST_CARD_IDS : CARD_IDS;
  const track = state.track ?? DEFAULT_TRACK;
  let ids: readonly string[];
  switch (track.kind) {
    case "core":
      ids = CORE_TRACK_CARD_IDS;
      break;
    case "category":
      ids = categoryCardIds(track.category);
      break;
    case "playbook":
      ids = knownUniqueIds(track.cardIds);
      break;
    default:
      ids = everything;
  }
  return ids.length > 0 ? ids : everything;
}

/** The card id at a drill index, in the track and order this drill uses. */
export function drillCardId(
  state: Pick<DrillState, "order"> & { track?: DrillTrack },
  index: number,
) {
  const ids = trackCardIds(state);
  return ids[index] ?? ids[0];
}

/** A track built from a playbook, keeping its cards in playbook order. */
export function playbookTrack(playbook: {
  id: string;
  cardIds: readonly string[];
}): DrillTrack {
  return {
    kind: "playbook",
    playbookId: playbook.id,
    cardIds: knownUniqueIds(playbook.cardIds),
  };
}

/**
 * Which of a card's seven practice tasks (0..6) to show on a given day of
 * the current pace. A week uses every task; three days spread across the
 * week (first, middle, last); one day uses the first task.
 */
const PACE_TASKS: Record<DrillPace, readonly number[]> = {
  1: [0],
  3: [0, 3, 6],
  7: [0, 1, 2, 3, 4, 5, 6],
};

export function drillTaskIndex(pace: DrillPace, dayIndex: number): number {
  const tasks = PACE_TASKS[pace] ?? PACE_TASKS[DEFAULT_PACE];
  return tasks[Math.min(Math.max(0, dayIndex), tasks.length - 1)];
}

export interface TrackProgress {
  /** 1-based position of the current card. */
  cardNumber: number;
  cardCount: number;
  /** 1-based day within the current card. */
  dayNumber: number;
  daysPerCard: DrillPace;
  /** Drill days completed in this round of the track. */
  daysDone: number;
  /** Drill days in the whole track at this pace. */
  daysTotal: number;
}

/** Where a drill is in its track, for "Card 3 of 15 · Day 2 of 3" labels. */
export function trackProgress(state: DrillState): TrackProgress {
  const cardCount = trackCardIds(state).length;
  return {
    cardNumber: state.cardIndex + 1,
    cardCount,
    dayNumber: state.dayIndex + 1,
    daysPerCard: state.pace,
    daysDone: state.cardIndex * state.pace + state.dayIndex,
    daysTotal: cardCount * state.pace,
  };
}

/** Drill days a whole track takes at a pace (one completed task a day). */
export function trackDays(
  track: DrillTrack,
  pace: DrillPace,
  order: DrillOrder | undefined = "core-first",
): number {
  return trackCardIds({ track, order }).length * pace;
}

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

/** The most days a card can take (dayIndex never goes past this). */
const LAST_DAY_INDEX = 6;

/**
 * A stored track, or null when it is missing or wrong-shaped. A category
 * that no longer exists, or a playbook snapshot with no known cards left,
 * can't be drilled, so it reads as missing too.
 */
export function sanitiseDrillTrack(value: unknown): DrillTrack | null {
  if (!isRecord(value)) return null;
  switch (value.kind) {
    case "everything":
      return { kind: "everything" };
    case "core":
      return { kind: "core" };
    case "category":
      return typeof value.category === "string" &&
        categoryCardIds(value.category).length > 0
        ? { kind: "category", category: value.category }
        : null;
    case "playbook": {
      if (typeof value.playbookId !== "string") return null;
      const cardIds = knownUniqueIds(sanitiseStringArray(value.cardIds));
      return cardIds.length > 0
        ? { kind: "playbook", playbookId: value.playbookId, cardIds }
        : null;
    }
    default:
      return null;
  }
}

/**
 * Field-by-field check of a stored drill state: each valid field is kept and
 * each missing or wrong-shaped one falls back to its default. Indices must be
 * integers in range so track / drill lookups never go out of bounds.
 *
 * Migration: drills saved before tracks and pace existed have neither field
 * and read as the Everything track at a week per card, which is exactly how
 * they ran, so their card, day, streak and order are all kept. A stored
 * track that can't be read falls back to Everything; the place is then
 * kept only if it is still in range.
 */
export function sanitiseDrillState(value: unknown): DrillState {
  if (!isRecord(value)) return DEFAULT_STATE;
  const order: DrillOrder | undefined =
    value.order === "core-first" ? "core-first" : undefined;
  const track = sanitiseDrillTrack(value.track) ?? DEFAULT_TRACK;
  const pace: DrillPace = isOneOf(value.pace, DRILL_PACES)
    ? value.pace
    : DEFAULT_PACE;
  const lastCard = trackCardIds({ order, track }).length - 1;
  const lastDay = pace - 1;
  const pick = <K extends keyof DrillState>(
    key: K,
    valid: (v: unknown) => boolean,
  ): DrillState[K] =>
    valid(value[key]) ? (value[key] as DrillState[K]) : DEFAULT_STATE[key];

  return {
    cardIndex: pick("cardIndex", (v) => isIntegerInRange(v, 0, lastCard)),
    dayIndex: pick("dayIndex", (v) => isIntegerInRange(v, 0, lastDay)),
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
    ...(order ? { order } : {}),
    track,
    pace,
    rounds: pick("rounds", (v) =>
      isIntegerInRange(v, 0, Number.MAX_SAFE_INTEGER),
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

  const cardCount = trackCardIds(state).length;
  const lastDay = state.pace - 1;
  const cardDone = state.dayIndex >= lastDay;
  const wraps = cardDone && state.cardIndex + 1 >= cardCount;

  return {
    cardIndex: cardDone ? (wraps ? 0 : state.cardIndex + 1) : state.cardIndex,
    dayIndex: cardDone ? 0 : state.dayIndex + 1,
    streak: newStreak,
    lastCompletionDate: today,
    prevCardIndex: state.cardIndex,
    prevDayIndex: state.dayIndex,
    ...(state.order ? { order: state.order } : {}),
    track: state.track,
    pace: state.pace,
    rounds: wraps ? state.rounds + 1 : state.rounds,
  };
}

/**
 * Switch to another track. The new track starts at its first card on day
 * one; the streak, last completion date, order and pace carry over. An
 * unreadable track (an empty playbook, an unknown category) is ignored.
 */
export function setDrillTrack(
  state: DrillState,
  track: DrillTrack,
): DrillState {
  const next = sanitiseDrillTrack(track);
  if (!next) return state;
  return {
    ...state,
    track: next,
    cardIndex: 0,
    dayIndex: 0,
    prevCardIndex: -1,
    prevDayIndex: -1,
    rounds: 0,
  };
}

/**
 * Change how many days each technique takes. The drill stays on the same
 * card; a day past the new pace's last day moves to that last day, so the
 * card still finishes on its final task.
 */
export function setDrillPace(state: DrillState, pace: DrillPace): DrillState {
  if (!isOneOf(pace, DRILL_PACES)) return state;
  return {
    ...state,
    pace,
    dayIndex: Math.min(state.dayIndex, pace - 1),
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

export const SRS_STORAGE_KEY = "tc_srs_reviews";

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
 * Keeps every stored SRS entry for a card that still exists, with numeric
 * interval / repetition / efactor and a YYYY-MM-DD nextReviewDate; drops the
 * rest. Entries for unknown card ids (renamed or removed cards, or a backup
 * from another version) could never be reviewed and would inflate the due
 * count forever. The map key is the card id, so cardId is taken from the key.
 */
export function sanitiseSRSMap(value: unknown): Record<string, CardSRS> {
  const out: Record<string, CardSRS> = {};
  if (!isRecord(value)) return out;
  for (const [cardId, entry] of Object.entries(value)) {
    if (!KNOWN_CARD_IDS.has(cardId) || !isValidSRSEntry(entry)) continue;
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

/** How a drill went, in the words of the rating buttons. */
export type DrillRating = "not-yet" | "getting-there" | "confident";

export const DRILL_RATINGS: readonly DrillRating[] = [
  "not-yet",
  "getting-there",
  "confident",
];

/** The earlier Hard / Good / Easy buttons, still accepted. */
export type LegacySRSRating = "hard" | "good" | "easy";

export type SRSRating = DrillRating | LegacySRSRating;

/**
 * The SM-2 quality (0-5) each drill rating maps to. Not yet is a miss
 * (back tomorrow, ease drops). Getting there is a pass with difficulty
 * (the interval still grows, but the ease drops a little, so the card
 * returns sooner than a confident one). Confident is a clean pass.
 */
export const RATING_QUALITY: Record<SRSRating, number> = {
  "not-yet": 2,
  "getting-there": 3,
  confident: 5,
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
  // The due-review count on the nav badge depends on this map.
  window.dispatchEvent(new Event(DRILL_STATE_EVENT));
  return updated;
}

/**
 * Card ids whose review is due today or earlier, most overdue first (ties in
 * card id order), so a reviews list always comes out the same way.
 */
export function getDueCardIds(
  srsMap: Record<string, CardSRS> = loadSRSMap(),
  today: string = getTodayISO(),
): string[] {
  return Object.values(srsMap)
    .filter((item) => item.nextReviewDate <= today)
    .sort(
      (a, b) =>
        a.nextReviewDate.localeCompare(b.nextReviewDate) ||
        a.cardId.localeCompare(b.cardId),
    )
    .map((item) => item.cardId);
}

export function getDueCardsCount(): number {
  return getDueCardIds().length;
}

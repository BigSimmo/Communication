import { LIBRARY_CATEGORIES } from "./data";

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

export function loadDrillState(): DrillState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
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

  const nextDayIndex = state.dayIndex < 6 ? state.dayIndex + 1 : 0;
  const nextCardIndex =
    state.dayIndex < 6
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
    state.lastCompletionDate === yesterday ||
    state.lastCompletionDate === today
  );
}

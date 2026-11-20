import { LIBRARY_CATEGORIES } from "./data";
import { categoryStyleFor } from "./design-tokens";
import {
  applySM2,
  getTodayISO,
  RATING_QUALITY,
  trackCardIds,
  type CardSRS,
  type DrillPace,
  type DrillRating,
  type DrillState,
  type DrillTrack,
} from "./drill-state";
import { PLAYBOOK_TEMPLATES } from "./playbook-templates";

// Words and small sums for the Daily Drill screen. Everything here is pure:
// the drill's own rules stay in drill-state.ts.

/** Title and category for every card, from the light metadata. */
export const DRILL_CARD_META: Readonly<
  Record<string, { title: string; category: string }>
> = Object.fromEntries(
  Object.entries(LIBRARY_CATEGORIES).flatMap(([category, cards]) =>
    cards.map((card) => [card.id, { title: card.title, category }]),
  ),
);

export function drillCardTitle(cardId: string): string {
  return DRILL_CARD_META[cardId]?.title ?? cardId;
}

export const RATING_LABELS: Record<DrillRating, string> = {
  "not-yet": "Not yet",
  "getting-there": "Getting there",
  confident: "Confident",
};

export const PACE_LABELS: Record<DrillPace, string> = {
  1: "1 day each",
  3: "3 days each",
  7: "A week each",
};

/** Number of cards in the Core track ("Core 15"). */
export const CORE_TRACK_SIZE = trackCardIds({
  track: { kind: "core" },
  order: "core-first",
}).length;

export const CORE_TRACK_NAME = `Core ${CORE_TRACK_SIZE}`;

/** Anything with an id and a name: a saved playbook or a starter one. */
export interface NamedPlaybook {
  id: string;
  name: string;
}

/**
 * The name shown for a track. A playbook track only stores the playbook's
 * id, so its name is looked up in the reader's playbooks, then the starter
 * playbooks; a deleted playbook still drills, under a plain name.
 */
export function trackName(
  track: DrillTrack,
  playbooks: readonly NamedPlaybook[] = [],
): string {
  switch (track.kind) {
    case "core":
      return CORE_TRACK_NAME;
    case "category":
      return categoryStyleFor(track.category).label;
    case "playbook":
      return (
        playbooks.find((p) => p.id === track.playbookId)?.name ??
        PLAYBOOK_TEMPLATES.find((p) => p.id === track.playbookId)?.name ??
        "Playbook"
      );
    default:
      return "Everything";
  }
}

/** True when two tracks drill the same cards in the same order. */
export function sameTrack(a: DrillTrack, b: DrillTrack): boolean {
  if (a.kind !== b.kind) return false;
  if (a.kind === "category" && b.kind === "category")
    return a.category === b.category;
  if (a.kind === "playbook" && b.kind === "playbook")
    return (
      a.playbookId === b.playbookId &&
      a.cardIds.length === b.cardIds.length &&
      a.cardIds.every((id, i) => id === b.cardIds[i])
    );
  return true;
}

/**
 * A run of drill days in everyday words: exact up to a fortnight, then
 * rounded to weeks, months or years ("about" is set for the rounded ones).
 */
export function durationLabel(days: number): { text: string; about: boolean } {
  const d = Math.max(0, Math.round(days));
  if (d < 14) return { text: d === 1 ? "1 day" : `${d} days`, about: false };
  if (d < 84) return { text: `${Math.round(d / 7)} weeks`, about: true };
  if (d < 548) return { text: `${Math.round(d / 30.4)} months`, about: true };
  return { text: `${Math.round(d / 365)} years`, about: true };
}

/** "Takes about 6 weeks" for a whole track at a pace. */
export function takesLabel(days: number): string {
  const { text, about } = durationLabel(days);
  return `Takes ${about ? "about " : ""}${text}`;
}

/** "About 6 weeks left" for the rest of a track. */
export function leftLabel(days: number): string {
  const { text, about } = durationLabel(days);
  return `${about ? "About " : ""}${text} left`;
}

/** Drill days still to do in this round of the track, today's included. */
export function daysLeft(state: DrillState, pace: DrillPace = state.pace) {
  const cards = trackCardIds(state).length - state.cardIndex;
  return Math.max(1, cards * pace - Math.min(state.dayIndex, pace - 1));
}

/** "Back tomorrow" / "Back in 6 days" for a review gap in days. */
export function gapLabel(interval: number): string {
  return interval <= 1 ? "Back tomorrow" : `Back in ${interval} days`;
}

/** As a clause: "comes back tomorrow" / "comes back in 6 days". */
export function gapClause(interval: number): string {
  return interval <= 1
    ? "comes back tomorrow"
    : `comes back in ${interval} days`;
}

/**
 * The gap, in days, each rating would set for a card right now. Uses the
 * same SM-2 step as the real save, so the buttons never promise a gap the
 * schedule won't keep.
 */
export function previewGaps(
  cardId: string,
  current: CardSRS | undefined,
): Record<DrillRating, number> {
  const from: CardSRS = current ?? {
    cardId,
    interval: 0,
    repetition: 0,
    efactor: 2.5,
    nextReviewDate: getTodayISO(),
  };
  const gap = (rating: DrillRating) =>
    applySM2(from, RATING_QUALITY[rating]).interval;
  return {
    "not-yet": gap("not-yet"),
    "getting-there": gap("getting-there"),
    confident: gap("confident"),
  };
}

function parseISO(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** Whole calendar days from `from` to `to` (both YYYY-MM-DD, local). */
export function daysBetween(from: string, to: string): number {
  return Math.round(
    (parseISO(to).getTime() - parseISO(from).getTime()) / 86_400_000,
  );
}

/** "Due today" / "Due yesterday" / "5 days overdue" for a review date. */
export function dueLabel(
  nextReviewDate: string,
  today: string = getTodayISO(),
): string {
  const late = daysBetween(nextReviewDate, today);
  if (late <= 0) return "Due today";
  if (late === 1) return "Due yesterday";
  return `${late} days overdue`;
}

export type WeekDayState = "done" | "today" | "open" | "ahead";

export interface WeekDay {
  /** One letter, Monday first. */
  letter: string;
  /** done: drilled, in the current streak. today: drilled today. open: a
      past day (or today) with no drill. ahead: still to come. */
  state: WeekDayState;
}

const WEEK_LETTERS = ["M", "T", "W", "T", "F", "S", "S"];

/**
 * This week (Monday to Sunday) as seven marks, worked out from the streak:
 * a streak of N ending on the last completed day covers that day and the
 * N - 1 before it. No per-day history is stored, so days before the
 * current streak show as open.
 */
export function weekStrip(
  state: Pick<DrillState, "streak" | "lastCompletionDate">,
  today: string = getTodayISO(),
): WeekDay[] {
  const todayIndex = (parseISO(today).getDay() + 6) % 7;
  const sinceLast =
    state.lastCompletionDate === null
      ? null
      : daysBetween(state.lastCompletionDate, today);
  // A streak only counts while its last day is today or yesterday.
  const live = sinceLast === 0 || sinceLast === 1;
  return WEEK_LETTERS.map((letter, i) => {
    const daysAgo = todayIndex - i;
    if (daysAgo < 0) return { letter, state: "ahead" };
    const inStreak =
      live && daysAgo >= sinceLast && daysAgo < sinceLast + state.streak;
    if (!inStreak) return { letter, state: "open" };
    return { letter, state: daysAgo === 0 ? "today" : "done" };
  });
}

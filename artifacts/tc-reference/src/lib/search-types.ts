// Public result and option types for smart search (see search-index.ts).

import type { CanonicalTone } from "./card-types";
import type { PlaybookTemplate } from "./playbook-templates";

/** A technique (card) result. Shape unchanged from the earlier search. */
export interface RankedResult {
  id: string;
  title: string;
  category: string;
  loaded: boolean;
  score: number;
  /** Highest-priority field that matched: id, title, category, best-for,
      formula, phrases, scenarios or explanation. */
  matchedIn: string;
}

export interface PhraseResult {
  /** Stable within a build: card id, group position and phrase position. */
  id: string;
  text: string;
  cardId: string;
  cardTitle: string;
  category: string;
  groupLabel: string;
  tone: CanonicalTone;
  score: number;
  /** text or group (the phrase group's label, tag and tone). */
  matchedIn: string;
}

export interface PlaybookResult {
  id: string;
  name: string;
  description: string;
  context: PlaybookTemplate["context"];
  section: PlaybookTemplate["section"];
  cardIds: string[];
  score: number;
  /** name, description, cards or context. */
  matchedIn: string;
}

/**
 * Personal signals that lift results a little. Omitted fields are read from
 * the device: saved cards and phrases from favourites, recently opened cards,
 * and the Start here set. Pass an empty array to switch one off.
 */
export interface SearchBoosts {
  savedCardIds?: readonly string[];
  savedPhrases?: ReadonlyArray<{ cardId: string; text: string }>;
  recentCardIds?: readonly string[];
  startHereCardIds?: readonly string[];
}

export interface SearchOptions {
  boosts?: SearchBoosts;
  limits?: { techniques?: number; phrases?: number; playbooks?: number };
}

export interface SearchResults {
  /** The query as typed, trimmed. */
  query: string;
  /** Set when a word had no match and was replaced by a close spelling,
      e.g. "apolgy" -> "apology". The results are for this query. */
  correctedQuery: string | null;
  techniques: RankedResult[];
  phrases: PhraseResult[];
  playbooks: PlaybookResult[];
  /** Matches before the limits were applied. */
  totals: { techniques: number; phrases: number; playbooks: number };
}

export const DEFAULT_LIMITS = {
  techniques: 12,
  phrases: 30,
  playbooks: 6,
} as const;

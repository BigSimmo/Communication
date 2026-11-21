// Tone and length filters for the Phrase Bank, kept apart from the page so the
// rules can be tested on the real phrase set.
//
// Tone comes from each phrase group (see inferPhraseTone in ./card-types).
// Length is worked out from the line itself: a short line is one you can say
// in a breath, then one sentence, then anything with two or more sentences.

import type { CanonicalTone } from "./card-types";
import type { AggregatedPhrase } from "./phrases-data";

/** Every tone a (possibly shared) line carries. */
function phraseTones(p: AggregatedPhrase): CanonicalTone[] {
  return [p.tone, ...(p.alsoTones ?? [])];
}

export type PhraseLength = "short" | "sentence" | "longer";

export const PHRASE_LENGTHS: ReadonlyArray<{
  id: PhraseLength;
  label: string;
  hint: string;
}> = [
  { id: "short", label: "Short", hint: "Six words or fewer" },
  { id: "sentence", label: "One sentence", hint: "A single full sentence" },
  { id: "longer", label: "Two or more", hint: "Two sentences or more" },
];

/** Lines of up to this many words count as short, whatever their punctuation. */
export const SHORT_MAX_WORDS = 6;

/** One plain line under each tone, shown as the chip's description. */
export const TONE_HINTS: Record<CanonicalTone, string> = {
  Quick: "Short openers",
  Warm: "Warmth and validation",
  Professional: "Work, decisions and status",
  Direct: "Clear asks and answers",
  Repair: "When it landed badly",
  "High-stakes": "Pressure and hard moments",
};

export function wordCount(text: string): number {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

/**
 * Sentences in a line. A break is sentence-ending punctuation followed by a
 * space, so "The specific thing I need is..." is one sentence and
 * "Oof, that's rough. What happened?" is two.
 */
export function sentenceCount(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/(?<=[.!?…]["”’)]?)\s+(?=\S)/u).length;
}

export function phraseLength(text: string): PhraseLength {
  if (wordCount(text) <= SHORT_MAX_WORDS) return "short";
  return sentenceCount(text) > 1 ? "longer" : "sentence";
}

export interface PhraseFilter {
  tone: CanonicalTone | null;
  length: PhraseLength | null;
  query: string;
}

export const NO_FILTER: PhraseFilter = { tone: null, length: null, query: "" };

/** Curly and straight apostrophes match each other, and case is ignored. */
function normalise(text: string): string {
  return text.toLowerCase().replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
}

function matchesQuery(phrase: AggregatedPhrase, query: string): boolean {
  if (!query) return true;
  if (normalise(phrase.text).includes(query)) return true;
  // A shared line answers to every card it appears on.
  return [phrase, ...(phrase.alsoOn ?? [])].some(
    (source) =>
      normalise(source.cardTitle).includes(query) ||
      source.cardId.toLowerCase().includes(query),
  );
}

/** Phrases that pass every set part of the filter, in their original order. */
export function filterPhrases(
  phrases: ReadonlyArray<AggregatedPhrase>,
  filter: PhraseFilter,
): AggregatedPhrase[] {
  const query = normalise(filter.query.trim());
  return phrases.filter(
    (p) =>
      (!filter.tone || phraseTones(p).includes(filter.tone)) &&
      (!filter.length || phraseLength(p.text) === filter.length) &&
      matchesQuery(p, query),
  );
}

export interface FilterCounts {
  tone: Partial<Record<CanonicalTone, number>>;
  length: Partial<Record<PhraseLength, number>>;
}

/**
 * Counts for each chip. A tone's count respects the length and search already
 * set (but not the tone), and a length's count respects tone and search, so a
 * chip always says how many phrases tapping it would show.
 */
export function countFacets(
  phrases: ReadonlyArray<AggregatedPhrase>,
  filter: PhraseFilter,
): FilterCounts {
  const query = normalise(filter.query.trim());
  const tone: FilterCounts["tone"] = {};
  const length: FilterCounts["length"] = {};
  for (const p of phrases) {
    if (!matchesQuery(p, query)) continue;
    const len = phraseLength(p.text);
    const tones = phraseTones(p);
    if (!filter.length || len === filter.length)
      for (const t of tones) tone[t] = (tone[t] ?? 0) + 1;
    if (!filter.tone || tones.includes(filter.tone))
      length[len] = (length[len] ?? 0) + 1;
  }
  return { tone, length };
}

export interface PhraseGroupByCard {
  cardId: string;
  cardTitle: string;
  phrases: AggregatedPhrase[];
}

/**
 * Groups phrases under their technique. Runs of the same card stay together
 * and the first appearance sets the order, so the bank reads card by card.
 */
export function groupByCard(
  phrases: ReadonlyArray<AggregatedPhrase>,
): PhraseGroupByCard[] {
  const groups: PhraseGroupByCard[] = [];
  const byId = new Map<string, PhraseGroupByCard>();
  for (const p of phrases) {
    let group = byId.get(p.cardId);
    if (!group) {
      group = { cardId: p.cardId, cardTitle: p.cardTitle, phrases: [] };
      byId.set(p.cardId, group);
      groups.push(group);
    }
    group.phrases.push(p);
  }
  return groups;
}

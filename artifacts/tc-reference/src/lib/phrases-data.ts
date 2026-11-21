import { CANONICAL_TONES } from "./card-types";
import type { CanonicalTone } from "./card-types";
import { loadCardTextIndex } from "./card-text-index";
import { LIBRARY_CATEGORIES } from "./data";
import {
  aggregatePhrases,
  type AggregatedPhrase,
  type PhraseSource,
} from "./phrase-aggregate";

export {
  phraseDedupeKey,
  type AggregatedPhrase,
  type PhraseSource,
} from "./phrase-aggregate";

/** Every tone a (possibly shared) line carries. */
export function phraseTones(phrase: AggregatedPhrase): CanonicalTone[] {
  return [phrase.tone, ...(phrase.alsoTones ?? [])];
}

/** The phrase and every other card it appears on, for favourite checks. */
export function phraseSources(phrase: AggregatedPhrase): PhraseSource[] {
  return [
    { cardId: phrase.cardId, cardTitle: phrase.cardTitle, text: phrase.text },
    ...(phrase.alsoOn ?? []),
  ];
}

const CARD_TITLE_MAP: Record<string, string> = {};
for (const cards of Object.values(LIBRARY_CATEGORIES)) {
  for (const c of cards) CARD_TITLE_MAP[c.id] = c.title;
}

let phrasesPromise: Promise<ReadonlyArray<AggregatedPhrase>> | null = null;
let loadedPhrases: ReadonlyArray<AggregatedPhrase> | null = null;

/**
 * The phrases if an earlier load has finished, else null. Lets a return
 * visit render its full list on the first frame (so the browser can restore
 * the scroll position) instead of waiting a tick for the promise.
 */
export function peekAllAggregatedPhrases(): ReadonlyArray<AggregatedPhrase> | null {
  return loadedPhrases;
}

export function loadAllAggregatedPhrases(): Promise<
  ReadonlyArray<AggregatedPhrase>
> {
  if (!phrasesPromise) {
    const pending = loadCardTextIndex()
      .then((cards) => {
        loadedPhrases = Object.freeze(
          aggregatePhrases(cards, (cardId) => CARD_TITLE_MAP[cardId] ?? cardId),
        );
        return loadedPhrases;
      })
      .catch((error: unknown) => {
        if (phrasesPromise === pending) phrasesPromise = null;
        throw error;
      });
    phrasesPromise = pending;
  }
  return phrasesPromise;
}

export function getAllTones(
  phrases: ReadonlyArray<AggregatedPhrase>,
): CanonicalTone[] {
  const present = new Set(phrases.flatMap(phraseTones));
  // Fixed canonical order — not alphabetical
  return CANONICAL_TONES.filter((tone) => present.has(tone));
}

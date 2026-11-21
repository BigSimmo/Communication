import {
  CANONICAL_TONES,
  isSpeakablePhrase,
  inferPhraseTone,
} from "./card-types";
import type { CanonicalTone } from "./card-types";
import { loadCardTextIndex } from "./card-text-index";
import { LIBRARY_CATEGORIES } from "./data";
import { tokenize } from "./search-text";

/** Another card that lists the same line, with its own wording of it. */
export interface PhraseSource {
  cardId: string;
  cardTitle: string;
  text: string;
}

export interface AggregatedPhrase {
  text: string;
  groupId: string;
  groupLabel: string;
  groupTag: string;
  tone: CanonicalTone;
  cardId: string;
  cardTitle: string;
  /**
   * Other cards that list the same line (ignoring case and punctuation). The
   * combined bank shows it once, under the first card; each card's own phrase
   * bank still lists it. Absent when the line is on one card only.
   */
  alsoOn?: ReadonlyArray<PhraseSource>;
}

/**
 * The key two lines share when they say the same words, ignoring case,
 * punctuation and quote marks ("That sounds like it mattered." and "that
 * sounds like it mattered" match).
 */
export function phraseDedupeKey(text: string): string {
  return tokenize(text).join(" ");
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

export function loadAllAggregatedPhrases(): Promise<
  ReadonlyArray<AggregatedPhrase>
> {
  if (!phrasesPromise) {
    const pending = loadCardTextIndex()
      .then((cards) => {
        const result: AggregatedPhrase[] = [];
        // Shared stock lines are listed once, under the first card.
        const byKey = new Map<string, AggregatedPhrase>();
        for (const [cardId, card] of Object.entries(cards)) {
          const cardTitle = CARD_TITLE_MAP[cardId] ?? cardId;
          for (const group of card.phraseBank) {
            for (const text of group.phrases) {
              if (!isSpeakablePhrase(text)) continue;
              const key = phraseDedupeKey(text);
              const first = byKey.get(key);
              if (first) {
                if (
                  first.cardId !== cardId &&
                  !first.alsoOn?.some((s) => s.cardId === cardId)
                ) {
                  first.alsoOn = [
                    ...(first.alsoOn ?? []),
                    { cardId, cardTitle, text },
                  ];
                }
                continue;
              }
              const entry: AggregatedPhrase = {
                text,
                groupId: group.id,
                groupLabel: group.label,
                groupTag: group.tag,
                tone: inferPhraseTone(group),
                cardId,
                cardTitle,
              };
              byKey.set(key, entry);
              result.push(entry);
            }
          }
        }
        return Object.freeze(result);
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
  const present = new Set(phrases.map((phrase) => phrase.tone));
  // Fixed canonical order — not alphabetical
  return CANONICAL_TONES.filter((tone) => present.has(tone));
}

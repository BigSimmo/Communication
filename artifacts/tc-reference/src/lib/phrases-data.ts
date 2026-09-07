import {
  CANONICAL_TONES,
  isSpeakablePhrase,
  inferPhraseTone,
} from "./card-types";
import type { CanonicalTone } from "./card-types";
import { loadAllCards } from "./card-loader";
import { LIBRARY_CATEGORIES } from "./data";

export interface AggregatedPhrase {
  text: string;
  groupId: string;
  groupLabel: string;
  groupTag: string;
  tone: CanonicalTone;
  cardId: string;
  cardTitle: string;
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
    const pending = loadAllCards()
      .then((cards) => {
        const result: AggregatedPhrase[] = [];
        for (const [cardId, card] of Object.entries(cards)) {
          const cardTitle = CARD_TITLE_MAP[cardId] ?? cardId;
          for (const group of card.phraseBank) {
            for (const text of group.phrases) {
              if (!isSpeakablePhrase(text)) continue;
              result.push({
                text,
                groupId: group.id,
                groupLabel: group.label,
                groupTag: group.tag,
                tone: inferPhraseTone(group),
                cardId,
                cardTitle,
              });
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

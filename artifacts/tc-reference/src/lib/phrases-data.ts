import { CARD_DATA, CANONICAL_TONES, isSpeakablePhrase } from "./cards";
import type { CanonicalTone } from "./cards";
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

let _phrasesCache: AggregatedPhrase[] | null = null;
let _tonesCache: CanonicalTone[] | null = null;

export function getAllAggregatedPhrases(): AggregatedPhrase[] {
  if (_phrasesCache) return _phrasesCache;
  const result: AggregatedPhrase[] = [];
  for (const [cardId, card] of Object.entries(CARD_DATA)) {
    const cardTitle = CARD_TITLE_MAP[cardId] ?? cardId;
    for (const group of card.phraseBank) {
      for (const text of group.phrases) {
        if (!isSpeakablePhrase(text)) continue;
        result.push({ text, groupId: group.id, groupLabel: group.label, groupTag: group.tag, tone: group.tone, cardId, cardTitle });
      }
    }
  }
  _phrasesCache = result;
  return result;
}

export function getAllTones(): CanonicalTone[] {
  if (_tonesCache) return _tonesCache;
  const present = new Set(getAllAggregatedPhrases().map((p) => p.tone));
  // Fixed canonical order — not alphabetical
  _tonesCache = CANONICAL_TONES.filter((t) => present.has(t));
  return _tonesCache;
}

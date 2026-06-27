import { CARD_DATA } from "./cards";
import { LIBRARY_CATEGORIES } from "./data";

export interface AggregatedPhrase {
  text: string;
  groupId: string;
  groupLabel: string;
  groupTag: string;
  cardId: string;
  cardTitle: string;
}

const CARD_TITLE_MAP: Record<string, string> = {};
for (const cards of Object.values(LIBRARY_CATEGORIES)) {
  for (const c of cards) CARD_TITLE_MAP[c.id] = c.title;
}

let _phrasesCache: AggregatedPhrase[] | null = null;
let _tonesCache: string[] | null = null;

export function getAllAggregatedPhrases(): AggregatedPhrase[] {
  if (_phrasesCache) return _phrasesCache;
  const result: AggregatedPhrase[] = [];
  for (const [cardId, card] of Object.entries(CARD_DATA)) {
    const cardTitle = CARD_TITLE_MAP[cardId] ?? cardId;
    for (const group of card.phraseBank) {
      for (const text of group.phrases) {
        result.push({ text, groupId: group.id, groupLabel: group.label, groupTag: group.tag, cardId, cardTitle });
      }
    }
  }
  _phrasesCache = result;
  return result;
}

export function getAllTones(): string[] {
  if (_tonesCache) return _tonesCache;
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const p of getAllAggregatedPhrases()) {
    if (!seen.has(p.groupLabel)) {
      seen.add(p.groupLabel);
      ordered.push(p.groupLabel);
    }
  }
  _tonesCache = ordered.sort();
  return _tonesCache;
}

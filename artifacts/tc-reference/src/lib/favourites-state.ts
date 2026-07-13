export interface FavouritePhrase {
  cardId: string;
  cardTitle: string;
  groupLabel: string;
  text: string;
}

export interface FavouritesState {
  cardIds: string[];
  phrases: FavouritePhrase[];
}

const STORAGE_KEY = "tc_favourites";
const DEFAULT: FavouritesState = { cardIds: [], phrases: [] };

// Favourite phrases are keyed by (cardId, text). Card content was normalised
// at one point (full-wrap quotes stripped, Unicode ellipsis -> "...", a few
// duplicated phrases reworded), so stored favourites saved before that would
// no longer match. This idempotent migration applies the same transforms to
// stored favourites on load.
const REPHRASED: Record<string, Record<string, string>> = {
  TC028: {
    "Let me think for a second.": "Let me take a second with that.",
    "The honest answer is...": "My honest take is...",
  },
  TC003: {
    "In one sentence: ...": "Up front: ...",
  },
};

function normalisePhraseText(cardId: string, text: string): string {
  let t = text.replaceAll("…", "...");
  // Strip a single full wrap of double or single quotes
  if (t.length > 1 && t.startsWith('"') && t.endsWith('"')) t = t.slice(1, -1);
  if (t.length > 1 && t.startsWith("'") && t.endsWith("'")) t = t.slice(1, -1);
  return REPHRASED[cardId]?.[t] ?? t;
}

export function loadFavouritesState(): FavouritesState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT;
    const state: FavouritesState = { ...DEFAULT, ...JSON.parse(raw) };
    let changed = false;
    const phrases = state.phrases.map((p) => {
      const text = normalisePhraseText(p.cardId, p.text);
      if (text === p.text) return p;
      changed = true;
      return { ...p, text };
    });
    if (changed) {
      const next = { ...state, phrases };
      saveFavouritesState(next);
      return next;
    }
    return state;
  } catch {
    return DEFAULT;
  }
}

export function saveFavouritesState(state: FavouritesState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function toggleFavouriteCard(state: FavouritesState, cardId: string): FavouritesState {
  const has = state.cardIds.includes(cardId);
  const next: FavouritesState = has
    ? { ...state, cardIds: state.cardIds.filter(id => id !== cardId) }
    : { ...state, cardIds: [...state.cardIds, cardId] };
  saveFavouritesState(next);
  return next;
}

export function toggleFavouritePhrase(state: FavouritesState, phrase: FavouritePhrase): FavouritesState {
  const has = state.phrases.some(p => p.text === phrase.text && p.cardId === phrase.cardId);
  const next: FavouritesState = has
    ? { ...state, phrases: state.phrases.filter(p => !(p.text === phrase.text && p.cardId === phrase.cardId)) }
    : { ...state, phrases: [...state.phrases, phrase] };
  saveFavouritesState(next);
  return next;
}

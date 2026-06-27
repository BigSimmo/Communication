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

export function loadFavouritesState(): FavouritesState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT;
    return { ...DEFAULT, ...JSON.parse(raw) };
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

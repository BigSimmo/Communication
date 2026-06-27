import { createContext, useContext, useState } from "react";
import type { FavouritesState, FavouritePhrase } from "./favourites-state";
import { loadFavouritesState, toggleFavouriteCard, toggleFavouritePhrase } from "./favourites-state";

interface FavouritesCtx {
  state: FavouritesState;
  toggleCard: (cardId: string) => void;
  togglePhrase: (phrase: FavouritePhrase) => void;
  isCardFav: (cardId: string) => boolean;
  isPhrasesFav: (cardId: string, text: string) => boolean;
  totalCount: number;
}

const FavCtx = createContext<FavouritesCtx | null>(null);

export function FavouritesProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<FavouritesState>(loadFavouritesState);

  const toggleCard = (cardId: string) =>
    setState(s => toggleFavouriteCard(s, cardId));

  const togglePhrase = (phrase: FavouritePhrase) =>
    setState(s => toggleFavouritePhrase(s, phrase));

  const isCardFav = (cardId: string) => state.cardIds.includes(cardId);

  const isPhrasesFav = (cardId: string, text: string) =>
    state.phrases.some(p => p.cardId === cardId && p.text === text);

  const totalCount = state.cardIds.length + state.phrases.length;

  return (
    <FavCtx.Provider value={{ state, toggleCard, togglePhrase, isCardFav, isPhrasesFav, totalCount }}>
      {children}
    </FavCtx.Provider>
  );
}

export function useFavourites(): FavouritesCtx {
  const ctx = useContext(FavCtx);
  if (!ctx) throw new Error("useFavourites must be used within FavouritesProvider");
  return ctx;
}

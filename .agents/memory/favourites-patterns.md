---
name: Favourites feature patterns
description: Implementation decisions for the Favourites/saved feature in tc-reference app.
---

## Library card tile: div instead of button

Card tiles in library.tsx were originally `<button>` elements. To add a nested heart `<button>` (invalid HTML), they were converted to `<div role="button" tabIndex={0} onKeyDown={...}>` with the same onClick for navigation. The heart button inside uses `e.stopPropagation()` to prevent the outer div's navigation from firing.

**Why:** Nested interactive elements (<button> inside <button>) are invalid HTML per spec and cause accessibility issues.

**How to apply:** Any time you need a clickable container with independent inner buttons, use div+role=button on the outer container.

## FavouritesProvider placement

In App.tsx, FavouritesProvider wraps the WouterRouter block (below NavProvider, above WouterRouter). AppLayout calls useFavourites() and is rendered inside WouterRouter, so FavouritesProvider must be above it.

**Why:** React context must be above all consumers in the tree.

## CARD_TITLE_MAP pattern

Both card-detail.tsx and favourites.tsx use a module-level Record<string, string> built from LIBRARY_CATEGORIES to look up card titles by ID. This avoids importing the full CardData and keeps the lookup O(1).

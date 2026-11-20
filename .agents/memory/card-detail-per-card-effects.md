---
name: card-detail per-card effects
description: How the tc-reference card page scopes its state and effects to one card, now that the card view is keyed by card id
---

# card-detail per-card effects

`artifacts/tc-reference/src/pages/card-detail.tsx` renders every card. wouter re-renders the page component (it does NOT remount) when the `/card/:id` param changes via prev/next, related links, or library navigation.

**Rule:** Per-card state lives in `CardView`, which the page renders with `key={cardId}` once the card's data has loaded. Anything that belongs to one card (the open tab, scroll-spy, scroll memory, the checklist, copy feedback) goes there or in `useCardTabs` (`src/hooks/use-card-tabs.ts`), so it mounts fresh for each card. Effects left in the outer page component (loading, PDF, arrow-key paging) must still key on `[cardId]`.

**Why:** Before the key, an IntersectionObserver created once with `[]` deps only observed the first card's sections, and a stale `scrollLockRef` could freeze the active pill after navigating. Remounting per card removes that whole class of carry-over.

**How to apply:** `useCardTabs` reads its opening state on mount (a `?tab=`, `?section=` or `#section-x` link wins, then the in-session `cardTabMemory`) and saves tab and scroll position on unmount. Its scroll-spy re-observes `TAB_SECTIONS[tab]` whenever the tab changes, because only the showing tab's sections are in the DOM. Optional sections are gated by `isSectionAvailable(cardData, id)`.

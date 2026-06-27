---
name: card-detail per-card effects
description: Why cardId-scoped effects in tc-reference card-detail.tsx must key on [cardId] and reset cross-card refs
---

# card-detail per-card effects

`artifacts/tc-reference/src/pages/card-detail.tsx` renders ALL 31 cards. wouter re-renders this same component (it does NOT remount) when the `/card/:id` param changes via prev/next, related links, or library navigation.

**Rule:** Any effect whose work depends on the current card's DOM or data must key on `[cardId]` and reset any module/ref state carried across cards.

**Why:** The IntersectionObserver that drives the active-section nav pill was created once with `[]` deps, so it only observed the sections present at first mount. Navigating to a card with different (e.g. optional) sections without a remount left those new sections unobserved — the active pill stopped updating, and a stale `scrollLockRef` could freeze pill updates entirely.

**How to apply:** On each run, `intersectingRef.current.clear()` and `scrollLockRef.current = null`, observe only `SECTIONS.filter(sectionAvailable)`, and use `[cardId]` deps. Optional sections are gated by `sectionAvailable(id)` (driven by optional CardData fields), so the observed set differs per card.

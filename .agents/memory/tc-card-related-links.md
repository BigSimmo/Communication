---
name: TC card cross-card links
description: Why relatedTechniques / cross-card links in tc-reference must use in-app card IDs, not source-PDF IDs
---

# TC card cross-card links

When populating a card's `relatedTechniques` (or any cross-card link) in `artifacts/tc-reference/src/lib/cards.ts`, link to REAL in-app card IDs that exist in this app's 31-card catalog — never copy the "neighbouring technique" IDs straight from the source PDF/zip.

**Why:** The source documents come from a larger external catalog whose numbering does NOT match this app's card set. e.g. the TC001 source referenced TC023/025/026/030/038, but in this app those IDs are unrelated cards and TC038 doesn't even exist. Linking by source IDs produces broken or misleading navigation.

**How to apply:** Cross-check every linked ID against `CARD_TITLE_MAP` / `LIBRARY_CATEGORIES` in `src/lib/data.ts`. Pick the closest real in-app technique and write a custom `reason`. For TC001 the chosen links were TC002, TC010, TC016.

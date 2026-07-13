# TC Reference Tool

A mobile-first reference app for 31 communication techniques (TC001–TC031) — phrase banks, decision trees, scenarios and daily practice drills. Fully static SPA; no account, no backend required.

## Run & Operate

- `pnpm --filter @workspace/tc-reference run dev` — run the web app (Vite dev server)
- `pnpm --filter @workspace/tc-reference test` — run the Vitest suite
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- The tc-reference app needs **no environment variables**
- The separate `api-server` artifact (scaffolded, not used by tc-reference) uses `DATABASE_URL` and `pnpm --filter @workspace/api-server run dev`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Web app: React 18 + Vite, Tailwind CSS v4 (CSS-first config), shadcn/ui, wouter, TanStack Query
- Testing: Vitest + @testing-library/react

## Where things live

- `artifacts/tc-reference/src/lib/cards.ts` — **single source of truth for all card content** (31 cards: overview, phrase bank, ladder, decision tree, scenarios, drill, checklist)
- `artifacts/tc-reference/src/lib/data.ts` — `LIBRARY_CATEGORIES` (card titles, categories, impact)
- `artifacts/tc-reference/src/lib/phrases-data.ts` — phrase aggregation for the Phrases browser
- `artifacts/tc-reference/src/index.css` — theme tokens (`--fg-*`, `--impact-*`, `--accent-*`, z-index scale), light/dark values
- `artifacts/tc-reference/src/lib/design-tokens.ts` — shared impact-badge styling used by Library and Card Detail
- `artifacts/tc-reference/public/cards/<id>/` — downloadable PDFs per card (TC001 has designed assets; other cards have generated `<id>_Reference.pdf` files — regenerate via `pnpm --filter @workspace/scripts run generate:card-pdfs`)

## Architecture decisions

- All content is static TypeScript data — no API calls; user state (favourites, drill progress, theme) lives in localStorage only
- Each phrase group carries a required `tone` from a six-value canonical vocabulary (Quick / Warm / Professional / Direct / Repair / High-stakes) — the Phrases page filter is built on it
- Every card has a bundled `pdfUrl` (designed for TC001, generated for the rest); a card without one would expose `pdfUrl: null` via PdfContext, which hides the PDF nav button — there is no placeholder PDF. After editing `cards.ts`, re-run the PDF generator so the reference PDFs stay in sync
- Theme is applied as both `data-theme` attribute and `.dark` class (Tailwind's `dark:` variant keys off the class)

## Gotchas

- Favourite phrases are keyed by `(cardId, text)` — editing phrase text in `cards.ts` orphans saved favourites unless you extend the migration in `favourites-state.ts` (`REPHRASED` map / `normalisePhraseText`)
- `--app-header-height` is set on `<html>` by `app-header.tsx` (56px, 46px when compacted); sticky sub-headers and card-detail anchor-scroll math read it — don't hardcode 56px
- The Daily Drill assumes every card has exactly 7 drill entries labelled "Day 1"–"Day 7" (`drill-state.ts` hardcodes the 7-day cycle)
- Quick Lookup merges phrase groups across cards by group `id` — keep group ids unique per card
- `pnpm-workspace.yaml` `overrides` strip non-win32-x64/linux-x64 platform binaries; `allowBuilds.esbuild` must stay `true` or installs fail with `ERR_PNPM_IGNORED_BUILDS`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Root `README.md` covers features, routes, and data architecture in detail

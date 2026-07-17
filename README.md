# TC Reference Tool

A mobile-first reference app for 31 communication techniques, built with React, Vite, and Tailwind CSS v4. Each technique card covers the core formula, phrases, decision trees, scenarios, practice drills, and more — installable as a PWA, works fully offline, no account required, and all user data stays on your device.

---

## Features

- **31 Technique Cards** — detailed reference cards covering voice/presence, influence/framing, clarity/direction, connection/warmth, and resilience/recovery
- **Library** — browse all cards with category chips, impact/difficulty filters, sort by impact or difficulty, and a Surprise Me shortcut
- **Phrases Browser** — 965 speakable phrases aggregated across all cards, filterable by six canonical tones (Quick, Warm, Professional, Direct, Repair, High-stakes) with full-text search
- **Daily Drill** — 7-day practice cycle per card, cycling through all 31 cards, with streak tracking
- **Favourites** — save cards and individual phrases; persisted to localStorage
- **Quick Lookup** — a floating overlay with all phrases grouped by tone for fast in-conversation access
- **Search** — keyboard-accessible global search modal (Cmd+K / Ctrl+K) with live filtering
- **Dark & light themes** — persistent preference via localStorage
- **Mobile-first** — floating action button with swipe-up gesture, haptic feedback, fan/stack nav layouts
- **Offline-capable PWA** — installable to the home screen; a service worker precaches the app shell (including the self-hosted Inter font) and caches card PDFs on demand

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19.1 + Vite 7 |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Offline / install | vite-plugin-pwa (Workbox service worker + web manifest), self-hosted Inter via @fontsource |
| Routing | Wouter v3 |
| Testing | Vitest + @testing-library/react |
| Package manager | pnpm workspaces (pnpm 11, pinned via `packageManager`) |
| Node runtime | Node.js 22.13+ (Replit deployment runs Node 24) |

---

## Project Structure

```
workspace/
├── artifacts/
│   ├── tc-reference/          ← Main web app (this project)
│   │   ├── src/
│   │   │   ├── components/    ← Shared UI components
│   │   │   │   ├── app-layout.tsx     Navigation (sidebar + mobile FAB)
│   │   │   │   ├── app-header.tsx     Sticky top bar
│   │   │   │   ├── search-modal.tsx   Global search overlay
│   │   │   │   └── quick-mode-overlay.tsx  Quick phrase lookup
│   │   │   ├── pages/
│   │   │   │   ├── library.tsx        Card list with filters/sort
│   │   │   │   ├── card-detail.tsx    Full technique card viewer
│   │   │   │   ├── phrases.tsx        Unified phrases browser
│   │   │   │   ├── drill.tsx          Daily practice screen
│   │   │   │   └── favourites.tsx     Saved cards & phrases
│   │   │   ├── lib/
│   │   │   │   ├── cards.ts           All 31 card content (phrases, overview, scenarios…)
│   │   │   │   ├── data.ts            LIBRARY_CATEGORIES, phrase aggregation helpers
│   │   │   │   ├── phrases-data.ts    Aggregated phrases with source-card metadata
│   │   │   │   ├── drill-state.ts     Drill cycle logic + localStorage persistence
│   │   │   │   ├── favourites-state.ts / favourites-context.tsx
│   │   │   │   ├── nav-context.tsx    Shared search/nav state
│   │   │   │   └── theme.tsx          Dark/light theme provider
│   │   │   ├── hooks/
│   │   │   │   ├── use-scroll-direction.ts  Auto-hide filter bar helper
│   │   │   │   ├── use-copy-feedback.ts     Shared copy-to-clipboard feedback
│   │   │   │   └── use-focus-trap.ts        Modal/overlay focus management
│   │   │   └── App.tsx               Route definitions + provider tree
│   │   ├── public/                   Icons, manifest assets, per-card PDFs
│   │   ├── index.html
│   │   ├── vite.config.ts            Vite + Tailwind + PWA (service worker) config
│   │   └── package.json
├── scripts/
│   ├── src/generate-card-pdfs.ts  ← Deterministic per-card reference PDFs
│   └── post-merge.sh          ← Runs after task merges
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 22.13+ (the pinned `pnpm@11.1.1` requires `>=22.13`; Vite 7 requires `^20.19.0 || >=22.12.0`)
- pnpm 11 (the repo pins `pnpm@11.1.1` via the `packageManager` field — Corepack picks this up automatically)

### Install dependencies

```bash
pnpm install
```

### Run the TC Reference app (development)

```bash
pnpm --filter @workspace/tc-reference run dev
```

The app starts at `http://localhost:$PORT` (or port 5173 by default).

### Run tests

```bash
pnpm --filter @workspace/tc-reference test
```

### Type-check everything

```bash
pnpm run typecheck
```

### Build for production

```bash
pnpm --filter @workspace/tc-reference run build
```

---

## Routes

| Path | Screen |
|---|---|
| `/` | Library (31 cards with filters) |
| `/card/:cardId` | Full technique card (e.g. `/card/TC001`) |
| `/phrases` | Unified phrases browser |
| `/drill` | Daily drill screen |
| `/favourites` | Saved cards and phrases |

---

## Data Architecture

All content is static — **no backend required** for the tc-reference app. Card data lives in `src/lib/cards.ts` (4000+ lines). User state (favourites, drill progress, theme preference) persists to **localStorage** only.

Card IDs follow the format `TC001`–`TC031`. Each card record includes:
- `overview` — core formula, impact, difficulty, misuse, best-for
- `phraseBank` — phrase groups, each tagged with one of six canonical tones (Quick / Warm / Professional / Direct / Repair / High-stakes)
- `ladder` — weak → better → best phrase progressions
- `decisionTree` — conditional use-case guidance
- `scenarios` — real-world situation examples
- `drill` — 7-day practice protocol
- `checklist` — self-assessment items
- `pdfUrl` — bundled reference PDF for the in-app viewer. TC001 ships a designed card PDF; every other card ships a generated reference PDF. Generation is deterministic and runs automatically as part of `pnpm --filter @workspace/tc-reference run build`, so deployed PDFs always match `cards.ts`; run `pnpm --filter @workspace/scripts run generate:card-pdfs` manually only if you want refreshed PDFs in the dev server before a build
- Optional sections (all 31 cards): `whatItIsNot`, `influencePayoff`, `fieldTip`, `method`, `commonMistakes`, `recoveryPhrases`, `bestRecoveryLine`, `chains`, `relatedTechniques`; every card now has a `resources` list: TC001 ships its original curated pack, and every other card offers its reference PDF plus generated Phrase Bank and Anki Flashcards CSVs (regenerated automatically during `build` alongside the PDFs, or manually via `pnpm --filter @workspace/scripts run generate:card-csvs`)

---

## Environment Variables

The tc-reference app requires **no environment variables**. It is a fully static SPA.

---

## Card Categories

| Category | Cards |
|---|---|
| Voice / Presence | TC028–TC031 |
| Influence / Framing | TC003, TC008, TC014, TC017, TC021, TC024, TC027 |
| Clarity / Direction | TC005, TC009, TC011, TC015, TC018, TC023, TC026 |
| Connection / Warmth | TC001–TC002, TC006, TC010, TC013, TC016, TC019, TC022, TC025 |
| Resilience / Recovery | TC004, TC007, TC012, TC020 |

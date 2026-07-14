# TC Reference Tool

A mobile-first reference app for 31 communication techniques, built with React, Vite, Tailwind CSS v4, and shadcn/ui. Each technique card covers the core formula, phrases, decision trees, scenarios, practice drills, and more — all offline-capable, no account required.

---

## Features

- **31 Technique Cards** — detailed reference cards covering voice/presence, influence/framing, clarity/direction, connection/warmth, and resilience/recovery
- **Library** — browse all cards with category chips, impact/difficulty filters, sort by impact or difficulty, and a Surprise Me shortcut
- **Phrases Browser** — 484 phrases aggregated across all cards, filterable by six canonical tones (Quick, Warm, Professional, Direct, Repair, High-stakes) with full-text search
- **Daily Drill** — 7-day practice cycle per card, cycling through all 31 cards, with streak tracking
- **Favourites** — save cards and individual phrases; persisted to localStorage
- **Quick Lookup** — a floating overlay with all phrases grouped by tone for fast in-conversation access
- **Search** — keyboard-accessible global search modal (Cmd+K / Ctrl+K) with live filtering
- **Dark & light themes** — persistent preference via localStorage
- **Mobile-first** — floating action button with swipe-up gesture, haptic feedback, fan/stack nav layouts

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 6 |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Components | shadcn/ui (Radix UI primitives) |
| Routing | Wouter v3 |
| Data fetching | TanStack Query v5 |
| Testing | Vitest + @testing-library/react |
| Package manager | pnpm workspaces |
| Node runtime | Node.js 24 |

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
│   │   │   │   └── theme.ts           Dark/light theme provider
│   │   │   ├── hooks/
│   │   │   │   └── use-scroll-direction.ts  Auto-hide filter bar helper
│   │   │   └── App.tsx               Route definitions + provider tree
│   │   ├── public/
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   └── package.json
│   └── api-server/            ← Express API server (scaffolded, separate artifact)
├── lib/
│   └── db/                    ← Drizzle ORM schema + PostgreSQL client
├── scripts/
│   └── post-merge.sh          ← Runs after task merges (db push)
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 24+
- pnpm 9+

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
- Optional sections (currently TC001 only): `method`, `chains`, `relatedTechniques`, and a curated `resources` list (downloadable PDFs/images/CSVs under `public/cards/<id>/`); cards without one expose their reference PDF as a single Downloads entry

---

## Environment Variables

The tc-reference app requires **no environment variables**. It is a fully static SPA.

The api-server artifact uses:
- `DATABASE_URL` — PostgreSQL connection string (Drizzle ORM)

---

## Card Categories

| Category | Cards |
|---|---|
| Voice / Presence | TC028–TC031 |
| Influence / Framing | TC003, TC008, TC014, TC017, TC021, TC024, TC027 |
| Clarity / Direction | TC005, TC009, TC011, TC015, TC018, TC023, TC026 |
| Connection / Warmth | TC001–TC002, TC006, TC010, TC013, TC016, TC019, TC022, TC025 |
| Resilience / Recovery | TC004, TC007, TC012, TC020 |

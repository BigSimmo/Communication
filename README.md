# TC Reference Tool

A mobile-first reference app for 98 communication techniques, built in a workspace with protected local startup and API scaffolding for expansion.

---

## Features

- 98 technique cards (voice/presence, influence/framing, clarity/direction, connection/warmth, resilience/recovery)
- Library with category chips, impact/difficulty filters, and sort controls
- Phrase Bank (4,000+ phrases, filterable by tone and full-text searchable)
- Daily drill with streak tracking and spaced-repetition review
- Playbooks: chain techniques into your own step-by-step guides
- Favourites for cards and phrases via localStorage persistence
- Quick Lookup overlay for fast in-conversation phrase recall
- Keyboard-accessible global search (`Cmd+K` / `Ctrl+K`)
- Light/dark theme persistence
- Mobile-first navigation with a floating menu button, 44px touch targets and safe-area (notch) support
- Installable PWA that works offline

---

## Tech Stack

| Layer           | Technology                      |
| --------------- | ------------------------------- |
| Framework       | React + Vite                    |
| Language        | TypeScript 5.9                  |
| Styling         | Tailwind CSS                    |
| Components      | shadcn/ui                       |
| Routing         | Wouter                          |
| Data fetching   | TanStack Query                  |
| Testing         | Vitest + @testing-library/react |
| Package manager | pnpm workspaces                 |
| Node runtime    | Node.js 24                      |

---

## Project Structure

```txt
artifacts/
├── tc-reference/            ← Main web app (primary product)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
└── api-server/              ← Express sync routes (scaffold, not wired up)
lib/
└── db/                     ← Drizzle schema (scaffold, not wired up)
scripts/
└── local-app.mjs            ← Protected run/guard/stop flow for local app
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

### Run TC Reference (protected flow)

```bash
pnpm app:guard    # verify ownership and status
pnpm app:run      # start app on 127.0.0.1:54112 (default)
```

`pnpm run` is equivalent to `pnpm app:run`.

The app URL is:

- `http://127.0.0.1:54112/` (default)

Override with:

```bash
COMMUNICATION_APP_PORT=3000 pnpm app:run
```

Optional helper:

```bash
pnpm app:stop    # stop the tracked local app process
```

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

The build verifies that the committed card downloads match the card source. After
editing card content, regenerate them explicitly and then re-run the build:

```bash
pnpm --filter @workspace/scripts run generate:card-downloads
```

---

## Routes

| Path            | Screen                                   |
| --------------- | ---------------------------------------- |
| `/`             | Library                                  |
| `/card/:cardId` | Full technique card (e.g. `/card/TC001`) |
| `/phrases`      | Phrase browser                           |
| `/drill`        | Daily drill screen                       |
| `/favourites`   | Saved cards and phrases                  |
| `/playbooks`    | Your saved technique playbooks           |

---

## Data Architecture

TC Reference is a mostly static SPA:

- Core card, phrase and drill data lives in `artifacts/tc-reference/src/lib`
- User state uses `localStorage` (favourites, drill progress, playbooks under `tc_playbooks`, theme)
- No backend credentials are required for normal development

`artifacts/api-server` and `lib/db` are unwired scaffolds for a future sync
backend. They have no `package.json`, are not part of the build or typecheck,
and are not deployed. The sync routes require an upstream auth middleware to
set `res.locals.userId`. Without one, every request is rejected with 401.
Running them would also need `DATABASE_URL` (PostgreSQL connection string).

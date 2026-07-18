# Communication — TC Reference Tool

Mobile-first communication technique reference app built as a workspace with a protected local run flow and API scaffolding for future feature expansion.

---

## Run & protect flow

This repo uses a protected runner in `scripts/local-app.mjs`.

- `pnpm install` — install dependencies
- `pnpm app:guard` — checks whether the expected app is already running and valid
- `pnpm app:run` — starts tc-reference (also reachable as `pnpm run`)
- `pnpm app:stop` — stops the protected app process

`app:run` defaults to:

- `127.0.0.1:54112`
- host bound with `--host 127.0.0.1`
- isolated browser profile at `.local/communication-app/browser-profile`
- identity verification via `artifacts/tc-reference/public/local-app-identity.json`

Set `COMMUNICATION_APP_PORT` (or `LOCAL_APP_PORT`) to override the default port. `app:guard` is useful when sharing a machine or avoiding stale/foreign app processes on the same port.

## Stack

- Package management: `pnpm` workspaces, Node.js 24
- Language/runtime: TypeScript 5.9
- Frontend: React, Vite, Tailwind CSS, shadcn/ui, Wouter, TanStack Query
- Tooling/tests: Vitest + Testing Library
- Database/API packages in repo: PostgreSQL/Drizzle (via `lib/db`), Express 5, Zod, Orval (`api-server`, `lib/api-zod`, `lib/api-spec`, `lib/api-client-react`)

## Repository structure

```txt
artifacts/
  ├── tc-reference/    # Main frontend app (tc-reference SPA)
  └── api-server/      # Express backend scaffold (not required for normal tc-reference run)
lib/
  ├── api-client-react/ # Generated API client helpers
  ├── api-spec/         # OpenAPI spec and codegen source
  ├── api-zod/          # Generated Zod schemas
  └── db/               # Drizzle schema and Postgres helpers
scripts/
  └── local-app.mjs      # Protected run/guard/stop lifecycle
```

## Architecture decisions

- tc-reference startup is protected by a PID/identity check to avoid picking up unrelated processes on the port.
- The app’s primary data (`cards`, `phrases`, `drill`, `favourites`, etc.) is shipped as local TypeScript data and persisted via browser storage.
- Backend packages are intentionally kept in-repo so contract-driven and storage-backed expansion can run alongside the existing frontend.

## Product

- 98 technique cards with detail screens
- Card discovery by category, impact, and difficulty filters
- Phrase browser (grouped by tone, searchable)
- Daily drill flow with streak tracking
- Favourites and quick phrase lookup overlays
- Global command/search modal and mobile-first navigation patterns

## Pointers

- Source of truth for runner protection: `scripts/local-app.mjs`
- Runner identity file: `artifacts/tc-reference/public/local-app-identity.json`

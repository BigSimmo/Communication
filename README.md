# TC Reference Tool

A mobile-first reference app for 107 communication techniques. It runs entirely in the browser, with user data kept in `localStorage`.

---

## Features

- 107 technique cards (voice/presence, influence/framing, clarity/direction, connection/warmth, resilience/recovery)
- Library with category, impact and difficulty filters, sort controls and a live result count
- Phrase Bank (4,000+ phrases, filterable by tone and full-text searchable)
- Daily drill with streak tracking and spaced-repetition review
- Playbooks: chain techniques into your own step-by-step guides
- Favourites for cards and phrases via localStorage persistence
- Quick Lookup overlay for fast in-conversation phrase recall, scoped to the open card with one tap to widen to all cards
- Keyboard-accessible global search (`Cmd+K` / `Ctrl+K`), and left/right arrow keys to step between cards
- Light/dark theme persistence
- Back up and restore your data: export favourites, drill progress, playbooks and settings to a JSON file from the Favourites page, and import it on any device
- Mobile-first navigation with a bottom tab bar, 44px touch targets and safe-area (notch) support
- Installable PWA: the app shell works offline, and cards and downloads work offline once they have been opened while online

---

## Tech Stack

| Layer           | Technology                      |
| --------------- | ------------------------------- |
| Framework       | React + Vite                    |
| Language        | TypeScript 6.0                  |
| Styling         | Tailwind CSS                    |
| Routing         | Wouter                          |
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
│   ├── server.mjs           ← Production static server
│   ├── vite.config.ts
│   └── package.json
scripts/
└── local-app.mjs            ← Protected run/guard/stop flow for local app
```

---

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm 10.15.0+ (the declared `packageManager`; older clients may ignore `verifyDepsBeforeRun`)

### Install dependencies

```bash
pnpm install
```

### Run TC Reference (protected flow)

```bash
pnpm app:guard    # verify ownership and status
pnpm app:run      # start app on 127.0.0.1:54112 (default)
```

Use `pnpm app:run` (or `pnpm run app:run`) to launch the protected app.
Bare `pnpm run` lists scripts; the optional script named `run` needs `pnpm run run`.
The install guard requires pnpm and preserves existing lockfiles when refusing npm or yarn.

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

Run, guard and stop bind the server to this checkout's dedicated Node launcher,
launch token and observed process start identity. Stop rechecks live ownership
before terminating the process. A health response and a saved PID alone do not
establish ownership. Legacy or unverifiable state is kept for manual inspection;
the checkout-local lock prevents overlapping cooperating start and stop calls.
An abandoned lock or state record needs inspection and explicit recovery approval.
These safeguards have local mocked regression coverage; a real launch and stop
still need separate acceptance.

### Automated reviewer

`pnpm code-review` scans the union of staged, unstaged and non-ignored untracked
paths using current working content. It reports rule, file and line without
printing source snippets or raw tool output. For an exact committed comparison,
run `pnpm code-review --base <commit> --head <commit>`. Both references must
resolve, HEAD must match the selected head, and the checkout must be clean. CI
uses the PR or push event's exact head and base; an unavailable base fails closed.
Formatting uses installed local Prettier without a package download. Focused
offline regressions are available through:

```bash
node --test scripts/code-reviewer.test.mjs scripts/local-process-identity.test.mjs
```

### Run tests

```bash
pnpm --filter @workspace/tc-reference test
```

Before installing dependencies, run agent instruction and skill packaging checks directly:

```bash
node scripts/validate-agent-rules.mjs
node --test scripts/agent-rules.test.mjs
```

After explicitly installing dependencies, `pnpm run agent-rules:check` is an alias for those commands.
The workspace requests failure on stale dependencies rather than an implicit install; inherited
package-manager settings can override that policy, so use direct Node commands for pre-install checks.
See [packaged skill guidance](docs/agents/packaged-skills.md).
These checks do not start the app or contact GitHub, memory services or external reviewers.

### Type-check everything

```bash
pnpm run typecheck
```

### Lint and format

```bash
pnpm run lint           # ESLint across the workspace
pnpm run format         # rewrite files with Prettier
pnpm run format:check   # check formatting without writing (used in CI)
```

### Build for production

```bash
pnpm --filter @workspace/tc-reference run build
```

Card downloads (reference, guide and quick-card PDFs, phrase bank and Anki CSVs)
are generated from the card source by `dev` and `build`, so they are not
committed. `test` only generates them if they are missing, so repeat test runs
stay fast; `test:full` always regenerates first. TC001 and the OneCard/TwoCard PDFs are hand-made and stay in git. To
regenerate them on their own:

```bash
pnpm --filter @workspace/tc-reference run generate:downloads
```

### Serve the production build

```bash
pnpm --filter @workspace/tc-reference start
```

`start` runs `server.mjs`, a small `sirv` server that serves `dist/public` with
an SPA fallback, long-lived caching for hashed `/assets/*` files and `no-cache`
for `index.html` and the service worker files. It listens on `PORT` (default
`4173`) and `HOST` (default `0.0.0.0`), and shuts down cleanly on `SIGTERM`.
This is what Railway runs. For a quick local check, `serve` still runs
`vite preview`.

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

TC Reference is a fully client-side SPA with no backend:

- Core card, phrase and drill data lives in `artifacts/tc-reference/src/lib`
- User state uses `localStorage` (favourites, drill progress, playbooks under `tc_playbooks`, theme)
- No backend or credentials are required

# Database PR merge babysit status

**Blocker:** This agent run is bound to `BigSimmo/Communication` with a GitHub token that only has **metadata/read** access to `BigSimmo/Database`. Push, comment, and merge all return HTTP 403 for `cursor[bot]`.

**Action required:** Re-launch this agent on **BigSimmo/Database** (or grant the Cursor GitHub App write access to Database), then apply the prepared patches below.

## PR disposition (safe merge order)

| PR | Status | Disposition |
|----|--------|-------------|
| **#836** | CI red (typecheck/build/unit/UI) | Apply `pr-836-ci-fix.patch` on branch `codex/design-audit-main-safe-merge-20260719`, push, wait for green, merge first |
| **#837** | Conflicts; superseded | **Close without merging** — toolkit landed in #713, skill index in #838 |
| **#833** | CI green; ClinicalDashboard-only | **Close after #836** — same dashboard recovery change is already in #836 |
| **#835** | Draft; CI green; PWA-only | Undraft and merge anytime (orthogonal) |

## What the #836 fix does

Restores main-safe baselines that the PR accidentally broke:

- RAG abort signal / `chunkLoadCache` / coalescing metrics
- `page.tsx` searchParams typing
- Playwright `reducedMotion` type error
- Services navigator metrics import
- Supabase schema/migration/test regressions
- Incorrect Clinical KB H1 / auth-contract test rewrites
- Broken duplicate site-map test / `[workflow-slug]` rename (route is still `[slug]`)

Keeps the intentional design-audit alignment:

- ClinicalDashboard “Answer unavailable” + also-matches split
- Services navigator remount key + AlsoMatches placement
- Forms/services regression + ui-tools assertions

Local validation (Node 24): `typecheck:internal` clean; 94 focused unit tests passed.

## Artifacts

- `pr-836-ci-fix.patch` — apply with `git am` on the #836 branch after merging main
- `pr-836-vs-main.diff` — final intended delta vs main (4 files)
- `pr-836-fixed.bundle` — local commits after main for offline fetch
- `ranking-clinical-gate.patch` — separate tiny follow-up from CodeRabbit on #837

## Apply commands (on a machine/agent with Database write access)

```bash
cd Database
git fetch origin main codex/design-audit-main-safe-merge-20260719
git checkout codex/design-audit-main-safe-merge-20260719
git merge origin/main
git am /path/to/pr-836-ci-fix.patch
git push -u origin HEAD

# After #836 is green and merged:
gh pr close 837 --comment "Superseded by #713 + #838; closing to avoid reintroducing stale toolkit/skill conflicts."
gh pr close 833 --comment "Subsumed by #836 ClinicalDashboard recovery alignment."
gh pr ready 835
gh pr merge 835 --squash
```

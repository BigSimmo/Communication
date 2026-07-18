# Database PR merge fixes (prepared offline)

This cloud agent run was started against **BigSimmo/Communication**, but the target
PRs are on **BigSimmo/Database**. The GitHub token for this environment has
**read-only** access to Database (`cursor[bot]` cannot push, comment, or merge).

## Apply PR #836 CI fix

```bash
cd /path/to/Database
git fetch origin codex/design-audit-main-safe-merge-20260719
git checkout codex/design-audit-main-safe-merge-20260719
git merge origin/main
git am path/to/pr-836-ci-fix.patch
git push origin HEAD
```

Or from the bundle (contains commits after origin/main):

```bash
git fetch pr-836-fixed.bundle HEAD:codex/design-audit-main-safe-merge-20260719-fixed
```

## Close / disposition other PRs

- **#837**: Superseded by #713 + #838. Close without merging.
- **#833**: Subsumed by #836 ClinicalDashboard changes. Close after #836 merges.
- **#835**: CI green, draft. Undraft and merge independently (PWA-only).
- Ranking clinical-gate: apply `ranking-clinical-gate.patch` on a fresh branch from main.

## Relaunch instruction

Re-run this agent **on BigSimmo/Database** with write access so it can push, green CI, and merge.

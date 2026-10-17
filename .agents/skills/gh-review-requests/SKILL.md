---
name: gh-review-requests
description: Find unread GitHub review-request notifications for open PRs in one confirmed repository, filtered by a confirmed team or reviewer.
allowed-tools: Bash
risk: safe
source: community
---

# GitHub Review Requests

Use this skill only for an authorized read of a repository's review queue. The packaged helper is `../../../scripts/github-review-requests.mjs` relative to this skill directory; run the commands below from the repository root. It requires Node and an already authenticated GitHub CLI (`gh`). Do not install tools, authenticate, change permissions or broaden access just because this skill needs them.

## Confirm the scope

This helper supports github.com only. Inspect the actual checkout and `git remote get-url origin`, and verify that the remote host is github.com before deriving a repository name. Stop for GitHub Enterprise or another host; host-aware support needs a separately scoped change. Derive the GitHub `OWNER/REPO` from that remote or the user's explicit repository, and confirm a different destination before reading it. Never assume an organization from this copied skill. This checkout belongs to `BigSimmo/Communication`; use a different repository only when the task authorizes it.

Choose exactly one filter: a confirmed `OWNER/TEAM-SLUG` belonging to the repository owner's organization, or an explicit GitHub reviewer login. Do not guess a team slug from a display name. If the owner is a personal account with no teams, use the authorized reviewer login; do not switch to another organization.

## Read the scoped queue

For a synthetic example organization and team:

```bash
node scripts/github-review-requests.mjs --repo ExampleOrg/example-repo --team ExampleOrg/example-team
```

For a reviewer:

```bash
node scripts/github-review-requests.mjs --repo ExampleOrg/example-repo --reviewer example-reviewer
```

Replace those synthetic operands with the confirmed scope. The helper validates the operands, passes arguments directly to `gh` without a shell, reads only the repository's notifications and PR endpoints, and checks that the PR is open, unmerged and still requests that team/reviewer. It does not mark notifications read or enumerate organization members. A team filter is for requested teams, not PRs merely authored by team members.

## Present results and limits

Present PR number, title, URL and reason from the JSON result. Report zero only after a successful lookup; unavailable tooling, denied access and a failed request are not an empty queue. Results cover unread notifications visible to the authenticated principal; absence does not prove the whole team's queue is empty.

If the helper or notification access is unavailable, disclose the limitation. When authorized and supported, an explicitly scoped connector query or `gh pr list --repo github.com/OWNER/REPO --state open --search 'team-review-requested:OWNER/TEAM'` can show current open team review requests, but does not establish unread-notification state. A personal reviewer query uses `review-requested:LOGIN` in the same repository. Never fall back to account-wide notifications/search or a different owner/team. Read-only permission is inherited from the task and host; the recipe grants no new authority.

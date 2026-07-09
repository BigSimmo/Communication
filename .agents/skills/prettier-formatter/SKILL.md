---
name: prettier-formatter
description: "Run Prettier formatting checks and automatically format files in the workspace using `npx prettier`."
category: review
risk: safe
tags: [prettier, format, lint]
---

# Prettier Formatter Skill

Use this skill when you need to check or enforce code formatting style consistency across files in the workspace.

## When to Use

- When files fail the Prettier formatting check during automated code reviews.
- Prior to staging or committing file edits.

## Steps

1. Run the Prettier formatting check command on specific changed files:
   ```bash
   npx prettier --check <filepath>
   ```
2. Or run it to automatically format files in-place:
   ```bash
   npx prettier --write <filepath>
   ```
3. Report formatting status and any resolved files to the user.

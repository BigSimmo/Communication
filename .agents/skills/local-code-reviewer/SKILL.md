---
name: local-code-reviewer
description: "Run and analyze the repository's automated code review checks (Prettier, TypeScript type-check, Vitest, and Regex Audits) using `pnpm run code-review`."
category: review
risk: safe
tags: [review, lint, test, typecheck, qa]
---

# Local Code Reviewer Skill

Use this skill when you need to run the repository's automated quality gates and checks to verify that code is correct, formatted, compiles, and passes tests.

## When to Use

- Before committing changes or completing a task.
- To verify formatting, TypeScript compilation, and Vitest test suite status.
- To scan for left-over debugger statements, console logs, unresolved TODOs, and hardcoded credentials.

## Steps

1. Run the local code review command in the terminal at the repository root:
   ```bash
   pnpm run code-review
   ```
2. Analyze the output:
   - **Formatting (Prettier)**: Check if any changed files failed formatting.
   - **Typechecking (TypeScript)**: Check for compilation or static type errors.
   - **Tests (Vitest)**: Check if all tests pass.
   - **Quality & Security Audits**: Note any regex-based violations (e.g., console.logs, hardcoded secrets, unresolved TODOs).
3. If errors are found, fix them and re-run the code review until all checks pass successfully.
4. Report a summary of the results to the user.

---
name: vitest-test-runner
description: "Run the Vitest test suite for the @workspace/tc-reference application using `pnpm --filter @workspace/tc-reference test`."
category: testing
risk: safe
tags: [test, vitest, qa]
---

# Vitest Test Runner Skill

Use this skill when you need to run or review tests for the `tc-reference` React application.

## When to Use

- When modifying code in `artifacts/tc-reference/` or shared library packages.
- To verify that new changes did not break existing functionality.
- To check that new features have passing test coverage.

## Steps

1. Run the test suite command in the terminal:
   ```bash
   pnpm --filter @workspace/tc-reference test
   ```
2. Analyze the test runner results:
   - Identify which test suites and specific cases failed.
   - Look at the error stack traces to understand the root cause of the failure.
3. Fix the failing code or update the test files if requirements have changed, then re-run to confirm all tests pass.
4. Report test pass/fail statistics and any issues found to the user.

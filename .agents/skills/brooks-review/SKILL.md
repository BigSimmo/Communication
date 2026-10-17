---
name: brooks-review
description: "PR code review that surfaces decay risks, design smells, and maintainability issues with concrete Symptom → Source → Consequence → Remedy findings, drawing on twelve classic engineering books. Triggers when: user asks to review code, check a PR, shares a diff or pastes code asking..."
risk: unknown
source: https://github.com/hyhmrright/brooks-lint/tree/main/skills/brooks-review
source_repo: hyhmrright/brooks-lint
source_type: community
date_added: 2026-07-01
license: MIT
license_source: https://github.com/hyhmrright/brooks-lint/blob/main/LICENSE
---

# Brooks-Lint — PR Review
## When to Use

Use this skill when you need pR code review that surfaces decay risks, design smells, and maintainability issues with concrete Symptom → Source → Consequence → Remedy findings, drawing on twelve classic engineering books. Triggers when: user asks to review code, check a PR, shares a diff or pastes code asking...


## Local packaging and scope

This is a self-contained local adaptation, not the complete upstream Brooks-Lint suite. Its shared configuration, source-coverage catalogue, risk taxonomy and numerical Health Score contract are not bundled. Do not load missing sibling skills or claim upstream grading compatibility, book-level coverage or an exact score.

Read `pr-review-guide.md` for the retained analysis process. Establish the user's diff or selected files using the actual repository and changed-file list; state any sampling. Use the named risks and evidence in that guide rather than invented upstream thresholds. A large diff or long function is a review lead, not by itself a demonstrated defect.

## Process and output

1. Establish scope and the change's intended behavior.
2. Use the guide's change propagation, cognitive overload, duplication, complexity, dependency and domain checks when applicable.
3. Apply the guide's test check to behavior changes. Do not create findings from stylistic thresholds without a concrete consequence.
4. For each finding record Symptom (source location), Source (verified contract or principle), Consequence (reachable effect), and Remedy (small actionable fix). Separate confirmed findings from questions and unavailable evidence.
5. Report mode `PR Review`, scope, findings by severity, checks actually run, limits and next action. No findings is a valid result.

## Limitations

- Use this skill only when the task clearly matches its upstream source and local project context.
- Verify commands, generated code, dependencies, credentials, and external service behavior before applying changes.
- Do not treat examples as a substitute for environment-specific tests, security review, or user approval for destructive or costly actions.

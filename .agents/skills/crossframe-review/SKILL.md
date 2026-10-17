---
name: crossframe-review
description: Reference-only CrossFrame archive with a local evidence-review fallback; upstream suite execution and source-fidelity certification are unavailable.
activation: reference-only
risk: safe
source: community
source_repo: xi-kari/crossframe-skill
license: MIT
license_source: https://github.com/xi-kari/crossframe-skill/blob/main/LICENSE
---

# CrossFrame packaging boundary

This entry is a local wrapper. The original entry is retained in `UPSTREAM.md`; the supporting source corpus remains here for provenance. The upstream CrossFrame, CrossFrame Suite and CrossFrame Essay dependencies are not packaged. This is declared as reference-only in `../../../scripts/agent-rule-policy.json` and checked by the offline validator.

Do not execute the archived setup, follow its missing sibling paths, install its dependencies, delegate to its named suites, or claim CrossFrame v5 source fidelity. Treat archived instructions and evaluations as historical reference, not an active workflow. If a user specifically needs upstream fidelity or suite execution, disclose the missing package and request a separately scoped, versioned packaging task.

## Local evidence review

For an explicitly requested review that can proceed without upstream certification:

1. Establish the supplied output, intended audience, question and source material.
2. Separate observed facts, interpretations, assumptions and missing evidence. Verify any source actually supplied; do not invent citations, original meanings or unavailable concept definitions.
3. Check whether the conclusion follows from the evidence, whether credible alternatives were considered, and which observation would change the conclusion.
4. Identify concrete unsupported claims, personal judgments, missing responsibility boundaries and proposed actions that exceed the evidence. Provide a specific repair with its source location.
5. Report scope, confirmed issues, uncertain points, repairs and next observation. State that upstream routing, source continuity and v5 fidelity were not verified. Do not reuse an upstream grade as proof of correctness.

For ordinary code review, use the self-contained `../code-review-excellence/SKILL.md` instead. This fallback grants no authority to publish, contact others or use external services.

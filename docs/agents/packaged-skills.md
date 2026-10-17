# Local skill packaging and verification

The community source fields in `.agents/skills` record provenance. They do not declare a complete upstream installation, grant tool access or guarantee compatibility with another host. Local adaptations retain the useful review processes while removing calls to missing resources and exact agent types. Do not install upstream dependencies just to satisfy an instruction file.

The comprehensive review and Git workflow roles use the host's supported tools only when delegation is permitted; they run directly in sequence when it is unavailable. Required independent-review gates remain unmet until a separate reviewer supplies evidence. Optional scanner/service examples require existing support and applicable authority. Local checks, hosted CI, merge and deployment are separate evidence states.

The GitHub review-request helper requires explicit repository and same-owner team or reviewer operands. It reads only repository notification/PR endpoints, leaves notifications unread and fails without broader fallback. Tests inject synthetic API results; they do not authenticate or call GitHub. See the `gh-review-requests` entry for the visible-principal and unread-notification limitations.

Brooks and Logic Review use the bundled guides and local report contracts. Their absent upstream shared definitions, complete risk catalogues and graders are not claimed. GitHub Actions review maps triggers to its inline checks. Skills with absent optional playbooks use their retained inline workflow. No upstream support material was reconstructed or imported.

CrossFrame is reference-only because its three sibling suites are absent. Its entry provides a local evidence-review fallback; the former entry and support corpus remain available as archived provenance. Archived instructions are not active. The packaging policy declares unavailable dependencies, archive and fallback. Adding an upstream dependency requires a packaging review before activation; the validator fails if the declaration becomes stale. It does not certify source fidelity or validate every archived upstream path.

Vibers is an inactive third-party recipe requiring an explicit request for that named integration and separately applicable authority for access, publication, disclosure, costs and activation. Its local instructions use synthetic fixtures without secrets. No collaborator, public specification, workflow or feedback call is enabled by retaining the recipe.

Run the deterministic checks without dependencies or network:

```bash
node scripts/validate-agent-rules.mjs
node --test scripts/agent-rules.test.mjs
```

`pnpm run agent-rules:check` runs both commands; the existing code-review CI workflow invokes it. The validator checks literal local support paths and Markdown links in active skill prose, including supporting Markdown files, plus the reference-only wrapper's paths and declared activation boundary. Fenced code examples, external links and generic optional project guidance filenames are not treated as bundled support files. Tests exercise missing/escaping paths, symlinks, archived dependency status, stale instruction regressions and synthetic repository-scoped review queues. It does not validate arbitrary prose semantics, remote URLs, actual client loading, upstream archives or live service behavior.

For a read-only host smoke check, open the intended checkout and revision in a fresh supported client, inspect native loading evidence, then use invented examples for an unavailable agent type, wrong-project memory document, unavailable memory connector and explicit Vibers opt-in. Expected behavior is the documented supported fallback or unmet gate, no account-default retrieval, no automatic external activation, and an honest scope/limits report. Do not use real credentials, private source, services or patient information to test instruction loading.

---
name: typescript-typechecker
description: "Run TypeScript typechecking across the workspace using `pnpm run typecheck`."
category: review
risk: safe
tags: [typescript, typecheck, compile]
---

# TypeScript Typechecker Skill

Use this skill when you need to run static type analysis and compilation checks across the workspace.

## When to Use

- When modifying `.ts` or `.tsx` files in the repository.
- To detect compilation issues, incorrect types, missing imports, or prop contract mismatches in the React app.

## Steps

1. Run the workspace-wide typecheck command at the repository root:
   ```bash
   pnpm run typecheck
   ```
2. Analyze the compilation output:
   - Identify files and line numbers with type errors.
   - Pay close attention to contract changes in shared components or models.
3. Fix any reported type mismatches or syntax issues, and re-run the typecheck to ensure clean output.
4. Report results to the user.

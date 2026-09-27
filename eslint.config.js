import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/coverage/**",
      ".agents/**",
      // Temporary agent worktrees
      ".claude/worktrees/**",
      "artifacts/tc-reference/public/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["artifacts/tc-reference/src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["artifacts/tc-reference/src/**/*.tsx"],
    ...jsxA11y.flatConfigs.recommended,
  },
  {
    files: ["artifacts/tc-reference/src/**/*.{ts,tsx}"],
    ...reactHooks.configs.flat.recommended,
  },
  {
    files: ["artifacts/tc-reference/src/**/*.{ts,tsx}"],
    rules: {
      // React Compiler rules, enforced: reset state during render (store the
      // previous input and compare) or in event handlers, not in effects, and
      // never read or write ref.current during render.
      "react-hooks/set-state-in-effect": "error",
      "react-hooks/refs": "error",
    },
  },
  {
    rules: {
      // Empty catches are the deliberate pattern for best-effort localStorage writes.
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
  },
  {
    files: [
      "scripts/**/*.{js,mjs,cjs,ts}",
      "artifacts/tc-reference/scripts/**/*.{js,mjs,ts}",
      "**/*.config.{js,mjs,cjs,ts}",
      "artifacts/tc-reference/server.mjs",
    ],
    languageOptions: {
      globals: globals.node,
    },
  },
);

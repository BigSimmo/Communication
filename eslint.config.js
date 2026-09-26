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
      // Dead code awaiting deletion.
      "artifacts/api-server/**",
      "lib/**",
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
      // React Compiler rule; flags deliberate resets/syncs (e.g. reset paging when filters change) that work correctly here.
      "react-hooks/set-state-in-effect": "warn",
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

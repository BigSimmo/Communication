import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

// Color helpers
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

console.log(
  `${colors.cyan}${colors.bold}=== Running Automated Code Reviewer ===${colors.reset}\n`,
);

// 1. Detect changed files in Git
function getChangedFiles() {
  const files = new Set();

  // In CI the checkout is clean, so compare against the base ref instead
  // (e.g. CODE_REVIEW_BASE=origin/main for a pull request)
  const base = process.env.CODE_REVIEW_BASE;
  if (base) {
    const committed = spawnSync(
      "git",
      ["diff", "--name-only", "--diff-filter=ACMR", `${base}...HEAD`],
      { encoding: "utf8" },
    );
    if (committed.status !== 0) {
      console.error(
        `${colors.red}Could not diff against ${base}: ${committed.stderr.trim()}${colors.reset}`,
      );
      process.exit(1);
    }
    committed.stdout
      .split("\n")
      .forEach((f) => f.trim() && files.add(f.trim()));
  }

  // Staged files
  const staged = spawnSync("git", ["diff", "--cached", "--name-only"], {
    encoding: "utf8",
  });
  if (staged.status === 0) {
    staged.stdout.split("\n").forEach((f) => f.trim() && files.add(f.trim()));
  }

  // Unstaged files
  const unstaged = spawnSync("git", ["diff", "--name-only"], {
    encoding: "utf8",
  });
  if (unstaged.status === 0) {
    unstaged.stdout.split("\n").forEach((f) => f.trim() && files.add(f.trim()));
  }

  // Untracked files
  const status = spawnSync("git", ["status", "--porcelain"], {
    encoding: "utf8",
  });
  if (status.status === 0) {
    status.stdout.split("\n").forEach((line) => {
      const match = line.match(/^\?\?\s+(.+)$/);
      if (match) {
        files.add(match[1].trim());
      }
    });
  }

  return Array.from(files).filter((f) => {
    // Exclude node_modules, temp files, lock files, package files, etc.
    return (
      fs.existsSync(f) &&
      fs.lstatSync(f).isFile() &&
      !f.includes("node_modules") &&
      !f.includes("pnpm-lock.yaml") &&
      !f.includes("package.json") &&
      !f.includes(".git") &&
      !f.includes(".local") &&
      !f.includes(".temp-skills")
    );
  });
}

const changedFiles = getChangedFiles();

if (changedFiles.length === 0) {
  console.log(
    `${colors.green}No modified files found. Workspace is clean!${colors.reset}`,
  );
  process.exit(0);
}

console.log(
  `${colors.bold}Scanning ${changedFiles.length} modified file(s):${colors.reset}`,
);
changedFiles.forEach((f) => console.log(" - " + f));
console.log("");

let hasErrors = false;
const warningsList = [];
const errorsList = [];

// 2. Formatting Check (Prettier)
console.log(
  `${colors.bold}[1/4] Checking Formatting (Prettier)...${colors.reset}`,
);
const formattingFailures = [];
for (const file of changedFiles) {
  // Prettier formatting is supported for many text formats
  if (/\.(js|jsx|ts|tsx|css|md|json|html|yml|yaml)$/.test(file)) {
    const check = spawnSync("pnpm", ["exec", "prettier", "--check", file], {
      encoding: "utf8",
    });
    if (check.status !== 0) {
      formattingFailures.push(file);
    }
  }
}

if (formattingFailures.length > 0) {
  console.log(
    `${colors.red}✗ Formatting issues found in the following files:${colors.reset}`,
  );
  formattingFailures.forEach((f) => {
    console.log("  - " + f);
    errorsList.push("Prettier formatting: " + f);
  });
  hasErrors = true;
} else {
  console.log(
    `${colors.green}✓ All files are correctly formatted!${colors.reset}`,
  );
}
console.log("");

// 3. TypeScript Type-Checking
let tsChanged = changedFiles.some((f) => /\.(ts|tsx)$/.test(f));
console.log(`${colors.bold}[2/4] Typechecking (TypeScript)...${colors.reset}`);
if (tsChanged) {
  console.log("TS/TSX file change detected. Running workspace typecheck...");
  const typecheck = spawnSync("pnpm", ["run", "typecheck"], {
    encoding: "utf8",
    stdio: "inherit",
    shell: true,
  });
  if (typecheck.status !== 0) {
    console.log(`${colors.red}✗ TypeScript compilation failed.${colors.reset}`);
    errorsList.push("TypeScript typecheck compilation errors");
    hasErrors = true;
  } else {
    console.log(
      `${colors.green}✓ TypeScript compiled successfully with no type errors!${colors.reset}`,
    );
  }
} else {
  console.log(
    `${colors.yellow}⚠ No TS/TSX changes detected. Skipping typecheck.${colors.reset}`,
  );
}
console.log("");

// 4. Test Suite Execution (Vitest)
let refChanged = changedFiles.some(
  (f) => f.startsWith("artifacts/tc-reference/") || f.startsWith("lib/"),
);
console.log(
  `${colors.bold}[3/4] Running Test Suite (Vitest)...${colors.reset}`,
);
if (refChanged) {
  console.log("Client-side or lib change detected. Running tests...");
  const tests = spawnSync(
    "pnpm",
    [
      "--filter",
      "@workspace/tc-reference",
      "test",
      "--",
      "--test-timeout=20000",
    ],
    { encoding: "utf8", stdio: "inherit", shell: true },
  );
  if (tests.status !== 0) {
    console.log(`${colors.red}✗ Vitest test suite failed.${colors.reset}`);
    errorsList.push("Vitest test suite failures");
    hasErrors = true;
  } else {
    console.log(
      `${colors.green}✓ All tests passed successfully!${colors.reset}`,
    );
  }
} else {
  console.log(
    `${colors.yellow}⚠ No client/lib changes detected. Skipping tests.${colors.reset}`,
  );
}
console.log("");

// 5. Code Quality & Security Audits
console.log(
  `${colors.bold}[4/4] Running Code Quality & Security Audits...${colors.reset}`,
);

// Regex rules (constructed dynamically to prevent self-matching)
const rules = [
  {
    name: "Hardcoded Credential / Secret Leak",
    pattern: new RegExp(
      // Require a digit so slug-style names like "tc-recent-searches" pass
      "(const|let|var|env)\\s+\\w*(key|secret|password|token|auth)\\w*\\s*=\\s*['\"`](?=[^'\"`]*\\d)[A-Za-z0-9+/=_-]{16,}['\"`]",
      "i",
    ),
    severity: "error",
    message:
      "Potential hardcoded credential or secret detected. Move to environment variables.",
  },
  {
    name: "Leftover Debug Console Log",
    pattern: new RegExp("console" + "\\.log\\("),
    severity: "warning",
    message:
      "Leftover console.log statement. Clean up or use a logger in production code.",
    exclude: /test|spec|scripts|tool/i,
  },
  {
    name: "Active Deb" + "ugger Statement",
    pattern: new RegExp("\\bdeb" + "ugger\\b"),
    severity: "error",
    message: "Active deb" + "ugger statement left in code.",
  },
  {
    name: "Unresolved TO" + "DO Task",
    pattern: new RegExp("\\b(TO" + "DO|FIX" + "ME)\\b"),
    severity: "warning",
    message: "Unresolved TO" + "DO or FIX" + "ME comment.",
  },
];

for (const file of changedFiles) {
  try {
    const content = fs.readFileSync(file, "utf8");
    const lines = content.split("\n");

    // File length warning
    if (lines.length > 500 && /\.(ts|tsx|js|jsx)$/.test(file)) {
      const msg =
        "File exceeds 500 lines (" +
        lines.length +
        " lines). Consider refactoring to break it down.";
      console.log(
        `${colors.yellow}⚠ WARNING in ${file}: ${msg}${colors.reset}`,
      );
      warningsList.push(file + ": Exceeds 500 lines");
    }

    // Pattern checks
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      rules.forEach((rule) => {
        if (rule.exclude && rule.exclude.test(file)) return;
        if (rule.pattern.test(line)) {
          const detail =
            file +
            ":" +
            lineNum +
            ": " +
            rule.message +
            ' (Line: "' +
            line.trim() +
            '")';
          if (rule.severity === "error") {
            console.log(
              `${colors.red}✗ ERROR: [${rule.name}] in ${detail}${colors.reset}`,
            );
            errorsList.push("[" + rule.name + "] " + detail);
            hasErrors = true;
          } else {
            console.log(
              `${colors.yellow}⚠ WARNING: [${rule.name}] in ${detail}${colors.reset}`,
            );
            warningsList.push("[" + rule.name + "] " + detail);
          }
        }
      });
    });
  } catch (err) {
    console.warn("Failed to audit file " + file + ": " + err.message);
  }
}

console.log("\n" + colors.bold + "=== Review Summary ===" + colors.reset);
console.log(
  "Errors: " +
    (errorsList.length === 0 ? colors.green : colors.red) +
    errorsList.length +
    colors.reset,
);
console.log(
  "Warnings: " +
    (warningsList.length === 0 ? colors.green : colors.yellow) +
    warningsList.length +
    colors.reset +
    "\n",
);

if (hasErrors) {
  console.log(
    `${colors.red}${colors.bold}✗ Code Review Failed.${colors.reset} Please fix the issues before committing.`,
  );
  process.exit(1);
} else {
  console.log(
    `${colors.green}${colors.bold}✓ Code Review Passed!${colors.reset} All critical gates verified.`,
  );
  process.exit(0);
}

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

class ReviewError extends Error {}

export function parseArguments(args) {
  if (args.length === 0) return { mode: "local" };
  const values = {};
  for (let i = 0; i < args.length; i += 2) {
    const name = args[i];
    if (
      !["--base", "--head"].includes(name) ||
      values[name] ||
      !args[i + 1] ||
      args[i + 1].startsWith("-")
    )
      throw new ReviewError(
        "Usage: code-reviewer.mjs [--base <commit> --head <commit>]; unknown, duplicate or unsupported argument",
      );
    values[name] = args[i + 1];
  }
  if (!values["--base"] || !values["--head"])
    throw new ReviewError("Committed mode requires both --base and --head");
  return { mode: "committed", base: values["--base"], head: values["--head"] };
}
function git(args, { cwd, run }) {
  const result = run("git", args, {
    cwd,
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
  });
  // Never forward command output: errors and tools may contain source values.
  if (result.error || result.status !== 0)
    throw new ReviewError(
      "Git selection failed; comparison or repository state is unavailable",
    );
  return result.stdout;
}
function nulList(text) {
  return text.split("\0").filter(Boolean);
}
function eligible(file) {
  const parts = file.split("/");
  return (
    !parts.some((p) =>
      ["node_modules", ".git", ".local", ".temp-skills"].includes(p),
    ) && !["pnpm-lock.yaml", "package.json"].includes(path.posix.basename(file))
  );
}
function safePath(cwd, file) {
  const full = path.resolve(cwd, file);
  const relative = path.relative(cwd, full);
  if (
    !relative ||
    relative.startsWith(`..${path.sep}`) ||
    relative === ".." ||
    path.isAbsolute(relative)
  )
    throw new ReviewError("Selected path is outside the checkout");
  return full;
}
function assertCommittedCheckoutStable(selected, context) {
  if (selected.mode !== "committed") return;
  const currentHead = git(
    ["rev-parse", "--verify", "--end-of-options", "HEAD^{commit}"],
    context,
  ).trim();
  if (currentHead !== selected.headSha)
    throw new ReviewError("Checkout HEAD changed during committed review");
  if (git(["status", "--porcelain=v1", "-z", "--untracked-files=all"], context))
    throw new ReviewError("Checkout changed during committed review");
}
export function selectFiles(
  options,
  { cwd = process.cwd(), run = spawnSync, io = fs } = {},
) {
  const context = { cwd, run };
  let candidates, baseSha, headSha;
  let deleted = [];
  if (options.mode === "committed") {
    const resolve = (ref) => {
      const sha = git(
        ["rev-parse", "--verify", "--end-of-options", `${ref}^{commit}`],
        context,
      ).trim();
      if (!/^[0-9a-f]{40}$/i.test(sha))
        throw new ReviewError(
          "Comparison did not resolve to a full commit SHA",
        );
      return sha;
    };
    baseSha = resolve(options.base);
    headSha = resolve(options.head);
    if (resolve("HEAD") !== headSha)
      throw new ReviewError(
        "Checkout HEAD does not match selected head commit",
      );
    // Workspace checks must run against the selected tree, not later dirty inputs.
    if (
      git(["status", "--porcelain=v1", "-z", "--untracked-files=all"], context)
    )
      throw new ReviewError(
        "Committed mode requires the selected head's clean tracked/index/untracked checkout",
      );
    candidates = nulList(
      git(
        [
          "diff",
          "--name-only",
          "-z",
          "--no-renames",
          "--diff-filter=ACMRT",
          baseSha,
          headSha,
          "--",
        ],
        context,
      ),
    );
    deleted = nulList(
      git(
        [
          "diff",
          "--name-only",
          "-z",
          "--no-renames",
          "--diff-filter=D",
          baseSha,
          headSha,
          "--",
        ],
        context,
      ),
    );
  } else {
    candidates = [
      ...new Set([
        ...nulList(
          git(
            [
              "diff",
              "--cached",
              "--name-only",
              "-z",
              "--no-renames",
              "--diff-filter=ACMRTD",
              "--",
            ],
            context,
          ),
        ),
        ...nulList(
          git(
            [
              "diff",
              "--name-only",
              "-z",
              "--no-renames",
              "--diff-filter=ACMRTD",
              "--",
            ],
            context,
          ),
        ),
        ...nulList(
          git(["ls-files", "--others", "--exclude-standard", "-z"], context),
        ),
      ]),
    ];
  }
  const files = [],
    skipped = deleted.map((file) => ({
      file,
      reason: "deleted in selected head",
    }));
  for (const file of candidates) {
    if (!eligible(file)) {
      skipped.push({ file, reason: "configured exclusion" });
      continue;
    }
    const full = safePath(cwd, file);
    let stat;
    try {
      stat = io.lstatSync(full);
    } catch (error) {
      if (options.mode === "local" && error.code === "ENOENT") {
        skipped.push({ file, reason: "deleted in current working tree" });
        continue;
      }
      throw new ReviewError(
        `Cannot inspect selected file ${JSON.stringify(file)}; review incomplete`,
      );
    }
    if (!stat.isFile() || stat.isSymbolicLink())
      throw new ReviewError(
        `Unsupported selected file ${JSON.stringify(file)}; review incomplete`,
      );
    let content;
    try {
      content = io.readFileSync(full, "utf8");
    } catch {
      throw new ReviewError(
        `Cannot read selected file ${JSON.stringify(file)}; review incomplete`,
      );
    }
    if (
      options.mode === "committed" &&
      content !== git(["show", `${headSha}:${file}`], context)
    )
      throw new ReviewError(
        `Selected content differs from head commit: ${JSON.stringify(file)}`,
      );
    files.push({ file, content });
  }
  return {
    mode: options.mode,
    baseSha,
    headSha,
    candidates: [...candidates, ...deleted],
    skipped,
    files,
  };
}
// No source snippets, including on lines that trigger several different rules.
export function audit(files) {
  const rules = [
    {
      name: "Hardcoded Credential / Secret Leak",
      pattern:
        /(const|let|var|env)\s+\w*(key|secret|password|token|auth)\w*\s*=\s*['"`](?=[^'"`]*\d)[A-Za-z0-9+/=_-]{16,}['"`]/i,
      severity: "error",
      message:
        "Potential hardcoded credential; move it to an approved environment variable.",
    },
    {
      name: "Leftover Debug Console Log",
      pattern: new RegExp("console" + "\\.log\\("),
      severity: "warning",
      message: "Use a production logger or remove the debug statement.",
      exclude: /test|spec|scripts|tool/i,
    },
    {
      name: "Active Deb" + "ugger Statement",
      pattern: new RegExp("\\bdeb" + "ugger\\b"),
      severity: "error",
      message: "Remove the active deb" + "ugger statement.",
    },
    {
      name: "Unresolved TO" + "DO Task",
      pattern: new RegExp("\\b(TO" + "DO|FIX" + "ME)\\b"),
      severity: "warning",
      message: "Review the unresolved task.",
    },
  ];
  const findings = [];
  for (const { file, content } of files) {
    const lines = content.split("\n");
    if (lines.length > 500 && /\.(ts|tsx|js|jsx)$/.test(file))
      findings.push({
        file,
        line: 1,
        name: "File length",
        severity: "warning",
        message: `File exceeds 500 lines (${lines.length}); consider splitting it.`,
      });
    lines.forEach((line, index) => {
      for (const rule of rules)
        if (
          (!rule.exclude || !rule.exclude.test(file)) &&
          rule.pattern.test(line)
        )
          findings.push({
            file,
            line: index + 1,
            name: rule.name,
            severity: rule.severity,
            message: rule.message,
          });
    });
  }
  return findings;
}
export function review(
  options,
  { cwd = process.cwd(), run = spawnSync, io = fs, log = console.log } = {},
) {
  const selected = selectFiles(options, { cwd, run, io });
  log(
    `Review scope: ${selected.mode}${selected.mode === "committed" ? ` base=${selected.baseSha} head=${selected.headSha}` : " staged + unstaged + untracked union; current working content"}`,
  );
  log(
    `Selected ${selected.candidates.length} path(s), scanning ${selected.files.length}; skipped ${selected.skipped.length}.`,
  );
  for (const { file } of selected.files) log(` - ${JSON.stringify(file)}`);
  for (const { file, reason } of selected.skipped)
    log(`Skipped ${JSON.stringify(file)}: ${reason}`);
  if (!selected.files.length) {
    assertCommittedCheckoutStable(selected, { cwd, run });
    log(
      "No eligible changed files to scan for this comparison; this does not certify a clean workspace or application gates.",
    );
    return { exitCode: 0, selected, findings: [], checks: [] };
  }
  const findings = audit(selected.files);
  for (const f of findings)
    log(
      `${f.severity.toUpperCase()} ${JSON.stringify(f.file)}:${f.line} [${f.name}] ${f.message}`,
    );
  const checks = [];
  const check = (name, command, args) => {
    const result = run(command, args, {
      cwd,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      windowsHide: true,
    });
    const passed = !result.error && result.status === 0;
    checks.push({ name, passed });
    log(
      `${passed ? "PASS" : "FAIL"} ${name}; raw tool output suppressed to prevent source/secret echo.`,
    );
  };
  const prettier = path.join(
    cwd,
    "node_modules",
    "prettier",
    "bin",
    "prettier.cjs",
  );
  const formatting = selected.files.filter(({ file }) =>
    /\.(m?js|jsx|ts|tsx|css|md|json|html|yml|yaml)$/.test(file),
  );
  if (formatting.length) {
    if (!io.existsSync(prettier)) {
      checks.push({ name: "Formatting", passed: false });
      log(
        "FAIL Formatting: installed local Prettier is unavailable; no package download attempted.",
      );
    } else
      check("Formatting", process.execPath, [
        prettier,
        "--check",
        ...formatting.map((f) => safePath(cwd, f.file)),
      ]);
  }
  const pnpm = (args) =>
    process.platform === "win32"
      ? [
          process.env.ComSpec || "cmd.exe",
          ["/d", "/s", "/c", `pnpm ${args.join(" ")}`],
        ]
      : ["pnpm", args]; // These arguments are fixed internal constants.
  const skipChecks = process.env.CODE_REVIEW_SKIP_CHECKS === "1";
  if (!skipChecks && selected.files.some((f) => /\.(ts|tsx)$/.test(f.file)))
    check("TypeScript", ...pnpm(["run", "typecheck"]));
  else log("SKIP TypeScript: no selected TS/TSX file.");
  if (
    !skipChecks &&
    selected.files.some((f) => f.file.startsWith("artifacts/tc-reference/"))
  )
    check(
      "Vitest",
      ...pnpm([
        "--filter",
        "@workspace/tc-reference",
        "test",
        "--",
        "--test-timeout=20000",
      ]),
    );
  else log("SKIP Vitest: no selected client/lib file.");
  const errors = findings.filter((f) => f.severity === "error").length,
    warnings = findings.length - errors;
  const exitCode = errors || checks.some((c) => !c.passed) ? 1 : 0;
  if (!exitCode) assertCommittedCheckoutStable(selected, { cwd, run });
  log(
    `Review summary: ${errors} audit error(s), ${warnings} warning(s), ${checks.filter((c) => !c.passed).length} failed selected check(s).`,
  );
  log(
    exitCode
      ? "Code review failed."
      : "Selected code review checks passed; skipped/unselected gates remain unverified.",
  );
  return { exitCode, selected, findings, checks };
}
export function main(args = process.argv.slice(2), dependencies = {}) {
  try {
    return review(parseArguments(args), dependencies).exitCode;
  } catch (error) {
    (dependencies.log || console.error)(
      `Review incomplete: ${error instanceof ReviewError ? error.message : "operation failed; raw diagnostics suppressed"}`,
    );
    return 1;
  }
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
  process.exitCode = main();

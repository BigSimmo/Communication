import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import {
  audit,
  main,
  parseArguments,
  review,
  selectFiles,
} from "./code-reviewer.mjs";

const base = "a".repeat(40),
  head = "b".repeat(40),
  marker = "SYNTHETIC_ONLY_SECRET_MARKER_12345";
const pendingNote = ["TO", "DO"].join("");
function fixture() {
  const f = {
    calls: [],
    logs: [],
    files: { "src/a.ts": "export const a = 1;\n" },
    staged: ["src/a.ts"],
    unstaged: [],
    untracked: [],
    committed: ["src/a.ts"],
    dirty: "",
    checkout: head,
    missingRef: false,
    toolFailure: false,
  };
  f.run = (command, args, options) => {
    f.calls.push({ command, args, options });
    if (command !== "git")
      return { status: f.toolFailure ? 1 : 0, stdout: marker, stderr: marker };
    if (args[0] === "rev-parse")
      return {
        status: f.missingRef ? 128 : 0,
        stdout: `${args.at(-1).startsWith("HEAD") ? f.checkout : args.at(-1).startsWith("BASE") ? base : head}\n`,
        stderr: marker,
      };
    if (args[0] === "status") return { status: 0, stdout: f.dirty };
    if (args[0] === "show")
      return { status: 0, stdout: f.blob ?? f.files[args[1].slice(41)] };
    const names = args.includes("--diff-filter=D")
      ? f.deleted || []
      : args[0] === "ls-files"
        ? f.untracked
        : args.includes("--cached")
          ? f.staged
          : args.includes(base)
            ? f.committed
            : f.unstaged;
    return { status: 0, stdout: names.join("\0") + (names.length ? "\0" : "") };
  };
  f.io = {
    lstatSync(full) {
      if (
        !Object.hasOwn(
          f.files,
          path.relative(process.cwd(), full).replaceAll("\\", "/"),
        )
      )
        throw Object.assign(new Error(marker), { code: "ENOENT" });
      return { isFile: () => true, isSymbolicLink: () => false };
    },
    readFileSync(full) {
      if (f.readError) throw new Error(marker);
      return f.files[path.relative(process.cwd(), full).replaceAll("\\", "/")];
    },
    existsSync: () => true,
  };
  f.log = (value) => f.logs.push(value);
  return f;
}

test("import exposes functions without running the reviewer", () => {
  assert.equal(typeof main, "function");
  assert.equal(typeof selectFiles, "function");
});
test("strict options reject partial, duplicate, unknown and option-like references before subprocesses", () => {
  assert.deepEqual(parseArguments([]), { mode: "local" });
  assert.deepEqual(parseArguments(["--head", "HEAD", "--base", "BASE"]), {
    mode: "committed",
    head: "HEAD",
    base: "BASE",
  });
  for (const args of [
    ["--base", "BASE"],
    ["--head", "HEAD", "--unknown", "x"],
    ["--base", "B", "--base", "C"],
    ["--base", "--help", "--head", "H"],
  ]) {
    const f = fixture();
    assert.equal(main(args, f), 1);
    assert.equal(f.calls.length, 0);
  }
});
test("default selection retains staged, unstaged and untracked paths including spaces exactly once", () => {
  const f = fixture();
  f.unstaged = ["src/a.ts", "src/b.ts"];
  f.untracked = ["new file.md"];
  f.files["src/b.ts"] = "b";
  f.files["new file.md"] = "doc";
  const result = selectFiles(parseArguments([]), f);
  assert.deepEqual(
    result.files.map((x) => x.file),
    ["src/a.ts", "src/b.ts", "new file.md"],
  );
  assert(f.calls.every((c) => c.args.includes("-z")));
});
test("committed selection binds explicit base/head and clean checkout content", () => {
  const f = fixture();
  const result = review(
    parseArguments(["--base", "BASE", "--head", "HEAD"]),
    f,
  );
  assert.equal(result.selected.baseSha, base);
  assert.equal(result.selected.headSha, head);
  assert.equal(result.exitCode, 0);
  assert(
    f.calls.some(
      (c) =>
        c.command === "git" &&
        c.args[0] === "diff" &&
        c.args.includes(base) &&
        c.args.includes(head),
    ),
  );
  assert(f.logs.some((s) => s.includes(`base=${base} head=${head}`)));
  assert.equal(
    f.calls.filter((c) => c.command === "git" && c.args[0] === "status").length,
    2,
  );
  assert.equal(
    f.calls.filter(
      (c) =>
        c.command === "git" &&
        c.args[0] === "rev-parse" &&
        c.args.at(-1) === "HEAD^{commit}",
    ).length,
    3,
  );
});
test("committed review fails if a successful selected check changes working content or HEAD", () => {
  for (const drift of ["working", "head"]) {
    const f = fixture();
    const originalRun = f.run;
    f.run = (command, args, options) => {
      const result = originalRun(command, args, options);
      if (command !== "git") {
        if (drift === "working") {
          f.files["src/a.ts"] = "export const later = 2;\n";
          f.dirty = " M src/a.ts\0";
        } else f.checkout = base;
      }
      return result;
    };
    assert.equal(main(["--base", "BASE", "--head", "TARGET"], f), 1);
    assert(f.calls.some((c) => c.command !== "git"));
    assert(
      !f.logs.some((line) =>
        line.includes("Selected code review checks passed"),
      ),
    );
    assert(f.logs.some((line) => line.includes("Review incomplete")));
  }
});
test("unknown refs, wrong checkout, dirty checkout and mismatched selected blobs fail closed", () => {
  for (const mutation of [
    (f) => (f.missingRef = true),
    (f) => (f.checkout = base),
    (f) => (f.dirty = "?? other.ts\0"),
    (f) => (f.blob = "other content"),
  ]) {
    const f = fixture();
    mutation(f);
    assert.equal(main(["--base", "BASE", "--head", "TARGET"], f), 1);
    assert(!f.logs.join("\n").includes(marker));
    assert(f.calls.every((c) => c.command === "git"));
  }
});
test("one synthetic secret line triggers multiple rules but no diagnostic or result finding echoes content", () => {
  const f = fixture();
  f.files["src/a.ts"] =
    `const apiToken = "${marker}"; console.log(apiToken); ${["debug", "ger;"].join("")} // ${pendingNote}`;
  const result = review({ mode: "local" }, f);
  assert.equal(result.exitCode, 1);
  assert.equal(result.findings.length, 4);
  assert(!f.logs.join("\n").includes(marker));
  assert(!JSON.stringify(result.findings).includes(marker));
  assert(f.logs.some((s) => s.includes('"src/a.ts":1 [Hardcoded Credential')));
  assert(
    f.logs.some((s) =>
      s.includes("Review summary: 2 audit error(s), 2 warning(s)"),
    ),
  );
});
test("a descriptive storage key is not classified as a credential", () => {
  const findings = audit([
    {
      file: "src/storage.ts",
      content: 'const keyName = "tc-recent-searches";',
    },
  ]);
  assert(
    !findings.some(
      (finding) => finding.name === "Hardcoded Credential / Secret Leak",
    ),
  );
});
test("CI review keeps standalone typecheck and test steps from running twice", () => {
  const prior = process.env.CODE_REVIEW_SKIP_CHECKS;
  process.env.CODE_REVIEW_SKIP_CHECKS = "1";
  try {
    const f = fixture();
    f.staged = ["artifacts/tc-reference/src/example.ts"];
    f.files["artifacts/tc-reference/src/example.ts"] =
      "export const example = 1;\n";
    const result = review({ mode: "local" }, f);
    assert.equal(result.exitCode, 0);
    assert(
      !result.checks.some((check) =>
        ["TypeScript", "Vitest"].includes(check.name),
      ),
    );
    assert(f.calls.filter((call) => call.command !== "git").length <= 1);
  } finally {
    if (prior === undefined) delete process.env.CODE_REVIEW_SKIP_CHECKS;
    else process.env.CODE_REVIEW_SKIP_CHECKS = prior;
  }
});
test("unreadable file fails truthfully without printing exception source values", () => {
  const f = fixture();
  f.readError = true;
  assert.equal(main([], f), 1);
  assert(f.logs.some((s) => s.includes("Cannot read selected file")));
  assert(!f.logs.join("\n").includes(marker));
});
test("raw tool failures are captured without source echo and make the review fail", () => {
  const f = fixture();
  f.toolFailure = true;
  assert.equal(review({ mode: "local" }, f).exitCode, 1);
  assert(!f.logs.join("\n").includes(marker));
  assert(
    f.calls
      .filter((c) => c.command !== "git")
      .every((c) => c.options.stdio !== "inherit" && !c.options.shell),
  );
  assert(!f.calls.some((c) => c.command === "npx"));
});
test("no eligible files means a scoped no-change result, not clean workspace or application proof", () => {
  const f = fixture();
  f.staged = [];
  const result = review({ mode: "local" }, f);
  assert.equal(result.exitCode, 0);
  assert.equal(result.checks.length, 0);
  assert(f.logs.some((s) => s.includes("does not certify a clean workspace")));
  assert(!f.logs.some((s) => s.includes("All critical gates verified")));
});
test("configured exclusions and a path removed from working content are reported", () => {
  const f = fixture();
  f.staged = ["package.json", "gone.ts"];
  const result = review({ mode: "local" }, f);
  assert.equal(result.selected.skipped.length, 2);
  assert(f.logs.some((s) => s.includes("deleted in current working tree")));
});
test("committed deletions and rename sources are reported without trying to read absent content", () => {
  const f = fixture();
  f.deleted = ["src/old.ts"];
  const result = review(
    parseArguments(["--base", "BASE", "--head", "TARGET"]),
    f,
  );
  assert.equal(result.exitCode, 0);
  assert(
    result.selected.skipped.some(
      (s) => s.file === "src/old.ts" && s.reason === "deleted in selected head",
    ),
  );
});
test("unexpected thrown tool diagnostics never escape the main boundary", () => {
  const f = fixture();
  f.run = () => {
    throw new Error(marker);
  };
  assert.equal(main([], f), 1);
  assert(!f.logs.join("\n").includes(marker));
});
test("unexpected inspection failures and unsupported symbolic files cannot become clean passes", () => {
  const f = fixture();
  f.io.lstatSync = () => {
    throw Object.assign(new Error(marker), { code: "EACCES" });
  };
  assert.equal(main([], f), 1);
  f.io.lstatSync = () => ({ isFile: () => false, isSymbolicLink: () => true });
  assert.equal(main([], f), 1);
});
test("negative control: old diagnostic form leaks the same synthetic secret on non-secret rules", () => {
  const source = `const apiToken = "${marker}"; // ${pendingNote}`;
  const legacy = `src/a.ts:1: Unresolved ${pendingNote} (Line: "${source.trim()}")`;
  assert(legacy.includes(marker));
  const findings = audit([{ file: "src/a.ts", content: source }]);
  assert.equal(findings.length, 2);
  assert(!JSON.stringify(findings).includes(marker));
});

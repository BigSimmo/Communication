import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  chmodSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import {
  validateAgentRules,
  validateInstructionInvariants,
  validateSkillResources,
} from "./validate-agent-rules.mjs";
import { fetchReviewRequests, parseScope } from "./github-review-requests.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const fixture = JSON.parse(
  readFileSync(new URL("./fixtures/agent-rules.json", import.meta.url), "utf8"),
);
const queue = JSON.parse(
  readFileSync(
    new URL("./fixtures/github-review-requests.json", import.meta.url),
    "utf8",
  ),
);
const emptyPolicy = { schemaVersion: 1, referenceOnly: {} };

function temporary(t, files) {
  const directory = mkdtempSync(
    path.join(os.tmpdir(), "communication-agent-rules-"),
  );
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  for (const [name, text] of Object.entries(files)) {
    const file = path.join(directory, name);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, text);
  }
  return directory;
}

test("current corpus has complete active resources and explicit archived activation", () => {
  const result = validateAgentRules(root);
  assert.deepEqual(result.errors, []);
  assert.equal(
    result.status.filter((item) => item.includes("reference-only")).length,
    1,
  );
});

test("resource validator accepts scoped relative support paths", (t) => {
  const files = { ...fixture.active };
  files[".agents/skills/example/SKILL.md"] +=
    "Browse [the reference directory](./references/).\n";
  assert.deepEqual(
    validateSkillResources(temporary(t, files), emptyPolicy).errors,
    [],
  );
});

test("resource validator rejects missing inline and markdown resources", (t) => {
  const files = {
    ...fixture.active,
    ".agents/skills/example/SKILL.md":
      "Read `references/missing.md` and [the other guide](missing.md).\n",
  };
  const errors = validateSkillResources(
    temporary(t, files),
    emptyPolicy,
  ).errors;
  assert.equal(errors.length, 2);
  assert.ok(errors.every((error) => error.includes("missing")));
});

test("example code and remote links are not local support dependencies", (t) => {
  const files = { ...fixture.active };
  files[".agents/skills/example/SKILL.md"] +=
    "[Upstream](https://example.invalid/checks.md)\n```text\nRead `references/example-only.md`.\n```\n";
  assert.deepEqual(
    validateSkillResources(temporary(t, files), emptyPolicy).errors,
    [],
  );
});

test("resource validator rejects escape paths and symlinks", (t) => {
  const directory = temporary(t, {
    ...fixture.active,
    ".agents/skills/example/SKILL.md":
      "Read `../../../../outside.md` and `references/link.md`.\n",
  });
  symlinkSync(
    path.join(directory, ".agents/skills/example/SKILL.md"),
    path.join(directory, ".agents/skills/example/references/link.md"),
  );
  const errors = validateSkillResources(directory, emptyPolicy).errors;
  assert.ok(errors.some((error) => error.includes("outside.md")));
  assert.ok(errors.some((error) => error.includes("symlink")));
});

test("resource validator rejects an escaping symlink ancestor", (t) => {
  const directory = temporary(t, {
    ...fixture.active,
    ".agents/skills/example/SKILL.md": "Read `examples/checks.md`.\n",
  });
  const outside = temporary(t, { "checks.md": "# Outside the scoped tree\n" });
  symlinkSync(outside, path.join(directory, ".agents/skills/example/examples"));
  assert.ok(
    validateSkillResources(directory, emptyPolicy).errors.some((error) =>
      error.includes("examples/checks.md"),
    ),
  );
});

test("reference-only status requires dependencies, archive, boundary and local fallback", (t) => {
  const directory = temporary(t, fixture.referenceOnly);
  assert.deepEqual(
    validateSkillResources(directory, fixture.policy).errors,
    [],
  );
  assert.ok(
    validateSkillResources(directory, emptyPolicy).errors.some((error) =>
      error.includes("undeclared"),
    ),
  );
  const policy = structuredClone(fixture.policy);
  policy.referenceOnly.archive.unavailableDependencies = [];
  policy.referenceOnly.archive.fallback = "Missing fallback";
  policy.referenceOnly.archive.archive = "missing.md";
  const errors = validateSkillResources(directory, policy).errors;
  assert.ok(errors.some((error) => error.includes("fallback")));
  assert.ok(errors.some((error) => error.includes("archive")));
  assert.ok(errors.some((error) => error.includes("dependencies")));
});

test("newly installed upstream dependency forces packaging review", (t) => {
  const directory = temporary(t, {
    ...fixture.referenceOnly,
    ".agents/skills/absent-suite/SKILL.md": "# Newly available\n",
  });
  assert.ok(
    validateSkillResources(directory, fixture.policy).errors.some((error) =>
      error.includes("newly present"),
    ),
  );
});

test("instruction regression checks reject stale memory, activation and routing", (t) => {
  const paths = [
    "docs/agents/shared-context-and-memory.md",
    "docs/task-receipts.md",
    ".agents/skills/comprehensive-review-full-review/SKILL.md",
    ".agents/skills/git-pr-workflows-git-workflow/SKILL.md",
    ".agents/skills/gh-review-requests/SKILL.md",
    ".agents/skills/vibers-code-review/SKILL.md",
  ];
  const files = Object.fromEntries(
    paths.map((file) => [file, readFileSync(path.join(root, file), "utf8")]),
  );
  files[paths[0]] +=
    "\nsearch_memory without containerTag\nadd_memory without namespace\nget_document without a scope argument\n";
  files[paths[1]] += "\nActivate these branch-only changes.\n";
  files[paths[2]] += '\nUse Task tool with subagent_type="unavailable"\n';
  const errors = validateInstructionInvariants(temporary(t, files));
  assert.ok(errors.some((error) => error.includes("scope")));
  assert.ok(errors.some((error) => error.includes("activation")));
  assert.ok(errors.some((error) => error.includes("routing")));
});

test("queue operands require an explicit repo and one same-owner team or reviewer", () => {
  assert.deepEqual(
    parseScope([
      "--repo",
      "ExampleOrg/example-repo",
      "--team",
      "ExampleOrg/example-team",
    ]),
    {
      repository: "ExampleOrg/example-repo",
      team: "example-team",
      reviewer: undefined,
    },
  );
  for (const args of [
    [],
    ["--repo", "ExampleOrg/example-repo"],
    ["--repo", "-R/other", "--reviewer", "someone"],
    ["--repo", "ExampleOrg/../other", "--reviewer", "someone"],
    ["--repo", "ExampleOrg/example-repo", "--team", "OtherOrg/example-team"],
    ["--repo", "ExampleOrg/example-repo", "--team", "ExampleOrg/Example Team"],
    ["--repo", "ExampleOrg/example-repo", "--reviewer", "$(unsafe)"],
    [
      "--repo",
      "ExampleOrg/example-repo",
      "--team",
      "ExampleOrg/example-team",
      "--reviewer",
      "someone",
    ],
    [
      "--repo",
      "ExampleOrg/example-repo",
      "--repo",
      "OtherOrg/other",
      "--reviewer",
      "someone",
    ],
  ])
    assert.throws(() => parseScope(args));
});

for (const filter of [
  ["--team", "ExampleOrg/example-team"],
  ["--reviewer", "example-reviewer"],
]) {
  test(`queue ${filter[0]} reads only confirmed repository endpoints`, async () => {
    const calls = [];
    const result = await fetchReviewRequests(
      parseScope(["--repo", "ExampleOrg/example-repo", ...filter]),
      (endpoint, paginate) => {
        calls.push([endpoint, paginate]);
        if (endpoint.endsWith("/notifications?per_page=100"))
          return queue.notifications;
        return queue.pulls[endpoint.split("/").at(-1)];
      },
    );
    assert.equal(result.total, 1);
    assert.equal(result.prs[0].number, 1);
    assert.deepEqual(
      calls.map(([endpoint]) => endpoint),
      [
        "repos/ExampleOrg/example-repo/notifications?per_page=100",
        "repos/ExampleOrg/example-repo/pulls/1",
        "repos/ExampleOrg/example-repo/pulls/3",
        "repos/ExampleOrg/example-repo/pulls/4",
        "repos/ExampleOrg/example-repo/pulls/5",
      ],
    );
    assert.equal(calls[0][1], true);
  });
}

test("denied notification access propagates without a broader fallback", async () => {
  const calls = [];
  await assert.rejects(
    fetchReviewRequests(
      parseScope([
        "--repo",
        "ExampleOrg/example-repo",
        "--reviewer",
        "example-reviewer",
      ]),
      (endpoint) => {
        calls.push(endpoint);
        throw new Error("synthetic denied access");
      },
    ),
    /denied/,
  );
  assert.deepEqual(calls, [
    "repos/ExampleOrg/example-repo/notifications?per_page=100",
  ]);
});

test("CLI pins github.com even when inherited GH_HOST names another host", (t) => {
  const directory = temporary(t, {
    "queue.json": JSON.stringify(queue),
    gh: `#!${process.execPath}
const fs = require("node:fs");
const args = process.argv.slice(2);
const hostIndex = args.indexOf("--hostname");
const effectiveHost = hostIndex < 0 ? process.env.GH_HOST : args[hostIndex + 1];
fs.appendFileSync(process.env.COMMUNICATION_GH_ARGV_LOG, JSON.stringify({ args, inheritedHost: process.env.GH_HOST, effectiveHost }) + "\\n");
if (effectiveHost !== "github.com") process.exit(72);
const fixture = JSON.parse(fs.readFileSync(process.env.COMMUNICATION_GH_QUEUE_FIXTURE, "utf8"));
const endpoint = args.at(-1);
const response = endpoint === "repos/ExampleOrg/example-repo/notifications?per_page=100"
  ? fixture.notifications
  : /^repos\\/ExampleOrg\\/example-repo\\/pulls\\/[1-9]\\d*$/.test(endpoint)
    ? fixture.pulls[endpoint.split("/").at(-1)]
    : undefined;
if (response === undefined) process.exit(73);
process.stdout.write(JSON.stringify(response));
`,
  });
  chmodSync(path.join(directory, "gh"), 0o755);
  const log = path.join(directory, "argv.jsonl");
  const result = spawnSync(
    process.execPath,
    [
      path.join(root, "scripts/github-review-requests.mjs"),
      "--repo",
      "ExampleOrg/example-repo",
      "--reviewer",
      "example-reviewer",
    ],
    {
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `${directory}${path.delimiter}${process.env.PATH ?? ""}`,
        GH_HOST: "enterprise.invalid",
        COMMUNICATION_GH_ARGV_LOG: log,
        COMMUNICATION_GH_QUEUE_FIXTURE: path.join(directory, "queue.json"),
      },
    },
  );
  assert.equal(result.status, 0, result.stderr);
  assert.equal(JSON.parse(result.stdout).total, 1);
  const calls = readFileSync(log, "utf8")
    .trim()
    .split("\n")
    .map((line) => JSON.parse(line));
  assert.equal(calls.length, 5);
  for (const call of calls) {
    assert.equal(call.inheritedHost, "enterprise.invalid");
    assert.equal(call.effectiveHost, "github.com");
    const hostIndex = call.args.indexOf("--hostname");
    assert.ok(hostIndex >= 0);
    assert.equal(call.args[hostIndex + 1], "github.com");
  }
});

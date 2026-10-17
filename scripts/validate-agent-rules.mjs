import {
  existsSync,
  lstatSync,
  readFileSync,
  readdirSync,
  realpathSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const read = (file) => readFileSync(file, "utf8");
const genericProjectFiles = new Set([
  "AGENTS.md",
  "CLAUDE.md",
  "GEMINI.md",
  "README.md",
  "CONTRIBUTING.md",
]);
const safeName = /^[a-z\d]+(?:-[a-z\d]+)*$/;

function inside(root, target) {
  const relative = path.relative(root, target);
  return (
    relative === "" ||
    (!relative.startsWith(`..${path.sep}`) &&
      relative !== ".." &&
      !path.isAbsolute(relative))
  );
}

function markdownFiles(directory, errors) {
  const files = [];
  for (const item of readdirSync(directory, { withFileTypes: true }).sort(
    (a, b) => a.name.localeCompare(b.name, "en"),
  )) {
    const full = path.join(directory, item.name);
    if (item.isSymbolicLink())
      errors.push(`${full}: symlink resources are unsupported`);
    else if (item.isDirectory()) files.push(...markdownFiles(full, errors));
    else if (item.name.endsWith(".md")) files.push(full);
  }
  return files;
}

function containerContent(line, containers) {
  let content = line;
  for (const container of containers) {
    const prefix =
      container === ">"
        ? content.match(/^ {0,3}>[\t ]?/)
        : content.match(new RegExp(`^ {${container}}`));
    if (!prefix) return null;
    content = content.slice(prefix[0].length);
  }
  return content;
}

function markdownContainers(line) {
  const containers = [];
  let content = line;
  while (true) {
    const quote = content.match(/^ {0,3}>[\t ]?/);
    const list = content.match(/^ {0,3}(?:[-+*]|\d{1,9}[.)])[\t ]+/);
    const prefix = quote ?? list;
    if (!prefix) return { content, containers };
    containers.push(quote ? ">" : prefix[0].length);
    content = content.slice(prefix[0].length);
  }
}

function proseLines(text) {
  let fence = null;
  let containers = [];
  return text.split(/\r?\n/).map((line, index) => {
    if (!line.trim()) return [index + 1, "", null];
    if (fence) {
      const content = containerContent(line, fence.containers);
      if (content !== null) {
        const marker = content.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
        if (
          marker &&
          marker[1][0] === fence.character &&
          marker[1].length >= fence.length &&
          /^[\t ]*$/.test(marker[2])
        )
          fence = null;
        return [index + 1, "", null];
      }
      // Leaving a quote/list ends its fenced block; following prose stays active.
      fence = null;
    }
    const continuation = containerContent(line, containers);
    const parsed = markdownContainers(continuation ?? line);
    containers =
      continuation === null
        ? parsed.containers
        : [...containers, ...parsed.containers];
    const marker = parsed.content.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (marker && (marker[1][0] !== "`" || !marker[2].includes("`"))) {
      fence = { character: marker[1][0], length: marker[1].length, containers };
      return [index + 1, "", null];
    }
    return [index + 1, parsed.content, JSON.stringify(containers)];
  });
}

export function resourceReferences(text) {
  const references = [];
  const lines = proseLines(text);
  for (const [index, [line, prose, containers]] of lines.entries()) {
    const head = prose.match(/^ {0,3}\[[^\]]+\]:[\t ]*(.*)$/);
    const destination =
      head?.[1] ||
      (head && lines[index + 1]?.[2] === containers
        ? lines[index + 1][1].trimStart()
        : "");
    const definition = destination.match(/^(?:<([^>]+)>|(\S+))/);
    if (definition) {
      const ref = definition[1] ?? definition[2];
      if (!/^(?:[a-z][a-z\d+.-]*:|#)/i.test(ref))
        references.push({ line, ref });
    }
    for (const match of prose.matchAll(
      /(?<!!)\[[^\]]+\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g,
    )) {
      const ref = match[1];
      if (!/^(?:[a-z][a-z\d+.-]*:|#)/i.test(ref))
        references.push({ line, ref });
    }
    for (const match of prose.matchAll(/`([^`\n]+)`/g)) {
      const ref = match[1];
      const supportPath =
        /^(?:\.\.?\/|resources\/|references\/|protocols\/|templates\/|worksheets\/|examples\/|evals\/|scripts\/)[\w./-]+\.(?:md|mjs|js|py|json|ya?ml)$/;
      const localMarkdown = /^[\w-]+\.md$/;
      if (
        supportPath.test(ref) ||
        (localMarkdown.test(ref) && !genericProjectFiles.has(ref))
      )
        references.push({ line, ref });
    }
  }
  return references;
}

export function validateSkillResources(root, policy) {
  const errors = [];
  const status = [];
  const skillsRoot = path.join(root, ".agents/skills");
  if (
    policy.schemaVersion !== 1 ||
    !policy.referenceOnly ||
    Array.isArray(policy.referenceOnly) ||
    typeof policy.referenceOnly !== "object"
  )
    return { errors: ["Invalid agent-rule policy schema"], status };
  const directories = readdirSync(skillsRoot, { withFileTypes: true }).sort(
    (a, b) => a.name.localeCompare(b.name, "en"),
  );
  const names = new Set(
    directories.filter((item) => item.isDirectory()).map((item) => item.name),
  );
  for (const name of Object.keys(policy.referenceOnly))
    if (!names.has(name))
      errors.push(`Policy references absent skill: ${name}`);
  for (const item of directories) {
    if (item.isSymbolicLink()) {
      errors.push(`${item.name}: skill symlinks are unsupported`);
      continue;
    }
    if (!item.isDirectory()) continue;
    const directory = path.join(skillsRoot, item.name);
    const entry = path.join(directory, "SKILL.md");
    if (!existsSync(entry) || lstatSync(entry).isSymbolicLink()) {
      errors.push(`${item.name}: missing regular SKILL.md`);
      continue;
    }
    const text = read(entry);
    const declaration = policy.referenceOnly[item.name];
    const referenceOnly = /^activation: reference-only$/m.test(text);
    let files;
    if (declaration) {
      if (
        !referenceOnly ||
        declaration.status !== "reference-only" ||
        !declaration.fallback ||
        !text.includes(`## ${declaration.fallback}`) ||
        !/Do not execute the archived setup/.test(text)
      )
        errors.push(
          `${item.name}: reference-only entry must declare status, execution boundary and usable local fallback`,
        );
      if (
        !/^[\w-]+\.md$/.test(declaration.archive ?? "") ||
        !existsSync(path.join(directory, declaration.archive)) ||
        !lstatSync(path.join(directory, declaration.archive)).isFile()
      )
        errors.push(
          `${item.name}: reference-only archive is missing or invalid`,
        );
      if (
        !Array.isArray(declaration.unavailableDependencies) ||
        declaration.unavailableDependencies.length === 0
      )
        errors.push(`${item.name}: declare unavailable upstream dependencies`);
      else
        for (const dependency of declaration.unavailableDependencies) {
          if (!safeName.test(dependency) || names.has(dependency))
            errors.push(
              `${item.name}: dependency ${dependency} is invalid or newly present; review packaging status`,
            );
        }
      // Archived upstream prose is preserved but never declared as an executable skill.
      // Validate the wrapper and all its resource paths, including the archive itself.
      files = [entry];
      status.push(
        `${item.name}: reference-only; local fallback available; upstream dependencies unavailable`,
      );
    } else {
      if (referenceOnly)
        errors.push(`${item.name}: undeclared reference-only activation`);
      files = markdownFiles(directory, errors);
      status.push(`${item.name}: active local resources`);
    }
    for (const file of files) {
      for (const { line, ref } of resourceReferences(read(file))) {
        const target = path.resolve(path.dirname(file), ref.split("#")[0]);
        if (
          !inside(root, target) ||
          !existsSync(target) ||
          !(ref.split("#")[0].endsWith("/")
            ? lstatSync(target).isDirectory()
            : lstatSync(target).isFile()) ||
          !inside(realpathSync(root), realpathSync(target))
        )
          errors.push(
            `${path.relative(root, file)}:${line}: missing, escaping or symlink resource ${ref}`,
          );
      }
    }
  }
  return { errors, status };
}

export function validateInstructionInvariants(root) {
  const errors = [];
  const memory = read(
    path.join(root, "docs/agents/shared-context-and-memory.md"),
  );
  if (
    !memory.includes("For this repository use only `communication_engineering`")
  )
    errors.push(
      "Memory guide must require the confirmed Communication owning namespace",
    );
  // Bounded prose contracts: relate namespace to each operation, then reject
  // individual unscoped directives instead of relying on unrelated keywords.
  const sentences = proseLines(memory)
    .map(([, prose]) => prose)
    .join("\n")
    .replace(/`/g, "")
    .split(/(?<=[.!?])\s+|\n+/);
  for (const operation of ["search_memory", "get_document", "add_memory"]) {
    const scoped = sentences.some(
      (sentence) =>
        sentence.includes(operation) &&
        /\bnamespace\b/.test(sentence) &&
        /\b(?:every|each|must|required|confirmed)\b/.test(sentence) &&
        /\b(?:pass|use)\b/.test(sentence),
    );
    if (!scoped)
      errors.push(
        `${operation}: memory guide must require the confirmed namespace for every call`,
      );
    for (const sentence of sentences) {
      const operations = [
        ...sentence.matchAll(/\b(?:search_memory|get_document|add_memory)\b/g),
      ];
      for (const [index, match] of operations.entries()) {
        if (match[0] !== operation) continue;
        const prefix = sentence.slice(0, match.index).trim();
        if (
          /(?:never|do not|don't)\s+(?:call|invoke|use|run)\s*$/i.test(prefix)
        )
          continue;
        const instruction = sentence.slice(
          match.index + operation.length,
          operations[index + 1]?.index,
        );
        const unscoped =
          /\bwithout\s+(?:(?:a|an|the|explicit)\s+)*(?:namespace|containerTag|scope(?:\s+argument)?)\b/i.test(
            instruction,
          ) ||
          /\b(?:omit|skip)\s+(?:(?:a|the|explicit)\s+)*(?:namespace|containerTag|scope)\b/i.test(
            instruction,
          ) ||
          (operation === "get_document" &&
            (/\b(?:only|just)\s+(?:the\s+)?(?:documentId|document ID)\b/i.test(
              instruction,
            ) ||
              /\bonly\s+(?:the\s+)?(?:documentId|document ID)\s+for\s*$/i.test(
                prefix,
              )));
        const namespaceAlternative =
          /\b(?:with|using|use|pass)\s+namespace\b/i.test(instruction);
        if (unscoped && !namespaceAlternative)
          errors.push(`${operation}: memory guide prescribes an unscoped call`);
      }
    }
  }
  if (
    /document ID, without|project's `containerTag`(?!.*namespace)/.test(memory)
  )
    errors.push("Memory guide prescribes an unscoped or stale contract");
  const receipt = read(path.join(root, "docs/task-receipts.md"));
  if (/these branch-only changes|this prepared task worktree/.test(receipt))
    errors.push(
      "Receipt activation must describe the current checkout/revision",
    );
  for (const name of [
    "comprehensive-review-full-review",
    "git-pr-workflows-git-workflow",
  ]) {
    const text = read(path.join(root, ".agents/skills", name, "SKILL.md"));
    if (
      /subagent_type\s*=|Use Task tool/.test(text) ||
      !text.includes("Otherwise perform the same roles directly in sequence")
    )
      errors.push(`${name}: unsupported routing or missing direct fallback`);
  }
  const queue = read(
    path.join(root, ".agents/skills/gh-review-requests/SKILL.md"),
  );
  if (
    /getsentry|fetch_review_requests\.py|gh api notifications/.test(queue) ||
    !queue.includes("Read-only permission is inherited")
  )
    errors.push(
      "Review-request recipe must preserve repository scope and inherited authority",
    );
  const vibers = read(
    path.join(root, ".agents/skills/vibers-code-review/SKILL.md"),
  );
  if (
    !vibers.includes("explicit opt-in only") ||
    !vibers.includes("Synthetic, non-secret") ||
    /curl -X POST|Test credentials|Add \*\*`marsiandeployer`/.test(vibers)
  )
    errors.push(
      "Vibers must remain explicit opt-in with non-secret synthetic instructions",
    );
  return errors;
}

export function validateAgentRules(root) {
  const policy = JSON.parse(
    read(path.join(root, "scripts/agent-rule-policy.json")),
  );
  const resources = validateSkillResources(root, policy);
  return {
    errors: [...resources.errors, ...validateInstructionInvariants(root)],
    status: resources.status,
  };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  try {
    const root = fileURLToPath(new URL("../", import.meta.url));
    const result = validateAgentRules(root);
    for (const error of result.errors) process.stderr.write(`${error}\n`);
    for (const status of result.status.filter((line) =>
      line.includes("reference-only"),
    ))
      process.stdout.write(`${status}\n`);
    process.stdout.write(
      `Agent rules: ${result.status.length} skill entries, ${result.errors.length} errors. Active support paths and declared activation boundaries checked offline.\n`,
    );
    if (result.errors.length) process.exitCode = 1;
  } catch (error) {
    process.stderr.write(`Agent rule validation failed: ${error.message}\n`);
    process.exitCode = 1;
  }
}

import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const ownerPattern = /^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i;
const repoPattern = /^[a-z\d_][a-z\d_.-]{0,99}$/i;
const teamPattern = /^[a-z\d]+(?:-[a-z\d]+)*$/;

export function parseScope(args) {
  const options = {};
  for (let index = 0; index < args.length; index += 2) {
    const key = args[index];
    if (!["--repo", "--team", "--reviewer"].includes(key) || options[key]) {
      throw new Error(
        "Use --repo OWNER/REPO and exactly one of --team OWNER/SLUG or --reviewer LOGIN",
      );
    }
    const value = args[index + 1];
    if (!value || value.startsWith("-"))
      throw new Error(`Missing value for ${key}`);
    options[key] = value;
  }
  const [owner, repository, ...extra] = (options["--repo"] ?? "").split("/");
  if (
    !ownerPattern.test(owner ?? "") ||
    !repoPattern.test(repository ?? "") ||
    extra.length
  ) {
    throw new Error(
      "Explicit --repo OWNER/REPO is required; use the confirmed GitHub remote",
    );
  }
  if (Boolean(options["--team"]) === Boolean(options["--reviewer"])) {
    throw new Error(
      "Choose exactly one of --team OWNER/SLUG or --reviewer LOGIN",
    );
  }
  const [teamOwner, team, ...teamExtra] = (options["--team"] ?? "").split("/");
  if (
    options["--team"] &&
    (teamOwner.toLowerCase() !== owner.toLowerCase() ||
      !teamPattern.test(team ?? "") ||
      team.length > 100 ||
      teamExtra.length)
  ) {
    throw new Error(
      "Team must be a confirmed OWNER/SLUG in the repository owner's organization",
    );
  }
  const reviewer = options["--reviewer"];
  if (reviewer && !ownerPattern.test(reviewer))
    throw new Error("Reviewer must be a GitHub login");
  return { repository: `${owner}/${repository}`, team, reviewer };
}

function ghApi(endpoint, paginate = false) {
  const args = ["api", "--hostname", "github.com", "--method", "GET"];
  if (paginate) args.push("--paginate", "--slurp");
  args.push(endpoint);
  return JSON.parse(
    execFileSync("gh", args, {
      encoding: "utf8",
      maxBuffer: 5 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    }),
  );
}

export async function fetchReviewRequests(scope, api = ghApi) {
  // Validate even when called as a library; every endpoint stays in this repository.
  const confirmed = parseScope([
    "--repo",
    scope.repository,
    ...(scope.team
      ? ["--team", `${scope.repository.split("/")[0]}/${scope.team}`]
      : ["--reviewer", scope.reviewer]),
  ]);
  const prefix = `repos/${confirmed.repository}`;
  const pages = await api(`${prefix}/notifications?per_page=100`, true);
  if (!Array.isArray(pages) || !pages.every(Array.isArray))
    throw new Error("Unexpected notifications response");
  const prs = [];
  const seen = new Set();
  for (const notification of pages.flat()) {
    if (
      !notification.unread ||
      notification.reason !== "review_requested" ||
      notification.subject?.type !== "PullRequest"
    )
      continue;
    // Notification URLs are untrusted data, never destinations for API calls.
    let url;
    try {
      url = new URL(notification.subject.url);
    } catch {
      continue;
    }
    const parts = url.pathname.split("/");
    if (
      url.origin !== "https://api.github.com" ||
      parts.length !== 6 ||
      parts[1] !== "repos" ||
      `${parts[2]}/${parts[3]}`.toLowerCase() !==
        confirmed.repository.toLowerCase() ||
      parts[4] !== "pulls" ||
      !/^[1-9]\d*$/.test(parts[5]) ||
      url.search ||
      url.hash ||
      url.username ||
      url.password
    )
      continue;
    const number = parts[5];
    if (seen.has(number)) continue;
    seen.add(number);
    const pull = await api(`${prefix}/pulls/${number}`);
    if (pull.state !== "open" || pull.merged_at) continue;
    const requested = confirmed.team
      ? pull.requested_teams?.some((team) => team.slug === confirmed.team)
      : pull.requested_reviewers?.some(
          (user) =>
            user.login?.toLowerCase() === confirmed.reviewer.toLowerCase(),
        );
    if (!requested) continue;
    prs.push({
      number: Number(number),
      title: pull.title,
      url: `https://github.com/${confirmed.repository}/pull/${number}`,
      reason: `review requested from: ${confirmed.team ?? confirmed.reviewer}`,
    });
  }
  prs.sort((left, right) => left.number - right.number);
  return { repository: confirmed.repository, total: prs.length, prs };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  try {
    const result = await fetchReviewRequests(parseScope(process.argv.slice(2)));
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch {
    process.stderr.write(
      "Review lookup failed. Check explicit repository/reviewer scope, gh availability and authorized read access. No broader fallback was attempted.\n",
    );
    process.exitCode = 1;
  }
}

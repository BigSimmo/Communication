// Which results are worth showing. Smart search matches generously (word
// beginnings, word forms, synonyms), so a common word can reach most of the
// catalogue with a long tail of faint matches. The screen leads with the
// strong ones and keeps the rest behind "Show more".

import type {
  PhraseResult,
  PlaybookResult,
  RankedResult,
  SearchResults,
} from "@/lib/search-index";

/** How many results to ask the engine for; the most a group ever lists. */
export const FETCH_LIMITS = {
  techniques: 40,
  phrases: 60,
  playbooks: 12,
} as const;

interface Cutoff {
  /** Keep results scoring at least this share of the best result. */
  ratio: number;
  /** Always keep this many when there are that many. */
  floor: number;
  /** Never lead with more than this. */
  cap: number;
}

const CUTOFFS: Record<"techniques" | "phrases" | "playbooks", Cutoff> = {
  techniques: { ratio: 0.15, floor: 3, cap: 12 },
  phrases: { ratio: 0.25, floor: 3, cap: 30 },
  playbooks: { ratio: 0.15, floor: 1, cap: 6 },
};

/**
 * The leading run of `results` (already sorted best first) that scores close
 * enough to the best one.
 */
export function strongMatches<T extends { score: number }>(
  results: readonly T[],
  { ratio, floor, cap }: Cutoff,
): T[] {
  if (results.length === 0) return [];
  const threshold = results[0].score * ratio;
  let count = 0;
  while (count < results.length && results[count].score >= threshold) count++;
  return results.slice(0, Math.min(cap, Math.max(count, floor)));
}

export interface ResultGroups {
  techniques: RankedResult[];
  phrases: PhraseResult[];
  playbooks: PlaybookResult[];
  /** Every fetched result, for "Show more". */
  all: Pick<SearchResults, "techniques" | "phrases" | "playbooks">;
}

export function groupResults(results: SearchResults): ResultGroups {
  return {
    techniques: strongMatches(results.techniques, CUTOFFS.techniques),
    phrases: strongMatches(results.phrases, CUTOFFS.phrases),
    playbooks: strongMatches(results.playbooks, CUTOFFS.playbooks),
    all: results,
  };
}

export type BestMatch =
  | { kind: "technique"; technique: RankedResult; phrase: PhraseResult | null }
  | { kind: "playbook"; playbook: PlaybookResult };

/**
 * The one result to feature. Usually the top technique, with a line from
 * that technique to say if a phrase from it also matched. A playbook leads
 * instead when the search names it ("bad news" -> Breaking bad news) and no
 * technique is named as directly.
 */
export function pickBestMatch(groups: ResultGroups): BestMatch | null {
  const technique = groups.techniques[0];
  const playbook = groups.playbooks[0];
  const techniqueNamed =
    technique?.matchedIn === "title" || technique?.matchedIn === "id";
  if (playbook?.matchedIn === "name" && !techniqueNamed) {
    return { kind: "playbook", playbook };
  }
  if (!technique) return playbook ? { kind: "playbook", playbook } : null;
  return {
    kind: "technique",
    technique,
    phrase: groups.phrases.find((p) => p.cardId === technique.id) ?? null,
  };
}

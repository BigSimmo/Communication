import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpLeft, Search } from "lucide-react";
import type { SearchResults as Results } from "@/lib/search-index";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import type { SearchKind } from "./search-nav";
import { groupResults, pickBestMatch } from "./relevance";
import { alsoMatching } from "./search-starts";
import type { SearchStatus } from "./use-smart-search";
import { Eyebrow, RowList, Surface } from "./search-parts";
import {
  BestPlaybook,
  BestTechnique,
  PhraseRow,
  PlaybookRow,
  TechniqueRow,
  type Highlight,
} from "./result-rows";
import { BrowseCategories, StarterChips } from "./search-start";

type Group = Exclude<SearchKind, "all">;

const GROUP_LABELS: Record<Group, string> = {
  techniques: "Techniques",
  phrases: "Phrases",
  playbooks: "Playbooks",
};

// How many rows each group shows under All before "See all".
const PREVIEW: Record<Group, number> = {
  techniques: 3,
  phrases: 3,
  playbooks: 2,
};

interface SearchResultsProps {
  status: SearchStatus;
  results: Results | null;
  suggestions: readonly string[];
  kind: SearchKind;
  onKind: (kind: SearchKind) => void;
  /** Replace the query, from a suggestion or a starter. */
  onPick: (query: string) => void;
  /** A result is about to open. */
  onOpen: () => void;
  onCopy: (text: string) => void;
  /** Text of the phrase just copied, for the tick. */
  copied: string | null;
  onRetry: () => void;
}

function Message({ children }: { children: ReactNode }) {
  return (
    <p
      role="status"
      className="py-10 text-center text-[15px]"
      style={{ color: "var(--fg-70)" }}
    >
      {children}
    </p>
  );
}

function list(words: readonly string[]): ReactNode[] {
  return words.flatMap((word, i) => [
    i === 0 ? "" : i === words.length - 1 ? " and " : ", ",
    <b key={word} style={{ color: "var(--fg-80)" }}>
      {word}
    </b>,
  ]);
}

function plural(count: number, noun: string): string {
  return `${count} ${noun}${count === 1 ? "" : "s"}`;
}

export function SearchResults({
  status,
  results,
  suggestions,
  kind,
  onKind,
  onPick,
  onOpen,
  onCopy,
  copied,
  onRetry,
}: SearchResultsProps) {
  // "Show more" reveals the fainter matches of one group; a new search
  // starts folded again.
  const [expanded, setExpanded] = useState<Group | null>(null);
  const [expandedFor, setExpandedFor] = useState(results?.query);
  if (results?.query !== expandedFor) {
    setExpandedFor(results?.query);
    setExpanded(null);
  }

  if (status === "failed") {
    return (
      <div className="flex flex-col items-center gap-3 py-10">
        <p
          role="status"
          className="text-[15px]"
          style={{ color: "var(--fg-70)" }}
        >
          Search is unavailable right now.
        </p>
        <Button size="sm" onClick={onRetry}>
          Try again
        </Button>
      </div>
    );
  }

  if (!results) return <Message>Getting search ready…</Message>;

  const groups = groupResults(results);
  const counts: Record<Group, number> = {
    techniques: groups.techniques.length,
    phrases: groups.phrases.length,
    playbooks: groups.playbooks.length,
  };
  const total = counts.techniques + counts.phrases + counts.playbooks;
  const highlight: Highlight = {
    query: results.query,
    correctedQuery: results.correctedQuery,
  };

  if (total === 0) {
    return (
      <div className="flex flex-col gap-4" data-testid="search-no-results">
        <div className="flex flex-col gap-1" role="status">
          <h1
            className="text-[22px] leading-[1.2] font-bold tracking-[-0.01em]"
            style={{ color: "var(--fg-90)" }}
          >
            Nothing for “{results.query}”
          </h1>
          <p
            className="text-[15px] leading-[1.45]"
            style={{ color: "var(--fg-70)" }}
          >
            Try fewer words or a different one, or start from here.
          </p>
        </div>
        <StarterChips onPick={onPick} />
        <BrowseCategories />
      </div>
    );
  }

  const present = (Object.keys(counts) as Group[]).filter((g) => counts[g] > 0);
  // A filter with nothing in it (the query changed underneath) shows All.
  const shown: SearchKind = kind !== "all" && counts[kind] > 0 ? kind : "all";
  const best = shown === "all" ? pickBestMatch(groups) : null;
  const also = results.correctedQuery ? [] : alsoMatching(results.query);

  const rows = (group: Group, limit?: number): ReactNode[] => {
    const full = expanded === group && shown === group;
    const source = full ? groups.all[group] : groups[group];
    if (group === "techniques") {
      const featured = best?.kind === "technique" ? best.technique.id : null;
      return (source as typeof groups.techniques)
        .filter((t) => t.id !== featured)
        .slice(0, limit)
        .map((t) => (
          <TechniqueRow
            key={t.id}
            id={t.id}
            title={t.title}
            category={t.category}
            loaded={t.loaded}
            matchedIn={t.matchedIn}
            highlight={highlight}
            onOpen={onOpen}
          />
        ));
    }
    if (group === "phrases") {
      const featured = best?.kind === "technique" ? best.phrase?.id : null;
      return (source as typeof groups.phrases)
        .filter((p) => p.id !== featured)
        .slice(0, limit)
        .map((p) => (
          <PhraseRow
            key={p.id}
            phrase={p}
            highlight={highlight}
            copied={copied === p.text}
            onCopy={onCopy}
          />
        ));
    }
    const featured = best?.kind === "playbook" ? best.playbook.id : null;
    return (source as typeof groups.playbooks)
      .filter((p) => p.id !== featured)
      .slice(0, limit)
      .map((p) => (
        <PlaybookRow
          key={p.id}
          playbook={p}
          highlight={highlight}
          onOpen={onOpen}
        />
      ));
  };

  return (
    <div className="flex flex-col gap-3" data-testid="search-results">
      <h1 className="sr-only">Search results</h1>
      <p className="sr-only" role="status" data-testid="search-status">
        {plural(total, "result")} for {results.correctedQuery ?? results.query}
      </p>

      {present.length > 1 && (
        <div
          role="group"
          aria-label="Result type"
          className="-mx-5 px-5 flex gap-2 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {(["all", ...present] as SearchKind[]).map((option) => (
            <Chip
              key={option}
              selected={shown === option}
              count={option === "all" ? total : counts[option]}
              onClick={() => onKind(option)}
              data-testid={`search-kind-${option}`}
              className="tap-target-y"
            >
              {option === "all" ? "All" : GROUP_LABELS[option]}
            </Chip>
          ))}
        </div>
      )}

      {results.correctedQuery ? (
        <p
          className="text-[13px] leading-[1.35]"
          style={{ color: "var(--fg-60)" }}
          data-testid="search-corrected"
        >
          Showing results for{" "}
          <b style={{ color: "var(--brand-text)" }}>{results.correctedQuery}</b>
        </p>
      ) : (
        also.length > 0 && (
          <p
            className="text-[13px] leading-[1.35]"
            style={{ color: "var(--fg-60)" }}
            data-testid="search-also"
          >
            Also matching {list(also)}
          </p>
        )
      )}

      {shown === "all" && suggestions.length > 0 && (
        <Surface testId="search-suggestions">
          <RowList label="Suggested searches">
            {suggestions.map((suggestion) => (
              <li key={suggestion}>
                <button
                  type="button"
                  onClick={() => onPick(suggestion)}
                  data-search-result
                  data-testid="search-suggestion"
                  className="w-full min-h-[46px] flex items-center gap-3 px-4 py-2 text-left transition-colors hover:bg-[var(--fg-04)] active:bg-[var(--fg-06)]"
                >
                  <Search
                    className="w-[18px] h-[18px] flex-none"
                    style={{ color: "var(--fg-50)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="flex-1 min-w-0 truncate text-[15px]"
                    style={{ color: "var(--fg-90)" }}
                  >
                    {suggestion}
                  </span>
                  <ArrowUpLeft
                    className="w-[18px] h-[18px] flex-none"
                    style={{ color: "var(--fg-50)" }}
                    aria-hidden="true"
                  />
                </button>
              </li>
            ))}
          </RowList>
        </Surface>
      )}

      {best?.kind === "technique" && (
        <BestTechnique
          technique={best.technique}
          phrase={best.phrase}
          highlight={highlight}
          copied={copied !== null && copied === best.phrase?.text}
          onOpen={onOpen}
          onCopy={onCopy}
        />
      )}
      {best?.kind === "playbook" && (
        <BestPlaybook
          playbook={best.playbook}
          highlight={highlight}
          onOpen={onOpen}
        />
      )}

      {shown === "all"
        ? present.map((group) => {
            const preview = rows(group, PREVIEW[group]);
            if (preview.length === 0) return null;
            return (
              <section
                key={group}
                className="flex flex-col gap-1"
                aria-labelledby={`search-group-${group}`}
              >
                <div className="flex items-center justify-between min-h-8">
                  <Eyebrow as="h2" id={`search-group-${group}`}>
                    {GROUP_LABELS[group]}
                  </Eyebrow>
                  {rows(group).length > preview.length && (
                    <button
                      type="button"
                      onClick={() => onKind(group)}
                      data-testid={`search-see-all-${group}`}
                      className="tap-target-y -my-2 min-h-6 pl-3 text-[13px] font-semibold"
                      style={{ color: "var(--brand-text)" }}
                    >
                      See all {counts[group]}
                      <span className="sr-only">
                        {" "}
                        {GROUP_LABELS[group].toLowerCase()}
                      </span>
                    </button>
                  )}
                </div>
                <Surface>
                  <RowList label={GROUP_LABELS[group]}>{preview}</RowList>
                </Surface>
              </section>
            );
          })
        : (() => {
            const fetched = groups.all[shown].length;
            const more = fetched - counts[shown];
            const beyond = results.totals[shown] - fetched;
            return (
              <section
                className="flex flex-col gap-3"
                aria-label={GROUP_LABELS[shown]}
              >
                <Surface>
                  <RowList label={GROUP_LABELS[shown]}>{rows(shown)}</RowList>
                </Surface>
                {expanded !== shown && more > 0 && (
                  <Button
                    size="sm"
                    onClick={() => setExpanded(shown)}
                    data-testid="search-show-more"
                  >
                    Show {more} more loosely related
                  </Button>
                )}
                {expanded === shown && beyond > 0 && (
                  <p
                    className="text-center text-[13px]"
                    style={{ color: "var(--fg-60)" }}
                  >
                    Showing the closest {fetched} of {results.totals[shown]}.
                    Add a word to narrow it down.
                  </p>
                )}
              </section>
            );
          })()}
    </div>
  );
}

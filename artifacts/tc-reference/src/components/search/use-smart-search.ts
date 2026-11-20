import { useCallback, useEffect, useState } from "react";
import {
  searchAll,
  suggestSearches,
  type SearchResults,
} from "@/lib/search-index";
import { FETCH_LIMITS } from "./relevance";

export type SearchStatus = "idle" | "loading" | "ready" | "failed";

interface Settled {
  /** The trimmed query these results answer. */
  query: string;
  attempt: number;
  results: SearchResults | null;
  suggestions: string[];
}

const NOTHING: Settled = {
  query: "",
  attempt: 0,
  results: null,
  suggestions: [],
};

/**
 * Runs the search on every change to `query`, with no delay: a search takes
 * a few milliseconds once the index is built. Results for the previous query
 * stay on screen until the new ones arrive, so the list never blinks empty
 * between keystrokes.
 */
export function useSmartSearch(query: string) {
  const trimmed = query.trim();
  const [settled, setSettled] = useState<Settled>(NOTHING);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!trimmed) return;
    let current = true;
    Promise.all([
      searchAll(trimmed, { limits: FETCH_LIMITS }),
      // Completions only while the first word is being typed: completing
      // the last word of a longer search guesses badly ("upset with me" ->
      // "upset with meeting"). Untrimmed, so a trailing space ends them.
      /\s/.test(trimmed) ? [] : suggestSearches(query, 3),
    ]).then(
      ([results, suggestions]) => {
        if (current)
          setSettled({ query: trimmed, attempt, results, suggestions });
      },
      () => {
        if (current)
          setSettled({
            query: trimmed,
            attempt,
            results: null,
            suggestions: [],
          });
      },
    );
    return () => {
      current = false;
    };
  }, [query, trimmed, attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  const answered = settled.query === trimmed && settled.attempt === attempt;
  let status: SearchStatus = "idle";
  if (trimmed) {
    if (!answered) status = "loading";
    else status = settled.results ? "ready" : "failed";
  }

  return {
    status,
    /** Results to draw: the current ones, or the last ones while loading. */
    results: trimmed ? settled.results : null,
    suggestions: answered ? settled.suggestions : [],
    retry,
  };
}

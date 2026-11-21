import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useSearch } from "wouter";
import { SearchScreen } from "@/components/search/search-screen";
import {
  openedFromApp,
  parseSearchUrl,
  savedSearchScroll,
  searchEntryState,
  searchHref,
  type SearchUrlState,
} from "@/components/search/search-nav";

// How long typing has to pause before the address catches up. Safari allows
// only 100 history updates in 30 seconds, so the address is not rewritten on
// every keystroke; it is always written before a result opens.
const URL_WRITE_DELAY_MS = 350;

/**
 * The /search route. The search lives in the address (?q=, ?kind=,
 * ?category=) so Back from a result returns to the same results, and a
 * search can be bookmarked or shared. Everything within search rewrites the
 * one history entry, so Back and Cancel always leave search in one step.
 */
export default function SearchPage() {
  const [, navigate] = useLocation();
  const urlSearch = useSearch();
  const url = useMemo(() => parseSearchUrl(urlSearch), [urlSearch]);

  // What is typed is local, so the field never waits on the address. A
  // change to the address that did not come from typing (Back, Forward, a
  // link into search) is taken up here.
  const [query, setQuery] = useState(url.q);
  const [seenUrlQuery, setSeenUrlQuery] = useState(url.q);
  if (url.q !== seenUrlQuery) {
    setSeenUrlQuery(url.q);
    if (url.q !== query.trim()) setQuery(url.q);
  }

  // As the screen was found: back from a result (restore the scroll, leave
  // the keyboard away) or a fresh search (cursor straight in the field).
  const [arrival] = useState(() => ({
    scroll: savedSearchScroll(),
    focus: !url.q && !url.category,
  }));

  const write = useCallback(
    (change: Partial<SearchUrlState>, scrollTop = 0) => {
      const next = { q: query, kind: url.kind, category: url.category };
      Object.assign(next, change);
      if (!next.q.trim()) next.kind = "all";
      try {
        navigate(searchHref(next), {
          replace: true,
          state: searchEntryState(scrollTop),
        });
      } catch {
        // History updates are rate limited in Safari; the screen itself
        // does not depend on the address being current.
      }
    },
    [navigate, query, url.kind, url.category],
  );

  // Set when a result opens. The screen can stay mounted for a moment while
  // the next route loads, and a pending write would then replace the opened
  // result's history entry with the search, so a quick tap went nowhere.
  const leaving = useRef(false);

  useEffect(() => {
    if (query.trim() === url.q) return;
    const timer = setTimeout(() => {
      if (!leaving.current) write({});
    }, URL_WRITE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [query, url.q, write]);

  const cancel = useCallback(() => {
    if (openedFromApp()) window.history.back();
    else navigate("/", { replace: true });
  }, [navigate]);

  return (
    <SearchScreen
      query={query}
      onQueryChange={setQuery}
      kind={url.kind}
      onKindChange={(kind) => write({ kind })}
      category={url.category}
      onCancel={cancel}
      onLeave={(scrollTop) => {
        leaving.current = true;
        write({}, scrollTop);
      }}
      initialScroll={arrival.scroll}
      focusOnArrival={arrival.focus}
    />
  );
}

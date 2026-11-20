// Where the search screen lives and how its state is written into the URL:
// /search?q=upset&kind=phrases, or /search?category=voice for a category
// browse. Any link in the app can open search with `searchHref`.

import { LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";

export const SEARCH_PATH = "/search";

/** The search field's id, so other controls can move focus to it. */
export const SEARCH_INPUT_ID = "search-screen-input";

export const SEARCH_KINDS = [
  "all",
  "techniques",
  "phrases",
  "playbooks",
] as const;
export type SearchKind = (typeof SEARCH_KINDS)[number];

export interface SearchUrlState {
  q: string;
  kind: SearchKind;
  /** A LIBRARY_CATEGORIES key while browsing one category, otherwise null. */
  category: string | null;
}

/** URL slug for a category: its one-word name, e.g. "connection". */
export function categorySlug(category: string): string {
  return categoryStyleFor(category).short.toLowerCase();
}

const CATEGORY_BY_SLUG = new Map(
  Object.keys(LIBRARY_CATEGORIES).map((category) => [
    categorySlug(category),
    category,
  ]),
);

function isSearchKind(value: string | null): value is SearchKind {
  return SEARCH_KINDS.includes(value as SearchKind);
}

/** Read the screen's state from a query string (with or without the "?"). */
export function parseSearchUrl(search: string): SearchUrlState {
  const params = new URLSearchParams(search);
  const kind = params.get("kind");
  const slug = params.get("category")?.toLowerCase() ?? "";
  return {
    q: (params.get("q") ?? "").trim(),
    kind: isSearchKind(kind) ? kind : "all",
    category: CATEGORY_BY_SLUG.get(slug) ?? null,
  };
}

/** Path and query string for a search state. Defaults are left out. */
export function searchHref(state: Partial<SearchUrlState> = {}): string {
  const params = new URLSearchParams();
  const q = state.q?.trim();
  if (q) params.set("q", q);
  if (state.kind && state.kind !== "all") params.set("kind", state.kind);
  if (state.category) params.set("category", categorySlug(state.category));
  const query = params.toString();
  return query ? `${SEARCH_PATH}?${query}` : SEARCH_PATH;
}

// History state for the search entry. Search opened from inside the app is
// marked, so Cancel can step back to where the reader was; opened cold (a
// bookmark, a shared link) there is nowhere to step back to and Cancel goes
// to the Library instead.
const FROM_APP_KEY = "tcSearchFromApp";
const SCROLL_KEY = "tcSearchScroll";

/** Pass as the `state` of a link or navigate() that opens search. */
export const SEARCH_ENTRY_STATE: Readonly<Record<string, unknown>> = {
  [FROM_APP_KEY]: true,
};

function historyState(): Record<string, unknown> {
  try {
    const state: unknown = window.history.state;
    return state && typeof state === "object"
      ? (state as Record<string, unknown>)
      : {};
  } catch {
    return {};
  }
}

export function openedFromApp(): boolean {
  return historyState()[FROM_APP_KEY] === true;
}

/** How far the results were scrolled when the reader left for a result. */
export function savedSearchScroll(): number {
  const y = historyState()[SCROLL_KEY];
  return typeof y === "number" && y > 0 ? y : 0;
}

/** The current entry's state with the scroll position refreshed. */
export function searchEntryState(scrollTop: number): Record<string, unknown> {
  return { ...historyState(), [SCROLL_KEY]: Math.round(scrollTop) };
}

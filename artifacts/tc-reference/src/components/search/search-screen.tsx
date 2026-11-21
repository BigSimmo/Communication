import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { preloadSearchIndex } from "@/lib/search-index";
import { useRecentSearches } from "@/lib/use-recent-searches";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";
import type { SearchKind } from "./search-nav";
import { SearchField } from "./search-field";
import { SearchResults } from "./search-results";
import { CategoryBrowse, SearchStart } from "./search-start";
import { useKeyboardViewport } from "./use-keyboard-viewport";
import { useSmartSearch } from "./use-smart-search";

interface SearchScreenProps {
  query: string;
  onQueryChange: (query: string) => void;
  kind: SearchKind;
  onKindChange: (kind: SearchKind) => void;
  /** Category being browsed (shown while the field is empty), or null. */
  category: string | null;
  onCancel: () => void;
  /** A result is about to open; `scrollTop` is how far the list was scrolled. */
  onLeave: (scrollTop: number) => void;
  /** Scroll position to return to once the content is back on screen. */
  initialScroll?: number;
  /** Put the cursor in the field on arrival. */
  focusOnArrival?: boolean;
}

/**
 * The whole search screen: the field, and under it either the start state,
 * one category's techniques, or results as you type. It fills the screen in
 * place of the header and tab bar.
 */
export function SearchScreen({
  query,
  onQueryChange,
  kind,
  onKindChange,
  category,
  onCancel,
  onLeave,
  initialScroll = 0,
  focusOnArrival = false,
}: SearchScreenProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { recents, addRecent, clearRecents } = useRecentSearches();
  const { copied, copy } = useCopyFeedback();
  const { status, results, suggestions, retry } = useSmartSearch(query);
  const trimmed = query.trim();

  useKeyboardViewport(screenRef);

  // Build the index while the reader is still choosing what to type.
  useEffect(() => {
    preloadSearchIndex().catch(() => {
      // The first search reports the failure and offers a retry.
    });
  }, []);

  useLayoutEffect(() => {
    if (focusOnArrival) inputRef.current?.focus({ preventScroll: true });
  }, [focusOnArrival]);

  // A new search or view starts at the top; coming back from a result
  // returns to where the reader was.
  const restoreRef = useRef(initialScroll);
  const firstViewRef = useRef(true);
  useLayoutEffect(() => {
    if (firstViewRef.current) {
      firstViewRef.current = false;
      return;
    }
    restoreRef.current = 0;
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [trimmed, kind, category]);
  useLayoutEffect(() => {
    if (restoreRef.current <= 0) return;
    if (trimmed && status !== "ready") return;
    if (scrollRef.current) scrollRef.current.scrollTop = restoreRef.current;
    restoreRef.current = 0;
  }, [trimmed, status]);

  const remember = useCallback(() => {
    if (trimmed) addRecent(trimmed);
  }, [trimmed, addRecent]);

  const handleOpen = () => {
    remember();
    onLeave(scrollRef.current?.scrollTop ?? 0);
  };

  const handleCopy = (text: string) => {
    remember();
    void copy(text);
  };

  const handleSubmit = () => {
    remember();
    // Put the keyboard away so the results have the whole screen.
    inputRef.current?.blur();
  };

  // Keyboard: Escape clears the field, then leaves, wherever the focus is.
  // Up and Down walk the results from the field and back.
  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || e.defaultPrevented) return;
      e.preventDefault();
      const input = inputRef.current;
      if (input?.value) {
        onQueryChange("");
        input.focus();
      } else {
        onCancel();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      const input = inputRef.current;
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      const items = Array.from(
        screen.querySelectorAll<HTMLElement>("[data-search-result]"),
      );
      const active = document.activeElement as HTMLElement | null;
      const index = active ? items.indexOf(active) : -1;
      if (active !== input && index === -1) return;
      const next = e.key === "ArrowDown" ? index + 1 : index - 1;
      if (next >= items.length || (next < 0 && active === input)) return;
      e.preventDefault();
      (next < 0 ? input : items[next])?.focus();
    };
    window.addEventListener("keydown", onEscape);
    screen.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onEscape);
      screen.removeEventListener("keydown", onKeyDown);
    };
  }, [onQueryChange, onCancel]);

  return (
    <div
      ref={screenRef}
      data-search-screen
      data-testid="search-screen"
      className="safe-x-content fixed inset-x-0 top-0 h-dvh md:left-[var(--sidebar-w)] flex flex-col-reverse md:flex-col bg-background"
      style={{ zIndex: "var(--z-overlay)" as unknown as number }}
    >
      {/* First in the page so the field is the first stop; drawn at the
          bottom on phones (column-reverse), at the top on wider screens. */}
      <div
        className="flex-none px-5 pt-3 pb-[calc(12px+var(--bottom-inset,env(safe-area-inset-bottom,0px)))] md:pb-3 border-t md:border-t-0 md:border-b backdrop-blur-xl"
        style={{
          background: "var(--surface-header)",
          borderColor: "var(--fg-08)",
        }}
      >
        <SearchField
          value={query}
          onChange={onQueryChange}
          onSubmit={handleSubmit}
          onCancel={onCancel}
          inputRef={inputRef}
        />
      </div>

      <div
        ref={scrollRef}
        data-testid="search-scroll"
        className="flex-1 min-h-0 overflow-y-auto overscroll-contain"
      >
        <div className="mx-auto w-full max-w-[640px] px-5 pb-6 pt-[max(12px,env(safe-area-inset-top,0px))] md:pt-5">
          {trimmed ? (
            <SearchResults
              status={status}
              results={results}
              suggestions={suggestions}
              kind={kind}
              onKind={onKindChange}
              onPick={onQueryChange}
              onOpen={handleOpen}
              onCopy={handleCopy}
              copied={copied}
              onRetry={retry}
            />
          ) : category ? (
            <CategoryBrowse category={category} onOpen={handleOpen} />
          ) : (
            <SearchStart
              recents={recents}
              onClearRecents={clearRecents}
              onPick={onQueryChange}
            />
          )}
        </div>
      </div>

      <p className="sr-only" role="status">
        {copied ? "Copied" : ""}
      </p>
    </div>
  );
}

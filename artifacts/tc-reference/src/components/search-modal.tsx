import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "wouter";
import { Search, X, Clock, ArrowRight, Sparkles } from "lucide-react";
import {
  searchCards,
  highlightMatch,
  type RankedResult,
} from "@/lib/search-index";
import { useRecentSearches } from "@/lib/use-recent-searches";
import { useTheme } from "@/lib/theme";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";

// Plain-language hint for where a non-title match was found. Title, ID and
// category matches are self-evident from the row and get no hint.
const MATCH_HINTS: Record<string, string> = {
  "best-for": "Matches Best for",
  formula: "Matches the core formula",
  phrases: "Matches a phrase",
  scenarios: "Matches a scenario",
  explanation: "Matches Why it works",
};

interface SearchModalProps {
  query: string;
  setQuery: (q: string) => void;
  onClose: () => void;
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const parts = highlightMatch(text, query);
  return (
    <>
      {parts.map((p, i) =>
        p.highlight ? (
          <mark
            key={i}
            style={{
              background: "color-mix(in srgb, var(--brand) 28%, transparent)",
              color: "var(--brand-text)",
              borderRadius: 2,
              padding: "0 1px",
            }}
          >
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </>
  );
}

const SMART_QUERIES = [
  "pressure",
  "disagreement",
  "clarity",
  "boundaries",
  "warmth",
  "follow up",
];

const CATEGORY_QUERIES = Object.keys(LIBRARY_CATEGORIES);

export function SearchModal({ query, setQuery, onClose }: SearchModalProps) {
  const [, setLocation] = useLocation();
  const { recents, addRecent, clearRecents } = useRecentSearches();
  const { theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [visible, setVisible] = useState(false);
  const [results, setResults] = useState<RankedResult[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchFailed, setSearchFailed] = useState(false);

  const showRecents = query.trim().length === 0 && recents.length > 0;
  const showSmartStart = query.trim().length === 0;

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setResults([]);
      setSearchLoading(false);
      setSearchFailed(false);
      return;
    }

    let active = true;
    setSearchLoading(true);
    setSearchFailed(false);
    searchCards(trimmedQuery).then(
      (nextResults) => {
        if (!active) return;
        setResults(nextResults);
        setSearchLoading(false);
      },
      () => {
        if (!active) return;
        setResults([]);
        setSearchLoading(false);
        setSearchFailed(true);
      },
    );
    return () => {
      active = false;
    };
  }, [query]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Keep Tab cycling inside the popout while it's open (initial focus lands
  // on the input). Focus restore is handled manually below — restoring into
  // an element that opens search on focus would immediately reopen the modal.
  useFocusTrap(true, panelRef, { initialFocusRef: inputRef, restoreFocus: false });
  useBodyScrollLock(true);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    return () => {
      if (!opener || !opener.isConnected) return;
      if (opener.hasAttribute("data-search-open-on-focus")) {
        // Openers that reopen search on focus (the library inline input) get a
        // one-shot suppression marker so focus can still return to them
        // without immediately re-triggering the modal.
        opener.setAttribute("data-suppress-search-open", "true");
        opener.focus?.();
        setTimeout(() => opener.removeAttribute("data-suppress-search-open"), 0);
      } else {
        opener.focus?.();
      }
    };
  }, []);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 180);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('[data-search-toggle="true"]')) return;
      if (panelRef.current?.contains(target)) return;
      handleClose();
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [handleClose]);

  const navigate = useCallback(
    (id: string, loaded: boolean) => {
      if (!loaded) return;
      if (query.trim()) addRecent(query.trim());
      handleClose();
      setTimeout(() => setLocation(`/card/${id}`), 10);
    },
    [query, addRecent, handleClose, setLocation]
  );

  const applyRecent = useCallback(
    (term: string) => {
      setQuery(term);
      setTimeout(() => inputRef.current?.focus(), 30);
    },
    [setQuery]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      const activeList = results.length > 0 ? results : [];
      if (activeList.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, activeList.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && activeList[selectedIndex]) {
          const item = activeList[selectedIndex];
          navigate(item.id, item.loaded);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [results, selectedIndex, navigate, handleClose]);

  useEffect(() => {
    if (selectedIndex >= 0 && listRef.current) {
      const el = listRef.current.querySelector(
        `[data-result-index="${selectedIndex}"]`
      ) as HTMLElement | null;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const panelStyle: React.CSSProperties = {
    background: "var(--surface-dd)",
    border: "1px solid var(--fg-10)",
    borderRadius: 16,
    boxShadow: theme === "light"
      ? "0 18px 46px rgba(15,23,36,0.18)"
      : "0 18px 52px rgba(0,0,0,0.48)",
    width: "100%",
    maxWidth: 520,
    // dvh tracks the on-screen keyboard on iOS/Android so results stay visible
    maxHeight: "min(76dvh, 560px)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transition: prefersReducedMotion ? "none" : "opacity 0.18s ease, transform 0.18s ease",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.985)",
  };

  const backdropStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: "var(--z-search)" as unknown as number,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding:
      "calc(var(--app-header-height, 48px) + 8px) max(12px, env(safe-area-inset-right, 0px)) 12px max(12px, env(safe-area-inset-left, 0px))",
    background: theme === "light" ? "rgba(248,249,251,0.30)" : "rgba(3,7,18,0.24)",
    backdropFilter: prefersReducedMotion ? "none" : "blur(2px)",
    WebkitBackdropFilter: prefersReducedMotion ? "none" : "blur(2px)",
    transition: prefersReducedMotion ? "none" : "opacity 0.18s ease",
    opacity: visible ? 1 : 0,
    pointerEvents: "auto",
  };

  const modal = (
    <div
      style={backdropStyle}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      data-testid="search-modal"
    >
      <div id="search-popout-panel" ref={panelRef} style={{ ...panelStyle, pointerEvents: "auto" }}>
        {/* Input row */}
        <div
          className="flex items-center gap-3 px-4"
          style={{
            borderBottom: "1px solid var(--fg-08)",
            paddingTop: 14,
            paddingBottom: 14,
            flexShrink: 0,
          }}
        >
          <Search className="w-5 h-5 flex-shrink-0" style={{ color: "color-mix(in srgb, var(--brand-text) 60%, transparent)" }} aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Techniques, phrases, situations…"
            role="combobox"
            aria-label="Search techniques"
            aria-autocomplete="list"
            aria-expanded={results.length > 0}
            aria-controls={results.length > 0 ? "search-modal-results" : undefined}
            aria-activedescendant={
              selectedIndex >= 0 && selectedIndex < results.length
                ? `search-modal-option-${selectedIndex}`
                : undefined
            }
            data-testid="search-modal-input"
            className="flex-1 min-w-0 text-[15px] bg-transparent outline-none"
            style={{ color: "var(--fg-90)" }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="tap-target flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
              style={{ background: "var(--fg-07)" }}
            >
              <X className="w-3.5 h-3.5" style={{ color: "var(--fg-50)" }} aria-hidden="true" />
            </button>
          )}
          <button
            onClick={handleClose}
            aria-label="Close search"
            data-testid="button-search-modal-close"
            className="tap-target flex-shrink-0 h-9 min-w-9 px-2 flex items-center justify-center gap-1 rounded-lg transition-all active:scale-95"
            style={{ background: "var(--fg-06)", color: "var(--fg-55)", border: "1px solid var(--fg-09)" }}
          >
            <X className="w-4 h-4 [@media(pointer:fine)]:hidden" aria-hidden="true" />
            <span className="hidden [@media(pointer:fine)]:inline text-[11px] font-semibold">Esc</span>
          </button>
        </div>

        {/* Scrollable body — the listbox role lives on the results-only
            wrapper below; this container also holds chips, recents and
            footers, which must not be listbox children */}
        <div
          ref={listRef}
          className="overflow-y-auto overscroll-contain"
          style={{
            flex: 1,
            WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
          }}
        >
          {showSmartStart && (
            <div
              className="px-3 py-3"
              style={{ borderBottom: showRecents ? "1px solid var(--fg-05)" : "none" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--brand-text)" }} aria-hidden="true" />
                <p
                  className="text-[11px] font-semibold tracking-widest uppercase"
                  style={{ color: "var(--fg-55)" }}
                >
                  Smart starts
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {SMART_QUERIES.map((term) => (
                  <button
                    key={term}
                    onClick={() => applyRecent(term)}
                    className="tap-target-y rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all active:scale-95"
                    style={{
                      background: "var(--fg-05)",
                      border: "1px solid var(--fg-08)",
                      color: "var(--fg-60)",
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {CATEGORY_QUERIES.map((term) => (
                  <button
                    key={term}
                    onClick={() => applyRecent(term)}
                    className="tap-target-y rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all active:scale-95"
                    style={{
                      background: "color-mix(in srgb, var(--brand) 8%, transparent)",
                      border: "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
                      color: "var(--brand-text)",
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results list */}
          {searchLoading && (
            <div role="status" aria-live="polite" className="py-10 px-6 text-center">
              <p className="text-[13px]" style={{ color: "var(--fg-55)" }}>
                Loading search index…
              </p>
            </div>
          )}

          {searchFailed && (
            <div role="status" className="py-10 px-6 text-center">
              <p className="text-[13px]" style={{ color: "var(--fg-55)" }}>
                Search is unavailable right now.
              </p>
            </div>
          )}

          {!searchLoading && !searchFailed && results.length > 0 && (
            <div>
              <p
                className="text-[11px] font-semibold tracking-widest uppercase px-4 pt-3 pb-1.5"
                style={{ color: "var(--fg-55)" }}
              >
                Results
              </p>
              <div id="search-modal-results" role="listbox" aria-label="Search results">
              {results.map((result, i) => {
                const isSelected = i === selectedIndex;
                return (
                  <button
                    key={result.id}
                    id={`search-modal-option-${i}`}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={!result.loaded}
                    data-result-index={i}
                    data-testid={`search-modal-result-${result.id}`}
                    onClick={() => navigate(result.id, result.loaded)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-100"
                    style={{
                      background: isSelected ? "var(--fg-06)" : "transparent",
                      opacity: result.loaded ? 1 : 0.45,
                      cursor: result.loaded ? "pointer" : "default",
                    }}
                    onPointerEnter={(e) => {
                      // Mouse only — a tap would otherwise leave the row stuck highlighted
                      if (e.pointerType === "mouse") setSelectedIndex(i);
                    }}
                    onPointerLeave={(e) => {
                      if (e.pointerType === "mouse") setSelectedIndex(-1);
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[10px] font-bold"
                      style={{
                        background: result.loaded ? "var(--brand)" : "var(--fg-08)",
                        color: result.loaded ? "var(--brand-contrast)" : "var(--fg-30)",
                      }}
                    >
                      {result.id.slice(2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[13px] font-semibold leading-tight"
                        style={{ color: result.loaded ? "var(--fg-90)" : "var(--fg-40)" }}
                      >
                        <HighlightedText text={result.title} query={query} />
                      </p>
                      <p className="text-[11px] mt-0.5" style={{ color: "var(--fg-55)" }}>
                        {result.id} · {result.category}
                        {MATCH_HINTS[result.matchedIn] && (
                          <span style={{ color: "var(--fg-55)" }}> · {MATCH_HINTS[result.matchedIn]}</span>
                        )}
                      </p>
                    </div>
                    {result.loaded ? (
                      <ArrowRight
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: isSelected ? "var(--brand-text)" : "var(--fg-40)" }}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--fg-05)", color: "var(--fg-55)" }}
                      >
                        Soon
                      </span>
                    )}
                  </button>
                );
              })}
              </div>
              <div
                className="px-4 py-2.5 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--fg-05)" }}
              >
                <p className="text-[11px]" style={{ color: "var(--fg-55)" }}>
                  {results.length} result{results.length !== 1 ? "s" : ""}
                </p>
                <p className="keyboard-hint text-[11px]" style={{ color: "var(--fg-55)" }}>
                  ↑↓ navigate · Enter open
                </p>
              </div>
            </div>
          )}

          {/* No results */}
          {!searchLoading && !searchFailed && query.trim().length >= 1 && results.length === 0 && (
            <div role="status" className="flex flex-col items-center py-10 px-6 text-center">
              <p className="text-[15px] font-semibold mb-1.5" style={{ color: "var(--fg-50)" }}>
                No results for "{query}"
              </p>
              <p className="text-[12px] leading-relaxed" style={{ color: "var(--fg-55)" }}>
                Try a technique number (TC031), a keyword like "pressure" or "clarity", or a situation like "disagreement".
              </p>
            </div>
          )}

          {/* Recent searches */}
          {showRecents && (
            <div>
              <div className="flex items-center justify-between px-4 pt-3 pb-1.5">
                <p
                  className="text-[11px] font-semibold tracking-widest uppercase"
                  style={{ color: "var(--fg-55)" }}
                >
                  Recent
                </p>
                <button
                  onClick={clearRecents}
                  className="tap-target-y text-[12px] font-medium transition-colors"
                  style={{ color: "var(--fg-55)", minHeight: 36, paddingInline: 8 }}
                >
                  Clear
                </button>
              </div>
              {recents.map((term) => (
                <button
                  key={term}
                  onClick={() => applyRecent(term)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-100 hover:bg-[var(--fg-04)] focus-visible:bg-[var(--fg-04)]"
                  style={{ color: "var(--fg-60)" }}
                >
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--fg-45)" }} aria-hidden="true" />
                  <span className="text-[13px]">{term}</span>
                </button>
              ))}
            </div>
          )}

          {/* Empty state — no query, no recents */}
          {!showRecents && query.trim().length === 0 && (
            <div className="flex flex-col items-center py-10 px-6 text-center">
              <p className="text-[13px]" style={{ color: "var(--fg-55)" }}>
                Search across all techniques, phrases and scenarios.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

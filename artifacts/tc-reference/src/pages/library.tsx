import { useState, useCallback } from "react";
import { useLocation } from "wouter";
import { ChevronRight, SearchX, Heart, Search, X, Shuffle, ArrowUpDown } from "lucide-react";
import { LIBRARY_CATEGORIES, CardImpact } from "@/lib/data";
import { CARD_DATA } from "@/lib/cards";
import { useNav } from "@/lib/nav-context";
import { useFavourites } from "@/lib/favourites-context";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const IMPACT_BADGE: Record<CardImpact, { label: string; bg: string; color: string }> = {
  high:   { label: "High",   bg: "rgba(245,158,11,0.14)", color: "#f59e0b" },
  medium: { label: "Medium", bg: "rgba(96,165,250,0.12)",  color: "#60a5fa" },
  low:    { label: "Low",    bg: "var(--fg-06)",           color: "var(--fg-38)" },
};

// Derived at module level — no re-computation on every render
const CARD_DIFFICULTY: Record<string, string> = Object.fromEntries(
  Object.entries(CARD_DATA).map(([id, card]) => [id, card.overview.difficulty])
);

const DIFFICULTY_ORDER: Record<string, number> = {
  "Easy": 0,
  "Easy-Medium": 1,
  "Medium": 2,
  "Hard": 3,
};

const IMPACT_ORDER: Record<CardImpact, number> = { high: 0, medium: 1, low: 2 };

const DIFFICULTY_LEVELS = ["Easy", "Easy-Medium", "Medium", "Hard"] as const;

// Used by Surprise me — all loaded cards regardless of active filters
const ALL_LOADED_CARDS = Object.values(LIBRARY_CATEGORIES).flat().filter((c) => c.loaded);

export default function Library() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [impactFilter, setImpactFilter] = useState<CardImpact | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"default" | "impact" | "difficulty">("default");
  const [, setLocation] = useLocation();
  const { searchOpen, searchQuery, setSearchQuery, openSearch, headerDetailsOpen } = useNav();
  const { isCardFav, toggleCard } = useFavourites();
  const scrollDirection = useScrollDirection(60);

  const hasFiltersActive =
    !!categoryFilter || !!impactFilter || !!difficultyFilter || sortBy !== "default" || !!searchQuery;
  const filterHidden = scrollDirection === "down" && !hasFiltersActive;
  const showHeaderDetails = headerDetailsOpen && !filterHidden;
  const activeFilterCount =
    (categoryFilter ? 1 : 0) +
    (impactFilter ? 1 : 0) +
    (difficultyFilter ? 1 : 0) +
    (sortBy !== "default" ? 1 : 0) +
    (searchQuery ? 1 : 0);

  const clearAllFilters = useCallback(() => {
    setCategoryFilter(null);
    setImpactFilter(null);
    setDifficultyFilter(null);
    setSortBy("default");
    setSearchQuery("");
  }, [setSearchQuery]);

  // Navigate to a random loaded card (ignores current filters for a true "surprise")
  const surpriseMe = useCallback(() => {
    if (!ALL_LOADED_CARDS.length) return;
    const pick = ALL_LOADED_CARDS[Math.floor(Math.random() * ALL_LOADED_CARDS.length)];
    setLocation(`/card/${pick.id}`);
  }, [setLocation]);

  // Cycle sort: default → impact (high first) → difficulty (easy first) → default
  const cycleSortBy = useCallback(() => {
    setSortBy((prev) =>
      prev === "default" ? "impact" : prev === "impact" ? "difficulty" : "default"
    );
  }, []);

  // Apply all active filters and sort within each category group
  const filteredLibrary = Object.entries(LIBRARY_CATEGORIES).reduce<
    Record<string, (typeof LIBRARY_CATEGORIES)[string]>
  >((acc, [cat, cards]) => {
    if (categoryFilter && cat !== categoryFilter) return acc;

    let filtered = [...cards];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) => c.id.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)
      );
    }

    if (impactFilter) {
      filtered = filtered.filter((c) => c.impact === impactFilter);
    }

    if (difficultyFilter) {
      filtered = filtered.filter((c) => CARD_DIFFICULTY[c.id] === difficultyFilter);
    }

    if (sortBy === "impact") {
      filtered.sort((a, b) => IMPACT_ORDER[a.impact] - IMPACT_ORDER[b.impact]);
    } else if (sortBy === "difficulty") {
      filtered.sort(
        (a, b) =>
          (DIFFICULTY_ORDER[CARD_DIFFICULTY[a.id]] ?? 0) -
          (DIFFICULTY_ORDER[CARD_DIFFICULTY[b.id]] ?? 0)
      );
    }

    if (filtered.length) acc[cat] = filtered;
    return acc;
  }, {});

  const hasResults = Object.keys(filteredLibrary).length > 0;

  // Shared style for compact filter/sort chips
  const chipStyle = (active: boolean): React.CSSProperties => ({
    minHeight: 28,
    background: active ? "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)" : "var(--fg-05)",
    color: active ? "#0f1724" : "var(--fg-60)",
    border: active ? "1px solid rgba(245,158,11,0.6)" : "1px solid var(--fg-08)",
    boxShadow: active ? "0 2px 8px rgba(245,158,11,0.28)" : "none",
  });

  const groupStyle: React.CSSProperties = {
    background: "var(--fg-03)",
    border: "1px solid var(--fg-07)",
    borderRadius: 14,
    padding: 4,
  };

  return (
    <div className="flex flex-col bg-background w-full max-w-full min-w-0 overflow-x-clip sm:max-w-2xl sm:mx-auto">

      <div
        id="library-header-details"
        data-testid="library-header-details"
        aria-hidden={!showHeaderDetails}
        className="sticky z-10 flex-shrink-0 px-3 md:px-6"
        style={{
          top: "var(--app-header-height, 56px)",
          background: "var(--surface-header)",
          backdropFilter: "blur(16px) saturate(1.2)",
          WebkitBackdropFilter: "blur(16px) saturate(1.2)",
          borderBottom: showHeaderDetails ? "1px solid var(--fg-07)" : "1px solid transparent",
          maxHeight: showHeaderDetails ? 260 : 0,
          opacity: showHeaderDetails ? 1 : 0,
          overflow: "hidden",
          paddingTop: showHeaderDetails ? 8 : 0,
          paddingBottom: showHeaderDetails ? 8 : 0,
          transform: "translateZ(0)",
          transition:
            "max-height 220ms ease, opacity 160ms ease, padding 220ms ease, border-color 180ms ease, top 180ms ease",
          pointerEvents: showHeaderDetails ? "auto" : "none",
        }}
      >
        <div className="space-y-2 min-w-0">
          <div className="flex items-center gap-2">
            <div className="relative flex-1 min-w-0">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
                style={{ color: "var(--fg-30)" }}
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search techniques..."
                aria-label="Search techniques"
                aria-expanded={searchOpen}
                aria-controls="search-popout-panel"
                data-search-toggle="true"
                data-testid="library-search-input"
                className="w-full h-9 text-[12px] rounded-xl outline-none transition-all placeholder:text-[color:var(--fg-30)]"
                style={{
                  background: "var(--fg-05)",
                  border: "1px solid var(--fg-08)",
                  color: "var(--fg-90)",
                  padding: "0 34px 0 34px",
                }}
                onFocus={(e) => {
                  openSearch();
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.45)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(245,158,11,0.12)";
                }}
                onClick={() => {
                  if (!searchOpen) openSearch();
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--fg-08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  data-testid="library-search-clear"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full transition-all active:scale-90"
                  style={{ background: "var(--fg-08)" }}
                >
                  <X className="w-3.5 h-3.5" style={{ color: "var(--fg-50)" }} />
                </button>
              )}
            </div>

            {hasFiltersActive && (
              <button
                onClick={clearAllFilters}
                aria-label="Clear all active filters"
                data-testid="reset-filters"
                className="h-9 flex-shrink-0 inline-flex items-center gap-1.5 rounded-xl px-2.5 text-[10px] font-bold transition-all active:scale-95 whitespace-nowrap"
                style={{
                  background: "rgba(245,158,11,0.10)",
                  border: "1px solid rgba(245,158,11,0.35)",
                  color: "#f59e0b",
                  minWidth: 0,
                }}
              >
                <X className="w-3 h-3" aria-hidden="true" />
                Reset
                <span
                  className="ml-0.5 rounded-full px-1.5 py-0.5 text-[9px] leading-none"
                  style={{ background: "rgba(245,158,11,0.16)" }}
                >
                  {activeFilterCount}
                </span>
              </button>
            )}
          </div>

          <div
            className="grid min-w-0 grid-cols-2 sm:grid-cols-3 gap-1.5"
            role="toolbar"
            aria-label="Filter by technique family"
          >
            <button
              onClick={() => setCategoryFilter(null)}
              aria-pressed={!categoryFilter}
              data-testid="filter-all"
              className="inline-flex h-8 items-center justify-center rounded-xl px-2 text-[11px] font-semibold transition-all"
              style={chipStyle(!categoryFilter)}
            >
              All
            </button>

            {Object.keys(LIBRARY_CATEGORIES).map((cat) => {
              const active = categoryFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(active ? null : cat)}
                  aria-pressed={active}
                  data-testid={`filter-${cat.toLowerCase().replace(/[\s/]+/g, "-")}`}
                  className="inline-flex h-8 min-w-0 items-center justify-center rounded-xl px-2 text-[10.5px] font-semibold leading-tight transition-all"
                  style={chipStyle(active)}
                >
                  <span className="truncate">{cat}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <div
              className="flex items-center gap-1"
              style={groupStyle}
              role="toolbar"
              aria-label="Filter by impact"
            >
              {(["high", "medium", "low"] as CardImpact[]).map((impact) => {
                const active = impactFilter === impact;
                const label: Record<CardImpact, string> = { high: "High", medium: "Med", low: "Low" };
                return (
                  <button
                    key={impact}
                    onClick={() => setImpactFilter(active ? null : impact)}
                    aria-pressed={active}
                    data-testid={`filter-impact-${impact}`}
                    className="inline-flex h-7 items-center justify-center rounded-lg px-2.5 text-[10px] font-bold transition-all whitespace-nowrap"
                    style={chipStyle(active)}
                  >
                    {label[impact]}
                  </button>
                );
              })}
            </div>

            <div
              className="flex items-center gap-1"
              style={groupStyle}
              role="toolbar"
              aria-label="Filter by difficulty"
            >
              {DIFFICULTY_LEVELS.map((diff) => {
                const active = difficultyFilter === diff;
                const shortLabel = diff === "Easy-Medium" ? "E-Med" : diff;
                return (
                  <button
                    key={diff}
                    onClick={() => setDifficultyFilter(active ? null : diff)}
                    aria-pressed={active}
                    aria-label={`Filter by ${diff} difficulty`}
                    data-testid={`filter-difficulty-${diff.toLowerCase().replace(/-/g, "")}`}
                    className="inline-flex h-7 items-center justify-center rounded-lg px-2.5 text-[10px] font-bold transition-all whitespace-nowrap"
                    style={chipStyle(active)}
                  >
                    {shortLabel}
                  </button>
                );
              })}
            </div>

            <button
              onClick={cycleSortBy}
              aria-label={
                sortBy === "default"
                  ? "Sort by: default order"
                  : sortBy === "impact"
                  ? "Sort by: impact high to low (click to change)"
                  : "Sort by: difficulty easy to hard (click to change)"
              }
              data-testid="sort-control"
              className="inline-flex h-9 items-center gap-1.5 rounded-xl px-3 text-[10px] font-bold transition-all whitespace-nowrap"
              style={chipStyle(sortBy !== "default")}
            >
              <ArrowUpDown className="w-3 h-3" aria-hidden="true" />
              {sortBy === "default" ? "Sort" : sortBy === "impact" ? "Impact" : "Difficulty"}
            </button>

            <button
              onClick={surpriseMe}
              aria-label="Open a random card"
              data-testid="surprise-me"
              className="inline-flex h-9 items-center gap-1.5 rounded-xl px-3 text-[10px] font-bold transition-all whitespace-nowrap active:scale-95"
              style={{
                background: "var(--fg-05)",
                color: "var(--fg-60)",
                border: "1px solid var(--fg-08)",
              }}
            >
              <Shuffle className="w-3 h-3" aria-hidden="true" />
              Surprise
            </button>
          </div>
        </div>
      </div>

      {/* ── Card list ── */}
      <div className="px-4 md:px-6 pb-6 pt-4 space-y-6">
        {hasResults ? (
          Object.entries(filteredLibrary).map(([cat, cards]) => (
            <div
              key={cat}
              data-testid={`category-section-${cat.toLowerCase().replace(/[\s/]+/g, "-")}`}
            >
              <p
                className="text-[11px] font-semibold tracking-widest uppercase mb-3 px-1"
                style={{ color: "var(--fg-32)" }}
              >
                {cat}
              </p>
              <div className="space-y-2">
                {cards.map((card) => {
                  const badge = IMPACT_BADGE[card.impact];
                  return (
                    <div
                      key={card.id}
                      onClick={() => (card.loaded ? setLocation(`/card/${card.id}`) : undefined)}
                      role={card.loaded ? "button" : undefined}
                      tabIndex={card.loaded ? 0 : undefined}
                      onKeyDown={
                        card.loaded
                          ? (e) => e.key === "Enter" && setLocation(`/card/${card.id}`)
                          : undefined
                      }
                      aria-label={`${card.title} (${card.id})${!card.loaded ? " — coming soon" : ""}`}
                      data-testid={`card-link-${card.id}`}
                       className="w-full max-w-full min-w-0 flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-all duration-150 text-left overflow-hidden"
                      style={{
                        background: card.loaded ? "rgba(245,158,11,0.08)" : "var(--fg-02)",
                        border: card.loaded
                          ? "1px solid rgba(245,158,11,0.18)"
                          : "1px solid var(--fg-04)",
                        opacity: card.loaded ? 1 : 0.55,
                        cursor: card.loaded ? "pointer" : "default",
                        minHeight: 64,
                      }}
                      onMouseEnter={(e) => {
                        if (card.loaded)
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(245,158,11,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = card.loaded
                          ? "rgba(245,158,11,0.08)"
                          : "var(--fg-02)";
                      }}
                    >
                      {/* Number badge */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[11px] font-bold"
                        style={{
                          background: card.loaded ? "#f59e0b" : "var(--fg-07)",
                          color: card.loaded ? "#0f1724" : "var(--fg-28)",
                        }}
                      >
                        {card.id.slice(2)}
                      </div>

                      {/* Title + meta */}
                      <div className="flex-1 text-left min-w-0">
                        <p
                          className="text-[14px] font-semibold leading-tight"
                          style={{ color: card.loaded ? "var(--fg-90)" : "var(--fg-40)" }}
                        >
                          {card.title}
                        </p>
                        <p
                          className="text-[11px] mt-0.5"
                          style={{
                            color: card.loaded ? "rgba(245,158,11,0.7)" : "var(--fg-20)",
                          }}
                        >
                          {card.id} · {cat}
                        </p>
                      </div>

                      {/* Impact badge + fav + chevron — or "Soon" label */}
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span
                          className="text-[9px] font-bold tracking-wide px-2.5 py-0.5 rounded-full uppercase"
                          style={{ background: badge.bg, color: badge.color }}
                        >
                          {badge.label}
                        </span>
                        {card.loaded ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCard(card.id);
                              }}
                              aria-label={
                                isCardFav(card.id)
                                  ? "Remove from favourites"
                                  : "Save to favourites"
                              }
                              className="w-7 h-7 flex items-center justify-center rounded-full transition-all active:scale-95"
                              style={{
                                background: isCardFav(card.id)
                                  ? "rgba(245,158,11,0.12)"
                                  : "var(--fg-05)",
                              }}
                            >
                              <Heart
                                className="w-3.5 h-3.5"
                                style={{
                                  color: isCardFav(card.id) ? "#f59e0b" : "var(--fg-30)",
                                }}
                                fill={isCardFav(card.id) ? "#f59e0b" : "none"}
                              />
                            </button>
                            <ChevronRight
                              className="w-4 h-4"
                              style={{ color: "var(--fg-22)" }}
                            />
                          </div>
                        ) : (
                          <span
                            className="text-[9px] font-medium tracking-wide uppercase"
                            style={{ color: "var(--fg-20)" }}
                          >
                            Soon
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          /* ── No-results empty state ── */
          <div className="flex flex-col items-center py-16 px-4 text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "var(--fg-04)", border: "1px solid var(--fg-07)" }}
            >
              <SearchX className="w-6 h-6" style={{ color: "var(--fg-25)" }} />
            </div>
            <p className="text-[16px] font-semibold mb-1.5" style={{ color: "var(--fg-60)" }}>
              No techniques found
            </p>
            <p
              className="text-[13px] leading-relaxed mb-6 max-w-[240px]"
              style={{ color: "var(--fg-30)" }}
            >
              Try a different combination of filters, or start fresh.
            </p>
            <button
              onClick={clearAllFilters}
              data-testid="clear-all-filters"
              className="text-[12px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95"
              style={{
                background: "rgba(245,158,11,0.12)",
                border: "1px solid rgba(245,158,11,0.25)",
                color: "#f59e0b",
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
        <div className="h-4" />
      </div>
    </div>
  );
}

import { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  ChevronRight,
  ChevronDown,
  SearchX,
  Heart,
  Search,
  X,
  Check,
  Shuffle,
  ArrowUpDown,
} from "lucide-react";
import { LIBRARY_CATEGORIES, CardImpact } from "@/lib/data";
import { useNav } from "@/lib/nav-context";
import { useFavourites } from "@/lib/favourites-context";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { IMPACT_STYLES } from "@/lib/design-tokens";

const IMPACT_BADGE: Record<
  CardImpact,
  { label: string; bg: string; color: string }
> = {
  high: IMPACT_STYLES.high,
  medium: IMPACT_STYLES.medium,
  low: IMPACT_STYLES.low,
};

// Derived at module level from the light data.ts metadata (NOT the heavy card
// content) so the Library route stays off the card-data chunk; a content
// invariant keeps difficulty in sync with cards.ts.
const CARD_DIFFICULTY: Record<string, string> = Object.fromEntries(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((c) => [c.id, c.difficulty]),
);

const DIFFICULTY_ORDER: Record<string, number> = {
  Easy: 0,
  "Easy-Medium": 1,
  Medium: 2,
  Hard: 3,
};

const IMPACT_ORDER: Record<CardImpact, number> = { high: 0, medium: 1, low: 2 };

const DIFFICULTY_LEVELS = ["Easy", "Easy-Medium", "Medium", "Hard"] as const;

// Used by Surprise me — all loaded cards regardless of active filters
const ALL_LOADED_CARDS = Object.values(LIBRARY_CATEGORIES)
  .flat()
  .filter((c) => c.loaded);

// Shared style for compact filter/sort controls
const chipStyle = (active: boolean): React.CSSProperties => ({
  background: active
    ? "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)"
    : "var(--fg-05)",
  color: active ? "#0f1724" : "var(--fg-60)",
  border: active ? "1px solid rgba(245,158,11,0.6)" : "1px solid var(--fg-08)",
  boxShadow: active ? "0 2px 8px rgba(245,158,11,0.28)" : "none",
});

interface DropdownOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  label: string;
  defaultLabel: string;
  options: DropdownOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  testId: string;
  icon?: React.ReactNode;
  align?: "left" | "right";
}

// Compact dropdown: a single chip-sized trigger that opens a listbox popover.
// Closes on outside pointer-down, Escape, or selection; supports arrow-key
// navigation between options.
function FilterDropdown({
  label,
  defaultLabel,
  options,
  value,
  onChange,
  testId,
  icon,
  align = "left",
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    // Close when keyboard focus (e.g. Tab) leaves the dropdown entirely
    const onFocusOut = (e: FocusEvent) => {
      if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
    };
    const rootEl = rootRef.current;
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    rootEl?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      rootEl?.removeEventListener("focusout", onFocusOut);
    };
  }, [open]);

  // Focus the selected option (or the first) when the menu opens
  useEffect(() => {
    if (!open || !listRef.current) return;
    const selected = listRef.current.querySelector<HTMLButtonElement>(
      '[aria-selected="true"]',
    );
    (
      selected ?? listRef.current.querySelector<HTMLButtonElement>("button")
    )?.focus();
  }, [open]);

  const moveFocus = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = Array.from(
      listRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? [],
    );
    const idx = items.indexOf(document.activeElement as HTMLButtonElement);
    const next =
      e.key === "ArrowDown"
        ? items[(idx + 1) % items.length]
        : items[(idx - 1 + items.length) % items.length];
    next?.focus();
  };

  const active = value !== null;
  const currentLabel = active
    ? (options.find((o) => o.value === value)?.label ?? label)
    : label;

  const select = (next: string | null) => {
    onChange(next);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div ref={rootRef} className="relative min-w-0">
      <button
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label} filter${active ? `: ${currentLabel}` : ""}`}
        data-testid={testId}
        className="library-filter-control w-full inline-flex h-8 min-w-0 items-center justify-between gap-1 rounded-xl pl-2.5 pr-2 text-[12px] font-semibold transition-all"
        style={chipStyle(active)}
      >
        <span className="inline-flex min-w-0 items-center gap-1.5">
          {icon}
          <span className="truncate">{currentLabel}</span>
        </span>
        <ChevronDown
          className="w-3 h-3 flex-shrink-0 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-label={label}
          onKeyDown={moveFocus}
          className={`absolute top-full mt-1.5 z-50 w-max min-w-full max-w-[calc(100vw-24px)] max-h-[60vh] overflow-y-auto rounded-xl p-1 ${
            align === "right" ? "right-0" : "left-0"
          }`}
          style={{
            background: "var(--surface-dd)",
            border: "1px solid var(--fg-09)",
            boxShadow: "0 10px 32px rgba(0,0,0,0.35)",
          }}
        >
          {[{ value: null as string | null, label: defaultLabel }]
            .concat(
              options.map((o) => ({
                value: o.value as string | null,
                label: o.label,
              })),
            )
            .map((option) => {
              const selected = value === option.value;
              const slug = (option.value ?? "all")
                .toLowerCase()
                .replace(/[\s/]+/g, "-");
              return (
                <button
                  key={option.value ?? "__all__"}
                  role="option"
                  aria-selected={selected}
                  tabIndex={-1}
                  onClick={() => select(option.value)}
                  data-testid={`${testId}-option-${slug}`}
                  className="tap-target-y w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium transition-colors whitespace-nowrap hover:bg-[var(--fg-05)]"
                  style={{
                    color: selected ? "var(--brand-text)" : "var(--fg-60)",
                    background: selected
                      ? "color-mix(in srgb, var(--brand) 10%, transparent)"
                      : "transparent",
                  }}
                >
                  {option.label}
                  {selected && (
                    <Check
                      className="w-3.5 h-3.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default function Library() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [impactFilter, setImpactFilter] = useState<CardImpact | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"default" | "impact" | "difficulty">(
    "default",
  );
  const [, setLocation] = useLocation();
  const {
    searchOpen,
    searchQuery,
    setSearchQuery,
    openSearch,
    headerDetailsOpen,
  } = useNav();
  const { isCardFav, toggleCard } = useFavourites();
  const scrollDirection = useScrollDirection(60);

  const hasFiltersActive =
    !!categoryFilter ||
    !!impactFilter ||
    !!difficultyFilter ||
    sortBy !== "default" ||
    !!searchQuery;
  const isFilterHidden = scrollDirection === "down" && !hasFiltersActive;
  const showHeaderDetails = headerDetailsOpen && !isFilterHidden;
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
    const pick =
      ALL_LOADED_CARDS[Math.floor(Math.random() * ALL_LOADED_CARDS.length)];
    setLocation(`/card/${pick.id}`);
  }, [setLocation]);

  // Apply all active filters and sort within each category group
  const filteredLibrary = Object.entries(LIBRARY_CATEGORIES).reduce<
    Record<string, (typeof LIBRARY_CATEGORIES)[string]>
  >((acc, [cat, cards]) => {
    if (categoryFilter && cat !== categoryFilter) return acc;

    let filtered = [...cards];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.id.toLowerCase().includes(q) || c.title.toLowerCase().includes(q),
      );
    }

    if (impactFilter) {
      filtered = filtered.filter((c) => c.impact === impactFilter);
    }

    if (difficultyFilter) {
      filtered = filtered.filter(
        (c) => CARD_DIFFICULTY[c.id] === difficultyFilter,
      );
    }

    if (sortBy === "impact") {
      filtered.sort((a, b) => IMPACT_ORDER[a.impact] - IMPACT_ORDER[b.impact]);
    } else if (sortBy === "difficulty") {
      filtered.sort(
        (a, b) =>
          (DIFFICULTY_ORDER[CARD_DIFFICULTY[a.id]] ?? 0) -
          (DIFFICULTY_ORDER[CARD_DIFFICULTY[b.id]] ?? 0),
      );
    }

    if (filtered.length) acc[cat] = filtered;
    return acc;
  }, {});

  const hasResults = Object.keys(filteredLibrary).length > 0;

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
          borderBottom: showHeaderDetails
            ? "1px solid var(--fg-07)"
            : "1px solid transparent",
          maxHeight: showHeaderDetails ? 200 : 0,
          opacity: showHeaderDetails ? 1 : 0,
          // Visible when open so the filter dropdown popovers can extend
          // below the collapsible header without being clipped
          overflow: showHeaderDetails ? "visible" : "hidden",
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
                placeholder="Search techniques…"
                role="combobox"
                aria-label="Search techniques"
                aria-expanded={searchOpen}
                aria-controls="search-popout-panel"
                data-search-toggle="true"
                data-search-open-on-focus="true"
                data-testid="library-search-input"
                className="w-full min-w-0 h-9 text-[12px] rounded-xl outline-none transition-all placeholder:text-[color:var(--fg-30)]"
                style={{
                  background: "var(--fg-05)",
                  border: "1px solid var(--fg-08)",
                  color: "var(--fg-90)",
                  padding: "0 34px 0 34px",
                }}
                onFocus={(e) => {
                  if (
                    e.currentTarget.hasAttribute("data-suppress-search-open")
                  ) {
                    e.currentTarget.removeAttribute(
                      "data-suppress-search-open",
                    );
                    return;
                  }
                  openSearch();
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.45)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(245,158,11,0.12)";
                }}
                onClick={(e) => {
                  e.currentTarget.focus();
                  if (
                    e.currentTarget.hasAttribute("data-suppress-search-open")
                  ) {
                    e.currentTarget.removeAttribute(
                      "data-suppress-search-open",
                    );
                    return;
                  }
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
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-90"
                >
                  <span
                    className="w-6 h-6 flex items-center justify-center rounded-full"
                    style={{ background: "var(--fg-08)" }}
                  >
                    <X
                      className="w-3.5 h-3.5"
                      style={{ color: "var(--fg-50)" }}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              )}
            </div>

            <button
              onClick={surpriseMe}
              aria-label="Open a random card"
              title="Open a random card"
              data-testid="surprise-me"
              className="tap-target h-9 w-9 flex-shrink-0 inline-flex items-center justify-center rounded-xl transition-all active:scale-95"
              style={{
                background: "var(--fg-05)",
                color: "var(--fg-60)",
                border: "1px solid var(--fg-08)",
              }}
            >
              <Shuffle className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            {hasFiltersActive && (
              <button
                onClick={clearAllFilters}
                aria-label="Clear all active filters"
                data-testid="reset-filters"
                className="tap-target-y h-9 flex-shrink-0 inline-flex items-center gap-1.5 rounded-xl px-2.5 text-[11px] font-bold transition-all active:scale-95 whitespace-nowrap"
                style={{
                  background:
                    "color-mix(in srgb, var(--brand) 10%, transparent)",
                  border:
                    "1px solid color-mix(in srgb, var(--brand) 35%, transparent)",
                  color: "var(--brand-text)",
                  minWidth: 0,
                }}
              >
                <X className="w-3 h-3" aria-hidden="true" />
                Reset
                <span
                  className="ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] leading-none"
                  style={{
                    background:
                      "color-mix(in srgb, var(--brand) 16%, transparent)",
                  }}
                >
                  {activeFilterCount}
                </span>
              </button>
            )}
          </div>

          <div
            className="grid min-w-0 grid-cols-2 gap-1.5 sm:grid-cols-4"
            role="toolbar"
            aria-label="Filter and sort techniques"
          >
            <FilterDropdown
              label="Category"
              defaultLabel="All categories"
              options={Object.keys(LIBRARY_CATEGORIES).map((cat) => ({
                value: cat,
                label: cat,
              }))}
              value={categoryFilter}
              onChange={setCategoryFilter}
              testId="filter-category"
            />
            <FilterDropdown
              label="Impact"
              defaultLabel="Any impact"
              options={(["high", "medium", "low"] as CardImpact[]).map(
                (impact) => ({
                  value: impact,
                  label: IMPACT_BADGE[impact].label,
                }),
              )}
              value={impactFilter}
              onChange={(v) => setImpactFilter(v as CardImpact | null)}
              testId="filter-impact"
              align="right"
            />
            <FilterDropdown
              label="Difficulty"
              defaultLabel="Any difficulty"
              options={DIFFICULTY_LEVELS.map((diff) => ({
                value: diff,
                label: diff,
              }))}
              value={difficultyFilter}
              onChange={setDifficultyFilter}
              testId="filter-difficulty"
            />
            <FilterDropdown
              label="Sort"
              defaultLabel="Default order"
              options={[
                { value: "impact", label: "Impact · high first" },
                { value: "difficulty", label: "Difficulty · easy first" },
              ]}
              value={sortBy === "default" ? null : sortBy}
              onChange={(v) =>
                setSortBy((v as "impact" | "difficulty" | null) ?? "default")
              }
              testId="sort-control"
              icon={
                <ArrowUpDown
                  className="w-3 h-3 flex-shrink-0"
                  aria-hidden="true"
                />
              }
              align="right"
            />
          </div>
        </div>
      </div>

      {/* ── Card list ── */}
      {/* Bottom padding clears the floating action button (and the home-indicator
          safe area) so the last card is never hidden behind it. */}
      <div
        className="px-4 md:px-6 pt-4 space-y-6"
        style={{
          paddingBottom: "calc(6.5rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
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
                  const cardContent = (
                    <>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-[11px] font-bold"
                        style={{
                          background: card.loaded
                            ? "var(--brand)"
                            : "var(--fg-07)",
                          color: card.loaded
                            ? "var(--brand-contrast)"
                            : "var(--fg-28)",
                        }}
                      >
                        {card.id.slice(2)}
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <p
                          className="text-[14px] font-semibold leading-tight"
                          style={{
                            color: card.loaded
                              ? "var(--fg-90)"
                              : "var(--fg-40)",
                          }}
                        >
                          {card.title}
                        </p>
                        <p
                          className="text-[12px] mt-0.5"
                          style={{
                            color: card.loaded
                              ? "var(--brand-text)"
                              : "var(--fg-40)",
                          }}
                        >
                          {card.id} · {cat}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span
                          className="text-[12px] font-bold tracking-wide px-2.5 py-0.5 rounded-full uppercase"
                          style={{
                            background: badge.bg,
                            color: badge.color,
                            border: `1px solid color-mix(in srgb, ${badge.color} 25%, transparent)`,
                          }}
                        >
                          {badge.label}
                        </span>
                        {card.loaded ? (
                          <ChevronRight
                            className="w-4 h-4"
                            style={{ color: "var(--fg-40)" }}
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className="text-[12px] font-medium tracking-wide uppercase"
                            style={{ color: "var(--fg-40)" }}
                          >
                            Soon
                          </span>
                        )}
                      </div>
                    </>
                  );
                  return (
                    <div key={card.id} className="relative max-w-full min-w-0">
                      {card.loaded ? (
                        <Link
                          href={`/card/${card.id}`}
                          aria-label={`${card.title} (${card.id})`}
                          data-testid={`card-link-${card.id}`}
                          className="w-full max-w-full min-w-0 flex items-center gap-3.5 px-4 py-3.5 pr-14 rounded-2xl transition-all duration-150 text-left overflow-hidden hover:bg-[var(--fg-05)]"
                          style={{
                            background: "var(--fg-03)",
                            border: "1px solid var(--fg-07)",
                            minHeight: 64,
                            contentVisibility: "auto",
                            containIntrinsicSize: "auto 72px",
                          }}
                        >
                          {cardContent}
                        </Link>
                      ) : (
                        <div
                          aria-label={`${card.title} (${card.id}) — coming soon`}
                          data-testid={`card-link-${card.id}`}
                          className="w-full max-w-full min-w-0 flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-left overflow-hidden"
                          style={{
                            background: "var(--fg-02)",
                            border: "1px solid var(--fg-04)",
                            opacity: 0.55,
                            minHeight: 64,
                            contentVisibility: "auto",
                            containIntrinsicSize: "auto 72px",
                          }}
                        >
                          {cardContent}
                        </div>
                      )}
                      {card.loaded && (
                        <button
                          onClick={() => toggleCard(card.id)}
                          aria-label={
                            isCardFav(card.id)
                              ? "Remove from favourites"
                              : "Save to favourites"
                          }
                          className="library-card-favourite absolute right-3 bottom-3 w-7 h-7 flex items-center justify-center rounded-full transition-all active:scale-95"
                          style={{
                            background: isCardFav(card.id)
                              ? "color-mix(in srgb, var(--brand) 12%, transparent)"
                              : "var(--fg-05)",
                          }}
                        >
                          <Heart
                            className="w-3.5 h-3.5"
                            style={{
                              color: isCardFav(card.id)
                                ? "var(--brand-text)"
                                : "var(--fg-50)",
                            }}
                            fill={
                              isCardFav(card.id) ? "var(--brand-text)" : "none"
                            }
                          />
                        </button>
                      )}
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
              style={{
                background: "var(--fg-04)",
                border: "1px solid var(--fg-07)",
              }}
            >
              <SearchX
                className="w-6 h-6"
                style={{ color: "var(--fg-40)" }}
                aria-hidden="true"
              />
            </div>
            <p
              className="text-[16px] font-semibold mb-1.5"
              style={{ color: "var(--fg-60)" }}
            >
              No techniques found
            </p>
            <p
              className="text-[13px] leading-relaxed mb-6 max-w-[240px]"
              style={{ color: "var(--fg-55)" }}
            >
              Try a different combination of filters, or start fresh.
            </p>
            <button
              onClick={clearAllFilters}
              data-testid="clear-all-filters"
              className="text-[13px] font-semibold px-5 min-h-11 rounded-full transition-all active:scale-95"
              style={{
                background: "color-mix(in srgb, var(--brand) 12%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--brand) 25%, transparent)",
                color: "var(--brand-text)",
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

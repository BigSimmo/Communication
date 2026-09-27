import { useState, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import {
  ChevronDown,
  SearchX,
  Heart,
  Search,
  X,
  Check,
  Shuffle,
  ArrowUpDown,
  BookOpen,
  Compass,
  HeartHandshake,
  LifeBuoy,
  Mic,
  Target,
} from "lucide-react";
import { LIBRARY_CATEGORIES, CardImpact } from "@/lib/data";
import { useNav } from "@/lib/nav-context";
import { useFavourites } from "@/lib/favourites-context";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { IMPACT_STYLES } from "@/lib/design-tokens";

// One glyph per category gives the list a visual rhythm without repeating
// the TC code, which already sits in each row's meta line.
const CATEGORY_ICON: Record<string, typeof BookOpen> = {
  "Voice / Presence": Mic,
  "Influence / Framing": Compass,
  "Clarity / Direction": Target,
  "Connection / Warmth": HeartHandshake,
  "Resilience / Recovery": LifeBuoy,
};

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

// Segment style inside the single line filter bar: inactive segments sit flat
// on the bar, the active one lifts into an amber pill
const segmentStyle = (active: boolean, open: boolean): React.CSSProperties => ({
  background: active
    ? "var(--gradient-active)"
    : open
      ? "var(--fg-08)"
      : "transparent",
  color: active
    ? "var(--brand-contrast)"
    : open
      ? "var(--fg-90)"
      : "var(--fg-60)",
  boxShadow: active
    ? "0 1px 6px color-mix(in srgb, var(--brand) 30%, transparent)"
    : "none",
});

interface DropdownOption {
  value: string;
  label: string;
  // Shorter label shown on the trigger once selected (defaults to label)
  short?: string;
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
  labelClassName?: string;
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
  labelClassName = "",
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
  const selectedOption = active
    ? options.find((o) => o.value === value)
    : undefined;
  const currentLabel = selectedOption?.label ?? label;
  const triggerLabel = selectedOption?.short ?? currentLabel;

  const select = (next: string | null) => {
    onChange(next);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div ref={rootRef} className="relative flex min-w-0 flex-1">
      <button
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label} filter${active ? `: ${currentLabel}` : ""}`}
        title={active ? currentLabel : undefined}
        data-testid={testId}
        className="library-filter-control w-full inline-flex h-full min-w-0 items-center justify-center gap-1 rounded-full px-1.5 text-[11.5px] font-semibold transition-all"
        style={segmentStyle(active, open)}
      >
        {icon}
        <span className={`truncate ${labelClassName}`}>{triggerLabel}</span>
        <ChevronDown
          className="w-2.5 h-2.5 flex-shrink-0 opacity-70 transition-transform"
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
          className={`absolute top-full mt-2 z-50 w-max min-w-full max-w-[calc(100vw-24px)] max-h-[60vh] overflow-y-auto rounded-xl p-1 ${
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

function SegmentDivider() {
  return (
    <span
      aria-hidden="true"
      className="w-px flex-shrink-0 self-center h-3.5"
      style={{ background: "var(--fg-10)" }}
    />
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
  // While reading with filters applied, fold the search row away and keep
  // only the one line filter bar so the active filters stay in view
  const searchRowCollapsed = scrollDirection === "down" && hasFiltersActive;
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
  const resultCount = Object.values(filteredLibrary).reduce(
    (n, cards) => n + cards.length,
    0,
  );

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
          maxHeight: showHeaderDetails ? 96 : 0,
          opacity: showHeaderDetails ? 1 : 0,
          // Visible when open so the filter dropdown popovers can extend
          // below the collapsible header without being clipped
          overflow: showHeaderDetails ? "visible" : "hidden",
          paddingTop: showHeaderDetails ? 6 : 0,
          paddingBottom: showHeaderDetails ? 6 : 0,
          transform: "translateZ(0)",
          transition:
            "max-height 220ms ease, opacity 160ms ease, padding 220ms ease, border-color 180ms ease, top 180ms ease",
          pointerEvents: showHeaderDetails ? "auto" : "none",
        }}
      >
        <div className="min-w-0">
          <div
            className="flex items-center gap-2"
            data-testid="library-search-row"
            aria-hidden={searchRowCollapsed || undefined}
            style={{
              maxHeight: searchRowCollapsed ? 0 : 44,
              marginBottom: searchRowCollapsed ? 0 : 6,
              opacity: searchRowCollapsed ? 0 : 1,
              // Hidden rather than just transparent so the collapsed row
              // drops out of the tab order and can't swallow taps
              visibility: searchRowCollapsed ? "hidden" : "visible",
              overflow: searchRowCollapsed ? "hidden" : "visible",
              transition:
                "max-height 220ms ease, margin-bottom 220ms ease, opacity 160ms ease, visibility 220ms",
            }}
          >
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
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--brand) 45%, transparent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px color-mix(in srgb, var(--brand) 12%, transparent)";
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

          {/* Single line segmented bar: one rounded track, four segments */}
          <div
            className="flex h-8 min-w-0 items-stretch gap-px rounded-full p-0.5"
            role="toolbar"
            aria-label="Filter and sort techniques"
            data-testid="library-filter-bar"
            style={{
              background: "var(--fg-05)",
              border: "1px solid var(--fg-08)",
            }}
          >
            <FilterDropdown
              label="Category"
              defaultLabel="All categories"
              options={Object.keys(LIBRARY_CATEGORIES).map((cat) => ({
                value: cat,
                label: cat,
                // "Influence / Framing" shows as "Influence" on the segment
                short: cat.split(" / ")[0],
              }))}
              value={categoryFilter}
              onChange={setCategoryFilter}
              testId="filter-category"
            />
            <SegmentDivider />
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
            <SegmentDivider />
            <FilterDropdown
              label="Difficulty"
              defaultLabel="Any difficulty"
              options={DIFFICULTY_LEVELS.map((diff) => ({
                value: diff,
                label: diff,
                short: diff === "Easy-Medium" ? "Easy-Med" : undefined,
              }))}
              value={difficultyFilter}
              onChange={setDifficultyFilter}
              testId="filter-difficulty"
            />
            <SegmentDivider />
            <FilterDropdown
              label="Sort"
              defaultLabel="Default order"
              options={[
                {
                  value: "impact",
                  label: "Impact · high first",
                  short: "Impact",
                },
                {
                  value: "difficulty",
                  label: "Difficulty · easy first",
                  short: "Easiest",
                },
              ]}
              value={sortBy === "default" ? null : sortBy}
              onChange={(v) =>
                setSortBy((v as "impact" | "difficulty" | null) ?? "default")
              }
              testId="sort-control"
              labelClassName="max-[359px]:hidden"
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

      {/* ── Card list ── (main already clears the phone tab bar) */}
      <div className="px-4 md:px-6 pt-4 pb-6 space-y-6">
        {hasFiltersActive && hasResults && (
          <p
            className="px-1 -mb-2 text-[12px] font-medium"
            style={{ color: "var(--fg-55)" }}
            role="status"
            aria-live="polite"
            data-testid="library-result-count"
          >
            {resultCount} of {ALL_LOADED_CARDS.length} techniques
          </p>
        )}
        {hasResults ? (
          Object.entries(filteredLibrary).map(([cat, cards]) => (
            <div
              key={cat}
              data-testid={`category-section-${cat.toLowerCase().replace(/[\s/]+/g, "-")}`}
            >
              <h2
                className="flex items-baseline justify-between text-[11px] font-bold tracking-widest uppercase mb-2.5 px-1"
                style={{ color: "var(--fg-50)" }}
              >
                <span>{cat}</span>
                <span
                  className="font-semibold tracking-normal normal-case"
                  style={{ color: "var(--fg-45)" }}
                >
                  {cards.length}
                </span>
              </h2>
              <ul className="space-y-2">
                {cards.map((card) => {
                  const badge = IMPACT_BADGE[card.impact];
                  const CategoryIcon = CATEGORY_ICON[cat] ?? BookOpen;
                  const fav = isCardFav(card.id);
                  return (
                    <li key={card.id} className="relative max-w-full min-w-0">
                      <Link
                        href={`/card/${card.id}`}
                        aria-label={`${card.title} (${card.id}), ${badge.label.toLowerCase()} impact, ${CARD_DIFFICULTY[card.id]}`}
                        data-testid={`card-link-${card.id}`}
                        className="w-full max-w-full min-w-0 flex items-center gap-3 pl-3 pr-14 py-3 rounded-2xl transition-colors duration-150 text-left overflow-hidden bg-[var(--surface-card)] hover:bg-[var(--surface-card-hover)] active:bg-[var(--surface-card-hover)]"
                        style={{
                          border: "1px solid var(--fg-07)",
                          boxShadow: "var(--shadow-card)",
                          minHeight: 64,
                          contentVisibility: "auto",
                          containIntrinsicSize: "auto 66px",
                        }}
                      >
                        <span
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background:
                              "color-mix(in srgb, var(--brand) 12%, transparent)",
                            color: "var(--brand-text)",
                          }}
                          aria-hidden="true"
                        >
                          <CategoryIcon className="w-[18px] h-[18px]" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span
                            className="block text-[15px] font-semibold leading-snug line-clamp-2"
                            style={{ color: "var(--fg-90)" }}
                          >
                            {card.title}
                          </span>
                          <span
                            className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px]"
                            style={{ color: "var(--fg-55)" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--brand-text)" }}
                            >
                              {card.id}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{CARD_DIFFICULTY[card.id]}</span>
                            <span
                              className="ml-0.5 text-[10px] font-bold tracking-wider px-1.5 py-px rounded-md uppercase"
                              style={{
                                background: badge.bg,
                                color: badge.color,
                              }}
                            >
                              {badge.label}
                            </span>
                          </span>
                        </span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleCard(card.id)}
                        aria-label={`Favourite ${card.title}`}
                        aria-pressed={fav}
                        className="library-card-favourite absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-90"
                        style={{
                          background: fav
                            ? "color-mix(in srgb, var(--brand) 14%, transparent)"
                            : "transparent",
                        }}
                      >
                        <Heart
                          className="w-4 h-4"
                          style={{
                            color: fav ? "var(--brand-text)" : "var(--fg-45)",
                          }}
                          fill={fav ? "var(--brand-text)" : "none"}
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
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

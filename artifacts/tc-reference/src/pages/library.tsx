import { useState, useCallback, useLayoutEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  ChevronDown,
  SearchX,
  Search,
  X,
  Shuffle,
  SlidersHorizontal,
  ArrowUpDown,
} from "lucide-react";
import { CORE_CARD_SET, LIBRARY_CATEGORIES, CardImpact } from "@/lib/data";
import { useNav } from "@/lib/nav-context";
import { useFavourites } from "@/lib/favourites-context";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { IMPACT_STYLES, categoryStyleFor } from "@/lib/design-tokens";
import {
  SCROLL_DIRECTION_THRESHOLD,
  SCROLL_FLIP_THRESHOLD,
  type SavedLibraryScroll,
  ensureHistoryEntryId,
  findLibraryCard,
  hasPendingRestore,
  readSavedScroll,
  scrollWindowTo,
  writeSavedScroll,
} from "@/lib/library-scroll";
import { LibraryToday } from "@/components/library-today";
import {
  HelpNowTile,
  StartHereShelf,
} from "@/components/library/start-here-shelf";
import { CategoryChips } from "@/components/library/category-chips";
import {
  LibraryCardRow,
  type LibraryCardMeta,
} from "@/components/library/card-row";
import {
  FilterDropdown,
  type DropdownOption,
} from "@/components/library/filter-dropdown";
import {
  LibraryFilterSheet,
  type SheetGroup,
} from "@/components/library/filter-sheet";

const IMPACT_BADGE: Record<
  CardImpact,
  { label: string; bg: string; color: string }
> = {
  high: IMPACT_STYLES.high,
  medium: IMPACT_STYLES.medium,
  low: IMPACT_STYLES.low,
};

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

// Shared by the segmented bar (400px and up) and the phone filter sheet
const CATEGORY_OPTIONS: DropdownOption[] = Object.keys(LIBRARY_CATEGORIES).map(
  (cat) => ({
    value: cat,
    label: cat,
    // "Influence / Framing" shows as "Influence" on the segment
    short: cat.split(" / ")[0],
  }),
);

const IMPACT_OPTIONS: DropdownOption[] = (
  ["high", "medium", "low"] as CardImpact[]
).map((impact) => ({ value: impact, label: IMPACT_BADGE[impact].label }));

const DIFFICULTY_OPTIONS: DropdownOption[] = DIFFICULTY_LEVELS.map((diff) => ({
  value: diff,
  label: diff,
  short: diff === "Easy-Medium" ? "Easy-Med" : undefined,
}));

const SORT_OPTIONS: DropdownOption[] = [
  { value: "core", label: "Start here first", short: "Start here" },
  { value: "impact", label: "Impact · high first", short: "Impact" },
  { value: "difficulty", label: "Difficulty · easy first", short: "Easiest" },
  { value: "az", label: "A to Z", short: "A to Z" },
];

type SortKey = "default" | "core" | "impact" | "difficulty" | "az";

// These orders rank every technique against every other, so the list drops
// its category groups and shows one run; "core" only lifts the Start here
// cards within each category.
const FLAT_SORT_HEADING: Partial<Record<SortKey, string>> = {
  impact: "Highest impact first",
  difficulty: "Easiest first",
  az: "A to Z",
};

type CardWithCategory = LibraryCardMeta & { category: string };

const compareCards: Partial<
  Record<SortKey, (a: LibraryCardMeta, b: LibraryCardMeta) => number>
> = {
  core: (a, b) =>
    Number(CORE_CARD_SET.has(b.id)) - Number(CORE_CARD_SET.has(a.id)),
  impact: (a, b) => IMPACT_ORDER[a.impact] - IMPACT_ORDER[b.impact],
  difficulty: (a, b) =>
    (DIFFICULTY_ORDER[a.difficulty] ?? 0) -
    (DIFFICULTY_ORDER[b.difficulty] ?? 0),
  az: (a, b) => a.title.localeCompare(b.title),
};

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
  const [sortBy, setSortBy] = useState<SortKey>("default");
  const [sheetOpen, setSheetOpen] = useState(false);
  const filtersButtonRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const searchRowRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();
  const {
    searchOpen,
    searchQuery,
    setSearchQuery,
    openSearch,
    headerDetailsOpen,
  } = useNav();
  const { isCardFav, toggleCard } = useFavourites();
  const scrollDirection = useScrollDirection(SCROLL_DIRECTION_THRESHOLD);

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

  // Choices that live in the phone filter sheet (search has its own clear)
  const sheetFilterCount =
    (categoryFilter ? 1 : 0) +
    (impactFilter ? 1 : 0) +
    (difficultyFilter ? 1 : 0) +
    (sortBy !== "default" ? 1 : 0);
  const sheetSummary =
    [
      categoryFilter?.split(" / ")[0],
      impactFilter && IMPACT_BADGE[impactFilter].label,
      difficultyFilter,
      SORT_OPTIONS.find((o) => o.value === sortBy)?.short,
    ]
      .filter(Boolean)
      .join(", ") || "All techniques";

  const clearSheetFilters = useCallback(() => {
    setCategoryFilter(null);
    setImpactFilter(null);
    setDifficultyFilter(null);
    setSortBy("default");
  }, []);
  const closeSheet = useCallback(() => setSheetOpen(false), []);

  // ── Scroll restoration (see SavedLibraryScroll) ──
  const entryIdRef = useRef("");
  // While restoring, rows render fully (no content-visibility) so the list
  // has its real height; afterwards "auto" remembers those sizes
  const [restoring, setRestoring] = useState(hasPendingRestore);
  const capturedRef = useRef(false);
  const hasFiltersActiveRef = useRef(hasFiltersActive);
  useLayoutEffect(() => {
    hasFiltersActiveRef.current = hasFiltersActive;
  }, [hasFiltersActive]);

  const captureScroll = useCallback((anchor?: HTMLElement | null) => {
    const entry = entryIdRef.current;
    if (!entry) return;
    let anchorEl = anchor ?? null;
    if (!anchorEl && rootRef.current) {
      // First card whose bottom clears the sticky chrome
      const chromeBottom =
        panelRef.current?.getBoundingClientRect().bottom ?? 0;
      anchorEl =
        Array.from(
          rootRef.current.querySelectorAll<HTMLElement>("[data-library-card]"),
        ).find((el) => el.getBoundingClientRect().bottom > chromeBottom) ??
        null;
    }
    writeSavedScroll({
      entry,
      y: window.scrollY,
      anchorId: anchorEl?.dataset.libraryCard,
      anchorTop: anchorEl ? anchorEl.getBoundingClientRect().top : undefined,
    });
  }, []);

  // Layout effect so the cleanup still sees the Library's DOM and scroll
  // position when a route change unmounts it
  useLayoutEffect(() => {
    const { id, isNew } = ensureHistoryEntryId();
    entryIdRef.current = id;
    const onPageHide = () => captureScroll();
    window.addEventListener("pagehide", onPageHide);

    const saved = isNew ? null : readSavedScroll();
    const frames: number[] = [];
    let timer: ReturnType<typeof setTimeout> | undefined;
    let userMoved = false;
    const onUserScroll = () => {
      userMoved = true;
    };
    const userEvents = ["wheel", "touchstart", "keydown", "pointerdown"];

    const desiredTop = (s: SavedLibraryScroll) => {
      const anchor =
        s.anchorId && rootRef.current
          ? findLibraryCard(rootRef.current, s.anchorId)
          : undefined;
      if (anchor && typeof s.anchorTop === "number") {
        return (
          anchor.getBoundingClientRect().top + window.scrollY - s.anchorTop
        );
      }
      return s.y;
    };

    if (saved && saved.entry === id) {
      userEvents.forEach((t) =>
        window.addEventListener(t, onUserScroll, { passive: true }),
      );
      // Start from the top so the header's scroll direction tracking sees
      // one clear downward jump (and folds predictably), whatever the
      // browser's own restoration did with the previous page's height
      scrollWindowTo(0);
      frames.push(
        requestAnimationFrame(() => {
          if (userMoved) {
            setRestoring(false);
            return;
          }
          let target = desiredTop(saved);
          // A downward jump makes the header controls fold away (or, with a
          // search active, the search row), which moves the list up. Aim for
          // where the card will sit once that settles: correcting upward
          // afterwards would read as a scroll up and unfold them again.
          const panel = panelRef.current;
          if (
            panel &&
            target >= SCROLL_DIRECTION_THRESHOLD &&
            target - window.scrollY >= SCROLL_FLIP_THRESHOLD
          ) {
            const current = panel.getBoundingClientRect().height;
            const rowHeight = searchRowRef.current?.offsetHeight ?? 0;
            // Already folded (header details closed): nothing will move
            if (current > 1) {
              target -= hasFiltersActiveRef.current
                ? rowHeight > 0
                  ? rowHeight + 6
                  : 0
                : current - 1;
            }
          }
          scrollWindowTo(target);
          // Settle once the fold transition has finished; only nudge down
          // or by a hair so the header doesn't flip back open
          timer = setTimeout(() => {
            if (!userMoved) {
              const error = desiredTop(saved) - window.scrollY;
              if (error > 0 || Math.abs(error) < SCROLL_FLIP_THRESHOLD) {
                scrollWindowTo(window.scrollY + error);
              }
            }
            setRestoring(false);
          }, 320);
        }),
      );
    }
    // Otherwise `restoring` started false: hasPendingRestore matches the
    // saved entry check above
    if (isNew && window.scrollY > 0) {
      // Fresh visit (e.g. the Library tab): start at the top
      scrollWindowTo(0);
    }

    return () => {
      frames.forEach((f) => cancelAnimationFrame(f));
      if (timer !== undefined) clearTimeout(timer);
      userEvents.forEach((t) => window.removeEventListener(t, onUserScroll));
      window.removeEventListener("pagehide", onPageHide);
      if (!capturedRef.current) captureScroll();
    };
  }, [captureScroll]);

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
      filtered = filtered.filter((c) => c.difficulty === difficultyFilter);
    }

    const compare = compareCards[sortBy];
    if (compare) filtered.sort(compare);

    if (filtered.length) acc[cat] = filtered;
    return acc;
  }, {});

  const sheetGroups: SheetGroup[] = [
    {
      label: "Category",
      testId: "sheet-category",
      options: [{ value: null, label: "All" }, ...CATEGORY_OPTIONS],
      value: categoryFilter,
      onChange: setCategoryFilter,
    },
    {
      label: "Impact",
      testId: "sheet-impact",
      options: [{ value: null, label: "Any" }, ...IMPACT_OPTIONS],
      value: impactFilter,
      onChange: (v) => setImpactFilter(v as CardImpact | null),
    },
    {
      label: "Difficulty",
      testId: "sheet-difficulty",
      options: [{ value: null, label: "Any" }, ...DIFFICULTY_OPTIONS],
      value: difficultyFilter,
      onChange: setDifficultyFilter,
    },
    {
      label: "Sort",
      testId: "sheet-sort",
      options: [{ value: null, label: "Default order" }, ...SORT_OPTIONS],
      value: sortBy === "default" ? null : sortBy,
      onChange: (v) => setSortBy((v as SortKey | null) ?? "default"),
    },
  ];

  const flatHeading = FLAT_SORT_HEADING[sortBy];
  // Array.prototype.sort is stable, so ties keep the Library's own order
  const flatCards: CardWithCategory[] | null = flatHeading
    ? Object.entries(filteredLibrary)
        .flatMap(([category, cards]) =>
          cards.map((card) => ({ ...card, category })),
        )
        .sort(compareCards[sortBy])
    : null;
  const sections: {
    key: string;
    heading: string;
    cards: CardWithCategory[];
  }[] = flatCards
    ? [{ key: "sorted", heading: flatHeading ?? "", cards: flatCards }]
    : Object.entries(filteredLibrary).map(([category, cards]) => ({
        key: category,
        heading: category,
        cards: cards.map((card) => ({ ...card, category })),
      }));

  const openCard = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      captureScroll(e.currentTarget);
      // Skip the unmount capture for this navigation; reset if the click
      // didn't navigate (new tab)
      capturedRef.current = true;
      setTimeout(() => {
        capturedRef.current = false;
      }, 0);
    },
    [captureScroll],
  );

  const hasResults = Object.keys(filteredLibrary).length > 0;
  const resultCount = Object.values(filteredLibrary).reduce(
    (n, cards) => n + cards.length,
    0,
  );

  return (
    <div
      ref={rootRef}
      className="flex flex-col bg-background w-full max-w-full min-w-0 overflow-x-clip sm:max-w-2xl lg:max-w-5xl sm:mx-auto"
    >
      <div
        ref={panelRef}
        id="library-header-details"
        data-testid="library-header-details"
        aria-hidden={!showHeaderDetails}
        // Collapsed controls must also leave the tab order
        inert={!showHeaderDetails}
        className="sticky z-10 flex-shrink-0 px-3 md:px-6 sticky-under-header"
        style={{
          top: "var(--app-header-height, 56px)",
          background: "var(--surface-header)",
          backdropFilter: "blur(16px) saturate(1.2)",
          WebkitBackdropFilter: "blur(16px) saturate(1.2)",
          borderBottom: showHeaderDetails
            ? "1px solid var(--fg-07)"
            : "1px solid transparent",
          maxHeight: showHeaderDetails ? 144 : 0,
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
            ref={searchRowRef}
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
                style={{ color: "var(--fg-55)" }}
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
                className="w-full min-w-0 h-9 pointer-coarse:h-11 text-[12px] rounded-xl outline-none transition-all placeholder:text-[color:var(--fg-55)]"
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
                className="max-[400px]:hidden tap-target-y h-9 flex-shrink-0 inline-flex items-center gap-1.5 rounded-xl px-2.5 text-[11px] font-bold transition-all active:scale-95 whitespace-nowrap"
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
                  className="ml-0.5 rounded-full px-1.5 py-0.5 text-[11px] leading-none"
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

          <div className="mb-1.5">
            <CategoryChips
              value={categoryFilter}
              onChange={setCategoryFilter}
            />
          </div>

          {/* Single line segmented bar: one rounded track, three segments */}
          <div
            className="hidden min-[400px]:flex h-8 min-w-0 items-stretch gap-px rounded-full p-0.5"
            role="toolbar"
            aria-label="Filter and sort techniques"
            data-testid="library-filter-bar"
            style={{
              background: "var(--fg-05)",
              border: "1px solid var(--fg-08)",
            }}
          >
            <FilterDropdown
              label="Impact"
              defaultLabel="Any impact"
              options={IMPACT_OPTIONS}
              value={impactFilter}
              onChange={(v) => setImpactFilter(v as CardImpact | null)}
              testId="filter-impact"
              align="right"
            />
            <SegmentDivider />
            <FilterDropdown
              label="Difficulty"
              defaultLabel="Any difficulty"
              options={DIFFICULTY_OPTIONS}
              value={difficultyFilter}
              onChange={setDifficultyFilter}
              testId="filter-difficulty"
            />
            <SegmentDivider />
            <FilterDropdown
              label="Sort"
              defaultLabel="Default order"
              options={SORT_OPTIONS}
              value={sortBy === "default" ? null : sortBy}
              onChange={(v) => setSortBy((v as SortKey | null) ?? "default")}
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

          {/* Below 400px: one full width Filters control opening a sheet */}
          <button
            ref={filtersButtonRef}
            type="button"
            onClick={() => setSheetOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={sheetOpen}
            aria-controls={sheetOpen ? "library-filter-sheet" : undefined}
            aria-label={
              sheetFilterCount
                ? `Filters, ${sheetFilterCount} active: ${sheetSummary}`
                : "Filters"
            }
            data-testid="library-filters-button"
            className="library-filter-control flex min-[400px]:hidden h-8 w-full min-w-0 items-center gap-2 rounded-full pl-3 pr-2 text-[12px] font-semibold transition-colors"
            style={{
              background: "var(--fg-05)",
              border: "1px solid var(--fg-08)",
              color: "var(--fg-90)",
            }}
          >
            <SlidersHorizontal
              className="w-3.5 h-3.5 flex-shrink-0"
              style={{ color: "var(--brand-text)" }}
              aria-hidden="true"
            />
            <span className="flex-shrink-0">Filters</span>
            {sheetFilterCount > 0 && (
              <span
                className="flex-shrink-0 min-w-[18px] h-[18px] px-1.5 rounded-full text-[11px] font-bold leading-none inline-flex items-center justify-center"
                style={{
                  background: "var(--gradient-active)",
                  color: "var(--brand-contrast)",
                }}
                data-testid="library-filters-count"
              >
                {sheetFilterCount}
              </span>
            )}
            <span
              className="ml-auto min-w-0 truncate text-[11.5px] font-medium"
              style={{ color: "var(--fg-55)" }}
            >
              {sheetSummary}
            </span>
            <ChevronDown
              className="w-3 h-3 flex-shrink-0 opacity-70"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <LibraryFilterSheet
        id="library-filter-sheet"
        open={sheetOpen}
        onClose={closeSheet}
        returnFocusRef={filtersButtonRef}
        resultCount={resultCount}
        activeCount={sheetFilterCount}
        onClearAll={clearSheetFilters}
        groups={sheetGroups}
      />

      {/* ── Card list ── (main already clears the phone tab bar) */}
      <div className="px-4 md:px-6 pt-4 pb-6 space-y-6">
        {!hasFiltersActive && (
          <div className="space-y-2">
            <HelpNowTile />
            <StartHereShelf />
            <LibraryToday />
          </div>
        )}
        {hasFiltersActive && hasResults && (
          // space-y margins sit at zero specificity in Tailwind 4, so this
          // margin sets the gap to the first section (16px)
          <p
            className="px-1 mb-4 text-[12px] font-medium"
            style={{ color: "var(--fg-55)" }}
            role="status"
            aria-live="polite"
            data-testid="library-result-count"
          >
            {resultCount} of {ALL_LOADED_CARDS.length} techniques
          </p>
        )}
        {hasResults ? (
          sections.map(({ key, heading, cards }) => {
            const cat = flatCards ? null : categoryStyleFor(key);
            return (
              <div
                key={key}
                data-testid={`category-section-${key.toLowerCase().replace(/[\s/]+/g, "-")}`}
              >
                <h2
                  className="flex items-center gap-2 text-[11px] font-bold tracking-[0.08em] uppercase mb-2.5 px-1"
                  style={{ color: "var(--fg-50)" }}
                >
                  {cat && (
                    <span
                      className="w-2 h-2 rounded-full flex-none"
                      style={{ background: cat.color }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex-1">{heading}</span>
                  <span
                    className="font-semibold tracking-normal normal-case"
                    style={{ color: "var(--fg-45)" }}
                  >
                    {cards.length}
                  </span>
                </h2>
                <ul className="grid gap-2 lg:grid-cols-2">
                  {cards.map((card) => (
                    <LibraryCardRow
                      key={card.id}
                      card={card}
                      category={card.category}
                      showCategory={!!flatCards}
                      fav={isCardFav(card.id)}
                      onToggleFav={toggleCard}
                      onOpen={openCard}
                      restoring={restoring}
                    />
                  ))}
                </ul>
              </div>
            );
          })
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

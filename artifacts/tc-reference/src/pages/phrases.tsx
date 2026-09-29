import { useState, useMemo, useEffect } from "react";
import { useLocation } from "wouter";
import { Check, Copy, Heart, Search, X, MessagesSquare } from "lucide-react";
import {
  loadAllAggregatedPhrases,
  getAllTones,
  type AggregatedPhrase,
} from "@/lib/phrases-data";
import { useFavourites } from "@/lib/favourites-context";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";

export default function Phrases() {
  const [allPhrases, setAllPhrases] =
    useState<ReadonlyArray<AggregatedPhrase> | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [toneFilter, setToneFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  // The full bank is thousands of phrases; render a window and grow it on demand
  // so the page mounts and scrolls smoothly on a phone.
  const PAGE_SIZE = 120;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const { copied: copiedPhrase, copy: handleCopy } = useCopyFeedback(1800);
  const [, setLocation] = useLocation();
  const { togglePhrase, isPhrasesFav } = useFavourites();
  const scrollDirection = useScrollDirection(60);

  useEffect(() => {
    let active = true;
    loadAllAggregatedPhrases().then(
      (phrases) => {
        if (active) setAllPhrases(phrases);
      },
      () => {
        if (active) setLoadFailed(true);
      },
    );
    return () => {
      active = false;
    };
  }, []);

  const allTones = useMemo(
    () => (allPhrases ? getAllTones(allPhrases) : []),
    [allPhrases],
  );
  const toneCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const phrase of allPhrases ?? []) {
      counts[phrase.tone] = (counts[phrase.tone] ?? 0) + 1;
    }
    return counts;
  }, [allPhrases]);

  const hasActive = !!toneFilter || !!searchQuery;
  const filterHidden = scrollDirection === "down" && !hasActive;

  const filtered = useMemo(() => {
    let result = allPhrases ?? [];
    if (toneFilter) result = result.filter((p) => p.tone === toneFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.text.toLowerCase().includes(q) ||
          p.cardTitle.toLowerCase().includes(q) ||
          p.cardId.toLowerCase().includes(q),
      );
    }
    return result;
  }, [allPhrases, toneFilter, searchQuery]);

  // Reset the render window whenever the result set changes.
  // Adjusted during render (not in an effect) so the stale window never paints.
  const [prevFilters, setPrevFilters] = useState({ toneFilter, searchQuery });
  if (
    prevFilters.toneFilter !== toneFilter ||
    prevFilters.searchQuery !== searchQuery
  ) {
    setPrevFilters({ toneFilter, searchQuery });
    setVisibleCount(PAGE_SIZE);
  }

  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  if (!allPhrases) {
    return (
      <div className="flex flex-col bg-background w-full max-w-2xl mx-auto px-4 md:px-6 pt-6">
        <h1
          className="text-[20px] font-bold leading-tight"
          style={{ color: "var(--fg-90)" }}
        >
          Phrase Bank
        </h1>
        <div role="status" aria-live="polite" className="py-16 text-center">
          {loadFailed
            ? "Phrase Bank is unavailable right now."
            : "Loading phrases…"}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-background w-full max-w-2xl mx-auto">
      {/* ── Page header ── */}
      <div className="px-4 md:px-6 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-1.5">
          <h1
            className="text-[20px] font-bold leading-tight"
            style={{ color: "var(--fg-90)" }}
          >
            Phrase Bank
          </h1>
        </div>
        <p
          className="text-[12px] leading-relaxed"
          style={{ color: "var(--fg-55)" }}
        >
          Browse and study every phrase from every card, filtered by tone.
        </p>
      </div>

      {/* ── Sticky filter bar ── */}
      <div
        className="sticky z-10 flex-shrink-0"
        style={{
          top: "var(--app-header-height, 56px)",
          maxHeight: filterHidden ? 0 : 104,
          overflow: "hidden",
          transition: "max-height 300ms ease",
        }}
      >
        <div
          style={{
            transform: filterHidden ? "translateY(-110%)" : "translateY(0)",
            transition: "transform 300ms ease",
            willChange: "transform",
            background: "var(--surface-header)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--fg-05)",
          }}
        >
          {/* Row 1: Tone chips */}
          <div
            className="flex gap-2 overflow-x-auto py-1.5 px-4 md:px-6"
            style={{
              scrollbarWidth: "none",
              // Fade the trailing edge so off-screen tones read as scrollable
              maskImage:
                "linear-gradient(to right, #000 calc(100% - 32px), transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, #000 calc(100% - 32px), transparent)",
            }}
            role="toolbar"
            aria-label="Filter by tone"
          >
            <button
              onClick={() => setToneFilter(null)}
              aria-pressed={!toneFilter}
              data-testid="tone-filter-all"
              className="tap-band flex-shrink-0 inline-flex items-center gap-1.5 text-[11px] font-semibold px-3.5 rounded-full transition-all whitespace-nowrap"
              style={{
                height: 32,
                background: !toneFilter
                  ? "var(--gradient-active)"
                  : "var(--fg-05)",
                color: !toneFilter ? "var(--brand-contrast)" : "var(--fg-60)",
                border: !toneFilter
                  ? "1px solid color-mix(in srgb, var(--brand) 60%, transparent)"
                  : "1px solid var(--fg-08)",
                boxShadow: !toneFilter
                  ? "0 2px 10px color-mix(in srgb, var(--brand) 32%, transparent)"
                  : "none",
              }}
            >
              All
              <span
                className="text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none"
                style={{
                  background: !toneFilter
                    ? "rgba(15,23,36,0.18)"
                    : "var(--fg-08)",
                  color: !toneFilter ? "var(--brand-contrast)" : "var(--fg-40)",
                }}
              >
                {allPhrases.length}
              </span>
            </button>
            {allTones.map((tone) => {
              const active = toneFilter === tone;
              const count = toneCounts[tone] ?? 0;
              return (
                <button
                  key={tone}
                  onClick={() => setToneFilter(active ? null : tone)}
                  aria-pressed={active}
                  data-testid={`tone-filter-${tone.toLowerCase().replace(/\s+/g, "-")}`}
                  className="tap-band flex-shrink-0 inline-flex items-center gap-1.5 text-[11px] font-semibold px-3.5 rounded-full transition-all whitespace-nowrap"
                  style={{
                    height: 32,
                    background: active
                      ? "var(--gradient-active)"
                      : "var(--fg-05)",
                    color: active ? "var(--brand-contrast)" : "var(--fg-60)",
                    border: active
                      ? "1px solid color-mix(in srgb, var(--brand) 60%, transparent)"
                      : "1px solid var(--fg-08)",
                    boxShadow: active
                      ? "0 2px 10px color-mix(in srgb, var(--brand) 32%, transparent)"
                      : "none",
                  }}
                >
                  {tone}
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none"
                    style={{
                      background: active
                        ? "rgba(15,23,36,0.18)"
                        : "var(--fg-08)",
                      color: active ? "var(--brand-contrast)" : "var(--fg-40)",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row 2: Search */}
          <div
            className="px-4 md:px-6 py-1.5"
            style={{ borderTop: "1px solid var(--fg-04)" }}
          >
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
                style={{ color: "var(--fg-30)" }}
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search phrases or card names…"
                aria-label="Search phrases"
                data-testid="phrases-search-input"
                className="w-full text-[12px] rounded-xl outline-none transition-all placeholder:text-[color:var(--fg-50)]"
                style={{
                  background: "var(--fg-04)",
                  border: "1px solid var(--fg-07)",
                  color: "var(--fg-90)",
                  padding: "7px 32px 7px 32px",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--brand) 45%, transparent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px color-mix(in srgb, var(--brand) 10%, transparent)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--fg-07)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  data-testid="phrases-search-clear"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-90"
                >
                  <span
                    className="w-5 h-5 flex items-center justify-center rounded-full"
                    style={{ background: "var(--fg-08)" }}
                  >
                    <X
                      className="w-3 h-3"
                      style={{ color: "var(--fg-50)" }}
                      aria-hidden="true"
                    />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Count bar ── */}
      <div className="px-4 md:px-6 pt-3 pb-2 flex items-center justify-between">
        <p
          className="text-[11px] font-semibold"
          style={{ color: "var(--fg-55)" }}
        >
          {filtered.length} {filtered.length === 1 ? "phrase" : "phrases"}
          {toneFilter ? ` · ${toneFilter}` : ""}
        </p>
        {hasActive && (
          <button
            onClick={() => {
              setToneFilter(null);
              setSearchQuery("");
            }}
            aria-label="Clear all filters"
            data-testid="phrases-reset"
            className="tap-target-y inline-flex items-center gap-1 text-[12px] font-bold px-3 rounded-full transition-all active:scale-95 whitespace-nowrap"
            style={{
              minHeight: 36,
              background: "color-mix(in srgb, var(--brand) 10%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--brand) 35%, transparent)",
              color: "var(--brand-text)",
            }}
          >
            <X className="w-2.5 h-2.5" aria-hidden="true" />
            Reset
          </button>
        )}
      </div>

      {/* ── Phrase list ── */}
      <div className="px-4 md:px-6 pb-8 space-y-1.5">
        {filtered.length === 0 ? (
          <div
            className="flex flex-col items-center gap-3 py-14 text-center"
            data-testid="phrases-empty"
            role="status"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: "var(--fg-05)" }}
            >
              <MessagesSquare
                className="w-6 h-6"
                style={{ color: "var(--fg-40)" }}
                aria-hidden="true"
              />
            </div>
            <div>
              <p
                className="text-[15px] font-semibold"
                style={{ color: "var(--fg-60)" }}
              >
                No phrases found
              </p>
              <p className="text-[13px] mt-1" style={{ color: "var(--fg-55)" }}>
                Try a different tone or search term.
              </p>
            </div>
            <button
              onClick={() => {
                setToneFilter(null);
                setSearchQuery("");
              }}
              className="text-[12px] font-semibold px-4 py-2 rounded-full transition-all active:scale-95"
              style={{
                background: "color-mix(in srgb, var(--brand) 10%, transparent)",
                color: "var(--brand-text)",
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          visible.map((phrase, i) => (
            <PhraseRow
              key={`${phrase.cardId}-${phrase.groupId}-${phrase.text}-${i}`}
              phrase={phrase}
              copied={copiedPhrase === phrase.text}
              faved={isPhrasesFav(phrase.cardId, phrase.text)}
              onCopy={() => handleCopy(phrase.text)}
              onFav={() =>
                togglePhrase({
                  cardId: phrase.cardId,
                  cardTitle: phrase.cardTitle,
                  groupLabel: phrase.groupLabel,
                  text: phrase.text,
                })
              }
              onCardClick={() => setLocation(`/card/${phrase.cardId}`)}
            />
          ))
        )}

        {hasMore && (
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE * 3)}
            data-testid="phrases-show-more"
            className="w-full mt-1 rounded-2xl py-3 text-[12px] font-bold transition-all active:scale-[0.99]"
            style={{
              background: "color-mix(in srgb, var(--brand) 9%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
              color: "var(--brand-text)",
            }}
          >
            Show more · {visible.length} of {filtered.length}
          </button>
        )}
      </div>
    </div>
  );
}

interface PhraseRowProps {
  phrase: AggregatedPhrase;
  copied: boolean;
  faved: boolean;
  onCopy: () => void;
  onFav: () => void;
  onCardClick: () => void;
}

function PhraseRow({
  phrase,
  copied,
  faved,
  onCopy,
  onFav,
  onCardClick,
}: PhraseRowProps) {
  return (
    <div
      data-testid={`phrase-row-${phrase.cardId}`}
      className="w-full rounded-2xl pl-4 pr-2 pt-2.5 pb-1 transition-all duration-150"
      style={{
        background: copied
          ? "color-mix(in srgb, var(--brand) 9%, transparent)"
          : "var(--fg-03)",
        border: copied
          ? "1px solid color-mix(in srgb, var(--brand) 25%, transparent)"
          : "1px solid var(--fg-05)",
        // Skip painting off-screen rows — the bank runs to thousands of phrases.
        contentVisibility: "auto",
        containIntrinsicSize: "auto 72px",
      }}
    >
      {/* Phrase text — tappable to copy */}
      <button
        onClick={onCopy}
        aria-label={`Copy: ${phrase.text}`}
        data-testid={`phrase-copy-btn-${phrase.cardId}`}
        className="w-full text-left text-[14px] leading-snug font-medium pr-2 transition-colors active:opacity-70"
        style={{ color: copied ? "var(--brand-text)" : "var(--fg-82)" }}
      >
        {phrase.text}
      </button>

      {/* Meta caption: tone and source card | actions. Kept to one quiet
        line so a phone screen shows twice as many phrases. */}
      <div className="flex items-center gap-1">
        <span
          className="text-[11px] font-semibold flex-shrink-0 max-w-[35%] truncate"
          style={{ color: "var(--fg-50)" }}
        >
          {phrase.groupLabel}
        </span>
        <span aria-hidden="true" style={{ color: "var(--fg-30)" }}>
          ·
        </span>

        {/* Card badge — links to card */}
        <button
          onClick={onCardClick}
          aria-label={`View card ${phrase.cardId}: ${phrase.cardTitle}`}
          data-testid={`phrase-card-link-${phrase.cardId}`}
          className="flex items-center gap-1.5 text-[12px] rounded-lg px-1 min-h-8 min-w-0 flex-1 transition-colors hover:bg-[var(--fg-05)] active:bg-[var(--fg-05)]"
          style={{ color: "var(--fg-55)" }}
        >
          <span
            className="font-bold flex-shrink-0 tabular-nums"
            style={{ color: "var(--brand-text)" }}
          >
            {phrase.cardId}
          </span>
          <span className="truncate min-w-0 font-medium">
            {phrase.cardTitle}
          </span>
        </button>

        {/* Fav button */}
        <button
          onClick={onFav}
          aria-label={faved ? "Remove from favourites" : "Save to favourites"}
          data-testid={`phrase-fav-btn`}
          className="tap-target w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95 flex-shrink-0"
          style={{
            background: faved
              ? "color-mix(in srgb, var(--brand) 12%, transparent)"
              : "transparent",
          }}
        >
          <Heart
            className="w-3.5 h-3.5"
            style={{ color: faved ? "var(--brand-text)" : "var(--fg-50)" }}
            fill={faved ? "var(--brand-text)" : "none"}
          />
        </button>

        {/* Copy button */}
        <button
          onClick={onCopy}
          aria-label={copied ? "Copied!" : `Copy phrase`}
          data-testid={`phrase-copy-icon-btn`}
          className="tap-target w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95 flex-shrink-0"
          style={{
            background: copied
              ? "color-mix(in srgb, var(--brand) 12%, transparent)"
              : "transparent",
          }}
        >
          {copied ? (
            <Check
              className="w-3.5 h-3.5"
              style={{ color: "var(--brand-text)" }}
            />
          ) : (
            <Copy className="w-3.5 h-3.5" style={{ color: "var(--fg-45)" }} />
          )}
        </button>
      </div>
    </div>
  );
}

import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Check, Copy, Heart, Search, X, MessagesSquare } from "lucide-react";
import { getAllAggregatedPhrases, getAllTones, AggregatedPhrase } from "@/lib/phrases-data";
import { useFavourites } from "@/lib/favourites-context";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";

const ALL_PHRASES = getAllAggregatedPhrases();
const ALL_TONES = getAllTones();

const TONE_COUNTS: Record<string, number> = {};
for (const p of ALL_PHRASES) {
  TONE_COUNTS[p.tone] = (TONE_COUNTS[p.tone] ?? 0) + 1;
}

export default function Phrases() {
  const [toneFilter, setToneFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { copied: copiedPhrase, copy: handleCopy } = useCopyFeedback(1800);
  const [, setLocation] = useLocation();
  const { togglePhrase, isPhrasesFav } = useFavourites();
  const scrollDirection = useScrollDirection(60);

  const hasActive = !!toneFilter || !!searchQuery;
  const filterHidden = scrollDirection === "down" && !hasActive;

  const filtered = useMemo(() => {
    let result = ALL_PHRASES;
    if (toneFilter) result = result.filter((p) => p.tone === toneFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.text.toLowerCase().includes(q) ||
          p.cardTitle.toLowerCase().includes(q) ||
          p.cardId.toLowerCase().includes(q)
      );
    }
    return result;
  }, [toneFilter, searchQuery]);

  return (
    <div className="flex flex-col bg-background w-full max-w-2xl mx-auto">

      {/* ── Page header ── */}
      <div className="px-4 md:px-6 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-1.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, color-mix(in srgb, var(--brand) 18%, transparent) 0%, color-mix(in srgb, var(--brand) 8%, transparent) 100%)",
              border: "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
            }}
          >
            <MessagesSquare className="w-4 h-4" style={{ color: "var(--brand-text)" }} aria-hidden="true" />
          </div>
          <h1 className="text-[20px] font-bold leading-tight" style={{ color: "var(--fg-90)" }}>
            Phrase Bank
          </h1>
        </div>
        <p className="text-[12px] leading-relaxed" style={{ color: "var(--fg-55)" }}>
          Every phrase from all {ALL_PHRASES.length} entries across {Object.keys(TONE_COUNTS).length} tones — filter by tone or search to find the right words.
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
            style={{ scrollbarWidth: "none" }}
            role="toolbar"
            aria-label="Filter by tone"
          >
            <button
              onClick={() => setToneFilter(null)}
              aria-pressed={!toneFilter}
              data-testid="tone-filter-all"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-[11px] font-semibold px-3.5 rounded-full transition-all whitespace-nowrap"
              style={{
                minHeight: 40,
                background: !toneFilter
                  ? "var(--gradient-active)"
                  : "var(--fg-05)",
                color: !toneFilter ? "var(--brand-contrast)" : "var(--fg-60)",
                border: !toneFilter
                  ? "1px solid color-mix(in srgb, var(--brand) 60%, transparent)"
                  : "1px solid var(--fg-08)",
                boxShadow: !toneFilter ? "0 2px 10px color-mix(in srgb, var(--brand) 32%, transparent)" : "none",
              }}
            >
              All
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none"
                style={{
                  background: !toneFilter ? "rgba(15,23,36,0.18)" : "var(--fg-08)",
                  color: !toneFilter ? "var(--brand-contrast)" : "var(--fg-40)",
                }}
              >
                {ALL_PHRASES.length}
              </span>
            </button>
            {ALL_TONES.map((tone) => {
              const active = toneFilter === tone;
              const count = TONE_COUNTS[tone] ?? 0;
              return (
                <button
                  key={tone}
                  onClick={() => setToneFilter(active ? null : tone)}
                  aria-pressed={active}
                  data-testid={`tone-filter-${tone.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 text-[11px] font-semibold px-3.5 rounded-full transition-all whitespace-nowrap"
                  style={{
                    minHeight: 40,
                    background: active
                      ? "var(--gradient-active)"
                      : "var(--fg-05)",
                    color: active ? "var(--brand-contrast)" : "var(--fg-60)",
                    border: active
                      ? "1px solid color-mix(in srgb, var(--brand) 60%, transparent)"
                      : "1px solid var(--fg-08)",
                    boxShadow: active ? "0 2px 10px color-mix(in srgb, var(--brand) 32%, transparent)" : "none",
                  }}
                >
                  {tone}
                  <span
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none"
                    style={{
                      background: active ? "rgba(15,23,36,0.18)" : "var(--fg-08)",
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
                  e.currentTarget.style.borderColor = "color-mix(in srgb, var(--brand) 45%, transparent)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--brand) 10%, transparent)";
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
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full transition-all active:scale-90"
                  style={{ background: "var(--fg-08)" }}
                >
                  <X className="w-3 h-3" style={{ color: "var(--fg-50)" }} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Count bar ── */}
      <div className="px-4 md:px-6 pt-3 pb-2 flex items-center justify-between">
        <p className="text-[11px] font-semibold" style={{ color: "var(--fg-55)" }}>
          {filtered.length}{" "}
          {filtered.length === 1 ? "phrase" : "phrases"}
          {toneFilter ? ` · ${toneFilter}` : ""}
        </p>
        {hasActive && (
          <button
            onClick={() => { setToneFilter(null); setSearchQuery(""); }}
            aria-label="Clear all filters"
            data-testid="phrases-reset"
            className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 rounded-full transition-all active:scale-95 whitespace-nowrap"
            style={{
              minHeight: 36,
              background: "color-mix(in srgb, var(--brand) 10%, transparent)",
              border: "1px solid color-mix(in srgb, var(--brand) 35%, transparent)",
              color: "var(--brand-text)",
            }}
          >
            <X className="w-2.5 h-2.5" aria-hidden="true" />
            Reset
          </button>
        )}
      </div>

      {/* ── Phrase list ── */}
      <div className="px-4 md:px-6 pb-8 space-y-2">
        {filtered.length === 0 ? (
          <div
            className="flex flex-col items-center gap-3 py-14 text-center"
            data-testid="phrases-empty"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: "var(--fg-05)" }}
            >
              <MessagesSquare className="w-6 h-6" style={{ color: "var(--fg-22)" }} />
            </div>
            <div>
              <p className="text-[15px] font-semibold" style={{ color: "var(--fg-60)" }}>
                No phrases found
              </p>
              <p className="text-[12px] mt-1" style={{ color: "var(--fg-32)" }}>
                Try a different tone or search term
              </p>
            </div>
            <button
              onClick={() => { setToneFilter(null); setSearchQuery(""); }}
              className="text-[12px] font-semibold px-4 py-2 rounded-full transition-all active:scale-95"
              style={{ background: "color-mix(in srgb, var(--brand) 10%, transparent)", color: "var(--brand-text)" }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          filtered.map((phrase, i) => (
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

function PhraseRow({ phrase, copied, faved, onCopy, onFav, onCardClick }: PhraseRowProps) {
  return (
    <div
      data-testid={`phrase-row-${phrase.cardId}`}
      className="w-full rounded-2xl px-4 py-3 transition-all duration-150"
      style={{
        background: copied ? "color-mix(in srgb, var(--brand) 9%, transparent)" : "var(--fg-03)",
        border: copied
          ? "1px solid color-mix(in srgb, var(--brand) 25%, transparent)"
          : "1px solid var(--fg-05)",
      }}
    >
      {/* Phrase text — tappable to copy */}
      <button
        onClick={onCopy}
        aria-label={`Copy: ${phrase.text}`}
        data-testid={`phrase-copy-btn-${phrase.cardId}`}
        className="w-full text-left text-[14px] leading-snug font-medium mb-2.5 transition-colors active:opacity-70"
        style={{ color: copied ? "var(--brand-text)" : "var(--fg-82)" }}
      >
        {phrase.text}
      </button>

      {/* Meta row: tone badge + card badge | actions */}
      <div className="flex items-center gap-2">
        {/* Tone badge */}
        <span
          className="text-[9px] font-bold tracking-wide px-2 py-0.5 rounded-full uppercase flex-shrink-0"
          style={{
            background: "color-mix(in srgb, var(--brand) 10%, transparent)",
            color: "color-mix(in srgb, var(--brand-text) 75%, transparent)",
            border: "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
          }}
        >
          {phrase.groupLabel}
        </span>

        {/* Card badge — links to card */}
        <button
          onClick={onCardClick}
          aria-label={`View card ${phrase.cardId}: ${phrase.cardTitle}`}
          data-testid={`phrase-card-link-${phrase.cardId}`}
          className="flex items-center gap-1.5 text-[10px] font-semibold rounded-full px-2 py-0.5 transition-all active:scale-95 flex-shrink-0"
          style={{
            background: "var(--fg-05)",
            border: "1px solid var(--fg-08)",
            color: "var(--fg-50)",
          }}
        >
          <span
            className="text-[8px] font-bold px-1 py-0.5 rounded"
            style={{ background: "var(--brand)", color: "var(--brand-contrast)" }}
          >
            {phrase.cardId}
          </span>
          <span className="truncate max-w-[110px]">{phrase.cardTitle}</span>
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Fav button */}
        <button
          onClick={onFav}
          aria-label={faved ? "Remove from favourites" : "Save phrase"}
          data-testid={`phrase-fav-btn`}
          className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95 flex-shrink-0"
          style={{ background: faved ? "color-mix(in srgb, var(--brand) 12%, transparent)" : "transparent" }}
        >
          <Heart
            className="w-3.5 h-3.5"
            style={{ color: faved ? "var(--brand-text)" : "var(--fg-28)" }}
            fill={faved ? "var(--brand-text)" : "none"}
          />
        </button>

        {/* Copy button */}
        <button
          onClick={onCopy}
          aria-label={copied ? "Copied!" : `Copy phrase`}
          data-testid={`phrase-copy-icon-btn`}
          className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95 flex-shrink-0"
          style={{
            background: copied ? "color-mix(in srgb, var(--brand) 12%, transparent)" : "var(--fg-05)",
            border: "1px solid var(--fg-07)",
          }}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" style={{ color: "var(--brand-text)" }} />
          ) : (
            <Copy className="w-3.5 h-3.5" style={{ color: "var(--fg-40)" }} />
          )}
        </button>
      </div>
    </div>
  );
}

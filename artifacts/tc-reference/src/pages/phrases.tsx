import { useState, useMemo, useEffect } from "react";
import { Link } from "wouter";
import {
  Check,
  ChevronRight,
  Copy,
  Heart,
  Search,
  X,
  MessagesSquare,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { Chip } from "@/components/ui/chip";
import {
  loadAllAggregatedPhrases,
  getAllTones,
  type AggregatedPhrase,
} from "@/lib/phrases-data";
import type { CanonicalTone } from "@/lib/card-types";
import {
  PHRASE_LENGTHS,
  TONE_HINTS,
  countFacets,
  filterPhrases,
  groupByCard,
  type PhraseLength,
} from "@/lib/phrase-filters";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import { useFavourites } from "@/lib/favourites-context";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";

// The bank runs to thousands of phrases; render a window and grow it on
// demand so the page mounts and scrolls smoothly on a phone.
const PAGE_SIZE = 120;

const CARD_CATEGORY: Record<string, string> = Object.fromEntries(
  Object.entries(LIBRARY_CATEGORIES).flatMap(([category, cards]) =>
    cards.map((c) => [c.id, category]),
  ),
);

const formatCount = (n: number) => n.toLocaleString("en-GB");

export default function Phrases() {
  const [allPhrases, setAllPhrases] =
    useState<ReadonlyArray<AggregatedPhrase> | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [tone, setTone] = useState<CanonicalTone | null>(null);
  const [length, setLength] = useState<PhraseLength | null>(null);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const { copied, copy } = useCopyFeedback(1800);
  const { state: favState, togglePhrase, isPhrasesFav } = useFavourites();
  const savedPhraseCount = favState.phrases.length;

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

  const filter = useMemo(
    () => ({ tone, length, query }),
    [tone, length, query],
  );
  const allTones = useMemo(
    () => (allPhrases ? getAllTones(allPhrases) : []),
    [allPhrases],
  );
  const counts = useMemo(
    () => countFacets(allPhrases ?? [], filter),
    [allPhrases, filter],
  );
  const filtered = useMemo(
    () => filterPhrases(allPhrases ?? [], filter),
    [allPhrases, filter],
  );

  // Reset the render window whenever the result set changes. Adjusted during
  // render (not in an effect) so the stale window never paints.
  const [prevFilter, setPrevFilter] = useState(filter);
  if (prevFilter !== filter) {
    setPrevFilter(filter);
    setVisibleCount(PAGE_SIZE);
  }

  const groups = useMemo(
    () => groupByCard(filtered.slice(0, visibleCount)),
    [filtered, visibleCount],
  );
  const hasMore = filtered.length > visibleCount;
  const hasActive = !!tone || !!length || !!query;
  const clearAll = () => {
    setTone(null);
    setLength(null);
    setQuery("");
  };

  if (!allPhrases) {
    return (
      <div className="w-full max-w-full min-w-0 sm:max-w-2xl sm:mx-auto px-4 md:px-6 pt-4 md:pt-6">
        <PageIntro title="Phrase Bank" />
        <div role="status" aria-live="polite" className="py-16 text-center">
          {loadFailed
            ? "Phrase Bank is unavailable right now."
            : "Loading phrases…"}
        </div>
      </div>
    );
  }

  const toneTotal = allTones.reduce((n, t) => n + (counts.tone[t] ?? 0), 0);
  const lengthTotal = PHRASE_LENGTHS.reduce(
    (n, l) => n + (counts.length[l.id] ?? 0),
    0,
  );

  return (
    <div className="w-full max-w-full min-w-0 sm:max-w-2xl sm:mx-auto px-4 md:px-6 pt-3 md:pt-6 pb-8">
      <PageIntro
        title="Phrase Bank"
        description={`${formatCount(allPhrases.length)} lines from every technique. Pick a tone and length, then tap a line to copy it.`}
      />

      {savedPhraseCount > 0 && (
        <Link
          href="/favourites"
          data-testid="phrases-saved-link"
          className="mt-3 flex items-center gap-3 rounded-2xl px-4 min-h-14 transition-colors hover:bg-[var(--surface-card-hover)]"
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--fg-07)",
          }}
        >
          <Heart
            className="w-[18px] h-[18px] flex-none"
            style={{ color: "var(--brand-text)" }}
            fill="var(--brand-text)"
            aria-hidden="true"
          />
          <span
            className="flex-1 text-[16px] font-semibold"
            style={{ color: "var(--fg-90)" }}
          >
            Your saved phrases
          </span>
          <span
            className="text-[14px] font-semibold tabular-nums"
            style={{ color: "var(--fg-60)" }}
          >
            {savedPhraseCount}
          </span>
          <ChevronRight
            className="w-4 h-4 flex-none"
            style={{ color: "var(--fg-45)" }}
            aria-hidden="true"
          />
        </Link>
      )}

      {/* ── Search and filters ── */}
      <div className="mt-4 flex flex-col gap-3">
        <label
          className="flex items-center gap-2.5 h-12 rounded-2xl pl-3.5 pr-1 focus-within:ring-2 focus-within:ring-[var(--brand)]"
          style={{
            background: "var(--fg-05)",
            border: "1px solid var(--fg-08)",
          }}
        >
          <Search
            className="w-4 h-4 flex-none"
            style={{ color: "var(--fg-55)" }}
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search phrases or techniques"
            aria-label="Search phrases"
            data-testid="phrases-search-input"
            className="flex-1 min-w-0 bg-transparent outline-none text-[16px] placeholder:text-[color:var(--fg-50)] [&::-webkit-search-cancel-button]:hidden"
            style={{ color: "var(--fg-90)" }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              data-testid="phrases-search-clear"
              className="w-10 h-10 flex-none flex items-center justify-center rounded-full"
            >
              <X
                className="w-4 h-4"
                style={{ color: "var(--fg-55)" }}
                aria-hidden="true"
              />
            </button>
          )}
        </label>

        <FilterRow label="Tone">
          <Chip
            selected={!tone}
            count={toneTotal}
            onClick={() => setTone(null)}
            data-testid="tone-filter-all"
          >
            Any
          </Chip>
          {allTones.map((t) => (
            <Chip
              key={t}
              selected={tone === t}
              count={counts.tone[t] ?? 0}
              title={TONE_HINTS[t]}
              onClick={() => setTone(tone === t ? null : t)}
              data-testid={`tone-filter-${t.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {t}
            </Chip>
          ))}
        </FilterRow>

        <FilterRow label="Length">
          <Chip
            selected={!length}
            count={lengthTotal}
            onClick={() => setLength(null)}
            data-testid="length-filter-all"
          >
            Any
          </Chip>
          {PHRASE_LENGTHS.map((l) => (
            <Chip
              key={l.id}
              selected={length === l.id}
              count={counts.length[l.id] ?? 0}
              title={l.hint}
              onClick={() => setLength(length === l.id ? null : l.id)}
              data-testid={`length-filter-${l.id}`}
            >
              {l.label}
            </Chip>
          ))}
        </FilterRow>
      </div>

      {/* ── Count and reset ── */}
      <div className="mt-4 mb-2 flex items-center justify-between gap-3 min-h-11">
        <p
          className="text-[13px] font-semibold"
          style={{ color: "var(--fg-60)" }}
          aria-live="polite"
          data-testid="phrases-count"
        >
          {formatCount(filtered.length)}{" "}
          {filtered.length === 1 ? "phrase" : "phrases"}
          {tone ? ` · ${tone}` : ""}
          {length
            ? ` · ${PHRASE_LENGTHS.find((l) => l.id === length)?.label}`
            : ""}
        </p>
        {hasActive ? (
          <button
            type="button"
            onClick={clearAll}
            aria-label="Clear all filters"
            data-testid="phrases-reset"
            className="tap-target-y inline-flex items-center gap-1 text-[13px] font-bold px-3 rounded-full min-h-9"
            style={{
              background: "color-mix(in srgb, var(--brand) 10%, transparent)",
              color: "var(--brand-text)",
            }}
          >
            <X className="w-3 h-3" aria-hidden="true" />
            Reset
          </button>
        ) : (
          <span className="text-[13px]" style={{ color: "var(--fg-55)" }}>
            Tap a line to copy
          </span>
        )}
      </div>

      {/* ── Phrases, grouped by technique ── */}
      {filtered.length === 0 ? (
        <div
          className="flex flex-col items-center gap-3 py-14 text-center"
          data-testid="phrases-empty"
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: "var(--fg-05)" }}
          >
            <MessagesSquare
              className="w-6 h-6"
              style={{ color: "var(--fg-45)" }}
              aria-hidden="true"
            />
          </div>
          <p
            className="text-[16px] font-semibold"
            style={{ color: "var(--fg-80)" }}
          >
            No phrases match
          </p>
          <p className="text-[14px]" style={{ color: "var(--fg-60)" }}>
            Try another tone, length or search.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-1 text-[14px] font-semibold px-4 min-h-11 rounded-full"
            style={{
              background: "color-mix(in srgb, var(--brand) 10%, transparent)",
              color: "var(--brand-text)",
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {groups.map((group) => (
            <PhraseGroup
              key={group.cardId}
              cardId={group.cardId}
              cardTitle={group.cardTitle}
              phrases={group.phrases}
              copied={copied}
              onCopy={copy}
              isFav={isPhrasesFav}
              onFav={(p) =>
                togglePhrase({
                  cardId: p.cardId,
                  cardTitle: p.cardTitle,
                  groupLabel: p.groupLabel,
                  text: p.text,
                })
              }
            />
          ))}
        </div>
      )}

      {hasMore && (
        <button
          type="button"
          onClick={() => setVisibleCount((c) => c + PAGE_SIZE * 3)}
          data-testid="phrases-show-more"
          className="w-full mt-5 rounded-2xl min-h-12 text-[15px] font-bold"
          style={{
            background: "var(--fg-08)",
            color: "var(--fg-90)",
          }}
        >
          Show more · {formatCount(visibleCount)} of{" "}
          {formatCount(filtered.length)}
        </button>
      )}
    </div>
  );
}

/** A labelled, sideways-scrolling row of filter chips. */
function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="group"
      aria-label={`Filter by ${label.toLowerCase()}`}
      className="flex items-center gap-2 -mx-4 px-4 md:-mx-6 md:px-6 overflow-x-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <span
        aria-hidden="true"
        className="flex-none w-[52px] text-[13px] font-semibold"
        style={{ color: "var(--fg-60)" }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

interface PhraseGroupProps {
  cardId: string;
  cardTitle: string;
  phrases: AggregatedPhrase[];
  copied: string | null;
  onCopy: (text: string) => void;
  isFav: (cardId: string, text: string) => boolean;
  onFav: (phrase: AggregatedPhrase) => void;
}

function PhraseGroup({
  cardId,
  cardTitle,
  phrases,
  copied,
  onCopy,
  isFav,
  onFav,
}: PhraseGroupProps) {
  const cat = categoryStyleFor(CARD_CATEGORY[cardId] ?? "");
  return (
    <section aria-label={cardTitle} className="flex flex-col gap-2">
      <Link
        href={`/card/${cardId}`}
        data-testid={`phrase-card-link-${cardId}`}
        aria-label={`Open ${cardTitle}`}
        className="flex items-center gap-2 min-h-11"
      >
        <span
          aria-hidden="true"
          className="w-2.5 h-2.5 rounded-full flex-none"
          style={{ background: cat.color }}
        />
        <span
          className="flex-1 min-w-0 truncate text-[16px] font-bold"
          style={{ color: "var(--fg-90)" }}
        >
          {cardTitle}
        </span>
        <ChevronRight
          className="w-4 h-4 flex-none"
          style={{ color: "var(--fg-45)" }}
          aria-hidden="true"
        />
      </Link>
      <ul
        className="rounded-2xl overflow-hidden divide-y divide-[var(--fg-07)]"
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--fg-07)",
        }}
      >
        {phrases.map((phrase, i) => (
          <PhraseRow
            key={`${phrase.groupId}-${i}-${phrase.text}`}
            phrase={phrase}
            copied={copied === phrase.text}
            faved={isFav(phrase.cardId, phrase.text)}
            onCopy={() => onCopy(phrase.text)}
            onFav={() => onFav(phrase)}
          />
        ))}
      </ul>
    </section>
  );
}

interface PhraseRowProps {
  phrase: AggregatedPhrase;
  copied: boolean;
  faved: boolean;
  onCopy: () => void;
  onFav: () => void;
}

function PhraseRow({ phrase, copied, faved, onCopy, onFav }: PhraseRowProps) {
  return (
    <li
      data-testid={`phrase-row-${phrase.cardId}`}
      className="flex items-center gap-1 pl-4 pr-1.5 min-h-14 transition-colors"
      style={{
        background: copied
          ? "color-mix(in srgb, var(--brand) 9%, transparent)"
          : undefined,
        // Skip painting off-screen rows
        contentVisibility: "auto",
        containIntrinsicSize: "auto 64px",
      }}
    >
      <button
        type="button"
        onClick={onCopy}
        aria-label={`Copy: ${phrase.text}`}
        data-testid={`phrase-copy-btn-${phrase.cardId}`}
        className="flex-1 min-w-0 text-left py-3 flex flex-col gap-0.5"
      >
        <span
          className="phrase-text text-[16px] leading-[1.4] font-medium"
          style={{ color: copied ? "var(--brand-text)" : "var(--fg-90)" }}
        >
          {phrase.text}
        </span>
        <span
          className="text-[12px] font-semibold truncate"
          style={{ color: "var(--fg-55)" }}
        >
          {copied ? "Copied" : phrase.groupLabel}
        </span>
      </button>
      <span
        aria-hidden="true"
        className="w-9 h-9 flex-none flex items-center justify-center"
      >
        {copied ? (
          <Check className="w-4 h-4" style={{ color: "var(--brand-text)" }} />
        ) : (
          <Copy className="w-4 h-4" style={{ color: "var(--fg-45)" }} />
        )}
      </span>
      <button
        type="button"
        onClick={onFav}
        aria-label={faved ? "Remove from favourites" : "Save to favourites"}
        aria-pressed={faved}
        data-testid="phrase-fav-btn"
        className="w-11 h-11 flex-none flex items-center justify-center rounded-full"
      >
        <Heart
          className="w-[18px] h-[18px]"
          style={{ color: faved ? "var(--brand-text)" : "var(--fg-50)" }}
          fill={faved ? "var(--brand-text)" : "none"}
        />
      </button>
    </li>
  );
}

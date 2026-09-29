import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { X, Check, Copy, Heart } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { isSpeakablePhrase } from "@/lib/card-types";
import type { CardData } from "@/lib/card-types";
import { loadAllCards } from "@/lib/card-loader";
import { useQuickMode } from "@/lib/quick-mode";
import { useFavourites } from "@/lib/favourites-context";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";

interface QuickPhrase {
  text: string;
  cardId: string;
  cardTitle: string;
  /** Every card that lists this line in this group (it is shown once). */
  cardIds: string[];
}

interface QuickGroup {
  id: string;
  label: string;
  tag: string;
  phrases: QuickPhrase[];
}

const CARD_TITLE_MAP_QM: Record<string, string> = {};
for (const cards of Object.values(LIBRARY_CATEGORIES)) {
  for (const c of cards) CARD_TITLE_MAP_QM[c.id] = c.title;
}

function buildQuickGroups(
  cards: Readonly<Record<string, CardData>>,
): QuickGroup[] {
  const groupsMap = new Map<string, QuickGroup>();
  // Many cards share stock lines ("What was that like?"). Keep one row per
  // line per group and remember every card it came from.
  const seen = new Map<string, QuickPhrase>();

  for (const [cardId, card] of Object.entries(cards)) {
    const cardMeta = Object.values(LIBRARY_CATEGORIES)
      .flat()
      .find((c) => c.id === cardId);
    if (!cardMeta?.loaded) continue;

    for (const group of card.phraseBank) {
      if (!groupsMap.has(group.id)) {
        groupsMap.set(group.id, {
          id: group.id,
          label: group.label,
          tag: group.tag,
          phrases: [],
        });
      }
      const targetGroup = groupsMap.get(group.id)!;
      for (const phraseText of group.phrases) {
        if (!isSpeakablePhrase(phraseText)) continue;
        const key = `${group.id}\u0000${phraseText.trim().toLowerCase()}`;
        const existing = seen.get(key);
        if (existing) {
          if (!existing.cardIds.includes(cardId)) existing.cardIds.push(cardId);
          continue;
        }
        const entry: QuickPhrase = {
          text: phraseText,
          cardId,
          cardTitle: cardMeta.title,
          cardIds: [cardId],
        };
        seen.set(key, entry);
        targetGroup.phrases.push(entry);
      }
    }
  }
  // Groups whose entries were all stage directions have nothing speakable to offer
  return Array.from(groupsMap.values()).filter((g) => g.phrases.length > 0);
}

let quickGroupsPromise: Promise<ReadonlyArray<QuickGroup>> | null = null;
// The resolved aggregate, so reopening the overlay renders it immediately.
let quickGroupsCache: ReadonlyArray<QuickGroup> | null = null;

function loadQuickGroups(): Promise<ReadonlyArray<QuickGroup>> {
  if (!quickGroupsPromise) {
    const pending = loadAllCards()
      .then((cards) => {
        const groups = Object.freeze(buildQuickGroups(cards));
        quickGroupsCache = groups;
        return groups;
      })
      .catch((error: unknown) => {
        if (quickGroupsPromise === pending) quickGroupsPromise = null;
        throw error;
      });
    quickGroupsPromise = pending;
  }
  return quickGroupsPromise;
}

const QUICK_PAGE_SIZE = 120;

export function QuickModeOverlay() {
  const { isOpen } = useQuickMode();
  // Mounting the content only while open means every open starts from fresh
  // transient state (filter, scope, paging, copy feedback, load failure).
  if (!isOpen) return null;
  return <QuickModeContent />;
}

function QuickModeContent() {
  const { setIsOpen } = useQuickMode();
  const [location] = useLocation();
  // Opened from a card: default to that card's lines, one tap from the rest.
  const routeCardId = location.startsWith("/card/")
    ? location.split("/")[2]
    : null;
  const contextCardId =
    routeCardId && CARD_TITLE_MAP_QM[routeCardId] ? routeCardId : null;
  const [cardScope, setCardScope] = useState(true);
  const { isPhrasesFav, togglePhrase } = useFavourites();
  const [quickFilter, setQuickFilter] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(QUICK_PAGE_SIZE);
  const [quickGroups, setQuickGroups] =
    useState<ReadonlyArray<QuickGroup> | null>(() => quickGroupsCache);
  const [loadFailed, setLoadFailed] = useState(false);
  const { copied: copiedPhrase, copy: handleCopy } = useCopyFeedback();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Trap focus inside the overlay while open (initial focus on close button)
  useFocusTrap(true, overlayRef, { initialFocusRef: closeButtonRef });
  useBodyScrollLock(true);

  // Changing the scope or situation filter restarts the render window.
  const changeView = (nextScope: boolean, nextFilter: string | null) => {
    if (nextScope !== cardScope || nextFilter !== quickFilter) {
      setVisibleCount(QUICK_PAGE_SIZE);
    }
    setCardScope(nextScope);
    setQuickFilter(nextFilter);
  };
  const changeFilter = (nextFilter: string | null) =>
    changeView(cardScope, nextFilter);

  useEffect(() => {
    if (quickGroups) return;
    let active = true;
    loadQuickGroups().then(
      (groups) => {
        if (active) setQuickGroups(groups);
      },
      () => {
        if (active) setLoadFailed(true);
      },
    );
    return () => {
      active = false;
    };
  }, [quickGroups]);

  // Escape key dismissal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setIsOpen]);

  const scopedToCard = cardScope && contextCardId !== null;
  const allQuickGroups = scopedToCard
    ? (quickGroups ?? [])
        .map((g) => ({
          ...g,
          phrases: g.phrases
            .filter((p) => p.cardIds.includes(contextCardId))
            // Attribute to the open card so favourites file under it
            .map((p) => ({
              ...p,
              cardId: contextCardId,
              cardTitle: CARD_TITLE_MAP_QM[contextCardId],
            })),
        }))
        .filter((g) => g.phrases.length > 0)
    : (quickGroups ?? []);
  const filteredGroups = quickFilter
    ? allQuickGroups.filter((g) => g.id === quickFilter)
    : allQuickGroups;
  const totalPhraseCount = filteredGroups.reduce(
    (count, group) => count + group.phrases.length,
    0,
  );
  const visibleGroups: QuickGroup[] = [];
  let remainingRows = visibleCount;
  for (const group of filteredGroups) {
    const phrases = group.phrases.slice(0, remainingRows);
    remainingRows -= phrases.length;
    if (phrases.length > 0) visibleGroups.push({ ...group, phrases });
  }
  const remainingPhraseCount =
    totalPhraseCount - Math.min(visibleCount, totalPhraseCount);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Quick Lookup"
      className="fixed inset-0 bg-background flex flex-col animate-in slide-in-from-bottom-full duration-300"
      style={{ zIndex: "var(--z-overlay)" as unknown as number }}
      data-testid="quick-mode-overlay"
    >
      {/* ── Header ── */}
      <div
        className="flex-shrink-0 px-4 pt-[calc(1.25rem+env(safe-area-inset-top,0px))] pb-3"
        style={{ borderBottom: "1px solid var(--fg-07)" }}
      >
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="min-w-0">
            <h2 className="text-[20px] font-bold text-foreground">
              Quick Lookup
            </h2>
            {scopedToCard ? (
              <p
                className="text-[12px] truncate"
                style={{ color: "var(--fg-55)" }}
                data-testid="quick-scope-title"
              >
                {CARD_TITLE_MAP_QM[contextCardId]}
              </p>
            ) : (
              <p
                className="hidden sm:block text-[12px]"
                style={{ color: "var(--fg-55)" }}
              >
                Tap any line to copy it. Grouped by situation.
              </p>
            )}
          </div>
          <button
            ref={closeButtonRef}
            onClick={() => setIsOpen(false)}
            aria-label="Close Quick Lookup"
            data-testid="button-quick-close"
            className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full transition-all active:scale-95"
            style={{ background: "var(--fg-05)" }}
          >
            <X
              className="w-5 h-5"
              style={{ color: "var(--fg-65)" }}
              aria-hidden="true"
            />
          </button>
        </div>

        {contextCardId && (
          <div
            className="grid grid-cols-2 gap-1 p-1 mb-3 rounded-xl"
            style={{ background: "var(--fg-05)" }}
            role="group"
            aria-label="Phrase source"
          >
            {[
              { scoped: true, label: `This card · ${contextCardId}` },
              { scoped: false, label: "All cards" },
            ].map((opt) => {
              const selected = cardScope === opt.scoped;
              return (
                <button
                  key={opt.label}
                  type="button"
                  aria-pressed={selected}
                  data-testid={
                    opt.scoped ? "quick-scope-card" : "quick-scope-all"
                  }
                  onClick={() => changeView(opt.scoped, null)}
                  className="min-h-10 rounded-lg px-3 text-[12px] font-semibold truncate transition-colors"
                  style={{
                    background: selected ? "var(--card)" : "transparent",
                    color: selected ? "var(--fg-90)" : "var(--fg-55)",
                    boxShadow: selected
                      ? "0 1px 3px rgba(0,0,0,0.12), 0 0 0 1px var(--fg-07)"
                      : "none",
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}

        {/* ── Situation filters ── */}
        <div
          className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4"
          style={{ scrollbarWidth: "none" }}
          role="toolbar"
          aria-label="Filter phrases by situation"
        >
          <button
            onClick={() => changeFilter(null)}
            aria-pressed={!quickFilter}
            data-testid="quick-filter-all"
            className="flex-shrink-0 text-[12px] font-semibold px-4 rounded-full transition-all whitespace-nowrap"
            style={{
              background: !quickFilter ? "var(--brand)" : "var(--fg-06)",
              color: !quickFilter ? "var(--brand-contrast)" : "var(--fg-60)",
              minHeight: 44,
            }}
          >
            All
          </button>
          {allQuickGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => changeFilter(quickFilter === g.id ? null : g.id)}
              aria-pressed={quickFilter === g.id}
              data-testid={`quick-filter-${g.id}`}
              className="flex-shrink-0 text-[12px] font-semibold px-4 rounded-full transition-all whitespace-nowrap"
              style={{
                background:
                  quickFilter === g.id ? "var(--brand)" : "var(--fg-06)",
                color:
                  quickFilter === g.id
                    ? "var(--brand-contrast)"
                    : "var(--fg-60)",
                minHeight: 44,
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Phrase list ── */}
      <div className="flex-1 overflow-y-auto overscroll-contain px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] space-y-5">
        {!quickGroups && !loadFailed && (
          <div role="status" aria-live="polite" className="py-14 text-center">
            <p
              className="text-[14px] font-semibold"
              style={{ color: "var(--fg-55)" }}
            >
              Loading phrases…
            </p>
          </div>
        )}
        {loadFailed && (
          <div role="status" className="py-14 text-center">
            <p
              className="text-[14px] font-semibold"
              style={{ color: "var(--fg-55)" }}
            >
              Phrases are unavailable right now.
            </p>
          </div>
        )}
        {quickGroups && filteredGroups.length === 0 && (
          <div className="flex flex-col items-center py-14 text-center">
            <p
              className="text-[15px] font-semibold mb-1.5"
              style={{ color: "var(--fg-50)" }}
            >
              No phrases in this group
            </p>
            <p className="text-[13px] mb-5" style={{ color: "var(--fg-55)" }}>
              Try a different situation filter.
            </p>
            <button
              onClick={() => changeFilter(null)}
              className="text-[12px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95"
              style={{
                background: "color-mix(in srgb, var(--brand) 12%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
                color: "var(--brand-text)",
              }}
            >
              Show all phrases
            </button>
          </div>
        )}
        {visibleGroups.map((group) => (
          <div key={group.id} data-testid={`quick-group-${group.id}`}>
            <div className="flex items-baseline gap-2 mb-2.5 ml-1">
              <p
                className="text-[13px] font-bold"
                style={{ color: "var(--fg-80)" }}
              >
                {group.label}
              </p>
              <p className="text-[11px]" style={{ color: "var(--fg-50)" }}>
                {group.tag}
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--fg-02)",
                border: "1px solid var(--fg-05)",
              }}
            >
              {group.phrases.map((phrase, i) => {
                const isFav = isPhrasesFav(phrase.cardId, phrase.text);
                return (
                  <div
                    key={i}
                    className={`w-full flex items-center text-left transition-all ${
                      copiedPhrase === phrase.text
                        ? "bg-[color-mix(in_srgb,var(--brand)_8%,transparent)]"
                        : "bg-transparent hover:bg-[var(--fg-03)]"
                    }`}
                    style={{
                      borderBottom:
                        i < group.phrases.length - 1
                          ? "1px solid var(--fg-04)"
                          : "none",
                      minHeight: 56,
                    }}
                  >
                    <button
                      onClick={() => handleCopy(phrase.text)}
                      aria-label={`Copy phrase: ${phrase.text}`}
                      data-testid={`quick-copy-${group.id}-${i}`}
                      className="flex-1 min-w-0 px-5 py-3.5 text-left active:scale-[0.99]"
                    >
                      <span
                        className="text-[14px] leading-relaxed"
                        style={{
                          color:
                            copiedPhrase === phrase.text
                              ? "var(--brand-text)"
                              : "var(--fg-85)",
                        }}
                      >
                        {phrase.text}
                      </span>
                    </button>
                    <div className="flex items-center gap-1.5 pr-3 flex-shrink-0">
                      {copiedPhrase === phrase.text ? (
                        <Check
                          className="w-4 h-4"
                          style={{ color: "var(--brand-text)" }}
                          aria-hidden="true"
                        />
                      ) : (
                        <Copy
                          className="w-4 h-4"
                          style={{ color: "var(--fg-50)" }}
                          aria-hidden="true"
                        />
                      )}
                      <button
                        onClick={() =>
                          togglePhrase({
                            cardId: phrase.cardId,
                            cardTitle: phrase.cardTitle,
                            groupLabel: group.label,
                            text: phrase.text,
                          })
                        }
                        aria-label={
                          isFav
                            ? "Remove from favourites"
                            : "Save to favourites"
                        }
                        className="quick-phrase-favourite w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                        style={{
                          background: isFav
                            ? "color-mix(in srgb, var(--brand) 10%, transparent)"
                            : "transparent",
                        }}
                      >
                        <Heart
                          className="w-3.5 h-3.5"
                          style={{
                            color: isFav ? "var(--brand-text)" : "var(--fg-50)",
                          }}
                          fill={isFav ? "var(--brand-text)" : "none"}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        {remainingPhraseCount > 0 && (
          <button
            onClick={() => setVisibleCount((count) => count + QUICK_PAGE_SIZE)}
            aria-label={`Show more phrases (${remainingPhraseCount} remaining)`}
            className="w-full min-h-11 rounded-xl px-4 py-3 text-[12px] font-semibold transition-all active:scale-[0.99]"
            style={{
              background: "var(--fg-05)",
              border: "1px solid var(--fg-08)",
              color: "var(--brand-text)",
            }}
          >
            Show more phrases · {remainingPhraseCount} remaining
          </button>
        )}
        <div className="h-10" />
      </div>
    </div>
  );
}

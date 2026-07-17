import { useState, useEffect, useRef } from "react";
import { X, Check, Copy, Heart } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { CARD_DATA, isSpeakablePhrase } from "@/lib/cards";
import { useQuickMode } from "@/lib/quick-mode";
import { useFavourites } from "@/lib/favourites-context";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";

interface QuickPhrase {
  text: string;
  cardId: string;
  cardTitle: string;
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

const ALL_QUICK_GROUPS: QuickGroup[] = (() => {
  const groupsMap = new Map<string, QuickGroup>();

  for (const [cardId, card] of Object.entries(CARD_DATA)) {
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
        targetGroup.phrases.push({
          text: phraseText,
          cardId,
          cardTitle: cardMeta.title,
        });
      }
    }
  }
  // Groups whose entries were all stage directions have nothing speakable to offer
  return Array.from(groupsMap.values()).filter((g) => g.phrases.length > 0);
})();

export function QuickModeOverlay() {
  const { isOpen, setIsOpen } = useQuickMode();
  const { isPhrasesFav, togglePhrase } = useFavourites();
  const [quickFilter, setQuickFilter] = useState<string | null>(null);
  const { copied: copiedPhrase, copy: handleCopy, reset: resetCopied } = useCopyFeedback();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Trap focus inside the overlay while open (initial focus on close button)
  useFocusTrap(isOpen, overlayRef, { initialFocusRef: closeButtonRef });

  // Reset transient state when the overlay closes
  useEffect(() => {
    if (!isOpen) {
      setQuickFilter(null);
      resetCopied();
    }
  }, [isOpen, resetCopied]);

  // Escape key dismissal
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const filteredGroups = quickFilter
    ? ALL_QUICK_GROUPS.filter((g) => g.id === quickFilter)
    : ALL_QUICK_GROUPS;

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
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-[20px] font-bold text-foreground">Quick Lookup</h2>
            <p className="text-[12px]" style={{ color: "var(--fg-45)" }}>
              Tap a phrase to copy
            </p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={() => setIsOpen(false)}
            aria-label="Close Quick Lookup"
            data-testid="button-quick-close"
            className="w-11 h-11 flex items-center justify-center rounded-full transition-all active:scale-95"
            style={{ background: "var(--fg-05)" }}
          >
            <X className="w-5 h-5" style={{ color: "var(--fg-65)" }} />
          </button>
        </div>

        {/* ── Situation filters ── */}
        <div
          className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4"
          style={{ scrollbarWidth: "none" }}
          role="toolbar"
          aria-label="Filter phrases by situation"
        >
          <button
            onClick={() => setQuickFilter(null)}
            aria-pressed={!quickFilter}
            data-testid="quick-filter-all"
            className="flex-shrink-0 text-[11px] font-semibold px-4 rounded-full transition-all whitespace-nowrap"
            style={{
              background: !quickFilter ? "var(--brand)" : "var(--fg-06)",
              color: !quickFilter ? "var(--brand-contrast)" : "var(--fg-60)",
              minHeight: 44,
            }}
          >
            All
          </button>
          {ALL_QUICK_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setQuickFilter(quickFilter === g.id ? null : g.id)}
              aria-pressed={quickFilter === g.id}
              data-testid={`quick-filter-${g.id}`}
              className="flex-shrink-0 text-[11px] font-semibold px-4 rounded-full transition-all whitespace-nowrap"
              style={{
                background: quickFilter === g.id ? "var(--brand)" : "var(--fg-06)",
                color: quickFilter === g.id ? "var(--brand-contrast)" : "var(--fg-60)",
                minHeight: 44,
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Phrase list ── */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] space-y-5">
        {filteredGroups.length === 0 && (
          <div className="flex flex-col items-center py-14 text-center">
            <p className="text-[15px] font-semibold mb-1.5" style={{ color: "var(--fg-50)" }}>
              No phrases in this group
            </p>
            <p className="text-[13px] mb-5" style={{ color: "var(--fg-55)" }}>
              Try a different situation filter.
            </p>
            <button
              onClick={() => setQuickFilter(null)}
              className="text-[12px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95"
              style={{
                background: "color-mix(in srgb, var(--brand) 12%, transparent)",
                border: "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
                color: "var(--brand-text)",
              }}
            >
              Show all phrases
            </button>
          </div>
        )}
        {filteredGroups.map((group) => (
          <div key={group.id} data-testid={`quick-group-${group.id}`}>
            <div className="flex items-baseline gap-2 mb-2.5 ml-1">
              <p className="text-[13px] font-bold" style={{ color: "var(--fg-80)" }}>
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
                    onClick={() => handleCopy(phrase.text)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      // Only respond when the row itself is focused — let the
                      // nested favourite button handle its own keys
                      if (e.target !== e.currentTarget) return;
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleCopy(phrase.text);
                      }
                    }}
                    aria-label={`Copy phrase: ${phrase.text}`}
                    data-testid={`quick-copy-${group.id}-${i}`}
                    className={`w-full flex items-center justify-between text-left cursor-pointer transition-all active:scale-[0.99] ${
                      copiedPhrase === phrase.text
                        ? "bg-[color-mix(in_srgb,var(--brand)_8%,transparent)]"
                        : "bg-transparent hover:bg-[var(--fg-03)]"
                    }`}
                    style={{
                      borderBottom: i < group.phrases.length - 1 ? "1px solid var(--fg-04)" : "none",
                      minHeight: 56,
                      padding: "14px 20px",
                    }}
                  >
                    <p
                      className="text-[14px] leading-relaxed pr-3 flex-1"
                      style={{ color: copiedPhrase === phrase.text ? "var(--brand-text)" : "var(--fg-85)" }}
                    >
                      {phrase.text}
                    </p>
                    <div
                      className="flex items-center gap-1.5 flex-shrink-0"
                      onClick={e => e.stopPropagation()}
                    >
                      {copiedPhrase === phrase.text ? (
                        <Check className="w-4 h-4" style={{ color: "var(--brand-text)" }} />
                      ) : (
                        <Copy className="w-4 h-4 flex-shrink-0" style={{ color: "var(--fg-18)" }} />
                      )}
                      <button
                        onClick={() => togglePhrase({ cardId: phrase.cardId, cardTitle: phrase.cardTitle, groupLabel: group.label, text: phrase.text })}
                        aria-label={isFav ? "Remove from favourites" : "Save phrase"}
                        className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                        style={{ background: isFav ? "color-mix(in srgb, var(--brand) 10%, transparent)" : "transparent" }}
                      >
                        <Heart
                          className="w-3.5 h-3.5"
                          style={{ color: isFav ? "var(--brand-text)" : "var(--fg-20)" }}
                          fill={isFav ? "var(--brand-text)" : "none"}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="h-10" />
      </div>
    </div>
  );
}

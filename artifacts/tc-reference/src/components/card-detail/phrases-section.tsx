import { Check, ChevronRight, Copy, Heart } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { useFavourites } from "@/lib/favourites-context";
import { CARD_TITLE_MAP } from "./card-sections";
import { SectionAccordion } from "./section-accordion";

// ── Phrase Bank ──
export function PhrasesSection({
  cardId,
  cardData,
  expandedPhraseGroup,
  setExpandedPhraseGroup,
  copiedPhrase,
  handleCopy,
}: {
  cardId: string;
  cardData: CardData;
  expandedPhraseGroup: string | null;
  setExpandedPhraseGroup: (id: string | null) => void;
  copiedPhrase: string | null;
  handleCopy: (phrase: string) => void;
}) {
  const { isPhrasesFav, togglePhrase } = useFavourites();
  return (
    <SectionAccordion
      id="phrases"
      label="Phrase bank"
      subtitle={`${cardData.phraseBank.reduce((a, g) => a + g.phrases.length, 0)} phrases · ${cardData.phraseBank.length} groups`}
    >
      <div className="mb-4">
        <p className="text-[12px] text-foreground/60 mb-2">
          Filter by situation
        </p>
        <div
          className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5"
          style={{ scrollbarWidth: "none" }}
          role="toolbar"
          aria-label="Filter phrases by situation"
        >
          <button
            onClick={() => setExpandedPhraseGroup(null)}
            aria-pressed={expandedPhraseGroup === null}
            className="flex-shrink-0 text-[11px] font-semibold px-3.5 rounded-full transition-all"
            style={{
              minHeight: 44,
              background:
                expandedPhraseGroup === null ? "var(--brand)" : "var(--fg-06)",
              color:
                expandedPhraseGroup === null
                  ? "var(--brand-contrast)"
                  : "var(--fg-60)",
            }}
          >
            All groups
          </button>
          {cardData.phraseBank.map((g) => (
            <button
              key={g.id}
              onClick={() =>
                setExpandedPhraseGroup(
                  expandedPhraseGroup === g.id ? null : g.id,
                )
              }
              aria-pressed={expandedPhraseGroup === g.id}
              className="flex-shrink-0 text-[11px] font-semibold px-3.5 rounded-full transition-all whitespace-nowrap"
              style={{
                minHeight: 44,
                background:
                  expandedPhraseGroup === g.id
                    ? "var(--brand)"
                    : "var(--fg-06)",
                color:
                  expandedPhraseGroup === g.id
                    ? "var(--brand-contrast)"
                    : "var(--fg-60)",
              }}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-[12px] text-foreground/60 mb-3 font-medium">
        Tap a phrase to copy it
      </p>

      <div className="space-y-3">
        {cardData.phraseBank
          .filter(
            (g) => expandedPhraseGroup === null || g.id === expandedPhraseGroup,
          )
          .map((group) => {
            // "All groups" shows every phrase so nothing needs a second tap;
            // a header or chip narrows the bank to that group.
            const open =
              expandedPhraseGroup === null || expandedPhraseGroup === group.id;
            return (
              <div
                key={group.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "var(--fg-03)",
                  border: "1px solid var(--fg-06)",
                }}
                data-testid={`phrase-group-${group.id}`}
              >
                <button
                  onClick={() =>
                    setExpandedPhraseGroup(
                      expandedPhraseGroup === group.id ? null : group.id,
                    )
                  }
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3 transition-colors"
                  style={{ minHeight: 52 }}
                >
                  <div className="text-left min-w-0">
                    <p className="text-[14px] font-bold text-foreground/90">
                      {group.label}
                    </p>
                    {/* Many cards reuse the label as the tag; skip the echo */}
                    {group.tag && group.tag !== group.label && (
                      <p className="text-[11px] text-foreground/50 mt-0.5">
                        {group.tag}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[11px] font-bold text-foreground/60 px-2 py-1 rounded-full"
                      style={{ background: "var(--fg-05)" }}
                    >
                      {group.phrases.length}
                    </span>
                    <ChevronRight
                      className="w-4 h-4 text-foreground/40 transition-transform"
                      style={{
                        transform: open ? "rotate(90deg)" : "none",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </button>
                {open && (
                  <div style={{ borderTop: "1px solid var(--fg-05)" }}>
                    {group.phrases.map((phrase, i) => (
                      <div
                        key={i}
                        className="w-full flex items-center justify-between px-5 py-3 text-left"
                        style={{
                          background:
                            copiedPhrase === phrase
                              ? "color-mix(in srgb, var(--brand) 7%, transparent)"
                              : "transparent",
                          borderBottom:
                            i < group.phrases.length - 1
                              ? "1px solid var(--fg-03)"
                              : "none",
                          minHeight: 52,
                        }}
                      >
                        <p
                          className="text-[13px] leading-snug pr-3 flex-1"
                          style={{
                            color:
                              copiedPhrase === phrase
                                ? "var(--brand-text)"
                                : "var(--fg-78)",
                          }}
                        >
                          {phrase}
                        </p>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <button
                            onClick={() =>
                              togglePhrase({
                                cardId,
                                cardTitle: CARD_TITLE_MAP[cardId] ?? cardId,
                                groupLabel: group.label,
                                text: phrase,
                              })
                            }
                            aria-label={
                              isPhrasesFav(cardId, phrase)
                                ? "Remove from favourites"
                                : "Save to favourites"
                            }
                            data-testid={`phrase-fav-${group.id}-${i}`}
                            className="tap-target w-8 h-8 flex items-center justify-center rounded-full transition-all active:scale-95"
                            style={{
                              background: isPhrasesFav(cardId, phrase)
                                ? "color-mix(in srgb, var(--brand) 10%, transparent)"
                                : "transparent",
                            }}
                          >
                            <Heart
                              className="w-3.5 h-3.5"
                              style={{
                                color: isPhrasesFav(cardId, phrase)
                                  ? "var(--brand-text)"
                                  : "var(--fg-45)",
                              }}
                              fill={
                                isPhrasesFav(cardId, phrase)
                                  ? "var(--brand-text)"
                                  : "none"
                              }
                            />
                          </button>
                          <button
                            onClick={() => handleCopy(phrase)}
                            aria-label={`Copy: ${phrase}`}
                            data-testid={`phrase-copy-${group.id}-${i}`}
                            className="tap-target w-8 h-8 flex items-center justify-center rounded-full transition-all active:scale-95"
                          >
                            {copiedPhrase === phrase ? (
                              <Check
                                className="w-3.5 h-3.5"
                                style={{ color: "var(--brand-text)" }}
                              />
                            ) : (
                              <Copy
                                className="w-3.5 h-3.5"
                                style={{ color: "var(--fg-45)" }}
                              />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </SectionAccordion>
  );
}

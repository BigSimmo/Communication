import { Check, Copy, Heart } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { useFavourites } from "@/lib/favourites-context";
import { CARD_TITLE_MAP } from "./card-sections";
import { SectionAccordion } from "./section-accordion";

// ── Recovery ──
export function RecoverySection({
  cardId,
  cardData,
  copiedPhrase,
  handleCopy,
}: {
  cardId: string;
  cardData: CardData;
  copiedPhrase: string | null;
  handleCopy: (phrase: string) => void;
}) {
  const { isPhrasesFav, togglePhrase } = useFavourites();
  return (
    <SectionAccordion
      id="recovery"
      label="Recovery"
      color="var(--accent-emerald)"
      subtitle="Reset scripts for when it lands badly"
    >
      {cardData.bestRecoveryLine && (
        <div
          className="rounded-2xl p-5 mb-4"
          style={{
            background:
              "color-mix(in srgb, var(--accent-emerald) 8%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--accent-emerald) 20%, transparent)",
          }}
        >
          <p
            className="text-[11px] font-bold tracking-widest uppercase mb-2"
            style={{ color: "var(--accent-emerald)" }}
          >
            Best all-purpose line
          </p>
          <div className="flex items-start justify-between gap-3">
            <p className="text-[14px] font-semibold leading-relaxed text-foreground/90 flex-1">
              {cardData.bestRecoveryLine}
            </p>
            <button
              onClick={() => handleCopy(cardData.bestRecoveryLine!)}
              aria-label={`Copy: ${cardData.bestRecoveryLine}`}
              className="tap-target w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
              style={{
                background:
                  "color-mix(in srgb, var(--accent-emerald) 12%, transparent)",
              }}
            >
              {copiedPhrase === cardData.bestRecoveryLine ? (
                <Check
                  className="w-4 h-4"
                  style={{ color: "var(--accent-emerald)" }}
                />
              ) : (
                <Copy
                  className="w-4 h-4"
                  style={{ color: "var(--accent-emerald)" }}
                />
              )}
            </button>
          </div>
        </div>
      )}

      <div
        className="rounded-2xl overflow-hidden shadow-sm"
        style={{
          background: "var(--fg-03)",
          border: "1px solid var(--fg-06)",
        }}
      >
        {cardData.recoveryPhrases!.map((phrase, i) => (
          <div
            key={i}
            className="w-full flex items-center justify-between px-5 py-3"
            style={{
              background:
                copiedPhrase === phrase
                  ? "color-mix(in srgb, var(--brand) 7%, transparent)"
                  : "transparent",
              borderBottom:
                i < cardData.recoveryPhrases!.length - 1
                  ? "1px solid var(--fg-04)"
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
                    groupLabel: "Recovery",
                    text: phrase,
                  })
                }
                aria-label={
                  isPhrasesFav(cardId, phrase)
                    ? "Remove from favourites"
                    : "Save to favourites"
                }
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
                    isPhrasesFav(cardId, phrase) ? "var(--brand-text)" : "none"
                  }
                />
              </button>
              <button
                onClick={() => handleCopy(phrase)}
                aria-label={`Copy: ${phrase}`}
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
    </SectionAccordion>
  );
}

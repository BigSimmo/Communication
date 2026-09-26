import { Check, Copy, Heart } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { useFavourites } from "@/lib/favourites-context";
import { CARD_TITLE_MAP } from "./card-sections";
import { SectionAccordion } from "./section-accordion";

// ── Scenarios ──
export function ScenariosSection({
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
      id="scenarios"
      label="Scenario playbook"
      color="var(--accent-teal)"
      subtitle={`${cardData.scenarios.length} real-world scenarios`}
    >
      <div className="space-y-3">
        {cardData.scenarios.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl p-5 shadow-sm"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-06)",
            }}
          >
            <p className="text-[14px] font-bold text-foreground/90 mb-1.5">
              {s.situation}
            </p>
            <p className="text-[13px] text-foreground/60 mb-3 italic">
              "{s.move}"
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => handleCopy(s.phrase)}
                aria-label={`Copy: ${s.phrase}`}
                className="inline-flex items-center gap-2 text-[12px] font-medium px-4 py-2 rounded-full border transition-all"
                style={{
                  background:
                    copiedPhrase === s.phrase
                      ? "color-mix(in srgb, var(--brand) 15%, transparent)"
                      : "color-mix(in srgb, var(--brand) 8%, transparent)",
                  border:
                    copiedPhrase === s.phrase
                      ? "1px solid color-mix(in srgb, var(--brand) 40%, transparent)"
                      : "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
                  color: "var(--brand-text)",
                  minHeight: 44,
                }}
              >
                {copiedPhrase === s.phrase ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span className="min-w-0 break-words text-left">
                  {s.phrase}
                </span>
              </button>
              <button
                onClick={() =>
                  togglePhrase({
                    cardId,
                    cardTitle: CARD_TITLE_MAP[cardId] ?? cardId,
                    groupLabel: "Scenario",
                    text: s.phrase,
                  })
                }
                aria-label={
                  isPhrasesFav(cardId, s.phrase)
                    ? "Remove from favourites"
                    : "Save to favourites"
                }
                className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                style={{
                  background: isPhrasesFav(cardId, s.phrase)
                    ? "color-mix(in srgb, var(--brand) 10%, transparent)"
                    : "var(--fg-05)",
                }}
              >
                <Heart
                  className="w-4 h-4"
                  style={{
                    color: isPhrasesFav(cardId, s.phrase)
                      ? "var(--brand-text)"
                      : "var(--fg-45)",
                  }}
                  fill={
                    isPhrasesFav(cardId, s.phrase)
                      ? "var(--brand-text)"
                      : "none"
                  }
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </SectionAccordion>
  );
}

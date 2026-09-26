import { Check, Copy, Heart } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import type { FavouritePhrase } from "@/lib/favourites-state";
import { SectionAccordion, type CardSection } from "./section-accordion";
import { CARD_TITLE_MAP } from "./card-title-map";

export function LadderSection({
  cardData,
  cardId,
  open,
  onToggle,
  copiedPhrase,
  handleCopy,
  isPhrasesFav,
  togglePhrase,
}: {
  cardData: CardData;
  cardId: string;
  open: boolean;
  onToggle: (id: CardSection) => void;
  copiedPhrase: string | null;
  handleCopy: (text: string) => void;
  isPhrasesFav: (cardId: string, text: string) => boolean;
  togglePhrase: (phrase: FavouritePhrase) => void;
}) {
  return (
    <SectionAccordion
      id="ladder"
      open={open}
      onToggle={onToggle}
      label="Weak → Better → Best"
      color="var(--accent-orange)"
      subtitle={`${cardData.ladder.length} upgrade examples`}
    >
      <div className="space-y-4">
        {cardData.ladder.map((row, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-sm flex flex-col"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-05)",
            }}
          >
            <div
              className="flex"
              style={{ borderBottom: "1px solid var(--fg-05)" }}
            >
              <div
                className="flex-1 p-4 bg-red-500/5"
                style={{ borderRight: "1px solid var(--fg-05)" }}
              >
                <p
                  className="text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: "var(--accent-red)" }}
                >
                  Weak
                </p>
                <p className="text-[12px] text-foreground/60 leading-snug">
                  {row.weak}
                </p>
              </div>
              <div className="flex-1 p-4 bg-blue-500/5">
                <p
                  className="text-[10px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: "var(--accent-blue)" }}
                >
                  Better
                </p>
                <p className="text-[12px] text-foreground/70 leading-snug">
                  {row.better}
                </p>
              </div>
            </div>
            <div className="p-4 bg-green-500/5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p
                    className="text-[10px] font-bold tracking-widest uppercase mb-2"
                    style={{ color: "var(--accent-green)" }}
                  >
                    Best
                  </p>
                  <p className="text-[13px] font-medium text-foreground/90 leading-snug">
                    {row.best}
                  </p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0 mt-5">
                  <button
                    onClick={() =>
                      togglePhrase({
                        cardId,
                        cardTitle: CARD_TITLE_MAP[cardId] ?? cardId,
                        groupLabel: "Ladder",
                        text: row.best,
                      })
                    }
                    aria-label={
                      isPhrasesFav(cardId, row.best)
                        ? "Remove from favourites"
                        : "Save phrase"
                    }
                    className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                    style={{
                      background: isPhrasesFav(cardId, row.best)
                        ? "color-mix(in srgb, var(--brand) 10%, transparent)"
                        : "transparent",
                    }}
                  >
                    <Heart
                      className="w-3.5 h-3.5"
                      style={{
                        color: isPhrasesFav(cardId, row.best)
                          ? "var(--brand-text)"
                          : "var(--fg-25)",
                      }}
                      fill={
                        isPhrasesFav(cardId, row.best)
                          ? "var(--brand-text)"
                          : "none"
                      }
                    />
                  </button>
                  <button
                    onClick={() => handleCopy(row.best)}
                    aria-label={`Copy: ${row.best}`}
                    className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
                  >
                    {copiedPhrase === row.best ? (
                      <Check
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--brand-text)" }}
                      />
                    ) : (
                      <Copy
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--fg-25)" }}
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionAccordion>
  );
}

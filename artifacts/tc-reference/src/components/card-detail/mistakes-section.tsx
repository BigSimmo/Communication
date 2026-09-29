import { Check, Copy } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { SectionAccordion } from "./section-accordion";

// ── Common Mistakes ──
export function MistakesSection({
  cardData,
  copiedPhrase,
  handleCopy,
}: {
  cardData: CardData;
  copiedPhrase: string | null;
  handleCopy: (phrase: string) => void;
}) {
  return (
    <SectionAccordion
      id="mistakes"
      label="Common mistakes"
      subtitle={`${cardData.commonMistakes?.length ?? 0} pitfalls and fixes`}
    >
      <div className="space-y-3">
        {cardData.commonMistakes!.map((m) => (
          <div
            key={m.mistake}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-05)",
            }}
          >
            <div
              className="px-4 py-3"
              style={{
                background:
                  "color-mix(in srgb, var(--accent-red) 6%, transparent)",
                borderBottom: "1px solid var(--fg-05)",
              }}
            >
              <p className="text-[13px] font-bold text-foreground/90">
                {m.mistake}
              </p>
            </div>
            <div className="p-4 space-y-3">
              {/* Labels sit above the text on phones, beside it on wider screens */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2.5">
                <span
                  className="text-[11px] font-bold tracking-wider uppercase sm:mt-1 flex-shrink-0 sm:w-[72px]"
                  style={{ color: "var(--accent-red)" }}
                >
                  Sounds like
                </span>
                <p
                  className="text-[13px] flex-1 italic"
                  style={{ color: "var(--fg-60)" }}
                >
                  {m.soundsLike}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2.5">
                <span
                  className="text-[11px] font-bold tracking-wider uppercase sm:mt-1 flex-shrink-0 sm:w-[72px]"
                  style={{ color: "var(--accent-green)" }}
                >
                  Better
                </span>
                <div className="flex-1 flex items-start justify-between gap-2">
                  <p
                    className="text-[13px] min-w-0"
                    style={{ color: "var(--fg-85)" }}
                  >
                    {m.better}
                  </p>
                  <button
                    onClick={() => handleCopy(m.better)}
                    aria-label={`Copy: ${m.better}`}
                    className="tap-target w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
                  >
                    {copiedPhrase === m.better ? (
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
            </div>
          </div>
        ))}
      </div>
    </SectionAccordion>
  );
}

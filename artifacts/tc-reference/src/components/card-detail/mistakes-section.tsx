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
      color="#f87171"
      subtitle={`${cardData.commonMistakes?.length ?? 0} pitfalls + fixes`}
    >
      <div className="space-y-3">
        {cardData.commonMistakes!.map((m) => (
          <div
            key={m.mistake}
            className="rounded-2xl overflow-hidden shadow-sm"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-05)",
            }}
          >
            <div
              className="px-4 py-3"
              style={{
                background: "rgba(239,68,68,0.06)",
                borderBottom: "1px solid var(--fg-05)",
              }}
            >
              <p className="text-[13px] font-bold text-foreground/90">
                {m.mistake}
              </p>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2.5">
                <span
                  className="text-[10px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]"
                  style={{ color: "rgba(248,113,113,0.85)" }}
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
              <div className="flex items-start gap-2.5">
                <span
                  className="text-[10px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]"
                  style={{ color: "rgba(74,222,128,0.9)" }}
                >
                  Better
                </span>
                <div className="flex-1 flex items-start justify-between gap-2">
                  <p className="text-[13px]" style={{ color: "var(--fg-85)" }}>
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

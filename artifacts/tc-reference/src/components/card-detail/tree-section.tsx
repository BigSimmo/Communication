import { Check } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { SectionAccordion } from "./section-accordion";
import { quoted } from "@/lib/utils";

// ── Decision Tree ──
export function TreeSection({
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
      id="tree"
      label="Decision tree"
      subtitle={`${cardData.decisionTree.length} situations and the move for each`}
    >
      {/* The rail is decoration; phones give its width back to the text */}
      <div className="space-y-2.5 sm:space-y-3 relative sm:pl-6">
        <div
          className="hidden sm:block absolute left-2.5 top-6 bottom-6 w-px"
          style={{ background: "var(--fg-08)" }}
          aria-hidden="true"
        />
        {cardData.decisionTree.map((item, i) => (
          <div key={i} className="relative">
            <div
              className="hidden sm:flex absolute -left-6 top-4 w-4 h-4 rounded-full bg-background border border-primary/40 items-center justify-center z-10"
              aria-hidden="true"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <div
              className="rounded-2xl p-4"
              style={{
                background: "var(--fg-03)",
                border: "1px solid var(--fg-06)",
              }}
            >
              <p className="text-[14px] font-bold text-foreground/90 mb-1.5">
                {item.condition}
              </p>
              <p className="text-[13px] text-foreground/60 mb-3 leading-snug">
                {item.action}
              </p>
              {item.phrase && (
                <button
                  onClick={() => handleCopy(item.phrase)}
                  aria-label={`Copy: ${item.phrase}`}
                  className="inline-flex items-center gap-1.5 text-[12px] leading-snug text-left font-medium px-3 py-2 rounded-xl border transition-all"
                  style={{
                    background:
                      copiedPhrase === item.phrase
                        ? "color-mix(in srgb, var(--brand) 15%, transparent)"
                        : "color-mix(in srgb, var(--brand) 6%, transparent)",
                    border:
                      copiedPhrase === item.phrase
                        ? "1px solid color-mix(in srgb, var(--brand) 35%, transparent)"
                        : "1px solid color-mix(in srgb, var(--brand) 15%, transparent)",
                    color: "var(--brand-text)",
                    minHeight: 44,
                  }}
                >
                  {copiedPhrase === item.phrase && (
                    <Check className="w-3.5 h-3.5" />
                  )}
                  {quoted(item.phrase)}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionAccordion>
  );
}

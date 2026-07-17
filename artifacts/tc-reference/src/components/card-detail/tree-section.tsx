import { Check } from "lucide-react";
import type { CardData } from "@/lib/cards";
import { SectionAccordion, type CardSection } from "./section-accordion";

export function TreeSection({
  cardData, open, onToggle, copiedPhrase, handleCopy,
}: {
  cardData: CardData;
  open: boolean;
  onToggle: (id: CardSection) => void;
  copiedPhrase: string | null;
  handleCopy: (text: string) => void;
}) {
  return (
    <SectionAccordion
      id="tree"
      open={open}
      onToggle={onToggle}
      label="Decision Tree"
      color="var(--accent-purple)"
      subtitle={`${cardData.decisionTree.length} situation → action paths`}
    >
      <div className="space-y-3 relative pl-6">
        <div className="absolute left-2.5 top-6 bottom-6 w-px" style={{ background: "var(--fg-08)" }} aria-hidden="true" />
        {cardData.decisionTree.map((item, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-6 top-4 w-4 h-4 rounded-full bg-background border border-primary/40 flex items-center justify-center z-10" aria-hidden="true">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            <div className="rounded-2xl p-4 shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
              <p className="text-[14px] font-bold text-foreground/90 mb-1.5">{item.condition}</p>
              <p className="text-[13px] text-foreground/60 mb-3 leading-snug">{item.action}</p>
              {item.phrase && (
                <button
                  onClick={() => handleCopy(item.phrase)}
                  aria-label={`Copy: ${item.phrase}`}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full border transition-all"
                  style={{
                    background: copiedPhrase === item.phrase ? "color-mix(in srgb, var(--brand) 15%, transparent)" : "color-mix(in srgb, var(--brand) 6%, transparent)",
                    border: copiedPhrase === item.phrase ? "1px solid color-mix(in srgb, var(--brand) 35%, transparent)" : "1px solid color-mix(in srgb, var(--brand) 15%, transparent)",
                    color: "var(--brand-text)",
                    minHeight: 44,
                  }}
                >
                  {copiedPhrase === item.phrase && <Check className="w-3.5 h-3.5" />}
                  "{item.phrase}"
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionAccordion>
  );
}

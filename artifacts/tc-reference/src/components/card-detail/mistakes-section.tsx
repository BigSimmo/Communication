import { Check, Copy } from "lucide-react";
import type { CardData } from "@/lib/cards";
import { SectionAccordion, type CardSection } from "./section-accordion";

export function MistakesSection({
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
      id="mistakes"
      open={open}
      onToggle={onToggle}
      label="Common Mistakes"
      color="var(--accent-red)"
      subtitle={`${cardData.commonMistakes?.length ?? 0} pitfalls + fixes`}
    >
      <div className="space-y-3">
        {cardData.commonMistakes!.map((m) => (
          <div key={m.mistake} className="rounded-2xl overflow-hidden shadow-sm" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-05)" }}>
            <div className="px-4 py-3" style={{ background: "color-mix(in srgb, var(--accent-red) 6%, transparent)", borderBottom: "1px solid var(--fg-05)" }}>
              <p className="text-[13px] font-bold text-foreground/90">{m.mistake}</p>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="text-[9px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]" style={{ color: "color-mix(in srgb, var(--accent-red) 85%, transparent)" }}>Sounds like</span>
                <p className="text-[13px] flex-1 italic" style={{ color: "var(--fg-60)" }}>{m.soundsLike}</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[9px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]" style={{ color: "color-mix(in srgb, var(--accent-green) 90%, transparent)" }}>Better</span>
                <div className="flex-1 flex items-start justify-between gap-2">
                  <p className="text-[13px]" style={{ color: "var(--fg-85)" }}>{m.better}</p>
                  <button
                    onClick={() => handleCopy(m.better)}
                    aria-label={`Copy: ${m.better}`}
                    className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 transition-all active:scale-95"
                  >
                    {copiedPhrase === m.better
                      ? <Check className="w-3.5 h-3.5" style={{ color: "var(--brand-text)" }} />
                      : <Copy className="w-3.5 h-3.5" style={{ color: "var(--fg-20)" }} />
                    }
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

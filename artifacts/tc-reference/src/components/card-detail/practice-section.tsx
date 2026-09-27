import type { CardData } from "@/lib/card-types";
import { SectionAccordion } from "./section-accordion";

// ── Practice Protocol ──
export function PracticeSection({ cardData }: { cardData: CardData }) {
  return (
    <SectionAccordion
      id="practice"
      label="Practice protocol"
      subtitle={`${cardData.drill.length}-day programme`}
    >
      <div className="space-y-3">
        {cardData.drill.map((d, i) => (
          <div
            key={i}
            className="flex gap-4 items-start p-4 rounded-2xl shadow-sm"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-05)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "var(--fg-05)",
                border: "1px solid var(--fg-10)",
              }}
              aria-label={d.day}
            >
              <span className="text-[11px] font-bold text-foreground/50">
                {d.day}
              </span>
            </div>
            <div>
              <p className="text-[14px] font-bold text-foreground/90 mb-1">
                {d.title}
              </p>
              <p className="text-[13px] text-foreground/60 leading-relaxed">
                {d.task}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionAccordion>
  );
}

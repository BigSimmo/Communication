import { Check, Zap } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { SectionAccordion } from "./section-accordion";

// ── Calibration ──
export function CalibrationSection({ cardData }: { cardData: CardData }) {
  return (
    <SectionAccordion
      id="calibration"
      label="Calibration"
      color="#fb7185"
      subtitle="Is it working? When to adjust"
    >
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-5 h-5 text-green-400" aria-hidden="true" />
            <p className="text-[14px] font-bold text-green-400 uppercase tracking-wide">
              It is working if...
            </p>
          </div>
          <ul className="space-y-3">
            {cardData.calibration.working.map((item, i) => (
              <li key={i} className="flex gap-3 text-[13px] text-foreground/80">
                <span className="text-green-500/50 mt-0.5" aria-hidden="true">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-red-400" aria-hidden="true" />
            <p className="text-[14px] font-bold text-red-400 uppercase tracking-wide">
              Adjust if...
            </p>
          </div>
          <ul className="space-y-3">
            {cardData.calibration.adjust.map((item, i) => (
              <li key={i} className="flex gap-3 text-[13px] text-foreground/80">
                <span className="text-red-500/50 mt-0.5" aria-hidden="true">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionAccordion>
  );
}

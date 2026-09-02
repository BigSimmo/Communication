import { Check, Zap } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { SectionAccordion, type CardSection } from "./section-accordion";

export function CalibrationSection({
  cardData, open, onToggle,
}: {
  cardData: CardData;
  open: boolean;
  onToggle: (id: CardSection) => void;
}) {
  return (
    <SectionAccordion
      id="calibration"
      open={open}
      onToggle={onToggle}
      label="Calibration"
      color="var(--accent-rose)"
      subtitle="Is it working? When to adjust"
    >
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Check className="w-5 h-5" style={{ color: "var(--accent-green)" }} aria-hidden="true" />
            <p className="text-[14px] font-bold uppercase tracking-wide" style={{ color: "var(--accent-green)" }}>It is working if...</p>
          </div>
          <ul className="space-y-3">
            {cardData.calibration.working.map((item, i) => (
              <li key={i} className="flex gap-3 text-[13px] text-foreground/80">
                <span className="mt-0.5" style={{ color: "var(--accent-green)", opacity: 0.5 }} aria-hidden="true">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5" style={{ color: "var(--accent-red)" }} aria-hidden="true" />
            <p className="text-[14px] font-bold uppercase tracking-wide" style={{ color: "var(--accent-red)" }}>Adjust if...</p>
          </div>
          <ul className="space-y-3">
            {cardData.calibration.adjust.map((item, i) => (
              <li key={i} className="flex gap-3 text-[13px] text-foreground/80">
                <span className="mt-0.5" style={{ color: "var(--accent-red)", opacity: 0.5 }} aria-hidden="true">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionAccordion>
  );
}

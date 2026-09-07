import { X } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { SectionAccordion, type CardSection } from "./section-accordion";

export function WhySection({
  cardData, open, onToggle,
}: {
  cardData: CardData;
  open: boolean;
  onToggle: (id: CardSection) => void;
}) {
  return (
    <SectionAccordion
      id="why"
      open={open}
      onToggle={onToggle}
      label="Why It Works"
      color="var(--accent-purple)"
      subtitle="Psychological principle & what it builds"
    >
      <div className="rounded-2xl p-5 mb-4" style={{ background: "color-mix(in srgb, var(--accent-purple) 8%, transparent)", border: "1px solid color-mix(in srgb, var(--accent-purple) 20%, transparent)" }}>
        <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: "color-mix(in srgb, var(--accent-purple) 85%, transparent)" }}>What they feel</p>
        <p className="text-[15px] font-semibold leading-relaxed" style={{ color: "var(--fg-90)" }}>"{cardData.influencePayoff!.feeling}"</p>
      </div>

      <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
        <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">The principle</p>
        <p className="text-[14px] leading-relaxed text-foreground/80">{cardData.influencePayoff!.principle}</p>
      </div>

      <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}>
        <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-3">What it builds</p>
        <div className="flex flex-wrap gap-2">
          {cardData.influencePayoff!.gains.map((g) => (
            <span key={g} className="text-[12px] font-medium px-3 py-1.5 rounded-full" style={{ background: "color-mix(in srgb, var(--accent-purple) 10%, transparent)", border: "1px solid color-mix(in srgb, var(--accent-purple) 20%, transparent)", color: "color-mix(in srgb, var(--accent-purple) 95%, transparent)" }}>{g}</span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-5 mb-4" style={{ background: "color-mix(in srgb, var(--accent-red) 5%, transparent)", border: "1px solid color-mix(in srgb, var(--accent-red) 14%, transparent)" }}>
        <p className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "color-mix(in srgb, var(--accent-red) 80%, transparent)" }}>Why most people fail</p>
        <ul className="space-y-2">
          {cardData.influencePayoff!.whyMostFail.map((item) => (
            <li key={item} className="flex gap-2.5 items-start">
              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "color-mix(in srgb, var(--accent-red) 50%, transparent)" }} aria-hidden="true" />
              <p className="text-[13px] leading-snug" style={{ color: "var(--fg-65)" }}>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {cardData.whatItIsNot && cardData.whatItIsNot.length > 0 && (
        <div className="rounded-2xl p-5" style={{ background: "var(--fg-02)", border: "1px solid var(--fg-04)" }}>
          <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-3">What it is not</p>
          <ul className="space-y-2.5">
            {cardData.whatItIsNot.map((item) => (
              <li key={item} className="flex gap-2.5 items-start">
                <X className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "var(--fg-30)" }} aria-hidden="true" />
                <p className="text-[13px] leading-snug text-foreground/70">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </SectionAccordion>
  );
}

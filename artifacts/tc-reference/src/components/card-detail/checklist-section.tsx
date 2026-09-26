import { Check } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { SectionAccordion, type CardSection } from "./section-accordion";

export function ChecklistSection({
  cardData,
  open,
  onToggle,
  checkedItems,
  toggleCheck,
}: {
  cardData: CardData;
  open: boolean;
  onToggle: (id: CardSection) => void;
  checkedItems: Set<number>;
  toggleCheck: (i: number) => void;
}) {
  return (
    <SectionAccordion
      id="checklist"
      open={open}
      onToggle={onToggle}
      label="After-Action Checklist"
      color="var(--accent-emerald)"
      subtitle={`${checkedItems.size} / ${cardData.checklist.length} items checked`}
    >
      <div
        className="mb-4 rounded-full p-1.5 flex items-center gap-3"
        style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}
        role="progressbar"
        aria-valuenow={checkedItems.size}
        aria-valuemin={0}
        aria-valuemax={cardData.checklist.length}
        aria-label={`${checkedItems.size} of ${cardData.checklist.length} items checked`}
      >
        <div
          className="flex-1 h-2 rounded-full overflow-hidden ml-2"
          style={{ background: "var(--fg-05)" }}
        >
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            // Guard the divide: an empty checklist must render 0%, not NaN%
            style={{
              width:
                cardData.checklist.length > 0
                  ? `${(checkedItems.size / cardData.checklist.length) * 100}%`
                  : "0%",
            }}
          />
        </div>
        <span className="text-[11px] font-bold text-primary px-2">
          {checkedItems.size} / {cardData.checklist.length}
        </span>
      </div>
      <div
        className="rounded-2xl overflow-hidden shadow-sm"
        style={{ background: "var(--fg-03)", border: "1px solid var(--fg-05)" }}
      >
        {cardData.checklist.map((item, i) => (
          <button
            key={i}
            onClick={() => toggleCheck(i)}
            aria-checked={checkedItems.has(i)}
            role="checkbox"
            data-testid={`checklist-item-${i}`}
            className={`w-full flex gap-4 p-4 text-left transition-all ${
              checkedItems.has(i)
                ? "bg-[color-mix(in_srgb,var(--brand)_4%,transparent)]"
                : "bg-transparent hover:bg-[var(--fg-02)]"
            }`}
            style={{
              borderBottom:
                i < cardData.checklist.length - 1
                  ? "1px solid var(--fg-03)"
                  : "none",
              minHeight: 52,
            }}
          >
            <div
              className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
              style={{
                background: checkedItems.has(i)
                  ? "var(--brand)"
                  : "var(--fg-05)",
                border: checkedItems.has(i) ? "none" : "1px solid var(--fg-10)",
              }}
              aria-hidden="true"
            >
              {checkedItems.has(i) && (
                <Check
                  className="w-3.5 h-3.5"
                  style={{ color: "var(--brand-contrast)" }}
                />
              )}
            </div>
            <span
              className="text-[13px] leading-snug transition-colors"
              style={{
                color: checkedItems.has(i) ? "var(--fg-35)" : "var(--fg-78)",
                textDecoration: checkedItems.has(i) ? "line-through" : "none",
              }}
            >
              {item}
            </span>
          </button>
        ))}
      </div>
    </SectionAccordion>
  );
}

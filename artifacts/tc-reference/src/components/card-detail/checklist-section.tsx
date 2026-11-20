import { Check } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { CardBlock, Surface } from "./card-ui";

// ── After you use it ──
export function ChecklistSection({
  cardData,
  checkedItems,
  toggleCheck,
}: {
  cardData: CardData;
  checkedItems: Set<number>;
  toggleCheck: (i: number) => void;
}) {
  const total = cardData.checklist.length;
  return (
    <CardBlock
      id="checklist"
      title="After you use it"
      meta={
        <span data-testid="checklist-count" aria-live="polite">
          {checkedItems.size} of {total} checked
        </span>
      }
    >
      <Surface divided>
        {cardData.checklist.map((item, i) => {
          const checked = checkedItems.has(i);
          return (
            <button
              key={i}
              type="button"
              role="checkbox"
              aria-checked={checked}
              onClick={() => toggleCheck(i)}
              data-testid={`checklist-item-${i}`}
              className="w-full flex items-start gap-3 px-4 py-[13px] min-h-14 text-left transition-colors active:bg-[var(--fg-05)]"
            >
              <span
                className="w-6 h-6 rounded-[7px] flex-none flex items-center justify-center transition-colors"
                style={{
                  background: checked ? "var(--brand)" : "transparent",
                  border: checked
                    ? "2px solid var(--brand)"
                    : "2px solid var(--fg-25)",
                }}
                aria-hidden="true"
              >
                {checked && (
                  <Check
                    className="w-4 h-4"
                    strokeWidth={3}
                    style={{ color: "var(--brand-contrast)" }}
                  />
                )}
              </span>
              <span
                className="flex-1 min-w-0 text-[15px] leading-[1.45] pt-px"
                style={{
                  color: checked ? "var(--fg-60)" : "var(--fg-90)",
                  textDecoration: checked ? "line-through" : "none",
                }}
              >
                {item}
              </span>
            </button>
          );
        })}
      </Surface>
    </CardBlock>
  );
}

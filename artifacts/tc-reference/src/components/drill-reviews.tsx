import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { categoryStyleFor } from "@/lib/design-tokens";
import type { CardSRS } from "@/lib/drill-state";
import { DRILL_CARD_META, drillCardTitle, dueLabel } from "@/lib/drill-view";

/** Rows shown before "Show all". */
const FIRST_ROWS = 3;

interface DrillReviewsProps {
  /** Reviews due, most overdue first. */
  due: readonly CardSRS[];
  onOpen: (cardId: string) => void;
}

/**
 * Techniques whose review has come round, most overdue first. Each row
 * opens a short review. Renders nothing when no review is due.
 */
export function DrillReviews({ due, onOpen }: DrillReviewsProps) {
  const [showAll, setShowAll] = useState(false);
  if (due.length === 0) return null;
  const rows = showAll ? due : due.slice(0, FIRST_ROWS);
  const hidden = due.length - rows.length;

  return (
    <section
      aria-labelledby="drill-reviews-heading"
      className="flex flex-col gap-2"
      data-testid="drill-reviews"
    >
      <div className="flex items-center justify-between gap-3">
        <h2
          id="drill-reviews-heading"
          className="text-[12px] font-bold uppercase tracking-[0.06em]"
          style={{ color: "var(--fg-60)" }}
        >
          Reviews due
        </h2>
        <span className="text-[13px]" style={{ color: "var(--fg-60)" }}>
          {due.length === 1 ? "1 technique" : `${due.length} techniques`}
        </span>
      </div>
      <ul
        className="rounded-[20px] overflow-hidden divide-y divide-[var(--fg-07)]"
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--fg-07)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {rows.map((item) => {
          const category = DRILL_CARD_META[item.cardId]?.category ?? "";
          return (
            <li key={item.cardId}>
              <button
                type="button"
                onClick={() => onOpen(item.cardId)}
                data-testid={`drill-review-${item.cardId}`}
                className="w-full flex items-center gap-3 px-4 py-[13px] min-h-14 text-left transition-colors hover:bg-[var(--surface-card-hover)] active:bg-[var(--surface-card-hover)]"
              >
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full flex-none"
                  style={{ background: categoryStyleFor(category).color }}
                />
                <span className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <span
                    className="text-[17px] leading-[1.3] font-semibold"
                    style={{ color: "var(--fg-90)" }}
                  >
                    {drillCardTitle(item.cardId)}
                  </span>
                  <span
                    className="text-[13px] leading-[1.35]"
                    style={{ color: "var(--fg-60)" }}
                  >
                    {dueLabel(item.nextReviewDate)}
                  </span>
                </span>
                <ChevronRight
                  className="w-5 h-5 flex-none"
                  style={{ color: "var(--fg-45)" }}
                  aria-hidden="true"
                />
              </button>
            </li>
          );
        })}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="self-start h-11 px-1 text-[15px] font-bold"
          style={{ color: "var(--brand-text)" }}
        >
          Show all {due.length}
        </button>
      )}
    </section>
  );
}

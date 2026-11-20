import { useId } from "react";
import { DRILL_RATINGS, type DrillRating } from "@/lib/drill-state";
import { gapLabel, RATING_LABELS } from "@/lib/drill-view";

interface DrillRatingProps {
  value: DrillRating | null;
  onChange: (rating: DrillRating) => void;
  /** Days until the card returns for each rating (see previewGaps). */
  gaps: Record<DrillRating, number>;
  /** The question above the buttons. */
  prompt?: string;
}

/**
 * Not yet / Getting there / Confident. Each button says when the technique
 * comes back if you pick it, so the choice is about timing, not a score.
 */
export function DrillRating({
  value,
  onChange,
  gaps,
  prompt = "How does this technique feel?",
}: DrillRatingProps) {
  const promptId = useId();
  // A first rating comes back tomorrow whichever is picked; three identical
  // hints would only suggest the choice doesn't matter, so say it once.
  const sameGap = DRILL_RATINGS.every((r) => gaps[r] === gaps["not-yet"]);
  return (
    <div
      role="group"
      aria-labelledby={promptId}
      className="flex flex-col gap-2"
      data-testid="drill-rating"
    >
      <p
        id={promptId}
        className="text-[12px] font-bold uppercase tracking-[0.06em]"
        style={{ color: "var(--fg-60)" }}
      >
        {prompt}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {DRILL_RATINGS.map((rating) => {
          const selected = rating === value;
          return (
            <button
              key={rating}
              type="button"
              aria-pressed={selected}
              aria-label={
                sameGap
                  ? undefined
                  : `${RATING_LABELS[rating]}: ${gapLabel(gaps[rating]).toLowerCase()}`
              }
              onClick={() => onChange(rating)}
              data-testid={`drill-rating-${rating}`}
              className="min-h-[52px] px-1 py-2 rounded-[14px] flex flex-col items-center justify-center gap-0.5 text-center transition-transform active:scale-[0.98] motion-reduce:transition-none"
              style={{
                background: selected
                  ? "color-mix(in srgb, var(--brand) 14%, transparent)"
                  : "var(--fg-08)",
                boxShadow: selected ? "inset 0 0 0 2px var(--brand)" : "none",
              }}
            >
              <span
                className="text-[15px] leading-tight font-bold"
                style={{ color: "var(--fg-90)" }}
              >
                {RATING_LABELS[rating]}
              </span>
              {!sameGap && (
                <span
                  className="text-[13px] leading-tight font-medium"
                  style={{ color: "var(--fg-60)" }}
                >
                  {gapLabel(gaps[rating])}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {sameGap && (
        <p
          className="text-[13px] leading-[1.35]"
          style={{ color: "var(--fg-60)" }}
          data-testid="drill-rating-note"
        >
          {gapLabel(gaps["not-yet"])} either way. Your rating sets the gaps
          after that.
        </p>
      )}
    </div>
  );
}

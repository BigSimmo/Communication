import { useEffect, useState } from "react";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { DrillRating } from "@/components/drill-rating";
import { DrillRecall } from "@/components/drill-recall";
import { loadCard } from "@/lib/card-loader";
import type { CardData } from "@/lib/card-types";
import { categoryStyleFor } from "@/lib/design-tokens";
import type { CardSRS, DrillRating as Rating } from "@/lib/drill-state";
import { DRILL_CARD_META, drillCardTitle, previewGaps } from "@/lib/drill-view";

interface DrillReviewSheetProps {
  cardId: string;
  /** The card's review record, for the "back in" hints. */
  srs: CardSRS | undefined;
  /** Rating a review saves it; the parent closes the sheet. */
  onRate: (cardId: string, rating: Rating) => void;
  onOpenCard: (cardId: string) => void;
  onClose: () => void;
}

/**
 * One review: recall the technique's move, check it, say how it feels.
 * The rating sets when it comes back, exactly as it does after a drill.
 */
export function DrillReviewSheet({
  cardId,
  srs,
  onRate,
  onOpenCard,
  onClose,
}: DrillReviewSheetProps) {
  const [loaded, setLoaded] = useState<{
    data: CardData | null;
    failed: boolean;
  } | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    loadCard(cardId).then(
      (data) => {
        if (active) setLoaded({ data, failed: !data });
      },
      () => {
        if (active) setLoaded({ data: null, failed: true });
      },
    );
    return () => {
      active = false;
    };
  }, [cardId, attempt]);

  const category = categoryStyleFor(DRILL_CARD_META[cardId]?.category ?? "");
  const move = loaded?.data?.overview.minimumViableMove;

  return (
    <BottomSheet
      open
      onClose={onClose}
      title="Review"
      testId="drill-review-sheet"
      footer={
        <DrillRating
          value={null}
          onChange={(rating) => onRate(cardId, rating)}
          gaps={previewGaps(cardId, srs)}
        />
      }
    >
      <div className="flex flex-col gap-4 pt-1">
        <div className="flex flex-col gap-1">
          <p
            className="flex items-center gap-2 text-[13px] font-semibold"
            style={{ color: "var(--fg-70)" }}
          >
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full flex-none"
              style={{ background: category.color }}
            />
            {category.label}
          </p>
          <h3
            className="text-[22px] leading-[1.2] font-bold tracking-[-0.01em]"
            style={{ color: "var(--fg-90)" }}
          >
            {drillCardTitle(cardId)}
          </h3>
        </div>

        <div
          className="rounded-[20px] p-4 flex flex-col gap-2"
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--fg-07)",
          }}
        >
          <p
            className="text-[17px] leading-[1.3] font-semibold"
            style={{ color: "var(--fg-90)" }}
          >
            What is the move?
          </p>
          {move ? (
            // Keyed so a retry or another card starts hidden again
            <DrillRecall key={cardId} move={move} />
          ) : loaded?.failed ? (
            <div className="flex flex-col items-start gap-2.5">
              <p
                role="alert"
                className="text-[15px] leading-[1.45]"
                style={{ color: "var(--fg-70)" }}
              >
                This technique can't be loaded right now. You can still rate it
                from memory.
              </p>
              <Button
                size="sm"
                onClick={() => {
                  setLoaded(null);
                  setAttempt((n) => n + 1);
                }}
              >
                Retry
              </Button>
            </div>
          ) : (
            <p
              aria-busy={loaded === null}
              className="text-[15px] leading-[1.45]"
              style={{ color: "var(--fg-70)" }}
            >
              {loaded === null
                ? "Loading…"
                : "Say it in your head, then rate how it feels."}
            </p>
          )}
        </div>

        <Button
          variant="quiet"
          size="sm"
          className="self-start px-1"
          onClick={() => onOpenCard(cardId)}
        >
          Open the full technique
        </Button>
      </div>
    </BottomSheet>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DrillRecallProps {
  move: string;
  /** Controlled reveal. Leave both out and the component keeps its own. */
  shown?: boolean;
  onShow?: () => void;
}

/**
 * Active-recall step for the daily drill and for reviews: ask the reader to
 * bring the card's minimum viable move to mind before showing it. One tap
 * reveals it.
 */
export function DrillRecall({ move, shown, onShow }: DrillRecallProps) {
  const [ownShown, setOwnShown] = useState(false);
  const revealed = shown ?? ownShown;

  if (revealed) {
    return (
      <p
        role="status"
        aria-live="polite"
        data-testid="drill-recall"
        className="phrase-text text-[17px] leading-[1.4]"
        style={{ color: "var(--fg-90)" }}
      >
        {move}
      </p>
    );
  }

  return (
    <div
      className="flex flex-col items-start gap-2.5"
      data-testid="drill-recall"
    >
      <p
        className="text-[15px] leading-[1.45]"
        style={{ color: "var(--fg-70)" }}
      >
        Say it in your head first, then check.
      </p>
      <Button
        size="sm"
        onClick={() => {
          setOwnShown(true);
          onShow?.();
        }}
      >
        Show the move
      </Button>
    </div>
  );
}

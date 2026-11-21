import { Check, X } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { CardBlock, Label, Surface } from "./card-ui";
import { CardRefText } from "./card-ref-text";

function Signals({
  title,
  items,
  good,
  selfId,
}: {
  title: string;
  items: string[];
  good: boolean;
  selfId: string;
}) {
  const color = good ? "var(--accent-green)" : "var(--accent-red)";
  return (
    <Surface className="p-4 flex flex-col gap-2.5">
      <Label color={color}>
        {good ? (
          <Check className="w-4 h-4" aria-hidden="true" />
        ) : (
          <X className="w-4 h-4" aria-hidden="true" />
        )}
        {title}
      </Label>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-[14px] leading-[1.45]"
            style={{ color: "var(--fg-85)" }}
          >
            <CardRefText text={item} selfId={selfId} />
          </li>
        ))}
      </ul>
    </Surface>
  );
}

// ── Is it working? ──
// Side by side from sm up; stacked on phones, where the card's full
// sentences need the width.
export function CalibrationSection({ cardData }: { cardData: CardData }) {
  return (
    <CardBlock id="calibration" title="Is it working?">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
        data-testid="signals"
      >
        <Signals
          title="Keep going"
          items={cardData.calibration.working}
          good
          selfId={cardData.id}
        />
        <Signals
          title="Ease off"
          items={cardData.calibration.adjust}
          good={false}
          selfId={cardData.id}
        />
      </div>
    </CardBlock>
  );
}

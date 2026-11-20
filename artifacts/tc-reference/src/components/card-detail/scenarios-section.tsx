import type { CardData } from "@/lib/card-types";
import { CardBlock, Meta, PhraseRow, Surface } from "./card-ui";

// ── In different situations ──
export function ScenariosSection({
  cardId,
  cardData,
}: {
  cardId: string;
  cardData: CardData;
}) {
  return (
    <CardBlock
      id="scenarios"
      title="In different situations"
      meta={cardData.scenarios.length}
    >
      <Surface divided data-testid="scenarios">
        {cardData.scenarios.map((s, i) => (
          <PhraseRow
            key={i}
            cardId={cardId}
            groupLabel="Scenario"
            text={s.phrase}
            above={
              <>
                <span
                  className="block text-[14px] font-semibold leading-[1.35]"
                  style={{ color: "var(--fg-90)" }}
                >
                  {s.situation}
                </span>
                <Meta className="mb-1">{s.move}</Meta>
              </>
            }
          />
        ))}
      </Surface>
    </CardBlock>
  );
}

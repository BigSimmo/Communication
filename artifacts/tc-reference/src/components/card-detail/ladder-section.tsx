import type { CardData } from "@/lib/card-types";
import {
  CardBlock,
  CopyButton,
  Phrase,
  SavePhraseButton,
  Surface,
} from "./card-ui";
import { parseSpokenLine } from "./best-line";

function Level({ children, color }: { children: string; color: string }) {
  return (
    <span
      className="w-[52px] flex-none pt-[3px] text-[12px] font-bold uppercase tracking-[0.04em]"
      style={{ color }}
    >
      {children}
    </span>
  );
}

// ── Weak, better, best ──
// Rungs stay exactly as written in the card data, commentary included, so
// the comparison reads the way the author set it out.
export function LadderSection({
  cardId,
  cardData,
}: {
  cardId: string;
  cardData: CardData;
}) {
  const count = cardData.ladder.length;
  return (
    <CardBlock
      id="ladder"
      title="Weak, better, best"
      meta={count > 1 ? `${count} examples` : undefined}
    >
      {cardData.ladder.map((row, i) => {
        // Copy takes the words alone. Save keeps the rung as written, the
        // key favourites saved from this row have always used.
        const words = parseSpokenLine(row.best).say || row.best;
        return (
          <Surface key={i} divided data-testid={`ladder-${i}`}>
            <div className="flex items-start gap-3 px-4 py-3">
              <Level color="var(--accent-red)">Weak</Level>
              <Phrase size="sm" muted className="flex-1">
                {row.weak}
              </Phrase>
            </div>
            <div className="flex items-start gap-3 px-4 py-3">
              <Level color="var(--brand-text)">Better</Level>
              <Phrase size="sm" className="flex-1">
                {row.better}
              </Phrase>
            </div>
            <div className="flex items-start gap-3 pl-4 pr-2 py-3">
              <Level color="var(--accent-green)">Best</Level>
              <Phrase size="md" className="flex-1">
                {row.best}
              </Phrase>
              <span className="flex items-center -mt-1.5">
                <SavePhraseButton
                  cardId={cardId}
                  groupLabel="Ladder"
                  text={row.best}
                />
                <CopyButton text={words} />
              </span>
            </div>
          </Surface>
        );
      })}
    </CardBlock>
  );
}

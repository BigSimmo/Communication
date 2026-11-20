import type { CardData } from "@/lib/card-types";
import {
  CardBlock,
  CopyButton,
  Disclosure,
  Label,
  Phrase,
  PhraseRow,
  SayBlock,
  Surface,
} from "./card-ui";

/**
 * If it lands badly: the one all-purpose recovery line up front, with the
 * rest of the card's reset scripts behind "More recovery lines".
 */
export function RecoverySection({
  cardId,
  cardData,
}: {
  cardId: string;
  cardData: CardData;
}) {
  const more = cardData.recoveryPhrases ?? [];
  const lead = cardData.bestRecoveryLine;
  const rows = (
    <Surface divided data-testid="recovery-lines">
      {more.map((phrase, i) => (
        <PhraseRow
          key={i}
          cardId={cardId}
          groupLabel="Recovery"
          text={phrase}
          size="sm"
        />
      ))}
    </Surface>
  );
  return (
    <CardBlock id="recovery" title="If it lands badly">
      {lead && (
        <SayBlock outlined data-testid="recovery-best">
          <Label color="var(--brand-text)">Recovery line</Label>
          <span className="flex items-start gap-2">
            <Phrase className="flex-1">{lead}</Phrase>
            <span className="-mr-2 -mt-1.5">
              <CopyButton text={lead} />
            </span>
          </span>
        </SayBlock>
      )}
      {more.length > 0 &&
        (lead ? (
          <Disclosure
            label={`${more.length} more recovery lines`}
            openLabel="Hide the other recovery lines"
            testId="toggle-recovery-lines"
          >
            {rows}
          </Disclosure>
        ) : (
          rows
        ))}
    </CardBlock>
  );
}

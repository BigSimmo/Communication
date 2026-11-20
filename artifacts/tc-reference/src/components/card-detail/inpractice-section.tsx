import { Check, X } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { cardContrast, displayLine, type SpokenLine } from "./best-line";
import {
  CardBlock,
  CopyButton,
  Disclosure,
  Label,
  Meta,
  Phrase,
  SayBlock,
  Surface,
} from "./card-ui";
import { ExampleLines } from "./example-lines";

function ContrastLine({
  line,
  kind,
}: {
  line: SpokenLine;
  kind: "weak" | "best";
}) {
  const best = kind === "best";
  const text = displayLine(line);
  return (
    <SayBlock outlined={best} data-testid={`hear-${kind}`}>
      <Label color={best ? "var(--accent-green)" : "var(--accent-red)"}>
        {best ? (
          <Check className="w-4 h-4" aria-hidden="true" />
        ) : (
          <X className="w-4 h-4" aria-hidden="true" />
        )}
        {best ? "Best" : "Weak"}
      </Label>
      <div className="flex items-start gap-2">
        {/* Short lines get the hero size; long ones stay readable */}
        <Phrase
          size={best && text.length <= 64 ? "lg" : "md"}
          muted={!best}
          className="flex-1"
        >
          {text}
        </Phrase>
        {/* Phones copy this line from the dock; wider screens have no dock */}
        {best && !line.action && line.say && (
          <span className="hidden md:block -mt-1.5 -mr-1.5">
            <CopyButton text={line.say} testId="hear-best-copy" />
          </span>
        )}
      </div>
      {line.note && <Meta>{line.note}</Meta>}
    </SayBlock>
  );
}

/**
 * Hear the difference: the card's headline weak and best lines, with the
 * full worked example (the old "In practice" section) one tap away.
 */
export function HearDifferenceSection({ cardData }: { cardData: CardData }) {
  const { weak, best } = cardContrast(cardData);
  return (
    <CardBlock id="inpractice" title="Hear the difference">
      {weak && <ContrastLine line={weak} kind="weak" />}
      {best && <ContrastLine line={best} kind="best" />}
      <Disclosure
        label="See the full example"
        openLabel="Hide the full example"
        testId="toggle-full-example"
      >
        <Surface className="p-4 flex flex-col gap-2" data-testid="full-example">
          <Label color="var(--accent-red)">Without this technique</Label>
          <ExampleLines lines={cardData.example.without} color="var(--fg-70)" />
        </Surface>
        <Surface className="p-4 flex flex-col gap-2">
          <Label color="var(--accent-green)">With this technique</Label>
          <ExampleLines lines={cardData.example.with} color="var(--fg-85)" />
        </Surface>
        {cardData.example.note && (
          <SayBlock>
            <Label>Going further</Label>
            <span
              className="text-[14px] leading-[1.5]"
              style={{ color: "var(--fg-80)" }}
            >
              {cardData.example.note}
            </span>
          </SayBlock>
        )}
      </Disclosure>
    </CardBlock>
  );
}

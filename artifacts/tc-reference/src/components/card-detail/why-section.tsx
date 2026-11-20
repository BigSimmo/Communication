import { X } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { quoted } from "@/lib/utils";
import {
  CardBlock,
  Label,
  MarkedList,
  Phrase,
  SayBlock,
  Surface,
} from "./card-ui";

// ── Why it works ──
export function WhySection({ cardData }: { cardData: CardData }) {
  const payoff = cardData.influencePayoff;
  if (!payoff) {
    // Cards without the structured payoff still explain themselves.
    return (
      <CardBlock id="why" title="Why it works">
        <p
          className="text-[16px] leading-[1.5]"
          style={{ color: "var(--fg-85)" }}
        >
          {cardData.whyItWorks}
        </p>
      </CardBlock>
    );
  }
  return (
    <CardBlock id="why" title="Why it works">
      <p
        className="text-[16px] leading-[1.5]"
        style={{ color: "var(--fg-90)" }}
        data-testid="why-principle"
      >
        {payoff.principle}
      </p>
      <SayBlock>
        <Label color="var(--brand-text)">What they feel</Label>
        <Phrase>{quoted(payoff.feeling)}</Phrase>
      </SayBlock>

      {payoff.gains.length > 0 && (
        <Surface className="p-4 flex flex-col gap-2.5">
          <Label>What it builds</Label>
          <ul className="flex flex-wrap gap-2">
            {payoff.gains.map((gain) => (
              <li
                key={gain}
                className="text-[14px] leading-snug font-medium px-3 py-1.5 rounded-[14px]"
                style={{ background: "var(--fg-08)", color: "var(--fg-85)" }}
              >
                {gain}
              </li>
            ))}
          </ul>
        </Surface>
      )}

      {payoff.whyMostFail.length > 0 && (
        <Surface>
          <div className="px-4 pt-3.5">
            <Label color="var(--accent-red)">Why most people fail</Label>
          </div>
          <MarkedList
            items={payoff.whyMostFail}
            mark={
              <span
                className="block w-1.5 h-1.5 mt-[6px] rounded-full"
                style={{ background: "var(--accent-red)" }}
              />
            }
          />
        </Surface>
      )}

      {cardData.whatItIsNot && cardData.whatItIsNot.length > 0 && (
        <Surface>
          <div className="px-4 pt-3.5">
            <Label>What it is not</Label>
          </div>
          <MarkedList
            items={cardData.whatItIsNot}
            mark={<X className="w-4 h-4" style={{ color: "var(--fg-55)" }} />}
          />
        </Surface>
      )}
    </CardBlock>
  );
}

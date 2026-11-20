import { useState } from "react";
import type { CardData } from "@/lib/card-types";
import { Chip } from "@/components/ui/chip";
import { CardBlock, Meta, NumberDisc, Phrase, Surface } from "./card-ui";

// "Rapport chain" is just "Rapport" on a chip under a "Chain it" heading
function chipLabel(label: string): string {
  return label.replace(/\s+chain$/i, "");
}

// ── Chain it with other moves ──
export function ChainsSection({ cardData }: { cardData: CardData }) {
  const chains = cardData.chains ?? [];
  const [index, setIndex] = useState(0);
  const chain = chains[Math.min(index, chains.length - 1)];
  if (!chain) return null;
  return (
    <CardBlock
      id="chains"
      title="Chain it with other moves"
      meta={chains.length > 1 ? `${chains.length} chains` : undefined}
    >
      {chains.length > 1 && (
        <div
          className="card-section-scroller flex gap-2 overflow-x-auto -mx-4 px-4"
          role="toolbar"
          aria-label="Choose a chain"
        >
          {chains.map((c, i) => (
            <Chip
              key={c.label}
              selected={i === index}
              onClick={() => setIndex(i)}
              data-testid={`chain-chip-${i}`}
            >
              {chipLabel(c.label)}
            </Chip>
          ))}
        </div>
      )}
      <Surface className="p-4 flex flex-col gap-3" data-testid="chain">
        <div className="flex flex-col gap-0.5">
          <span
            className="text-[16px] font-semibold leading-[1.3]"
            style={{ color: "var(--fg-90)" }}
          >
            {chain.label}
          </span>
          <Meta>{chain.sequence}</Meta>
        </div>
        <ol className="flex flex-col gap-3">
          {chain.example.map((line, j) => (
            <li key={j} className="flex items-start gap-3">
              <NumberDisc small>{j + 1}</NumberDisc>
              <Phrase size="sm" className="flex-1">
                {line}
              </Phrase>
            </li>
          ))}
        </ol>
      </Surface>
    </CardBlock>
  );
}

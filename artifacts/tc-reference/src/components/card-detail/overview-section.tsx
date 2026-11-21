import { X } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { CardBlock, MarkedList, Surface } from "./card-ui";
import { FORMULA_LABEL } from "./card-sections";
import { CardRefText } from "./card-ref-text";

/** Chips suit short entries; a card's longer ones read better as a list. */
const CHIP_MAX_CHARS = 44;

// ── When to use it ──
export function WhenToUseSection({ cardData }: { cardData: CardData }) {
  const items = cardData.overview.bestFor;
  const asChips = items.every((item) => item.length <= CHIP_MAX_CHARS);
  return (
    <CardBlock id="overview" title="When to use it">
      {asChips ? (
        <ul className="flex flex-wrap gap-2" data-testid="when-to-use">
          {items.map((item) => (
            <li
              key={item}
              className="inline-flex items-center min-h-[34px] px-3.5 py-1.5 rounded-[17px] text-[14px] leading-snug font-medium"
              style={{
                border: "1px solid var(--fg-15)",
                color: "var(--fg-90)",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <Surface data-testid="when-to-use">
          <MarkedList
            items={items}
            mark={
              <span
                className="block w-1.5 h-1.5 mt-[6px] rounded-full"
                style={{ background: "var(--brand)" }}
              />
            }
          />
        </Surface>
      )}
    </CardBlock>
  );
}

// ── Skip it when ──
// Knowing when not to use a move is safety-relevant, so this is always
// shown in full, never folded away.
export function SkipWhenSection({ cardData }: { cardData: CardData }) {
  return (
    <CardBlock title="Skip it when">
      <Surface data-testid="skip-when">
        <MarkedList
          items={cardData.notFor}
          renderItem={(item) => (
            <CardRefText text={item} selfId={cardData.id} />
          )}
          mark={
            <X className="w-4 h-4" style={{ color: "var(--accent-red)" }} />
          }
        />
        {cardData.overview.misuse && (
          <p
            className="px-4 py-3 text-[14px] leading-[1.5]"
            style={{
              color: "var(--fg-75)",
              borderTop: "1px solid var(--fg-07)",
            }}
          >
            <span className="font-semibold" style={{ color: "var(--fg-90)" }}>
              Misuse risk:
            </span>{" "}
            {cardData.overview.misuse}
          </p>
        )}
      </Surface>
    </CardBlock>
  );
}

// ── Core formula ──
// Shown at the top of the method on Learn it: the move as a short recipe.
export function CoreFormula({ cardData }: { cardData: CardData }) {
  return (
    <Surface className="p-4 flex flex-col gap-2.5">
      <p
        className="text-[12px] font-bold uppercase tracking-[0.04em]"
        style={{ color: "var(--brand-text)" }}
      >
        In short
      </p>
      <ul className="flex flex-col gap-2" data-testid="core-formula">
        {cardData.overview.coreFormula.map((step, i) => {
          const text = step.replace(/\s*->\s*/g, " → ");
          const m = text.match(FORMULA_LABEL);
          return (
            <li
              key={i}
              className="flex gap-3 text-[15px] leading-[1.45]"
              style={{ color: i === 0 ? "var(--fg-90)" : "var(--fg-80)" }}
            >
              <span
                className="mt-[9px] w-1.5 h-1.5 rounded-full flex-none"
                style={{
                  background:
                    i === 0
                      ? "var(--brand)"
                      : "color-mix(in srgb, var(--brand) 45%, transparent)",
                }}
                aria-hidden="true"
              />
              <span className={`min-w-0 ${i === 0 ? "font-semibold" : ""}`}>
                {m ? (
                  <>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--fg-90)" }}
                    >
                      {m[1]}:
                    </span>{" "}
                    {text.slice(m[0].length)}
                  </>
                ) : (
                  text
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </Surface>
  );
}

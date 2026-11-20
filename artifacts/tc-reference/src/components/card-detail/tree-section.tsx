import type { CardData } from "@/lib/card-types";
import { splitCondition } from "./best-line";
import { CardBlock, CopyRow, Surface } from "./card-ui";

// ── Decide in the moment ──
export function TreeSection({ cardData }: { cardData: CardData }) {
  return (
    <CardBlock id="tree" title="Decide in the moment">
      <Surface divided data-testid="decision-guide">
        {cardData.decisionTree.map((item, i) => {
          const condition = splitCondition(item.condition);
          const above = (
            <>
              <span
                className="block text-[13px] leading-[1.4]"
                style={{ color: "var(--fg-70)" }}
              >
                {condition.lead && (
                  <>
                    <b style={{ color: "var(--brand-text)" }}>If</b>{" "}
                  </>
                )}
                {condition.text}
              </span>
              <span
                className="block text-[16px] font-semibold leading-[1.35] mb-1"
                style={{ color: "var(--fg-90)" }}
              >
                {item.action}
              </span>
            </>
          );
          return item.phrase ? (
            <CopyRow key={i} text={item.phrase} size="sm" above={above} />
          ) : (
            <div key={i} className="px-4 py-[13px]">
              {above}
            </div>
          );
        })}
      </Surface>
    </CardBlock>
  );
}

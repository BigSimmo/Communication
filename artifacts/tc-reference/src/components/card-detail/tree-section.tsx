import type { CardData } from "@/lib/card-types";
import { splitCondition } from "./best-line";
import { CardBlock, CopyRow, Surface } from "./card-ui";
import { CardRefText } from "./card-ref-text";
import { CARD_TITLE_MAP } from "./card-sections";
import { hasCardRefs } from "@/lib/card-refs";

// ── Decide in the moment ──
export function TreeSection({ cardData }: { cardData: CardData }) {
  return (
    <CardBlock id="tree" title="Decide in the moment">
      <Surface divided data-testid="decision-guide">
        {cardData.decisionTree.map((item, i) => {
          const condition = splitCondition(item.condition);
          // A row with a phrase is one copy button; when its action names
          // another card, the copy button holds only the phrase so the
          // reference can be a real link
          const linked =
            !!item.phrase && hasCardRefs(item.action, CARD_TITLE_MAP);
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
                <CardRefText
                  text={item.action}
                  selfId={cardData.id}
                  interactive={linked || !item.phrase}
                />
              </span>
            </>
          );
          if (linked) {
            return (
              <div key={i}>
                <div className="px-4 pt-[13px]">{above}</div>
                <CopyRow
                  text={item.phrase}
                  size="sm"
                  className="pt-1.5! min-h-0!"
                />
              </div>
            );
          }
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

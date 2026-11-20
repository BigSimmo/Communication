import { ChevronRight } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { CardBlock, Meta, Surface } from "./card-ui";
import { CARD_TITLE_MAP } from "./card-sections";

// ── Pairs well with ──
export function RelatedSection({
  cardData,
  setLocation,
}: {
  cardData: CardData;
  setLocation: (to: string) => void;
}) {
  return (
    <CardBlock id="related" title="Pairs well with">
      <Surface divided>
        {cardData.relatedTechniques!.map((rt) => (
          <button
            key={rt.id}
            type="button"
            onClick={() => {
              window.scrollTo(0, 0);
              setLocation(`/card/${rt.id}`);
            }}
            data-testid={`related-${rt.id}`}
            className="w-full flex items-center gap-3 px-4 py-[13px] min-h-14 text-left transition-colors active:bg-[var(--fg-05)]"
          >
            <span className="flex-1 min-w-0 flex flex-col gap-0.5">
              <span
                className="text-[17px] font-semibold leading-[1.3]"
                style={{ color: "var(--fg-90)" }}
              >
                {CARD_TITLE_MAP[rt.id] ?? rt.id}
              </span>
              <Meta>{rt.reason}</Meta>
            </span>
            <ChevronRight
              className="w-[18px] h-[18px] flex-none"
              style={{ color: "var(--fg-55)" }}
              aria-hidden="true"
            />
          </button>
        ))}
      </Surface>
    </CardBlock>
  );
}

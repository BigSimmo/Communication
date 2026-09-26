import { ChevronRight } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { SectionAccordion, type CardSection } from "./section-accordion";
import { CARD_TITLE_MAP } from "./card-title-map";

export function RelatedSection({
  cardData,
  open,
  onToggle,
  setLocation,
}: {
  cardData: CardData;
  open: boolean;
  onToggle: (id: CardSection) => void;
  setLocation: (to: string) => void;
}) {
  return (
    <SectionAccordion
      id="related"
      open={open}
      onToggle={onToggle}
      label="Related Techniques"
      color="var(--accent-indigo)"
      subtitle={`${cardData.relatedTechniques?.length ?? 0} paired techniques`}
    >
      <div className="space-y-2">
        {cardData.relatedTechniques!.map((rt) => (
          <button
            key={rt.id}
            onClick={() => {
              window.scrollTo(0, 0);
              setLocation(`/card/${rt.id}`);
            }}
            data-testid={`related-${rt.id}`}
            className="w-full text-left flex items-center gap-3.5 rounded-2xl px-4 py-3.5 transition-all active:scale-[0.98]"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-07)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "color-mix(in srgb, var(--accent-indigo) 10%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--accent-indigo) 20%, transparent)",
              }}
              aria-hidden="true"
            >
              <span
                className="text-[11px] font-bold"
                style={{ color: "var(--accent-indigo)" }}
              >
                {rt.id.replace(/^TC/, "")}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-foreground/90">
                {CARD_TITLE_MAP[rt.id] ?? rt.id}
              </p>
              <p
                className="text-[12px] mt-0.5 leading-snug"
                style={{ color: "var(--fg-50)" }}
              >
                {rt.reason}
              </p>
            </div>
            <ChevronRight
              className="w-4 h-4 flex-shrink-0"
              style={{ color: "var(--fg-30)" }}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </SectionAccordion>
  );
}

import { ChevronRight } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { impactStyleFor } from "@/lib/design-tokens";
import { CARD_TITLE_MAP } from "./card-sections";

// ── Technique brief header ──
export function CardHeader({
  cardId,
  cardData,
}: {
  cardId: string;
  cardData: CardData;
}) {
  return (
    <div className="px-3 md:px-4 pt-4">
      <div
        className="rounded-2xl p-5 border"
        style={{
          background: "linear-gradient(135deg, var(--fg-02), var(--fg-03))",
          borderColor: "var(--fg-08)",
        }}
      >
        <div className="flex justify-between items-center">
          <span
            className="text-[11px] font-bold tracking-widest uppercase font-mono px-2 py-0.5 rounded-md"
            style={{
              background: "var(--fg-04)",
              color: "var(--brand-text)",
              border: "1px solid var(--fg-06)",
            }}
          >
            {cardId}
          </span>
          <div className="flex items-center gap-2">
            <span
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
              style={{
                background: "var(--fg-06)",
                color: "var(--fg-60)",
              }}
            >
              {cardData.overview.difficulty}
            </span>
            {cardData.overview.impact &&
              (() => {
                const impactStyle = impactStyleFor(cardData.overview.impact);
                return (
                  <span
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: impactStyle.bg,
                      color: impactStyle.color,
                    }}
                  >
                    {cardData.overview.impact} Impact
                  </span>
                );
              })()}
          </div>
        </div>

        <h2 className="text-[18px] font-bold text-foreground mt-1">
          {CARD_TITLE_MAP[cardId] ?? cardId}
        </h2>

        <p className="text-[13px] text-foreground/80 mt-2 leading-relaxed">
          {cardData.overview.minimumViableMove}
        </p>

        {/* Compact preview of Core Formula & Quick Ladder Phrase */}
        {(cardData.overview.coreFormula?.length > 0 ||
          cardData.ladder?.[0]?.best) && (
          <div
            className="mt-3.5 pt-3 flex flex-col gap-2.5 border-t"
            style={{ borderColor: "var(--fg-06)" }}
          >
            {cardData.overview.coreFormula?.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider mr-1"
                  style={{ color: "var(--fg-45)" }}
                >
                  Formula
                </span>
                {cardData.overview.coreFormula.map((step, idx, arr) => (
                  <span key={step} className="inline-flex items-center gap-1.5">
                    <span
                      className="font-medium px-2 py-0.5 rounded-md"
                      style={{
                        background: "var(--fg-04)",
                        border: "1px solid var(--fg-06)",
                        color: "var(--fg-85)",
                      }}
                    >
                      {step}
                    </span>
                    {idx < arr.length - 1 && (
                      <ChevronRight
                        className="w-3 h-3 flex-shrink-0"
                        style={{ color: "var(--fg-35)" }}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                ))}
              </div>
            )}
            {cardData.ladder?.[0] && (
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 px-3 py-2 rounded-xl text-[12px]"
                style={{
                  background: "var(--fg-03)",
                  border: "1px solid var(--fg-05)",
                }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider flex-shrink-0"
                  style={{ color: "var(--brand-text)" }}
                >
                  Quick ladder
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 flex-1 min-w-0">
                  {cardData.ladder[0].weak && (
                    <span className="text-[11px] text-foreground/50 truncate">
                      <span
                        className="font-semibold mr-1"
                        style={{ color: "var(--accent-red)" }}
                      >
                        Weak:
                      </span>
                      "{cardData.ladder[0].weak}"
                    </span>
                  )}
                  {cardData.ladder[0].weak && cardData.ladder[0].best && (
                    <span className="hidden sm:inline text-[11px] text-foreground/30">
                      →
                    </span>
                  )}
                  {cardData.ladder[0].best && (
                    <span className="text-[11px] text-foreground/90 font-medium truncate">
                      <span
                        className="font-semibold mr-1"
                        style={{ color: "var(--accent-green)" }}
                      >
                        Best:
                      </span>
                      "{cardData.ladder[0].best}"
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

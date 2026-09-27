import type { CardData } from "@/lib/card-types";
import { impactStyleFor } from "@/lib/design-tokens";
import { CARD_CATEGORY_MAP, CARD_TITLE_MAP } from "./card-sections";

// ── Technique brief ──
export function CardHeader({
  cardId,
  cardData,
}: {
  cardId: string;
  cardData: CardData;
}) {
  return (
    <>
      {/* ── Technique brief ──
        Leads with the move itself plus the quickest weak/best contrast;
        the full formula lives in Overview directly below. On phones the
        header truncates the title behind its tools, so the brief repeats
        it in full; from sm up the header shows it whole. */}
      <div className="px-3 md:px-4 pt-4">
        <div
          className="rounded-2xl p-4 sm:p-5 border relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in srgb, var(--brand) 9%, transparent) 0%, var(--fg-02) 55%)",
            borderColor: "color-mix(in srgb, var(--brand) 18%, var(--fg-08))",
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <p
              className="text-[11px] font-bold tracking-[0.12em] uppercase"
              style={{ color: "var(--brand-text)" }}
            >
              <span className="sm:hidden">{cardId} · </span>
              <span data-testid="card-brief-category">
                {CARD_CATEGORY_MAP[cardId] ?? "Technique"}
              </span>
            </p>
            {/* The header h1 carries the title from sm up; on phones it is
              truncated there, so this heading shows it whole. */}
            <h2
              className="w-full sm:sr-only text-[22px] font-bold leading-tight tracking-[-0.01em]"
              style={{ color: "var(--fg-90)" }}
              data-testid="card-brief-title"
            >
              {CARD_TITLE_MAP[cardId] ?? cardId}
            </h2>
            <div className="flex items-center gap-1.5">
              <span
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  background: "var(--fg-06)",
                  color: "var(--fg-65)",
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
                      {cardData.overview.impact} impact
                    </span>
                  );
                })()}
            </div>
          </div>

          <p
            className="text-[11px] font-bold tracking-wider uppercase mt-4 mb-1.5"
            style={{ color: "var(--fg-50)" }}
          >
            Minimum viable move
          </p>
          <p
            className="text-[16px] font-semibold leading-snug"
            style={{ color: "var(--fg-90)" }}
          >
            {cardData.overview.minimumViableMove}
          </p>

          {cardData.ladder?.[0] &&
            (cardData.ladder[0].weak || cardData.ladder[0].best) && (
              <div
                className="mt-4 rounded-xl overflow-hidden text-[13px]"
                style={{ border: "1px solid var(--fg-07)" }}
                data-testid="card-brief-ladder"
              >
                {cardData.ladder[0].weak && (
                  <div
                    className="flex gap-2.5 px-3.5 py-2.5"
                    style={{ background: "var(--fg-02)" }}
                  >
                    <span
                      className="w-10 flex-shrink-0 text-[11px] font-bold uppercase tracking-wider pt-px"
                      style={{ color: "var(--accent-red)" }}
                    >
                      Weak
                    </span>
                    <span
                      className="min-w-0 leading-snug line-clamp-2"
                      style={{ color: "var(--fg-55)" }}
                    >
                      {cardData.ladder[0].weak}
                    </span>
                  </div>
                )}
                {cardData.ladder[0].best && (
                  <div
                    className="flex gap-2.5 px-3.5 py-2.5"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accent-green) 7%, transparent)",
                      borderTop: cardData.ladder[0].weak
                        ? "1px solid var(--fg-06)"
                        : undefined,
                    }}
                  >
                    <span
                      className="w-10 flex-shrink-0 text-[11px] font-bold uppercase tracking-wider pt-px"
                      style={{ color: "var(--accent-green)" }}
                    >
                      Best
                    </span>
                    <span
                      className="min-w-0 leading-snug font-medium line-clamp-3"
                      style={{ color: "var(--fg-85)" }}
                    >
                      {cardData.ladder[0].best}
                    </span>
                  </div>
                )}
              </div>
            )}
        </div>
      </div>
    </>
  );
}

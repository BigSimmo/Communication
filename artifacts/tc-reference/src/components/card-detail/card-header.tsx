import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { impactStyleFor } from "@/lib/design-tokens";
import { CARD_CATEGORY_MAP, CARD_TITLE_MAP } from "./card-sections";

// The hero contrast should be words you could actually say. A few cards'
// first ladder rung describes behaviour instead ("Uses the technique..."),
// so fall back to the "You:" lines from the card's own worked example.
function youLine(lines: string[] | undefined) {
  const line = lines?.find((l) => /^You:\s*/.test(l));
  return line?.replace(/^You:\s*/, "");
}

// Some ladder rungs describe behaviour ("Uses BLUF flexibly...", "One
// continuer, then stop and watch...") rather than words you could say. Judge
// each side alone and swap only those for the card's worked-example line.
const DESCRIBES_BEHAVIOUR =
  /^(Uses?|Using|Recites|Announces|Moves|Too broad|Someone)\b|\b(flexibly|visible script|the technique|then stop|and watch)\b/i;

function briefContrast(cardData: CardData) {
  const rung = cardData.ladder?.[0];
  const pick = (line: string | undefined, fallback: string | undefined) =>
    line && !DESCRIBES_BEHAVIOUR.test(line) ? line : (fallback ?? line);
  return {
    weak: pick(rung?.weak, youLine(cardData.example?.without)),
    best: pick(rung?.best, youLine(cardData.example?.with)),
  };
}

// ── Technique brief ──
export function CardHeader({
  cardId,
  cardData,
}: {
  cardId: string;
  cardData: CardData;
}) {
  const contrast = briefContrast(cardData);
  const hasExample = Boolean(contrast.weak || contrast.best);
  const [exampleOpen, setExampleOpen] = useState(false);
  const exampleId = useId();
  const impact = cardData.overview.impact;
  const impactStyle = impact ? impactStyleFor(impact) : null;
  return (
    <>
      {/* ── Technique brief ──
        A compact, scannable lead: what it is, how hard, and the move itself,
        so the section nav stays on the first phone screen. The weak/best
        contrast folds behind a disclosure on phones and shows inline from md
        up. On phones the header truncates the title behind its tools, so the
        brief repeats it in full; from sm up the header shows it whole. */}
      <div className="px-3 md:px-4 pt-3 md:pt-4">
        <div
          className="rounded-2xl p-4 sm:p-5 border relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in srgb, var(--brand) 9%, transparent) 0%, var(--fg-02) 55%)",
            borderColor: "color-mix(in srgb, var(--brand) 18%, var(--fg-08))",
          }}
        >
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <p
              className="mr-auto min-w-0 text-[11px] font-bold tracking-[0.12em] uppercase"
              style={{ color: "var(--brand-text)" }}
            >
              <span className="sm:hidden">{cardId} · </span>
              <span data-testid="card-brief-category">
                {CARD_CATEGORY_MAP[cardId] ?? "Technique"}
              </span>
            </p>
            <div className="flex items-center gap-1.5">
              <span
                className="text-[11px] font-semibold leading-none px-2 py-[5px] rounded-full"
                style={{
                  background: "var(--fg-06)",
                  color: "var(--fg-65)",
                }}
              >
                {cardData.overview.difficulty}
              </span>
              {impact && impactStyle && (
                <span
                  className="text-[11px] font-semibold leading-none px-2 py-[5px] rounded-full"
                  style={{
                    background: impactStyle.bg,
                    color: impactStyle.color,
                  }}
                >
                  {impact} impact
                </span>
              )}
            </div>
          </div>

          {/* The header h1 carries the title from sm up; on phones it is
            truncated there, so this heading shows it whole. */}
          <h2
            className="sm:sr-only mt-1.5 text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
            style={{ color: "var(--fg-90)" }}
            data-testid="card-brief-title"
          >
            {CARD_TITLE_MAP[cardId] ?? cardId}
          </h2>

          <p
            className="text-[11px] font-bold tracking-[0.08em] uppercase mt-3 mb-1"
            style={{ color: "var(--fg-50)" }}
          >
            Minimum viable move
          </p>
          <p
            className="text-[15px] sm:text-[16px] font-semibold leading-snug"
            style={{ color: "var(--fg-90)" }}
          >
            {cardData.overview.minimumViableMove}
          </p>

          {hasExample && (
            <>
              <button
                type="button"
                onClick={() => setExampleOpen((open) => !open)}
                aria-expanded={exampleOpen}
                aria-controls={exampleId}
                data-testid="card-brief-example-toggle"
                className="md:hidden -mx-2 -mb-2 mt-1 flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-[13px] font-semibold transition-colors hover:bg-[var(--fg-05)] active:bg-[var(--fg-05)]"
                style={{ color: "var(--brand-text)" }}
              >
                {exampleOpen ? "Hide example" : "Show example"}
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-200"
                  style={{
                    transform: exampleOpen ? "rotate(180deg)" : "none",
                  }}
                  aria-hidden="true"
                />
              </button>
              <div
                id={exampleId}
                className={`${exampleOpen ? "block mt-2 mb-1" : "hidden"} md:block md:mt-4 md:mb-0 rounded-xl overflow-hidden text-[13px]`}
                style={{ border: "1px solid var(--fg-07)" }}
                data-testid="card-brief-ladder"
              >
                {contrast.weak && (
                  <div
                    className="flex gap-2.5 px-3.5 py-2.5"
                    style={{ background: "var(--fg-02)" }}
                  >
                    <span
                      className="w-10 flex-shrink-0 text-[11px] font-bold uppercase tracking-[0.08em] pt-px"
                      style={{ color: "var(--accent-red)" }}
                    >
                      Weak
                    </span>
                    <span
                      className="min-w-0 leading-snug line-clamp-2"
                      style={{ color: "var(--fg-55)" }}
                    >
                      {contrast.weak}
                    </span>
                  </div>
                )}
                {contrast.best && (
                  <div
                    className="flex gap-2.5 px-3.5 py-2.5"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accent-green) 7%, transparent)",
                      borderTop: contrast.weak
                        ? "1px solid var(--fg-06)"
                        : undefined,
                    }}
                  >
                    <span
                      className="w-10 flex-shrink-0 text-[11px] font-bold uppercase tracking-[0.08em] pt-px"
                      style={{ color: "var(--accent-green)" }}
                    >
                      Best
                    </span>
                    <span
                      className="min-w-0 leading-snug font-medium line-clamp-3"
                      style={{ color: "var(--fg-85)" }}
                    >
                      {contrast.best}
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

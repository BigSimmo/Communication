import type { Dispatch, SetStateAction } from "react";
import { ChevronDown } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { impactStyleFor } from "@/lib/design-tokens";
import { SectionAccordion } from "./section-accordion";
import { FORMULA_LABEL } from "./card-sections";

// ── Overview ──
export function OverviewSection({
  cardData,
  whyOpen,
  setWhyOpen,
  notForOpen,
  setNotForOpen,
}: {
  cardData: CardData;
  whyOpen: boolean;
  setWhyOpen: Dispatch<SetStateAction<boolean>>;
  notForOpen: boolean;
  setNotForOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <SectionAccordion
      id="overview"
      label="Overview"
      color="var(--brand)"
      subtitle="Core formula, quick stats and when not to use it"
    >
      <div
        className="rounded-2xl p-4 sm:p-5 mb-4"
        style={{
          background: "color-mix(in srgb, var(--brand) 7%, transparent)",
          border: "1px solid color-mix(in srgb, var(--brand) 20%, transparent)",
        }}
      >
        <p
          className="text-[11px] font-bold tracking-widest uppercase mb-3"
          style={{ color: "var(--brand-text)" }}
        >
          Core formula
        </p>
        <ul className="flex flex-col gap-2.5" data-testid="core-formula">
          {cardData.overview.coreFormula.map((step, i) => {
            const text = step.replace(/\s*->\s*/g, " \u2192 ");
            const m = text.match(FORMULA_LABEL);
            return (
              <li
                key={i}
                className="flex gap-3 text-[14px] leading-relaxed"
                style={{ color: i === 0 ? "var(--fg-90)" : "var(--fg-78)" }}
              >
                <span
                  className="mt-[9px] w-1.5 h-1.5 rounded-full flex-shrink-0"
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
      </div>

      {!cardData.influencePayoff && (
        <div
          className="rounded-2xl mb-4 overflow-hidden"
          style={{
            background:
              "color-mix(in srgb, var(--accent-purple) 7%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--accent-purple) 18%, transparent)",
          }}
        >
          <button
            onClick={() => setWhyOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-3.5 transition-colors active:bg-[var(--fg-03)]"
            aria-expanded={whyOpen}
          >
            <p
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ color: "var(--accent-purple)" }}
            >
              Why it works
            </p>
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
              style={{
                color: "var(--accent-purple)",
                transform: whyOpen ? "rotate(180deg)" : "none",
              }}
              aria-hidden="true"
            />
          </button>
          {whyOpen && (
            <div className="px-5 pb-4">
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "var(--fg-78)" }}
              >
                {cardData.whyItWorks}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-2.5 flex-wrap mb-4">
        {(
          [
            [
              "Impact",
              cardData.overview.impact,
              impactStyleFor(cardData.overview.impact).color,
            ],
            [
              "Difficulty",
              cardData.overview.difficulty,
              "var(--impact-medium)",
            ],
            ["Misuse risk", cardData.overview.misuse, "var(--brand-text)"],
          ] as [string, string, string][]
        ).map(([k, v, c]) => (
          <div
            key={k}
            className="flex items-baseline gap-2 rounded-xl px-3.5 py-1.5"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-06)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full flex-shrink-0 self-start mt-[4px]"
              style={{ background: c }}
              aria-hidden="true"
            />
            <span className="text-[11px] text-foreground/50 whitespace-nowrap">
              {k}
            </span>
            <span className="text-[11px] leading-snug font-semibold text-foreground/90 min-w-0">
              {v}
            </span>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-4 sm:p-5 mb-4"
        style={{
          background: "var(--fg-03)",
          border: "1px solid var(--fg-06)",
        }}
      >
        <p className="text-[11px] font-bold tracking-widest text-foreground/55 uppercase mb-3">
          Best for
        </p>
        <ul className="space-y-2">
          {cardData.overview.bestFor.map((item) => (
            <li key={item} className="flex gap-2.5 items-start">
              <div
                className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 flex-shrink-0"
                aria-hidden="true"
              />
              <p className="text-[13px] text-foreground/70 leading-snug">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "color-mix(in srgb, var(--accent-red) 6%, transparent)",
          border:
            "1px solid color-mix(in srgb, var(--accent-red) 16%, transparent)",
        }}
      >
        <button
          onClick={() => setNotForOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-3.5 transition-colors active:bg-[var(--fg-03)]"
          aria-expanded={notForOpen}
        >
          <p
            className="text-[11px] font-bold tracking-widest uppercase"
            style={{ color: "var(--accent-red)" }}
          >
            When not to use
          </p>
          <ChevronDown
            className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
            style={{
              color: "var(--accent-red)",
              transform: notForOpen ? "rotate(180deg)" : "none",
            }}
            aria-hidden="true"
          />
        </button>
        {notForOpen && (
          <div className="px-5 pb-4">
            <ul className="space-y-2">
              {cardData.notFor.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accent-red) 50%, transparent)",
                    }}
                    aria-hidden="true"
                  />
                  <p
                    className="text-[13px] leading-snug"
                    style={{ color: "var(--fg-65)" }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SectionAccordion>
  );
}

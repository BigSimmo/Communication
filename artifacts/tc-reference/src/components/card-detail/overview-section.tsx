import type { Dispatch, SetStateAction } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { impactStyleFor } from "@/lib/design-tokens";
import { SectionAccordion } from "./section-accordion";

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
      subtitle="Core formula, quick stats & when not to use"
    >
      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 mb-4">
        <p className="text-[11px] font-bold tracking-widest text-primary/80 uppercase mb-3">
          Core formula
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          {cardData.overview.coreFormula.map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <span className="text-[12px] font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full shadow-sm">
                {step}
              </span>
              {i < arr.length - 1 && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-primary/40 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-2xl p-5 mb-4"
        style={{
          background: "var(--fg-03)",
          border: "1px solid var(--fg-06)",
        }}
      >
        <p className="text-[11px] font-bold tracking-widest text-foreground/55 uppercase mb-2">
          Minimum viable move
        </p>
        <p className="text-[14px] leading-relaxed text-foreground/80">
          {cardData.overview.minimumViableMove}
        </p>
      </div>

      {!cardData.influencePayoff && (
        <div
          className="rounded-2xl mb-4 overflow-hidden"
          style={{
            background: "rgba(139,92,246,0.07)",
            border: "1px solid rgba(139,92,246,0.18)",
          }}
        >
          <button
            onClick={() => setWhyOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-3.5 transition-colors active:bg-[var(--fg-03)]"
            aria-expanded={whyOpen}
          >
            <p
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ color: "rgba(167,139,250,0.8)" }}
            >
              Why it works
            </p>
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
              style={{
                color: "rgba(167,139,250,0.6)",
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
            className="flex items-center gap-2 rounded-full px-3.5 py-1.5"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-06)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: c }}
              aria-hidden="true"
            />
            <span className="text-[11px] text-foreground/50">{k}</span>
            <span className="text-[11px] font-semibold text-foreground/90">
              {v}
            </span>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-5 mb-4"
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
          background: "rgba(239,68,68,0.06)",
          border: "1px solid rgba(239,68,68,0.16)",
        }}
      >
        <button
          onClick={() => setNotForOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-3.5 transition-colors active:bg-[var(--fg-03)]"
          aria-expanded={notForOpen}
        >
          <p
            className="text-[11px] font-bold tracking-widest uppercase"
            style={{ color: "rgba(248,113,113,0.8)" }}
          >
            When not to use
          </p>
          <ChevronDown
            className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
            style={{
              color: "rgba(248,113,113,0.6)",
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
                    style={{ background: "rgba(239,68,68,0.5)" }}
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

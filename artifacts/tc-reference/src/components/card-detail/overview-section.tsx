import { ChevronRight, ChevronDown } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { impactStyleFor } from "@/lib/design-tokens";
import { SectionAccordion, type CardSection } from "./section-accordion";

export function OverviewSection({
  cardData,
  open,
  onToggle,
  whyOpen,
  setWhyOpen,
  notForOpen,
  setNotForOpen,
}: {
  cardData: CardData;
  open: boolean;
  onToggle: (id: CardSection) => void;
  whyOpen: boolean;
  setWhyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  notForOpen: boolean;
  setNotForOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <SectionAccordion
      id="overview"
      open={open}
      onToggle={onToggle}
      label="Overview"
      color="var(--brand)"
      subtitle="Core formula, quick stats & when not to use"
    >
      <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 mb-4">
        <p className="text-[10px] font-bold tracking-widest text-primary/80 uppercase mb-3">
          Core Formula
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
        style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}
      >
        <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">
          Minimum Viable Move
        </p>
        <p className="text-[14px] leading-relaxed text-foreground/80">
          {cardData.overview.minimumViableMove}
        </p>
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
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{
                color:
                  "color-mix(in srgb, var(--accent-purple) 80%, transparent)",
              }}
            >
              Why It Works
            </p>
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
              style={{
                color:
                  "color-mix(in srgb, var(--accent-purple) 60%, transparent)",
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
            ["Difficulty", cardData.overview.difficulty, "var(--accent-blue)"],
            ["Misuse risk", cardData.overview.misuse, "var(--brand)"],
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
        style={{ background: "var(--fg-03)", border: "1px solid var(--fg-06)" }}
      >
        <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-3">
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
            className="text-[10px] font-bold tracking-widest uppercase"
            style={{
              color: "color-mix(in srgb, var(--accent-red) 80%, transparent)",
            }}
          >
            When Not to Use
          </p>
          <ChevronDown
            className="w-4 h-4 transition-transform duration-200 flex-shrink-0"
            style={{
              color: "color-mix(in srgb, var(--accent-red) 60%, transparent)",
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

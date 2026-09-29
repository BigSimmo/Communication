import type { CardData } from "@/lib/card-types";
import { SectionAccordion } from "./section-accordion";

// ── Chains ──
export function ChainsSection({ cardData }: { cardData: CardData }) {
  return (
    <SectionAccordion
      id="chains"
      label="Technique chains"
      subtitle="Combine this move into longer sequences"
    >
      <div className="space-y-4">
        {cardData.chains!.map((chain) => (
          <div
            key={chain.label}
            className="rounded-2xl p-4 sm:p-5"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-06)",
            }}
          >
            <p className="text-[14px] font-bold text-foreground/90 mb-2">
              {chain.label}
            </p>
            <p
              className="text-[12px] leading-relaxed mb-4"
              style={{ color: "var(--accent-indigo)" }}
            >
              {chain.sequence}
            </p>
            <div className="space-y-2.5 relative pl-5">
              <div
                className="absolute left-[5px] top-2 bottom-2 w-px"
                style={{ background: "var(--fg-08)" }}
                aria-hidden="true"
              />
              {chain.example.map((line, j) => (
                <div key={j} className="relative">
                  <div
                    className="absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accent-indigo) 50%, transparent)",
                    }}
                    aria-hidden="true"
                  />
                  <p className="text-[13px] leading-snug text-foreground/75">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionAccordion>
  );
}

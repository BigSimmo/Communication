import type { CardData } from "@/lib/card-types";
import { ExampleLines } from "./example-lines";
import { SectionAccordion } from "./section-accordion";

// ── In Practice ──
export function InPracticeSection({ cardData }: { cardData: CardData }) {
  return (
    <SectionAccordion
      id="inpractice"
      label="In practice"
      color="#4ade80"
      subtitle="Without vs. with — see the difference"
    >
      <div className="space-y-3">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(239,68,68,0.18)" }}
        >
          <div
            className="px-4 py-2.5"
            style={{ background: "rgba(239,68,68,0.08)" }}
          >
            <p
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ color: "rgba(248,113,113,0.85)" }}
            >
              Without this technique
            </p>
          </div>
          <div
            className="px-4 pb-4 pt-3 space-y-2"
            style={{ background: "rgba(239,68,68,0.04)" }}
          >
            <ExampleLines
              lines={cardData.example.without}
              color="var(--fg-65)"
            />
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(34,197,94,0.18)" }}
        >
          <div
            className="px-4 py-2.5"
            style={{ background: "rgba(34,197,94,0.08)" }}
          >
            <p
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ color: "rgba(74,222,128,0.85)" }}
            >
              With this technique
            </p>
          </div>
          <div
            className="px-4 pb-4 pt-3 space-y-2"
            style={{ background: "rgba(34,197,94,0.04)" }}
          >
            <ExampleLines lines={cardData.example.with} color="var(--fg-78)" />
          </div>
        </div>

        {cardData.example.note && (
          <div
            className="rounded-2xl px-4 py-3"
            style={{
              background: "rgba(245,158,11,0.06)",
              border: "1px solid rgba(245,158,11,0.14)",
            }}
          >
            <p
              className="text-[12px] italic"
              style={{ color: "rgba(245,158,11,0.7)" }}
            >
              {cardData.example.note}
            </p>
          </div>
        )}
      </div>
    </SectionAccordion>
  );
}

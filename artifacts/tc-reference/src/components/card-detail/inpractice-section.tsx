import type { CardData } from "@/lib/card-types";
import { ExampleLines } from "./example-lines";
import { SectionAccordion } from "./section-accordion";

// ── In Practice ──
export function InPracticeSection({ cardData }: { cardData: CardData }) {
  return (
    <SectionAccordion
      id="inpractice"
      label="In practice"
      subtitle="The same moment without and with the technique"
    >
      <div className="space-y-3">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border:
              "1px solid color-mix(in srgb, var(--accent-red) 18%, transparent)",
          }}
        >
          <div
            className="px-4 py-2.5"
            style={{
              background:
                "color-mix(in srgb, var(--accent-red) 8%, transparent)",
            }}
          >
            <p
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ color: "var(--accent-red)" }}
            >
              Without this technique
            </p>
          </div>
          <div
            className="px-4 pb-4 pt-3 space-y-2"
            style={{
              background:
                "color-mix(in srgb, var(--accent-red) 4%, transparent)",
            }}
          >
            <ExampleLines
              lines={cardData.example.without}
              color="var(--fg-65)"
            />
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border:
              "1px solid color-mix(in srgb, var(--accent-green) 18%, transparent)",
          }}
        >
          <div
            className="px-4 py-2.5"
            style={{
              background:
                "color-mix(in srgb, var(--accent-green) 8%, transparent)",
            }}
          >
            <p
              className="text-[11px] font-bold tracking-widest uppercase"
              style={{ color: "var(--accent-green)" }}
            >
              With this technique
            </p>
          </div>
          <div
            className="px-4 pb-4 pt-3 space-y-2"
            style={{
              background:
                "color-mix(in srgb, var(--accent-green) 4%, transparent)",
            }}
          >
            <ExampleLines lines={cardData.example.with} color="var(--fg-78)" />
          </div>
        </div>

        {cardData.example.note && (
          <div
            className="rounded-2xl px-4 py-3"
            style={{
              background: "color-mix(in srgb, var(--brand) 6%, transparent)",
              border:
                "1px solid color-mix(in srgb, var(--brand) 14%, transparent)",
            }}
          >
            <p
              className="text-[12px] italic"
              style={{ color: "var(--brand-text)" }}
            >
              {cardData.example.note}
            </p>
          </div>
        )}
      </div>
    </SectionAccordion>
  );
}

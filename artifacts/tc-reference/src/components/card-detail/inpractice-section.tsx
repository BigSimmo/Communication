import type { CardData } from "@/lib/card-types";
import { SectionAccordion, type CardSection } from "./section-accordion";

export function InPracticeSection({
  cardData,
  open,
  onToggle,
}: {
  cardData: CardData;
  open: boolean;
  onToggle: (id: CardSection) => void;
}) {
  return (
    <SectionAccordion
      id="inpractice"
      open={open}
      onToggle={onToggle}
      label="In Practice"
      color="var(--accent-green)"
      subtitle="Without vs. with — see the difference"
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
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{
                color: "color-mix(in srgb, var(--accent-red) 85%, transparent)",
              }}
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
            {cardData.example.without.map((line, i) => (
              <p
                key={i}
                className="text-[13px] leading-relaxed"
                style={{ color: "var(--fg-65)" }}
              >
                {line}
              </p>
            ))}
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
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{
                color:
                  "color-mix(in srgb, var(--accent-green) 85%, transparent)",
              }}
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
            {cardData.example.with.map((line, i) => (
              <p
                key={i}
                className="text-[13px] leading-relaxed"
                style={{ color: "var(--fg-78)" }}
              >
                {line}
              </p>
            ))}
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
              style={{
                color: "color-mix(in srgb, var(--brand-text) 70%, transparent)",
              }}
            >
              {cardData.example.note}
            </p>
          </div>
        )}
      </div>
    </SectionAccordion>
  );
}

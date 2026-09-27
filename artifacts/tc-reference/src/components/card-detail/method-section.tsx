import { Check, Copy } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { SectionAccordion } from "./section-accordion";

// ── The Method ──
export function MethodSection({
  cardData,
  copiedPhrase,
  handleCopy,
}: {
  cardData: CardData;
  copiedPhrase: string | null;
  handleCopy: (phrase: string) => void;
}) {
  return (
    <SectionAccordion
      id="method"
      label="The method"
      subtitle={`${cardData.method?.length ?? 0}-step guide`}
    >
      {cardData.fieldTip && (
        <div
          className="rounded-2xl p-4 sm:p-5 mb-5"
          style={{
            background: "color-mix(in srgb, var(--brand) 8%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--brand) 20%, transparent)",
          }}
        >
          <p
            className="text-[11px] font-bold tracking-widest uppercase mb-2"
            style={{ color: "var(--brand-text)" }}
          >
            Guiding principle
          </p>
          <p className="text-[15px] font-bold text-foreground/90 mb-1.5 leading-snug">
            {cardData.fieldTip.headline}
          </p>
          <p className="text-[13px] leading-relaxed text-foreground/65 whitespace-pre-line">
            {cardData.fieldTip.body}
          </p>
          {cardData.fieldTip.example && (
            <div
              className="mt-3 rounded-xl p-3"
              style={{
                background: "var(--fg-03)",
                border: "1px solid var(--fg-06)",
              }}
            >
              <p className="text-[12px] italic text-foreground/60 mb-2">
                They say {cardData.fieldTip.example}
              </p>
              <div className="flex flex-wrap gap-2">
                {cardData.fieldTip.dont && (
                  <span
                    className="text-[12px] leading-snug px-3 py-1.5 rounded-xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accent-red) 8%, transparent)",
                      border:
                        "1px solid color-mix(in srgb, var(--accent-red) 18%, transparent)",
                      color: "var(--accent-red)",
                    }}
                  >
                    Don't: {cardData.fieldTip.dont}
                  </span>
                )}
                {cardData.fieldTip.do && (
                  <span
                    className="text-[12px] leading-snug px-3 py-1.5 rounded-xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--accent-green) 8%, transparent)",
                      border:
                        "1px solid color-mix(in srgb, var(--accent-green) 18%, transparent)",
                      color: "var(--accent-green)",
                    }}
                  >
                    Do: {cardData.fieldTip.do}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* One number per step, beside the title. No side rail, so the text
          keeps the full width on phones. */}
      <ol className="space-y-2.5">
        {cardData.method!.map((m) => {
          const hasExamples = !!m.examples && m.examples.length > 0;
          return (
            <li
              key={m.step}
              className="rounded-2xl p-4"
              style={{
                background: "var(--fg-03)",
                border: "1px solid var(--fg-06)",
              }}
            >
              <div className="flex items-start gap-2.5 mb-1.5">
                <span
                  className="w-6 h-6 mt-[-1px] rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold"
                  style={{
                    background: "var(--brand)",
                    color: "var(--brand-contrast)",
                  }}
                  aria-hidden="true"
                >
                  {m.step}
                </span>
                <p className="text-[15px] leading-snug font-bold text-foreground/90">
                  <span className="sr-only">Step {m.step}: </span>
                  {m.title}
                </p>
              </div>
              <p
                className={`text-[14px] text-foreground/75 leading-relaxed whitespace-pre-line ${
                  hasExamples ? "mb-3" : ""
                }`}
              >
                {m.body}
              </p>
              {hasExamples && (
                <div
                  className="space-y-1.5 rounded-xl p-3"
                  style={{
                    background: "var(--fg-02)",
                    border: "1px solid var(--fg-04)",
                  }}
                >
                  {m.examples!.map((ex, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span
                        className="text-[10px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]"
                        style={{ color: "var(--fg-55)" }}
                      >
                        {ex.label}
                      </span>
                      <p
                        className="text-[13px] flex-1"
                        style={{ color: "var(--fg-78)" }}
                      >
                        {ex.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {cardData.liveThreadClues && cardData.liveThreadClues.length > 0 && (
        <div
          className="rounded-2xl p-4 sm:p-5 mt-5"
          style={{
            background: "var(--fg-03)",
            border: "1px solid var(--fg-06)",
          }}
        >
          <p className="text-[11px] font-bold tracking-widest text-foreground/55 uppercase mb-1">
            Live-thread clues
          </p>
          <p className="text-[12px] text-foreground/50 mb-3">
            Words that usually mark the thread worth pulling
          </p>
          <div className="flex flex-wrap gap-2">
            {cardData.liveThreadClues.map((c) => (
              <span
                key={c}
                className="text-[12px] leading-snug px-3 py-1.5 rounded-xl"
                style={{
                  background: "var(--fg-05)",
                  border: "1px solid var(--fg-08)",
                  color: "var(--fg-70)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {cardData.depthDial && cardData.depthDial.length > 0 && (
        <div className="mt-5">
          <p className="text-[11px] font-bold tracking-widest text-foreground/55 uppercase mb-1">
            The depth dial
          </p>
          <p className="text-[12px] text-foreground/50 mb-3">
            Match how deep you go to the level of trust present
          </p>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "var(--fg-03)",
              border: "1px solid var(--fg-05)",
            }}
          >
            {cardData.depthDial.map((row, i) => (
              <div
                key={row.depth}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-3"
                style={{
                  borderBottom:
                    i < cardData.depthDial!.length - 1
                      ? "1px solid var(--fg-05)"
                      : "none",
                }}
              >
                {/* Phones: label line above the phrase; wider: side column */}
                <div className="flex-shrink-0 flex flex-wrap items-baseline gap-x-2 sm:block sm:w-[88px]">
                  <p className="text-[13px] font-bold text-foreground/90">
                    {row.depth}
                  </p>
                  <p className="text-[11px] text-foreground/60 leading-tight">
                    {row.useWhen}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(row.phrase)}
                  aria-label={`Copy: ${row.phrase}`}
                  className="w-full sm:w-auto sm:flex-1 text-left flex items-center justify-between gap-2 rounded-xl px-3 py-2 transition-all active:scale-[0.98]"
                  style={{
                    background:
                      copiedPhrase === row.phrase
                        ? "color-mix(in srgb, var(--brand) 10%, transparent)"
                        : "var(--fg-03)",
                    border: "1px solid var(--fg-06)",
                  }}
                >
                  <span
                    className="text-[13px]"
                    style={{
                      color:
                        copiedPhrase === row.phrase
                          ? "var(--brand-text)"
                          : "var(--fg-78)",
                    }}
                  >
                    {row.phrase}
                  </span>
                  {copiedPhrase === row.phrase ? (
                    <Check
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "var(--brand-text)" }}
                    />
                  ) : (
                    <Copy
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: "var(--fg-45)" }}
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionAccordion>
  );
}

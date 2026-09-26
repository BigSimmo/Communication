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
      color="var(--brand)"
      subtitle={`${cardData.method?.length ?? 0}-step execution guide`}
    >
      {cardData.fieldTip && (
        <div
          className="rounded-2xl p-5 mb-5"
          style={{
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.2)",
          }}
        >
          <p
            className="text-[11px] font-bold tracking-widest uppercase mb-2"
            style={{ color: "rgba(245,158,11,0.85)" }}
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
                    className="text-[12px] px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.18)",
                      color: "rgba(248,113,113,0.9)",
                    }}
                  >
                    Don't: {cardData.fieldTip.dont}
                  </span>
                )}
                {cardData.fieldTip.do && (
                  <span
                    className="text-[12px] px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.18)",
                      color: "rgba(74,222,128,0.95)",
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

      <div className="space-y-3 relative pl-7">
        <div
          className="absolute left-3 top-6 bottom-6 w-px"
          style={{ background: "var(--fg-08)" }}
          aria-hidden="true"
        />
        {cardData.method!.map((m, i) => (
          <div key={m.step} className="relative">
            <div
              className="absolute -left-7 top-3 w-6 h-6 rounded-full flex items-center justify-center z-10"
              style={{
                background: "var(--brand)",
                color: "var(--brand-contrast)",
              }}
              aria-hidden="true"
            >
              <span className="text-[11px] font-bold">{i + 1}</span>
            </div>
            <div
              className="rounded-2xl p-4 shadow-sm"
              style={{
                background: "var(--fg-03)",
                border: "1px solid var(--fg-06)",
              }}
            >
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span
                  className="text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(245,158,11,0.12)",
                    color: "var(--brand-text)",
                  }}
                >
                  {m.step}
                </span>
                <p className="text-[14px] font-bold text-foreground/90">
                  {m.title}
                </p>
              </div>
              <p className="text-[13px] text-foreground/65 leading-relaxed mb-3 whitespace-pre-line">
                {m.body}
              </p>
              {m.examples && m.examples.length > 0 && (
                <div
                  className="space-y-1.5 rounded-xl p-3"
                  style={{
                    background: "var(--fg-02)",
                    border: "1px solid var(--fg-04)",
                  }}
                >
                  {m.examples.map((ex, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span
                        className="text-[10px] font-bold tracking-wider uppercase mt-1 flex-shrink-0 w-[64px]"
                        style={{ color: "var(--fg-38)" }}
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
            </div>
          </div>
        ))}
      </div>

      {cardData.liveThreadClues && cardData.liveThreadClues.length > 0 && (
        <div
          className="rounded-2xl p-5 mt-5"
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
                className="text-[12px] px-3 py-1.5 rounded-full"
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
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  borderBottom:
                    i < cardData.depthDial!.length - 1
                      ? "1px solid var(--fg-05)"
                      : "none",
                }}
              >
                <div className="flex-shrink-0 w-[88px]">
                  <p className="text-[13px] font-bold text-foreground/90">
                    {row.depth}
                  </p>
                  <p className="text-[11px] text-foreground/45 leading-tight">
                    {row.useWhen}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(row.phrase)}
                  aria-label={`Copy: ${row.phrase}`}
                  className="flex-1 text-left flex items-center justify-between gap-2 rounded-xl px-3 py-2 transition-all active:scale-[0.98]"
                  style={{
                    background:
                      copiedPhrase === row.phrase
                        ? "rgba(245,158,11,0.1)"
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

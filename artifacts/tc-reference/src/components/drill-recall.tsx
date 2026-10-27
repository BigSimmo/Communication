import { useState } from "react";

/**
 * Active-recall step for the daily drill: ask the reader to bring the card's
 * minimum viable move to mind before showing it. One tap reveals; Skip hides
 * the prompt for this card. Parent keys this by card + day so it resets.
 */
export function DrillRecall({ move }: { move: string }) {
  const [phase, setPhase] = useState<"ask" | "shown" | "skipped">("ask");
  if (phase === "skipped") return null;

  return (
    <div
      className="mt-4 rounded-xl p-3"
      style={{ background: "var(--fg-05)", border: "1px solid var(--fg-08)" }}
      data-testid="drill-recall"
    >
      {phase === "ask" ? (
        <>
          <p
            className="text-[13px] font-semibold"
            style={{ color: "var(--fg-82)" }}
          >
            Quick recall: what is the move?
          </p>
          <p className="text-[12px] mt-0.5" style={{ color: "var(--fg-55)" }}>
            Say it in your head first, then check.
          </p>
          <div className="mt-2.5 flex gap-2">
            <button
              type="button"
              onClick={() => setPhase("shown")}
              className="min-h-[44px] flex-1 px-4 rounded-xl text-[13px] font-bold active:scale-95 transition-all"
              style={{
                background: "color-mix(in srgb, var(--brand) 14%, transparent)",
                color: "var(--brand-text)",
              }}
            >
              Show the move
            </button>
            <button
              type="button"
              onClick={() => setPhase("skipped")}
              className="min-h-[44px] px-4 rounded-xl text-[13px] font-semibold"
              style={{ color: "var(--fg-55)" }}
            >
              Skip
            </button>
          </div>
        </>
      ) : (
        <div role="status" aria-live="polite">
          <p
            className="text-[11px] font-semibold tracking-wide uppercase"
            style={{ color: "var(--fg-55)" }}
          >
            The move
          </p>
          <p
            className="text-[15px] leading-relaxed font-medium mt-1"
            style={{ color: "var(--fg-90)" }}
          >
            {move}
          </p>
        </div>
      )}
    </div>
  );
}

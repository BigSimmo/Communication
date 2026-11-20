import type { CSSProperties, ReactNode, Ref } from "react";
import { Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WeekDay } from "@/lib/drill-view";

const DAY_STYLE: Record<WeekDay["state"], CSSProperties> = {
  today: { background: "var(--brand)", color: "var(--brand-contrast)" },
  done: {
    background: "color-mix(in srgb, var(--brand) 18%, transparent)",
    color: "var(--brand-text)",
  },
  open: { background: "var(--fg-08)", color: "var(--fg-70)" },
  ahead: { border: "1px dashed var(--fg-25)", color: "var(--fg-60)" },
};

const CARD_STYLE: CSSProperties = {
  background: "var(--surface-card)",
  border: "1px solid var(--fg-07)",
  boxShadow: "var(--shadow-card)",
};

interface DrillDoneProps {
  /** Receives focus when the drill is finished, so the result is announced. */
  statusRef: Ref<HTMLDivElement>;
  /** "Day 2 done" or "Done for today". */
  title: string;
  /** "Reflective listening · rated Getting there". */
  detail?: string;
  /** Left out when the last finish can no longer be undone. */
  onUndo?: () => void;
  streak: number;
  week: readonly WeekDay[];
  /** A line for finishing a technique or the whole track. */
  milestone?: ReactNode;
  /** What tomorrow holds: a small line over a title. */
  next?: { meta: string; title: string };
  /** Reviews due, between the streak and tomorrow. */
  children?: ReactNode;
}

/**
 * The drill once today's task is finished: what was done (with Undo), the
 * streak across this week, and what comes tomorrow.
 */
export function DrillDone({
  statusRef,
  title,
  detail,
  onUndo,
  streak,
  week,
  milestone,
  next,
  children,
}: DrillDoneProps) {
  const drilled = week.filter(
    (d) => d.state === "done" || d.state === "today",
  ).length;

  return (
    <>
      <div
        ref={statusRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        data-testid="drill-done"
        className="rounded-[20px] px-5 py-7 flex flex-col items-center text-center gap-3"
        style={{
          background: "var(--fg-05)",
          border: "1px solid var(--fg-15)",
        }}
      >
        <span
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: "var(--accent-green)",
            color: "hsl(var(--background))",
          }}
        >
          <Check className="w-8 h-8" strokeWidth={2.4} aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-1">
          <h2
            className="text-[22px] leading-[1.2] font-bold tracking-[-0.01em]"
            style={{ color: "var(--fg-90)" }}
          >
            {title}
          </h2>
          {detail && (
            <p
              className="text-[15px] leading-[1.45]"
              style={{ color: "var(--fg-70)" }}
            >
              {detail}
            </p>
          )}
        </div>
        {onUndo && (
          <Button
            variant="quiet"
            size="sm"
            onClick={onUndo}
            data-testid="drill-undo"
          >
            Undo
          </Button>
        )}
      </div>

      {milestone && (
        <p
          className="text-[15px] leading-[1.45]"
          style={{ color: "var(--fg-70)" }}
          data-testid="drill-milestone"
        >
          {milestone}
        </p>
      )}

      <div
        className="rounded-[20px] p-4 flex flex-col gap-3"
        style={CARD_STYLE}
      >
        <div className="flex items-center justify-between gap-3">
          <p
            className="flex items-center gap-2 text-[17px] leading-[1.3] font-semibold"
            style={{ color: "var(--fg-90)" }}
          >
            <Flame
              className="w-[22px] h-[22px] flex-none"
              style={{ color: "var(--brand-text)" }}
              aria-hidden="true"
            />
            {streak} day streak
          </p>
          <span className="text-[13px]" style={{ color: "var(--fg-60)" }}>
            This week
          </span>
        </div>
        <p className="sr-only">
          Drilled on {drilled} of 7 days this week, Monday to Sunday.
        </p>
        <div className="grid grid-cols-7 gap-1.5" aria-hidden="true">
          {week.map((day, i) => (
            <span key={i} className="flex justify-center">
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-[14px] font-bold"
                style={DAY_STYLE[day.state]}
                data-day-state={day.state}
              >
                {day.letter}
              </span>
            </span>
          ))}
        </div>
      </div>

      {children}

      {next && (
        <div
          className="rounded-[20px] px-4 py-[13px] min-h-14 flex flex-col justify-center gap-1"
          style={CARD_STYLE}
          data-testid="drill-next"
        >
          <p
            className="text-[13px] leading-[1.35]"
            style={{ color: "var(--fg-60)" }}
          >
            {next.meta}
          </p>
          <p
            className="text-[17px] leading-[1.3] font-semibold"
            style={{ color: "var(--fg-90)" }}
          >
            {next.title}
          </p>
        </div>
      )}
    </>
  );
}

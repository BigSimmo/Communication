import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import { categoryStyleFor } from "@/lib/design-tokens";
import {
  STATUS_LABELS,
  STATUS_ORDER,
  type CategoryProgress,
  type ProgressCounts,
  type TechniqueStatus,
} from "@/lib/drill-view";

const EYEBROW = "text-[12px] font-bold uppercase tracking-[0.06em]";

/** Fill for each status in the bars and the key. Shape and text carry the
    meaning too, so colour is never the only cue. */
const STATUS_FILL: Record<TechniqueStatus, string> = {
  confident: "var(--brand)",
  "getting-there": "color-mix(in srgb, var(--brand) 45%, transparent)",
  "not-yet": "var(--fg-35)",
  "not-started": "var(--fg-10)",
};

const CARD_STYLE: CSSProperties = {
  background: "var(--surface-card)",
  border: "1px solid var(--fg-07)",
  boxShadow: "var(--shadow-card)",
};

function plural(n: number, word: string) {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

/** "3 confident, 1 getting there, 2 due for review": the non-zero counts. */
export function progressSummary(counts: ProgressCounts): string {
  const parts = STATUS_ORDER.filter(
    (s) => s !== "not-started" && counts.byStatus[s] > 0,
  ).map((s) => `${counts.byStatus[s]} ${STATUS_LABELS[s].toLowerCase()}`);
  if (counts.due > 0) parts.push(`${counts.due} due for review`);
  return parts.length > 0 ? parts.join(", ") : "Not started yet";
}

/** One bar split by status; decorative, the counts are written out beside it. */
function StatusBar({
  counts,
  height,
}: {
  counts: ProgressCounts;
  height: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="flex w-full overflow-hidden rounded-full"
      style={{ height, background: STATUS_FILL["not-started"] }}
    >
      {STATUS_ORDER.filter((s) => s !== "not-started").map((s) =>
        counts.byStatus[s] > 0 ? (
          <span
            key={s}
            style={{
              width: `${(counts.byStatus[s] / Math.max(1, counts.total)) * 100}%`,
              background: STATUS_FILL[s],
            }}
          />
        ) : null,
      )}
    </div>
  );
}

interface DrillProgressProps {
  overall: ProgressCounts;
  categories: readonly CategoryProgress[];
  /** Opens the track picker on that category. */
  onPickCategory?: (category: string) => void;
}

/**
 * How every technique stands: Confident, Getting there, Not yet or not
 * started, with reviews due, overall and per library category.
 */
export function DrillProgress({
  overall,
  categories,
  onPickCategory,
}: DrillProgressProps) {
  const started = overall.total - overall.byStatus["not-started"];
  return (
    <section
      aria-labelledby="drill-progress-heading"
      className="flex flex-col gap-2"
      data-testid="drill-progress"
    >
      <div className="flex items-center justify-between gap-3">
        <h2
          id="drill-progress-heading"
          className={EYEBROW}
          style={{ color: "var(--fg-60)" }}
        >
          Your progress
        </h2>
        <span className="text-[13px]" style={{ color: "var(--fg-60)" }}>
          {started} of {plural(overall.total, "technique")} started
        </span>
      </div>

      <div
        className="rounded-[20px] p-4 flex flex-col gap-3"
        style={CARD_STYLE}
      >
        <StatusBar counts={overall} height={10} />
        <dl
          className="grid grid-cols-2 gap-x-3 gap-y-2"
          data-testid="drill-progress-overall"
        >
          {STATUS_ORDER.map((s) => (
            <div key={s} className="flex items-center gap-2 min-w-0">
              <span
                aria-hidden="true"
                className="w-3 h-3 rounded-[4px] flex-none"
                style={{
                  background: STATUS_FILL[s],
                  border:
                    s === "not-started" ? "1px solid var(--fg-25)" : undefined,
                }}
              />
              <dt
                className="text-[13px] leading-[1.3] min-w-0"
                style={{ color: "var(--fg-70)" }}
              >
                {STATUS_LABELS[s]}
              </dt>
              <dd
                className="ml-auto text-[15px] font-bold tabular-nums"
                style={{ color: "var(--fg-90)" }}
              >
                {overall.byStatus[s]}
              </dd>
            </div>
          ))}
          <div className="col-span-2 flex items-center gap-2 pt-1 border-t border-[var(--fg-07)]">
            <dt
              className="text-[13px] leading-[1.3] pt-1"
              style={{ color: "var(--fg-70)" }}
            >
              Due for review
            </dt>
            <dd
              className="ml-auto pt-1 text-[15px] font-bold tabular-nums"
              style={{ color: "var(--fg-90)" }}
            >
              {overall.due}
            </dd>
          </div>
        </dl>
      </div>

      <h3 className="sr-only">By category</h3>
      <ul
        className="rounded-[20px] overflow-hidden divide-y divide-[var(--fg-07)]"
        style={CARD_STYLE}
      >
        {categories.map((c) => {
          const style = categoryStyleFor(c.category);
          const confident = c.byStatus.confident;
          const body = (
            <>
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full flex-none mt-[7px] self-start"
                style={{ background: style.color }}
              />
              <span className="flex-1 min-w-0 flex flex-col gap-1.5">
                <span className="flex items-baseline justify-between gap-2">
                  <span
                    className="text-[15px] leading-[1.3] font-semibold min-w-0"
                    style={{ color: "var(--fg-90)" }}
                  >
                    {style.label}
                  </span>
                  <span
                    className="text-[13px] tabular-nums whitespace-nowrap"
                    style={{ color: "var(--fg-60)" }}
                  >
                    {confident} of {c.total}
                    <span className="sr-only"> confident.</span>
                  </span>
                </span>
                <StatusBar counts={c} height={6} />
                <span
                  className="text-[13px] leading-[1.35]"
                  style={{ color: "var(--fg-60)" }}
                >
                  {progressSummary(c)}
                </span>
              </span>
            </>
          );
          return (
            <li key={c.category} data-testid={`drill-progress-${c.category}`}>
              {onPickCategory ? (
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => onPickCategory(c.category)}
                  className="w-full flex items-center gap-3 px-4 py-3 min-h-14 text-left transition-colors hover:bg-[var(--surface-card-hover)] active:bg-[var(--surface-card-hover)]"
                >
                  {body}
                  <span className="sr-only">. Drill this category.</span>
                  <ChevronRight
                    className="w-5 h-5 flex-none"
                    style={{ color: "var(--fg-45)" }}
                    aria-hidden="true"
                  />
                </button>
              ) : (
                <div className="flex items-center gap-3 px-4 py-3">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

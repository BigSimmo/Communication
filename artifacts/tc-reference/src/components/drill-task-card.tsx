import { useId } from "react";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { DrillRecall } from "@/components/drill-recall";
import { DRILL_NOTE_MAX_LENGTH } from "@/lib/drill-session";

type StepState = "todo" | "now" | "done";

function StepNumber({ n, state }: { n: number; state: StepState }) {
  const style =
    state === "done"
      ? { background: "var(--accent-green)", color: "hsl(var(--background))" }
      : state === "now"
        ? { background: "var(--brand)", color: "var(--brand-contrast)" }
        : { background: "var(--fg-10)", color: "var(--fg-80)" };
  return (
    <span
      className="w-7 h-7 rounded-full flex items-center justify-center flex-none text-[14px] font-bold tabular-nums"
      style={style}
    >
      {state === "done" ? (
        <>
          <Check className="w-[18px] h-[18px]" aria-hidden="true" />
          <span className="sr-only">Done, step {n}</span>
        </>
      ) : (
        <>
          <span className="sr-only">Step </span>
          {n}
        </>
      )}
    </span>
  );
}

function Step({
  n,
  state,
  title,
  children,
}: {
  n: number;
  state: StepState;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <li className="p-4 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <StepNumber n={n} state={state} />
        <div
          className="text-[17px] leading-[1.3] font-semibold"
          style={{ color: "var(--fg-90)" }}
        >
          {title}
        </div>
      </div>
      <div className="pl-10">{children}</div>
    </li>
  );
}

interface DrillTaskCardProps {
  /** The card's minimum viable move; the recall step is left out without one. */
  move?: string;
  taskTitle: string;
  task: string;
  recallShown: boolean;
  onShowRecall: () => void;
  note: string;
  onNoteChange: (note: string) => void;
}

/**
 * Today's drill as three short steps: recall the move, do the day's task,
 * put what you noticed into one line. The line is a thinking aid only: it
 * is kept while the app stays open and never saved.
 */
export function DrillTaskCard({
  move,
  taskTitle,
  task,
  recallShown,
  onShowRecall,
  note,
  onNoteChange,
}: DrillTaskCardProps) {
  const noteId = useId();
  const hintId = useId();
  const first = move ? 2 : 1;

  return (
    <ol
      className="rounded-[20px] divide-y divide-[var(--fg-07)]"
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--fg-07)",
        boxShadow: "var(--shadow-card)",
      }}
      data-testid="drill-task-card"
    >
      {move && (
        <Step
          n={1}
          state={recallShown ? "done" : "now"}
          title="Recall the move"
        >
          <DrillRecall move={move} shown={recallShown} onShow={onShowRecall} />
        </Step>
      )}
      <Step
        n={first}
        state={!move || recallShown ? "now" : "todo"}
        title={taskTitle}
      >
        <p
          className="text-[15px] leading-[1.45]"
          style={{ color: "var(--fg-90)" }}
        >
          {task}
        </p>
      </Step>
      <Step
        n={first + 1}
        state="todo"
        title={<label htmlFor={noteId}>Reflect in one line</label>}
      >
        <input
          id={noteId}
          type="text"
          value={note}
          maxLength={DRILL_NOTE_MAX_LENGTH}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="What did you notice?"
          aria-describedby={hintId}
          autoComplete="off"
          enterKeyHint="done"
          className="w-full h-12 rounded-[14px] px-3.5 text-[16px] placeholder:text-[var(--fg-55)]"
          style={{
            background: "var(--fg-05)",
            border: "1px solid var(--fg-15)",
            color: "var(--fg-90)",
          }}
        />
        <p
          id={hintId}
          className="mt-1.5 text-[13px] leading-[1.35]"
          style={{ color: "var(--fg-60)" }}
        >
          Just for now. It is not saved.
        </p>
      </Step>
    </ol>
  );
}

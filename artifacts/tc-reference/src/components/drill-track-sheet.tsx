import { useId, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Check, RefreshCw } from "lucide-react";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import {
  CARD_IDS,
  DRILL_PACES,
  playbookTrack,
  trackDays,
  type DrillPace,
  type DrillState,
  type DrillTrack,
} from "@/lib/drill-state";
import {
  CORE_TRACK_NAME,
  CORE_TRACK_SIZE,
  daysLeft,
  leftLabel,
  PACE_LABELS,
  sameTrack,
  takesLabel,
} from "@/lib/drill-view";
import { usePlaybooks } from "@/lib/playbook-context";
import { PLAYBOOK_TEMPLATES } from "@/lib/playbook-templates";

type TrackKind = DrillTrack["kind"];

const CATEGORY_NAMES = Object.keys(LIBRARY_CATEGORIES);

interface PlaybookOption {
  id: string;
  name: string;
  track: DrillTrack & { kind: "playbook" };
}

const FOCUS_WITHIN =
  "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[hsl(var(--ring))]";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="text-[12px] font-bold uppercase tracking-[0.06em]"
      style={{ color: "var(--fg-60)" }}
    >
      {children}
    </span>
  );
}

function TrackOption({
  name,
  kind,
  checked,
  onSelect,
  title,
  detail,
  count,
  children,
}: {
  name: string;
  kind: TrackKind;
  checked: boolean;
  onSelect: (kind: TrackKind) => void;
  title: string;
  detail: string;
  count: number;
  /** Shown under the row while it is selected: which category or playbook. */
  children?: ReactNode;
}) {
  return (
    <div>
      <label
        className={`flex items-center gap-3 px-4 py-[13px] min-h-[60px] cursor-pointer -outline-offset-2 ${FOCUS_WITHIN}`}
      >
        <input
          type="radio"
          name={name}
          value={kind}
          checked={checked}
          onChange={() => onSelect(kind)}
          className="sr-only"
          data-testid={`drill-track-${kind}`}
        />
        <span className="flex-1 min-w-0 flex flex-col gap-0.5">
          <span
            className="text-[17px] leading-[1.3] font-semibold"
            style={{ color: "var(--fg-90)" }}
          >
            {title}
          </span>
          <span
            className="text-[13px] leading-[1.35]"
            style={{ color: "var(--fg-60)" }}
          >
            {detail}
          </span>
        </span>
        <span
          className="text-[13px] tabular-nums whitespace-nowrap"
          style={{ color: "var(--fg-60)" }}
        >
          {count}
          <span className="sr-only"> techniques</span>
        </span>
        <span
          aria-hidden="true"
          className="w-6 h-6 rounded-full flex items-center justify-center flex-none"
          style={
            checked
              ? {
                  background: "var(--brand)",
                  border: "2px solid var(--brand)",
                  color: "var(--brand-contrast)",
                }
              : { border: "2px solid var(--fg-25)" }
          }
        >
          {checked && <Check className="w-4 h-4" strokeWidth={3} />}
        </span>
      </label>
      {checked && children && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

interface DrillTrackSheetProps {
  state: DrillState;
  /** Reviews due today, for the note under the review explainer. */
  dueCount: number;
  /** Open on Core at three days each: the short way in for a new reader. */
  suggestCore?: boolean;
  /** Open on this library category (from a progress row). */
  initialCategory?: string;
  onApply: (track: DrillTrack, pace: DrillPace) => void;
  onClose: () => void;
}

/**
 * Choose what to drill (Core, one category, a playbook, everything) and how
 * long to stay on each technique. Nothing changes until "Use this track".
 * Mount it only while open: it starts from the drill's current choice each
 * time. Needs PlaybookProvider above it.
 */
export function DrillTrackSheet({
  state,
  dueCount,
  suggestCore = false,
  initialCategory,
  onApply,
  onClose,
}: DrillTrackSheetProps) {
  const { playbooks } = usePlaybooks();
  const groupName = useId();
  const paceName = useId();
  const paceLabelId = useId();
  const current = state.track;

  // Saved playbooks first, then the starter ones. Only those with cards a
  // drill can use; the playbook being drilled stays listed even if it has
  // since been deleted.
  const playbookOptions = useMemo(() => {
    const options: PlaybookOption[] = [];
    const add = (source: {
      id: string;
      name: string;
      cardIds: readonly string[];
    }) => {
      const track = playbookTrack(source);
      if (track.kind !== "playbook" || track.cardIds.length === 0) return;
      if (options.some((o) => o.id === source.id)) return;
      options.push({ id: source.id, name: source.name, track });
    };
    playbooks.forEach(add);
    const savedCount = options.length;
    PLAYBOOK_TEMPLATES.forEach(add);
    if (
      current.kind === "playbook" &&
      !options.some((o) => o.id === current.playbookId)
    ) {
      options.unshift({
        id: current.playbookId,
        name: "Current playbook",
        track: current,
      });
    }
    return { options, savedCount };
  }, [playbooks, current]);

  const startCategory =
    initialCategory && CATEGORY_NAMES.includes(initialCategory)
      ? initialCategory
      : undefined;
  const [kind, setKind] = useState<TrackKind>(
    startCategory ? "category" : suggestCore ? "core" : current.kind,
  );
  const [category, setCategory] = useState(
    startCategory ??
      (current.kind === "category" ? current.category : CATEGORY_NAMES[0]),
  );
  const [playbookId, setPlaybookId] = useState(
    current.kind === "playbook"
      ? current.playbookId
      : (playbookOptions.options[0]?.id ?? ""),
  );
  const [pace, setPace] = useState<DrillPace>(suggestCore ? 3 : state.pace);

  const playbook =
    playbookOptions.options.find((o) => o.id === playbookId) ??
    playbookOptions.options[0];

  // The track as chosen. An untouched playbook choice keeps the drill's own
  // snapshot, so changing only the pace never restarts the track.
  const chosen: DrillTrack =
    kind === "core"
      ? { kind: "core" }
      : kind === "category"
        ? { kind: "category", category }
        : kind === "playbook" && playbook
          ? current.kind === "playbook" && current.playbookId === playbook.id
            ? current
            : playbook.track
          : { kind: "everything" };
  const trackChanged = !sameTrack(chosen, current);
  const started = state.cardIndex > 0 || state.dayIndex > 0;

  const timing = trackChanged
    ? takesLabel(trackDays(chosen, pace, state.order))
    : leftLabel(daysLeft(state, pace));

  const saved = playbookOptions.options.slice(0, playbookOptions.savedCount);
  const starters = playbookOptions.options.slice(playbookOptions.savedCount);

  return (
    <BottomSheet
      open
      onClose={onClose}
      title="Drill track"
      testId="drill-track-sheet"
      action={
        <button
          type="button"
          onClick={onClose}
          className="h-11 px-3 text-[17px] font-semibold"
          style={{ color: "var(--brand-text)" }}
        >
          Cancel
        </button>
      }
      footer={
        <Button
          variant="primary"
          className="w-full"
          onClick={() => onApply(chosen, pace)}
          data-testid="drill-track-apply"
        >
          Use this track
        </Button>
      }
    >
      <div className="flex flex-col gap-4 pt-1">
        <fieldset className="flex flex-col gap-2 min-w-0">
          <legend className="mb-2">
            <Eyebrow>What do you want to get good at?</Eyebrow>
          </legend>
          <div
            className="rounded-[20px] overflow-hidden divide-y divide-[var(--fg-07)]"
            style={{
              background: "var(--surface-card)",
              border: "1px solid var(--fg-07)",
            }}
          >
            <TrackOption
              name={groupName}
              kind="core"
              checked={kind === "core"}
              onSelect={setKind}
              title={CORE_TRACK_NAME}
              detail="The Start here techniques, in order"
              count={CORE_TRACK_SIZE}
            />
            <TrackOption
              name={groupName}
              kind="category"
              checked={kind === "category"}
              onSelect={setKind}
              title="One category"
              detail={categoryStyleFor(category).label}
              count={LIBRARY_CATEGORIES[category]?.length ?? 0}
            >
              <div
                role="group"
                aria-label="Category"
                className="flex flex-wrap gap-2"
              >
                {CATEGORY_NAMES.map((name) => {
                  const style = categoryStyleFor(name);
                  return (
                    <Chip
                      key={name}
                      selected={name === category}
                      dotColor={style.color}
                      count={LIBRARY_CATEGORIES[name].length}
                      onClick={() => setCategory(name)}
                    >
                      {style.short}
                    </Chip>
                  );
                })}
              </div>
            </TrackOption>
            {playbook && (
              <TrackOption
                name={groupName}
                kind="playbook"
                checked={kind === "playbook"}
                onSelect={setKind}
                title="A playbook"
                detail={playbook.name}
                count={playbook.track.cardIds.length}
              >
                <select
                  aria-label="Playbook"
                  value={playbook.id}
                  onChange={(e) => setPlaybookId(e.target.value)}
                  className="w-full h-12 rounded-[14px] px-3 text-[16px]"
                  style={{
                    background: "var(--fg-05)",
                    border: "1px solid var(--fg-15)",
                    color: "var(--fg-90)",
                  }}
                >
                  {saved.length > 0 && (
                    <optgroup label="Your playbooks">
                      {saved.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  {starters.length > 0 && (
                    <optgroup label="Starter playbooks">
                      {starters.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name}
                        </option>
                      ))}
                    </optgroup>
                  )}
                </select>
              </TrackOption>
            )}
            <TrackOption
              name={groupName}
              kind="everything"
              checked={kind === "everything"}
              onSelect={setKind}
              title="Everything"
              detail="All techniques, core first"
              count={CARD_IDS.length}
            />
          </div>
        </fieldset>

        <div
          role="radiogroup"
          aria-labelledby={paceLabelId}
          className="flex flex-col min-w-0"
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <span id={paceLabelId} className="flex">
              <Eyebrow>Pace</Eyebrow>
            </span>
            <span
              className="text-[13px]"
              style={{ color: "var(--fg-60)" }}
              aria-live="polite"
              data-testid="drill-track-timing"
            >
              {timing}
            </span>
          </div>
          <div
            className="grid grid-cols-3 rounded-[14px] p-[3px]"
            style={{ background: "var(--fg-08)" }}
          >
            {DRILL_PACES.map((p) => {
              const selected = p === pace;
              return (
                <label
                  key={p}
                  className={`h-10 rounded-[11px] flex items-center justify-center text-[15px] font-semibold cursor-pointer transition-colors ${FOCUS_WITHIN}`}
                  style={
                    selected
                      ? {
                          background: "var(--surface-segment-active)",
                          color: "var(--fg-90)",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                        }
                      : { color: "var(--fg-70)" }
                  }
                >
                  <input
                    type="radio"
                    name={paceName}
                    value={p}
                    checked={selected}
                    onChange={() => setPace(p)}
                    className="sr-only"
                    data-testid={`drill-pace-${p}`}
                  />
                  {PACE_LABELS[p]}
                </label>
              );
            })}
          </div>
        </div>

        {trackChanged && started && (
          <p
            className="text-[13px] leading-[1.4]"
            style={{ color: "var(--fg-70)" }}
            data-testid="drill-track-restart-note"
          >
            The new track starts at its first technique. Your streak and your
            reviews stay as they are.
          </p>
        )}

        <div
          className="rounded-[20px] p-4 flex flex-col gap-2"
          style={{
            background: "var(--surface-card)",
            border: "1px solid var(--fg-07)",
          }}
        >
          <p
            className="flex items-center gap-2.5 text-[17px] leading-[1.3] font-semibold"
            style={{ color: "var(--fg-90)" }}
          >
            <RefreshCw
              className="w-5 h-5 flex-none"
              style={{ color: "var(--brand-text)" }}
              aria-hidden="true"
            />
            Reviews come back when you need them
          </p>
          <p
            className="text-[13px] leading-[1.45]"
            style={{ color: "var(--fg-60)" }}
          >
            Not yet brings a technique back tomorrow. Once it is sticking, the
            gap grows each time: a day, then about a week, then longer.
            Confident stretches it fastest.
            {dueCount > 0 &&
              ` ${dueCount === 1 ? "1 review is" : `${dueCount} reviews are`} due today.`}
          </p>
        </div>
      </div>
    </BottomSheet>
  );
}

import { useState } from "react";
import type { CardData } from "@/lib/card-types";
import { Button } from "@/components/ui/button";
import {
  drillCardId,
  drillTaskIndex,
  isCompletedToday,
  loadDrillState,
} from "@/lib/drill-state";
import { CardBlock, EYEBROW, Meta, NumberDisc, Surface } from "./card-ui";

/**
 * Where Daily Drill is with this card, if this is the card it is on. The
 * drill only ever has one card in hand, so every other card reads as not
 * started and shows its first task.
 */
function useDrillPlace(cardId: string, taskCount: number) {
  // Read once per card: the page is keyed by card, and drill progress only
  // changes on the Drill tab.
  const [state] = useState(loadDrillState);
  const inDrill = drillCardId(state, state.cardIndex) === cardId;
  if (!inDrill) return { inDrill, taskIndex: 0, label: null, doneToday: false };
  const taskIndex = Math.min(
    drillTaskIndex(state.pace, state.dayIndex),
    Math.max(0, taskCount - 1),
  );
  return {
    inDrill,
    taskIndex,
    label:
      state.pace === 1
        ? "Today's drill"
        : `Drill day ${state.dayIndex + 1} of ${state.pace}`,
    doneToday: isCompletedToday(state),
  };
}

// ── 7-day practice ──
export function PracticeSection({
  cardId,
  cardData,
  setLocation,
}: {
  cardId: string;
  cardData: CardData;
  setLocation: (to: string) => void;
}) {
  const days = cardData.drill;
  const place = useDrillPlace(cardId, days.length);
  const today = days[place.taskIndex];
  if (!today) return null;
  const rest = days.filter((_, i) => i !== place.taskIndex);
  return (
    <CardBlock id="practice" title={`${days.length}-day practice`}>
      <Surface
        feature
        className="p-4 flex flex-col gap-3"
        data-testid="practice-today"
      >
        <div className="flex items-center justify-between gap-3">
          <span className={EYEBROW} style={{ color: "var(--brand-text)" }}>
            {place.inDrill ? "In your drill now" : "Start with"}
          </span>
          <Meta>{place.label ?? `${today.day} of ${days.length}`}</Meta>
        </div>
        <div className="flex gap-[5px]" aria-hidden="true">
          {days.map((d, i) => (
            <span
              key={d.day}
              className="flex-1 h-1.5 rounded-full"
              style={{
                background:
                  place.inDrill && i <= place.taskIndex
                    ? "var(--brand)"
                    : "var(--fg-15)",
                opacity: place.inDrill && i === place.taskIndex ? 0.55 : 1,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <span
            className="text-[17px] font-semibold leading-[1.3]"
            style={{ color: "var(--fg-90)" }}
          >
            <span className="sr-only">{today.day}: </span>
            {today.title}
          </span>
          <span
            className="text-[15px] leading-[1.45]"
            style={{ color: "var(--fg-80)" }}
          >
            {today.task}
          </span>
        </div>
        {place.inDrill && (
          <Button
            variant={place.doneToday ? "secondary" : "primary"}
            onClick={() => setLocation("/drill")}
            data-testid="practice-open-drill"
          >
            {place.doneToday
              ? "Done today. Open Daily Drill"
              : "Start today's practice"}
          </Button>
        )}
      </Surface>

      <h4
        className={`${EYEBROW} mt-2`}
        style={{ color: "var(--fg-60)" }}
        id="practice-rest-title"
      >
        {place.taskIndex === 0 ? "Coming up" : "The rest of the week"}
      </h4>
      <Surface>
        <ol
          aria-labelledby="practice-rest-title"
          className="flex flex-col [&>*+*]:border-t [&>*+*]:border-[var(--fg-07)]"
          data-testid="practice-days"
        >
          {rest.map((d) => (
            <li key={d.day} className="flex items-start gap-3 px-4 py-3">
              <NumberDisc>{d.day.replace(/^Day\s+/i, "")}</NumberDisc>
              <span className="flex-1 min-w-0 flex flex-col gap-0.5 pt-[3px]">
                <span
                  className="text-[16px] font-semibold leading-[1.3]"
                  style={{ color: "var(--fg-90)" }}
                >
                  <span className="sr-only">{d.day}: </span>
                  {d.title}
                </span>
                <span
                  className="text-[14px] leading-[1.45]"
                  style={{ color: "var(--fg-70)" }}
                >
                  {d.task}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </Surface>
    </CardBlock>
  );
}

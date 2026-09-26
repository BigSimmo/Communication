import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import {
  Flame,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Dumbbell,
  Sparkles,
} from "lucide-react";
import { loadCard } from "@/lib/card-loader";
import type { CardData } from "@/lib/card-types";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import {
  CARD_IDS,
  DrillState,
  loadDrillState,
  saveDrillState,
  completeDrill,
  isCompletedToday,
  isStreakActive,
  updateSRS,
  getDueCardsCount,
} from "@/lib/drill-state";

const CARD_TITLE_MAP: Record<string, string> = Object.values(LIBRARY_CATEGORIES)
  .flat()
  .reduce<Record<string, string>>((acc, c) => {
    acc[c.id] = c.title;
    return acc;
  }, {});

export default function Drill() {
  const [, setLocation] = useLocation();
  const [state, setState] = useState<DrillState>(() => loadDrillState());
  const [dueCount, setDueCount] = useState(() => getDueCardsCount());
  const [activeCard, setActiveCard] = useState<{
    cardId: string;
    data: CardData | null;
  } | null>(null);
  const [nextCard, setNextCard] = useState<{
    cardId: string;
    data: CardData | null;
  } | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  const done = isCompletedToday(state);
  const completionRef = useRef<HTMLDivElement>(null);
  const wasDoneRef = useRef(done);

  useEffect(() => {
    if (done && !wasDoneRef.current) {
      requestAnimationFrame(() => completionRef.current?.focus());
    }
    wasDoneRef.current = done;
  }, [done]);
  const streakActive = isStreakActive(state);

  const activeCardIndex =
    done && state.prevCardIndex >= 0 ? state.prevCardIndex : state.cardIndex;
  const activeDayIndex =
    done && state.prevDayIndex >= 0 ? state.prevDayIndex : state.dayIndex;

  const cardId = CARD_IDS[activeCardIndex] ?? CARD_IDS[0];
  const cardData = activeCard?.cardId === cardId ? activeCard.data : null;
  const drillEntry = cardData?.drill[activeDayIndex];
  const cardTitle = CARD_TITLE_MAP[cardId] ?? cardId;

  const nextCardId = CARD_IDS[state.cardIndex] ?? CARD_IDS[0];
  const nextCardTitle = CARD_TITLE_MAP[nextCardId] ?? nextCardId;
  const nextDrillEntry =
    nextCard?.cardId === nextCardId
      ? nextCard.data?.drill[state.dayIndex]
      : undefined;

  useEffect(() => {
    let active = true;
    setLoadFailed(false);
    loadCard(cardId).then(
      (data) => {
        if (!active) return;
        setActiveCard({ cardId, data });
        if (!data) setLoadFailed(true);
      },
      () => {
        if (active) setLoadFailed(true);
      },
    );
    return () => {
      active = false;
    };
  }, [cardId]);

  useEffect(() => {
    if (!done) return;
    let active = true;
    loadCard(nextCardId).then(
      (data) => {
        if (active) setNextCard({ cardId: nextCardId, data });
      },
      () => {
        if (active) setNextCard({ cardId: nextCardId, data: null });
      },
    );
    return () => {
      active = false;
    };
  }, [done, nextCardId]);

  const dayNum = activeDayIndex + 1;

  const totalSessions = CARD_IDS.length * 7;
  const completedSessions =
    state.cardIndex * 7 + state.dayIndex + (done ? 1 : 0);
  const overallPct = Math.round((completedSessions / totalSessions) * 100);

  const handleComplete = (rating: "hard" | "good" | "easy" = "good") => {
    updateSRS(cardId, rating);
    const newState = completeDrill(state);
    saveDrillState(newState);
    setState(newState);
    setDueCount(getDueCardsCount());
  };

  if (!cardData) {
    return (
      <div
        className="flex items-center justify-center min-h-[60vh] px-8 text-center"
        role="status"
        aria-live="polite"
        aria-busy={!loadFailed}
      >
        <h1 className="sr-only">Daily Drill</h1>
        {loadFailed
          ? "Drill content is unavailable right now."
          : "Loading drill…"}
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-background w-full max-w-2xl mx-auto px-4 md:px-6 pt-6 pb-10 gap-5">
      {/* ── Page header ── */}
      <div>
        <div className="flex items-center gap-3 mb-1.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--brand) 18%, transparent) 0%, color-mix(in srgb, var(--brand) 8%, transparent) 100%)",
              border:
                "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
            }}
          >
            <Dumbbell
              className="w-4 h-4"
              style={{ color: "var(--brand-text)" }}
              aria-hidden="true"
            />
          </div>
          <h1
            className="text-[20px] font-bold leading-tight"
            style={{ color: "var(--fg-90)" }}
          >
            Daily Drill
          </h1>
        </div>
        <p
          className="text-[12px] leading-relaxed"
          style={{ color: "var(--fg-55)" }}
        >
          Reinforce communication techniques with quick daily scenario drills.
        </p>
      </div>

      {/* ── Streak + overall progress row ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame
            className="w-5 h-5"
            style={{
              color:
                streakActive && state.streak > 0
                  ? "var(--brand-text)"
                  : "var(--fg-22)",
            }}
            aria-hidden="true"
          />
          <span
            className="text-[13px] font-bold"
            style={{
              color:
                streakActive && state.streak > 0
                  ? "var(--brand-text)"
                  : "var(--fg-55)",
            }}
          >
            {streakActive && state.streak > 0
              ? `${state.streak} day streak`
              : "Start your streak"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {dueCount > 0 && (
            <span
              className="text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-0.5"
              style={{
                background: "color-mix(in srgb, var(--brand) 14%, transparent)",
                color: "var(--brand-text)",
              }}
            >
              <Sparkles className="w-3 h-3" aria-hidden="true" /> {dueCount} due
            </span>
          )}
          <span
            className="text-[12px] font-medium"
            style={{ color: "var(--fg-55)" }}
          >
            Card {activeCardIndex + 1} of {CARD_IDS.length} · Day {dayNum} of 7
          </span>
        </div>
      </div>

      {/* ── Overall progress bar ── */}
      <div
        className="h-1 rounded-full overflow-hidden"
        style={{ background: "var(--fg-06)" }}
        role="progressbar"
        aria-valuenow={completedSessions}
        aria-valuemin={0}
        aria-valuemax={totalSessions}
        aria-label={`Overall drill progress: ${overallPct}%`}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${overallPct}%`,
            background:
              "linear-gradient(90deg, var(--brand), var(--brand-bright))",
          }}
        />
      </div>

      {/* ── Main drill card ── */}
      <div
        className="rounded-2xl p-5"
        style={{
          background: done
            ? "color-mix(in srgb, var(--accent-green) 6%, transparent)"
            : "color-mix(in srgb, var(--brand) 7%, transparent)",
          border: done
            ? "1px solid color-mix(in srgb, var(--accent-green) 18%, transparent)"
            : "1px solid color-mix(in srgb, var(--brand) 20%, transparent)",
        }}
      >
        {/* Card ID + title row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[11px] font-bold tracking-widest uppercase"
                style={{
                  color: done
                    ? "var(--accent-green)"
                    : "color-mix(in srgb, var(--brand-text) 70%, transparent)",
                }}
              >
                {cardId}
              </span>
              {done && (
                <span
                  className="flex items-center gap-1 text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent-green) 12%, transparent)",
                    color: "var(--accent-green)",
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                  Done
                </span>
              )}
            </div>
            <p
              className="text-[15px] font-bold leading-snug"
              style={{ color: "var(--fg-90)" }}
            >
              {cardTitle}
            </p>
          </div>

          {/* Day indicator */}
          <div
            className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-xl"
            style={{
              background: done
                ? "color-mix(in srgb, var(--accent-green) 12%, transparent)"
                : "color-mix(in srgb, var(--brand) 12%, transparent)",
              border: done
                ? "1px solid color-mix(in srgb, var(--accent-green) 20%, transparent)"
                : "1px solid color-mix(in srgb, var(--brand) 20%, transparent)",
            }}
          >
            <span
              className="text-[18px] font-black leading-none"
              style={{
                color: done ? "var(--accent-green)" : "var(--brand-text)",
              }}
            >
              {dayNum}
            </span>
            <span
              className="text-[10px] font-semibold tracking-wide uppercase mt-0.5"
              style={{
                color: done
                  ? "var(--accent-green)"
                  : "color-mix(in srgb, var(--brand-text) 60%, transparent)",
              }}
            >
              / 7
            </span>
          </div>
        </div>

        {/* Day progress dots */}
        <div className="flex gap-1.5 mb-4" aria-label={`Day ${dayNum} of 7`}>
          {Array.from({ length: 7 }).map((_, i) => {
            const isPast = i < activeDayIndex || (done && i === activeDayIndex);
            const isCurrent = i === activeDayIndex && !done;
            return (
              <div
                key={i}
                className="flex-1 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: isPast
                    ? "var(--accent-green)"
                    : isCurrent
                      ? "var(--brand)"
                      : "var(--fg-08)",
                }}
                aria-hidden="true"
              />
            );
          })}
        </div>

        {/* Drill entry title + task */}
        {drillEntry && (
          <>
            <p
              className="text-[11px] font-semibold tracking-wide uppercase mb-2"
              style={{ color: "var(--fg-35)" }}
            >
              {drillEntry.day} · {drillEntry.title}
            </p>
            <p
              className="text-[15px] leading-relaxed font-medium"
              style={{ color: "var(--fg-82)" }}
            >
              {drillEntry.task}
            </p>
          </>
        )}
      </div>

      {/* ── CTA or Done state ── */}
      {done ? (
        <div
          ref={completionRef}
          role="status"
          aria-live="polite"
          tabIndex={-1}
          className="rounded-2xl p-4 flex items-center gap-3"
          style={{
            background:
              "color-mix(in srgb, var(--accent-green) 6%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--accent-green) 13%, transparent)",
          }}
        >
          <CheckCircle2
            className="w-5 h-5 flex-shrink-0"
            style={{ color: "var(--accent-green)" }}
            aria-hidden="true"
          />
          <div className="flex-1 min-w-0">
            <p
              className="text-[13px] font-semibold"
              style={{ color: "var(--accent-green)" }}
            >
              Great work — come back tomorrow
            </p>
            {nextDrillEntry && (
              <p
                className="text-[12px] mt-0.5 truncate"
                style={{ color: "var(--fg-55)" }}
              >
                Next: {nextCardId} · {nextDrillEntry.day} ·{" "}
                {nextDrillEntry.title}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
          <p
            className="text-[12px] font-semibold text-center"
            style={{ color: "var(--fg-55)" }}
          >
            How confident do you feel with this technique?
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleComplete("hard")}
              aria-label={"Hard — review soon"}
              className="py-3 px-2 rounded-xl text-[12px] font-bold transition-all border text-center active:scale-[0.98]"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--accent-red) 30%, transparent)",
                background:
                  "color-mix(in srgb, var(--accent-red) 6%, transparent)",
                color: "var(--accent-red)",
              }}
            >
              <span className="block">Hard</span>
              <span className="block text-[11px] font-semibold opacity-80 mt-0.5">
                Review soon
              </span>
            </button>
            <button
              onClick={() => handleComplete("good")}
              aria-label={"Good — review later"}
              className="py-3 px-2 rounded-xl text-[12px] font-bold transition-all border text-center active:scale-[0.98]"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--accent-blue) 30%, transparent)",
                background:
                  "color-mix(in srgb, var(--accent-blue) 6%, transparent)",
                color: "var(--accent-blue)",
              }}
            >
              <span className="block">Good</span>
              <span className="block text-[11px] font-semibold opacity-80 mt-0.5">
                Review later
              </span>
            </button>
            <button
              onClick={() => handleComplete("easy")}
              aria-label={"Easy — review much later"}
              className="py-3 px-2 rounded-xl text-[12px] font-bold transition-all border text-center active:scale-[0.98]"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--accent-green) 30%, transparent)",
                background:
                  "color-mix(in srgb, var(--accent-green) 6%, transparent)",
                color: "var(--accent-green)",
              }}
            >
              <span className="block">Easy</span>
              <span className="block text-[11px] font-semibold opacity-80 mt-0.5">
                Much later
              </span>
            </button>
          </div>
        </div>
      )}

      {/* ── View full card link ── */}
      <button
        onClick={() => setLocation(`/card/${cardId}`)}
        data-testid="drill-view-card"
        className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-150 text-left"
        style={{
          background: "var(--fg-03)",
          border: "1px solid var(--fg-07)",
        }}
      >
        <div>
          <p
            className="text-[13px] font-semibold"
            style={{ color: "var(--fg-75)" }}
          >
            View full card
          </p>
          <p className="text-[12px] mt-0.5" style={{ color: "var(--fg-55)" }}>
            Phrases, decision tree, scenarios and more
          </p>
        </div>
        <ChevronRight
          className="w-4 h-4 flex-shrink-0"
          style={{ color: "var(--fg-45)" }}
          aria-hidden="true"
        />
      </button>

      {/* ── After completing full card cycle hint ── */}
      {done && state.prevCardIndex >= 0 && state.prevDayIndex === 6 && (
        <div
          className="flex items-center gap-3 rounded-2xl px-4 py-3"
          style={{
            background: "color-mix(in srgb, var(--brand) 6%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--brand) 13%, transparent)",
          }}
        >
          <ArrowRight
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--brand-text)" }}
            aria-hidden="true"
          />
          <p
            className="text-[12px] font-medium"
            style={{ color: "var(--fg-50)" }}
          >
            You finished all 7 days on{" "}
            <span style={{ color: "var(--brand-text)" }}>{cardTitle}</span>.
            Tomorrow starts{" "}
            <span style={{ color: "var(--brand-text)" }}>{nextCardTitle}</span>.
          </p>
        </div>
      )}

      {/* ── Quick tip ── */}
      {!done && (
        <div
          className="rounded-2xl px-4 py-3"
          style={{
            background: "var(--fg-02)",
            border: "1px solid var(--fg-05)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Dumbbell
              className="w-3.5 h-3.5"
              style={{
                color: "color-mix(in srgb, var(--brand-text) 50%, transparent)",
              }}
              aria-hidden="true"
            />
            <p
              className="text-[11px] font-semibold tracking-wide uppercase"
              style={{ color: "var(--fg-55)" }}
            >
              How it works
            </p>
          </div>
          <p
            className="text-[12px] leading-relaxed"
            style={{ color: "var(--fg-60)" }}
          >
            Each card has a 7-day practice plan. Complete today's task, then
            come back tomorrow — one technique at a time, working through all{" "}
            {CARD_IDS.length} cards.
          </p>
        </div>
      )}
    </div>
  );
}

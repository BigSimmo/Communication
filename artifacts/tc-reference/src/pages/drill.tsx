import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { DockBar } from "@/components/ui/dock-bar";
import { DrillDone } from "@/components/drill-done";
import { DrillRating } from "@/components/drill-rating";
import { DrillReviewSheet } from "@/components/drill-review-sheet";
import { DrillReviews } from "@/components/drill-reviews";
import { DrillTaskCard } from "@/components/drill-task-card";
import { DrillTrackSheet } from "@/components/drill-track-sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { loadCard } from "@/lib/card-loader";
import type { CardData } from "@/lib/card-types";
import { categoryStyleFor } from "@/lib/design-tokens";
import {
  completeDrill,
  DRILL_STORAGE_KEY,
  drillCardId,
  drillTaskIndex,
  getDueCardIds,
  isCompletedToday,
  loadDrillState,
  loadSRSMap,
  saveDrillState,
  setDrillPace,
  setDrillTrack,
  SRS_STORAGE_KEY,
  trackCardIds,
  trackDays,
  updateSRS,
  type DrillPace,
  type DrillRating as Rating,
  type DrillState,
  type DrillTrack,
} from "@/lib/drill-state";
import {
  clearDraft,
  clearUndo,
  draftKey,
  emptyDraft,
  loadDraft,
  loadUndo,
  saveDraft,
  saveUndo,
  undoDrill,
  type DrillDraft,
} from "@/lib/drill-session";
import {
  CORE_TRACK_NAME,
  DRILL_CARD_META,
  drillCardTitle,
  durationLabel,
  gapClause,
  previewGaps,
  RATING_LABELS,
  sameTrack,
  trackName,
  weekStrip,
} from "@/lib/drill-view";
import { usePlaybooks } from "@/lib/playbook-context";
import { useStorageSync } from "@/lib/storage-sync";

const EYEBROW = "text-[12px] font-bold uppercase tracking-[0.06em]";

/** A playbook track's name comes from the reader's playbooks, so only this
    needs the playbook context; the other tracks name themselves. */
function PlaybookTrackName({ track }: { track: DrillTrack }) {
  const { playbooks } = usePlaybooks();
  return <>{trackName(track, playbooks)}</>;
}

/** The main action: a floating bar in thumb reach on phones, in the page
    flow from tablet width up, where there is no tab bar to sit above. */
function Dock({ children }: { children: ReactNode }) {
  const wide = useMediaQuery("(min-width: 768px)");
  return wide ? (
    <div className="flex gap-2.5">{children}</div>
  ) : (
    <DockBar>{children}</DockBar>
  );
}

/** A drill nobody has touched: still on the default track at its start. */
function isUntouched(state: DrillState): boolean {
  return (
    state.track.kind === "everything" &&
    state.lastCompletionDate === null &&
    state.cardIndex === 0 &&
    state.dayIndex === 0 &&
    state.rounds === 0
  );
}

export default function Drill() {
  const [, navigate] = useLocation();
  const [state, setState] = useState<DrillState>(() => loadDrillState());
  const [srsMap, setSrsMap] = useState(() => loadSRSMap());
  const [card, setCard] = useState<{
    cardId: string;
    data: CardData | null;
  } | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  // Bumped by the Retry button to re-run the card load after a failure.
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [trackSheet, setTrackSheet] = useState<"closed" | "open" | "suggest">(
    "closed",
  );
  const [reviewId, setReviewId] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");

  // The task the drill points at: today's until it is finished, then
  // tomorrow's.
  const currentId = drillCardId(state, state.cardIndex);
  const currentKey = draftKey(currentId, state.dayIndex);
  const [storedDraft, setStoredDraft] = useState<DrillDraft>(() =>
    loadDraft(currentKey),
  );
  const draft =
    storedDraft.key === currentKey ? storedDraft : emptyDraft(currentKey);
  const updateDraft = (patch: Partial<DrillDraft>) => {
    const next = { ...draft, ...patch };
    setStoredDraft(next);
    saveDraft(next);
  };

  // Another tab completed a drill or rated a card: pick up its progress so
  // finishing here doesn't overwrite it with a stale in-memory copy.
  useStorageSync([DRILL_STORAGE_KEY, SRS_STORAGE_KEY], () => {
    setState(loadDrillState());
    setSrsMap(loadSRSMap());
  });

  const completedToday = isCompletedToday(state);
  // Finished for today, unless the reader chose to do tomorrow's task early.
  const done = completedToday && !draft.ahead;
  // Checked against the review records too: a review of the finished
  // technique saved since (here or in another tab) withdraws the undo.
  const undo = useMemo(
    () => (done ? loadUndo(state, undefined, srsMap) : null),
    [done, state, srsMap],
  );

  const completionRef = useRef<HTMLDivElement>(null);
  const taskHeadingRef = useRef<HTMLHeadingElement>(null);
  const wasDoneRef = useRef(done);
  useEffect(() => {
    if (done !== wasDoneRef.current) {
      // Finishing announces the result; Undo and "do tomorrow's task now"
      // land on the task they reopened.
      const target = done ? completionRef : taskHeadingRef;
      requestAnimationFrame(() => target.current?.focus());
    }
    wasDoneRef.current = done;
  }, [done]);

  // A new card starts a fresh load: clear any earlier failure during render.
  const [prevCardId, setPrevCardId] = useState(currentId);
  if (currentId !== prevCardId) {
    setPrevCardId(currentId);
    setLoadFailed(false);
  }

  useEffect(() => {
    let active = true;
    loadCard(currentId).then(
      (data) => {
        if (!active) return;
        setCard({ cardId: currentId, data });
        if (!data) setLoadFailed(true);
      },
      () => {
        if (active) setLoadFailed(true);
      },
    );
    return () => {
      active = false;
    };
  }, [currentId, loadAttempt]);

  const cardData = card?.cardId === currentId ? card.data : null;
  const taskEntry = cardData
    ? (cardData.drill[drillTaskIndex(state.pace, state.dayIndex)] ??
      cardData.drill[cardData.drill.length - 1])
    : undefined;

  const cardCount = trackCardIds(state).length;
  const hasPrev = state.prevCardIndex >= 0;
  const prevId = hasPrev ? drillCardId(state, state.prevCardIndex) : null;
  // The card on screen: the one just finished, or the one being drilled.
  const shownIndex = done && hasPrev ? state.prevCardIndex : state.cardIndex;

  // Reviews that have come round. Today's own technique is left out while
  // it is being drilled: finishing the drill rates it anyway.
  const due = useMemo(
    () =>
      getDueCardIds(srsMap)
        .filter((id) => done || id !== currentId)
        .map((id) => srsMap[id]),
    [srsMap, done, currentId],
  );

  const finish = () => {
    if (!draft.rating) return;
    const srsBefore = srsMap[currentId] ?? null;
    const srsAfter = updateSRS(currentId, draft.rating);
    const next = completeDrill(state);
    saveDrillState(next);
    saveUndo({
      before: state,
      after: next,
      cardId: currentId,
      srsBefore,
      srsAfter,
      rating: draft.rating,
      ahead: completedToday,
    });
    clearDraft();
    setStoredDraft(emptyDraft(""));
    setState(next);
    setSrsMap(loadSRSMap());
  };

  const handleUndo = () => {
    if (!undo) return;
    const before = undoDrill(undo);
    setState(before);
    setSrsMap(loadSRSMap());
    setStoredDraft(loadDraft(draftKey(undo.cardId, before.dayIndex)));
    setAnnouncement("Undone. The task is open again.");
  };

  const applyTrack = (track: DrillTrack, pace: DrillPace) => {
    let next = state;
    if (!sameTrack(track, state.track)) next = setDrillTrack(next, track);
    if (pace !== next.pace) next = setDrillPace(next, pace);
    if (next !== state) {
      saveDrillState(next);
      // A finish on the old track can't be undone onto the new one.
      clearUndo();
      clearDraft();
      setStoredDraft(emptyDraft(""));
      setState(next);
    }
    setTrackSheet("closed");
  };

  const rateReview = (cardId: string, rating: Rating) => {
    const updated = updateSRS(cardId, rating);
    setSrsMap(loadSRSMap());
    setReviewId(null);
    setAnnouncement(
      `${drillCardTitle(cardId)} ${gapClause(updated.interval)}.`,
    );
  };

  const retryLoad = () => {
    setLoadFailed(false);
    setLoadAttempt((n) => n + 1);
  };

  const header = (
    <header className="flex items-end justify-between gap-3">
      <div className="min-w-0 flex flex-col gap-1">
        <p
          className={EYEBROW}
          style={{ color: "var(--fg-60)" }}
          data-testid="drill-track-label"
        >
          {state.track.kind === "playbook" ? (
            <PlaybookTrackName track={state.track} />
          ) : (
            trackName(state.track)
          )}{" "}
          · {shownIndex + 1} of {cardCount}
        </p>
        <h1
          className="sr-only md:not-sr-only md:text-[32px] md:leading-[1.1] md:font-extrabold md:tracking-[-0.02em]"
          style={{ color: "var(--fg-90)" }}
        >
          Daily Drill
        </h1>
      </div>
      <Chip
        aria-pressed={undefined}
        aria-haspopup="dialog"
        onClick={() => setTrackSheet("open")}
        data-testid="drill-change-track"
      >
        Change track
      </Chip>
    </header>
  );

  const sheets = (
    <>
      {trackSheet !== "closed" && (
        <DrillTrackSheet
          state={state}
          dueCount={due.length}
          suggestCore={trackSheet === "suggest"}
          onApply={applyTrack}
          onClose={() => setTrackSheet("closed")}
        />
      )}
      {reviewId && (
        <DrillReviewSheet
          cardId={reviewId}
          srs={srsMap[reviewId]}
          onRate={rateReview}
          onOpenCard={(id) => navigate(`/card/${id}`)}
          onClose={() => setReviewId(null)}
        />
      )}
      {/* Says what a review or an undo just did; the sheets and buttons
          that caused it are gone by then. */}
      <p aria-live="polite" className="sr-only" data-testid="drill-announce">
        {announcement}
      </p>
    </>
  );

  const page =
    "flex flex-col w-full max-w-2xl mx-auto px-4 md:px-6 pt-3 md:pt-6 pb-24 md:pb-10 gap-4";

  if (done) {
    const week = weekStrip(state);
    const nextTitle = drillCardTitle(currentId);
    const nextIsNewCard = state.dayIndex === 0;
    // Day zero with a card behind it means that card's last day was just
    // finished. Back at the first card from the last one, so was the track.
    const finishedCard = hasPrev && nextIsNewCard;
    const finishedTrack =
      finishedCard &&
      state.cardIndex === 0 &&
      state.prevCardIndex === cardCount - 1;
    const prevTitle = prevId ? drillCardTitle(prevId) : "";

    let milestone: ReactNode;
    if (finishedTrack) {
      milestone = (
        <>
          That is the whole track. It starts again tomorrow, or you can{" "}
          <button
            type="button"
            className="font-semibold underline"
            style={{ color: "var(--brand-text)" }}
            onClick={() => setTrackSheet("open")}
          >
            pick a new one
          </button>
          .
        </>
      );
    } else if (finishedCard && state.pace > 1) {
      milestone = `You have finished ${prevTitle}. It will come back for review. Next up: ${nextTitle}.`;
    }

    return (
      <div className={page}>
        {header}
        <DrillDone
          statusRef={completionRef}
          title={
            hasPrev && state.pace > 1
              ? `Day ${state.prevDayIndex + 1} done`
              : "Done for today"
          }
          detail={
            prevId
              ? `${prevTitle}${undo ? ` · rated ${RATING_LABELS[undo.rating]}` : ""}`
              : undefined
          }
          onUndo={undo ? handleUndo : undefined}
          streak={state.streak}
          week={week}
          milestone={milestone}
          next={
            nextIsNewCard
              ? { meta: "Tomorrow · Next technique", title: nextTitle }
              : {
                  meta: `Tomorrow · Day ${state.dayIndex + 1} of ${state.pace}`,
                  title: taskEntry?.title ?? nextTitle,
                }
          }
        >
          <DrillReviews due={due} onOpen={setReviewId} />
        </DrillDone>
        <Dock>
          <Button
            className="flex-1"
            style={{
              background: "var(--surface-dd)",
              border: "1px solid var(--fg-15)",
              boxShadow: "var(--shadow-dock)",
            }}
            onClick={() => updateDraft({ ahead: true })}
            data-testid="drill-do-next"
          >
            Do tomorrow's task now
          </Button>
        </Dock>
        {sheets}
      </div>
    );
  }

  if (!cardData || !taskEntry) {
    return (
      <div className={page}>
        {header}
        <div className="flex flex-col items-center justify-center gap-4 min-h-[50vh] px-4 text-center">
          <div
            role="status"
            aria-live="polite"
            aria-busy={!loadFailed}
            style={{ color: "var(--fg-70)" }}
          >
            {loadFailed
              ? "Drill content is unavailable right now."
              : "Loading drill…"}
          </div>
          {loadFailed && (
            <Button variant="primary" size="sm" onClick={retryLoad}>
              Retry
            </Button>
          )}
        </div>
        {sheets}
      </div>
    );
  }

  const category = categoryStyleFor(DRILL_CARD_META[currentId]?.category ?? "");
  const dayLabel =
    state.pace === 1 ? "One day" : `Day ${state.dayIndex + 1} of ${state.pace}`;
  const everything = durationLabel(trackDays(state.track, state.pace));
  const core = durationLabel(trackDays({ kind: "core" }, 3));

  return (
    <div className={page}>
      {header}

      {isUntouched(state) && (
        <button
          type="button"
          onClick={() => setTrackSheet("suggest")}
          data-testid="drill-track-hint"
          className="rounded-[20px] px-4 py-[13px] min-h-14 flex items-center gap-3 text-left transition-colors hover:bg-[var(--surface-card-hover)]"
          style={{
            background: "color-mix(in srgb, var(--brand) 8%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
          }}
        >
          <span className="flex-1 min-w-0 flex flex-col gap-0.5">
            <span
              className="text-[17px] leading-[1.3] font-semibold"
              style={{ color: "var(--fg-90)" }}
            >
              Pick a track that fits
            </span>
            <span
              className="text-[13px] leading-[1.4]"
              style={{ color: "var(--fg-70)" }}
            >
              Everything takes {everything.about ? "about " : ""}
              {everything.text} at a week each. {CORE_TRACK_NAME} takes{" "}
              {core.about ? "about " : ""}
              {core.text}.
            </span>
          </span>
          <ChevronRight
            className="w-5 h-5 flex-none"
            style={{ color: "var(--fg-60)" }}
            aria-hidden="true"
          />
        </button>
      )}

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <h2
            ref={taskHeadingRef}
            tabIndex={-1}
            className="min-w-0 flex items-center gap-2 text-[17px] leading-[1.3] font-semibold outline-none"
            style={{ color: "var(--fg-90)" }}
          >
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full flex-none"
              style={{ background: category.color }}
            />
            <span className="truncate">{drillCardTitle(currentId)}</span>
          </h2>
          <span
            className="text-[13px] whitespace-nowrap"
            style={{ color: "var(--fg-60)" }}
          >
            {dayLabel}
          </span>
        </div>
        <div className="flex gap-[5px]" aria-hidden="true">
          {Array.from({ length: state.pace }, (_, i) => (
            <span
              key={i}
              className="flex-1 h-1.5 rounded-full"
              style={{
                background:
                  i <= state.dayIndex ? "var(--brand)" : "var(--fg-10)",
              }}
            />
          ))}
        </div>
      </div>

      <DrillTaskCard
        move={cardData.overview.minimumViableMove}
        taskTitle={taskEntry.title}
        task={taskEntry.task}
        recallShown={draft.recallShown}
        onShowRecall={() => updateDraft({ recallShown: true })}
        note={draft.note}
        onNoteChange={(note) => updateDraft({ note })}
      />

      <Button
        variant="quiet"
        size="sm"
        className="self-start px-1 -my-1.5"
        onClick={() => navigate(`/card/${currentId}`)}
        data-testid="drill-view-card"
      >
        Open the full technique
        <ChevronRight className="w-4 h-4" aria-hidden="true" />
      </Button>

      <DrillRating
        value={draft.rating}
        onChange={(rating) => updateDraft({ rating })}
        gaps={previewGaps(currentId, srsMap[currentId])}
      />

      <DrillReviews due={due} onOpen={setReviewId} />

      <Dock>
        <Button
          variant="primary"
          className="flex-1"
          style={{ boxShadow: "var(--shadow-dock)" }}
          disabled={!draft.rating}
          onClick={finish}
          data-testid="drill-finish"
        >
          {draft.rating
            ? completedToday
              ? "Finish this task"
              : "Finish today's drill"
            : "Rate it to finish"}
        </Button>
      </Dock>
      {sheets}
    </div>
  );
}

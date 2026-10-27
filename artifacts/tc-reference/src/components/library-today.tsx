import { useState } from "react";
import { Link } from "wouter";
import { Dumbbell, History, Zap, ChevronRight } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import {
  drillCardId,
  getDueCardsCount,
  isCompletedToday,
  isStreakActive,
  loadDrillState,
} from "@/lib/drill-state";
import { readRecentCards } from "@/lib/recent-cards";
import { useQuickMode } from "@/lib/quick-mode";

const CARD_TITLES: Record<string, string> = Object.fromEntries(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((c) => [c.id, c.title]),
);

const tileClass =
  "w-full h-full min-w-0 flex items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition-colors active:scale-[0.98] bg-[var(--surface-card)] hover:bg-[var(--surface-card-hover)]";
const tileStyle = {
  border: "1px solid var(--fg-07)",
  boxShadow: "var(--shadow-card)",
  minHeight: 64,
};

function TileIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{
        background: "color-mix(in srgb, var(--brand) 12%, transparent)",
        color: "var(--brand-text)",
      }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function TileText({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <span className="flex-1 min-w-0">
      <span
        className="block text-[11px] font-semibold"
        style={{ color: "var(--fg-55)" }}
      >
        {eyebrow}
      </span>
      <span
        className="block text-[14px] font-semibold leading-snug truncate"
        style={{ color: "var(--fg-90)" }}
      >
        {title}
      </span>
    </span>
  );
}

// "Today" strip at the top of the Library: the daily drill and the last card
// opened, so the two most common next steps are one tap away.
export function LibraryToday() {
  // Read once per visit; the Library remounts on every return to it.
  const [snapshot] = useState(() => {
    const drill = loadDrillState();
    const done = isCompletedToday(drill);
    const streak = isStreakActive(drill) ? drill.streak : 0;
    const nextCard = drillCardId(drill, drill.cardIndex);
    return {
      done,
      streak,
      due: getDueCardsCount(),
      nextTitle: CARD_TITLES[nextCard] ?? nextCard,
      day: drill.dayIndex + 1,
      recent: readRecentCards()[0] ?? null,
    };
  });
  const { setIsOpen } = useQuickMode();

  const drillEyebrow = snapshot.done
    ? `Done today${snapshot.streak > 0 ? `, ${snapshot.streak} day streak` : ""}`
    : snapshot.streak > 0
      ? `Daily drill, ${snapshot.streak} day streak`
      : `Daily drill, day ${snapshot.day} of 7`;
  const drillTitle = snapshot.done
    ? snapshot.due > 0
      ? `${snapshot.due} card${snapshot.due === 1 ? "" : "s"} due for review`
      : "Come back tomorrow"
    : snapshot.nextTitle;

  return (
    <section
      aria-label="Today"
      className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-2"
      data-testid="library-today"
    >
      <Link
        href="/drill"
        className={tileClass}
        style={tileStyle}
        data-testid="library-today-drill"
      >
        <TileIcon>
          <Dumbbell className="w-[18px] h-[18px]" />
        </TileIcon>
        <TileText eyebrow={drillEyebrow} title={drillTitle} />
        <ChevronRight
          className="w-4 h-4 flex-shrink-0"
          style={{ color: "var(--fg-55)" }}
          aria-hidden="true"
        />
      </Link>
      {snapshot.recent ? (
        <Link
          href={`/card/${snapshot.recent}`}
          className={tileClass}
          style={tileStyle}
          data-testid="library-today-recent"
        >
          <TileIcon>
            <History className="w-[18px] h-[18px]" />
          </TileIcon>
          <TileText
            eyebrow="Pick up where you left off"
            title={CARD_TITLES[snapshot.recent] ?? snapshot.recent}
          />
          <ChevronRight
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--fg-55)" }}
            aria-hidden="true"
          />
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={tileClass}
          style={tileStyle}
          data-testid="library-today-quick"
        >
          <TileIcon>
            <Zap className="w-[18px] h-[18px]" />
          </TileIcon>
          <TileText eyebrow="Mid conversation?" title="Quick Lookup a phrase" />
          <ChevronRight
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--fg-55)" }}
            aria-hidden="true"
          />
        </button>
      )}
    </section>
  );
}

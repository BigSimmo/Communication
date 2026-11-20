import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, LifeBuoy, Route, X } from "lucide-react";
import { CORE_CARD_IDS } from "@/lib/data";
import { buttonClass } from "@/components/ui/button";
import {
  dismissWelcome,
  isWelcomeDismissed,
  readStartOpened,
} from "@/lib/start-path";
import { readRecentCards } from "@/lib/recent-cards";

const TOTAL = CORE_CARD_IDS.length;

/**
 * Top of the Library home: a first-run welcome (until dismissed or a card has
 * been opened) and the way into the Start here path with its progress.
 */
export function StartHereShelf() {
  // Read once per visit; the Library remounts on every return to it.
  const [opened] = useState(() => readStartOpened().length);
  const [welcome, setWelcome] = useState(
    () => !isWelcomeDismissed() && readRecentCards().length === 0,
  );
  const close = () => {
    dismissWelcome();
    setWelcome(false);
  };

  if (welcome) {
    return (
      <section
        aria-labelledby="library-welcome-title"
        data-testid="library-welcome"
        className="relative rounded-2xl p-4 pr-12"
        style={{
          background: "var(--surface-card)",
          border: "1px solid color-mix(in srgb, var(--brand) 30%, transparent)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h2
          id="library-welcome-title"
          className="text-[17px] font-bold leading-snug"
          style={{ color: "var(--fg-90)" }}
        >
          Say it better, one technique at a time
        </h2>
        <p
          className="mt-1.5 text-[14px] leading-[1.5]"
          style={{ color: "var(--fg-70)" }}
        >
          Each card gives you what to do, the words to say and a way to
          practise. New here? Begin with the {TOTAL} that cover most
          conversations.
        </p>
        <div className="mt-3.5 flex flex-wrap gap-2">
          <Link
            href="/start"
            onClick={dismissWelcome}
            className={buttonClass("primary", "sm")}
            data-testid="library-welcome-start"
          >
            Start here
          </Link>
          <button
            type="button"
            onClick={close}
            className={buttonClass("quiet", "sm")}
            data-testid="library-welcome-browse"
          >
            Browse everything
          </button>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label="Dismiss welcome"
          className="absolute right-1.5 top-1.5 w-11 h-11 flex items-center justify-center rounded-full"
          style={{ color: "var(--fg-55)" }}
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </section>
    );
  }

  const done = opened >= TOTAL;
  return (
    <Link
      href="/start"
      data-testid="library-start-here"
      className="w-full min-w-0 flex items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition-colors active:scale-[0.98] bg-[var(--surface-card)] hover:bg-[var(--surface-card-hover)]"
      style={{
        border: "1px solid var(--fg-07)",
        boxShadow: "var(--shadow-card)",
        minHeight: 64,
      }}
    >
      <span
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "color-mix(in srgb, var(--brand) 12%, transparent)",
          color: "var(--brand-text)",
        }}
        aria-hidden="true"
      >
        <Route className="w-[18px] h-[18px]" />
      </span>
      <span className="flex-1 min-w-0">
        <span
          className="block text-[11px] font-semibold"
          style={{ color: "var(--fg-55)" }}
        >
          {done
            ? `Start here, all ${TOTAL} opened`
            : `Start here, ${opened} of ${TOTAL} opened`}
        </span>
        <span
          className="block text-[14px] font-semibold leading-snug truncate"
          style={{ color: "var(--fg-90)" }}
        >
          {done
            ? "Revisit the core techniques"
            : `${TOTAL} core techniques, in order`}
        </span>
        <span
          className="mt-1.5 block h-1 rounded-full overflow-hidden"
          style={{ background: "var(--fg-08)" }}
          aria-hidden="true"
        >
          <span
            className="block h-full rounded-full"
            style={{
              width: `${(opened / TOTAL) * 100}%`,
              background: "var(--brand)",
            }}
          />
        </span>
      </span>
      <ChevronRight
        className="w-4 h-4 flex-shrink-0"
        style={{ color: "var(--fg-55)" }}
        aria-hidden="true"
      />
    </Link>
  );
}

/**
 * "Help me right now": the one amber-edged tile on the Library home, for a
 * reader who is mid conversation and needs the words, not a lesson.
 */
export function HelpNowTile() {
  return (
    <Link
      href="/help"
      data-testid="library-help-now"
      className="w-full min-w-0 flex items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition-colors active:scale-[0.98] bg-[var(--surface-card)] hover:bg-[var(--surface-card-hover)]"
      style={{
        border: "1px solid color-mix(in srgb, var(--brand) 40%, transparent)",
        boxShadow: "var(--shadow-card)",
        minHeight: 64,
      }}
    >
      <span
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "var(--brand)",
          color: "var(--brand-contrast)",
        }}
        aria-hidden="true"
      >
        <LifeBuoy className="w-[18px] h-[18px]" />
      </span>
      <span className="flex-1 min-w-0">
        <span
          className="block text-[15px] font-bold leading-snug"
          style={{ color: "var(--fg-90)" }}
        >
          Help me right now
        </span>
        <span
          className="block text-[13px] leading-[1.4]"
          style={{ color: "var(--fg-70)" }}
        >
          Pick your situation, get three lines to say
        </span>
      </span>
      <ChevronRight
        className="w-4 h-4 flex-shrink-0"
        style={{ color: "var(--fg-55)" }}
        aria-hidden="true"
      />
    </Link>
  );
}

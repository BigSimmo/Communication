import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { CORE_CARD_IDS, LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import { nextStartCard, readStartOpened } from "@/lib/start-path";
import { PageIntro } from "@/components/page-intro";
import { buttonClass } from "@/components/ui/button";

// Core cards in path order, with their category, from the light metadata
const BY_ID = new Map(
  Object.entries(LIBRARY_CATEGORIES).flatMap(([category, cards]) =>
    cards.map((card) => [card.id, { ...card, category }] as const),
  ),
);
const STEPS = CORE_CARD_IDS.flatMap((id) => {
  const card = BY_ID.get(id);
  return card ? [card] : [];
});

/** The Start here path: the core techniques in the order to learn them. */
export default function StartHere() {
  // Read once per visit; the page remounts on every return from a card.
  const [opened] = useState(() => new Set(readStartOpened()));
  const nextId = nextStartCard([...opened]);
  const next = nextId ? BY_ID.get(nextId) : undefined;
  const total = STEPS.length;

  return (
    <div className="w-full max-w-full min-w-0 sm:max-w-2xl sm:mx-auto px-4 md:px-6 pt-3 pb-6">
      <Link
        href="/"
        className="tap-target-y inline-flex items-center gap-1.5 text-[13px] font-semibold"
        style={{ color: "var(--brand-text)" }}
        data-testid="start-back"
      >
        <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
        Library
      </Link>

      <PageIntro
        className="mt-2"
        title="Start here"
        description={`${total} techniques that cover most conversations, in the order to learn them. One a day is plenty.`}
      />

      <div
        className="mt-4 rounded-2xl p-4"
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--fg-07)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <p
          className="text-[13px] font-semibold"
          style={{ color: "var(--fg-70)" }}
          data-testid="start-progress"
        >
          {opened.size} of {total} opened
        </p>
        <div
          className="mt-2 h-1.5 rounded-full overflow-hidden"
          style={{ background: "var(--fg-08)" }}
          role="progressbar"
          aria-label="Start here progress"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={opened.size}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${(opened.size / total) * 100}%`,
              background: "var(--brand)",
            }}
          />
        </div>
        {next ? (
          <Link
            href={`/card/${next.id}`}
            className={`${buttonClass("primary", "md")} mt-4 w-full min-w-0`}
            data-testid="start-next"
          >
            <span className="truncate">
              {opened.size === 0 ? "Begin" : "Next"}: {next.title}
            </span>
          </Link>
        ) : (
          <p
            className="mt-3 text-[14px] leading-[1.5]"
            style={{ color: "var(--fg-70)" }}
            data-testid="start-complete"
          >
            You have opened all {total}. Keep them sharp in the{" "}
            <Link
              href="/drill"
              className="font-semibold underline"
              style={{ color: "var(--brand-text)" }}
            >
              Daily Drill
            </Link>
            .
          </p>
        )}
      </div>

      <ol
        className="mt-4 rounded-2xl overflow-hidden divide-y divide-[var(--fg-07)]"
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--fg-07)",
        }}
        data-testid="start-steps"
      >
        {STEPS.map((card, i) => {
          const seen = opened.has(card.id);
          const cat = categoryStyleFor(card.category);
          return (
            <li key={card.id}>
              <Link
                href={`/card/${card.id}`}
                data-testid={`start-step-${card.id}`}
                aria-current={card.id === nextId ? "step" : undefined}
                className="flex items-center gap-3 px-3.5 py-3 min-h-16 transition-colors hover:bg-[var(--surface-card-hover)] active:bg-[var(--surface-card-hover)]"
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[13px] font-bold tabular-nums"
                  style={
                    seen
                      ? {
                          background:
                            "color-mix(in srgb, var(--brand) 16%, transparent)",
                          color: "var(--brand-text)",
                        }
                      : { background: "var(--fg-08)", color: "var(--fg-70)" }
                  }
                >
                  {seen ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span className="sr-only">Opened, step {i + 1}</span>
                    </>
                  ) : (
                    <>
                      <span className="sr-only">Step </span>
                      {i + 1}
                    </>
                  )}
                </span>
                <span className="flex-1 min-w-0">
                  <span
                    className="block text-[15px] font-semibold leading-snug"
                    style={{ color: "var(--fg-90)" }}
                  >
                    {card.title}
                  </span>
                  <span
                    className="mt-0.5 block text-[13px] leading-[1.4]"
                    style={{ color: "var(--fg-70)" }}
                  >
                    {card.summary}
                  </span>
                  <span
                    className="mt-1 flex items-center gap-1.5 text-[12px]"
                    style={{ color: "var(--fg-55)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-none"
                      style={{ background: cat.color }}
                      aria-hidden="true"
                    />
                    {cat.label}
                  </span>
                </span>
                <ChevronRight
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "var(--fg-45)" }}
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

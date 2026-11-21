import { Link, useRoute } from "wouter";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Compass,
  Copy,
  Search,
  ShieldAlert,
  X,
  Zap,
} from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import { SITUATIONS, getSituation, type Situation } from "@/lib/situations";
import { useNav } from "@/lib/nav-context";
import { useCopyFeedback } from "@/hooks/use-copy-feedback";
import { quoted } from "@/lib/utils";
import { buttonClass } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

// Help me right now: pick what is happening, then get one move, three lines
// to say, what to do next and one thing to avoid. Built only from the light
// metadata (./data and ./situations), so it opens without loading any card.

const CARD_BY_ID = new Map(
  Object.entries(LIBRARY_CATEGORIES).flatMap(([category, cards]) =>
    cards.map((card) => [card.id, { ...card, category }] as const),
  ),
);

const surface = {
  background: "var(--surface-card)",
  border: "1px solid var(--fg-07)",
} as const;

function Eyebrow({
  children,
  brand = false,
}: {
  children: React.ReactNode;
  brand?: boolean;
}) {
  return (
    <p
      className="text-[12px] font-bold uppercase tracking-[0.08em] flex items-center gap-1.5"
      style={{ color: brand ? "var(--brand-text)" : "var(--fg-60)" }}
    >
      {children}
    </p>
  );
}

function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="tap-target-y inline-flex items-center gap-1.5 text-[14px] font-semibold"
      style={{ color: "var(--brand-text)" }}
      data-testid="help-back"
    >
      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
      {label}
    </Link>
  );
}

export default function Help() {
  const [isAnswer, params] = useRoute<{ id: string }>("/help/:id");
  if (isAnswer && params) {
    const situation = getSituation(params.id);
    return situation ? <HelpAnswer situation={situation} /> : <HelpNotFound />;
  }
  return <HelpPicker />;
}

function HelpPicker() {
  const { openSearch } = useNav();
  return (
    <div className="w-full max-w-full min-w-0 sm:max-w-2xl sm:mx-auto px-4 md:px-6 pt-4 md:pt-6 pb-8">
      <Eyebrow brand>
        <Zap className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true" />
        In the moment
      </Eyebrow>
      <h1
        className="mt-1.5 text-[28px] font-bold leading-tight tracking-tight"
        style={{ color: "var(--fg-90)" }}
      >
        What's happening?
      </h1>
      <p
        className="mt-1.5 text-[14px] leading-[1.5]"
        style={{ color: "var(--fg-60)" }}
        data-testid="help-scope-note"
      >
        {/* CLINICAL REVIEW NEEDED */}
        This app helps with words, not clinical risk decisions. Follow your
        local protocol.
      </p>

      <ul
        className="mt-5 grid grid-cols-2 gap-2.5"
        aria-label="Situations"
        data-testid="help-situations"
      >
        {SITUATIONS.map((s) => (
          <li
            key={s.id}
            // A safety situation spans the row so it stands apart and its
            // longer label fits.
            className={s.safetyNote ? "flex col-span-2" : "flex"}
          >
            <Link
              href={`/help/${s.id}`}
              data-testid={`help-situation-${s.id}`}
              className="flex-1 flex flex-col justify-center gap-1 rounded-2xl p-3.5 min-h-[92px] transition-colors hover:bg-[var(--surface-card-hover)] active:bg-[var(--surface-card-hover)]"
              style={surface}
            >
              <span
                className="text-[16px] font-bold leading-snug"
                style={{ color: "var(--fg-90)" }}
              >
                {s.label}
              </span>
              <span
                className="text-[13px] leading-snug"
                style={{ color: "var(--fg-60)" }}
              >
                {s.tagline}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={openSearch}
        data-testid="help-describe"
        className="mt-5 w-full flex items-center gap-2.5 h-12 rounded-2xl px-4 text-left text-[16px]"
        style={{
          background: "var(--fg-05)",
          border: "1px solid var(--fg-08)",
          color: "var(--fg-60)",
        }}
      >
        <Search className="w-4 h-4 flex-none" aria-hidden="true" />
        Or describe it in your own words
      </button>

      <p className="mt-4 text-[14px]" style={{ color: "var(--fg-60)" }}>
        Want more options?{" "}
        <Link
          href="/phrases"
          className="font-semibold underline"
          style={{ color: "var(--brand-text)" }}
        >
          Browse the Phrase Bank
        </Link>
      </p>
    </div>
  );
}

function HelpAnswer({ situation }: { situation: Situation }) {
  const { copied, copy } = useCopyFeedback(1800);
  const lead = CARD_BY_ID.get(situation.leadCardId);
  const next = CARD_BY_ID.get(situation.followOn.cardId);
  const leadCat = categoryStyleFor(lead?.category ?? "");

  return (
    <div className="w-full max-w-full min-w-0 sm:max-w-2xl sm:mx-auto px-4 md:px-6 pt-3 md:pt-6 pb-8">
      <BackLink href="/help" label="All situations" />

      <h1
        className="mt-2 text-[26px] font-bold leading-tight tracking-tight"
        style={{ color: "var(--fg-90)" }}
      >
        {situation.label}
      </h1>

      {situation.safetyNote && (
        <section
          aria-labelledby="help-safety"
          className="mt-4 rounded-2xl p-4 flex flex-col gap-1.5"
          style={{
            background:
              "color-mix(in srgb, var(--accent-red) 8%, var(--surface-card))",
            border:
              "1px solid color-mix(in srgb, var(--accent-red) 30%, transparent)",
          }}
          data-testid="help-safety"
        >
          <h2
            id="help-safety"
            className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.08em]"
            style={{ color: "var(--fg-70)" }}
          >
            <ShieldAlert
              className="w-3.5 h-3.5"
              style={{ color: "var(--accent-red)" }}
              aria-hidden="true"
            />
            Safety first
          </h2>
          <p
            className="text-[16px] font-semibold leading-[1.45]"
            style={{ color: "var(--fg-90)" }}
          >
            {situation.safetyNote}
          </p>
        </section>
      )}

      {/* Do this first: the lead technique's one-line move */}
      <section
        aria-labelledby="help-first"
        className="mt-4 rounded-2xl p-4 flex flex-col gap-2"
        style={{
          background:
            "color-mix(in srgb, var(--brand) 8%, var(--surface-card))",
          border: "1px solid color-mix(in srgb, var(--brand) 28%, transparent)",
        }}
        data-testid="help-first"
      >
        <h2 id="help-first">
          <Eyebrow brand>Do this first</Eyebrow>
        </h2>
        <p
          className="text-[20px] font-bold leading-snug"
          style={{ color: "var(--fg-90)" }}
        >
          {lead?.summary}
        </p>
        <p
          className="flex items-center gap-1.5 text-[14px]"
          style={{ color: "var(--fg-70)" }}
        >
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full flex-none"
            style={{ background: leadCat.color }}
          />
          {lead?.title}
        </p>
      </section>

      {/* Say one of these: tap to copy */}
      <section aria-labelledby="help-say" className="mt-5">
        <h2 id="help-say" className="mb-2">
          <Eyebrow>Say one of these</Eyebrow>
        </h2>
        <ul
          className="rounded-2xl overflow-hidden divide-y divide-[var(--fg-07)]"
          style={surface}
          data-testid="help-lines"
        >
          {situation.lines.map((line) => {
            const isCopied = copied === line;
            return (
              <li key={line}>
                <button
                  type="button"
                  onClick={() => copy(line)}
                  aria-label={`Copy: ${line}`}
                  className="w-full flex items-center gap-3 px-4 py-3.5 min-h-16 text-left transition-colors"
                  style={{
                    background: isCopied
                      ? "color-mix(in srgb, var(--brand) 9%, transparent)"
                      : undefined,
                  }}
                >
                  <span
                    className="flex-1 min-w-0 text-[20px] leading-[1.35] font-semibold"
                    style={{
                      color: isCopied ? "var(--brand-text)" : "var(--fg-90)",
                    }}
                  >
                    {line}
                  </span>
                  {isCopied ? (
                    <Check
                      className="w-5 h-5 flex-none"
                      style={{ color: "var(--brand-text)" }}
                      aria-hidden="true"
                    />
                  ) : (
                    <Copy
                      className="w-5 h-5 flex-none"
                      style={{ color: "var(--fg-45)" }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <p
          role="status"
          aria-live="polite"
          className="mt-2 text-[13px] min-h-[1.25rem]"
          style={{ color: "var(--fg-60)" }}
          data-testid="help-copy-status"
        >
          {copied ? "Copied. Paste it or say it." : "Tap a line to copy it."}
        </p>
      </section>

      {/* Then: the follow-on technique */}
      <section aria-labelledby="help-then" className="mt-3">
        <h2 id="help-then" className="mb-2">
          <Eyebrow>Then</Eyebrow>
        </h2>
        <Link
          href={`/card/${situation.followOn.cardId}`}
          data-testid="help-follow-on"
          className="flex items-center gap-3 rounded-2xl px-4 py-3 min-h-16 transition-colors hover:bg-[var(--surface-card-hover)] active:bg-[var(--surface-card-hover)]"
          style={surface}
        >
          <span className="flex-1 min-w-0">
            <span
              className="block text-[16px] font-bold leading-snug"
              style={{ color: "var(--fg-90)" }}
            >
              {next?.title}
            </span>
            <span
              className="mt-0.5 block text-[14px] leading-snug"
              style={{ color: "var(--fg-70)" }}
            >
              {quoted(situation.followOn.line)}
            </span>
          </span>
          <ChevronRight
            className="w-4 h-4 flex-none"
            style={{ color: "var(--fg-45)" }}
            aria-hidden="true"
          />
        </Link>
      </section>

      {/* Avoid */}
      <section
        aria-labelledby="help-avoid"
        className="mt-5 rounded-2xl p-4"
        style={{
          background: "color-mix(in srgb, var(--accent-red) 6%, transparent)",
          border:
            "1px solid color-mix(in srgb, var(--accent-red) 18%, transparent)",
        }}
        data-testid="help-avoid"
      >
        <h2
          id="help-avoid"
          className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--fg-70)" }}
        >
          <X
            className="w-3.5 h-3.5"
            style={{ color: "var(--accent-red)" }}
            aria-hidden="true"
          />
          Avoid
        </h2>
        <p
          className="mt-1.5 text-[15px] leading-[1.5]"
          style={{ color: "var(--fg-90)" }}
        >
          {situation.avoid}
        </p>
      </section>

      {lead && (
        <Link
          href={`/card/${lead.id}`}
          className={`${buttonClass("primary", "md")} mt-6 w-full min-w-0`}
          data-testid="help-open-technique"
        >
          <span className="truncate">Open {lead.title}</span>
        </Link>
      )}
    </div>
  );
}

function HelpNotFound() {
  return (
    <div className="w-full max-w-full min-w-0 sm:max-w-2xl sm:mx-auto px-4 md:px-6 pt-3 md:pt-6 pb-8">
      <BackLink href="/help" label="All situations" />
      <EmptyState
        icon={Compass}
        tone="neutral"
        title="Situation not found"
        titleAs="h1"
        className="py-10"
        actions={
          <Link href="/help" className={buttonClass("primary")}>
            See all situations
          </Link>
        }
      >
        That link may be out of date. Pick what is happening from the list.
      </EmptyState>
    </div>
  );
}

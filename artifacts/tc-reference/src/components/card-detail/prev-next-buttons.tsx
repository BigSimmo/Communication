import { ChevronLeft, ChevronRight } from "lucide-react";
import { CARD_TITLE_MAP, type NavCard } from "./card-sections";

// ── Floating prev / next (desktop only, pinned to the viewport edges) ──
export function FloatingPrevNext({
  prevCard,
  nextCard,
  setLocation,
}: {
  prevCard: NavCard;
  nextCard: NavCard;
  setLocation: (to: string) => void;
}) {
  return (
    <>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          setLocation(`/card/${prevCard.id}`);
        }}
        aria-label={`Previous card: ${prevCard.id}`}
        data-testid="button-prev-float"
        className="hidden lg:flex fixed z-30 md:left-[200px] items-center justify-center transition-all active:scale-95"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          width: 40,
          height: 72,
          background: "var(--surface-float)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "0 12px 12px 0",
          border: "1px solid var(--fg-08)",
          borderLeft: "none",
        }}
      >
        <ChevronLeft className="w-4 h-4" style={{ color: "var(--fg-70)" }} />
      </button>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
          setLocation(`/card/${nextCard.id}`);
        }}
        aria-label={`Next card: ${nextCard.id}`}
        data-testid="button-next-float"
        className="hidden lg:flex fixed z-30 items-center justify-center transition-all active:scale-95"
        style={{
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 40,
          height: 72,
          background: "var(--surface-float)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "12px 0 0 12px",
          border: "1px solid var(--fg-08)",
          borderRight: "none",
        }}
      >
        <ChevronRight className="w-4 h-4" style={{ color: "var(--fg-70)" }} />
      </button>
    </>
  );
}

// ── Prev / next (in-flow so it never covers card text on phones) ──
export function PrevNextNav({
  prevCard,
  nextCard,
  setLocation,
}: {
  prevCard: NavCard;
  nextCard: NavCard;
  setLocation: (to: string) => void;
}) {
  return (
    <nav aria-label="Card navigation" className="grid grid-cols-2 gap-2 pt-2">
      {[
        { card: prevCard, dir: "Previous", testId: "button-prev" },
        { card: nextCard, dir: "Next", testId: "button-next" },
      ].map(({ card, dir, testId }) => (
        <button
          key={dir}
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
            setLocation(`/card/${card.id}`);
          }}
          data-testid={testId}
          aria-label={`${dir} card: ${card.id} ${CARD_TITLE_MAP[card.id] ?? ""}`}
          className={`flex items-center gap-2 rounded-2xl px-3.5 py-3 transition-all active:scale-[0.98] min-w-0 ${dir === "Next" ? "flex-row-reverse text-right" : "text-left"}`}
          style={{
            minHeight: 56,
            background: "var(--fg-03)",
            border: "1px solid var(--fg-07)",
          }}
        >
          {dir === "Next" ? (
            <ChevronRight
              className="w-4 h-4 flex-shrink-0"
              style={{ color: "var(--fg-50)" }}
              aria-hidden="true"
            />
          ) : (
            <ChevronLeft
              className="w-4 h-4 flex-shrink-0"
              style={{ color: "var(--fg-50)" }}
              aria-hidden="true"
            />
          )}
          <span className="min-w-0 flex-1" aria-hidden="true">
            <span
              className="block text-[11px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--fg-50)" }}
            >
              {dir} · {card.id}
            </span>
            <span className="block text-[13px] font-semibold leading-snug text-foreground/85 line-clamp-2 mt-0.5">
              {CARD_TITLE_MAP[card.id] ?? card.id}
            </span>
          </span>
        </button>
      ))}
    </nav>
  );
}

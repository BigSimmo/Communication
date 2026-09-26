import { ChevronLeft } from "lucide-react";

// ── Unknown card ID — not in the library at all ──
export function CardNotFound({
  cardId,
  setLocation,
}: {
  cardId: string;
  setLocation: (to: string) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: "color-mix(in srgb, var(--accent-red) 8%, transparent)",
          border:
            "1px solid color-mix(in srgb, var(--accent-red) 18%, transparent)",
        }}
      >
        <span
          className="text-[20px] font-bold"
          style={{ color: "var(--accent-red)" }}
        >
          ?
        </span>
      </div>
      <h2 className="text-[20px] font-bold text-foreground mb-2">
        Card not found
      </h2>
      <p
        className="text-[14px] leading-relaxed mb-6 max-w-[280px]"
        style={{ color: "var(--fg-55)" }}
      >
        No technique card with ID{" "}
        <strong style={{ color: "var(--fg-60)" }}>{cardId || "unknown"}</strong>{" "}
        exists in the library.
      </p>
      <button
        onClick={() => setLocation("/")}
        className="flex items-center gap-2 text-[14px] font-semibold px-5 rounded-full transition-all active:scale-95 min-h-11"
        style={{
          background: "color-mix(in srgb, var(--brand) 12%, transparent)",
          border: "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
          color: "var(--brand-text)",
        }}
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Library
      </button>
    </div>
  );
}

// ── Graceful placeholder for cards without full content ──
export function CardComingSoon({
  cardId,
  setLocation,
}: {
  cardId: string;
  setLocation: (to: string) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-8 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: "color-mix(in srgb, var(--brand) 8%, transparent)",
          border: "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
        }}
      >
        <span
          className="text-[20px] font-bold"
          style={{ color: "var(--brand-text)" }}
        >
          {cardId?.slice(2)}
        </span>
      </div>
      <h2 className="text-[20px] font-bold text-foreground mb-2">
        Coming soon
      </h2>
      <p
        className="text-[14px] leading-relaxed mb-6 max-w-[280px]"
        style={{ color: "var(--fg-55)" }}
      >
        Full content for this card is being prepared. Browse the library to find
        a fully loaded card.
      </p>
      <button
        onClick={() => setLocation("/")}
        className="flex items-center gap-2 text-[14px] font-semibold px-5 rounded-full transition-all active:scale-95 min-h-11"
        style={{
          background: "color-mix(in srgb, var(--brand) 12%, transparent)",
          border: "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
          color: "var(--brand-text)",
        }}
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Library
      </button>
    </div>
  );
}

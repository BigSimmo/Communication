import { ChevronRight, ChevronLeft } from "lucide-react";

export function PrevNextButtons({
  prevCard,
  nextCard,
  setLocation,
}: {
  prevCard: { id: string };
  nextCard: { id: string };
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
        className="fixed z-30 left-0 md:left-[200px] flex items-center justify-center transition-all active:scale-95"
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
        className="fixed z-30 flex items-center justify-center transition-all active:scale-95"
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

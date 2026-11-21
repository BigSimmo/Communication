import { Link } from "wouter";
import { Clock, CloudOff, SearchX } from "lucide-react";
import { Button, buttonClass } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SEARCH_ENTRY_STATE, searchHref } from "@/components/search/search-nav";

const WRAP = "w-full max-w-2xl mx-auto min-h-[60vh] flex items-center px-4";

// ── Unknown card ID — not in the library at all ──
export function CardNotFound({
  cardId,
  setLocation,
}: {
  cardId: string;
  setLocation: (to: string) => void;
}) {
  return (
    <div className={WRAP}>
      <EmptyState
        icon={SearchX}
        tone="neutral"
        title="Card not found"
        titleAs="h2"
        className="w-full"
        data-testid="card-not-found"
        actions={
          <>
            <Link
              href={searchHref()}
              state={SEARCH_ENTRY_STATE}
              className={buttonClass("primary")}
              data-testid="card-not-found-search"
            >
              Search techniques
            </Link>
            <Button variant="secondary" onClick={() => setLocation("/")}>
              Back to Library
            </Button>
          </>
        }
      >
        There's no technique card{" "}
        <strong style={{ color: "var(--fg-90)" }}>
          {cardId || "with that ID"}
        </strong>
        . Search for the one you meant, or browse the Library.
      </EmptyState>
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
    <div className={WRAP}>
      <EmptyState
        icon={Clock}
        title="Coming soon"
        titleAs="h2"
        className="w-full"
        data-testid="card-coming-soon"
        actions={
          <Button variant="primary" onClick={() => setLocation("/")}>
            Back to Library
          </Button>
        }
      >
        Full content for {cardId} is still being written. Browse the Library for
        cards that are ready to use.
      </EmptyState>
    </div>
  );
}

// ── A known card whose content could not be fetched ──
export function CardLoadFailed({
  onRetry,
  setLocation,
}: {
  onRetry: () => void;
  setLocation: (to: string) => void;
}) {
  const offline =
    typeof navigator !== "undefined" && navigator.onLine === false;
  return (
    <EmptyState
      icon={CloudOff}
      title="This card didn't load"
      titleAs="h2"
      data-testid="card-load-failed"
      actions={
        <>
          <Button
            variant="primary"
            onClick={onRetry}
            data-testid="card-load-retry"
          >
            Try again
          </Button>
          <Button variant="secondary" onClick={() => setLocation("/")}>
            Back to Library
          </Button>
        </>
      }
    >
      {offline
        ? "You're offline and this card isn't saved on this device yet. Reconnect, or turn on Offline cards in Settings next time you're online."
        : "Something went wrong fetching it. Check your connection and try again."}
    </EmptyState>
  );
}

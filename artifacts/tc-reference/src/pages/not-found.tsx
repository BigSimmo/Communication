import { Link, useLocation } from "wouter";
import { Compass } from "lucide-react";
import { Button, buttonClass } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { SEARCH_ENTRY_STATE, searchHref } from "@/components/search/search-nav";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-[60vh] w-full max-w-2xl mx-auto flex items-center justify-center px-4">
      <EmptyState
        icon={Compass}
        tone="neutral"
        title="Page not found"
        titleAs="h1"
        data-testid="not-found"
        actions={
          <>
            <Button variant="primary" onClick={() => setLocation("/")}>
              Back to Library
            </Button>
            <Link
              href={searchHref()}
              state={SEARCH_ENTRY_STATE}
              className={buttonClass("secondary")}
              data-testid="not-found-search"
            >
              Search techniques
            </Link>
            <Link
              href="/help"
              className={buttonClass("quiet")}
              data-testid="not-found-help"
            >
              Help me right now
            </Link>
          </>
        }
      >
        That link doesn't lead anywhere in the app. It may be out of date or
        have a typo.
      </EmptyState>
    </div>
  );
}

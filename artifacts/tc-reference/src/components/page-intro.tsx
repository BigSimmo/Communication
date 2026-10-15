import type { ReactNode } from "react";

// Shared page heading for the tab pages. On phones the sticky header already
// names the page, so the h1 stays available to screen readers but is not
// drawn twice; from md up it shows as a normal heading.
export function PageIntro({
  title,
  description,
  action,
  className = "",
}: {
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-start justify-between gap-3 ${className}`}
      data-testid="page-intro"
    >
      <div className="min-w-0">
        <h1
          className="sr-only md:not-sr-only md:mb-1.5 md:text-[22px] md:font-bold md:leading-tight md:tracking-tight"
          style={{ color: "var(--fg-90)" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-[13px] leading-relaxed"
            style={{ color: "var(--fg-60)" }}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

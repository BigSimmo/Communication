import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ListRowProps {
  /** Leading slot: a number, dot or icon. */
  leading?: ReactNode;
  title: ReactNode;
  /** One line under the title; truncated unless `wrap` is set. */
  description?: ReactNode;
  /** Small line under the description, e.g. category and difficulty. */
  meta?: ReactNode;
  /** Trailing slot: a save button, chevron or copy icon. */
  trailing?: ReactNode;
  wrap?: boolean;
  className?: string;
}

/**
 * The standard list row: title, optional one-line description and meta, with
 * leading and trailing slots. Rows are at least 56px tall. Put rows inside a
 * `divide-y` container; the row itself draws no border.
 */
export function ListRow({
  leading,
  title,
  description,
  meta,
  trailing,
  wrap = false,
  className,
}: ListRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-[13px] min-h-14",
        className,
      )}
    >
      {leading}
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div
          className="text-[17px] leading-[1.3] font-semibold"
          style={{ color: "var(--fg-90)" }}
        >
          {title}
        </div>
        {description && (
          <div
            className={cn("text-[14px] leading-[1.45]", !wrap && "truncate")}
            style={{ color: "var(--fg-70)" }}
          >
            {description}
          </div>
        )}
        {meta && (
          <div
            className="text-[13px] leading-[1.35]"
            style={{ color: "var(--fg-60)" }}
          >
            {meta}
          </div>
        )}
      </div>
      {trailing}
    </div>
  );
}

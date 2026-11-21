import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected state, exposed as aria-pressed. */
  selected?: boolean;
  /** Colour of the leading dot (a `--cat-*` value); omit for no dot. */
  dotColor?: string;
  /** Trailing count, e.g. the number of techniques in a category. */
  count?: number;
  children: ReactNode;
}

/** Filter chip: a 38px pill with an optional category dot and count. */
export function Chip({
  selected = false,
  dotColor,
  count,
  className,
  children,
  type = "button",
  ...rest
}: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={cn(
        "inline-flex flex-none items-center gap-[7px] h-[38px] px-3.5 rounded-full text-[14px] font-semibold whitespace-nowrap transition-colors",
        selected
          ? "bg-[var(--fg-90)] text-[hsl(var(--background))]"
          : "bg-[var(--fg-08)] text-[var(--fg-80)]",
        className,
      )}
      {...rest}
    >
      {dotColor && (
        <span
          aria-hidden="true"
          data-testid="chip-dot"
          className="w-2 h-2 rounded-full flex-none"
          style={{ background: selected ? "currentColor" : dotColor }}
        />
      )}
      {children}
      {/* Unrendered between flex items; keeps "Voice 4" two words in the
          DOM text that the accessible name is checked against */}
      {count !== undefined && " "}
      {count !== undefined && (
        <span className="text-[12px] font-semibold tabular-nums">{count}</span>
      )}
    </button>
  );
}

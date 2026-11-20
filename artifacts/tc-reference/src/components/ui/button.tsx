import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "quiet";
type Size = "md" | "sm";

const VARIANT: Record<Variant, string> = {
  primary: "bg-[var(--brand)] text-[var(--brand-contrast)]",
  secondary: "bg-[var(--fg-08)] text-[var(--fg-90)]",
  quiet: "bg-transparent text-[var(--brand-text)]",
};

const SIZE: Record<Size, string> = {
  md: "h-[52px] px-5 text-[17px] rounded-2xl",
  sm: "h-11 px-4 text-[15px] rounded-[14px]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/**
 * The one button standard: three variants, two sizes, both at least 44px
 * tall. Amber (primary) is for the single main action on a screen.
 */
export function Button({
  variant = "secondary",
  size = "md",
  type = "button",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-bold transition-transform active:scale-[0.98] motion-reduce:transition-none disabled:opacity-50 disabled:pointer-events-none",
        VARIANT[variant],
        SIZE[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

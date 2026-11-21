import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "brand" | "neutral" | "danger";

const TONE: Record<Tone, { tile: string; icon: string }> = {
  brand: {
    tile: "color-mix(in srgb, var(--brand) 10%, transparent)",
    icon: "var(--brand-text)",
  },
  neutral: { tile: "var(--fg-05)", icon: "var(--fg-60)" },
  danger: {
    tile: "color-mix(in srgb, var(--accent-red) 10%, transparent)",
    icon: "var(--accent-red)",
  },
};

interface EmptyStateProps {
  icon: ComponentType<{
    className?: string;
    style?: React.CSSProperties;
    "aria-hidden"?: boolean | "true";
  }>;
  tone?: Tone;
  title: string;
  /** The page's own heading when nothing else on screen is one. */
  titleAs?: "h1" | "h2" | "p";
  children?: ReactNode;
  /** Buttons or links, stacked full width and main action first. */
  actions?: ReactNode;
  className?: string;
  "data-testid"?: string;
}

/**
 * The one look for a screen with nothing to show: empty lists, missing
 * pages and failed loads. An icon tile, a plain heading, one or two
 * sentences and the next useful step, so no screen is a dead end.
 */
export function EmptyState({
  icon: Icon,
  tone = "brand",
  title,
  titleAs: Title = "h2",
  children,
  actions,
  className,
  "data-testid": testId,
}: EmptyStateProps) {
  const t = TONE[tone];
  return (
    <div
      className={cn(
        "flex flex-col items-center py-14 px-4 text-center",
        className,
      )}
      data-testid={testId}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: t.tile }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: t.icon }}
          aria-hidden="true"
        />
      </div>
      <Title
        className="text-[20px] font-bold leading-tight mb-2 text-balance"
        style={{ color: "var(--fg-90)" }}
      >
        {title}
      </Title>
      {children && (
        <div
          className="text-[15px] leading-relaxed max-w-[320px] text-pretty"
          style={{ color: "var(--fg-70)" }}
        >
          {children}
        </div>
      )}
      {actions && (
        <div className="mt-6 flex flex-col gap-2 w-full max-w-[280px]">
          {actions}
        </div>
      )}
    </div>
  );
}

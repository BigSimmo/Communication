import type { CardImpact } from "./data";

/**
 * Single source of truth for impact-badge styling across pages.
 * Colour values live in index.css as `--impact-*` custom properties with
 * dark defaults and light-theme overrides, so the same mapping adapts to
 * both themes: High = amber (the only coloured tier, so it leads),
 * Medium = strong neutral, Low = muted neutral.
 */
export const IMPACT_STYLES: Record<
  CardImpact,
  { label: string; color: string; bg: string }
> = {
  high: {
    label: "High",
    color: "var(--impact-high)",
    bg: "color-mix(in srgb, var(--impact-high) 20%, transparent)",
  },
  medium: {
    label: "Medium",
    color: "var(--impact-medium)",
    bg: "var(--fg-08)",
  },
  low: {
    label: "Low",
    color: "var(--impact-low)",
    bg: "var(--fg-06)",
  },
};

/** Card data stores impact as "High" | "Medium" | "Low" — normalise the key. */
export function impactStyleFor(impact: string) {
  return IMPACT_STYLES[impact.toLowerCase() as CardImpact] ?? IMPACT_STYLES.low;
}

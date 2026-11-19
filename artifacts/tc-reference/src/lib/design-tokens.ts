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

/**
 * One colour per Library category, for the category dot and label. Values
 * live in index.css as `--cat-*` (dark defaults, light overrides). Keys match
 * LIBRARY_CATEGORIES; `label` is the full name shown on a card, `short` the
 * one-word name used on chips.
 */
export const CATEGORY_STYLES: Record<
  string,
  { label: string; short: string; color: string }
> = {
  "Voice / Presence": {
    label: "Voice and presence",
    short: "Voice",
    color: "var(--cat-voice)",
  },
  "Influence / Framing": {
    label: "Influence and framing",
    short: "Influence",
    color: "var(--cat-influence)",
  },
  "Clarity / Direction": {
    label: "Clarity and direction",
    short: "Clarity",
    color: "var(--cat-clarity)",
  },
  "Connection / Warmth": {
    label: "Connection and warmth",
    short: "Connection",
    color: "var(--cat-connection)",
  },
  "Resilience / Recovery": {
    label: "Resilience and recovery",
    short: "Resilience",
    color: "var(--cat-resilience)",
  },
};

const UNKNOWN_CATEGORY = { color: "var(--fg-55)" };

/** Style for a category name; unknown names get a neutral dot and their own name. */
export function categoryStyleFor(category: string) {
  return (
    CATEGORY_STYLES[category] ?? {
      label: category,
      short: category,
      ...UNKNOWN_CATEGORY,
    }
  );
}

import { LIBRARY_CATEGORIES } from "@/lib/data";
import type { CardData } from "@/lib/card-types";

// Measured header height (includes the top safe-area inset and compact state)
// so scroll offsets line up with the sticky header on every device.
export function headerOffset(): number {
  const header = document.querySelector<HTMLElement>(
    '[data-testid="app-header"]',
  );
  return header?.getBoundingClientRect().height ?? 48;
}

/**
 * Where to scroll the page so `el` sits just under the sticky bars.
 *
 * The header slides away on a scroll down and returns on a scroll up, so the
 * space above the target depends on which way this scroll goes: allowing for
 * a header that is about to leave would strand the section a header's height
 * too low.
 */
export function sectionScrollTop(el: Element, navHeight: number): number {
  const header = document.querySelector<HTMLElement>(
    '[data-testid="app-header"]',
  );
  const shown = headerOffset();
  // Hidden, the header still covers the status bar strip (its top padding).
  const tucked = header
    ? parseFloat(getComputedStyle(header).paddingTop) || 0
    : shown;
  const base = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;
  const withHeader = Math.max(0, base - shown);
  const withoutHeader = Math.max(0, base - tucked);
  // Mirrors the header's own rule: always shown near the top, otherwise it
  // follows the direction once the movement is more than a nudge.
  if (withHeader < 56) return withHeader;
  if (withoutHeader - window.scrollY > 12) return withoutHeader;
  if (withHeader - window.scrollY < -12) return withHeader;
  return header?.dataset.hidden === "true" ? withoutHeader : withHeader;
}

export const CARD_TITLE_MAP: Record<string, string> = {};
export const CARD_CATEGORY_MAP: Record<string, string> = {};
for (const [category, cards] of Object.entries(LIBRARY_CATEGORIES)) {
  for (const c of cards) {
    CARD_TITLE_MAP[c.id] = c.title;
    CARD_CATEGORY_MAP[c.id] = category;
  }
}

// Smooth scrolling unless the user has asked the OS for reduced motion.
export function scrollBehavior(): ScrollBehavior {
  return typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

// Core formula lines often open with a short label ("Short form:",
// "Greeting:"). Split it off so the label can be set in bold.
export const FORMULA_LABEL = /^([A-Z][A-Za-z ]{1,24}):\s+/;

export const PLACEHOLDER_PDF = "https://www.w3.org/WAI/WCAG21/wcag21.pdf";
export const CARD_PDF_URLS: Record<string, string> = {};

export function getCardPdfUrl(
  cardId: string,
  cardData: CardData,
): {
  url: string;
  isPlaceholder: boolean;
} {
  const localPath = cardData.pdfUrl;
  if (localPath) {
    return {
      url: `${import.meta.env.BASE_URL}${localPath}`,
      isPlaceholder: false,
    };
  }
  const url = CARD_PDF_URLS[cardId] ?? PLACEHOLDER_PDF;
  return { url, isPlaceholder: !CARD_PDF_URLS[cardId] };
}

export type CardSection =
  | "overview"
  | "why"
  | "method"
  | "phrases"
  | "ladder"
  | "inpractice"
  | "tree"
  | "scenarios"
  | "chains"
  | "calibration"
  | "mistakes"
  | "recovery"
  | "practice"
  | "checklist"
  | "related"
  | "resources";

export const SECTIONS: { id: CardSection; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "why", label: "Why it works" },
  { id: "method", label: "Method" },
  { id: "phrases", label: "Phrases" },
  { id: "ladder", label: "Ladder" },
  { id: "inpractice", label: "In practice" },
  { id: "tree", label: "Decision tree" },
  { id: "scenarios", label: "Scenarios" },
  { id: "chains", label: "Chains" },
  { id: "calibration", label: "Calibration" },
  { id: "mistakes", label: "Mistakes" },
  { id: "recovery", label: "Recovery" },
  { id: "practice", label: "Practice" },
  { id: "checklist", label: "Checklist" },
  { id: "related", label: "Related" },
  { id: "resources", label: "Downloads" },
];

/** The card's three tabs, in reading order. */
export type CardTab = "use" | "learn" | "practise";

export const CARD_TABS: ReadonlyArray<{ id: CardTab; label: string }> = [
  { id: "use", label: "Use it" },
  { id: "learn", label: "Learn it" },
  { id: "practise", label: "Practise it" },
];

/**
 * Which sections sit under which tab, in the order they are shown. Every
 * section id appears exactly once, so an old link to a section can always
 * open the tab that now holds it.
 */
export const TAB_SECTIONS: Record<CardTab, readonly CardSection[]> = {
  use: ["overview", "inpractice", "phrases", "recovery"],
  learn: [
    "why",
    "method",
    "ladder",
    "tree",
    "calibration",
    "chains",
    "mistakes",
    "scenarios",
  ],
  practise: ["practice", "checklist", "related", "resources"],
};

const SECTION_TAB = Object.fromEntries(
  (Object.entries(TAB_SECTIONS) as [CardTab, readonly CardSection[]][]).flatMap(
    ([tab, ids]) => ids.map((id) => [id, tab]),
  ),
) as Record<CardSection, CardTab>;

export function tabForSection(id: CardSection): CardTab {
  return SECTION_TAB[id];
}

export function isCardTab(value: unknown): value is CardTab {
  return CARD_TABS.some((t) => t.id === value);
}

export function isCardSection(value: unknown): value is CardSection {
  return SECTIONS.some((s) => s.id === value);
}

/** Short names for the Learn tab's jump row. */
export const SECTION_SHORT_LABEL: Partial<Record<CardSection, string>> = {
  why: "Why",
  method: "Method",
  ladder: "Ladder",
  tree: "Decide",
  calibration: "Signals",
  chains: "Chains",
  mistakes: "Mistakes",
  scenarios: "Situations",
};

/**
 * Where a link wants the card opened: `?tab=learn`, `?section=method` or a
 * `#section-method` fragment. A section wins over a tab, since it is the more
 * specific request. Returns null for a plain card link.
 */
export function parseCardTarget(
  search: string,
  hash: string,
): { tab: CardTab; section: CardSection | null } | null {
  const params = new URLSearchParams(search);
  const fromHash = hash.replace(/^#(section-)?/, "");
  const section = [params.get("section"), fromHash].find(isCardSection);
  if (section) return { tab: tabForSection(section), section };
  const tab = params.get("tab");
  return isCardTab(tab) ? { tab, section: null } : null;
}

// In-session memory: the tab and scroll position last viewed on each card
export const cardTabMemory = new Map<
  string,
  { tab: CardTab; scrollY: number }
>();

// All card IDs in the library (loaded or not)
export const ALL_CARD_IDS = new Set(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((c) => c.id),
);

// Set of cards that have full content loaded
export const LOADED_CARD_IDS = new Set(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .filter((c) => c.loaded)
    .map((c) => c.id),
);

// Flat ordered list for prev/next navigation (follows LIBRARY_CATEGORIES order)
export const LOADED_CARDS_NAV = Object.values(LIBRARY_CATEGORIES)
  .flat()
  .filter((c) => c.loaded);

// A library card entry used for prev/next navigation
export type NavCard = (typeof LOADED_CARDS_NAV)[number];

// Optional sections only render (and only show a nav pill) when the card has data for them.
export function isSectionAvailable(
  cardData: CardData | null,
  id: CardSection,
): boolean {
  if (!cardData) return false;
  switch (id) {
    case "method":
      return !!(cardData.method && cardData.method.length > 0);
    case "chains":
      return !!(cardData.chains && cardData.chains.length > 0);
    case "mistakes":
      return !!(cardData.commonMistakes && cardData.commonMistakes.length > 0);
    case "recovery":
      return !!(
        cardData.recoveryPhrases && cardData.recoveryPhrases.length > 0
      );
    case "related":
      return !!(
        cardData.relatedTechniques && cardData.relatedTechniques.length > 0
      );
    case "resources":
      return !!(cardData.resources && cardData.resources.length > 0);
    default:
      return true;
  }
}

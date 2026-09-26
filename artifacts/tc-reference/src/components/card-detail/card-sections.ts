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

export const CARD_TITLE_MAP: Record<string, string> = {};
for (const cards of Object.values(LIBRARY_CATEGORIES)) {
  for (const c of cards) CARD_TITLE_MAP[c.id] = c.title;
}

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

// In-session memory: remembers which section and scroll position the user last viewed per card
export const cardSectionMemory = new Map<
  string,
  { section: CardSection; scrollY: number }
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
    case "why":
      return !!cardData.influencePayoff;
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

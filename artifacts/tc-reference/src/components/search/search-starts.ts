// What the search screen offers before anything is typed, and the small
// "also matching" hint shown above results.

import { LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import { SEARCH_SYNONYMS } from "@/lib/search-synonyms";
import { tokenize } from "@/lib/search-text";

/**
 * "I need to" starters. Tapping one runs it as a search, so each is worded
 * the way someone would type it. A test runs every starter against the real
 * catalogue and fails if one stops finding anything.
 */
export const SEARCH_STARTERS: readonly string[] = [
  "Give feedback",
  "Say no",
  "Calm things down",
  "Break bad news",
  "Apologise",
  "Ask for something",
];

export interface BrowseCategory {
  /** LIBRARY_CATEGORIES key. */
  category: string;
  label: string;
  color: string;
  count: number;
}

export const BROWSE_CATEGORIES: readonly BrowseCategory[] = Object.entries(
  LIBRARY_CATEGORIES,
).map(([category, cards]) => {
  const style = categoryStyleFor(category);
  return {
    category,
    label: style.label,
    color: style.color,
    count: cards.length,
  };
});

const SYNONYM_KEYS = Object.entries(SEARCH_SYNONYMS).map(
  ([key, words]) => [tokenize(key).join(" "), words] as const,
);

/**
 * The other words a search also looks for, from the synonym list: "upset
 * with me" -> frustrated, angry, hurt. At most `limit` words, none of them
 * already in the query.
 */
export function alsoMatching(query: string, limit = 3): string[] {
  const words = tokenize(query);
  if (words.length === 0) return [];
  const run = ` ${words.join(" ")} `;
  const typed = new Set(words);
  const found: string[] = [];
  for (const [key, synonyms] of SYNONYM_KEYS) {
    if (!run.includes(` ${key} `)) continue;
    for (const word of synonyms) {
      if (typed.has(word) || found.includes(word)) continue;
      found.push(word);
      if (found.length === limit) return found;
    }
  }
  return found;
}

const CARD_SUMMARIES = new Map(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((card) => [card.id, card.summary]),
);

/** The one-line description shown under a technique's title. */
export function cardSummary(cardId: string): string {
  return CARD_SUMMARIES.get(cardId) ?? "";
}

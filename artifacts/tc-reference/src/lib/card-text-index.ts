import { loadAllCards } from "./card-loader";
import type { CardTextIndex } from "./card-text-index-build";

export type { CardTextEntry, CardTextIndex } from "./card-text-index-build";

/**
 * Loads the slim text index of every card (built at compile time and
 * precached by the service worker), so search, the Phrase Bank and Quick
 * Lookup work offline without fetching all 98 card chunks. Falls back to
 * loading every card when the index is unavailable (e.g. in unit tests).
 * Failures are not cached, so callers can retry.
 */
export async function loadCardTextIndex(): Promise<CardTextIndex> {
  try {
    const index = (await import("virtual:card-text-index")).default;
    if (index) return index;
  } catch {
    // Fall through to the per-card chunks.
  }
  return loadAllCards();
}

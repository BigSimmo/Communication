import { CARD_DATA, PhraseGroup } from "./cards";

export type CardImpact = "high" | "medium" | "low";

interface LibraryCard {
  id: string;
  title: string;
  loaded: boolean;
  impact: CardImpact;
}

interface LoadedCardData {
  id: string;
  phraseBank: PhraseGroup[];
}

/**
 * A single phrase entry that carries its source card and tone/group metadata.
 * Used by the unified Phrases browser and any other aggregated phrase view.
 */
export interface AggregatedPhrase {
  text: string;
  groupId: string;
  groupLabel: string;
  groupTag: string;
  cardId: string;
  cardTitle: string;
}

/**
 * Full content records for every loaded card — sourced from cards.ts.
 * Quick Mode and any other aggregation should pull from here.
 */
const LOADED_CARD_DATA: Record<string, LoadedCardData> = Object.fromEntries(
  Object.entries(CARD_DATA).map(([id, card]) => [id, { id, phraseBank: card.phraseBank }])
);

/** Returns the aggregated phrase groups across all loaded cards (drops source card). */
export function getQuickModePhrases(): PhraseGroup[] {
  return Object.values(LOADED_CARD_DATA).flatMap((card) => card.phraseBank);
}

/**
 * Flattens every loaded card's phrase bank into a single list.
 * Each entry keeps its tone/group label and source card id + title,
 * making it suitable for the unified Phrases browser.
 * Results are cached after the first call.
 */
let _aggregatedCache: AggregatedPhrase[] | null = null;
export function getAggregatedPhrases(cardTitleMap: Record<string, string>): AggregatedPhrase[] {
  if (_aggregatedCache) return _aggregatedCache;
  const result: AggregatedPhrase[] = [];
  for (const [cardId, card] of Object.entries(CARD_DATA)) {
    const cardTitle = cardTitleMap[cardId] ?? cardId;
    for (const group of card.phraseBank) {
      for (const text of group.phrases) {
        result.push({ text, groupId: group.id, groupLabel: group.label, groupTag: group.tag, cardId, cardTitle });
      }
    }
  }
  _aggregatedCache = result;
  return result;
}

export const LIBRARY_CATEGORIES: Record<string, LibraryCard[]> = {
  "Voice / Presence": [
    { id: "TC028", title: "Warm Vocal Baseline", loaded: true, impact: "high" },
    { id: "TC029", title: "Strategic Silence", loaded: true, impact: "high" },
    { id: "TC030", title: "Measured Movement", loaded: true, impact: "medium" },
    { id: "TC031", title: "Slow Down Under Pressure", loaded: true, impact: "high" },
  ],
  "Influence / Framing": [
    { id: "TC003", title: "BLUF: Bottom Line Up Front", loaded: true, impact: "high" },
    { id: "TC008", title: "No-Overexplaining Discipline", loaded: true, impact: "high" },
    { id: "TC014", title: "Validate the Concern", loaded: true, impact: "high" },
    { id: "TC017", title: "Agreement Before Disagreement", loaded: true, impact: "medium" },
    { id: "TC021", title: "Reframe the Stakes", loaded: true, impact: "medium" },
    { id: "TC024", title: "Lead With the Ask", loaded: true, impact: "high" },
    { id: "TC027", title: "Permission-Based Advice", loaded: true, impact: "medium" },
  ],
  "Clarity / Direction": [
    { id: "TC005", title: "Clean Request", loaded: true, impact: "high" },
    { id: "TC009", title: "Summary Check", loaded: true, impact: "medium" },
    { id: "TC011", title: "PREP Structure", loaded: true, impact: "high" },
    { id: "TC015", title: "Next-Step Close", loaded: true, impact: "medium" },
    { id: "TC018", title: "Crisp Brevity", loaded: true, impact: "high" },
    { id: "TC023", title: "Bounded Deferment", loaded: true, impact: "high" },
    { id: "TC026", title: "Decision Frame", loaded: true, impact: "medium" },
  ],
  "Connection / Warmth": [
    { id: "TC001", title: "Live Thread Follow-Ups", loaded: true, impact: "high" },
    { id: "TC002", title: "Thread Recall", loaded: true, impact: "medium" },
    { id: "TC006", title: "Genuine Specific Compliment", loaded: true, impact: "medium" },
    { id: "TC010", title: "Curiosity Question", loaded: true, impact: "medium" },
    { id: "TC013", title: "Name the Effort", loaded: true, impact: "medium" },
    { id: "TC016", title: "Validation Without Agreement", loaded: true, impact: "high" },
    { id: "TC019", title: "Autonomy Release", loaded: true, impact: "medium" },
    { id: "TC022", title: "Graceful Exit", loaded: true, impact: "medium" },
    { id: "TC025", title: "Shared Credit", loaded: true, impact: "medium" },
  ],
  "Resilience / Recovery": [
    { id: "TC004", title: "Repair Opening", loaded: true, impact: "high" },
    { id: "TC007", title: "Disagreement Without Contempt", loaded: true, impact: "high" },
    { id: "TC012", title: "Boundary Without Blame", loaded: true, impact: "high" },
    { id: "TC020", title: "Confident Uncertainty", loaded: true, impact: "medium" },
  ],
};

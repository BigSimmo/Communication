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
  Object.entries(CARD_DATA).map(([id, card]) => [
    id,
    { id, phraseBank: card.phraseBank },
  ]),
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
export function getAggregatedPhrases(
  cardTitleMap: Record<string, string>,
): AggregatedPhrase[] {
  if (_aggregatedCache) return _aggregatedCache;
  const result: AggregatedPhrase[] = [];
  for (const [cardId, card] of Object.entries(CARD_DATA)) {
    const cardTitle = cardTitleMap[cardId] ?? cardId;
    for (const group of card.phraseBank) {
      for (const text of group.phrases) {
        result.push({
          text,
          groupId: group.id,
          groupLabel: group.label,
          groupTag: group.tag,
          cardId,
          cardTitle,
        });
      }
    }
  }
  _aggregatedCache = result;
  return result;
}

export const LIBRARY_CATEGORIES: Record<string, LibraryCard[]> = {
  "Voice / Presence": [
    {
      id: "TC028",
      title: "Warm Vocal Baseline",
      loaded: true,
      impact: "medium",
    },
    { id: "TC029", title: "Strategic Silence", loaded: true, impact: "medium" },
    {
      id: "TC031",
      title: "Slow Down Under Pressure",
      loaded: true,
      impact: "medium",
    },
    { id: "TC035", title: "Strategic Pause", loaded: true, impact: "medium" },
  ],
  "Influence / Framing": [
    {
      id: "TC017",
      title: "Values-Based Framing",
      loaded: true,
      impact: "medium",
    },
    { id: "TC021", title: "Autonomy Release", loaded: true, impact: "medium" },
    {
      id: "TC026",
      title: "Tactical Mirroring",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC027",
      title: "Permission-Based Advice",
      loaded: true,
      impact: "medium",
    },
  ],
  "Clarity / Direction": [
    { id: "TC011", title: "Summary Check", loaded: true, impact: "medium" },
    {
      id: "TC012",
      title: "Full-Attention Signal",
      loaded: true,
      impact: "medium",
    },
    { id: "TC013", title: "Clean Request", loaded: true, impact: "medium" },
    {
      id: "TC014",
      title: "Validate the Concern",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC015",
      title: "Premature Advice Restraint",
      loaded: true,
      impact: "medium",
    },
    { id: "TC019", title: "Small Ask", loaded: true, impact: "medium" },
    { id: "TC020", title: "Low-Friction Ask", loaded: true, impact: "medium" },
    {
      id: "TC034",
      title: "Two-Option Questions",
      loaded: true,
      impact: "medium",
    },
    { id: "TC042", title: "PREP", loaded: true, impact: "medium" },
    { id: "TC043", title: "OARS", loaded: true, impact: "medium" },
    { id: "TC044", title: "BLUF", loaded: true, impact: "medium" },
    { id: "TC045", title: "Ask-Tell-Ask", loaded: true, impact: "medium" },
    {
      id: "TC046",
      title: "Elicit-Provide-Elicit",
      loaded: true,
      impact: "medium",
    },
    { id: "TC047", title: "STAR", loaded: true, impact: "medium" },
    { id: "TC048", title: "SCQA", loaded: true, impact: "medium" },
    { id: "TC049", title: "CARL", loaded: true, impact: "medium" },
    {
      id: "TC050",
      title: "What? So What? Now What?",
      loaded: true,
      impact: "medium",
    },
    { id: "TC051", title: "RASA", loaded: true, impact: "medium" },
    { id: "TC052", title: "SBI", loaded: true, impact: "medium" },
    { id: "TC053", title: "NVC / OFNR", loaded: true, impact: "medium" },
    { id: "TC066", title: "BIFF", loaded: true, impact: "medium" },
    { id: "TC068", title: "Specific ask", loaded: true, impact: "medium" },
    { id: "TC074", title: "DESC", loaded: true, impact: "medium" },
    { id: "TC080", title: "NURSE", loaded: true, impact: "medium" },
    { id: "TC081", title: "COIN", loaded: true, impact: "medium" },
    { id: "TC086", title: "LEAP", loaded: true, impact: "medium" },
    {
      id: "TC088",
      title: "One-screen message",
      loaded: true,
      impact: "medium",
    },
    { id: "TC094", title: "Bounded request", loaded: true, impact: "medium" },
    { id: "TC095", title: "DEAR MAN", loaded: true, impact: "medium" },
  ],
  "Connection / Warmth": [
    {
      id: "TC001",
      title: "Live Thread Follow-Ups",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC002",
      title: "Support Response over Shift Response",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC003",
      title: "Comment-Before-Question",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC004",
      title: "Reflective Listening",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC005",
      title: "Validation Without Agreement",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC006",
      title: "Emotional Labelling",
      loaded: true,
      impact: "medium",
    },
    { id: "TC010", title: "Warm Presence", loaded: true, impact: "medium" },
    {
      id: "TC016",
      title: "Active-Constructive Responding",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC018",
      title: "Specific Appreciation",
      loaded: true,
      impact: "medium",
    },
    { id: "TC022", title: "Status Generosity", loaded: true, impact: "medium" },
    {
      id: "TC023",
      title: "Loaded Word Follow-Up",
      loaded: true,
      impact: "medium",
    },
    { id: "TC024", title: "Warm Opening", loaded: true, impact: "medium" },
    { id: "TC025", title: "Exact Word Pickup", loaded: true, impact: "medium" },
    {
      id: "TC030",
      title: "Echo Plus Question",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC032",
      title: "Name and Detail Memory",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC033",
      title: "Minimal Encouragers",
      loaded: true,
      impact: "medium",
    },
    { id: "TC036", title: "Contextual Opener", loaded: true, impact: "medium" },
    {
      id: "TC037",
      title: "Double-Sided Reflection",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC038",
      title: "Conversation Threading",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC039",
      title: "Common-Ground Discovery",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC040",
      title: "Meaning Reflection",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC041",
      title: "Topic Energy Tracking",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC054",
      title: "Similarity signalling",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC056",
      title: "Topic preference detection",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC057",
      title: "Shared identity language",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC058",
      title: "Feeling-plus-need reflection",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC059",
      title: "Energy-based topic switching",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC060",
      title: "Positive assumption",
      loaded: true,
      impact: "medium",
    },
    { id: "TC061", title: "Tone reflection", loaded: true, impact: "medium" },
    { id: "TC062", title: "Thread return", loaded: true, impact: "medium" },
    {
      id: "TC063",
      title: "Make them the expert",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC064",
      title: "Check before interpreting",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC065",
      title: "Conversation bookmarking",
      loaded: true,
      impact: "medium",
    },
    { id: "TC067", title: "Advice request", loaded: true, impact: "medium" },
    {
      id: "TC070",
      title: "Careful normalising",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC071",
      title: "Conversation re-entry after interruption",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC072",
      title: "Low-pressure invitation",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC075",
      title: "Acknowledge effort",
      loaded: true,
      impact: "medium",
    },
    { id: "TC078", title: "Callback bridge", loaded: true, impact: "medium" },
    { id: "TC082", title: "Turn-toward bids", loaded: true, impact: "medium" },
    { id: "TC084", title: "Listen for values", loaded: true, impact: "medium" },
    { id: "TC087", title: "Story invitation", loaded: true, impact: "medium" },
    {
      id: "TC090",
      title: "Do-not-fix-yet discipline",
      loaded: true,
      impact: "medium",
    },
    { id: "TC093", title: "How-so prompt", loaded: true, impact: "medium" },
    {
      id: "TC096",
      title: "Capitalisation extension",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC098",
      title: "Emotion before facts",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC100",
      title: "What-did-you-make-of-it question",
      loaded: true,
      impact: "medium",
    },
  ],
  "Resilience / Recovery": [
    {
      id: "TC007",
      title: "No One-Upping Discipline",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC008",
      title: "No-Overexplaining Discipline",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC009",
      title: "Anti-Boomerasking Discipline",
      loaded: true,
      impact: "medium",
    },
    { id: "TC069", title: "Clarify objection", loaded: true, impact: "medium" },
    {
      id: "TC073",
      title: "Resistance-as-information",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC076",
      title: "Interrogation avoidance",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC077",
      title: "Agreement before disagreement",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC079",
      title: "Permission to disagree",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC083",
      title: "Ask what would make it workable",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC085",
      title: "Question-stacking restraint",
      loaded: true,
      impact: "medium",
    },
    { id: "TC089", title: "Risk reduction", loaded: true, impact: "medium" },
    {
      id: "TC091",
      title: "Forced-humour restraint",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC092",
      title: "Face-saving disagreement",
      loaded: true,
      impact: "medium",
    },
    {
      id: "TC099",
      title: "Humblebrag avoidance",
      loaded: true,
      impact: "medium",
    },
  ],
};

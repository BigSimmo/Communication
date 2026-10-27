// Type-only imports: this module is also loaded by the Vite build plugin in
// plain Node (type stripping), so it must not import runtime code.
import type { CardData, PhraseGroup, ScenarioEntry } from "./card-types";

/**
 * The text of one card that global search, the Phrase Bank and Quick Lookup
 * need. A structural subset of CardData, so a full card also satisfies it.
 */
export interface CardTextEntry {
  overview: { bestFor: string[]; coreFormula: string[] };
  phraseBank: PhraseGroup[];
  scenarios: ScenarioEntry[];
  whyItWorks: string;
}

export type CardTextIndex = Readonly<Record<string, CardTextEntry>>;

export function projectCardText(card: CardData): CardTextEntry {
  return {
    overview: {
      bestFor: card.overview.bestFor,
      coreFormula: card.overview.coreFormula,
    },
    phraseBank: card.phraseBank.map((group) => ({
      id: group.id,
      label: group.label,
      tag: group.tag,
      ...(group.tone ? { tone: group.tone } : {}),
      phrases: group.phrases,
    })),
    scenarios: card.scenarios.map(({ situation, move, phrase }) => ({
      situation,
      move,
      phrase,
    })),
    whyItWorks: card.whyItWorks,
  };
}

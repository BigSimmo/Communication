// Shared fixtures for the search tests: a synthetic card corpus and helpers.
import { expect } from "vitest";
import type { CardData, PhraseGroup } from "../lib/card-types";
import { CARD_IDS } from "../lib/drill-state";
import type { SearchOptions } from "../lib/search-index";

// Synthetic card content keyed by real card ids, so titles and categories come
// from the real library metadata (data.ts) while the searchable body text is
// fully controlled here. Playbooks are the real templates.
export function card(id: string, overrides: Partial<CardData> = {}): CardData {
  return {
    id,
    overview: {
      coreFormula: ["step one"],
      minimumViableMove: "",
      impact: "High",
      difficulty: "Easy",
      misuse: "",
      bestFor: ["generic use"],
    },
    phraseBank: [
      {
        id: "g",
        label: "Group",
        tag: "general",
        tone: "Warm",
        phrases: ["Plain line."],
      },
    ],
    scenarios: [],
    whyItWorks: "shared rationale",
    ...overrides,
  } as CardData;
}

export function group(
  label: string,
  phrases: string[],
  extra: Partial<PhraseGroup> = {},
): PhraseGroup {
  return { id: label.toLowerCase(), label, tag: "general", phrases, ...extra };
}

export const GENERIC_IDS = CARD_IDS.slice(0, 20);
export const CORPUS: Record<string, CardData> = Object.fromEntries(
  GENERIC_IDS.map((id) => [id, card(id)]),
);
// TC014 "Validate the concern" (Clarity / Direction)
CORPUS.TC014 = card("TC014", {
  phraseBank: [
    group("Openers", ["I hear why that worries you."], { tone: "Warm" }),
  ],
  whyItWorks: "Naming the concern lowers defences.",
});
// TC001 "Live thread follow-ups": mentions TC014's title inside a phrase
CORPUS.TC001 = card("TC001", {
  phraseBank: [group("Bridges", ["First validate the concern, then ask."])],
});
// TC002: accented text
CORPUS.TC002 = card("TC002", {
  whyItWorks: "Avoids the Cliché of instant advice.",
});
// TC003: references TC014 by id inside a scenario
CORPUS.TC003 = card("TC003", {
  scenarios: [{ situation: "They push back", move: "See TC014", phrase: "" }],
});
// TC006 "Emotional labelling": only card vocabulary, never the word "upset"
CORPUS.TC006 = card("TC006", {
  overview: {
    ...card("TC006").overview,
    bestFor: ["When someone is frustrated or hurt"],
  },
  phraseBank: [group("Labels", ["That sounds frustrating."])],
});
// TC007: a stage direction that is not a line to say out loud
CORPUS.TC007 = card("TC007", {
  phraseBank: [
    group("Practice", ["[Plant feet. Pause. Continue.]", "Keep it short."]),
  ],
});
// TC008: a phrase group whose tone is the match
CORPUS.TC008 = card("TC008", {
  phraseBank: [
    group("Restart lines", ["Can we start again?"], { tone: "Repair" }),
  ],
});
// TC010: a phrase with the everyday word itself
CORPUS.TC010 = card("TC010", {
  phraseBank: [group("Noticing", ["You seem upset."])],
});
// TC029 "Strategic silence"
CORPUS.TC029 = card("TC029", {
  overview: { ...card("TC029").overview, bestFor: ["Awkward pauses"] },
  phraseBank: [group("Holding", ["Let the silence do the work."])],
});
// TC101 "Effective apology"
CORPUS.TC101 = card("TC101", {
  phraseBank: [group("Apologies", ["I'm sorry. That was on me."])],
  whyItWorks: "A clean apology repairs trust.",
});
// TC102 "Positive no (Yes! No. Yes?)"
CORPUS.TC102 = card("TC102", {
  overview: {
    ...card("TC102").overview,
    bestFor: ["Declining a request kindly"],
  },
});

export const NO_BOOSTS: SearchOptions = {
  boosts: {
    savedCardIds: [],
    savedPhrases: [],
    recentCardIds: [],
    startHereCardIds: [],
  },
};

export function boosted(
  boosts: NonNullable<SearchOptions["boosts"]>,
): SearchOptions {
  return { boosts: { ...NO_BOOSTS.boosts, ...boosts } };
}

export function expectSortedByScore(results: { score: number }[]) {
  for (let i = 1; i < results.length; i++) {
    expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score);
  }
}

export const ids = (results: { id: string }[]) => results.map((r) => r.id);

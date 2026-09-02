import { inferPhraseTone } from "./card-types";
import { loadAllCards } from "./card-loader";
import { LIBRARY_CATEGORIES } from "./data";

export interface RankedResult {
  id: string;
  title: string;
  category: string;
  loaded: boolean;
  score: number;
  matchedIn: string;
}

const CARD_META: Record<string, { title: string; category: string; loaded: boolean }> = {};
for (const [category, cards] of Object.entries(LIBRARY_CATEGORIES)) {
  for (const card of cards) {
    CARD_META[card.id] = { title: card.title, category, loaded: card.loaded };
  }
}

interface SearchCorpusEntry {
  id: string;
  titleLower: string;
  idLower: string;
  categoryLower: string;
  bestForText: string;
  coreFormulaText: string;
  phraseBankText: string;
  scenariosText: string;
  whyItWorksText: string;
}

let searchCorpusPromise: Promise<ReadonlyArray<SearchCorpusEntry>> | null = null;

function loadSearchCorpus(): Promise<ReadonlyArray<SearchCorpusEntry>> {
  if (!searchCorpusPromise) {
    searchCorpusPromise = loadAllCards().then((cards) =>
      Object.freeze(
        Object.entries(cards).map(([id, card]) => {
          const meta = CARD_META[id];
          return {
            id,
            titleLower: (meta?.title ?? id).toLowerCase(),
            idLower: id.toLowerCase(),
            categoryLower: (meta?.category ?? "").toLowerCase(),
            bestForText: card.overview.bestFor.join(" ").toLowerCase(),
            coreFormulaText: card.overview.coreFormula.join(" ").toLowerCase(),
            phraseBankText: card.phraseBank
              .flatMap((group) => [
                group.label,
                group.tag,
                inferPhraseTone(group),
                ...group.phrases,
              ])
              .join(" ")
              .toLowerCase(),
            scenariosText: card.scenarios
              .map((scenario) =>
                `${scenario.situation} ${scenario.move} ${scenario.phrase}`,
              )
              .join(" ")
              .toLowerCase(),
            whyItWorksText: card.whyItWorks.toLowerCase(),
          };
        }),
      ),
    );
  }
  return searchCorpusPromise;
}

const FIELD_WEIGHTS: Array<{ key: keyof SearchCorpusEntry; label: string; exact: number; prefix: number; contains: number }> = [
  { key: "idLower",         label: "id",          exact: 100, prefix: 80,  contains: 80  },
  { key: "titleLower",      label: "title",        exact: 95,  prefix: 85,  contains: 70  },
  { key: "categoryLower",   label: "category",     exact: 60,  prefix: 58,  contains: 55  },
  { key: "bestForText",     label: "best-for",     exact: 45,  prefix: 44,  contains: 43  },
  { key: "coreFormulaText", label: "formula",      exact: 40,  prefix: 39,  contains: 38  },
  { key: "phraseBankText",  label: "phrases",      exact: 35,  prefix: 34,  contains: 33  },
  { key: "scenariosText",   label: "scenarios",    exact: 25,  prefix: 24,  contains: 23  },
  { key: "whyItWorksText",  label: "explanation",  exact: 20,  prefix: 19,  contains: 18  },
];

const TOKEN_FIELD_WEIGHTS: Array<{ key: keyof SearchCorpusEntry; label: string; score: number }> = [
  { key: "titleLower",      label: "title",       score: 10 },
  { key: "categoryLower",   label: "category",    score: 7  },
  { key: "bestForText",     label: "best-for",    score: 6  },
  { key: "coreFormulaText", label: "formula",     score: 5  },
  { key: "phraseBankText",  label: "phrases",     score: 4  },
  { key: "scenariosText",   label: "scenarios",   score: 3  },
  { key: "whyItWorksText",  label: "explanation", score: 1  },
];

function scoreEntry(entry: SearchCorpusEntry, q: string): { score: number; matchedIn: string } {
  const ql = q.toLowerCase().trim();
  if (!ql) return { score: 0, matchedIn: "" };

  for (const field of FIELD_WEIGHTS) {
    const text = entry[field.key] as string;
    if (text === ql) return { score: field.exact, matchedIn: field.label };
    if (text.startsWith(ql)) return { score: field.prefix, matchedIn: field.label };
    if (text.includes(ql)) return { score: field.contains, matchedIn: field.label };
  }

  const tokens = ql.split(/\s+/).filter(Boolean);
  if (tokens.length < 2) return { score: 0, matchedIn: "" };

  let totalScore = 0;
  let bestLabel = "";
  let bestLabelPriority = Infinity;

  for (const token of tokens) {
    let tokenBestScore = 0;
    let tokenBestPriority = Infinity;
    let tokenBestLabel = "";
    for (let fi = 0; fi < TOKEN_FIELD_WEIGHTS.length; fi++) {
      const field = TOKEN_FIELD_WEIGHTS[fi];
      const text = entry[field.key] as string;
      if (text.includes(token)) {
        if (field.score > tokenBestScore) {
          tokenBestScore = field.score;
          tokenBestPriority = fi;
          tokenBestLabel = field.label;
        }
      }
    }
    if (tokenBestScore > 0) {
      totalScore += tokenBestScore;
      if (tokenBestPriority < bestLabelPriority) {
        bestLabelPriority = tokenBestPriority;
        bestLabel = tokenBestLabel;
      }
    }
  }

  // Cap multi-word partial score below the lowest full-phrase exact/prefix score (18)
  // so any single-word full-phrase match outranks multi-word token matches.
  const cappedScore = Math.min(totalScore, 17);
  if (cappedScore > 0) return { score: cappedScore, matchedIn: bestLabel };
  return { score: 0, matchedIn: "" };
}

export async function searchCards(query: string): Promise<RankedResult[]> {
  const q = query.trim();
  if (!q) return [];

  const searchCorpus = await loadSearchCorpus();
  const results: RankedResult[] = [];

  for (const entry of searchCorpus) {
    const { score, matchedIn } = scoreEntry(entry, q);
    if (score > 0) {
      const meta = CARD_META[entry.id];
      results.push({
        id: entry.id,
        title: meta?.title ?? entry.id,
        category: meta?.category ?? "",
        loaded: meta?.loaded ?? false,
        score,
        matchedIn,
      });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 12);
}

export function highlightMatch(text: string, query: string): Array<{ text: string; highlight: boolean }> {
  if (!query.trim()) return [{ text, highlight: false }];
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part) => ({
    text: part,
    highlight: part.toLowerCase() === query.trim().toLowerCase(),
  }));
}

// The search indexes: one MiniSearch index per kind of result (techniques,
// phrases, playbooks) plus the vocabulary used for spelling correction and
// word forms. Built once per session from the card text index (precached for
// offline use), the light library metadata and the playbook templates.
// Building takes about 150 to 200 ms on a laptop, in chunks that yield to the
// main thread; `preloadSearchIndex` lets a screen start it before the first
// keystroke.

import MiniSearch from "minisearch";
import SearchableMap from "minisearch/SearchableMap";
import { inferPhraseTone, isSpeakablePhrase } from "./card-types";
import { loadCardTextIndex, type CardTextIndex } from "./card-text-index";
import { LIBRARY_CATEGORIES } from "./data";
import {
  PLAYBOOK_TEMPLATES,
  type PlaybookTemplate,
} from "./playbook-templates";
import { isStopWord, stem, tokenize } from "./search-text";
import type { PhraseResult } from "./search-types";

// Field weights, highest first. The order also decides `matchedIn`.
export const TECHNIQUE_FIELDS = [
  { field: "code", label: "id", boost: 12 },
  { field: "title", label: "title", boost: 10 },
  { field: "category", label: "category", boost: 6 },
  { field: "bestFor", label: "best-for", boost: 5 },
  { field: "formula", label: "formula", boost: 4 },
  { field: "phrases", label: "phrases", boost: 3 },
  { field: "scenarios", label: "scenarios", boost: 2 },
  { field: "whyItWorks", label: "explanation", boost: 1 },
] as const;

export const PHRASE_FIELDS = [
  { field: "text", label: "text", boost: 4 },
  { field: "group", label: "group", boost: 1.5 },
] as const;

export const PLAYBOOK_FIELDS = [
  { field: "name", label: "name", boost: 6 },
  { field: "description", label: "description", boost: 2 },
  { field: "cards", label: "cards", boost: 1.5 },
  { field: "context", label: "context", boost: 1 },
] as const;

// ---------------------------------------------------------------------------
// Index documents

interface TechniqueDoc {
  id: string;
  /** "TC014 014": the library shows card numbers without "TC". */
  code: string;
  title: string;
  category: string;
  bestFor: string;
  formula: string;
  phrases: string;
  scenarios: string;
  whyItWorks: string;
}

interface PhraseDoc {
  id: string;
  text: string;
  group: string;
}

interface PlaybookDoc {
  id: string;
  name: string;
  description: string;
  cards: string;
  context: string;
}

export interface TechniqueMeta {
  title: string;
  category: string;
  loaded: boolean;
  /** Normalised field text for whole-query bonuses. */
  idNorm: string;
  titleNorm: string;
  categoryNorm: string;
  bodyNorm: string;
}

interface PhraseMeta {
  phrase: Omit<PhraseResult, "score" | "matchedIn">;
  textNorm: string;
}

export interface SearchEngine {
  techniques: MiniSearch<TechniqueDoc>;
  phrases: MiniSearch<PhraseDoc>;
  playbooks: MiniSearch<PlaybookDoc>;
  techniqueMeta: Map<string, TechniqueMeta>;
  phraseMeta: Map<string, PhraseMeta>;
  playbookMeta: Map<string, PlaybookTemplate>;
  /** Every indexed word, with how often it appears. */
  words: SearchableMap<number>;
  /** Every stem, with the surface words that produced it and their counts. */
  stems: SearchableMap<Map<string, number>>;
}

const CARD_META = new Map<
  string,
  { title: string; category: string; loaded: boolean }
>();
for (const [category, cards] of Object.entries(LIBRARY_CATEGORIES)) {
  for (const card of cards) {
    CARD_META.set(card.id, {
      title: card.title,
      category,
      loaded: card.loaded,
    });
  }
}

// Only surface words are indexed. Other forms of a word are reached at query
// time through the stem table, which keeps the index half the size.
function processIndexTerm(term: string): string | null {
  return isStopWord(term) ? null : term;
}

// Documents hold text that is already normalised into space-separated words
// (see `WordCounter.run`), so MiniSearch only has to split on spaces.
const splitWords = (text: string): string[] => text.split(" ");

function createIndex<T>(fields: ReadonlyArray<{ field: string }>) {
  return new MiniSearch<T>({
    fields: fields.map((f) => f.field),
    storeFields: [],
    tokenize: splitWords,
    processTerm: processIndexTerm,
  });
}

/** Text as a run of normalised words, for whole-query comparisons. */
export function wordRun(text: string): string {
  return tokenize(text).join(" ");
}

/** Normalises text once and counts its words for the vocabulary. */
class WordCounter {
  readonly counts = new Map<string, number>();

  run(text: string): string {
    const words = tokenize(text);
    for (const word of words) {
      if (!isStopWord(word))
        this.counts.set(word, (this.counts.get(word) ?? 0) + 1);
    }
    return words.join(" ");
  }

  vocabulary() {
    const words = new SearchableMap<number>();
    const stems = new SearchableMap<Map<string, number>>();
    for (const [word, count] of this.counts) {
      words.set(word, count);
      const stemmed = stem(word);
      const forms = stems.get(stemmed);
      if (forms) forms.set(word, count);
      else stems.set(stemmed, new Map([[word, count]]));
    }
    return { words, stems };
  }
}

/** Documents indexed between yields to the main thread while building. */
const BUILD_CHUNK_SIZE = 400;

async function buildEngine(
  cards: CardTextIndex,
  playbooks: readonly PlaybookTemplate[],
): Promise<SearchEngine> {
  const techniques = createIndex<TechniqueDoc>(TECHNIQUE_FIELDS);
  const phrases = createIndex<PhraseDoc>(PHRASE_FIELDS);
  const playbookIndex = createIndex<PlaybookDoc>(PLAYBOOK_FIELDS);
  const techniqueMeta = new Map<string, TechniqueMeta>();
  const phraseMeta = new Map<string, PhraseMeta>();
  const playbookMeta = new Map<string, PlaybookTemplate>();
  const counter = new WordCounter();
  const techniqueDocs: TechniqueDoc[] = [];
  const phraseDocs: PhraseDoc[] = [];

  for (const [id, card] of Object.entries(cards)) {
    const meta = CARD_META.get(id);
    const title = meta?.title ?? id;
    const category = meta?.category ?? "";
    const phraseRuns: string[] = [];
    const groupRuns: string[] = [];

    card.phraseBank.forEach((group, groupIndex) => {
      const tone = inferPhraseTone(group);
      const groupRun = counter.run(`${group.label} ${group.tag} ${tone}`);
      groupRuns.push(groupRun);
      group.phrases.forEach((text, phraseIndex) => {
        const run = counter.run(text);
        phraseRuns.push(run);
        if (!isSpeakablePhrase(text)) return;
        const phraseId = `${id}#${groupIndex}#${phraseIndex}`;
        phraseDocs.push({ id: phraseId, text: run, group: groupRun });
        phraseMeta.set(phraseId, {
          phrase: {
            id: phraseId,
            text,
            cardId: id,
            cardTitle: title,
            category,
            groupLabel: group.label,
            tone,
          },
          textNorm: run,
        });
      });
    });

    const doc: TechniqueDoc = {
      id,
      code: counter.run(`${id} ${id.replace(/^TC/i, "")}`),
      title: counter.run(title),
      category: counter.run(category),
      bestFor: counter.run(card.overview.bestFor.join(" ")),
      formula: counter.run(card.overview.coreFormula.join(" ")),
      phrases: [...groupRuns, ...phraseRuns].join(" "),
      scenarios: counter.run(
        card.scenarios
          .map((s) => `${s.situation} ${s.move} ${s.phrase}`)
          .join(" "),
      ),
      whyItWorks: counter.run(card.whyItWorks),
    };
    techniqueDocs.push(doc);
    techniqueMeta.set(id, {
      title,
      category,
      loaded: meta?.loaded ?? false,
      idNorm: id.toLowerCase(),
      titleNorm: doc.title,
      categoryNorm: doc.category,
      bodyNorm: [
        doc.bestFor,
        doc.formula,
        doc.phrases,
        doc.scenarios,
        doc.whyItWorks,
      ].join(" | "),
    });
  }

  // Indexed in chunks so typing stays responsive while the index builds.
  await techniques.addAllAsync(techniqueDocs, { chunkSize: 20 });
  await phrases.addAllAsync(phraseDocs, { chunkSize: BUILD_CHUNK_SIZE });

  for (const playbook of playbooks) {
    const cardTitles = playbook.cardIds
      .map((cardId) => CARD_META.get(cardId)?.title ?? cardId)
      .join(" ");
    playbookIndex.add({
      id: playbook.id,
      name: counter.run(playbook.name),
      description: counter.run(playbook.description),
      cards: wordRun(cardTitles),
      context: wordRun(`${playbook.context} ${playbook.section}`),
    });
    playbookMeta.set(playbook.id, playbook);
  }

  return {
    techniques,
    phrases,
    playbooks: playbookIndex,
    techniqueMeta,
    phraseMeta,
    playbookMeta,
    ...counter.vocabulary(),
  };
}

// ---------------------------------------------------------------------------
// Loading

let enginePromise: Promise<SearchEngine> | null = null;

export function loadEngine(): Promise<SearchEngine> {
  if (!enginePromise) {
    const pending = loadCardTextIndex()
      .then((cards) => buildEngine(cards, PLAYBOOK_TEMPLATES))
      .catch((error: unknown) => {
        // Not cached, so reopening search retries.
        if (enginePromise === pending) enginePromise = null;
        throw error;
      });
    enginePromise = pending;
  }
  return enginePromise;
}

/** Start building the index early, e.g. when the search screen opens. */
export async function preloadSearchIndex(): Promise<void> {
  await loadEngine();
}

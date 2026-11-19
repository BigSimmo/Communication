// Smart search across techniques, phrases and playbooks.
//
// Built on MiniSearch (an inverted index with BM25 ranking and prefix search)
// with this app's own text processing on top: accent folding, a small
// English stemmer, a hand-kept synonym list and spelling correction against
// the index's own vocabulary. Each kind of result has its own index so the
// 4,600 phrases do not skew how techniques rank, but one query plan runs
// against all of them.
//
// The index is built once per session from the card text index (which is
// precached for offline use), the light library metadata and the playbook
// templates. Building takes about 150 to 200 ms on a laptop, in chunks that
// yield to the main thread; `preloadSearchIndex` lets a screen start it
// before the first keystroke.

import MiniSearch, { type Query, type SearchResult } from "minisearch";
import SearchableMap from "minisearch/SearchableMap";
import {
  inferPhraseTone,
  isSpeakablePhrase,
  type CanonicalTone,
} from "./card-types";
import { loadCardTextIndex, type CardTextIndex } from "./card-text-index";
import { CORE_CARD_IDS, LIBRARY_CATEGORIES } from "./data";
import { loadFavouritesState } from "./favourites-state";
import {
  PLAYBOOK_TEMPLATES,
  type PlaybookTemplate,
} from "./playbook-templates";
import { readRecentCards } from "./recent-cards";
import { SEARCH_SYNONYMS } from "./search-synonyms";
import { isStopWord, stem, tokenize } from "./search-text";

// ---------------------------------------------------------------------------
// Public types

/** A technique (card) result. Shape unchanged from the earlier search. */
export interface RankedResult {
  id: string;
  title: string;
  category: string;
  loaded: boolean;
  score: number;
  /** Highest-priority field that matched: id, title, category, best-for,
      formula, phrases, scenarios or explanation. */
  matchedIn: string;
}

export interface PhraseResult {
  /** Stable within a build: card id, group position and phrase position. */
  id: string;
  text: string;
  cardId: string;
  cardTitle: string;
  category: string;
  groupLabel: string;
  tone: CanonicalTone;
  score: number;
  /** text or group (the phrase group's label, tag and tone). */
  matchedIn: string;
}

export interface PlaybookResult {
  id: string;
  name: string;
  description: string;
  context: PlaybookTemplate["context"];
  section: PlaybookTemplate["section"];
  cardIds: string[];
  score: number;
  /** name, description, cards or context. */
  matchedIn: string;
}

/**
 * Personal signals that lift results a little. Omitted fields are read from
 * the device: saved cards and phrases from favourites, recently opened cards,
 * and the Start here set. Pass an empty array to switch one off.
 */
export interface SearchBoosts {
  savedCardIds?: readonly string[];
  savedPhrases?: ReadonlyArray<{ cardId: string; text: string }>;
  recentCardIds?: readonly string[];
  startHereCardIds?: readonly string[];
}

export interface SearchOptions {
  boosts?: SearchBoosts;
  limits?: { techniques?: number; phrases?: number; playbooks?: number };
}

export interface SearchResults {
  /** The query as typed, trimmed. */
  query: string;
  /** Set when a word had no match and was replaced by a close spelling,
      e.g. "apolgy" -> "apology". The results are for this query. */
  correctedQuery: string | null;
  techniques: RankedResult[];
  phrases: PhraseResult[];
  playbooks: PlaybookResult[];
  /** Matches before the limits were applied. */
  totals: { techniques: number; phrases: number; playbooks: number };
}

export const DEFAULT_LIMITS = {
  techniques: 12,
  phrases: 30,
  playbooks: 6,
} as const;

// Field weights, highest first. The order also decides `matchedIn`.
const TECHNIQUE_FIELDS = [
  { field: "code", label: "id", boost: 12 },
  { field: "title", label: "title", boost: 10 },
  { field: "category", label: "category", boost: 6 },
  { field: "bestFor", label: "best-for", boost: 5 },
  { field: "formula", label: "formula", boost: 4 },
  { field: "phrases", label: "phrases", boost: 3 },
  { field: "scenarios", label: "scenarios", boost: 2 },
  { field: "whyItWorks", label: "explanation", boost: 1 },
] as const;

const PHRASE_FIELDS = [
  { field: "text", label: "text", boost: 4 },
  { field: "group", label: "group", boost: 1.5 },
] as const;

const PLAYBOOK_FIELDS = [
  { field: "name", label: "name", boost: 6 },
  { field: "description", label: "description", boost: 2 },
  { field: "cards", label: "cards", boost: 1.5 },
  { field: "context", label: "context", boost: 1 },
] as const;

/** Weight of a synonym relative to the word that was typed. */
const SYNONYM_WEIGHT = 0.45;
/** Weight of a stem-only match relative to the exact word. */
const STEM_WEIGHT = 0.8;

const BOOST = {
  savedCard: 1.5,
  savedPhrase: 1.6,
  phraseFromSavedCard: 1.15,
  recentFirst: 1.35,
  recentStep: 0.05,
  startHere: 1.15,
} as const;

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

interface TechniqueMeta {
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

interface SearchEngine {
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
function wordRun(text: string): string {
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

function loadEngine(): Promise<SearchEngine> {
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

// ---------------------------------------------------------------------------
// Query planning: spelling correction, synonyms, stems and prefixes

const SYNONYM_WORDS = new Map<string, readonly string[]>();
const SYNONYM_PHRASES = new Map<string, readonly string[]>();
let longestSynonymPhrase = 1;
for (const [key, targets] of Object.entries(SEARCH_SYNONYMS)) {
  const words = tokenize(key);
  if (words.length === 0) continue;
  if (words.length === 1) {
    SYNONYM_WORDS.set(words[0], targets);
    const stemmed = stem(words[0]);
    if (!SYNONYM_WORDS.has(stemmed)) SYNONYM_WORDS.set(stemmed, targets);
  } else {
    SYNONYM_PHRASES.set(words.join(" "), targets);
    longestSynonymPhrase = Math.max(longestSynonymPhrase, words.length);
  }
}

function synonymsFor(word: string): readonly string[] {
  return SYNONYM_WORDS.get(word) ?? SYNONYM_WORDS.get(stem(word)) ?? [];
}

function hasPrefix<T>(map: SearchableMap<T>, prefix: string): boolean {
  for (const _ of map.atPrefix(prefix).keys()) return true;
  return false;
}

function isKnownWord(engine: SearchEngine, word: string): boolean {
  return (
    hasPrefix(engine.words, word) ||
    engine.stems.has(stem(word)) ||
    synonymsFor(word).length > 0
  );
}

/** Allowed typos: one letter for short words, two for long ones. */
function maxTypos(word: string): number {
  return word.length < 6 ? 1 : 2;
}

/**
 * The closest indexed word to one that matches nothing, preferring the
 * fewest edits, then the most common word. Stems are compared too, so
 * "apolg" reaches "apology" through the stem "apolog".
 */
function correctWord(engine: SearchEngine, word: string): string | null {
  const max = maxTypos(word);
  let best: { word: string; distance: number; count: number } | null = null;
  const consider = (candidate: string, distance: number, count: number) => {
    if (
      !best ||
      distance < best.distance ||
      (distance === best.distance && count > best.count) ||
      (distance === best.distance &&
        count === best.count &&
        candidate < best.word)
    ) {
      best = { word: candidate, distance, count };
    }
  };
  for (const [candidate, [count, distance]] of engine.words.fuzzyGet(
    word,
    max,
  )) {
    if (distance > 0 && !isStopWord(candidate))
      consider(candidate, distance, count);
  }
  const stemmed = stem(word);
  for (const [, [forms, distance]] of engine.stems.fuzzyGet(stemmed, max)) {
    if (distance === 0) continue;
    let surface = "";
    let surfaceCount = 0;
    let total = 0;
    for (const [form, count] of forms) {
      total += count;
      if (count > surfaceCount || (count === surfaceCount && form < surface)) {
        surface = form;
        surfaceCount = count;
      }
    }
    if (surface && !isStopWord(surface)) consider(surface, distance, total);
  }
  return (best as { word: string } | null)?.word ?? null;
}

type QueryPart =
  | { kind: "word"; word: string }
  | { kind: "phrase"; words: string[]; synonyms: readonly string[] };

interface QueryPlan {
  /** Words actually searched for, after spelling correction. */
  words: string[];
  /** Typed words and their other forms, to tell direct matches from synonyms. */
  direct: ReadonlySet<string>;
  /** The searched words as one string, for whole-query bonuses. */
  run: string;
  corrected: boolean;
  query: Query;
  parts: number;
}

/** Indexed words that share a stem with `word`, other than `word` itself. */
function otherForms(engine: SearchEngine, word: string): string[] {
  const forms = engine.stems.get(stem(word));
  return forms ? [...forms.keys()].filter((form) => form !== word) : [];
}

function termAlternatives(
  engine: SearchEngine,
  word: string,
  prefix: boolean,
): Query[] {
  const alternatives: Query[] = [
    { combineWith: "OR", queries: [word], prefix: prefix && word.length >= 2 },
  ];
  const forms = otherForms(engine, word);
  if (forms.length > 0) {
    alternatives.push({
      combineWith: "OR",
      queries: forms,
      prefix: false,
      boostTerm: () => STEM_WEIGHT,
    });
  }
  return alternatives;
}

function synonymQueries(
  engine: SearchEngine,
  targets: readonly string[],
): Query[] {
  return targets.map((target) => {
    const words = tokenize(target).filter((w) => !isStopWord(w));
    const perWord = words.map((w): Query => ({
      combineWith: "OR",
      queries: [...new Set([w, ...otherForms(engine, w)])],
    }));
    return {
      combineWith: "AND",
      queries: perWord,
      prefix: false,
      boostTerm: () => SYNONYM_WEIGHT,
    };
  });
}

function planQuery(engine: SearchEngine, input: string): QueryPlan | null {
  const typed = tokenize(input);
  if (typed.length === 0) return null;

  let corrected = false;
  const words = typed.map((word) => {
    if (word.length < 3 || /\d/.test(word) || isStopWord(word)) return word;
    if (isKnownWord(engine, word)) return word;
    const replacement = correctWord(engine, word);
    if (!replacement) return word;
    corrected = true;
    return replacement;
  });

  // Filler words only count when the query has nothing else.
  const meaningful = words.some((w) => !isStopWord(w));

  const parts: QueryPart[] = [];
  for (let i = 0; i < words.length;) {
    let matched = false;
    for (
      let length = Math.min(longestSynonymPhrase, words.length - i);
      length >= 2;
      length--
    ) {
      const phrase = words.slice(i, i + length);
      const synonyms = SYNONYM_PHRASES.get(phrase.join(" "));
      if (synonyms) {
        parts.push({ kind: "phrase", words: phrase, synonyms });
        i += length;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    if (!meaningful || !isStopWord(words[i]))
      parts.push({ kind: "word", word: words[i] });
    i++;
  }

  const lastIndex = parts.length - 1;
  const queries = parts.map((part, index): Query => {
    if (part.kind === "word") {
      return {
        combineWith: "OR",
        queries: [
          ...termAlternatives(engine, part.word, true),
          ...synonymQueries(engine, synonymsFor(part.word)),
        ],
      };
    }
    const literal: Query = {
      combineWith: "AND",
      queries: part.words
        .filter((w) => !isStopWord(w))
        .map((w, wi, all): Query => ({
          combineWith: "OR",
          queries: termAlternatives(
            engine,
            w,
            index === lastIndex && wi === all.length - 1,
          ),
        })),
    };
    return {
      combineWith: "OR",
      queries: [literal, ...synonymQueries(engine, part.synonyms)],
    };
  });

  const direct = new Set<string>();
  for (const word of words) {
    direct.add(word);
    for (const form of otherForms(engine, word)) direct.add(form);
  }

  return {
    words,
    direct,
    run: words.join(" "),
    corrected,
    query: queries.length === 1 ? queries[0] : { combineWith: "AND", queries },
    parts: queries.length,
  };
}

// Query strings in the plan are already processed terms.
const RAW_TERMS = {
  tokenize: (text: string) => [text],
  processTerm: (term: string) => term,
} as const;

function runQuery<T>(
  index: MiniSearch<T>,
  plan: QueryPlan,
  fields: ReadonlyArray<{ field: string; boost: number }>,
): SearchResult[] {
  const boost = Object.fromEntries(fields.map((f) => [f.field, f.boost]));
  const results = index.search(plan.query, { ...RAW_TERMS, boost });
  if (results.length > 0 || plan.parts < 2) return results;
  // No entry has every word: fall back to entries with any of them.
  const query = plan.query as { queries: Query[] };
  return index.search(
    { combineWith: "OR", queries: query.queries },
    { ...RAW_TERMS, boost },
  );
}

function isDirectMatch(plan: QueryPlan, term: string): boolean {
  if (plan.direct.has(term)) return true;
  return plan.words.some((word) => word.length >= 2 && term.startsWith(word));
}

/**
 * The highest-priority field matched by the words the person typed (or their
 * other forms and completions). Only when nothing matched directly does a
 * synonym match name the field.
 */
function matchedField(
  result: SearchResult,
  plan: QueryPlan,
  fields: ReadonlyArray<{ field: string; label: string }>,
): string {
  const direct = new Set<string>();
  const viaSynonym = new Set<string>();
  for (const [term, matchedFields] of Object.entries(result.match)) {
    const target = isDirectMatch(plan, term) ? direct : viaSynonym;
    for (const field of matchedFields) target.add(field);
  }
  const matched = direct.size > 0 ? direct : viaSynonym;
  return fields.find((f) => matched.has(f.field))?.label ?? "";
}

// ---------------------------------------------------------------------------
// Ranking

interface ResolvedBoosts {
  savedCards: ReadonlySet<string>;
  savedPhrases: ReadonlySet<string>;
  recent: ReadonlyMap<string, number>;
  startHere: ReadonlySet<string>;
}

function phraseKey(cardId: string, text: string): string {
  return `${cardId}\n${wordRun(text)}`;
}

function resolveBoosts(boosts: SearchBoosts = {}): ResolvedBoosts {
  const needsFavourites =
    boosts.savedCardIds === undefined || boosts.savedPhrases === undefined;
  const favourites = needsFavourites ? loadFavouritesState() : null;
  const savedCardIds = boosts.savedCardIds ?? favourites?.cardIds ?? [];
  const savedPhrases = boosts.savedPhrases ?? favourites?.phrases ?? [];
  const recentCardIds = boosts.recentCardIds ?? readRecentCards();
  return {
    savedCards: new Set(savedCardIds),
    savedPhrases: new Set(savedPhrases.map((p) => phraseKey(p.cardId, p.text))),
    recent: new Map(recentCardIds.map((id, index) => [id, index])),
    startHere: new Set(boosts.startHereCardIds ?? CORE_CARD_IDS),
  };
}

function recentBoost(boosts: ResolvedBoosts, cardId: string): number {
  const position = boosts.recent.get(cardId);
  if (position === undefined) return 1;
  return Math.max(1.05, BOOST.recentFirst - BOOST.recentStep * position);
}

function techniqueBonus(meta: TechniqueMeta, plan: QueryPlan): number {
  const q = plan.run;
  if (meta.idNorm === q) return 4;
  if (meta.titleNorm === q) return 3;
  if (meta.titleNorm.startsWith(q)) return 2.2;
  if (` ${meta.titleNorm}`.includes(` ${q}`)) return 1.8;
  if (meta.categoryNorm.includes(q)) return 1.3;
  if (plan.words.length > 1 && meta.bodyNorm.includes(q)) return 1.25;
  return 1;
}

function byScoreThenId<T extends { score: number; id: string }>(a: T, b: T) {
  return b.score - a.score || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}

function rankTechniques(
  engine: SearchEngine,
  plan: QueryPlan,
  boosts: ResolvedBoosts,
): RankedResult[] {
  const ranked: RankedResult[] = [];
  for (const result of runQuery(engine.techniques, plan, TECHNIQUE_FIELDS)) {
    const id = result.id as string;
    const meta = engine.techniqueMeta.get(id);
    if (!meta) continue;
    let score = result.score * techniqueBonus(meta, plan);
    if (boosts.savedCards.has(id)) score *= BOOST.savedCard;
    if (boosts.startHere.has(id)) score *= BOOST.startHere;
    score *= recentBoost(boosts, id);
    ranked.push({
      id,
      title: meta.title,
      category: meta.category,
      loaded: meta.loaded,
      score,
      matchedIn: matchedField(result, plan, TECHNIQUE_FIELDS),
    });
  }
  return ranked.sort(byScoreThenId);
}

function rankPhrases(
  engine: SearchEngine,
  plan: QueryPlan,
  boosts: ResolvedBoosts,
): PhraseResult[] {
  const ranked: PhraseResult[] = [];
  for (const result of runQuery(engine.phrases, plan, PHRASE_FIELDS)) {
    const meta = engine.phraseMeta.get(result.id as string);
    if (!meta) continue;
    let score = result.score;
    if (plan.words.length > 1 && meta.textNorm.includes(plan.run)) score *= 1.5;
    const { cardId, text } = meta.phrase;
    if (boosts.savedPhrases.has(phraseKey(cardId, text)))
      score *= BOOST.savedPhrase;
    else if (boosts.savedCards.has(cardId)) score *= BOOST.phraseFromSavedCard;
    ranked.push({
      ...meta.phrase,
      score,
      matchedIn: matchedField(result, plan, PHRASE_FIELDS),
    });
  }
  return ranked.sort(byScoreThenId);
}

function rankPlaybooks(
  engine: SearchEngine,
  plan: QueryPlan,
): PlaybookResult[] {
  const ranked: PlaybookResult[] = [];
  for (const result of runQuery(engine.playbooks, plan, PLAYBOOK_FIELDS)) {
    const playbook = engine.playbookMeta.get(result.id as string);
    if (!playbook) continue;
    const name = wordRun(playbook.name);
    const score =
      result.score *
      (name === plan.run ? 3 : ` ${name}`.includes(` ${plan.run}`) ? 2 : 1);
    ranked.push({
      id: playbook.id,
      name: playbook.name,
      description: playbook.description,
      context: playbook.context,
      section: playbook.section,
      cardIds: [...playbook.cardIds],
      score,
      matchedIn: matchedField(result, plan, PLAYBOOK_FIELDS),
    });
  }
  return ranked.sort(byScoreThenId);
}

// ---------------------------------------------------------------------------
// Public API

/**
 * Search techniques, phrases and playbooks at once. Words match as you type
 * (word beginnings), across word forms (apologise / apology) and through the
 * synonym list (upset -> frustrated, angry, hurt). A word that matches
 * nothing is replaced by the closest spelling and `correctedQuery` says so.
 */
export async function searchAll(
  query: string,
  options: SearchOptions = {},
): Promise<SearchResults> {
  const trimmed = query.trim();
  const empty: SearchResults = {
    query: trimmed,
    correctedQuery: null,
    techniques: [],
    phrases: [],
    playbooks: [],
    totals: { techniques: 0, phrases: 0, playbooks: 0 },
  };
  if (!trimmed) return empty;

  const engine = await loadEngine();
  const plan = planQuery(engine, trimmed);
  if (!plan) return empty;

  const boosts = resolveBoosts(options.boosts);
  const limits = { ...DEFAULT_LIMITS, ...options.limits };
  const techniques = rankTechniques(engine, plan, boosts);
  const phrases = rankPhrases(engine, plan, boosts);
  const playbooks = rankPlaybooks(engine, plan);
  return {
    query: trimmed,
    correctedQuery: plan.corrected ? plan.run : null,
    techniques: techniques.slice(0, limits.techniques),
    phrases: phrases.slice(0, limits.phrases),
    playbooks: playbooks.slice(0, limits.playbooks),
    totals: {
      techniques: techniques.length,
      phrases: phrases.length,
      playbooks: playbooks.length,
    },
  };
}

/** Technique results only, best first (at most 12 by default). */
export async function searchCards(
  query: string,
  options: SearchOptions = {},
): Promise<RankedResult[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];
  const engine = await loadEngine();
  const plan = planQuery(engine, trimmed);
  if (!plan) return [];
  const limit = options.limits?.techniques ?? DEFAULT_LIMITS.techniques;
  return rankTechniques(engine, plan, resolveBoosts(options.boosts)).slice(
    0,
    limit,
  );
}

/**
 * Completions for the word being typed, most common first: "sil" ->
 * "silence", "silent". Earlier words are kept as typed (normalised).
 */
export async function suggestSearches(
  query: string,
  limit = 5,
): Promise<string[]> {
  const words = tokenize(query);
  const last = words.at(-1);
  if (!last || last.length < 2 || /\s$/.test(query)) return [];
  const engine = await loadEngine();
  const before = words.slice(0, -1).join(" ");
  return [...engine.words.atPrefix(last).entries()]
    .filter(([word]) => word !== last && !isStopWord(word))
    .sort(
      ([a, ca], [b, cb]) => cb - ca || a.length - b.length || (a < b ? -1 : 1),
    )
    .slice(0, limit)
    .map(([word]) => (before ? `${before} ${word}` : word));
}

/**
 * Split text into highlighted and plain parts. Highlights the whole query
 * and each of its words (filler words aside), case-insensitively. Pass
 * `correctedQuery` from the results to highlight the corrected words.
 */
export function highlightMatch(
  text: string,
  query: string,
  correctedQuery?: string | null,
): Array<{ text: string; highlight: boolean }> {
  const whole = query.trim();
  if (!whole) return [{ text, highlight: false }];
  const terms = new Set<string>([whole.toLowerCase()]);
  for (const source of [whole, correctedQuery ?? ""]) {
    for (const word of source.toLowerCase().split(/\s+/)) {
      if (word.length >= 2 && !isStopWord(word)) terms.add(word);
    }
  }
  const escaped = [...terms]
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = escaped.join("|");
  const exact = new RegExp(`^(?:${pattern})$`, "i");
  return text.split(new RegExp(`(${pattern})`, "gi")).map((part) => ({
    text: part,
    highlight: part.length > 0 && exact.test(part),
  }));
}

// Smart search across techniques, phrases and playbooks.
//
// Built on MiniSearch (an inverted index with BM25 ranking and prefix search)
// with this app's own text processing on top: accent folding, a small
// English stemmer, a hand-kept synonym list and spelling correction against
// the index's own vocabulary. Each kind of result has its own index so the
// 4,600 phrases do not skew how techniques rank, but one query plan runs
// against all of them.
//
// Modules: search-engine.ts builds and loads the indexes, search-query.ts
// plans a query, search-text.ts normalises and stems words, and this file
// ranks results and is the public API.

import { CORE_CARD_IDS } from "./data";
import { loadFavouritesState } from "./favourites-state";
import { readRecentCards } from "./recent-cards";
import {
  loadEngine,
  PHRASE_FIELDS,
  PLAYBOOK_FIELDS,
  TECHNIQUE_FIELDS,
  wordRun,
  type SearchEngine,
  type TechniqueMeta,
} from "./search-engine";
import {
  matchedField,
  planQuery,
  runQuery,
  type QueryPlan,
} from "./search-query";
import { isStopWord, tokenize } from "./search-text";
import {
  DEFAULT_LIMITS,
  type PhraseResult,
  type PlaybookResult,
  type RankedResult,
  type SearchBoosts,
  type SearchOptions,
  type SearchResults,
} from "./search-types";

export { preloadSearchIndex } from "./search-engine";
export {
  DEFAULT_LIMITS,
  type PhraseResult,
  type PlaybookResult,
  type RankedResult,
  type SearchBoosts,
  type SearchOptions,
  type SearchResults,
} from "./search-types";

const BOOST = {
  savedCard: 1.5,
  savedPhrase: 1.6,
  phraseFromSavedCard: 1.15,
  recentFirst: 1.35,
  recentStep: 0.05,
  startHere: 1.15,
} as const;

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
  // Stock lines shared by several cards are listed once: the best-ranked
  // copy (a saved one, if any) stands for the rest.
  const shown = new Set<string>();
  return ranked.sort(byScoreThenId).filter((phrase) => {
    const key = engine.phraseMeta.get(phrase.id)?.textNorm ?? phrase.id;
    if (shown.has(key)) return false;
    shown.add(key);
    return true;
  });
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

// Turns what was typed into a MiniSearch query: spelling correction against
// the index vocabulary, synonyms (single words and short phrases), other
// forms of each word through its stem, and prefix matching as you type.

import type MiniSearch from "minisearch";
import type { Query, SearchResult } from "minisearch";
import type SearchableMap from "minisearch/SearchableMap";
import type { SearchEngine } from "./search-engine";
import { SEARCH_SYNONYMS } from "./search-synonyms";
import { isStopWord, stem, tokenize } from "./search-text";

/** Weight of a synonym relative to the word that was typed. */
const SYNONYM_WEIGHT = 0.45;
/** Weight of a stem-only match relative to the exact word. */
const STEM_WEIGHT = 0.8;

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

export interface QueryPlan {
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

export function planQuery(
  engine: SearchEngine,
  input: string,
): QueryPlan | null {
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

export function runQuery<T>(
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
export function matchedField(
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

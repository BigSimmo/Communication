// Text processing shared by the search index and its queries: normalising,
// splitting into words, dropping filler words and reducing words to a stem.
// Index and query text go through exactly the same steps, so a stem only has
// to be consistent, not a real word.

/** Lowercase, strip accents and unify quote marks, so "Cliché" matches "cliche". */
export function normaliseText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[‘’ʼ]/g, "'")
    .toLowerCase();
}

/** Split normalised or raw text into words. Apostrophes are dropped ("don't" -> "dont"). */
export function tokenize(text: string): string[] {
  return normaliseText(text)
    .replace(/'/g, "")
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

/**
 * Very common words that would otherwise match almost every entry. Kept short
 * on purpose: words such as "no", "not", "why" and "how" carry meaning here
 * ("say no", "ask why").
 */
export const STOP_WORDS: ReadonlySet<string> = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "this",
  "to",
  "with",
]);

export function isStopWord(word: string): boolean {
  return STOP_WORDS.has(word);
}

const VOWEL = /[aeiouy]/;

function hasVowel(stem: string): boolean {
  return VOWEL.test(stem);
}

/** Derivational endings, longest first. Each maps to what replaces it. */
const DERIVATIONAL: ReadonlyArray<readonly [string, string]> = [
  ["ification", ""],
  ["isation", ""],
  ["ization", ""],
  ["fulness", ""],
  ["iveness", ""],
  ["ousness", ""],
  ["osity", ""],
  ["ation", ""],
  ["ition", ""],
  ["ement", "e"],
  ["ness", ""],
  ["etic", ""],
  ["ence", "ent"],
  ["ency", "ent"],
  ["ance", "ant"],
  ["ancy", "ant"],
  ["ful", ""],
  ["ism", ""],
  ["ify", ""],
  ["ise", ""],
  ["ize", ""],
  ["ate", ""],
  ["ity", ""],
  ["ive", ""],
  ["ous", ""],
  ["al", ""],
  ["er", ""],
];

/**
 * A small English stemmer built for this app's vocabulary (British and US
 * spellings). It groups the forms people actually type:
 * apologise / apologize / apology / apologies / apologising -> "apolog",
 * silence / silent / silently -> "silent", label / labelling / labelled ->
 * "label", validate / validation / validating -> "valid",
 * frustrated / frustration -> "frustr", clarify / clarity -> "clar".
 * It is deliberately conservative: a stem keeps at least three letters and a
 * vowel, and only one derivational ending is removed.
 */
export function stem(input: string): string {
  let cached = stemCache.get(input);
  if (cached === undefined) {
    cached = computeStem(input);
    // The vocabulary is a few thousand words; queries add a handful more.
    if (stemCache.size > 50_000) stemCache.clear();
    stemCache.set(input, cached);
  }
  return cached;
}

const stemCache = new Map<string, string>();

function computeStem(input: string): string {
  let word = input;
  if (word.length <= 3 || /\d/.test(word)) return word;

  // 1. Plurals and third person -s.
  if (word.endsWith("sses")) word = word.slice(0, -2);
  else if (word.endsWith("ies") && word.length > 4)
    word = `${word.slice(0, -3)}y`;
  else if (
    word.endsWith("s") &&
    !/(ss|us|is|ous)$/.test(word) &&
    word.length > 3
  )
    word = word.slice(0, -1);

  // 2. Inflections: -ingly, -edly, -ing, -ed, -ly.
  let inflected = false;
  for (const suffix of ["ingly", "edly", "ing", "ied", "ed", "ly"]) {
    if (!word.endsWith(suffix)) continue;
    const base = word.slice(0, -suffix.length);
    if (suffix === "ed" && base.endsWith("e")) {
      // "agreed" -> "agree", but keep short words such as "need" and "speed".
      if (word.length >= 6) word = word.slice(0, -1);
      break;
    }
    // "-ly" needs a longer base so "silly" and "early" stay whole.
    const minimum = suffix === "ly" ? 4 : 3;
    if (base.length < minimum || !hasVowel(base)) break;
    word = suffix === "ied" ? `${base}y` : base;
    inflected = suffix !== "ly" && suffix !== "ied";
    break;
  }
  if (inflected) {
    // Restore the silent e the inflection removed, so "validating" and
    // "validate" meet at the same derivational step below.
    if (/(at|is|iz|bl)$/.test(word)) word = `${word}e`;
    // "labelling" -> "label", "stopping" -> "stop" (but keep "call", "tell").
    else if (/([b-df-hj-np-tv-z])\1$/.test(word) && !/(ss|zz)$/.test(word)) {
      if (!word.endsWith("ll") || word.length >= 5) word = word.slice(0, -1);
    }
  }

  // 3. One derivational ending.
  for (const [suffix, replacement] of DERIVATIONAL) {
    if (!word.endsWith(suffix)) continue;
    const base = word.slice(0, -suffix.length);
    const minimum = suffix === "er" || suffix === "al" ? 4 : 3;
    if (base.length < minimum || !hasVowel(base)) continue;
    word = base + replacement;
    break;
  }

  // 4. A final silent e or y ("decline" -> "declin", "apology" -> "apolog").
  if (word.length >= 5 && /[ey]$/.test(word)) word = word.slice(0, -1);

  return word;
}

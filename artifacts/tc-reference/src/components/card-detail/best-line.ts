import { isSpeakablePhrase, type CardData } from "@/lib/card-types";

/**
 * A line from a card's weak/best ladder, split into what is said and the
 * commentary the card data carries alongside it.
 */
export interface SpokenLine {
  /** The line as shown, with any stage directions ("[pause]"). */
  text: string;
  /** The words alone, for copying: no quote marks, no stage directions. */
  say: string;
  /** Commentary that trailed the line ("Then listens and follows..."). */
  note?: string;
  /** The whole entry is an action, not words ("(Edging away mid-sentence)"). */
  action?: boolean;
}

const QUOTE = /["“”]/;
const QUOTED_SEGMENT = /["“]([^"“”]+)["”]/g;

function sentenceCase(text: string): string {
  const trimmed = text.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/**
 * Ladder rungs mix the words with commentary in a few shapes:
 *   "Weird how?" Then listens and follows their answer.
 *   "Oh cool. So what do you do?" (ignores what they just said)
 *   Let me take a second so I answer properly. [pause]
 * Split the commentary off so the words can stand, and be copied, alone.
 */
export function parseSpokenLine(raw: string): SpokenLine {
  let body = raw.trim();
  let note: string | undefined;

  const wholeAside = body.match(/^\(([^()]+)\)$/);
  if (wholeAside) {
    const text = sentenceCase(wholeAside[1]);
    return { text, say: text, action: true };
  }

  const aside = body.match(/^(.*\S)\s*\(([^()]+)\)$/s);
  if (aside) {
    body = aside[1];
    note = sentenceCase(aside[2]);
  } else if (/^["“]/.test(body)) {
    // Opens with a quoted line: anything after the last closing quote is
    // commentary about it.
    const lastQuote = Math.max(body.lastIndexOf('"'), body.lastIndexOf("”"));
    const trailing = body.slice(lastQuote + 1).trim();
    if (lastQuote > 0 && trailing) {
      note = sentenceCase(trailing);
      body = body.slice(0, lastQuote + 1);
    }
  }

  const segments = [...body.matchAll(QUOTED_SEGMENT)].map((m) => m[1].trim());
  const say = (segments.length > 0 ? segments.join(" ") : body)
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return { text: body, say, note };
}

/** Wrap a line in quote marks unless it already carries its own. */
export function displayLine(line: SpokenLine): string {
  return line.action || QUOTE.test(line.text) ? line.text : `"${line.text}"`;
}

// The hero contrast should be words you could actually say. A few cards'
// first ladder rung describes behaviour instead ("Uses the technique..."),
// so fall back to the "You:" lines from the card's own worked example.
function youLine(lines: string[] | undefined) {
  const line = lines?.find((l) => /^You:\s*/.test(l));
  return line?.replace(/^You:\s*/, "");
}

// Some ladder rungs describe behaviour ("Uses BLUF flexibly...", "One
// continuer, then stop and watch...") rather than words you could say. Judge
// each side alone and swap only those for the card's worked-example line.
const DESCRIBES_BEHAVIOUR =
  /^(Uses?|Using|Recites|Announces|Answering|Moves|Too broad|Someone)\b|\b(flexibly|visible script|the technique|then stop|and watch)\b/i;

/** The card's headline weak/best pair for "Hear the difference". */
export function cardContrast(cardData: CardData): {
  weak?: SpokenLine;
  best?: SpokenLine;
} {
  const rung = cardData.ladder?.[0];
  const pick = (line: string | undefined, fallback: string | undefined) => {
    const describes = !!line && DESCRIBES_BEHAVIOUR.test(line);
    const chosen = describes ? (fallback ?? line) : line;
    if (!chosen) return undefined;
    const parsed = parseSpokenLine(chosen);
    // No spoken line to swap in: show the description as one, unquoted.
    return describes && !fallback ? { ...parsed, action: true } : parsed;
  };
  return {
    weak: pick(rung?.weak, youLine(cardData.example?.without)),
    best: pick(rung?.best, youLine(cardData.example?.with)),
  };
}

/** Every phrase in the card's bank that is said out loud, in bank order. */
export function speakablePhrases(cardData: CardData): string[] {
  return cardData.phraseBank.flatMap((g) =>
    g.phrases.filter(isSpeakablePhrase),
  );
}

/**
 * The one line the dock's Copy button copies: the best rung of the headline
 * contrast, or the first phrase in the bank when a card has no sayable rung.
 */
export function bestLine(cardData: CardData): string {
  const best = cardContrast(cardData).best;
  if (best && !best.action && best.say) return best.say;
  return speakablePhrases(cardData)[0] ?? "";
}

// "They give a cue..." reads as "If they give a cue..." once the "If" is
// set in front of it. Conditions written as a question ("Is it still too
// large?") or that open with their own conjunction ("After a reflection...")
// already stand alone, so they are shown as written.
const STANDS_ALONE = /\?$|^(when|after|once|while|before|until)\b/i;

export function splitCondition(condition: string): {
  lead: boolean;
  text: string;
} {
  const trimmed = condition.trim().replace(/[.:]$/, "");
  if (/^if\b/i.test(trimmed))
    return { lead: true, text: trimmed.replace(/^if\s+/i, "") };
  if (STANDS_ALONE.test(trimmed)) return { lead: false, text: trimmed };
  // Keep "I" and acronyms; lower-case an ordinary sentence opener.
  return {
    lead: true,
    text: /^(I\b|[A-Z]{2,})/.test(trimmed)
      ? trimmed
      : trimmed.charAt(0).toLowerCase() + trimmed.slice(1),
  };
}

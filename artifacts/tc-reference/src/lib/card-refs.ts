// Card text cites other techniques by id, written either after the move's
// name ("Apologise (TC101)", "Switch to broken record (TC107)") or bare in a
// sentence ("TC033 Minimal encouragers uses tiny signals", "TC003, then
// TC001"). parseCardRefs splits such text into plain runs and references so
// the card can show each reference as a link that names the technique.

export type CardRefSegment =
  | { type: "text"; text: string }
  | {
      type: "ref";
      id: string;
      /** What to show: the words already in the sentence, or the title. */
      label: string;
      /**
       * True when the label is the sentence's own words (the name the
       * author wrote next to the id), so it reads as part of the line; false
       * when the title stands in for a bare or parenthesised id.
       */
      inline: boolean;
    };

const REF = /\((TC\d{3})\)|\b(TC\d{3})\b/g;
const WORD = /[\p{L}\p{N}]/u;

function isWordChar(ch: string | undefined): boolean {
  return ch !== undefined && WORD.test(ch);
}

function pushText(out: CardRefSegment[], text: string) {
  if (!text) return;
  const last = out[out.length - 1];
  if (last?.type === "text") last.text += text;
  else out.push({ type: "text", text });
}

/**
 * Split `text` into plain runs and card references.
 *
 * - "Name (TC101)": when the words before the id are the card's title, they
 *   become the link and the id is dropped; otherwise the id becomes a link
 *   labelled with the title.
 * - "TC033 Minimal encouragers": a bare id followed by its own title links
 *   the title and drops the id; a bare id alone becomes a titled link.
 * - Unknown ids stay exactly as written.
 * - A reference to `selfId` (the card being read) is not linked: the title
 *   stays as plain words and a parenthesised id is dropped.
 */
export function parseCardRefs(
  text: string,
  titles: Readonly<Record<string, string>>,
  selfId?: string,
): CardRefSegment[] {
  const out: CardRefSegment[] = [];
  let cursor = 0;
  for (const m of text.matchAll(REF)) {
    const start = m.index;
    const id = m[1] ?? m[2];
    const title = titles[id];
    if (!title) continue; // unknown: left in the surrounding text
    const before = text.slice(cursor, start);
    const self = id === selfId;
    let end = start + m[0].length;

    if (m[1]) {
      // "(TC101)": look for the title just before it
      const trimmed = before.replace(/\s+$/, "");
      const at = trimmed.length - title.length;
      const named =
        at >= 0 &&
        trimmed.slice(at).toLowerCase() === title.toLowerCase() &&
        !isWordChar(trimmed[at - 1]);
      if (named) {
        pushText(out, trimmed.slice(0, at));
        const label = trimmed.slice(at);
        if (self) pushText(out, label);
        else out.push({ type: "ref", id, label, inline: true });
      } else if (self) {
        // Drop "(TC003)" and the space before it
        pushText(out, trimmed);
      } else {
        pushText(out, before);
        out.push({ type: "ref", id, label: title, inline: false });
      }
    } else {
      // Bare "TC033", maybe followed by its title
      pushText(out, before);
      const after = text.slice(end);
      const lead = after.match(/^\s+/)?.[0] ?? "";
      const candidate = after.slice(lead.length, lead.length + title.length);
      const named =
        lead.length > 0 &&
        candidate.toLowerCase() === title.toLowerCase() &&
        !isWordChar(after[lead.length + title.length]);
      const label = named ? candidate : title;
      if (named) end += lead.length + title.length;
      if (self) pushText(out, label);
      else out.push({ type: "ref", id, label, inline: named });
    }
    cursor = end;
  }
  pushText(out, text.slice(cursor));
  return out;
}

/** True when `text` cites at least one known card. */
export function hasCardRefs(
  text: string,
  titles: Readonly<Record<string, string>>,
): boolean {
  for (const m of text.matchAll(REF)) {
    if (titles[m[1] ?? m[2]]) return true;
  }
  return false;
}

// ── Worked-example renderer ───────────────────────────────────────────────
// Example arrays mix dialogue ("Them: …", "You (better): …", "A: …") with
// optional "Why it works:" notes and short section headings such as
// "Advanced version:". Notes render as a sub-heading plus a bulleted list;
// a note written inline ("Why it works: the pause buys time.") becomes a
// one-item list. Dialogue after a note starts a fresh dialogue block, so
// a second worked example is never swallowed into the previous note list.
const NOTE_LABEL = /^(why\b[^:]{0,60}):\s*(.*)$/i;
// "You: …", "A: …", "Alex (manager): …" — a short label before a colon
const SPEAKER = /^([A-Z][A-Za-z]{0,13}(?: \([^)]{1,40}\))?):\s+/;
// "Advanced version:", "Or, more warmly:" — a short line that introduces
// the next block of dialogue
const HEADING = /^[A-Z][^:"]{0,50}:$/;

type Block =
  | { kind: "line"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "notes"; label: string; items: string[] };

export function toBlocks(lines: string[]): Block[] {
  const blocks: Block[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    const note = trimmed.match(NOTE_LABEL);
    const last = blocks[blocks.length - 1];
    if (note) {
      blocks.push({
        kind: "notes",
        label: note[1],
        items: note[2] ? [note[2]] : [],
      });
    } else if (HEADING.test(trimmed)) {
      blocks.push({ kind: "heading", text: trimmed.replace(/:$/, "") });
    } else if (last?.kind === "notes" && !SPEAKER.test(trimmed)) {
      last.items.push(trimmed);
    } else {
      blocks.push({ kind: "line", text: line });
    }
  }
  return blocks;
}

export function ExampleLines({
  lines,
  color,
}: {
  lines: string[];
  color: string;
}) {
  return (
    <>
      {toBlocks(lines).map((block, i) => {
        if (block.kind === "heading") {
          return (
            <p
              key={i}
              className="pt-2 text-[12px] font-semibold text-foreground/70"
            >
              {block.text}
            </p>
          );
        }
        if (block.kind === "notes") {
          return (
            <div key={i} className="pt-2">
              <p className="text-[12px] font-semibold text-foreground/70 mb-1">
                {block.label}
              </p>
              {block.items.length > 0 && (
                <ul className="list-disc pl-5 space-y-1">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-[13px] leading-relaxed"
                      style={{ color }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }
        const m = block.text.match(SPEAKER);
        return (
          <p key={i} className="text-[14px] leading-relaxed" style={{ color }}>
            {m ? (
              <>
                <span className="font-semibold text-foreground/85">
                  {m[1]}:
                </span>{" "}
                {block.text.slice(m[0].length)}
              </>
            ) : (
              block.text
            )}
          </p>
        );
      })}
    </>
  );
}

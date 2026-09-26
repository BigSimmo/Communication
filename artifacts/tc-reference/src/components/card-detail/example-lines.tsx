// ── Worked-example renderer ───────────────────────────────────────────────
// Example arrays mix dialogue ("Them: …", "You: …") with an optional
// "Why it falls flat:" / "Why this works:" label followed by short reasons.
// Render the label as a sub-heading and the reasons as a bulleted list so
// they read as notes rather than loose fragments.
const EXAMPLE_LABEL = /^why\b.*:$/i;
// "You: …", "Person: …", "Alex: …" — a short capitalised label before a colon
const SPEAKER = /^([A-Z][a-z]{1,13}):\s+/;

export function ExampleLines({
  lines,
  color,
}: {
  lines: string[];
  color: string;
}) {
  // Split into a leading dialogue block plus zero or more labelled note lists.
  const dialogue: string[] = [];
  const notes: { label: string; items: string[] }[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (EXAMPLE_LABEL.test(trimmed)) {
      notes.push({ label: trimmed.replace(/:$/, ""), items: [] });
    } else if (notes.length > 0) {
      notes[notes.length - 1].items.push(trimmed);
    } else {
      dialogue.push(line);
    }
  }
  return (
    <>
      {dialogue.map((line, i) => {
        const m = line.match(SPEAKER);
        return (
          <p key={i} className="text-[14px] leading-relaxed" style={{ color }}>
            {m ? (
              <>
                <span className="font-semibold text-foreground/85">
                  {m[1]}:
                </span>{" "}
                {line.slice(m[0].length)}
              </>
            ) : (
              line
            )}
          </p>
        );
      })}
      {notes.map((note, n) => (
        <div key={n} className="pt-2">
          <p className="text-[12px] font-semibold text-foreground/70 mb-1">
            {note.label}
          </p>
          {note.items.length > 0 && (
            <ul className="list-disc pl-5 space-y-1">
              {note.items.map((item, i) => (
                <li
                  key={i}
                  className="text-[13px] leading-relaxed"
                  style={{ color }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}

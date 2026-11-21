import { Fragment } from "react";
import { Link } from "wouter";
import { parseCardRefs } from "@/lib/card-refs";
import { CARD_TITLE_MAP } from "./card-sections";

/**
 * Card text with its technique references ("Apologise (TC101)") shown as
 * links that name the technique. The author's own words become the link
 * when they already name the card; a bare id is replaced by a small chip
 * carrying the title. Unknown ids stay as written.
 *
 * `interactive={false}` is for text inside a control (a row that is itself
 * a button): references read as their titles but are not links, since a
 * link cannot sit inside a button.
 */
export function CardRefText({
  text,
  selfId,
  interactive = true,
  quiet = false,
}: {
  text: string;
  /** The card being read; references to it are not linked. */
  selfId?: string;
  interactive?: boolean;
  /** Underlined links only, no chips: for small meta lines. */
  quiet?: boolean;
}) {
  const segments = parseCardRefs(text, CARD_TITLE_MAP, selfId);
  if (segments.length === 1 && segments[0].type === "text") {
    return <>{segments[0].text}</>;
  }
  return (
    <>
      {segments.map((s, i) => {
        if (s.type === "text") return <Fragment key={i}>{s.text}</Fragment>;
        if (!interactive) {
          return (
            <span
              key={i}
              className="font-semibold"
              style={{ color: "var(--fg-80)" }}
            >
              {s.label}
            </span>
          );
        }
        const chip = !s.inline && !quiet;
        return (
          <Link
            key={i}
            href={`/card/${s.id}`}
            onClick={() => window.scrollTo(0, 0)}
            data-testid="card-ref"
            data-card-ref={s.id}
            className={chip ? "card-ref card-ref-chip" : "card-ref"}
          >
            {/* Non-breaking hyphens keep "Live thread follow-ups" whole */}
            {s.label.replace(/-/g, "\u2011")}
          </Link>
        );
      })}
    </>
  );
}

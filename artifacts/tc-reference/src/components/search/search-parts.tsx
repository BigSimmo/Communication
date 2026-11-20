import type { CSSProperties, ReactNode } from "react";
import { highlightMatch } from "@/lib/search-index";
import { categoryStyleFor } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

/** Small uppercase label above a group. */
export function Eyebrow({
  children,
  accent = false,
  as: Tag = "p",
  id,
}: {
  children: ReactNode;
  accent?: boolean;
  as?: "p" | "h2";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className="text-[12px] font-bold uppercase tracking-[0.06em]"
      style={{ color: accent ? "var(--brand-text)" : "var(--fg-60)" }}
    >
      {children}
    </Tag>
  );
}

const SURFACE: CSSProperties = {
  background: "var(--surface-card)",
  border: "1px solid var(--fg-08)",
  boxShadow: "var(--shadow-card)",
};

const FEATURE: CSSProperties = {
  background:
    "linear-gradient(160deg, var(--fg-06), transparent 70%), var(--surface-card)",
  border: "1px solid var(--fg-15)",
  boxShadow: "var(--shadow-card)",
};

/** Rounded surface that holds a list of rows or one featured result. */
export function Surface({
  children,
  feature = false,
  className,
  testId,
}: {
  children: ReactNode;
  feature?: boolean;
  className?: string;
  testId?: string;
}) {
  return (
    <div
      data-testid={testId}
      className={cn("rounded-[20px] overflow-hidden", className)}
      style={feature ? FEATURE : SURFACE}
    >
      {children}
    </div>
  );
}

/** Rows inside a Surface, separated by hairlines. */
export function RowList({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <ul
      aria-label={label}
      className="divide-y"
      style={{ borderColor: "var(--fg-08)" }}
    >
      {children}
    </ul>
  );
}

export function CategoryDot({
  category,
  small = false,
}: {
  category: string;
  small?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "rounded-full flex-none",
        small ? "w-1.5 h-1.5" : "w-2 h-2",
      )}
      style={{ background: categoryStyleFor(category).color }}
    />
  );
}

const WORD_CHARACTER = /[\p{L}\p{N}]/u;

/**
 * `text` split into marked and plain parts. Search matches the beginnings of
 * words, so only a match that starts a word is marked: "me" marks "me" and
 * "meeting", not the middle of "name".
 */
export function wordStartMatches(
  text: string,
  query: string,
  correctedQuery?: string | null,
): Array<{ text: string; highlight: boolean }> {
  let offset = 0;
  return highlightMatch(text, query, correctedQuery).map((part) => {
    const before = offset > 0 ? text[offset - 1] : "";
    offset += part.text.length;
    return {
      text: part.text,
      highlight: part.highlight && !WORD_CHARACTER.test(before),
    };
  });
}

/** Text with the searched words picked out. */
export function Highlighted({
  text,
  query,
  correctedQuery,
}: {
  text: string;
  query: string;
  correctedQuery?: string | null;
}) {
  return (
    <>
      {wordStartMatches(text, query, correctedQuery).map((part, i) =>
        part.highlight ? (
          <mark
            key={i}
            className="rounded-[4px] px-[2px] font-semibold"
            style={{
              background: "color-mix(in srgb, var(--brand) 24%, transparent)",
              color: "var(--brand-text)",
            }}
          >
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}

/** A pill that runs a search or picks a filter: 38px tall, wraps in a row. */
export function PillButton({
  children,
  onClick,
  testId,
}: {
  children: ReactNode;
  onClick: () => void;
  testId?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testId}
      className="tap-target-y inline-flex items-center gap-[7px] h-[38px] px-3.5 rounded-full text-[14px] font-semibold whitespace-nowrap transition-transform active:scale-[0.97] motion-reduce:transition-none"
      style={{ background: "var(--fg-08)", color: "var(--fg-80)" }}
    >
      {children}
    </button>
  );
}

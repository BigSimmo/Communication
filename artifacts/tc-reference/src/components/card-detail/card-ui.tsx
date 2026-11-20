import { createContext, useContext, useId, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Check, ChevronDown, Copy, Heart } from "lucide-react";
import { useFavourites } from "@/lib/favourites-context";
import { cn } from "@/lib/utils";
import { CARD_TITLE_MAP, type CardSection } from "./card-sections";

// ── Copy feedback ─────────────────────────────────────────────────────────
// One copy state for the whole card, so the dock, the phrase rows and the
// sheet all agree on which line was just copied.
interface CardCopy {
  copied: string | null;
  copy: (text: string) => void;
}
const CardCopyContext = createContext<CardCopy>({
  copied: null,
  copy: () => {},
});
export const CardCopyProvider = CardCopyContext.Provider;
export function useCardCopy(): CardCopy {
  return useContext(CardCopyContext);
}

// ── Type ──────────────────────────────────────────────────────────────────
export const EYEBROW = "text-[12px] font-bold uppercase tracking-[0.06em]";

/** Words to say: a touch larger than body copy, never truncated. */
export function Phrase({
  children,
  size = "md",
  muted = false,
  className,
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  muted?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block min-w-0 break-words",
        size === "lg"
          ? "text-[21px] leading-[1.3] font-semibold tracking-[-0.01em]"
          : size === "sm"
            ? "text-[15px] leading-[1.4]"
            : "text-[17px] leading-[1.35]",
        className,
      )}
      style={{ color: muted ? "var(--fg-70)" : "var(--fg-90)" }}
    >
      {children}
    </span>
  );
}

/** Small capital label, usually coloured: "Weak", "Best", "Recovery line". */
export function Label({
  children,
  color = "var(--fg-60)",
  className,
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.04em]",
        className,
      )}
      style={{ color }}
    >
      {children}
    </span>
  );
}

export function Meta({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn("block text-[13px] leading-[1.4]", className)}
      style={{ color: "var(--fg-60)" }}
    >
      {children}
    </span>
  );
}

// ── Layout ────────────────────────────────────────────────────────────────
/**
 * One titled block inside a tab. Blocks that map to a section of the old
 * card page carry its id, so `#section-method` style links still land.
 */
export function CardBlock({
  id,
  title,
  meta,
  action,
  children,
}: {
  id?: CardSection;
  title: string;
  /** Quiet text on the right of the title, e.g. "6 steps". */
  meta?: ReactNode;
  /** A control on the right of the title, e.g. "All 43 phrases". */
  action?: ReactNode;
  children: ReactNode;
}) {
  const autoId = useId();
  const titleId = id ? `section-${id}-title` : autoId;
  return (
    <section
      id={id ? `section-${id}` : undefined}
      aria-labelledby={titleId}
      className="flex flex-col gap-2 min-w-0"
      style={{
        scrollMarginTop:
          "calc(var(--app-header-height, 48px) + var(--card-nav-height, 56px) + 12px)",
      }}
    >
      <div className="flex items-center justify-between gap-3 min-h-6">
        <h3
          id={titleId}
          className={cn(EYEBROW, "m-0")}
          style={{ color: "var(--fg-60)" }}
        >
          {title}
        </h3>
        {action ??
          (meta !== undefined && (
            <span
              className="text-[13px] flex-none"
              style={{ color: "var(--fg-60)" }}
            >
              {meta}
            </span>
          ))}
      </div>
      {children}
    </section>
  );
}

/** The card surface rows and text sit on. `divided` rules between children. */
export function Surface({
  children,
  divided = false,
  feature = false,
  className,
  style,
  ...rest
}: {
  children: ReactNode;
  divided?: boolean;
  /** Raised look for the one block a tab leads with. */
  feature?: boolean;
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[20px] overflow-hidden min-w-0",
        divided && "[&>*+*]:border-t [&>*+*]:border-[var(--fg-07)]",
        className,
      )}
      style={{
        background: feature
          ? "var(--surface-card-hover)"
          : "var(--surface-card)",
        border: `1px solid ${feature ? "var(--fg-15)" : "var(--fg-08)"}`,
        boxShadow: "var(--shadow-card)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Inset box for a line of dialogue or a short callout. */
export function SayBlock({
  children,
  outlined = false,
  className,
  ...rest
}: {
  children: ReactNode;
  outlined?: boolean;
  className?: string;
  "data-testid"?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[14px] px-3.5 py-3 flex flex-col gap-1.5 min-w-0",
        className,
      )}
      style={{
        background: "var(--fg-06)",
        border: outlined ? "1px solid var(--fg-15)" : "1px solid transparent",
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Numbered disc for steps and days. */
export function NumberDisc({
  children,
  active = false,
  small = false,
}: {
  children: ReactNode;
  active?: boolean;
  small?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex-none rounded-full flex items-center justify-center font-bold tabular-nums",
        small ? "w-6 h-6 text-[12px]" : "w-7 h-7 text-[14px]",
      )}
      style={
        active
          ? { background: "var(--brand)", color: "var(--brand-contrast)" }
          : { background: "var(--fg-10)", color: "var(--fg-85)" }
      }
    >
      {children}
    </span>
  );
}

/** Plain bullet list inside a surface: leading mark plus wrapped text. */
export function MarkedList({
  items,
  mark,
}: {
  items: string[];
  mark: ReactNode;
}) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 px-4 py-2.5 min-h-[46px]"
        >
          <span className="flex-none mt-[3px]" aria-hidden="true">
            {mark}
          </span>
          <span
            className="flex-1 min-w-0 text-[15px] leading-[1.45]"
            style={{ color: "var(--fg-85)" }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// ── Controls ──────────────────────────────────────────────────────────────
/** Icon button that copies a line and shows a tick while it is fresh. */
export function CopyButton({
  text,
  testId,
}: {
  text: string;
  testId?: string;
}) {
  const { copied, copy } = useCardCopy();
  const done = copied === text;
  return (
    <button
      type="button"
      onClick={() => copy(text)}
      aria-label={`Copy: ${text}`}
      data-testid={testId}
      className="tap-target w-9 h-9 flex-none flex items-center justify-center rounded-full transition-transform active:scale-95 motion-reduce:transition-none"
      style={{ color: done ? "var(--brand-text)" : "var(--fg-55)" }}
    >
      {done ? (
        <Check className="w-[18px] h-[18px]" aria-hidden="true" />
      ) : (
        <Copy className="w-[18px] h-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}

/** Heart button that saves a phrase to Saved, keyed by card and text. */
export function SavePhraseButton({
  cardId,
  groupLabel,
  text,
  testId,
}: {
  cardId: string;
  groupLabel: string;
  text: string;
  testId?: string;
}) {
  const { isPhrasesFav, togglePhrase } = useFavourites();
  const saved = isPhrasesFav(cardId, text);
  return (
    <button
      type="button"
      onClick={() =>
        togglePhrase({
          cardId,
          cardTitle: CARD_TITLE_MAP[cardId] ?? cardId,
          groupLabel,
          text,
        })
      }
      aria-label={saved ? "Remove from favourites" : "Save to favourites"}
      aria-pressed={saved}
      data-testid={testId}
      className="tap-target w-9 h-9 flex-none flex items-center justify-center rounded-full transition-transform active:scale-95 motion-reduce:transition-none"
      style={{ color: saved ? "var(--brand-text)" : "var(--fg-55)" }}
    >
      <Heart
        className="w-[18px] h-[18px]"
        fill={saved ? "currentColor" : "none"}
        aria-hidden="true"
      />
    </button>
  );
}

/** A whole row that copies its line when tapped. */
export function CopyRow({
  text,
  above,
  size = "md",
  testId,
}: {
  text: string;
  /** Quiet line above the phrase, e.g. the situation it suits. */
  above?: ReactNode;
  size?: "sm" | "md";
  testId?: string;
}) {
  const { copied, copy } = useCardCopy();
  const done = copied === text;
  return (
    <button
      type="button"
      onClick={() => copy(text)}
      aria-label={`Copy: ${text}`}
      data-testid={testId}
      className="w-full flex items-center gap-3 px-4 py-[13px] min-h-14 text-left transition-colors active:bg-[var(--fg-05)]"
      style={{
        background: done
          ? "color-mix(in srgb, var(--brand) 8%, transparent)"
          : undefined,
      }}
    >
      <span className="flex-1 min-w-0 flex flex-col gap-0.5">
        {above}
        <Phrase size={size}>{text}</Phrase>
      </span>
      <span
        className="flex-none"
        style={{ color: done ? "var(--brand-text)" : "var(--fg-55)" }}
        aria-hidden="true"
      >
        {done ? (
          <Check className="w-[18px] h-[18px]" />
        ) : (
          <Copy className="w-[18px] h-[18px]" />
        )}
      </span>
    </button>
  );
}

/** A line with separate save and copy buttons beside it. */
export function PhraseRow({
  cardId,
  groupLabel,
  text,
  above,
  size = "md",
  copyTestId,
  saveTestId,
}: {
  cardId: string;
  groupLabel: string;
  text: string;
  above?: ReactNode;
  size?: "sm" | "md";
  copyTestId?: string;
  saveTestId?: string;
}) {
  const { copied } = useCardCopy();
  return (
    <div
      className="flex items-center gap-1 pl-4 pr-2 py-2.5 min-h-14"
      style={{
        background:
          copied === text
            ? "color-mix(in srgb, var(--brand) 8%, transparent)"
            : undefined,
      }}
    >
      <span className="flex-1 min-w-0 flex flex-col gap-0.5 pr-2">
        {above}
        <Phrase size={size}>{text}</Phrase>
      </span>
      <SavePhraseButton
        cardId={cardId}
        groupLabel={groupLabel}
        text={text}
        testId={saveTestId}
      />
      <CopyButton text={text} testId={copyTestId} />
    </div>
  );
}

/** Quiet "show more" control that reveals extra content in place. */
export function Disclosure({
  label,
  openLabel,
  children,
  testId,
}: {
  label: string;
  /** Label while open; defaults to `label`. */
  openLabel?: string;
  children: ReactNode;
  testId?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <div className="flex flex-col gap-2 min-w-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        data-testid={testId}
        className="self-start -ml-2 px-2 min-h-11 inline-flex items-center gap-1.5 rounded-lg text-[14px] font-semibold transition-colors hover:bg-[var(--fg-05)] active:bg-[var(--fg-05)]"
        style={{ color: "var(--brand-text)" }}
      >
        {open ? (openLabel ?? label) : label}
        <ChevronDown
          className="w-4 h-4 transition-transform duration-200 motion-reduce:transition-none"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
          aria-hidden="true"
        />
      </button>
      {/* Stays mounted so aria-controls always resolves */}
      <div
        id={panelId}
        hidden={!open}
        className={open ? "flex flex-col gap-2 min-w-0" : undefined}
      >
        {open && children}
      </div>
    </div>
  );
}

/**
 * Rows that open one at a time to show more: method steps, common mistakes.
 * Each header is a real button inside a heading-less list item.
 */
export function ExpandingRows<T>({
  items,
  getKey,
  renderHeader,
  renderBody,
  defaultOpen = 0,
  label,
  ordered = false,
  testId,
}: {
  items: T[];
  getKey: (item: T, index: number) => string;
  renderHeader: (item: T, index: number, open: boolean) => ReactNode;
  renderBody: (item: T, index: number) => ReactNode;
  /** Index open at first; -1 for none. */
  defaultOpen?: number;
  label: string;
  ordered?: boolean;
  testId?: string;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);
  const baseId = useId();
  const List = ordered ? "ol" : "ul";
  return (
    <List
      aria-label={label}
      data-testid={testId}
      className="flex flex-col [&>*+*]:border-t [&>*+*]:border-[var(--fg-07)]"
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={getKey(item, i)}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={`${baseId}-${i}`}
              className="w-full flex items-center gap-3 px-4 py-3 min-h-14 text-left transition-colors active:bg-[var(--fg-05)]"
            >
              {renderHeader(item, i, isOpen)}
              <ChevronDown
                className="w-[18px] h-[18px] flex-none transition-transform duration-200 motion-reduce:transition-none"
                style={{
                  color: "var(--fg-55)",
                  transform: isOpen ? "rotate(180deg)" : "none",
                }}
                aria-hidden="true"
              />
            </button>
            <div id={`${baseId}-${i}`} hidden={!isOpen}>
              {isOpen && (
                <div className="px-4 pb-4 flex flex-col gap-2.5">
                  {renderBody(item, i)}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </List>
  );
}

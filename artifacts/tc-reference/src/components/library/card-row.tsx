import { Link } from "wouter";
import {
  BookOpen,
  Compass,
  Heart,
  HeartHandshake,
  LifeBuoy,
  Mic,
  Target,
} from "lucide-react";
import { CORE_CARD_SET, LIBRARY_CATEGORIES } from "@/lib/data";
import { IMPACT_STYLES, categoryStyleFor } from "@/lib/design-tokens";

export type LibraryCardMeta = (typeof LIBRARY_CATEGORIES)[string][number];

// One glyph per category gives the list a visual rhythm without repeating
// the TC code, which already sits in each row's meta line.
const CATEGORY_ICON: Record<string, typeof BookOpen> = {
  "Voice / Presence": Mic,
  "Influence / Framing": Compass,
  "Clarity / Direction": Target,
  "Connection / Warmth": HeartHandshake,
  "Resilience / Recovery": LifeBuoy,
};

interface LibraryCardRowProps {
  card: LibraryCardMeta;
  category: string;
  /** Name the category in the meta line (flat, sorted lists). */
  showCategory?: boolean;
  fav: boolean;
  onToggleFav: (cardId: string) => void;
  onOpen: (e: React.MouseEvent<HTMLElement>) => void;
  /** Render fully (no content-visibility) while scroll is being restored. */
  restoring: boolean;
}

/**
 * One technique in the Library list: category colour tile, title, the
 * one-line summary of what to do, and quiet meta. The favourite button is a
 * sibling of the link, never nested inside it.
 */
export function LibraryCardRow({
  card,
  category,
  showCategory = false,
  fav,
  onToggleFav,
  onOpen,
  restoring,
}: LibraryCardRowProps) {
  const badge = IMPACT_STYLES[card.impact];
  const CategoryIcon = CATEGORY_ICON[category] ?? BookOpen;
  const cat = categoryStyleFor(category);
  return (
    <li className="relative max-w-full min-w-0">
      <Link
        href={`/card/${card.id}`}
        data-testid={`card-link-${card.id}`}
        data-library-card={card.id}
        onClick={onOpen}
        className="w-full max-w-full min-w-0 flex items-center gap-3 pl-3 pr-14 py-3 rounded-2xl transition-colors duration-150 text-left overflow-hidden bg-[var(--surface-card)] hover:bg-[var(--surface-card-hover)] active:bg-[var(--surface-card-hover)]"
        style={{
          border: "1px solid var(--fg-07)",
          boxShadow: "var(--shadow-card)",
          minHeight: 64,
          contentVisibility: restoring ? undefined : "auto",
          // Content box of a row with a two line summary
          containIntrinsicSize: "auto 82px",
        }}
      >
        <span
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 self-start mt-0.5"
          style={{
            background: `color-mix(in srgb, ${cat.color} 14%, transparent)`,
            color: cat.color,
          }}
          aria-hidden="true"
        >
          <CategoryIcon className="w-[18px] h-[18px]" />
        </span>
        <span className="flex-1 min-w-0">
          <span
            className="block text-[15px] font-semibold leading-snug line-clamp-2"
            style={{ color: "var(--fg-90)" }}
          >
            {card.title}
            {CORE_CARD_SET.has(card.id) && (
              <span
                className="ml-1.5 inline-block align-middle rounded-full px-1.5 py-px text-[10.5px] font-semibold leading-4"
                style={{
                  background:
                    "color-mix(in srgb, var(--brand) 14%, transparent)",
                  color: "var(--brand-text)",
                }}
                data-testid={`core-badge-${card.id}`}
              >
                Start here
              </span>
            )}
          </span>
          <span
            className="mt-0.5 block text-[13px] leading-[1.4] line-clamp-2"
            style={{ color: "var(--fg-70)" }}
            data-testid={`card-summary-${card.id}`}
          >
            {card.summary}
          </span>
          <span
            className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px]"
            style={{ color: "var(--fg-55)" }}
          >
            <span
              className="font-medium tabular-nums"
              style={{ color: "var(--fg-55)" }}
            >
              {card.id}
            </span>
            {showCategory && (
              <>
                <span aria-hidden="true">·</span>
                <span>{cat.short}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{card.difficulty}</span>
            <span
              className="ml-0.5 text-[11px] font-semibold px-1.5 py-px rounded-md"
              style={{ background: badge.bg, color: badge.color }}
            >
              {badge.label}
              {/* The visible text is the accessible name (WCAG 2.5.3
                  label-in-name); this just says what the badge means. */}
              <span className="sr-only"> impact</span>
            </span>
          </span>
        </span>
      </Link>
      <button
        type="button"
        onClick={() => onToggleFav(card.id)}
        aria-label={`Favourite ${card.title}`}
        aria-pressed={fav}
        className="library-card-favourite absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-90"
        style={{
          background: fav
            ? "color-mix(in srgb, var(--brand) 14%, transparent)"
            : "transparent",
        }}
      >
        <Heart
          className="w-4 h-4"
          style={{ color: fav ? "var(--brand-text)" : "var(--fg-45)" }}
          fill={fav ? "var(--brand-text)" : "none"}
          aria-hidden="true"
        />
      </button>
    </li>
  );
}

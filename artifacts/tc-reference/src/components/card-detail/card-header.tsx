import type { CardData } from "@/lib/card-types";
import { categoryStyleFor, impactStyleFor } from "@/lib/design-tokens";
import { CARD_CATEGORY_MAP, CARD_TITLE_MAP } from "./card-sections";

/** "Easy-Medium" in the data reads as "Easy to medium" on the card. */
function difficultyLabel(difficulty: string): string {
  const [first, ...rest] = difficulty.split("-");
  return rest.length > 0
    ? `${first} to ${rest.join(" to ").toLowerCase()}`
    : first;
}

function Tag({
  children,
  color,
  background,
}: {
  children: React.ReactNode;
  color?: string;
  background?: string;
}) {
  return (
    <span
      className="inline-flex items-center text-[12px] font-bold leading-none px-2 py-[5px] rounded-lg whitespace-nowrap"
      style={{
        background: background ?? "var(--fg-08)",
        color: color ?? "var(--fg-75)",
      }}
    >
      {children}
    </span>
  );
}

/**
 * Top of the card. On Use it this is the whole brief: category, title, the
 * move in one sentence, and how hard and how useful it is. On the other two
 * tabs it shrinks to the title so the tab's own content starts higher.
 *
 * The app header carries the page h1 (the same title), so this is an h2.
 */
export function CardHeader({
  cardId,
  cardData,
  compact = false,
}: {
  cardId: string;
  cardData: CardData;
  compact?: boolean;
}) {
  const title = CARD_TITLE_MAP[cardId] ?? cardId;
  if (compact) {
    return (
      <div className="px-4 pt-3">
        <h2
          className="text-[22px] font-bold leading-[1.2] tracking-[-0.01em]"
          style={{ color: "var(--fg-90)" }}
          data-testid="card-brief-title"
        >
          {title}
        </h2>
      </div>
    );
  }

  const categoryName = CARD_CATEGORY_MAP[cardId];
  const category = categoryName ? categoryStyleFor(categoryName) : null;
  const impact = cardData.overview.impact;
  const impactStyle = impact ? impactStyleFor(impact) : null;
  return (
    <div className="px-4 pt-3 flex flex-col gap-2" data-testid="card-brief">
      <p
        className="flex items-center gap-1.5 text-[13px] font-semibold leading-none"
        style={{ color: category?.color ?? "var(--fg-60)" }}
      >
        <span
          className="w-2 h-2 rounded-full flex-none"
          style={{ background: "currentColor" }}
          aria-hidden="true"
        />
        <span data-testid="card-brief-category">
          {category?.label ?? "Technique"}
        </span>
      </p>
      <h2
        className="text-[28px] font-extrabold leading-[1.1] tracking-[-0.02em]"
        style={{ color: "var(--fg-90)" }}
        data-testid="card-brief-title"
      >
        {title}
      </h2>
      <p
        className="text-[16px] leading-[1.45]"
        style={{ color: "var(--fg-85)" }}
        data-testid="card-brief-move"
      >
        {cardData.overview.minimumViableMove}
      </p>
      <div className="flex flex-wrap items-center gap-1.5">
        <Tag>{difficultyLabel(cardData.overview.difficulty)}</Tag>
        {impact && impactStyle && (
          <Tag color={impactStyle.color} background={impactStyle.bg}>
            {impact} impact
          </Tag>
        )}
        <Tag>{cardId}</Tag>
      </div>
    </div>
  );
}

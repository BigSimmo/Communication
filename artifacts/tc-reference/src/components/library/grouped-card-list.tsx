import type { ReactNode } from "react";
import { groupCategoryCards } from "@/lib/category-groups";

const LIST_CLASS = "grid gap-2 lg:grid-cols-2";

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/**
 * One category's rows. Large categories split into their named groups
 * ("Draw them out", "Repair after a misstep"), each a short run under its
 * own heading; small categories and the flat sorted list stay one run.
 */
export function GroupedCardList<T extends { id: string }>({
  category,
  cards,
  renderCard,
}: {
  /** null for the flat, cross-category list. */
  category: string | null;
  cards: T[];
  renderCard: (card: T) => ReactNode;
}) {
  const groups = category
    ? groupCategoryCards(category, cards)
    : [{ name: null, cards }];
  if (groups.length === 1 && groups[0].name === null) {
    return <ul className={LIST_CLASS}>{cards.map(renderCard)}</ul>;
  }
  return (
    <div className="flex flex-col gap-5">
      {groups.map((group) => (
        <div
          key={group.name}
          data-testid={`library-group-${slug(group.name ?? "")}`}
        >
          <h3
            className="flex items-baseline gap-2 px-1 mb-2 text-[14px] font-semibold leading-tight"
            style={{ color: "var(--fg-85)" }}
          >
            <span className="flex-1 min-w-0">{group.name}</span>
            <span
              className="text-[12px] font-medium"
              style={{ color: "var(--fg-55)" }}
            >
              {group.cards.length}
              <span className="sr-only">
                {group.cards.length === 1 ? " technique" : " techniques"}
              </span>
            </span>
          </h3>
          <ul className={LIST_CLASS}>{group.cards.map(renderCard)}</ul>
        </div>
      ))}
    </div>
  );
}

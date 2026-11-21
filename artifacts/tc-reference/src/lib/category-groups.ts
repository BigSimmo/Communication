// Subgroups for the Library's large categories, so a 54-card list reads as a
// handful of short runs named by what the reader wants to do. Light metadata
// only (ids), like ./data: the Library imports it on first paint.
//
// Every card in a grouped category sits in exactly one group (checked in
// content-invariants). Categories small enough to scan at a glance are not
// grouped.

export interface CategoryGroup {
  /** Short, verb-first: what the reader is trying to do. */
  name: string;
  ids: readonly string[];
}

export const CATEGORY_GROUPS: Readonly<
  Record<string, readonly CategoryGroup[]>
> = {
  "Connection / Warmth": [
    {
      name: "Open and build rapport",
      ids: [
        "TC010",
        "TC024",
        "TC036",
        "TC032",
        "TC039",
        "TC054",
        "TC057",
        "TC063",
        "TC067",
        "TC072",
        "TC108",
      ],
    },
    {
      name: "Draw them out",
      ids: [
        "TC001",
        "TC003",
        "TC012",
        "TC023",
        "TC025",
        "TC030",
        "TC033",
        "TC087",
        "TC093",
        "TC100",
      ],
    },
    {
      name: "Reflect and check",
      ids: [
        "TC004",
        "TC006",
        "TC037",
        "TC040",
        "TC058",
        "TC060",
        "TC061",
        "TC064",
        "TC084",
        "TC109",
      ],
    },
    {
      name: "Support before solving",
      ids: [
        "TC002",
        "TC005",
        "TC007",
        "TC009",
        "TC015",
        "TC070",
        "TC090",
        "TC098",
        "TC104",
      ],
    },
    {
      name: "Appreciate and turn toward",
      ids: ["TC016", "TC018", "TC022", "TC075", "TC082", "TC096"],
    },
    {
      name: "Steer and return to threads",
      ids: [
        "TC038",
        "TC041",
        "TC056",
        "TC059",
        "TC062",
        "TC065",
        "TC071",
        "TC078",
      ],
    },
  ],
  "Clarity / Direction": [
    {
      name: "Make a clear ask",
      ids: ["TC013", "TC019", "TC020", "TC068", "TC094"],
    },
    {
      name: "Structure your point",
      ids: [
        "TC042",
        "TC044",
        "TC047",
        "TC048",
        "TC049",
        "TC050",
        "TC066",
        "TC088",
      ],
    },
    {
      name: "Guide the conversation",
      ids: [
        "TC011",
        "TC014",
        "TC034",
        "TC043",
        "TC045",
        "TC046",
        "TC051",
        "TC080",
        "TC086",
      ],
    },
    {
      name: "Raise a problem or say no",
      ids: ["TC052", "TC053", "TC074", "TC081", "TC095", "TC102"],
    },
  ],
  "Resilience / Recovery": [
    {
      name: "Handle pushback",
      ids: [
        "TC069",
        "TC073",
        "TC077",
        "TC079",
        "TC083",
        "TC089",
        "TC092",
        "TC107",
      ],
    },
    {
      name: "Repair after a misstep",
      ids: ["TC101", "TC103", "TC105"],
    },
    {
      name: "Avoid common traps",
      ids: ["TC008", "TC076", "TC085", "TC091", "TC099"],
    },
  ],
};

export interface GroupedCards<T> {
  /** null for a category without groups: one plain run. */
  name: string | null;
  cards: T[];
}

/**
 * Split a category's (already filtered and sorted) cards into its groups,
 * in group order, keeping the incoming order within each group and leaving
 * out groups with nothing to show. A card missing from the groups lands in
 * a final "More" run rather than disappearing.
 */
export function groupCategoryCards<T extends { id: string }>(
  category: string,
  cards: readonly T[],
): GroupedCards<T>[] {
  const groups = CATEGORY_GROUPS[category];
  if (!groups) return [{ name: null, cards: [...cards] }];
  const groupOf = new Map<string, number>();
  groups.forEach((g, i) => g.ids.forEach((id) => groupOf.set(id, i)));
  const runs: T[][] = groups.map(() => []);
  const rest: T[] = [];
  for (const card of cards) {
    const i = groupOf.get(card.id);
    if (i === undefined) rest.push(card);
    else runs[i].push(card);
  }
  const out: GroupedCards<T>[] = groups
    .map((g, i) => ({ name: g.name, cards: runs[i] }))
    .filter((g) => g.cards.length > 0);
  if (rest.length) out.push({ name: "More", cards: rest });
  return out;
}

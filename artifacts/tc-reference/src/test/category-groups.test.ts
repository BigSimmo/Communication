import { describe, expect, it } from "vitest";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { CATEGORY_GROUPS, groupCategoryCards } from "@/lib/category-groups";

describe("CATEGORY_GROUPS", () => {
  it("only groups categories that exist", () => {
    for (const category of Object.keys(CATEGORY_GROUPS)) {
      expect(LIBRARY_CATEGORIES).toHaveProperty([category]);
    }
  });

  it.each(Object.entries(CATEGORY_GROUPS))(
    "puts every %s card in exactly one group",
    (category, groups) => {
      const inCategory = LIBRARY_CATEGORIES[category].map((c) => c.id).sort();
      const grouped = groups.flatMap((g) => g.ids);
      expect(new Set(grouped).size).toBe(grouped.length);
      expect([...grouped].sort()).toEqual(inCategory);
    },
  );

  it("keeps groups short enough to scan and names unique", () => {
    for (const groups of Object.values(CATEGORY_GROUPS)) {
      const names = groups.map((g) => g.name);
      expect(new Set(names).size).toBe(names.length);
      for (const g of groups) {
        expect(g.ids.length).toBeGreaterThanOrEqual(3);
        expect(g.ids.length).toBeLessThanOrEqual(12);
      }
    }
  });

  it("groups the categories that are too long to scan", () => {
    for (const [category, cards] of Object.entries(LIBRARY_CATEGORIES)) {
      if (cards.length > 12) expect(CATEGORY_GROUPS).toHaveProperty([category]);
    }
  });
});

describe("groupCategoryCards", () => {
  const card = (id: string) => ({ id });

  it("returns one unnamed run for an ungrouped category", () => {
    expect(groupCategoryCards("Voice / Presence", [card("TC028")])).toEqual([
      { name: null, cards: [card("TC028")] },
    ]);
  });

  it("keeps the incoming order inside each group and drops empty groups", () => {
    const runs = groupCategoryCards("Resilience / Recovery", [
      card("TC105"),
      card("TC107"),
      card("TC101"),
    ]);
    expect(runs).toEqual([
      { name: "Handle pushback", cards: [card("TC107")] },
      { name: "Repair after a misstep", cards: [card("TC105"), card("TC101")] },
    ]);
  });

  it("never drops a card that has no group", () => {
    const runs = groupCategoryCards("Resilience / Recovery", [card("TC999")]);
    expect(runs).toEqual([{ name: "More", cards: [card("TC999")] }]);
  });
});

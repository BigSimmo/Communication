import { LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import { Chip } from "@/components/ui/chip";

const CATEGORIES = Object.entries(LIBRARY_CATEGORIES).map(([name, cards]) => ({
  name,
  count: cards.length,
  slug: name.toLowerCase().replace(/[\s/]+/g, "-"),
  ...categoryStyleFor(name),
}));

const TOTAL = CATEGORIES.reduce((n, c) => n + c.count, 0);

interface CategoryChipsProps {
  value: string | null;
  onChange: (category: string | null) => void;
}

/**
 * One chip per Library category, each with its colour dot and technique
 * count. A single row that scrolls sideways on narrow screens; tapping the
 * selected chip again returns to All.
 */
export function CategoryChips({ value, onChange }: CategoryChipsProps) {
  return (
    <div
      role="group"
      aria-label="Category"
      data-testid="library-category-chips"
      className="no-scrollbar -mx-3 md:-mx-6 flex gap-2 overflow-x-auto px-3 md:px-6"
    >
      <Chip
        selected={value === null}
        count={TOTAL}
        onClick={() => onChange(null)}
        data-testid="category-chip-all"
      >
        All
      </Chip>
      {CATEGORIES.map((c) => (
        <Chip
          key={c.name}
          selected={value === c.name}
          dotColor={c.color}
          count={c.count}
          // Starts with the visible "Voice 4" (WCAG 2.5.3 label in name)
          aria-label={`${c.short}, ${c.count} techniques`}
          onClick={() => onChange(value === c.name ? null : c.name)}
          data-testid={`category-chip-${c.slug}`}
        >
          {c.short}
        </Chip>
      ))}
    </div>
  );
}

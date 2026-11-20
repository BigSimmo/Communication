import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import { searchHref } from "./search-nav";
import { BROWSE_CATEGORIES, SEARCH_STARTERS } from "./search-starts";
import { Eyebrow, PillButton, RowList, Surface } from "./search-parts";
import { TechniqueRow } from "./result-rows";

/** "I need to" starters: each one runs as a search. */
export function StarterChips({ onPick }: { onPick: (query: string) => void }) {
  return (
    <section className="flex flex-col gap-2" aria-labelledby="search-starters">
      <Eyebrow as="h2" id="search-starters">
        I need to
      </Eyebrow>
      <div className="flex flex-wrap gap-2">
        {SEARCH_STARTERS.map((starter) => (
          <PillButton
            key={starter}
            onClick={() => onPick(starter)}
            testId="search-starter"
          >
            {starter}
          </PillButton>
        ))}
      </div>
    </section>
  );
}

/** The five categories, each opening its list of techniques. */
export function BrowseCategories() {
  return (
    <section className="flex flex-col gap-2" aria-labelledby="search-browse">
      <Eyebrow as="h2" id="search-browse">
        Browse
      </Eyebrow>
      <Surface>
        <RowList label="Categories">
          {BROWSE_CATEGORIES.map(({ category, label, color, count }) => (
            <li key={category}>
              <Link
                href={searchHref({ category })}
                replace
                state={window.history.state}
                data-search-result
                data-testid="search-browse-category"
                className="flex items-center gap-3 min-h-12 px-4 py-2.5 transition-colors hover:bg-[var(--fg-04)] active:bg-[var(--fg-06)]"
              >
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full flex-none"
                  style={{ background: color }}
                />
                <span
                  className="flex-1 min-w-0 text-[16px] font-semibold"
                  style={{ color: "var(--fg-90)" }}
                >
                  {label}
                </span>
                <span className="text-[13px]" style={{ color: "var(--fg-60)" }}>
                  {count}
                  <span className="sr-only"> techniques</span>
                </span>
                <ChevronRight
                  className="w-[18px] h-[18px] flex-none"
                  style={{ color: "var(--fg-50)" }}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </RowList>
      </Surface>
    </section>
  );
}

/** Before anything is typed: recent searches, starters and categories. */
export function SearchStart({
  recents,
  onClearRecents,
  onPick,
}: {
  recents: readonly string[];
  onClearRecents: () => void;
  onPick: (query: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4" data-testid="search-start">
      <div className="flex flex-col gap-1">
        <h1
          className="text-[32px] leading-[1.1] font-extrabold tracking-[-0.02em]"
          style={{ color: "var(--fg-90)" }}
        >
          Search
        </h1>
        <p
          className="text-[15px] leading-[1.45]"
          style={{ color: "var(--fg-70)" }}
        >
          Type a situation, a feeling or a name.
        </p>
      </div>

      {recents.length > 0 && (
        <section
          className="flex flex-col gap-1"
          aria-labelledby="search-recents"
        >
          <div className="flex items-center justify-between">
            <Eyebrow as="h2" id="search-recents">
              Recent
            </Eyebrow>
            <button
              type="button"
              onClick={onClearRecents}
              data-testid="search-clear-recents"
              className="tap-target-y -my-2 pl-3 text-[13px] font-semibold"
              style={{ color: "var(--brand-text)" }}
            >
              Clear
              <span className="sr-only"> recent searches</span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {recents.map((term) => (
              <PillButton
                key={term}
                onClick={() => onPick(term)}
                testId="search-recent"
              >
                <Clock
                  className="w-[18px] h-[18px] flex-none"
                  aria-hidden="true"
                />
                {term}
              </PillButton>
            ))}
          </div>
        </section>
      )}

      <StarterChips onPick={onPick} />
      <BrowseCategories />
    </div>
  );
}

/** Every technique in one category, opened from Browse. */
export function CategoryBrowse({
  category,
  onOpen,
}: {
  category: string;
  onOpen: () => void;
}) {
  const cards = LIBRARY_CATEGORIES[category] ?? [];
  const style = categoryStyleFor(category);
  return (
    <div className="flex flex-col gap-3" data-testid="search-category">
      <Link
        href={searchHref()}
        replace
        state={window.history.state}
        data-testid="search-category-back"
        className="tap-target-y -ml-1.5 self-start inline-flex items-center gap-0.5 pr-2 text-[15px] font-semibold"
        style={{ color: "var(--brand-text)" }}
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        Search
      </Link>
      <div className="flex flex-col gap-1">
        <h1
          className="text-[28px] leading-[1.15] font-extrabold tracking-[-0.02em]"
          style={{ color: "var(--fg-90)" }}
        >
          {style.label}
        </h1>
        <p className="text-[15px]" style={{ color: "var(--fg-70)" }}>
          {cards.length} techniques
        </p>
      </div>
      <Surface>
        <RowList label={`${style.label} techniques`}>
          {cards.map((card) => (
            <TechniqueRow
              key={card.id}
              id={card.id}
              title={card.title}
              category={category}
              loaded={card.loaded}
              onOpen={onOpen}
            />
          ))}
        </RowList>
      </Surface>
    </div>
  );
}

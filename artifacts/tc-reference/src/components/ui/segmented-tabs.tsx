import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

export interface SegmentedTab<T extends string> {
  id: T;
  label: string;
}

interface SegmentedTabsProps<T extends string> {
  tabs: ReadonlyArray<SegmentedTab<T>>;
  value: T;
  onChange: (id: T) => void;
  /** Accessible name for the tab list. */
  label: string;
  /** Prefix for tab and panel ids: tab is `${idBase}-tab-${id}`, panel `${idBase}-panel-${id}`. */
  idBase: string;
  className?: string;
}

/**
 * Segmented control used as a tab list (the card's Use it / Learn it /
 * Practise it, Saved's Techniques / Phrases). Arrow keys, Home and End move
 * between tabs and select as they go, per the WAI-ARIA tabs pattern.
 */
export function SegmentedTabs<T extends string>({
  tabs,
  value,
  onChange,
  label,
  idBase,
  className,
}: SegmentedTabsProps<T>) {
  const listRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const index = tabs.findIndex((t) => t.id === value);
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (e.key === "ArrowLeft")
      next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    onChange(tabs[next].id);
    // Index, not an id selector: ids may hold characters a selector would
    // need escaped.
    const buttons =
      listRef.current?.querySelectorAll<HTMLElement>('[role="tab"]');
    buttons?.[next]?.focus();
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={label}
      className={cn("grid gap-0 rounded-[14px] p-[3px]", className)}
      style={{
        gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
        background: "var(--fg-08)",
      }}
    >
      {tabs.map((tab) => {
        const selected = tab.id === value;
        return (
          <button
            key={tab.id}
            id={`${idBase}-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={`${idBase}-panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={onKeyDown}
            className="h-10 rounded-[11px] text-[15px] font-semibold transition-colors"
            style={
              selected
                ? {
                    background: "var(--surface-dd)",
                    color: "var(--fg-90)",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                  }
                : { color: "var(--fg-70)" }
            }
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

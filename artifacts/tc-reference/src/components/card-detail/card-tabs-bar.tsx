import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { SegmentedTabs } from "@/components/ui/segmented-tabs";
import {
  CARD_TABS,
  SECTION_SHORT_LABEL,
  SECTIONS,
  type CardSection,
  type CardTab,
} from "./card-sections";

const SECTION_LABEL = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s.label]),
) as Record<CardSection, string>;

/**
 * The card's sticky bar: Use it / Learn it / Practise it, plus a jump row
 * for the long Learn tab. Sits flush under the shared header and follows it
 * when the header slides away.
 */
export function CardTabsBar({
  navRef,
  tab,
  onTabChange,
  jumpSections,
  activeSection,
  onJump,
}: {
  navRef: RefObject<HTMLDivElement | null>;
  tab: CardTab;
  onTabChange: (tab: CardTab) => void;
  /** Sections offered in the jump row. Empty hides the row. */
  jumpSections: readonly CardSection[];
  activeSection: CardSection | null;
  onJump: (section: CardSection) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Keep the active pill in view as the reader moves down the tab. Scrolls
  // only the pill row, never the page.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !activeSection) return;
    const pill = scroller.querySelector<HTMLElement>(
      `[data-section="${activeSection}"]`,
    );
    if (!pill) return;
    const target =
      pill.offsetLeft - (scroller.clientWidth - pill.offsetWidth) / 2;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    scroller.scrollTo?.({
      left: Math.max(0, target),
      behavior: reduce ? "auto" : "smooth",
    });
  }, [activeSection]);

  return (
    <div
      ref={navRef}
      className="card-section-nav sticky z-10 sticky-under-header"
      style={{
        top: "var(--app-header-height, 48px)",
        background: "var(--surface-header)",
        backdropFilter: "blur(16px) saturate(1.2)",
        WebkitBackdropFilter: "blur(16px) saturate(1.2)",
        borderBottom: "1px solid var(--fg-06)",
      }}
      data-testid="card-tabs-bar"
    >
      <div className="px-4 py-2">
        <SegmentedTabs
          tabs={CARD_TABS}
          value={tab}
          onChange={onTabChange}
          label="Card sections"
          idBase="card"
        />
      </div>
      {jumpSections.length > 1 && (
        <nav aria-label="Jump to section">
          <div
            ref={scrollerRef}
            className="card-section-scroller flex items-center gap-1.5 pb-2 px-4 overflow-x-auto"
          >
            {jumpSections.map((id) => {
              const active = activeSection === id;
              return (
                <button
                  key={id}
                  type="button"
                  data-section={id}
                  data-testid={`jump-${id}`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => onJump(id)}
                  className="card-section-pill h-[30px] px-3 rounded-full text-[13px] whitespace-nowrap flex-shrink-0 transition-colors duration-150"
                  style={{
                    fontWeight: active ? 700 : 600,
                    background: active
                      ? "color-mix(in srgb, var(--brand) 16%, transparent)"
                      : "var(--fg-06)",
                    color: active ? "var(--brand-text)" : "var(--fg-70)",
                    boxShadow: active
                      ? "inset 0 0 0 1px color-mix(in srgb, var(--brand) 35%, transparent)"
                      : "none",
                  }}
                >
                  {SECTION_SHORT_LABEL[id] ?? SECTION_LABEL[id]}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}

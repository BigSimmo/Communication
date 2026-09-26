import { useEffect, useRef } from "react";
import { SECTIONS, type CardSection } from "./card-sections";

// Sections grouped into the card's four reading stages. Groups are shown as
// hairline breaks in the single pill row rather than a second row of buttons.
const SECTION_CLUSTERS: {
  id: string;
  label: string;
  sectionIds: CardSection[];
}[] = [
  {
    id: "core",
    label: "Core method",
    sectionIds: ["overview", "why", "method"],
  },
  {
    id: "phrases-practice",
    label: "Phrases and practice",
    sectionIds: ["phrases", "ladder", "inpractice", "tree"],
  },
  {
    id: "scenarios-troubleshooting",
    label: "Scenarios and troubleshooting",
    sectionIds: ["scenarios", "chains", "calibration", "mistakes", "recovery"],
  },
  {
    id: "review-downloads",
    label: "Review and downloads",
    sectionIds: ["practice", "checklist", "related", "resources"],
  },
];

const SECTION_LABEL = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s.label]),
) as Record<CardSection, string>;

/**
 * Sticky one-line section nav for the card page. Sits flush under the shared
 * header (which shrinks while reading) and keeps the active pill centred.
 */
export function SectionNav({
  navRef,
  activeSection,
  sectionAvailable,
  scrollSectionIntoView,
}: {
  navRef: React.RefObject<HTMLDivElement | null>;
  activeSection: CardSection;
  sectionAvailable: (id: CardSection) => boolean;
  scrollSectionIntoView: (s: CardSection) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Keep the active pill in view as the reader moves through the card.
  // Scrolls only the pill row, never the page.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const pill = scroller?.querySelector<HTMLElement>(`#nav-${activeSection}`);
    if (!scroller || !pill) return;
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

  const groups = SECTION_CLUSTERS.map((cluster) => ({
    ...cluster,
    sectionIds: cluster.sectionIds.filter(sectionAvailable),
  })).filter((cluster) => cluster.sectionIds.length > 0);

  return (
    <div
      ref={navRef}
      className="card-section-nav sticky z-10"
      style={{
        top: "var(--app-header-height, 48px)",
        background: "var(--surface-header)",
        backdropFilter: "blur(16px) saturate(1.2)",
        WebkitBackdropFilter: "blur(16px) saturate(1.2)",
        borderBottom: "1px solid var(--fg-06)",
        transition: "top 180ms ease",
      }}
    >
      {/* In-page section navigation. Deliberately NOT the tab pattern:
          sections are multi-open accordions (role=region), so tablist/tab
          semantics would misdescribe them to assistive tech. */}
      <nav aria-label="Card sections">
        <div
          ref={scrollerRef}
          className="card-section-scroller flex items-center gap-1 py-2 px-3 md:px-5 overflow-x-auto"
        >
          {groups.map((cluster, i) => (
            <div
              key={cluster.id}
              role="group"
              aria-label={cluster.label}
              className="flex items-center gap-1 flex-shrink-0"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="w-px h-3.5 mx-1.5 flex-shrink-0"
                  style={{ background: "var(--fg-10)" }}
                />
              )}
              {cluster.sectionIds.map((id) => {
                const active = activeSection === id;
                return (
                  <button
                    key={id}
                    id={`nav-${id}`}
                    type="button"
                    aria-current={active ? "true" : undefined}
                    aria-controls={`section-${id}`}
                    onClick={() => scrollSectionIntoView(id)}
                    data-testid={`nav-${id}`}
                    className="card-section-pill h-[30px] px-3 rounded-full text-[12px] whitespace-nowrap flex-shrink-0 transition-colors duration-150"
                    style={{
                      fontWeight: active ? 700 : 600,
                      background: active
                        ? "color-mix(in srgb, var(--brand) 16%, transparent)"
                        : "var(--fg-04)",
                      color: active ? "var(--brand-text)" : "var(--fg-55)",
                      boxShadow: active
                        ? "inset 0 0 0 1px color-mix(in srgb, var(--brand) 35%, transparent)"
                        : "none",
                    }}
                  >
                    {SECTION_LABEL[id]}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

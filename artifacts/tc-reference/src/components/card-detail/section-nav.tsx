import type { RefObject } from "react";
import { SECTIONS, SECTION_CLUSTERS, type CardSection } from "./card-sections";

// ── Section nav (sticky flush below the shared header) ──
export function SectionNav({
  navRef,
  activeSection,
  sectionAvailable,
  scrollSectionIntoView,
}: {
  navRef: RefObject<HTMLDivElement | null>;
  activeSection: CardSection;
  sectionAvailable: (id: CardSection) => boolean;
  scrollSectionIntoView: (s: CardSection) => void;
}) {
  return (
    <div
      ref={navRef}
      className="sticky z-10"
      style={{
        top: "var(--app-header-height, 48px)",
        background: "var(--surface-header)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--fg-06)",
      }}
    >
      {/* Category Clusters Quick Jump */}
      <div
        className="flex items-center gap-1.5 px-4 md:px-6 pt-2 pb-1 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
        role="region"
        aria-label="Section categories"
      >
        {SECTION_CLUSTERS.map((cluster) => {
          const availableSections = cluster.sectionIds.filter((id) =>
            sectionAvailable(id),
          );
          if (availableSections.length === 0) return null;
          const isClusterActive = cluster.sectionIds.includes(activeSection);
          return (
            <button
              key={cluster.id}
              type="button"
              onClick={() => {
                const targetSection = cluster.sectionIds.includes(activeSection)
                  ? activeSection
                  : availableSections[0];
                scrollSectionIntoView(targetSection);
              }}
              className="text-[12px] font-semibold px-3 rounded-lg transition-all flex-shrink-0"
              style={{
                minHeight: 32,
                background: isClusterActive ? "var(--fg-08)" : "var(--fg-02)",
                color: isClusterActive ? "var(--brand-text)" : "var(--fg-50)",
                border: isClusterActive
                  ? "1px solid var(--fg-15)"
                  : "1px solid var(--fg-05)",
              }}
            >
              {cluster.label}
            </button>
          );
        })}
      </div>

      {/* All Section Tabs grouped by cluster */}
      <div className="flex items-center gap-0">
        <div
          className="flex items-center gap-1.5 py-2 px-4 md:px-6 overflow-x-auto flex-1"
          style={{ scrollbarWidth: "none" }}
          role="group"
          aria-label="Jump to section"
        >
          {SECTION_CLUSTERS.map((cluster, clusterIdx) => {
            const clusterSections = cluster.sectionIds
              .map((id) => SECTIONS.find((s) => s.id === id)!)
              .filter((s) => s && sectionAvailable(s.id));
            if (clusterSections.length === 0) return null;

            return (
              <div
                key={cluster.id}
                className="flex items-center gap-1.5 flex-shrink-0"
              >
                {clusterIdx > 0 && (
                  <div
                    className="w-px h-4 mx-1 flex-shrink-0"
                    style={{ background: "var(--fg-10)" }}
                    aria-hidden="true"
                  />
                )}
                {clusterSections.map((s) => (
                  <button
                    key={s.id}
                    id={`nav-${s.id}`}
                    type="button"
                    aria-current={activeSection === s.id ? "true" : undefined}
                    aria-controls={`section-${s.id}`}
                    onClick={() => scrollSectionIntoView(s.id)}
                    data-testid={`nav-${s.id}`}
                    className="text-[12px] font-semibold px-3.5 rounded-full transition-all flex-shrink-0"
                    style={{
                      minHeight: 40,
                      background:
                        activeSection === s.id
                          ? "var(--brand)"
                          : "var(--fg-05)",
                      color:
                        activeSection === s.id
                          ? "var(--brand-contrast)"
                          : "var(--fg-55)",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { SECTIONS, type CardSection } from "./section-accordion";

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
  return (
    <div
      ref={navRef}
      className="sticky z-10"
      style={{
        top: "var(--app-header-height, 56px)",
        background: "var(--surface-header)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--fg-06)",
      }}
    >
      <div className="flex items-center gap-0">
        {/* In-page section navigation. Deliberately NOT the tab pattern:
            sections are multi-open accordions (role=region), so tablist/tab
            semantics would misdescribe them to assistive tech. */}
        <nav
          className="flex gap-1.5 py-2 px-4 md:px-6 overflow-x-auto flex-1"
          style={{ scrollbarWidth: "none" }}
          aria-label="Card sections"
        >
          {SECTIONS.filter((s) => sectionAvailable(s.id)).map((s) => (
            <button
              key={s.id}
              id={`nav-${s.id}`}
              aria-current={activeSection === s.id ? "true" : undefined}
              aria-controls={`section-${s.id}`}
              onClick={() => scrollSectionIntoView(s.id)}
              data-testid={`nav-${s.id}`}
              className="text-[11px] font-semibold px-3 rounded-full transition-all flex-shrink-0"
              style={{
                minHeight: 40,
                background:
                  activeSection === s.id ? "var(--brand)" : "var(--fg-05)",
                color:
                  activeSection === s.id
                    ? "var(--brand-contrast)"
                    : "var(--fg-55)",
              }}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

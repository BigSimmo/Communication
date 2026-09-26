import { createContext, useContext } from "react";
import { ChevronDown } from "lucide-react";
import type { CardSection } from "./card-sections";

// ── Accordion section wrapper ─────────────────────────────────────────────
// Defined at module scope (not inside CardDetail) so that re-renders from
// copy/favourite/scroll-spy state don't remount open sections and drop focus.
interface AccordionState {
  openSections: Set<CardSection>;
  toggleSection: (id: CardSection) => void;
}
export const AccordionContext = createContext<AccordionState | null>(null);

export function SectionAccordion({
  id,
  label,
  color,
  subtitle,
  children,
}: {
  id: CardSection;
  label: string;
  color: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const ctx = useContext(AccordionContext);
  const open = ctx?.openSections.has(id) ?? false;
  return (
    <section
      id={`section-${id}`}
      className="rounded-2xl overflow-hidden"
      aria-labelledby={`section-${id}-title`}
      style={{
        background: "var(--fg-02)",
        border: "1px solid var(--fg-05)",
        scrollMarginTop:
          "calc(var(--app-header-height, 48px) + var(--card-nav-height, 96px) + 8px)",
      }}
    >
      <h3 className="m-0">
        <button
          type="button"
          id={`section-${id}-title`}
          onClick={() => ctx?.toggleSection(id)}
          aria-expanded={open}
          aria-controls={`section-${id}-body`}
          className="w-full flex items-center gap-3.5 px-4 sm:px-5 py-4 text-left transition-colors active:bg-[var(--fg-03)]"
          style={{ minHeight: 56 }}
        >
          <span
            className="w-1 h-[18px] rounded-full flex-shrink-0"
            style={{ background: color }}
            aria-hidden="true"
          />
          <span className="flex-1 min-w-0 block">
            <span className="block text-[15px] font-bold text-foreground/85">
              {label}
            </span>
            {subtitle && (
              <span
                className="block text-[12px] mt-0.5 leading-snug font-normal"
                style={{ color: "var(--fg-55)" }}
              >
                {subtitle}
              </span>
            )}
          </span>
          <ChevronDown
            className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
            style={{
              color: "var(--fg-50)",
              transform: open ? "rotate(180deg)" : "none",
            }}
            aria-hidden="true"
          />
        </button>
      </h3>
      {open && (
        <div
          id={`section-${id}-body`}
          className="px-4 sm:px-5 pb-5 pt-4"
          style={{ borderTop: "1px solid var(--fg-04)" }}
        >
          {children}
        </div>
      )}
    </section>
  );
}

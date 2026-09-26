import { ChevronDown } from "lucide-react";

export type CardSection =
  | "overview"
  | "why"
  | "method"
  | "phrases"
  | "ladder"
  | "inpractice"
  | "tree"
  | "scenarios"
  | "chains"
  | "calibration"
  | "mistakes"
  | "recovery"
  | "practice"
  | "checklist"
  | "related"
  | "resources";

export const SECTIONS: { id: CardSection; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "why", label: "Why It Works" },
  { id: "method", label: "The Method" },
  { id: "phrases", label: "Phrases" },
  { id: "ladder", label: "Ladder" },
  { id: "inpractice", label: "In Practice" },
  { id: "tree", label: "Decision Tree" },
  { id: "scenarios", label: "Scenarios" },
  { id: "chains", label: "Chains" },
  { id: "calibration", label: "Calibration" },
  { id: "mistakes", label: "Mistakes" },
  { id: "recovery", label: "Recovery" },
  { id: "practice", label: "Practice" },
  { id: "checklist", label: "Checklist" },
  { id: "related", label: "Related" },
  { id: "resources", label: "Downloads" },
];

// ── Accordion section wrapper ─────────────────────────────────────────────
// Module scope on purpose: defined inside CardDetail it would get a fresh
// component identity every render, remounting each open section's subtree on
// any state change (losing focus and transient DOM state within sections).
export function SectionAccordion({
  id,
  label,
  color,
  subtitle,
  open,
  onToggle,
  children,
}: {
  id: CardSection;
  label: string;
  color: string;
  subtitle?: string;
  open: boolean;
  onToggle: (id: CardSection) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      id={`section-${id}`}
      className="scroll-mt-44 rounded-2xl overflow-hidden"
      role="region"
      aria-labelledby={`section-${id}-header`}
      style={{ background: "var(--fg-02)", border: "1px solid var(--fg-05)" }}
    >
      <h2 className="m-0">
        <button
          id={`section-${id}-header`}
          onClick={() => onToggle(id)}
          aria-expanded={open}
          className="w-full flex items-center gap-3.5 px-5 py-4 text-left transition-colors active:bg-[var(--fg-03)]"
          style={{ minHeight: 56 }}
        >
          <div
            className="w-1 h-[18px] rounded-full flex-shrink-0"
            style={{ background: color }}
            aria-hidden="true"
          />
          <div className="flex-1 min-w-0">
            <span className="block text-[14px] font-bold text-foreground/85">
              {label}
            </span>
            {subtitle && (
              <span
                className="block text-[11px] mt-0.5 leading-snug font-normal"
                style={{ color: "var(--fg-55)" }}
              >
                {subtitle}
              </span>
            )}
          </div>
          <ChevronDown
            className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
            style={{
              color: "var(--fg-35)",
              transform: open ? "rotate(180deg)" : "none",
            }}
            aria-hidden="true"
          />
        </button>
      </h2>
      {open && (
        <div
          className="px-5 pb-5 pt-4"
          style={{ borderTop: "1px solid var(--fg-04)" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

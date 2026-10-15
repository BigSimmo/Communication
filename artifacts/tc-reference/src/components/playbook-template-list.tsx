import { Stethoscope, Briefcase, ChevronRight } from "lucide-react";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import {
  PLAYBOOK_TEMPLATES,
  type PlaybookTemplate,
} from "@/lib/playbook-templates";

const CARD_TITLES: Record<string, string> = Object.fromEntries(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((c) => [c.id, c.title]),
);

const GROUPS: { context: PlaybookTemplate["context"]; label: string }[] = [
  { context: "Clinical", label: "Clinical conversations" },
  { context: "Workplace", label: "Workplace conversations" },
];

// Ready made sequences the user can load into the editor, adjust and save.
export function PlaybookTemplateList({
  onUse,
}: {
  onUse: (template: PlaybookTemplate) => void;
}) {
  return (
    <section aria-labelledby="playbook-templates-heading" className="mt-2">
      <h2
        id="playbook-templates-heading"
        className="text-[11px] font-bold tracking-widest uppercase mb-1 px-1"
        style={{ color: "var(--fg-50)" }}
      >
        Start from a template
      </h2>
      <p
        className="text-[12px] leading-relaxed mb-3 px-1"
        style={{ color: "var(--fg-55)" }}
      >
        Load a sequence, then reorder or swap cards before you save it. These
        are communication prompts and sit alongside local policy and clinical
        procedures, not in place of them.
      </p>
      {GROUPS.map(({ context, label }) => {
        const items = PLAYBOOK_TEMPLATES.filter((t) => t.context === context);
        if (items.length === 0) return null;
        const Icon = context === "Clinical" ? Stethoscope : Briefcase;
        return (
          <div key={context} className="mb-4">
            <h3
              className="flex items-center gap-1.5 text-[12px] font-semibold mb-2 px-1"
              style={{ color: "var(--fg-70)" }}
            >
              <Icon
                className="w-3.5 h-3.5"
                style={{ color: "var(--brand-text)" }}
                aria-hidden="true"
              />
              {label}
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {items.map((t) => (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => onUse(t)}
                    data-testid={`playbook-template-${t.id}`}
                    aria-label={`Use template: ${t.name}`}
                    className="w-full h-full text-left flex items-start gap-3 rounded-2xl px-4 py-3.5 transition-all active:scale-[0.98] bg-[var(--surface-card)] hover:bg-[var(--surface-card-hover)]"
                    style={{
                      border: "1px solid var(--fg-07)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <span className="flex-1 min-w-0">
                      <span
                        className="block text-[14px] font-semibold leading-snug"
                        style={{ color: "var(--fg-90)" }}
                      >
                        {t.name}
                      </span>
                      <span
                        className="block text-[12px] leading-relaxed mt-1"
                        style={{ color: "var(--fg-60)" }}
                      >
                        {t.description}
                      </span>
                      <span
                        className="block text-[11px] font-medium mt-2"
                        style={{ color: "var(--fg-50)" }}
                      >
                        {t.cardIds.length} steps:{" "}
                        {t.cardIds
                          .map((id) => CARD_TITLES[id] ?? id)
                          .join(", ")}
                      </span>
                    </span>
                    <ChevronRight
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: "var(--fg-55)" }}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}

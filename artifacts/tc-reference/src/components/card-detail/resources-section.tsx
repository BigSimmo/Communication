import { FileText } from "lucide-react";
import type { CardResource } from "@/lib/card-types";
import { SectionAccordion, type CardSection } from "./section-accordion";

export function ResourcesSection({
  resourceItems,
  open,
  onToggle,
}: {
  resourceItems: CardResource[];
  open: boolean;
  onToggle: (id: CardSection) => void;
}) {
  return (
    <SectionAccordion
      id="resources"
      open={open}
      onToggle={onToggle}
      label="Downloads"
      color="var(--accent-purple)"
      subtitle="PDFs & reference files"
    >
      <div
        className="rounded-2xl px-4 py-3 mb-5 flex items-start gap-3"
        style={{
          background:
            "color-mix(in srgb, var(--accent-purple) 7%, transparent)",
          border:
            "1px solid color-mix(in srgb, var(--accent-purple) 14%, transparent)",
        }}
      >
        <FileText
          className="w-4 h-4 mt-0.5 flex-shrink-0"
          style={{
            color: "color-mix(in srgb, var(--accent-purple) 65%, transparent)",
          }}
          aria-hidden="true"
        />
        <p
          className="text-[12px] leading-relaxed"
          style={{ color: "var(--fg-55)" }}
        >
          The visual card PDF can also be viewed in-app via the PDF button in
          the app navigation.
        </p>
      </div>

      {(["Visual Cards", "Written Guides", "Practice Tools"] as const).map(
        (group) => {
          const items = resourceItems.filter((r) => r.group === group);
          if (items.length === 0) return null;
          const typeStyle: Record<string, { bg: string; color: string }> = {
            pdf: {
              bg: "color-mix(in srgb, var(--accent-red) 9%, transparent)",
              color: "color-mix(in srgb, var(--accent-red) 85%, transparent)",
            },
            docx: {
              bg: "color-mix(in srgb, var(--accent-blue) 9%, transparent)",
              color: "color-mix(in srgb, var(--accent-blue) 85%, transparent)",
            },
            png: {
              bg: "color-mix(in srgb, var(--accent-emerald) 9%, transparent)",
              color:
                "color-mix(in srgb, var(--accent-emerald) 85%, transparent)",
            },
            csv: {
              bg: "color-mix(in srgb, var(--brand) 9%, transparent)",
              color: "color-mix(in srgb, var(--brand-text) 85%, transparent)",
            },
          };
          return (
            <div key={group} className="mb-5">
              <p
                className="text-[10px] font-bold tracking-widest uppercase mb-3"
                style={{ color: "var(--fg-35)" }}
              >
                {group}
              </p>
              <div className="space-y-2">
                {items.map((resource) => {
                  const ts = typeStyle[resource.type] ?? typeStyle.pdf;
                  const href = `${import.meta.env.BASE_URL}${resource.href}`;
                  const isDownload =
                    resource.type === "docx" || resource.type === "csv";
                  return (
                    <a
                      key={resource.href}
                      href={href}
                      {...(isDownload ? { download: true } : {})}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 rounded-2xl px-4 py-3.5 transition-all active:scale-[0.98]"
                      style={{
                        background: "var(--fg-03)",
                        border: "1px solid var(--fg-07)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: ts.bg }}
                        aria-hidden="true"
                      >
                        <FileText
                          className="w-4 h-4"
                          style={{ color: ts.color }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-[13px] font-semibold"
                          style={{ color: "var(--fg-85)" }}
                        >
                          {resource.label}
                        </p>
                        <p
                          className="text-[11px] mt-0.5"
                          style={{ color: "var(--fg-42)" }}
                        >
                          {resource.description}
                        </p>
                      </div>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex-shrink-0 ml-1"
                        style={{ background: ts.bg, color: ts.color }}
                      >
                        {resource.type}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        },
      )}
    </SectionAccordion>
  );
}

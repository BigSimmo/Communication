import { ArrowUpRight, Eye, FileText } from "lucide-react";
import { usePdf } from "@/lib/pdf-context";
import type { CardData, CardResource } from "@/lib/card-types";
import { CardBlock, Meta, Surface } from "./card-ui";

const GROUP_ORDER: CardResource["group"][] = [
  "Visual Cards",
  "Written Guides",
  "Practice Tools",
];

const TYPE_LABEL: Record<CardResource["type"], string> = {
  pdf: "PDF",
  docx: "Word",
  png: "Image",
  csv: "CSV",
};

// ── Downloads ──
export function ResourcesSection({ cardData }: { cardData: CardData }) {
  const { pdfUrl, setPdfOpen } = usePdf();
  const resources = GROUP_ORDER.flatMap((group) =>
    (cardData.resources ?? []).filter((r) => r.group === group),
  );
  return (
    <CardBlock id="resources" title="Downloads">
      <Surface divided>
        {pdfUrl && (
          <button
            type="button"
            onClick={() => setPdfOpen(true)}
            data-testid="resources-view-pdf"
            className="w-full flex items-center gap-3 px-4 py-[13px] min-h-14 text-left transition-colors active:bg-[var(--fg-05)]"
          >
            <Eye
              className="w-[22px] h-[22px] flex-none"
              style={{ color: "var(--brand-text)" }}
              aria-hidden="true"
            />
            <span className="flex-1 min-w-0 flex flex-col gap-0.5">
              <span
                className="text-[16px] font-semibold leading-[1.3]"
                style={{ color: "var(--fg-90)" }}
              >
                View the visual card
              </span>
              <Meta>
                Opens the printable card here, without leaving the app
              </Meta>
            </span>
          </button>
        )}
        {resources.map((resource) => {
          const isDownload =
            resource.type === "docx" || resource.type === "csv";
          return (
            <a
              key={resource.href}
              href={`${import.meta.env.BASE_URL}${resource.href}`}
              {...(isDownload ? { download: true } : {})}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-[13px] min-h-14 transition-colors active:bg-[var(--fg-05)]"
            >
              <FileText
                className="w-[22px] h-[22px] flex-none"
                style={{ color: "var(--fg-55)" }}
                aria-hidden="true"
              />
              <span className="flex-1 min-w-0 flex flex-col gap-0.5">
                <span
                  className="text-[16px] font-semibold leading-[1.3]"
                  style={{ color: "var(--fg-90)" }}
                >
                  {resource.label}
                </span>
                <Meta>
                  {TYPE_LABEL[resource.type] ?? resource.type} ·{" "}
                  {resource.description}
                </Meta>
              </span>
              <ArrowUpRight
                className="w-[18px] h-[18px] flex-none"
                style={{ color: "var(--fg-55)" }}
                aria-hidden="true"
              />
            </a>
          );
        })}
      </Surface>
    </CardBlock>
  );
}

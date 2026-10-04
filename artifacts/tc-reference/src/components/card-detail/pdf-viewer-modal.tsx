import type { RefObject } from "react";
import { ExternalLink, FileText, X } from "lucide-react";
import type { CardData } from "@/lib/card-types";
import { getCardPdfUrl } from "./card-sections";

// ── PDF viewer modal / bottom sheet ──
export function PdfViewerModal({
  cardId,
  cardData,
  sheetRef,
  pdfError,
  pdfLoaded,
  onClose,
  onLoad,
  onError,
}: {
  cardId: string;
  cardData: CardData;
  sheetRef: RefObject<HTMLDivElement | null>;
  pdfError: boolean;
  pdfLoaded: boolean;
  onClose: () => void;
  onLoad: () => void;
  onError: () => void;
}) {
  const isCoarsePointer =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches;
  const { url, isPlaceholder } = getCardPdfUrl(cardId, cardData);
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{
          background: "rgba(0,0,0,0.60)",
          zIndex: "var(--z-modal)" as unknown as number,
        }}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Sheet */}
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${cardId} Reference PDF`}
        className="pdf-modal flex flex-col"
        style={{
          zIndex: "var(--z-modal)" as unknown as number,
          background: "var(--surface-float)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid var(--fg-08)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between gap-2 pl-5 pr-3 py-2 flex-shrink-0"
          style={{ borderBottom: "1px solid var(--fg-08)" }}
        >
          <div className="flex items-center gap-2.5">
            <FileText
              className="w-4 h-4"
              style={{
                color: "var(--brand-text)",
                opacity: isPlaceholder ? 0.5 : 1,
              }}
            />
            <span
              className="text-[13px] font-semibold"
              style={{ color: "var(--fg-70)" }}
            >
              {cardId}: reference PDF
              {isPlaceholder && (
                <span
                  className="ml-2 text-[11px] font-normal"
                  style={{ color: "var(--fg-55)" }}
                >
                  (placeholder)
                </span>
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open PDF in new tab"
              title="Open PDF in new tab"
              className="w-11 h-11 flex items-center justify-center rounded-full transition-all active:scale-95"
              style={{ background: "var(--fg-06)" }}
            >
              <ExternalLink
                className="w-4 h-4"
                style={{ color: "var(--fg-55)" }}
              />
            </a>
            <button
              onClick={onClose}
              aria-label="Close PDF viewer"
              className="w-11 h-11 flex items-center justify-center rounded-full transition-all active:scale-95"
              style={{ background: "var(--fg-06)" }}
            >
              <X className="w-4 h-4" style={{ color: "var(--fg-55)" }} />
            </button>
          </div>
        </div>
        {/* PDF iframe / fallback
           Detection strategy:
           • onError  → immediate failure (network error)
           • 10 s timeout → catches X-Frame-Options / CSP blocks where
             browsers fire onLoad (or nothing) instead of onError
           • "Open in new tab" is always visible so users are never stuck */}
        {pdfError ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "color-mix(in srgb, var(--accent-red) 7%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--accent-red) 16%, transparent)",
              }}
            >
              <FileText
                className="w-6 h-6"
                style={{
                  color:
                    "color-mix(in srgb, var(--accent-red) 50%, transparent)",
                }}
              />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-foreground/80 mb-2">
                Couldn't display the PDF
              </p>
              <p
                className="text-[13px] leading-relaxed max-w-[300px]"
                style={{ color: "var(--fg-55)" }}
              >
                Your browser blocked the document. This can happen on mobile or
                when third-party content is restricted.
              </p>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-semibold px-5 rounded-full transition-all active:scale-95"
              style={{
                minHeight: 44,
                background: "color-mix(in srgb, var(--brand) 12%, transparent)",
                border:
                  "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
                color: "var(--brand-text)",
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Open in new tab
            </a>
          </div>
        ) : (
          <>
            {!pdfLoaded && (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <div
                  className="w-8 h-8 rounded-full border-2 animate-spin"
                  style={{
                    borderColor: "var(--fg-10)",
                    borderTopColor: "var(--brand)",
                  }}
                  aria-hidden="true"
                />
                <p className="text-[13px]" style={{ color: "var(--fg-55)" }}>
                  Loading PDF…
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] font-medium rounded-full px-4 transition-all active:scale-95"
                  style={{
                    minHeight: 44,
                    color: "var(--fg-55)",
                    border: "1px solid var(--fg-08)",
                  }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in new tab instead
                </a>
              </div>
            )}
            <iframe
              src={url}
              className="w-full border-0"
              title="Technique PDF"
              style={{
                display: pdfLoaded ? "block" : "none",
                flex: "1 1 auto",
              }}
              onLoad={onLoad}
              onError={onError}
            />
            {pdfLoaded && isCoarsePointer && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[13px] font-semibold flex-shrink-0"
                style={{
                  minHeight: 48,
                  borderTop: "1px solid var(--fg-08)",
                  color: "var(--brand-text)",
                }}
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Open full PDF
              </a>
            )}
          </>
        )}
      </div>
    </>
  );
}

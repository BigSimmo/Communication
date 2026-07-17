import { FileText, X, ExternalLink } from "lucide-react";

export function PdfViewerModal({
  cardId, pdfUrl, pdfSheetRef, pdfCloseRef, pdfError, pdfLoaded, pdfLoadedRef, setPdfOpen, setPdfLoaded, setPdfError,
}: {
  cardId: string;
  pdfUrl: string;
  pdfSheetRef: React.RefObject<HTMLDivElement | null>;
  pdfCloseRef: React.RefObject<HTMLButtonElement | null>;
  pdfError: boolean;
  pdfLoaded: boolean;
  pdfLoadedRef: React.RefObject<boolean>;
  setPdfOpen: (open: boolean) => void;
  setPdfLoaded: (loaded: boolean) => void;
  setPdfError: (error: boolean) => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ background: "rgba(0,0,0,0.60)", zIndex: "var(--z-modal)" }}
        onClick={() => setPdfOpen(false)}
        aria-hidden="true"
      />
      {/* Sheet */}
      <div
        ref={pdfSheetRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${cardId} Reference PDF`}
        className="pdf-modal flex flex-col"
        style={{
          zIndex: "var(--z-modal)",
          background: "var(--surface-float)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid var(--fg-08)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-3.5 flex-shrink-0"
          style={{ borderBottom: "1px solid var(--fg-08)" }}
        >
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4" style={{ color: "var(--brand-text)" }} />
            <span className="text-[13px] font-semibold" style={{ color: "var(--fg-70)" }}>
              {cardId} — Reference PDF
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open PDF in new tab"
              title="Open PDF in new tab"
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
              style={{ background: "var(--fg-06)" }}
            >
              <ExternalLink className="w-4 h-4" style={{ color: "var(--fg-55)" }} />
            </a>
            <button
              ref={pdfCloseRef}
              onClick={() => setPdfOpen(false)}
              aria-label="Close PDF viewer"
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all active:scale-95"
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
                background: "color-mix(in srgb, var(--accent-red) 7%, transparent)",
                border: "1px solid color-mix(in srgb, var(--accent-red) 16%, transparent)",
              }}
            >
              <FileText className="w-6 h-6" style={{ color: "color-mix(in srgb, var(--accent-red) 50%, transparent)" }} />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-foreground/80 mb-2">Couldn't display the PDF</p>
              <p
                className="text-[13px] leading-relaxed max-w-[300px]"
                style={{ color: "var(--fg-42)" }}
              >
                Your browser blocked the document — this can happen on mobile or when third-party content is restricted.
              </p>
            </div>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] font-semibold px-5 rounded-full transition-all active:scale-95"
              style={{
                minHeight: 44,
                background: "color-mix(in srgb, var(--brand) 12%, transparent)",
                border: "1px solid color-mix(in srgb, var(--brand) 22%, transparent)",
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
                  style={{ borderColor: "var(--fg-10)", borderTopColor: "var(--brand)" }}
                  aria-hidden="true"
                />
                <p className="text-[13px]" style={{ color: "var(--fg-35)" }}>Loading PDF…</p>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] font-medium rounded-full px-4 transition-all active:scale-95"
                  style={{
                    minHeight: 36,
                    color: "var(--fg-42)",
                    border: "1px solid var(--fg-08)",
                  }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open in new tab instead
                </a>
              </div>
            )}
            <iframe
              src={pdfUrl}
              className="w-full border-0"
              title="Technique PDF"
              style={{ display: pdfLoaded ? "block" : "none", flex: "1 1 auto" }}
              onLoad={() => {
                pdfLoadedRef.current = true;
                setPdfLoaded(true);
              }}
              onError={() => setPdfError(true)}
            />
          </>
        )}
      </div>
    </>
  );
}

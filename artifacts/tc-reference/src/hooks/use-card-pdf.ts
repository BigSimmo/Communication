import { useState, useEffect, useRef } from "react";
import type { CardData } from "@/lib/card-types";
import { getCardPdfUrl } from "@/components/card-detail/card-sections";

/**
 * Keeps the shared PDF viewer in step with the card page: publishes the
 * card's PDF URL, closes the viewer on card change or unmount, closes it on
 * Escape, and tracks the iframe's load / error state while it is open.
 */
export function useCardPdf({
  cardId,
  cardData,
  pdfOpen,
  setPdfOpen,
  setPdfUrl,
}: {
  cardId: string;
  cardData: CardData | null;
  pdfOpen: boolean;
  setPdfOpen: (open: boolean) => void;
  setPdfUrl: (url: string | null) => void;
}) {
  const [pdfError, setPdfError] = useState(false);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const pdfLoadedRef = useRef(false);

  // Close PDF when navigating between cards or unmounting
  const prevCardIdRef = useRef(cardId);
  useEffect(() => {
    if (prevCardIdRef.current !== cardId) {
      prevCardIdRef.current = cardId;
      setPdfOpen(false);
    }
    return () => {
      setPdfOpen(false);
    };
  }, [cardId, setPdfOpen]);

  // Update PDF URL when cardData is available
  useEffect(() => {
    if (!cardData) {
      setPdfUrl(null);
      return;
    }
    const { url } = getCardPdfUrl(cardId, cardData);
    setPdfUrl(url);
    return () => {
      setPdfUrl(null);
    };
  }, [cardId, cardData, setPdfUrl]);

  useEffect(() => {
    if (!pdfOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPdfOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pdfOpen]);

  useEffect(() => {
    if (!pdfOpen) return;
    setPdfError(false);
    setPdfLoaded(false);
    pdfLoadedRef.current = false;
    // Timeout fallback: many browsers fire onLoad (or nothing) instead of
    // onError when a PDF is blocked by X-Frame-Options or CSP. If the iframe
    // hasn't signalled a successful load within 10 s, surface the fallback.
    const timer = setTimeout(() => {
      if (!pdfLoadedRef.current) setPdfError(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [pdfOpen]);

  const onPdfLoad = () => {
    pdfLoadedRef.current = true;
    setPdfLoaded(true);
  };
  const onPdfError = () => setPdfError(true);

  return { pdfError, pdfLoaded, onPdfLoad, onPdfError };
}

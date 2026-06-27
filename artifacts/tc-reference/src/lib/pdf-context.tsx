import { createContext, useContext, useState } from "react";

interface PdfContextValue {
  pdfOpen: boolean;
  setPdfOpen: (v: boolean) => void;
  pdfUrl: string | null;
  setPdfUrl: (url: string | null) => void;
}

const PdfContext = createContext<PdfContextValue | null>(null);

export function PdfProvider({ children }: { children: React.ReactNode }) {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  return (
    <PdfContext.Provider value={{ pdfOpen, setPdfOpen, pdfUrl, setPdfUrl }}>
      {children}
    </PdfContext.Provider>
  );
}

export function usePdf(): PdfContextValue {
  const ctx = useContext(PdfContext);
  if (!ctx) throw new Error("usePdf must be used inside PdfProvider");
  return ctx;
}

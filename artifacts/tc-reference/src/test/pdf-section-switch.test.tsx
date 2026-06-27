import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { useRoute, useLocation } from "wouter";
import CardDetail from "../pages/card-detail";
import { PdfProvider, usePdf } from "../lib/pdf-context";
import { FavouritesProvider } from "../lib/favourites-context";

vi.mock("wouter");

function OpenPdfButton() {
  const { setPdfOpen } = usePdf();
  return (
    <button data-testid="open-pdf" onClick={() => setPdfOpen(true)}>
      Open PDF
    </button>
  );
}

function PdfStatusDisplay() {
  const { pdfOpen } = usePdf();
  return <div data-testid="pdf-status">{pdfOpen ? "open" : "closed"}</div>;
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <FavouritesProvider>
      <PdfProvider>
        {children}
      </PdfProvider>
    </FavouritesProvider>
  );
}

beforeEach(() => {
  vi.mocked(useLocation).mockReturnValue(["/card/TC031", vi.fn()]);

  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;

  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
});

describe("CardDetail PDF viewer — section switching regression", () => {
  it("keeps PDF open when switching section tabs within the same card", () => {
    vi.mocked(useRoute).mockReturnValue([true, { cardId: "TC031" }]);

    render(
      <Wrapper>
        <OpenPdfButton />
        <PdfStatusDisplay />
        <CardDetail />
      </Wrapper>
    );

    fireEvent.click(screen.getByTestId("open-pdf"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    fireEvent.click(screen.getByTestId("nav-phrases"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    fireEvent.click(screen.getByTestId("nav-scenarios"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    fireEvent.click(screen.getByTestId("nav-inpractice"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    fireEvent.click(screen.getByTestId("nav-overview"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");
  });

  it("closes PDF when navigating to a different card", () => {
    vi.mocked(useRoute).mockReturnValue([true, { cardId: "TC031" }]);

    const { rerender } = render(
      <Wrapper>
        <OpenPdfButton />
        <PdfStatusDisplay />
        <CardDetail />
      </Wrapper>
    );

    fireEvent.click(screen.getByTestId("open-pdf"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    vi.mocked(useRoute).mockReturnValue([true, { cardId: "TC001" }]);
    vi.mocked(useLocation).mockReturnValue(["/card/TC001", vi.fn()]);

    act(() => {
      rerender(
        <Wrapper>
          <OpenPdfButton />
          <PdfStatusDisplay />
          <CardDetail />
        </Wrapper>
      );
    });

    expect(screen.getByTestId("pdf-status").textContent).toBe("closed");
  });

  it("switching multiple sections rapidly keeps PDF open throughout", () => {
    vi.mocked(useRoute).mockReturnValue([true, { cardId: "TC031" }]);

    render(
      <Wrapper>
        <OpenPdfButton />
        <PdfStatusDisplay />
        <CardDetail />
      </Wrapper>
    );

    fireEvent.click(screen.getByTestId("open-pdf"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    const tabs = ["nav-phrases", "nav-scenarios", "nav-inpractice", "nav-overview", "nav-phrases"] as const;
    for (const tab of tabs) {
      fireEvent.click(screen.getByTestId(tab));
      expect(screen.getByTestId("pdf-status").textContent).toBe("open");
    }
  });
});

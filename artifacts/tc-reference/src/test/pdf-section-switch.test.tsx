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

function PdfUrlDisplay() {
  const { pdfUrl } = usePdf();
  return <div data-testid="pdf-url">{pdfUrl ?? "null"}</div>;
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

function mockCard(cardId: string) {
  vi.mocked(useRoute).mockReturnValue([true, { cardId }]);
  vi.mocked(useLocation).mockReturnValue([`/card/${cardId}`, vi.fn()]);
}

beforeEach(() => {
  mockCard("TC001");

  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;

  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
});

describe("CardDetail PDF viewer — section switching regression", () => {
  it("keeps PDF open when switching section tabs within the same card", () => {
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
    const { rerender } = render(
      <Wrapper>
        <OpenPdfButton />
        <PdfStatusDisplay />
        <CardDetail />
      </Wrapper>
    );

    fireEvent.click(screen.getByTestId("open-pdf"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    mockCard("TC002");

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

describe("CardDetail PDF availability contract", () => {
  it("exposes each card's own bundled PDF URL", () => {
    const { rerender } = render(
      <Wrapper>
        <PdfUrlDisplay />
        <CardDetail />
      </Wrapper>
    );

    expect(screen.getByTestId("pdf-url").textContent).toMatch(
      /cards\/TC001\/TC001_TwoCard_Combined\.pdf$/
    );

    mockCard("TC002");

    act(() => {
      rerender(
        <Wrapper>
          <PdfUrlDisplay />
          <CardDetail />
        </Wrapper>
      );
    });

    // Cards without a designed PDF ship a generated reference PDF
    expect(screen.getByTestId("pdf-url").textContent).toMatch(
      /cards\/TC002\/TC002_Reference\.pdf$/
    );
  });
});

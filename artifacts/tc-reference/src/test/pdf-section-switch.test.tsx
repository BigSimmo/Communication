import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
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
      <PdfProvider>{children}</PdfProvider>
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

describe("CardDetail PDF viewer: tab switching regression", () => {
  it("keeps PDF open when switching tabs within the same card", async () => {
    render(
      <Wrapper>
        <OpenPdfButton />
        <PdfStatusDisplay />
        <CardDetail />
      </Wrapper>,
    );

    await screen.findByRole("tab", { name: "Use it" });
    fireEvent.click(screen.getByTestId("open-pdf"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    fireEvent.click(screen.getByRole("tab", { name: "Learn it" }));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    // The Learn tab's jump row moves within the tab
    fireEvent.click(screen.getByTestId("jump-scenarios"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    fireEvent.click(screen.getByRole("tab", { name: "Practise it" }));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    fireEvent.click(screen.getByRole("tab", { name: "Use it" }));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");
  });

  it("closes PDF when navigating to a different card", async () => {
    const { rerender } = render(
      <Wrapper>
        <OpenPdfButton />
        <PdfStatusDisplay />
        <CardDetail />
      </Wrapper>,
    );

    await screen.findByRole("tab", { name: "Use it" });
    fireEvent.click(screen.getByTestId("open-pdf"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    mockCard("TC002");

    act(() => {
      rerender(
        <Wrapper>
          <OpenPdfButton />
          <PdfStatusDisplay />
          <CardDetail />
        </Wrapper>,
      );
    });

    await waitFor(() =>
      expect(screen.getByTestId("pdf-status").textContent).toBe("closed"),
    );
  });

  it("switching tabs rapidly keeps PDF open throughout", async () => {
    render(
      <Wrapper>
        <OpenPdfButton />
        <PdfStatusDisplay />
        <CardDetail />
      </Wrapper>,
    );

    await screen.findByRole("tab", { name: "Use it" });
    fireEvent.click(screen.getByTestId("open-pdf"));
    expect(screen.getByTestId("pdf-status").textContent).toBe("open");

    const tabs = [
      "Learn it",
      "Practise it",
      "Use it",
      "Practise it",
      "Learn it",
    ] as const;
    for (const name of tabs) {
      fireEvent.click(screen.getByRole("tab", { name }));
      expect(screen.getByTestId("pdf-status").textContent).toBe("open");
    }
  });
});

describe("CardDetail PDF availability contract", () => {
  it("exposes each card's own bundled PDF URL", async () => {
    const { rerender } = render(
      <Wrapper>
        <PdfUrlDisplay />
        <CardDetail />
      </Wrapper>,
    );

    await waitFor(() =>
      expect(screen.getByTestId("pdf-url").textContent).toMatch(
        /cards\/TC001\/TC001_TwoCard_Combined\.pdf$/,
      ),
    );

    mockCard("TC002");

    act(() => {
      rerender(
        <Wrapper>
          <PdfUrlDisplay />
          <CardDetail />
        </Wrapper>,
      );
    });

    // Every card now surfaces its designed two-card (combined) visual card as
    // the primary in-app PDF, extracted from the source technique package.
    await waitFor(() =>
      expect(screen.getByTestId("pdf-url").textContent).toMatch(
        /cards\/TC002\/TC002_TwoCard_Combined\.pdf$/,
      ),
    );
  });
});

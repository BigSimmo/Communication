import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation, useRoute } from "wouter";
import { SearchModal } from "../components/search-modal";
import { CARD_DATA } from "../lib/cards";
import { LIBRARY_CATEGORIES } from "../lib/data";
import { TC001 } from "../lib/cards/TC001";
import { FavouritesProvider } from "../lib/favourites-context";
import { PdfProvider } from "../lib/pdf-context";
import { QuickModeProvider, useQuickMode } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";
import CardDetail from "../pages/card-detail";
import Drill from "../pages/drill";
import Phrases from "../pages/phrases";
import { QuickModeOverlay } from "../components/quick-mode-overlay";
import { loadAllCards, loadCard } from "../lib/card-loader";

vi.mock("wouter");
vi.mock("../lib/card-loader", () => ({
  loadCard: vi.fn(),
  loadAllCards: vi.fn(),
}));

function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((done) => {
    resolve = done;
  });
  return { promise, resolve };
}

function OpenQuick() {
  const { setIsOpen } = useQuickMode();
  return <button onClick={() => setIsOpen(true)}>Open Quick</button>;
}

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  vi.mocked(useRoute).mockReturnValue([true, { cardId: "TC001" }]);
  vi.mocked(useLocation).mockReturnValue(["/card/TC001", vi.fn()]);
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockReturnValue({ matches: true }),
  });
});

describe("lazy card consumer transitions", () => {
  it("announces Card Detail loading before rendering the requested card", async () => {
    const card = deferred<typeof TC001 | null>();
    vi.mocked(loadCard).mockReturnValue(card.promise);

    render(
      <FavouritesProvider>
        <PdfProvider>
          <CardDetail />
        </PdfProvider>
      </FavouritesProvider>,
    );

    expect(screen.getByRole("status")).toHaveTextContent("Loading card");

    await act(async () => card.resolve(TC001));

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Live thread follow-ups",
    );
  });

  it("steps between cards with the arrow keys unless the user is typing", async () => {
    vi.mocked(loadCard).mockResolvedValue(TC001);
    const setLocation = vi.fn();
    vi.mocked(useLocation).mockReturnValue(["/card/TC001", setLocation]);
    const order = Object.values(LIBRARY_CATEGORIES)
      .flat()
      .map((c) => c.id);
    const i = order.indexOf("TC001");
    const prev = order[(i - 1 + order.length) % order.length];
    const next = order[(i + 1) % order.length];

    render(
      <FavouritesProvider>
        <PdfProvider>
          <CardDetail />
          <input aria-label="Typing field" />
        </PdfProvider>
      </FavouritesProvider>,
    );
    await screen.findByRole("heading", { level: 2 });

    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(setLocation).toHaveBeenLastCalledWith(`/card/${next}`);
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(setLocation).toHaveBeenLastCalledWith(`/card/${prev}`);

    setLocation.mockClear();
    fireEvent.keyDown(screen.getByLabelText("Typing field"), {
      key: "ArrowRight",
    });
    fireEvent.keyDown(window, { key: "ArrowRight", metaKey: true });
    // Focus on a section pill belongs to the section nav, not card paging
    fireEvent.keyDown(screen.getByTestId("nav-overview"), {
      key: "ArrowRight",
    });
    expect(setLocation).not.toHaveBeenCalled();
  });

  it("announces Quick Lookup aggregate loading and preserves 120 initial rows", async () => {
    // The shared location mock sits on a card route, which scopes Quick
    // Lookup to that card. This test covers the full cross-card list.
    vi.mocked(useLocation).mockReturnValue(["/", vi.fn()]);
    const cards = deferred<Record<string, typeof TC001>>();
    vi.mocked(loadAllCards).mockReturnValue(cards.promise);

    render(
      <QuickModeProvider>
        <FavouritesProvider>
          <OpenQuick />
          <QuickModeOverlay />
        </FavouritesProvider>
      </QuickModeProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open Quick" }));
    expect(screen.getByRole("status")).toHaveTextContent("Loading phrases");

    await act(async () => cards.resolve(CARD_DATA));

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getAllByTestId(/^quick-copy-/)).toHaveLength(120);
  });

  it("announces Drill loading before rendering the active card task", async () => {
    const card = deferred<typeof TC001 | null>();
    vi.mocked(loadCard).mockReturnValue(card.promise);

    render(<Drill />);

    expect(screen.getByRole("status")).toHaveTextContent("Loading drill");

    await act(async () => card.resolve(TC001));

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Daily Drill",
    );
    expect(screen.getByText(TC001.drill[0].task)).toBeInTheDocument();
  });

  it("keeps the completed Drill state if the next card cannot be prefetched", async () => {
    vi.mocked(loadCard)
      .mockResolvedValueOnce(TC001)
      .mockRejectedValueOnce(new Error("next card unavailable"));

    render(<Drill />);

    fireEvent.click(await screen.findByRole("button", { name: "Good — review later" }));

    expect(await screen.findByText("Great work — come back tomorrow")).toBeInTheDocument();
  });

  it("announces Phrase Bank loading before rendering aggregate phrases", async () => {
    const cards = deferred<Record<string, typeof TC001>>();
    vi.mocked(loadAllCards).mockReturnValue(cards.promise);

    render(
      <FavouritesProvider>
        <Phrases />
      </FavouritesProvider>,
    );

    expect(screen.getByRole("status")).toHaveTextContent("Loading phrases");

    await act(async () => cards.resolve({ TC001 }));

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Phrase Bank",
    );
    expect(screen.getAllByTestId("phrase-row-TC001").length).toBeGreaterThan(0);
  });

  it("announces smart-search index loading before showing results", async () => {
    const cards = deferred<Record<string, typeof TC001>>();
    vi.mocked(loadAllCards).mockReturnValue(cards.promise);

    render(
      <ThemeProvider>
        <SearchModal query="follow" setQuery={vi.fn()} onClose={vi.fn()} />
      </ThemeProvider>,
    );

    expect(screen.getByRole("status")).toHaveTextContent("Loading search index");

    await act(async () => cards.resolve({ TC001 }));

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.getByTestId("search-modal-result-TC001")).toBeInTheDocument();
  });
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation, useRoute } from "wouter";
import { TC001 } from "../lib/cards/TC001";
import { FavouritesProvider } from "../lib/favourites-context";
import { PdfProvider } from "../lib/pdf-context";
import { loadCard } from "../lib/card-loader";
import { difficultyLabel } from "../lib/design-tokens";
import { LIBRARY_CATEGORIES } from "../lib/data";
import { LibraryCardRow } from "../components/library/card-row";
import CardDetail from "../pages/card-detail";
import NotFound from "../pages/not-found";

vi.mock("wouter", () => ({
  useLocation: vi.fn(),
  useRoute: vi.fn(),
  // Link's history `state` is not an anchor attribute, so it is dropped.
  Link: ({
    href,
    children,
    className,
    "data-testid": testId,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    "data-testid"?: string;
  }) => (
    <a href={href} className={className} data-testid={testId}>
      {children}
    </a>
  ),
}));
vi.mock("../lib/card-loader", () => ({
  loadCard: vi.fn(),
  loadAllCards: vi.fn(),
}));

function renderCard() {
  return render(
    <FavouritesProvider>
      <PdfProvider>
        <CardDetail />
      </PdfProvider>
    </FavouritesProvider>,
  );
}

let setLocation: ReturnType<typeof vi.fn<(to: string) => void>>;

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  setLocation = vi.fn<(to: string) => void>();
  vi.mocked(useRoute).mockReturnValue([true, { cardId: "TC001" }]);
  vi.mocked(useLocation).mockReturnValue(["/card/TC001", setLocation]);
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof IntersectionObserver;
  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
});

describe("dead ends lead somewhere", () => {
  it("offers the Library, search and Help me right now on an unknown page", () => {
    vi.mocked(useLocation).mockReturnValue(["/nope", setLocation]);
    render(<NotFound />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Search techniques" }),
    ).toHaveAttribute("href", "/search");
    expect(
      screen.getByRole("link", { name: "Help me right now" }),
    ).toHaveAttribute("href", "/help");
    fireEvent.click(screen.getByRole("button", { name: "Back to Library" }));
    expect(setLocation).toHaveBeenCalledWith("/");
  });

  it("names the missing card and offers search", () => {
    vi.mocked(useRoute).mockReturnValue([true, { cardId: "TC999" }]);
    renderCard();

    expect(
      screen.getByRole("heading", { level: 2, name: "Card not found" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("card-not-found")).toHaveTextContent("TC999");
    expect(
      screen.getByRole("link", { name: "Search techniques" }),
    ).toBeInTheDocument();
  });

  it("lets a card that failed to load be tried again", async () => {
    vi.mocked(loadCard)
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValueOnce(TC001);
    renderCard();

    expect(
      await screen.findByRole("heading", { name: "This card didn't load" }),
    ).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(screen.getByTestId("card-load-retry"));
    });

    expect(
      await screen.findByRole("tab", { name: "Use it" }),
    ).toBeInTheDocument();
    expect(loadCard).toHaveBeenCalledTimes(2);
  });
});

describe("where next from Use it", () => {
  it("shows up to three related techniques before previous and next", async () => {
    vi.mocked(loadCard).mockResolvedValue(TC001);
    renderCard();
    await screen.findByRole("tab", { name: "Use it" });

    const panel = document.getElementById("card-panel-use")!;
    const related = TC001.relatedTechniques!;
    const shown = panel.querySelectorAll('[data-testid^="related-"]');
    expect(shown).toHaveLength(Math.min(3, related.length));
    expect(shown[0]).toHaveAttribute("data-testid", `related-${related[0].id}`);

    // Related sits before the previous/next pair
    const nav = panel.querySelector('nav[aria-label="Card navigation"]')!;
    expect(
      shown[0].compareDocumentPosition(nav) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    fireEvent.click(shown[0]);
    expect(setLocation).toHaveBeenCalledWith(`/card/${related[0].id}`);
  });
});

describe("Library row meta", () => {
  it("spells out difficulty and impact so they can't be confused", () => {
    const [category, cards] = Object.entries(LIBRARY_CATEGORIES)[0];
    const card = cards.find((c) => c.difficulty === "Easy-Medium") ?? cards[0];
    render(
      <ul>
        <LibraryCardRow
          card={card}
          category={category}
          fav={false}
          onToggleFav={vi.fn()}
          onOpen={vi.fn()}
          restoring={false}
        />
      </ul>,
    );

    expect(screen.getByTestId(`card-impact-${card.id}`)).toHaveTextContent(
      /^(High|Medium|Low) impact$/,
    );
    expect(
      screen.getByText(difficultyLabel(card.difficulty)),
    ).toBeInTheDocument();
  });

  it("reads hyphenated difficulty as words", () => {
    expect(difficultyLabel("Easy-Medium")).toBe("Easy to medium");
    expect(difficultyLabel("Hard")).toBe("Hard");
  });
});

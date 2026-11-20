import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import Library from "../pages/library";
import StartHere from "../pages/start";
import { CORE_CARD_IDS, LIBRARY_CATEGORIES } from "../lib/data";
import {
  markStartCardOpened,
  nextStartCard,
  readStartOpened,
} from "../lib/start-path";
import { recordRecentCard } from "../lib/recent-cards";
import { FavouritesProvider } from "../lib/favourites-context";
import { NavProvider } from "../lib/nav-context";
import { QuickModeProvider } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";
import { PdfProvider } from "../lib/pdf-context";

vi.mock("wouter", () => ({
  useLocation: vi.fn(),
  Link: ({
    href,
    children,
    ...props
  }: React.ComponentProps<"a"> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QuickModeProvider>
        <NavProvider>
          <FavouritesProvider>
            <PdfProvider>{children}</PdfProvider>
          </FavouritesProvider>
        </NavProvider>
      </QuickModeProvider>
    </ThemeProvider>
  );
}

const ALL = Object.values(LIBRARY_CATEGORIES).flat();
const cardIds = () =>
  Array.from(document.querySelectorAll<HTMLElement>("[data-library-card]")).map(
    (el) => el.dataset.libraryCard,
  );

beforeEach(() => {
  localStorage.clear();
  vi.mocked(useLocation).mockReturnValue(["/", vi.fn()]);
  Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe("Library home", () => {
  it("shows every technique's one-line summary", () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    const first = ALL[0];
    expect(screen.getByTestId(`card-summary-${first.id}`)).toHaveTextContent(
      first.summary,
    );
    expect(cardIds()).toHaveLength(ALL.length);
  });

  it("welcomes a first-time reader once, then shows Start here progress", () => {
    const view = render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    const welcome = screen.getByTestId("library-welcome");
    expect(
      within(welcome).getByTestId("library-welcome-start"),
    ).toHaveAttribute("href", "/start");
    fireEvent.click(within(welcome).getByTestId("library-welcome-browse"));
    expect(screen.queryByTestId("library-welcome")).not.toBeInTheDocument();
    expect(screen.getByTestId("library-start-here")).toHaveTextContent(
      `0 of ${CORE_CARD_IDS.length} opened`,
    );
    view.unmount();

    markStartCardOpened(CORE_CARD_IDS[0]);
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    expect(screen.queryByTestId("library-welcome")).not.toBeInTheDocument();
    expect(screen.getByTestId("library-start-here")).toHaveTextContent(
      `1 of ${CORE_CARD_IDS.length} opened`,
    );
  });

  it("offers Help me right now first, linking to the situation picker", () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    const help = screen.getByTestId("library-help-now");
    expect(help).toHaveAttribute("href", "/help");
    expect(help).toHaveAccessibleName(/Help me right now/);
    fireEvent.click(screen.getByTestId("category-chip-connection-warmth"));
    expect(screen.queryByTestId("library-help-now")).not.toBeInTheDocument();
  });

  it("skips the welcome for a reader who has already opened a card", () => {
    recordRecentCard("TC001");
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    expect(screen.queryByTestId("library-welcome")).not.toBeInTheDocument();
    expect(screen.getByTestId("library-start-here")).toBeInTheDocument();
  });

  it("filters by category chip and clears on a second tap", () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    const category = "Connection / Warmth";
    const chip = screen.getByTestId("category-chip-connection-warmth");
    fireEvent.click(chip);
    expect(chip).toHaveAttribute("aria-pressed", "true");
    expect(cardIds()).toEqual(LIBRARY_CATEGORIES[category].map((c) => c.id));
    fireEvent.click(chip);
    expect(screen.getByTestId("category-chip-all")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(cardIds()).toHaveLength(ALL.length);
  });

  it("sorts A to Z as one list across categories", () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    fireEvent.click(screen.getByTestId("sort-control"));
    fireEvent.click(screen.getByTestId("sort-control-option-az"));
    const expected = [...ALL]
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((c) => c.id);
    expect(cardIds()).toEqual(expected);
    expect(screen.getByTestId("category-section-sorted")).toHaveTextContent(
      "A to Z",
    );
  });

  it("keeps category groups when sorting Start here first", () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    fireEvent.click(screen.getByTestId("sort-control"));
    fireEvent.click(screen.getByTestId("sort-control-option-core"));
    expect(
      screen.getByTestId("category-section-voice-presence"),
    ).toBeInTheDocument();
  });
});

describe("Start here path", () => {
  it("only records core cards, in path order", () => {
    markStartCardOpened(CORE_CARD_IDS[2]);
    markStartCardOpened(CORE_CARD_IDS[0]);
    markStartCardOpened(CORE_CARD_IDS[0]);
    const notCore = ALL.find((c) => !CORE_CARD_IDS.includes(c.id));
    markStartCardOpened(notCore?.id ?? "TC999");
    expect(readStartOpened()).toEqual([CORE_CARD_IDS[0], CORE_CARD_IDS[2]]);
    expect(nextStartCard(readStartOpened())).toBe(CORE_CARD_IDS[1]);
    expect(nextStartCard(CORE_CARD_IDS)).toBeNull();
  });

  it("ignores corrupt stored progress", () => {
    localStorage.setItem("tc_start_opened", "{not json");
    expect(readStartOpened()).toEqual([]);
    localStorage.setItem("tc_start_opened", JSON.stringify([1, "nope"]));
    expect(readStartOpened()).toEqual([]);
  });

  it("lists the core cards in order and points at the next one", () => {
    markStartCardOpened(CORE_CARD_IDS[0]);
    vi.mocked(useLocation).mockReturnValue(["/start", vi.fn()]);
    render(
      <Wrapper>
        <StartHere />
      </Wrapper>,
    );
    expect(
      screen.getByRole("heading", { level: 1, name: "Start here" }),
    ).toBeInTheDocument();
    const steps = within(screen.getByTestId("start-steps")).getAllByRole(
      "link",
    );
    expect(steps.map((s) => s.getAttribute("href"))).toEqual(
      CORE_CARD_IDS.map((id) => `/card/${id}`),
    );
    expect(screen.getByTestId("start-progress")).toHaveTextContent(
      `1 of ${CORE_CARD_IDS.length} opened`,
    );
    expect(screen.getByTestId("start-next")).toHaveAttribute(
      "href",
      `/card/${CORE_CARD_IDS[1]}`,
    );
    expect(
      screen.getByTestId(`start-step-${CORE_CARD_IDS[1]}`),
    ).toHaveAttribute("aria-current", "step");
  });

  it("points to the Daily Drill once every core card is opened", () => {
    CORE_CARD_IDS.forEach(markStartCardOpened);
    render(
      <Wrapper>
        <StartHere />
      </Wrapper>,
    );
    expect(screen.queryByTestId("start-next")).not.toBeInTheDocument();
    expect(screen.getByTestId("start-complete")).toHaveTextContent(
      "Daily Drill",
    );
  });
});

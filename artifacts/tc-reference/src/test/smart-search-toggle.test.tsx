import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, beforeAll, beforeEach, vi } from "vitest";
import { useLocation } from "wouter";
import { AppHeader } from "../components/app-header";
import { SearchModal } from "../components/search-modal";
import {
  SEARCH_ENTRY_STATE,
  SEARCH_INPUT_ID,
} from "../components/search/search-nav";
import Library from "../pages/library";
import { FavouritesProvider } from "../lib/favourites-context";
import { NavProvider } from "../lib/nav-context";
import { QuickModeProvider } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";
import { PdfProvider } from "../lib/pdf-context";

vi.mock("wouter");

beforeAll(async () => {
  // Warm the lazy search hand-over once so these interaction tests measure
  // the behavior rather than module-loader contention from the suite.
  await import("../components/search-modal");
});

const navigate = vi.fn();

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

beforeEach(() => {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    value: 1024,
  });
  navigate.mockClear();
  vi.mocked(useLocation).mockReturnValue(["/", navigate]);

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

// Search is the full-screen /search route. The header button, the Library's
// search field and Ctrl/Cmd+K still "open search" through the nav context;
// what opens is a hand-over that sends the reader to the search screen.
describe("opening search from the header and the Library", () => {
  it("goes to the search screen from the Library search field", async () => {
    render(
      <Wrapper>
        <AppHeader />
        <Library />
      </Wrapper>,
    );
    const input = screen.getByTestId("library-search-input");
    expect(input).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(input);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/search", {
        state: SEARCH_ENTRY_STATE,
      });
      expect(input).toHaveAttribute("aria-expanded", "false");
    });
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("goes to the search screen from the header search button", async () => {
    vi.mocked(useLocation).mockReturnValue(["/phrases", navigate]);
    render(
      <Wrapper>
        <AppHeader />
      </Wrapper>,
    );
    const button = screen.getByTestId("button-header-search");

    fireEvent.click(button);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/search", {
        state: SEARCH_ENTRY_STATE,
      });
      expect(button).toHaveAttribute("aria-expanded", "false");
    });
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  it.each(["metaKey", "ctrlKey"])(
    "goes to the search screen on K with %s",
    async (modifier) => {
      render(
        <Wrapper>
          <AppHeader />
        </Wrapper>,
      );

      fireEvent.keyDown(window, { key: "k", [modifier]: true });

      await waitFor(() =>
        expect(navigate).toHaveBeenCalledWith("/search", {
          state: SEARCH_ENTRY_STATE,
        }),
      );
      expect(navigate).toHaveBeenCalledTimes(1);
    },
  );

  it("takes what was typed along and hands the field back empty", () => {
    const setQuery = vi.fn();
    const onClose = vi.fn();
    const { container } = render(
      <SearchModal query="say no" setQuery={setQuery} onClose={onClose} />,
    );

    expect(navigate).toHaveBeenCalledWith("/search?q=say+no", {
      state: SEARCH_ENTRY_STATE,
    });
    expect(setQuery).toHaveBeenCalledWith("");
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(container).toBeEmptyDOMElement();
  });

  it("puts the cursor back in the field when search is already open", () => {
    vi.mocked(useLocation).mockReturnValue(["/search", navigate]);
    const onClose = vi.fn();
    render(
      <>
        <input id={SEARCH_INPUT_ID} aria-label="Search" />
        <SearchModal query="" setQuery={vi.fn()} onClose={onClose} />
      </>,
    );

    expect(navigate).not.toHaveBeenCalled();
    expect(screen.getByLabelText("Search")).toHaveFocus();
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("shows and hides the header details from the slider button", () => {
    render(
      <Wrapper>
        <AppHeader />
        <Library />
      </Wrapper>,
    );

    const toggle = screen.getByTestId("button-header-details-toggle");
    const details = screen.getByTestId("library-header-details");

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(details).toHaveAttribute("aria-hidden", "false");

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(details).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(details).toHaveAttribute("aria-hidden", "false");
    expect(navigate).not.toHaveBeenCalled();
  });

  it("consumes the one-shot suppression marker before opening search", () => {
    render(
      <Wrapper>
        <AppHeader />
        <Library />
      </Wrapper>,
    );

    const input = screen.getByTestId("library-search-input");
    input.setAttribute("data-suppress-search-open", "true");

    fireEvent.focus(input);

    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(input).not.toHaveAttribute("data-suppress-search-open");
    expect(navigate).not.toHaveBeenCalled();
  });

  it("shows the filter toggle on the Library and a search button elsewhere", () => {
    const { unmount } = render(
      <Wrapper>
        <AppHeader />
      </Wrapper>,
    );
    expect(
      screen.getByTestId("button-header-details-toggle"),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("button-header-search"),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("button-header-menu")).not.toBeInTheDocument();
    unmount();

    vi.mocked(useLocation).mockReturnValue(["/phrases", navigate]);
    render(
      <Wrapper>
        <AppHeader />
      </Wrapper>,
    );
    expect(
      screen.queryByTestId("button-header-details-toggle"),
    ).not.toBeInTheDocument();
    const search = screen.getByTestId("button-header-search");
    expect(search).toHaveAttribute("aria-expanded", "false");
  });
});

import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { describe, expect, it, beforeAll, beforeEach, vi } from "vitest";
import { useLocation } from "wouter";
import { AppHeader } from "../components/app-header";
import Library from "../pages/library";
import { FavouritesProvider } from "../lib/favourites-context";
import { NavProvider } from "../lib/nav-context";
import { QuickModeProvider } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";
import { PdfProvider } from "../lib/pdf-context";

vi.mock("wouter");

beforeAll(async () => {
  // Warm the lazy search module once so this interaction test measures the
  // behavior rather than filesystem/module-loader contention from the suite.
  await import("../components/search-modal");
});

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
  vi.mocked(useLocation).mockReturnValue(["/", vi.fn()]);

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

describe("Library smart search toggle", () => {
  it.each(["", "follow"])(
    "lets the actual narrow modal input shrink with query %j",
    async (query) => {
      Object.defineProperty(window, "innerWidth", {
        configurable: true,
        value: 320,
      });
      render(
        <Wrapper>
          <AppHeader />
          <Library />
        </Wrapper>,
      );
      fireEvent.click(screen.getByTestId("library-search-input"));
      const input = await screen.findByTestId("search-modal-input");
      if (query) fireEvent.change(input, { target: { value: query } });
      expect(input).toHaveClass("flex-1", "min-w-0");
      expect(screen.getByRole("button", { name: "Close search" })).toHaveClass(
        "flex-shrink-0",
      );
      if (query) {
        const clear = within(screen.getByTestId("search-modal")).getByRole(
          "button",
          { name: "Clear search" },
        );
        expect(clear).toHaveClass("flex-shrink-0");
        fireEvent.click(clear);
        expect(input).toHaveValue("");
        expect(
          screen.queryByRole("button", { name: "Clear search" }),
        ).not.toBeInTheDocument();
      }
    },
  );

  it.each(["close button", "backdrop"])(
    "dismisses via %s and restores the opener without reopening",
    async (method) => {
      render(
        <Wrapper>
          <AppHeader />
          <Library />
        </Wrapper>,
      );
      const opener = screen.getByTestId("library-search-input");
      fireEvent.click(opener);
      const modal = await screen.findByTestId("search-modal");
      if (method === "close button")
        fireEvent.click(screen.getByRole("button", { name: "Close search" }));
      else fireEvent.mouseDown(modal);
      await waitFor(() => {
        expect(screen.queryByTestId("search-modal")).not.toBeInTheDocument();
        expect(opener).toHaveAttribute("aria-expanded", "false");
        expect(opener).toHaveFocus();
      });
    },
  );

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
    expect(screen.queryByTestId("search-modal")).not.toBeInTheDocument();

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(details).toHaveAttribute("aria-hidden", "true");
    expect(screen.queryByTestId("search-modal")).not.toBeInTheDocument();

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(details).toHaveAttribute("aria-hidden", "false");
  });

  it("opens the popout from the library search input", async () => {
    render(
      <Wrapper>
        <AppHeader />
        <Library />
      </Wrapper>,
    );

    const input = screen.getByTestId("library-search-input");

    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByTestId("search-modal")).not.toBeInTheDocument();

    fireEvent.click(input);

    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(await screen.findByTestId("search-modal")).toBeInTheDocument();
    expect(screen.getByText("Smart starts")).toBeInTheDocument();
  });

  it("closes with Escape without reopening from restored focus", async () => {
    render(
      <Wrapper>
        <AppHeader />
        <Library />
      </Wrapper>,
    );

    const input = screen.getByTestId("library-search-input");
    fireEvent.click(input);
    await screen.findByTestId("search-modal");

    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByTestId("search-modal")).not.toBeInTheDocument();
      expect(input).toHaveAttribute("aria-expanded", "false");
      expect(input).toHaveFocus();
    });
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

    expect(screen.queryByTestId("search-modal")).not.toBeInTheDocument();
    expect(input).not.toHaveAttribute("data-suppress-search-open");
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

    vi.mocked(useLocation).mockReturnValue(["/phrases", vi.fn()]);
    render(
      <Wrapper>
        <AppHeader />
      </Wrapper>,
    );
    expect(
      screen.queryByTestId("button-header-details-toggle"),
    ).not.toBeInTheDocument();
    const search = screen.getByTestId("button-header-search");
    expect(search).toHaveAttribute("aria-controls", "search-popout-panel");
    expect(search).toHaveAttribute("aria-expanded", "false");
  });
});

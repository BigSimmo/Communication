import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach, vi } from "vitest";
import { useLocation } from "wouter";
import { AppHeader } from "../components/app-header";
import Library from "../pages/library";
import { FavouritesProvider } from "../lib/favourites-context";
import { NavProvider } from "../lib/nav-context";
import { QuickModeProvider } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";

vi.mock("wouter");

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QuickModeProvider>
        <NavProvider>
          <FavouritesProvider>{children}</FavouritesProvider>
        </NavProvider>
      </QuickModeProvider>
    </ThemeProvider>
  );
}

beforeEach(() => {
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
  it("shows and hides the header details from the slider button", () => {
    render(
      <Wrapper>
        <AppHeader />
        <Library />
      </Wrapper>
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
      </Wrapper>
    );

    const input = screen.getByTestId("library-search-input");

    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByTestId("search-modal")).not.toBeInTheDocument();

    fireEvent.click(input);

    expect(input).toHaveAttribute("aria-expanded", "true");
    // The search modal is lazy-loaded; allow extra time so a slow/loaded CI box
    // doesn't flake on the default 1000ms find timeout.
    expect(await screen.findByTestId("search-modal", undefined, { timeout: 5000 })).toBeInTheDocument();
    expect(screen.getByText("Smart starts")).toBeInTheDocument();
  });

  it("keeps only the organized menu trigger in the header", () => {
    const toggleMenu = vi.fn();

    render(
      <Wrapper>
        <AppHeader
          menuOpen={false}
          onToggleMenu={toggleMenu}
        />
      </Wrapper>
    );

    const menuButton = screen.getByTestId("button-header-menu");

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveAttribute("aria-controls", "mobile-organized-menu");
    expect(screen.queryByTestId("button-header-menu-layout")).not.toBeInTheDocument();

    fireEvent.click(menuButton);

    expect(toggleMenu).toHaveBeenCalledTimes(1);
  });
});

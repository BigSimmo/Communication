import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
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

describe("Library single line filter bar", () => {
  it("holds all four controls in one toolbar", () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );

    const bar = screen.getByRole("toolbar", {
      name: "Filter and sort techniques",
    });
    for (const id of [
      "filter-category",
      "filter-impact",
      "filter-difficulty",
      "sort-control",
    ]) {
      expect(within(bar).getByTestId(id)).toBeInTheDocument();
    }
  });

  it("applies a filter and shows the short sort label on the trigger", () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );

    fireEvent.click(screen.getByTestId("filter-impact"));
    fireEvent.click(screen.getByTestId("filter-impact-option-high"));
    expect(screen.getByTestId("filter-impact")).toHaveAttribute(
      "aria-label",
      "Impact filter: High",
    );

    fireEvent.click(screen.getByTestId("sort-control"));
    fireEvent.click(screen.getByTestId("sort-control-option-impact"));
    const sort = screen.getByTestId("sort-control");
    expect(sort).toHaveTextContent("Impact");
    expect(sort).not.toHaveTextContent("high first");
    expect(screen.getByTestId("reset-filters")).toHaveTextContent("2");
  });
});

describe("App header compact mode", () => {
  it("shrinks while scrolling down and restores on scroll up", async () => {
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 5000,
    });
    render(
      <Wrapper>
        <AppHeader />
      </Wrapper>,
    );
    const header = screen.getByTestId("app-header");
    expect(header).toHaveAttribute("data-compact", "false");

    const scrollTo = (y: number) =>
      act(() => {
        Object.defineProperty(window, "scrollY", { configurable: true, value: y });
        window.dispatchEvent(new Event("scroll"));
      });

    await scrollTo(200);
    await waitFor(() => expect(header).toHaveAttribute("data-compact", "true"));
    await waitFor(() =>
      expect(
        document.documentElement.style.getPropertyValue("--app-header-height"),
      ).toContain("34px"),
    );

    await scrollTo(150);
    await waitFor(() => expect(header).toHaveAttribute("data-compact", "false"));
  });
});

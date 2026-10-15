import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, beforeEach, vi } from "vitest";
import { useLocation } from "wouter";
import Library from "../pages/library";
import { FavouritesProvider } from "../lib/favourites-context";
import { NavProvider } from "../lib/nav-context";
import { QuickModeProvider } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";
import { PdfProvider } from "../lib/pdf-context";
import { LIBRARY_CATEGORIES } from "../lib/data";

vi.mock("wouter");

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

const flushFrame = () =>
  act(
    () =>
      new Promise<void>((resolve) => requestAnimationFrame(() => resolve())),
  );

describe("Library phone filter sheet", () => {
  it("filters by category, updates the count and returns focus on close", async () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );

    const trigger = screen.getByTestId("library-filters-button");
    expect(trigger).toHaveAccessibleName("Filters");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    trigger.focus();
    fireEvent.click(trigger);
    const sheet = screen.getByRole("dialog", { name: "Filters" });
    expect(sheet).toHaveAttribute("aria-modal", "true");
    expect(document.documentElement.style.overflow).toBe("hidden");
    await flushFrame();
    expect(sheet).toContainElement(document.activeElement as HTMLElement);

    const total = Object.values(LIBRARY_CATEGORIES).flat().length;
    const showButton = within(sheet).getByTestId("library-filter-sheet-show");
    expect(showButton).toHaveTextContent(`Show ${total} techniques`);

    const category = "Voice / Presence";
    const expected = LIBRARY_CATEGORIES[category].length;
    const chip = within(sheet).getByTestId("sheet-category-voice-presence");
    fireEvent.click(chip);
    expect(chip).toHaveAttribute("aria-pressed", "true");
    expect(showButton).toHaveTextContent(`Show ${expected} techniques`);
    expect(screen.getByTestId("library-result-count")).toHaveTextContent(
      `${expected} of`,
    );
    expect(trigger).toHaveAccessibleName("Filters, 1 active: Voice");
    expect(screen.getByTestId("library-filters-count")).toHaveTextContent("1");

    // The segmented bar (400px and up) stays in sync
    expect(screen.getByTestId("filter-category")).toHaveAttribute(
      "aria-label",
      `Category filter: ${category}`,
    );

    fireEvent.click(showButton);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.documentElement.style.overflow).toBe("");
  });

  it("closes on Escape and the backdrop, and Clear all resets choices", () => {
    render(
      <Wrapper>
        <Library />
      </Wrapper>,
    );
    const trigger = screen.getByTestId("library-filters-button");

    fireEvent.click(trigger);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();

    fireEvent.click(trigger);
    const sheet = screen.getByRole("dialog");
    const clear = within(sheet).getByTestId("library-filter-sheet-clear");
    expect(clear).toBeDisabled();
    fireEvent.click(within(sheet).getByTestId("sheet-impact-high"));
    fireEvent.click(within(sheet).getByTestId("sheet-sort-difficulty"));
    expect(trigger).toHaveAccessibleName("Filters, 2 active: High, Easiest");
    fireEvent.click(clear);
    expect(trigger).toHaveAccessibleName("Filters");
    expect(within(sheet).getByTestId("sheet-impact-all")).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    fireEvent.click(screen.getByTestId("library-filter-sheet-backdrop"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { QuickModeOverlay } from "../components/quick-mode-overlay";
import { FavouritesProvider } from "../lib/favourites-context";
import { QuickModeProvider, useQuickMode } from "../lib/quick-mode";

function OpenQuick() {
  const { setIsOpen } = useQuickMode();
  return <button onClick={() => setIsOpen(true)}>Open Quick</button>;
}

describe("Quick Lookup rendering", () => {
  it("bounds the initial phrase rows and progressively reveals more", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    });

    render(
      <QuickModeProvider>
        <FavouritesProvider>
          <OpenQuick />
          <QuickModeOverlay />
        </FavouritesProvider>
      </QuickModeProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Open Quick" }));

    const initialRows = screen.getAllByTestId(/^quick-copy-/);
    expect(initialRows).toHaveLength(120);
    expect(initialRows[0].tagName).toBe("BUTTON");
    expect(
      within(initialRows[0].parentElement!).getByRole("button", { name: /save phrase/i }),
    ).toHaveClass("quick-phrase-favourite");

    fireEvent.click(screen.getByRole("button", { name: /show more phrases/i }));
    expect(screen.getAllByTestId(/^quick-copy-/)).toHaveLength(240);

    fireEvent.click(screen.getByTestId("button-quick-close"));
    fireEvent.click(screen.getByRole("button", { name: "Open Quick" }));
    expect(screen.getAllByTestId(/^quick-copy-/)).toHaveLength(120);

    const filter = document.querySelector<HTMLElement>(
      '[data-testid^="quick-filter-"]:not([data-testid="quick-filter-all"])',
    );
    expect(filter).not.toBeNull();
    fireEvent.click(filter!);
    expect(screen.getAllByTestId(/^quick-copy-/).length).toBeLessThanOrEqual(120);
  });
});

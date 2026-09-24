import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { QuickModeOverlay } from "../components/quick-mode-overlay";
import { loadAllCards } from "../lib/card-loader";
import type { CardData } from "../lib/card-types";
import { FavouritesProvider } from "../lib/favourites-context";
import { QuickModeProvider, useQuickMode } from "../lib/quick-mode";

vi.mock("../lib/card-loader", () => ({
  loadAllCards: vi.fn(),
}));

const quickPhraseAggregate = {
  TC001: {
    phraseBank: [
      {
        id: "fixture",
        label: "Fixture phrases",
        tag: "Quick",
        phrases: Array.from(
          { length: 241 },
          (_, index) => `Fixture phrase ${index + 1}`,
        ),
      },
    ],
  } as CardData,
};

function OpenQuick() {
  const { setIsOpen } = useQuickMode();
  return <button onClick={() => setIsOpen(true)}>Open Quick</button>;
}

beforeEach(() => {
  vi.mocked(loadAllCards).mockResolvedValue(quickPhraseAggregate);
});

describe("Quick Lookup rendering", () => {
  it("bounds the initial phrase rows and progressively reveals more", async () => {
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

    const initialRows = await screen.findAllByTestId(/^quick-copy-/);
    expect(initialRows).toHaveLength(120);
    expect(loadAllCards).toHaveBeenCalledTimes(1);
    expect(initialRows[0].tagName).toBe("BUTTON");
    expect(
      within(initialRows[0].parentElement!).getByRole("button", {
        name: /save to favourites/i,
      }),
    ).toHaveClass("quick-phrase-favourite");

    fireEvent.click(screen.getByRole("button", { name: /show more phrases/i }));
    expect(screen.getAllByTestId(/^quick-copy-/)).toHaveLength(240);

    fireEvent.click(screen.getByTestId("button-quick-close"));
    fireEvent.click(screen.getByRole("button", { name: "Open Quick" }));
    await waitFor(() =>
      expect(screen.getAllByTestId(/^quick-copy-/)).toHaveLength(120),
    );

    const filter = document.querySelector<HTMLElement>(
      '[data-testid^="quick-filter-"]:not([data-testid="quick-filter-all"])',
    );
    expect(filter).not.toBeNull();
    fireEvent.click(filter!);
    expect(screen.getAllByTestId(/^quick-copy-/).length).toBeLessThanOrEqual(
      120,
    );
  });
});

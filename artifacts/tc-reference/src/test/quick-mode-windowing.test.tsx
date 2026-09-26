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

describe("Quick Lookup de-duplication and card scope", () => {
  const sharedAggregate = {
    TC001: {
      phraseBank: [
        {
          id: "openers",
          label: "Openers",
          tag: "Quick",
          phrases: ["Shared line", "Only in one"],
        },
      ],
    } as CardData,
    TC002: {
      phraseBank: [
        {
          id: "openers",
          label: "Openers",
          tag: "Quick",
          phrases: ["shared line ", "Only in two"],
        },
      ],
    } as CardData,
  };

  // The overlay caches its aggregate at module level, so load fresh module
  // instances (overlay, providers and the mocked loader) for each test.
  async function renderQuick() {
    vi.resetModules();
    const loader = await import("../lib/card-loader");
    vi.mocked(loader.loadAllCards).mockResolvedValue(sharedAggregate);
    const { QuickModeOverlay: Overlay } =
      await import("../components/quick-mode-overlay");
    const quick = await import("../lib/quick-mode");
    const favs = await import("../lib/favourites-context");
    function Open() {
      const { setIsOpen } = quick.useQuickMode();
      return <button onClick={() => setIsOpen(true)}>Open Quick</button>;
    }
    render(
      <quick.QuickModeProvider>
        <favs.FavouritesProvider>
          <Open />
          <Overlay />
        </favs.FavouritesProvider>
      </quick.QuickModeProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Open Quick" }));
  }

  it("shows a line shared by several cards once", async () => {
    window.history.replaceState(null, "", "/");
    await renderQuick();
    await screen.findByText("Only in two");
    expect(screen.getAllByText(/^shared line/i)).toHaveLength(1);
    expect(screen.queryByTestId("quick-scope-card")).not.toBeInTheDocument();
  });

  it("defaults to the open card and can widen to all cards", async () => {
    window.history.replaceState(null, "", "/card/TC002");
    await renderQuick();
    await screen.findByText("Only in two");
    expect(screen.getByTestId("quick-scope-card")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    // The shared line still counts as TC002's even though TC001 listed it first
    expect(screen.getByText(/^shared line/i)).toBeInTheDocument();
    expect(screen.queryByText("Only in one")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("quick-scope-all"));
    expect(await screen.findByText("Only in one")).toBeInTheDocument();
    window.history.replaceState(null, "", "/");
  });
});

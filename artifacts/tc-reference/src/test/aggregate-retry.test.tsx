import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import { QuickModeOverlay } from "../components/quick-mode-overlay";
import { SearchModal } from "../components/search-modal";
import { createCardLoader, loadAllCards } from "../lib/card-loader";
import { TC001 } from "../lib/cards/TC001";
import { FavouritesProvider } from "../lib/favourites-context";
import { loadAllAggregatedPhrases } from "../lib/phrases-data";
import { QuickModeProvider, useQuickMode } from "../lib/quick-mode";
import { searchCards } from "../lib/search-index";
import { ThemeProvider } from "../lib/theme";
import Phrases from "../pages/phrases";

vi.mock("wouter");
vi.mock("../lib/card-loader", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../lib/card-loader")>()),
  loadAllCards: vi.fn(),
}));

const moduleLoader = vi.fn();

function OpenQuick() {
  const { setIsOpen } = useQuickMode();
  return <button onClick={() => setIsOpen(true)}>Open Quick</button>;
}

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  vi.mocked(useLocation).mockReturnValue(["/", vi.fn()]);
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockReturnValue({ matches: true }),
  });
  // Exercise the real retry-safe card loader beneath each derived cache.
  moduleLoader
    .mockReset()
    .mockRejectedValueOnce(new Error("chunk unavailable"))
    .mockResolvedValue({ TC001 });
  const loader = createCardLoader(new Map([["TC001", moduleLoader]]));
  vi.mocked(loadAllCards).mockImplementation(loader.loadAllCards);
});

describe("derived aggregate retry", () => {
  it("retries Quick after closing and reopening, then shares successful data on remount", async () => {
    const quick = (
      <QuickModeProvider>
        <FavouritesProvider>
          <OpenQuick />
          <QuickModeOverlay />
        </FavouritesProvider>
      </QuickModeProvider>
    );
    let view = render(quick);
    fireEvent.click(screen.getByText("Open Quick"));
    expect(
      await screen.findByText("Phrases are unavailable right now."),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("button-quick-close"));
    fireEvent.click(screen.getByText("Open Quick"));
    expect(
      (await screen.findAllByTestId(/^quick-copy-/)).length,
    ).toBeGreaterThan(0);
    view.unmount();
    view = render(quick);
    fireEvent.click(screen.getByText("Open Quick"));
    expect(
      (await screen.findAllByTestId(/^quick-copy-/)).length,
    ).toBeGreaterThan(0);
    expect(loadAllCards).toHaveBeenCalledTimes(2);
    expect(moduleLoader).toHaveBeenCalledTimes(2);
    view.unmount();
  });

  it("retries Phrase Bank on remount and shares pending and successful aggregates", async () => {
    const phrases = (
      <FavouritesProvider>
        <Phrases />
      </FavouritesProvider>
    );
    const first = render(phrases);
    const failed = loadAllAggregatedPhrases();
    expect(loadAllAggregatedPhrases()).toBe(failed);
    await act(async () => {
      await expect(failed).rejects.toThrow("chunk unavailable");
    });
    expect(
      await screen.findByText("Phrase Bank is unavailable right now."),
    ).toBeInTheDocument();
    first.unmount();

    render(phrases);
    const retry = loadAllAggregatedPhrases();
    expect(retry).not.toBe(failed);
    expect(loadAllAggregatedPhrases()).toBe(retry);
    expect(
      (await screen.findAllByTestId("phrase-row-TC001")).length,
    ).toBeGreaterThan(0);
    expect(await retry).toEqual(
      expect.arrayContaining([expect.objectContaining({ cardId: "TC001" })]),
    );
    expect(loadAllAggregatedPhrases()).toBe(retry);
    expect(loadAllCards).toHaveBeenCalledTimes(2);
    expect(moduleLoader).toHaveBeenCalledTimes(2);
  });

  it("retries the search corpus after reopening and shares it across queries", async () => {
    const search = (
      <ThemeProvider>
        <SearchModal query="follow" setQuery={vi.fn()} onClose={vi.fn()} />
      </ThemeProvider>
    );
    const first = render(search);
    const failedSearch = searchCards("TC001");
    await act(async () => {
      await expect(failedSearch).rejects.toThrow("chunk unavailable");
    });
    expect(
      await screen.findByText("Search is unavailable right now."),
    ).toBeInTheDocument();
    first.unmount();

    render(search);
    const retry = searchCards("TC001");
    // Attach rejection handling immediately so the RED cannot leak an unhandled promise.
    const retryResult = retry.catch((error: unknown) => error);
    expect(
      await screen.findByTestId("search-modal-result-TC001"),
    ).toBeInTheDocument();
    expect(await retryResult).toEqual([
      expect.objectContaining({ id: "TC001" }),
    ]);
    expect(await searchCards("follow")).toEqual([
      expect.objectContaining({ id: "TC001" }),
    ]);
    expect(loadAllCards).toHaveBeenCalledTimes(2);
    expect(moduleLoader).toHaveBeenCalledTimes(2);
  });
});

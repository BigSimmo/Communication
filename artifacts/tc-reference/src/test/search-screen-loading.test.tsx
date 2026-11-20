// The search screen while its index is still loading, when the load fails,
// and after "Try again". One test, in order, because the engine is built
// once per module: a second test here would find it already loaded.
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SearchScreen } from "../components/search/search-screen";
import { createCardLoader, loadAllCards } from "../lib/card-loader";
import { TC001 } from "../lib/cards/TC001";
import { searchCards } from "../lib/search-index";

vi.mock("../lib/card-loader", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../lib/card-loader")>()),
  loadAllCards: vi.fn(),
}));

const moduleLoader = vi.fn();

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  window.history.replaceState(null, "", "/search?q=follow");
});

describe("search screen while the index loads", () => {
  it("says it is getting ready, offers a retry after a failure, then shares the loaded index", async () => {
    let failFirstLoad!: (reason: Error) => void;
    const firstLoad = new Promise<never>((_, reject) => {
      failFirstLoad = reject;
    });
    // The real retry-safe card loader sits beneath the search engine.
    moduleLoader
      .mockReset()
      .mockReturnValueOnce(firstLoad)
      .mockResolvedValue({ TC001 });
    const loader = createCardLoader(new Map([["TC001", moduleLoader]]));
    vi.mocked(loadAllCards).mockImplementation(loader.loadAllCards);

    render(
      <SearchScreen
        query="follow"
        onQueryChange={vi.fn()}
        kind="all"
        onKindChange={vi.fn()}
        category={null}
        onCancel={vi.fn()}
        onLeave={vi.fn()}
      />,
    );

    expect(screen.getByText("Getting search ready…")).toHaveAttribute(
      "role",
      "status",
    );
    expect(screen.queryByTestId("search-results")).not.toBeInTheDocument();

    // The card modules are asked for a moment after the screen appears.
    await waitFor(() => expect(moduleLoader).toHaveBeenCalledTimes(1));
    await act(async () => failFirstLoad(new Error("chunk unavailable")));

    expect(
      await screen.findByText("Search is unavailable right now."),
    ).toHaveAttribute("role", "status");

    fireEvent.click(screen.getByRole("button", { name: "Try again" }));

    const result = await screen.findByTestId("search-technique-TC001");
    expect(result).toHaveAttribute("href", "/card/TC001");
    expect(result).toHaveTextContent("Live thread follow-ups");
    expect(
      screen.queryByText("Search is unavailable right now."),
    ).not.toBeInTheDocument();

    // A failed load is not kept, and the successful one is shared.
    expect(await searchCards("follow")).toEqual([
      expect.objectContaining({ id: "TC001" }),
    ]);
    expect(loadAllCards).toHaveBeenCalledTimes(2);
    expect(moduleLoader).toHaveBeenCalledTimes(2);
  });
});

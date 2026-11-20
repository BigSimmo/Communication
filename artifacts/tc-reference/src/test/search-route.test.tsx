// The /search route inside the real App, with real Wouter history, lazy
// routes and the full card catalogue: getting in, the address keeping up
// with typing, Back from a result, and Cancel.
import {
  act,
  cleanup,
  configure,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";
import { LIBRARY_CATEGORIES } from "../lib/data";

const TITLES = new Map(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((card) => [card.id, card.title]),
);

const field = () => screen.findByTestId<HTMLInputElement>("search-input");

beforeEach(() => {
  // Real lazy route imports can exceed Testing Library's 1s default on CI.
  configure({ asyncUtilTimeout: 10000 });
  localStorage.clear();
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  vi.stubGlobal("scrollTo", vi.fn());
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => true,
  }));
});

afterEach(() => {
  cleanup();
  configure({ asyncUtilTimeout: 1000 });
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("the search screen in the app", () => {
  it.each(["/", "/reference/"])(
    "opens from the Library, survives Back from a result and cancels in one step at base %s",
    async (baseUrl) => {
      vi.stubEnv("BASE_URL", baseUrl);
      const base = baseUrl.replace(/\/$/, "");
      window.history.replaceState(null, "", `${base}/`);
      render(<App />);

      fireEvent.click(await screen.findByTestId("library-search-input"));

      const input = await field();
      expect(window.location.pathname).toBe(`${base}/search`);
      expect(screen.getByTestId("search-start")).toBeInTheDocument();
      expect(input).toHaveFocus();

      // A typo still finds the technique, and the address catches up.
      fireEvent.change(input, { target: { value: "apolg" } });
      expect(await screen.findByTestId("search-corrected")).toHaveTextContent(
        "Showing results for apology",
      );
      const best = within(screen.getByTestId("search-best-match")).getByRole(
        "link",
      );
      const cardId = best.getAttribute("href")!.split("/").pop()!;
      expect(TITLES.get(cardId)).toBe("Effective apology");
      await waitFor(() => expect(window.location.search).toBe("?q=apolg"));
      expect(window.location.pathname).toBe(`${base}/search`);

      fireEvent.click(best);
      await waitFor(() =>
        expect(screen.queryByTestId("search-screen")).not.toBeInTheDocument(),
      );
      expect(await screen.findByTestId("card-title")).toHaveTextContent(
        "Effective apology",
      );
      expect(window.location.pathname).toBe(`${base}/card/${cardId}`);

      // Back returns to the same results, without reopening the keyboard.
      await act(async () => window.history.back());
      expect(await screen.findByTestId("search-corrected")).toBeInTheDocument();
      expect(await field()).toHaveValue("apolg");
      expect(await field()).not.toHaveFocus();
      expect(window.location.pathname).toBe(`${base}/search`);
      expect(window.location.search).toBe("?q=apolg");

      // Everything in search shared one history entry, so Cancel is one step.
      fireEvent.click(screen.getByTestId("search-cancel"));
      expect(
        await screen.findByTestId("library-search-input"),
      ).toBeInTheDocument();
      expect(window.location.pathname).toBe(`${base}/`);
      expect(screen.queryByTestId("search-screen")).not.toBeInTheDocument();
    },
  );

  it("opens a shared search link with its filter, and Cancel goes to the Library", async () => {
    window.history.replaceState(null, "", "/search?q=upset&kind=phrases");
    render(<App />);

    expect(await field()).toHaveValue("upset");
    expect(await screen.findByTestId("search-kind-phrases")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getAllByTestId("search-phrase").length).toBeGreaterThan(0);
    expect(screen.queryByTestId("search-best-match")).not.toBeInTheDocument();

    // Switching the filter rewrites the same entry.
    const entries = window.history.length;
    fireEvent.click(screen.getByTestId("search-kind-all"));
    await waitFor(() => expect(window.location.search).toBe("?q=upset"));
    expect(
      within(await screen.findByTestId("search-results")).getAllByText(
        "Emotional labelling",
      ).length,
    ).toBeGreaterThan(0);
    expect(window.history.length).toBe(entries);

    fireEvent.click(screen.getByTestId("search-cancel"));
    expect(
      await screen.findByTestId("library-search-input"),
    ).toBeInTheDocument();
    expect(window.location.pathname).toBe("/");
  });

  it("opens one category from Browse and steps back to the start of search", async () => {
    window.history.replaceState(null, "", "/search");
    render(<App />);

    const categories = await screen.findAllByTestId("search-browse-category");
    fireEvent.click(categories[0]);

    const list = await screen.findByTestId("search-category");
    expect(window.location.search).toBe("?category=voice");
    expect(within(list).getAllByRole("link").length).toBeGreaterThan(1);

    fireEvent.click(screen.getByTestId("search-category-back"));
    expect(await screen.findByTestId("search-start")).toBeInTheDocument();
    expect(window.location.search).toBe("");
  });
});

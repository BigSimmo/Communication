// The search screen with a small synthetic catalogue: what it shows before
// typing, results as you type, copying, filters and the keyboard.
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useState } from "react";
import { SearchScreen } from "../components/search/search-screen";
import type { SearchKind } from "../components/search/search-nav";
import { SEARCH_STARTERS } from "../components/search/search-starts";
import { loadAllCards } from "../lib/card-loader";
import { LIBRARY_CATEGORIES } from "../lib/data";
import { CORPUS } from "./search-fixtures";

vi.mock("../lib/card-loader", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../lib/card-loader")>()),
  loadAllCards: vi.fn(),
}));

const onCancel = vi.fn();
const onLeave = vi.fn();
const writeText = vi.fn().mockResolvedValue(undefined);

function Harness({
  initialQuery = "",
  category = null,
}: {
  initialQuery?: string;
  category?: string | null;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [kind, setKind] = useState<SearchKind>("all");
  return (
    <SearchScreen
      query={query}
      onQueryChange={setQuery}
      kind={kind}
      onKindChange={setKind}
      category={category}
      onCancel={onCancel}
      onLeave={onLeave}
    />
  );
}

const input = () => screen.getByTestId<HTMLInputElement>("search-input");

async function type(query: string) {
  fireEvent.change(input(), { target: { value: query } });
  // Let the search promise settle inside act.
  await act(async () => {});
}

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  window.history.replaceState(null, "", "/search");
  vi.mocked(loadAllCards).mockResolvedValue(Object.freeze(CORPUS));
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });
});

describe("search screen before typing", () => {
  it("offers starters and every category, with a labelled field", async () => {
    render(<Harness />);
    await act(async () => {});
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Search",
    );
    expect(
      screen.getByRole("searchbox", {
        name: "Search techniques, phrases and playbooks",
      }),
    ).toBe(input());
    expect(
      screen.getAllByTestId("search-starter").map((el) => el.textContent),
    ).toEqual([...SEARCH_STARTERS]);
    const categories = screen.getAllByTestId("search-browse-category");
    expect(categories).toHaveLength(Object.keys(LIBRARY_CATEGORIES).length);
    expect(categories[0]).toHaveAttribute("href", "/search?category=voice");
    expect(categories[0]).toHaveTextContent("Voice and presence");
    // No recent searches yet, so no empty Recent section.
    expect(screen.queryByText("Recent")).not.toBeInTheDocument();
  });

  it("runs a recent search on tap and clears the list", async () => {
    localStorage.setItem(
      "tc-recent-searches",
      JSON.stringify(["silence", "saying no"]),
    );
    render(<Harness />);
    const recents = screen.getAllByTestId("search-recent");
    expect(recents.map((el) => el.textContent)).toEqual([
      "silence",
      "saying no",
    ]);
    fireEvent.click(recents[0]);
    await act(async () => {});
    expect(input()).toHaveValue("silence");
    expect(await screen.findByTestId("search-best-match")).toHaveTextContent(
      "Strategic silence",
    );

    fireEvent.click(screen.getByTestId("search-clear"));
    fireEvent.click(screen.getByTestId("search-clear-recents"));
    expect(screen.queryByTestId("search-recent")).not.toBeInTheDocument();
    expect(localStorage.getItem("tc-recent-searches")).toBe("[]");
  });

  it("runs a starter as a search", async () => {
    render(<Harness />);
    fireEvent.click(screen.getByText("Apologise"));
    await act(async () => {});
    expect(input()).toHaveValue("Apologise");
    expect(await screen.findByTestId("search-best-match")).toHaveTextContent(
      "Effective apology",
    );
  });

  it("lists one category's techniques, each opening its card", async () => {
    render(<Harness category="Voice / Presence" />);
    await act(async () => {});
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Voice and presence",
    );
    const cards = LIBRARY_CATEGORIES["Voice / Presence"];
    expect(screen.getByText(`${cards.length} techniques`)).toBeInTheDocument();
    for (const card of cards) {
      expect(screen.getByTestId(`search-technique-${card.id}`)).toHaveAttribute(
        "href",
        `/card/${card.id}`,
      );
    }
    expect(screen.getByTestId("search-category-back")).toHaveAttribute(
      "href",
      "/search",
    );
  });
});

describe("search screen results", () => {
  it("shows results as you type, from the first letters of a word", async () => {
    render(<Harness />);
    await type("sil");
    const best = await screen.findByTestId("search-best-match");
    expect(best).toHaveTextContent("Best match");
    expect(best).toHaveTextContent("Strategic silence");
    expect(within(best).getByTestId("search-technique-TC029")).toHaveAttribute(
      "href",
      "/card/TC029",
    );
    // The typed letters are marked in the title.
    expect(within(best).getByText("sil").tagName).toBe("MARK");
    expect(screen.getByTestId("search-status")).toHaveTextContent(
      /^\d+ results? for sil$/,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Search results",
    );
  });

  it("offers completions for a first word and searches the one tapped", async () => {
    render(<Harness />);
    await type("sil");
    const suggestion = (await screen.findAllByTestId("search-suggestion"))[0];
    expect(suggestion).toHaveTextContent("silence");
    fireEvent.click(suggestion);
    await act(async () => {});
    expect(input()).toHaveValue("silence");
    // A finished word, or a longer search, has no completions.
    expect(screen.queryByTestId("search-suggestions")).not.toBeInTheDocument();
  });

  it("corrects a typo and says what it searched for", async () => {
    render(<Harness />);
    await type("apolgy");
    expect(await screen.findByTestId("search-corrected")).toHaveTextContent(
      "Showing results for apology",
    );
    expect(screen.getByTestId("search-best-match")).toHaveTextContent(
      "Effective apology",
    );
  });

  it("finds the cards' own words for an everyday word, and says so", async () => {
    render(<Harness />);
    await type("upset");
    expect(await screen.findByTestId("search-also")).toHaveTextContent(
      "Also matching frustrated, angry and hurt",
    );
    expect(screen.getByTestId("search-technique-TC006")).toHaveTextContent(
      "Emotional labelling",
    );
  });

  it("copies a phrase on tap, confirms it and remembers the search", async () => {
    render(<Harness />);
    await type("upset");
    const phrase = (await screen.findAllByTestId("search-phrase")).find((el) =>
      el.textContent?.includes("You seem upset."),
    )!;
    expect(phrase).toHaveTextContent("Copy this line");
    await act(async () => {
      fireEvent.click(phrase);
    });
    expect(writeText).toHaveBeenCalledWith("You seem upset.");
    expect(phrase).toHaveTextContent("Copied");
    expect(
      screen.getAllByRole("status").some((el) => el.textContent === "Copied"),
    ).toBe(true);
    expect(localStorage.getItem("tc-recent-searches")).toBe('["upset"]');
  });

  it("remembers the search and reports the scroll position when a result opens", async () => {
    render(<Harness />);
    await type("silence");
    const link = await screen.findByTestId("search-technique-TC029");
    link.addEventListener("click", (e) => e.preventDefault());
    fireEvent.click(link);
    expect(onLeave).toHaveBeenCalledWith(0);
    expect(localStorage.getItem("tc-recent-searches")).toBe('["silence"]');
  });

  it("filters to one kind of result and back", async () => {
    render(<Harness />);
    await type("upset");
    const phrases = await screen.findByTestId("search-kind-phrases");
    expect(screen.getByTestId("search-kind-all")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    fireEvent.click(phrases);
    expect(phrases).toHaveAttribute("aria-pressed", "true");
    expect(screen.queryByTestId("search-best-match")).not.toBeInTheDocument();
    expect(screen.queryByText("Techniques")).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(screen.getAllByTestId("search-phrase").length).toBeGreaterThan(0);
    expect(
      screen.queryByTestId("search-technique-TC006"),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("search-kind-all"));
    expect(screen.getByTestId("search-best-match")).toBeInTheDocument();
  });

  it("never shows an empty screen: no match offers starters and categories", async () => {
    render(<Harness />);
    await type("xyzzy");
    const none = await screen.findByTestId("search-no-results");
    expect(none).toHaveTextContent("Nothing for “xyzzy”");
    expect(within(none).getAllByTestId("search-starter")).toHaveLength(
      SEARCH_STARTERS.length,
    );
    expect(
      within(none).getAllByTestId("search-browse-category").length,
    ).toBeGreaterThan(0);
    fireEvent.click(within(none).getByText("Apologise"));
    await act(async () => {});
    expect(await screen.findByTestId("search-best-match")).toHaveTextContent(
      "Effective apology",
    );
  });
});

describe("search screen field and keyboard", () => {
  it("clears with the clear button and keeps the cursor in the field", async () => {
    render(<Harness initialQuery="silence" />);
    await act(async () => {});
    fireEvent.click(screen.getByRole("button", { name: "Clear search" }));
    expect(input()).toHaveValue("");
    expect(input()).toHaveFocus();
    expect(
      screen.queryByRole("button", { name: "Clear search" }),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("search-start")).toBeInTheDocument();
  });

  it("Escape clears the field first, then leaves", async () => {
    render(<Harness initialQuery="silence" />);
    await act(async () => {});
    fireEvent.keyDown(input(), { key: "Escape" });
    expect(input()).toHaveValue("");
    expect(onCancel).not.toHaveBeenCalled();
    fireEvent.keyDown(input(), { key: "Escape" });
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("Cancel leaves", async () => {
    render(<Harness />);
    await act(async () => {});
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("Down and Up walk the results from the field and back", async () => {
    render(<Harness initialQuery="silence" />);
    const first = await screen.findByTestId("search-technique-TC029");
    input().focus();
    fireEvent.keyDown(input(), { key: "ArrowDown" });
    expect(first).toHaveFocus();
    fireEvent.keyDown(first, { key: "ArrowDown" });
    expect(first).not.toHaveFocus();
    expect(document.activeElement).toHaveAttribute("data-search-result");
    fireEvent.keyDown(document.activeElement!, { key: "ArrowUp" });
    expect(first).toHaveFocus();
    fireEvent.keyDown(first, { key: "ArrowUp" });
    expect(input()).toHaveFocus();
  });

  it("the keyboard's search key puts the keyboard away and remembers the search", async () => {
    render(<Harness initialQuery="silence" />);
    await act(async () => {});
    input().focus();
    fireEvent.submit(screen.getByRole("search"));
    expect(input()).not.toHaveFocus();
    expect(localStorage.getItem("tc-recent-searches")).toBe('["silence"]');
  });
});

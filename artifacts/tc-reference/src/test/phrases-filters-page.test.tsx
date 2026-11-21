import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import Phrases from "../pages/phrases";
import { FavouritesProvider } from "../lib/favourites-context";
import { loadAllAggregatedPhrases } from "../lib/phrases-data";
import { filterPhrases } from "../lib/phrase-filters";

async function renderPhrases() {
  render(
    <FavouritesProvider>
      <Router hook={memoryLocation({ path: "/phrases" }).hook}>
        <Phrases />
      </Router>
    </FavouritesProvider>,
  );
  return screen.findByTestId("phrases-count");
}

function countText(n: number) {
  return `${n.toLocaleString("en-GB")} ${n === 1 ? "phrase" : "phrases"}`;
}

beforeEach(() => localStorage.clear());

describe("Phrase Bank tone and length filters", () => {
  it("filters by tone and length together and resets", async () => {
    const all = await loadAllAggregatedPhrases();
    const count = await renderPhrases();
    expect(count).toHaveTextContent(countText(all.length));

    const toneGroup = screen.getByRole("group", { name: "Filter by tone" });
    const lengthGroup = screen.getByRole("group", { name: "Filter by length" });
    fireEvent.click(within(toneGroup).getByTestId("tone-filter-warm"));
    fireEvent.click(within(lengthGroup).getByTestId("length-filter-short"));

    const expected = filterPhrases(all, {
      tone: "Warm",
      length: "short",
      query: "",
    }).length;
    expect(count).toHaveTextContent(`${countText(expected)} · Warm · Short`);
    expect(screen.getByTestId("tone-filter-warm")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    // The Warm chip counts short Warm phrases
    expect(screen.getByTestId("tone-filter-warm")).toHaveTextContent(
      String(expected),
    );

    fireEvent.click(screen.getByTestId("phrases-reset"));
    expect(count).toHaveTextContent(countText(all.length));
    expect(screen.getByTestId("length-filter-all")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("groups lines under a link to their technique", async () => {
    await renderPhrases();
    const link = (await screen.findAllByTestId(/^phrase-card-link-/))[0];
    expect(link.getAttribute("href")).toMatch(/^\/card\/TC\d{3}$/);
    const section = link.closest("section")!;
    expect(
      within(section).getAllByRole("button", { name: /^Copy: / }).length,
    ).toBeGreaterThan(0);
  });

  it("shows an empty state that clears every filter", async () => {
    const all = await loadAllAggregatedPhrases();
    const count = await renderPhrases();
    fireEvent.change(screen.getByTestId("phrases-search-input"), {
      target: { value: "zzzz-no-such-phrase" },
    });
    expect(screen.getByTestId("phrases-empty")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(count).toHaveTextContent(countText(all.length));
  });
});

describe("Phrase Bank saved state for shared lines", () => {
  it("shows a line saved from another card as saved", async () => {
    const all = await loadAllAggregatedPhrases();
    const shared = all.find((p) => (p.alsoOn?.length ?? 0) > 0)!;
    const other = shared.alsoOn![0];
    localStorage.setItem(
      "tc_favourites",
      JSON.stringify({
        cardIds: [],
        phrases: [
          {
            cardId: other.cardId,
            cardTitle: other.cardTitle,
            groupLabel: "Saved earlier",
            text: other.text,
          },
        ],
      }),
    );
    await renderPhrases();
    fireEvent.change(screen.getByTestId("phrases-search-input"), {
      target: { value: shared.text },
    });
    const row = screen
      .getAllByRole("button", { name: `Copy: ${shared.text}` })[0]
      .closest("li")!;
    const fav = within(row).getByTestId("phrase-fav-btn");
    expect(fav).toHaveAttribute("aria-pressed", "true");
    expect(row).toHaveTextContent(/also on \d+ more card/);

    // Unsaving removes the copy saved from the other card
    fireEvent.click(fav);
    expect(fav).toHaveAttribute("aria-pressed", "false");
    const stored = JSON.parse(localStorage.getItem("tc_favourites")!);
    expect(stored.phrases).toHaveLength(0);
  });
});

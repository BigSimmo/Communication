import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";

const rows = () => screen.queryAllByTestId(/^phrase-row-/);

async function freshPhrasesPage() {
  // A fresh module graph is a cold load: nothing cached yet.
  vi.resetModules();
  const { default: Phrases } = await import("../pages/phrases");
  const { FavouritesProvider } = await import("../lib/favourites-context");
  const mount = () =>
    render(
      <FavouritesProvider>
        <Router hook={memoryLocation({ path: "/phrases" }).hook}>
          <Phrases />
        </Router>
      </FavouritesProvider>,
    );
  return mount;
}

beforeEach(() => localStorage.clear());

describe("Phrase Bank first paint", () => {
  it("shows the first screen of rows first, then fills the first page", async () => {
    const mount = await freshPhrasesPage();
    mount();
    await screen.findByTestId("phrases-count");
    const first = rows().length;
    expect(first).toBeGreaterThan(0);
    expect(first).toBeLessThan(120);
    // No "Show more" until the first page has filled in
    expect(screen.queryByTestId("phrases-show-more")).not.toBeInTheDocument();

    await waitFor(() => expect(rows()).toHaveLength(120));
    expect(screen.getByTestId("phrases-show-more")).toHaveTextContent(
      "Show more · 120 of",
    );
  });

  it("renders the whole first page at once on a return visit", async () => {
    const mount = await freshPhrasesPage();
    const firstVisit = mount();
    await waitFor(() => expect(rows()).toHaveLength(120));
    firstVisit.unmount();

    // Data is cached now: every row is there on the first frame, so the
    // browser can restore the reader's scroll position.
    mount();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(rows()).toHaveLength(120);
  });
});

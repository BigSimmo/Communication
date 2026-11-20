import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation, useRoute } from "wouter";
import {
  bestLine,
  cardContrast,
  parseSpokenLine,
  splitCondition,
} from "../components/card-detail/best-line";
import {
  CARD_TABS,
  SECTIONS,
  TAB_SECTIONS,
  cardTabMemory,
  isSectionAvailable,
  parseCardTarget,
  tabForSection,
} from "../components/card-detail/card-sections";
import { CARD_DATA } from "../lib/cards";
import { TC001 } from "../lib/cards/TC001";
import { FavouritesProvider } from "../lib/favourites-context";
import { PdfProvider } from "../lib/pdf-context";
import CardDetail from "../pages/card-detail";

vi.mock("wouter");

describe("card tabs: section map", () => {
  it("puts every section of the old card page under exactly one tab", () => {
    const placed = CARD_TABS.flatMap((t) => TAB_SECTIONS[t.id]);
    expect([...placed].sort()).toEqual(SECTIONS.map((s) => s.id).sort());
    expect(new Set(placed).size).toBe(placed.length);
  });

  it("opens the tab that holds a linked section", () => {
    expect(parseCardTarget("?section=method", "")).toEqual({
      tab: "learn",
      section: "method",
    });
    expect(parseCardTarget("", "#section-checklist")).toEqual({
      tab: "practise",
      section: "checklist",
    });
    expect(parseCardTarget("", "#phrases")).toEqual({
      tab: "use",
      section: "phrases",
    });
    // The more specific request wins
    expect(parseCardTarget("?tab=use&section=ladder", "")).toEqual({
      tab: "learn",
      section: "ladder",
    });
    expect(parseCardTarget("?tab=practise", "")).toEqual({
      tab: "practise",
      section: null,
    });
    expect(parseCardTarget("", "")).toBeNull();
    expect(parseCardTarget("?tab=nope&section=nope", "#nope")).toBeNull();
    for (const s of SECTIONS) {
      expect(parseCardTarget(`?section=${s.id}`, "")?.tab).toBe(
        tabForSection(s.id),
      );
    }
  });
});

describe("card tabs: the best line", () => {
  it("separates the words from the commentary around them", () => {
    expect(
      parseSpokenLine('"Weird how?" Then listens and follows their answer.'),
    ).toEqual({
      text: '"Weird how?"',
      say: "Weird how?",
      note: "Then listens and follows their answer.",
    });
    expect(
      parseSpokenLine(
        '"Oh cool. So what do you do?" (ignores what they just said)',
      ),
    ).toMatchObject({
      say: "Oh cool. So what do you do?",
      note: "Ignores what they just said",
    });
    expect(
      parseSpokenLine("Let me take a second so I answer properly. [pause]"),
    ).toMatchObject({ say: "Let me take a second so I answer properly." });
    expect(parseSpokenLine("(Edging away mid-sentence)")).toMatchObject({
      action: true,
      text: "Edging away mid-sentence",
    });
  });

  it("only sets 'If' in front of conditions that read on from it", () => {
    expect(splitCondition("They give short answers.")).toEqual({
      lead: true,
      text: "they give short answers",
    });
    expect(splitCondition("If the topic is private")).toEqual({
      lead: true,
      text: "the topic is private",
    });
    expect(splitCondition("I am rushing")).toEqual({
      lead: true,
      text: "I am rushing",
    });
    expect(splitCondition("Is it still too large after bounding it?")).toEqual({
      lead: false,
      text: "Is it still too large after bounding it?",
    });
    expect(
      splitCondition("After a reflection, they open up or relax."),
    ).toEqual({
      lead: false,
      text: "After a reflection, they open up or relax",
    });
  });

  it("shows a behaviour description unquoted when a card has no line for it", () => {
    for (const [id, card] of Object.entries(CARD_DATA)) {
      const { weak, best } = cardContrast(card);
      for (const line of [weak, best]) {
        if (line && /^(Uses?|Using|Answering)\b/.test(line.text))
          expect(line.action, id).toBe(true);
      }
    }
  });

  it("gives every card clean words for the Copy dock", () => {
    for (const [id, card] of Object.entries(CARD_DATA)) {
      const line = bestLine(card);
      expect(line, id).not.toBe("");
      expect(line, id).not.toMatch(/^["“(]|["”)]$/);
      expect(line, id).not.toMatch(/\[[^\]]*\]/);
      expect(line, id).toBe(line.trim());
    }
  });

  it("gives every card a best line to show under Hear the difference", () => {
    for (const [id, card] of Object.entries(CARD_DATA)) {
      expect(cardContrast(card).best?.text, id).toBeTruthy();
    }
  });
});

function renderCard() {
  return render(
    <FavouritesProvider>
      <PdfProvider>
        <CardDetail />
      </PdfProvider>
    </FavouritesProvider>,
  );
}

const tab = (name: string) => screen.getByRole("tab", { name });

describe("card tabs: the page", () => {
  const writeText = vi.fn().mockResolvedValue(undefined);

  beforeEach(() => {
    localStorage.clear();
    cardTabMemory.clear();
    writeText.mockClear();
    window.history.replaceState(null, "", "/card/TC001");
    vi.mocked(useRoute).mockReturnValue([true, { cardId: "TC001" }]);
    vi.mocked(useLocation).mockReturnValue(["/card/TC001", vi.fn()]);
    global.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof IntersectionObserver;
    window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
  });

  afterEach(() => {
    window.history.replaceState(null, "", "/");
  });

  it("opens on Use it with what to say on the first screen", async () => {
    renderCard();
    await screen.findByRole("tab", { name: "Use it" });

    expect(tab("Use it")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tablist")).toHaveAccessibleName("Card sections");
    expect(screen.getByTestId("card-brief-move")).toHaveTextContent(
      TC001.overview.minimumViableMove,
    );
    expect(screen.getByTestId("hear-best")).toBeInTheDocument();
    expect(screen.getByTestId("say-this")).toBeInTheDocument();
    expect(screen.getByTestId("dock-copy-best")).toBeInTheDocument();

    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAttribute("id", "card-panel-use");
    expect(panel).toHaveAccessibleName("Use it");
    // The other panels exist for aria-controls, hidden and empty
    for (const id of ["learn", "practise"]) {
      const other = document.getElementById(`card-panel-${id}`);
      expect(other).toHaveAttribute("hidden");
      expect(other).toBeEmptyDOMElement();
    }
  });

  it("keeps every section of every card reachable through the tabs", async () => {
    renderCard();
    await screen.findByRole("tab", { name: "Use it" });

    for (const t of CARD_TABS) {
      fireEvent.click(tab(t.label));
      expect(tab(t.label)).toHaveAttribute("aria-selected", "true");
      for (const id of TAB_SECTIONS[t.id]) {
        if (!isSectionAvailable(TC001, id)) continue;
        expect(
          document.getElementById(`section-${id}`),
          `${t.label}: ${id}`,
        ).toBeInTheDocument();
      }
    }
  });

  it("shrinks the brief to the title away from Use it and hides the dock", async () => {
    renderCard();
    await screen.findByRole("tab", { name: "Use it" });

    fireEvent.click(tab("Learn it"));
    expect(screen.queryByTestId("card-brief-move")).not.toBeInTheDocument();
    expect(screen.queryByTestId("dock-copy-best")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Live thread follow-ups",
    );
    // The long tab gets a jump row
    expect(
      screen.getByRole("navigation", { name: "Jump to section" }),
    ).toBeInTheDocument();

    fireEvent.click(tab("Practise it"));
    expect(
      screen.queryByRole("navigation", { name: "Jump to section" }),
    ).not.toBeInTheDocument();
  });

  it("moves between tabs with the arrow keys", async () => {
    renderCard();
    await screen.findByRole("tab", { name: "Use it" });

    fireEvent.keyDown(tab("Use it"), { key: "ArrowRight" });
    expect(tab("Learn it")).toHaveAttribute("aria-selected", "true");
    expect(tab("Learn it")).toHaveFocus();
    fireEvent.keyDown(tab("Learn it"), { key: "End" });
    expect(tab("Practise it")).toHaveAttribute("aria-selected", "true");
  });

  it("walks Use it, Learn it, Practise it with the Next buttons", async () => {
    renderCard();
    fireEvent.click(await screen.findByTestId("button-next-learn"));
    expect(tab("Learn it")).toHaveAttribute("aria-selected", "true");
    fireEvent.click(screen.getByTestId("button-next-practise"));
    expect(tab("Practise it")).toHaveAttribute("aria-selected", "true");
  });

  it("jumps to a section in the Learn tab", async () => {
    renderCard();
    fireEvent.click(await screen.findByRole("tab", { name: "Learn it" }));
    vi.mocked(window.scrollTo).mockClear();

    fireEvent.click(screen.getByTestId("jump-ladder"));
    expect(screen.getByTestId("jump-ladder")).toHaveAttribute(
      "aria-current",
      "true",
    );
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });

  it("opens the right tab for an old link to a section", async () => {
    window.history.replaceState(null, "", "/card/TC001?section=method");
    const first = renderCard();
    await screen.findByRole("tab", { name: "Learn it" });
    expect(tab("Learn it")).toHaveAttribute("aria-selected", "true");
    expect(document.getElementById("section-method")).toBeInTheDocument();
    first.unmount();

    cardTabMemory.clear();
    window.history.replaceState(null, "", "/card/TC001#section-checklist");
    renderCard();
    await screen.findByRole("tab", { name: "Practise it" });
    expect(tab("Practise it")).toHaveAttribute("aria-selected", "true");
    expect(document.getElementById("section-checklist")).toBeInTheDocument();
  });

  it("reopens a card on the tab it was left on", async () => {
    const first = renderCard();
    fireEvent.click(await screen.findByRole("tab", { name: "Practise it" }));
    first.unmount();

    renderCard();
    await screen.findByRole("tab", { name: "Practise it" });
    expect(tab("Practise it")).toHaveAttribute("aria-selected", "true");
  });

  it("copies the best line from the dock", async () => {
    renderCard();
    const dock = await screen.findByTestId("dock-copy-best");
    expect(dock).toHaveTextContent("Copy the best line");

    await act(async () => {
      fireEvent.click(dock);
    });

    expect(writeText).toHaveBeenCalledWith(bestLine(TC001));
    expect(dock).toHaveTextContent("Copied");
    // Announced, without adding a second status region to the page
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("holds the whole phrase bank in a sheet, filterable by group", async () => {
    renderCard();
    const total = TC001.phraseBank.reduce((n, g) => n + g.phrases.length, 0);
    const open = await screen.findByTestId("button-all-phrases");
    expect(open).toHaveTextContent(`All ${total} phrases`);

    fireEvent.click(open);
    const sheet = await screen.findByRole("dialog");
    expect(within(sheet).getAllByTestId(/^phrase-copy-/)).toHaveLength(total);

    const group = TC001.phraseBank[1];
    fireEvent.click(
      within(sheet).getByRole("button", { name: new RegExp(group.label) }),
    );
    expect(within(sheet).getAllByTestId(/^phrase-copy-/)).toHaveLength(
      group.phrases.length,
    );

    await act(async () => {
      fireEvent.click(within(sheet).getByTestId(`phrase-copy-${group.id}-0`));
    });
    expect(writeText).toHaveBeenCalledWith(group.phrases[0]);
  });

  it("opens the visual card PDF from Downloads on Practise it", async () => {
    renderCard();
    fireEvent.click(await screen.findByRole("tab", { name: "Practise it" }));

    fireEvent.click(await screen.findByTestId("resources-view-pdf"));
    await waitFor(() =>
      expect(
        screen.getByRole("dialog", { name: "TC001 Reference PDF" }),
      ).toBeInTheDocument(),
    );
  });

  it("ticks checklist items and keeps them across tabs", async () => {
    renderCard();
    fireEvent.click(await screen.findByRole("tab", { name: "Practise it" }));
    fireEvent.click(screen.getByTestId("checklist-item-0"));
    expect(screen.getByTestId("checklist-item-0")).toHaveAttribute(
      "aria-checked",
      "true",
    );

    fireEvent.click(tab("Use it"));
    fireEvent.click(tab("Practise it"));
    expect(screen.getByTestId("checklist-item-0")).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });
});

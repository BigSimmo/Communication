// The pure pieces behind the search screen: its address, which results it
// leads with, the "also matching" hint and word-start highlighting.
import { describe, expect, it } from "vitest";
import {
  categorySlug,
  parseSearchUrl,
  searchHref,
} from "../components/search/search-nav";
import {
  groupResults,
  pickBestMatch,
  strongMatches,
} from "../components/search/relevance";
import {
  alsoMatching,
  BROWSE_CATEGORIES,
  cardSummary,
} from "../components/search/search-starts";
import { wordStartMatches } from "../components/search/search-parts";
import { LIBRARY_CATEGORIES } from "../lib/data";
import type {
  PhraseResult,
  PlaybookResult,
  RankedResult,
  SearchResults,
} from "../lib/search-index";

const technique = (
  id: string,
  score: number,
  matchedIn = "best-for",
): RankedResult => ({
  id,
  title: id,
  category: "Connection / Warmth",
  loaded: true,
  score,
  matchedIn,
});

const phrase = (id: string, cardId: string, score: number): PhraseResult => ({
  id,
  text: `Line ${id}`,
  cardId,
  cardTitle: cardId,
  category: "Connection / Warmth",
  groupLabel: "Group",
  tone: "Warm",
  score,
  matchedIn: "text",
});

const playbook = (
  id: string,
  score: number,
  matchedIn = "description",
): PlaybookResult => ({
  id,
  name: id,
  description: "",
  context: "Workplace",
  section: "everyday",
  cardIds: ["TC001", "TC002"],
  score,
  matchedIn,
});

function results(parts: Partial<SearchResults>): SearchResults {
  const full: SearchResults = {
    query: "q",
    correctedQuery: null,
    techniques: [],
    phrases: [],
    playbooks: [],
    totals: { techniques: 0, phrases: 0, playbooks: 0 },
    ...parts,
  };
  full.totals = {
    techniques: full.techniques.length,
    phrases: full.phrases.length,
    playbooks: full.playbooks.length,
  };
  return full;
}

describe("search address", () => {
  it("round-trips a query, a result type and a category", () => {
    const category = Object.keys(LIBRARY_CATEGORIES)[0];
    const href = searchHref({ q: " upset with me ", kind: "phrases" });
    expect(href).toBe("/search?q=upset+with+me&kind=phrases");
    expect(parseSearchUrl(href.split("?")[1])).toEqual({
      q: "upset with me",
      kind: "phrases",
      category: null,
    });
    expect(parseSearchUrl(searchHref({ category }).split("?")[1])).toEqual({
      q: "",
      kind: "all",
      category,
    });
  });

  it("leaves defaults out and ignores values it does not know", () => {
    expect(searchHref()).toBe("/search");
    expect(searchHref({ q: "  ", kind: "all", category: null })).toBe(
      "/search",
    );
    expect(parseSearchUrl("?kind=everything&category=nonsense")).toEqual({
      q: "",
      kind: "all",
      category: null,
    });
  });

  it("gives every category its own slug", () => {
    const slugs = Object.keys(LIBRARY_CATEGORIES).map(categorySlug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z]+$/);
  });
});

describe("strongMatches", () => {
  const cutoff = { ratio: 0.25, floor: 2, cap: 4 };
  const scored = (...scores: number[]) => scores.map((score) => ({ score }));

  it("keeps the run that scores close to the best result", () => {
    expect(strongMatches(scored(100, 60, 30, 20, 5), cutoff)).toHaveLength(3);
  });

  it("keeps the floor even when the rest trail far behind", () => {
    expect(strongMatches(scored(100, 3, 2, 1), cutoff)).toHaveLength(2);
    expect(strongMatches(scored(100), cutoff)).toHaveLength(1);
  });

  it("never leads with more than the cap, and handles nothing", () => {
    expect(strongMatches(scored(9, 9, 9, 9, 9, 9), cutoff)).toHaveLength(4);
    expect(strongMatches([], cutoff)).toEqual([]);
  });
});

describe("pickBestMatch", () => {
  it("features the top technique with a line from that technique", () => {
    const best = pickBestMatch(
      groupResults(
        results({
          techniques: [technique("TC006", 90), technique("TC014", 80)],
          phrases: [phrase("a", "TC014", 50), phrase("b", "TC006", 40)],
        }),
      ),
    );
    expect(best).toMatchObject({
      kind: "technique",
      technique: { id: "TC006" },
      phrase: { id: "b" },
    });
  });

  it("features a playbook the search names, unless a technique is named too", () => {
    const named = playbook("breaking-bad-news", 300, "name");
    expect(
      pickBestMatch(
        groupResults(
          results({ techniques: [technique("TC001", 90)], playbooks: [named] }),
        ),
      ),
    ).toMatchObject({ kind: "playbook", playbook: { id: named.id } });
    expect(
      pickBestMatch(
        groupResults(
          results({
            techniques: [technique("TC001", 90, "title")],
            playbooks: [named],
          }),
        ),
      ),
    ).toMatchObject({ kind: "technique", technique: { id: "TC001" } });
  });

  it("falls back to a playbook, then to nothing", () => {
    expect(
      pickBestMatch(groupResults(results({ playbooks: [playbook("p", 5)] }))),
    ).toMatchObject({ kind: "playbook" });
    expect(
      pickBestMatch(
        groupResults(results({ phrases: [phrase("a", "TC001", 5)] })),
      ),
    ).toBeNull();
  });
});

describe("alsoMatching", () => {
  it("lists the synonym-list words a search also looks for", () => {
    expect(alsoMatching("upset with me")).toEqual([
      "frustrated",
      "angry",
      "hurt",
    ]);
  });

  it("matches whole words only and skips words already typed", () => {
    expect(alsoMatching("upsetting")).toEqual([]);
    expect(alsoMatching("angry upset")).not.toContain("angry");
    expect(alsoMatching("")).toEqual([]);
    expect(alsoMatching("xyzzy")).toEqual([]);
  });
});

describe("wordStartMatches", () => {
  const marked = (text: string, query: string) =>
    wordStartMatches(text, query)
      .filter((part) => part.highlight)
      .map((part) => part.text);

  it("marks a match at the start of a word, not inside one", () => {
    expect(marked("Name one feeling for me", "me")).toEqual(["me"]);
    expect(marked("Strategic silence", "sil")).toEqual(["sil"]);
    expect(marked("Effective apology", "Apology")).toEqual(["apology"]);
  });

  it("returns the text unchanged when put back together", () => {
    const text = "I'm not upset with you. I'm upset about it.";
    expect(
      wordStartMatches(text, "upset")
        .map((part) => part.text)
        .join(""),
    ).toBe(text);
  });
});

describe("start screen data", () => {
  it("lists every category with its technique count and a description per card", () => {
    expect(BROWSE_CATEGORIES.map((c) => c.category)).toEqual(
      Object.keys(LIBRARY_CATEGORIES),
    );
    for (const { category, count, label } of BROWSE_CATEGORIES) {
      expect(count).toBe(LIBRARY_CATEGORIES[category].length);
      expect(label).not.toContain("/");
    }
    expect(cardSummary("TC029")).toMatch(/pause/);
    expect(cardSummary("TC000")).toBe("");
  });
});

// Search against the real card catalogue, synonym list and playbooks: the
// acceptance checks for smart search, plus guards that keep the synonym list
// pointing at words the cards actually use.
import { beforeAll, describe, expect, it } from "vitest";
import {
  preloadSearchIndex,
  searchAll,
  searchCards,
  suggestSearches,
  type SearchOptions,
} from "../lib/search-index";
import { SEARCH_SYNONYMS } from "../lib/search-synonyms";
import { SEARCH_STARTERS } from "../components/search/search-starts";
import {
  FETCH_LIMITS,
  groupResults,
  pickBestMatch,
} from "../components/search/relevance";

const NO_BOOSTS: SearchOptions = {
  boosts: {
    savedCardIds: [],
    savedPhrases: [],
    recentCardIds: [],
    startHereCardIds: [],
  },
};

const titles = (results: { title: string }[]) => results.map((r) => r.title);

beforeAll(async () => {
  await preloadSearchIndex();
});

describe("smart search on the real catalogue", () => {
  it('"sil" already shows Strategic silence', async () => {
    expect((await searchCards("sil", NO_BOOSTS))[0]?.title).toBe(
      "Strategic silence",
    );
  });

  it('"silent" finds Strategic silence', async () => {
    expect((await searchCards("silent", NO_BOOSTS))[0]?.title).toBe(
      "Strategic silence",
    );
  });

  it('"apolg" finds Effective apology and says it searched for apology', async () => {
    const results = await searchAll("apolg", NO_BOOSTS);
    expect(results.correctedQuery).toBe("apology");
    expect(results.techniques[0]?.title).toBe("Effective apology");
  });

  it.each(["apologise", "apologies", "apologising", "sorry"])(
    '"%s" finds Effective apology near the top',
    async (q) => {
      expect(titles((await searchCards(q, NO_BOOSTS)).slice(0, 3))).toContain(
        "Effective apology",
      );
    },
  );

  it('"upset" finds Emotional labelling', async () => {
    const results = await searchAll("upset", NO_BOOSTS);
    expect(titles(results.techniques.slice(0, 3))).toContain(
      "Emotional labelling",
    );
    expect(results.phrases.length).toBeGreaterThan(0);
    expect(results.playbooks.length).toBeGreaterThan(0);
  });

  it('"say no" finds the declining techniques and playbook', async () => {
    const results = await searchAll("say no", NO_BOOSTS);
    expect(titles(results.techniques.slice(0, 6))).toContain(
      "Positive no (Yes! No. Yes?)",
    );
    expect(results.playbooks.map((p) => p.id)).toContain("declining-a-request");
  });

  it("returns phrases and playbooks alongside techniques", async () => {
    const results = await searchAll("handover", NO_BOOSTS);
    expect(results.playbooks[0]?.name).toBe("Clinical handover");
    expect(results.phrases.length).toBeGreaterThan(0);
    expect(results.techniques.length).toBeGreaterThan(0);
    for (const phrase of results.phrases) {
      expect(phrase.text).not.toMatch(/^\[.*\]$/);
    }
  });

  it("finds a card by its number", async () => {
    expect((await searchCards("TC029"))[0]).toMatchObject({
      title: "Strategic silence",
      matchedIn: "id",
    });
  });

  it("suggests completions from card words", async () => {
    expect(await suggestSearches("sil")).toContain("silence");
  });

  it("answers each query in a few milliseconds once built", async () => {
    const queries = [
      "s",
      "si",
      "sil",
      "silence",
      "upset",
      "say no",
      "apolg",
      "frustrated colleague",
      "breaking bad news",
      "validate the concern",
      "how do i say no to my boss",
    ];
    const started = performance.now();
    for (const q of queries) await searchAll(q);
    const average = (performance.now() - started) / queries.length;
    // Typically 1 to 5 ms; the bound is loose for slow CI machines.
    expect(average).toBeLessThan(50);
  });
});

describe("synonym list", () => {
  const targets = [...new Set(Object.values(SEARCH_SYNONYMS).flat())];

  it("has a useful number of entries", () => {
    expect(Object.keys(SEARCH_SYNONYMS).length).toBeGreaterThanOrEqual(150);
  });

  it("uses lowercase keys and words", () => {
    for (const [key, words] of Object.entries(SEARCH_SYNONYMS)) {
      expect(key).toBe(key.toLowerCase().trim());
      expect(words.length, key).toBeGreaterThan(0);
      for (const word of words) expect(word).toBe(word.toLowerCase().trim());
    }
  });

  it.each(targets)('"%s" appears in the card text', async (word) => {
    const results = await searchAll(word, NO_BOOSTS);
    expect(results.correctedQuery).toBeNull();
    expect(
      results.totals.techniques +
        results.totals.phrases +
        results.totals.playbooks,
    ).toBeGreaterThan(0);
  });
});

describe("search screen starters", () => {
  const search = (query: string) =>
    searchAll(query, { ...NO_BOOSTS, limits: FETCH_LIMITS });

  it.each(SEARCH_STARTERS)('"%s" leads with a result', async (starter) => {
    const groups = groupResults(await search(starter));
    expect(pickBestMatch(groups)).not.toBeNull();
    expect(groups.techniques.length).toBeGreaterThan(0);
  });

  it.each([
    ["Calm things down", /Slow down under pressure/],
    ["Apologise", /Effective apology/],
    ["Ask for something", /ask/i],
    ["Give feedback", /feedback/i],
  ])('"%s" features a fitting technique or playbook', async (starter, name) => {
    const best = pickBestMatch(groupResults(await search(starter)));
    const featured =
      best?.kind === "technique" ? best.technique.title : best?.playbook.name;
    expect(featured).toMatch(name);
  });

  it('"Say no" lists Positive no among its first techniques', async () => {
    const groups = groupResults(await search("Say no"));
    expect(titles(groups.techniques.slice(0, 3))).toContain(
      "Positive no (Yes! No. Yes?)",
    );
  });

  it('"Break bad news" features the Breaking bad news playbook', async () => {
    const best = pickBestMatch(groupResults(await search("Break bad news")));
    expect(best).toMatchObject({
      kind: "playbook",
      playbook: { name: "Breaking bad news" },
    });
  });

  it("leads with a short list even when a word reaches most of the catalogue", async () => {
    const results = await search("apology");
    expect(results.totals.techniques).toBeGreaterThan(40);
    const groups = groupResults(results);
    expect(groups.techniques.length).toBeLessThanOrEqual(12);
    expect(groups.techniques[0].title).toBe("Effective apology");
  });
});

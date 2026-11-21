import { describe, expect, it } from "vitest";
import { hasCardRefs, parseCardRefs } from "@/lib/card-refs";

const TITLES: Record<string, string> = {
  TC001: "Live thread follow-ups",
  TC003: "Comment-before-question",
  TC011: "Summary check",
  TC033: "Minimal encouragers",
  TC101: "Effective apology",
  TC107: "Fogging and broken record",
};

describe("parseCardRefs", () => {
  it("returns plain text untouched", () => {
    expect(parseCardRefs("No references here.", TITLES)).toEqual([
      { type: "text", text: "No references here." },
    ]);
  });

  it("links the title written before a parenthesised id", () => {
    expect(parseCardRefs("Then use a summary check (TC011).", TITLES)).toEqual([
      { type: "text", text: "Then use a " },
      { type: "ref", id: "TC011", label: "summary check", inline: true },
      { type: "text", text: "." },
    ]);
  });

  it("replaces a parenthesised id with the title when the words differ", () => {
    expect(
      parseCardRefs(
        "They repeat after a no. Switch to broken record (TC107).",
        TITLES,
      ),
    ).toEqual([
      {
        type: "text",
        text: "They repeat after a no. Switch to broken record ",
      },
      {
        type: "ref",
        id: "TC107",
        label: "Fogging and broken record",
        inline: false,
      },
      { type: "text", text: "." },
    ]);
  });

  it("does not match a title that is only the end of a longer word", () => {
    const segments = parseCardRefs("Resummary check (TC011)", TITLES);
    expect(segments[1]).toMatchObject({
      label: "Summary check",
      inline: false,
    });
  });

  it("links a bare id followed by its title as the title alone", () => {
    expect(
      parseCardRefs("TC033 Minimal encouragers uses tiny signals.", TITLES),
    ).toEqual([
      { type: "ref", id: "TC033", label: "Minimal encouragers", inline: true },
      { type: "text", text: " uses tiny signals." },
    ]);
  });

  it("names a bare id that stands alone", () => {
    expect(parseCardRefs("TC003, then TC001", TITLES)).toEqual([
      {
        type: "ref",
        id: "TC003",
        label: "Comment-before-question",
        inline: false,
      },
      { type: "text", text: ", then " },
      {
        type: "ref",
        id: "TC001",
        label: "Live thread follow-ups",
        inline: false,
      },
    ]);
  });

  it("leaves unknown ids as written", () => {
    expect(parseCardRefs("See TC999 and (TC998).", TITLES)).toEqual([
      { type: "text", text: "See TC999 and (TC998)." },
    ]);
  });

  it("does not link the card being read", () => {
    expect(
      parseCardRefs(
        "Comment first (TC003), then follow the thread (TC001).",
        TITLES,
        "TC003",
      ),
    ).toEqual([
      { type: "text", text: "Comment first, then follow the thread " },
      {
        type: "ref",
        id: "TC001",
        label: "Live thread follow-ups",
        inline: false,
      },
      { type: "text", text: "." },
    ]);
    expect(
      parseCardRefs("TC003 shapes the question.", TITLES, "TC003"),
    ).toEqual([
      { type: "text", text: "Comment-before-question shapes the question." },
    ]);
  });

  it("keeps every character of the source text accounted for", () => {
    const text = 'You: "Exhausting how?" (TC001) and Effective apology (TC101)';
    const segments = parseCardRefs(text, TITLES);
    expect(segments.filter((s) => s.type === "ref")).toHaveLength(2);
    expect(segments.at(-1)).toMatchObject({
      type: "ref",
      label: "Effective apology",
      inline: true,
    });
  });
});

describe("hasCardRefs", () => {
  it("is true only for known ids", () => {
    expect(hasCardRefs("Apologise (TC101).", TITLES)).toBe(true);
    expect(hasCardRefs("See TC999.", TITLES)).toBe(false);
    expect(hasCardRefs("Nothing.", TITLES)).toBe(false);
  });
});

import { describe, expect, it } from "vitest";
import { isStopWord, normaliseText, stem, tokenize } from "../lib/search-text";

describe("normaliseText", () => {
  it("lowercases, strips accents and unifies apostrophes", () => {
    expect(normaliseText("Cliché CAFÉ naïve")).toBe("cliche cafe naive");
    expect(normaliseText("don’t")).toBe("don't");
  });
});

describe("tokenize", () => {
  it("splits on anything that is not a letter or digit", () => {
    expect(tokenize("Follow-up: ask (why?) / TC014")).toEqual([
      "follow",
      "up",
      "ask",
      "why",
      "tc014",
    ]);
  });

  it("drops apostrophes inside words", () => {
    expect(tokenize("Don't, I’m")).toEqual(["dont", "im"]);
  });

  it("returns nothing for blank or punctuation-only text", () => {
    expect(tokenize("")).toEqual([]);
    expect(tokenize(" -- ... ")).toEqual([]);
  });
});

describe("isStopWord", () => {
  it("drops filler words but keeps meaningful short words", () => {
    expect(isStopWord("the")).toBe(true);
    expect(isStopWord("and")).toBe(true);
    for (const word of ["no", "not", "why", "how", "say", "ask"]) {
      expect(isStopWord(word), word).toBe(false);
    }
  });
});

describe("stem", () => {
  const groups: Record<string, string[]> = {
    apology: [
      "apologise",
      "apologize",
      "apology",
      "apologies",
      "apologising",
      "apologised",
      "apologetic",
    ],
    silence: ["silence", "silent", "silently", "silences"],
    label: ["label", "labels", "labelling", "labeling", "labelled"],
    validate: ["validate", "validation", "validating", "validated"],
    frustrate: ["frustrated", "frustration", "frustrating"],
    clarify: ["clarify", "clarity", "clarification", "clarified"],
    emotion: ["emotion", "emotions", "emotional"],
    decline: ["decline", "declined", "declining"],
    listen: ["listen", "listening", "listened", "listener"],
    boundary: ["boundary", "boundaries"],
    manage: ["manage", "manager", "managing"],
    agree: ["agree", "agreed", "agreement"],
    criticise: ["criticise", "criticism", "criticize"],
    curious: ["curious", "curiosity"],
    empathy: ["empathy", "empathise", "empathetic"],
    confident: ["confident", "confidence"],
    summary: ["summary", "summarise", "summarising"],
  };

  it.each(Object.entries(groups))(
    "gives every form of %s one stem",
    (_, forms) => {
      const stems = new Set(forms.map(stem));
      expect([...stems], forms.join(", ")).toHaveLength(1);
    },
  );

  it("keeps unrelated words apart", () => {
    const words = [
      "call",
      "calm",
      "tell",
      "need",
      "speed",
      "silly",
      "silence",
      "sorry",
    ];
    expect(new Set(words.map(stem)).size).toBe(words.length);
  });

  it("leaves short words and words with digits alone", () => {
    for (const word of ["ask", "no", "tc014", "2nd"]) {
      expect(stem(word)).toBe(word);
    }
  });

  it("keeps a stem of at least three letters with a vowel", () => {
    for (const word of ["string", "bring", "thing", "being", "used"]) {
      const result = stem(word);
      expect(result.length, word).toBeGreaterThanOrEqual(3);
      expect(result, word).toMatch(/[aeiouy]/);
    }
  });
});

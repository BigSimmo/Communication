import { describe, it, expect } from "vitest";
import { toBlocks } from "@/components/card-detail/example-lines";

describe("worked-example blocks", () => {
  it("splits inline notes, headings and a second dialogue after a note", () => {
    expect(
      toBlocks([
        'A: "I don\'t think your plan is realistic."',
        "Why this works: the pause buys composure.",
        "B answers the real objection.",
        "Advanced version:",
        "A: \"I'm just tired of pretending I'm fine.\"",
        "Why it works:",
        "the feeling gets room first",
      ]),
    ).toEqual([
      { kind: "line", text: 'A: "I don\'t think your plan is realistic."' },
      {
        kind: "notes",
        label: "Why this works",
        items: ["the pause buys composure.", "B answers the real objection."],
      },
      { kind: "heading", text: "Advanced version" },
      { kind: "line", text: "A: \"I'm just tired of pretending I'm fine.\"" },
      {
        kind: "notes",
        label: "Why it works",
        items: ["the feeling gets room first"],
      },
    ]);
  });
});

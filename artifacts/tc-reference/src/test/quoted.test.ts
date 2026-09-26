import { describe, expect, it } from "vitest";
import { quoted } from "../lib/utils";

describe("quoted", () => {
  it("wraps plain text in quote marks", () => {
    expect(quoted("Hey, good to see you.")).toBe('"Hey, good to see you."');
  });

  it("leaves text that already opens with a quote alone", () => {
    expect(quoted('"Hey." (flat, distracted)')).toBe(
      '"Hey." (flat, distracted)',
    );
    expect(quoted("“Hey.”")).toBe("“Hey.”");
    expect(quoted('  "Okay."')).toBe('  "Okay."');
  });
});

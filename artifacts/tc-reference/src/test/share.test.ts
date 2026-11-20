import { afterEach, describe, expect, it, vi } from "vitest";
import {
  cardUrl,
  imageFileName,
  shareContent,
  shareText,
  wrapLines,
} from "../lib/share";

const content = {
  text: "What was that like?",
  source: "Live thread follow-ups",
  url: "https://example.test/card/TC001",
};

function fakeNavigator(overrides: Partial<Navigator> = {}) {
  return { ...overrides } as Navigator;
}

afterEach(() => vi.restoreAllMocks());

describe("share", () => {
  it("builds card links under the deploy base", () => {
    expect(cardUrl("TC001", "https://a.test", "/")).toBe(
      "https://a.test/card/TC001",
    );
    expect(cardUrl("TC001", "https://a.test", "/reference/")).toBe(
      "https://a.test/reference/card/TC001",
    );
    expect(cardUrl("TC001", "https://a.test", "/reference")).toBe(
      "https://a.test/reference/card/TC001",
    );
  });

  it("puts the phrase first, then its source and link", () => {
    expect(shareText(content)).toBe(
      "What was that like?\nFrom Live thread follow-ups\nhttps://example.test/card/TC001",
    );
    expect(shareText({ text: "Only this" })).toBe("Only this");
  });

  it("uses the system share sheet when there is one", async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    const outcome = await shareContent(content, fakeNavigator({ share }));
    expect(outcome).toBe("shared");
    expect(share).toHaveBeenCalledWith({
      title: "Live thread follow-ups",
      text: "What was that like?\nFrom Live thread follow-ups",
      url: content.url,
    });
  });

  it("treats closing the share sheet as cancelled, without copying", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    const share = vi
      .fn()
      .mockRejectedValue(new DOMException("closed", "AbortError"));
    expect(await shareContent(content, fakeNavigator({ share }))).toBe(
      "cancelled",
    );
    expect(writeText).not.toHaveBeenCalled();
  });

  it("copies instead when there is no share sheet", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    expect(await shareContent(content, fakeNavigator())).toBe("copied");
    expect(writeText).toHaveBeenCalledWith(shareText(content));
  });

  it("copies instead when the share sheet refuses the data", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    const share = vi
      .fn()
      .mockRejectedValue(new DOMException("no", "NotAllowedError"));
    expect(await shareContent(content, fakeNavigator({ share }))).toBe(
      "copied",
    );
  });

  it("wraps text to the width it is given", () => {
    const measure = (s: string) => s.length * 10;
    expect(wrapLines(measure, "one two three four", 90)).toEqual([
      "one two",
      "three",
      "four",
    ]);
    // A single long word still gets its own line rather than vanishing.
    expect(wrapLines(measure, "extraordinarily", 50)).toEqual([
      "extraordinarily",
    ]);
  });

  it("names image files after the phrase", () => {
    expect(imageFileName("What was that like?")).toBe(
      "phrase-what-was-that-like.png",
    );
    expect(imageFileName("…")).toBe("phrase-card.png");
  });
});

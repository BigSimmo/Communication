import { describe, expect, it } from "vitest";
import { CARD_DATA, isSpeakablePhrase, type CardData } from "@/lib/cards";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { SITUATIONS, getSituation } from "@/lib/situations";

// The Help me right now map must add no new advice: every line it shows is
// copied word for word from the card it points at.

function speakablePhrases(card: CardData): string[] {
  return card.phraseBank
    .flatMap((group) => group.phrases)
    .filter(isSpeakablePhrase);
}

function avoidTexts(card: CardData): string[] {
  return [
    ...(card.whatItIsNot ?? []),
    ...card.notFor,
    card.overview.misuse,
    ...(card.commonMistakes ?? []).map((m) => m.mistake),
  ];
}

const LIBRARY_IDS = new Set(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((c) => c.id),
);

describe("Help me right now situations", () => {
  it("has exactly eight situations with unique ids and labels", () => {
    expect(SITUATIONS).toHaveLength(8);
    expect(new Set(SITUATIONS.map((s) => s.id)).size).toBe(8);
    expect(new Set(SITUATIONS.map((s) => s.label)).size).toBe(8);
    for (const s of SITUATIONS) {
      expect(s.id, s.id).toMatch(/^[a-z]+(-[a-z]+)*$/);
      expect(s.tagline.split(" ").length, s.id).toBeLessThanOrEqual(6);
    }
  });

  it("points every lead and follow-on at a real, different card", () => {
    for (const s of SITUATIONS) {
      expect(CARD_DATA[s.leadCardId], s.id).toBeDefined();
      expect(CARD_DATA[s.followOn.cardId], s.id).toBeDefined();
      expect(LIBRARY_IDS.has(s.leadCardId), s.id).toBe(true);
      expect(s.followOn.cardId, s.id).not.toBe(s.leadCardId);
    }
  });

  it("uses three distinct lines from the lead card's phrase bank", () => {
    for (const s of SITUATIONS) {
      const phrases = speakablePhrases(CARD_DATA[s.leadCardId]);
      expect(new Set(s.lines).size, s.id).toBe(3);
      for (const line of s.lines) {
        expect(phrases, `${s.id}: ${line}`).toContain(line);
      }
    }
  });

  it("uses a follow-on line from the follow-on card's phrase bank", () => {
    for (const s of SITUATIONS) {
      const phrases = speakablePhrases(CARD_DATA[s.followOn.cardId]);
      expect(phrases, `${s.id}: ${s.followOn.line}`).toContain(s.followOn.line);
    }
  });

  it("takes the avoid note from the lead card's cautions", () => {
    for (const s of SITUATIONS) {
      const cautions = avoidTexts(CARD_DATA[s.leadCardId]);
      expect(cautions, `${s.id}: ${s.avoid}`).toContain(s.avoid);
    }
  });

  it("looks situations up by id", () => {
    expect(getSituation("say-no")?.leadCardId).toBe("TC102");
    expect(getSituation("missing")).toBeUndefined();
  });
});

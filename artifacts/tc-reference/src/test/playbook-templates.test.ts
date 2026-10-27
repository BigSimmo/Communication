import { describe, expect, it } from "vitest";
import { CARD_DATA } from "@/lib/cards";
import { PLAYBOOK_TEMPLATES } from "@/lib/playbook-templates";

describe("playbook templates", () => {
  it("only reference cards that exist", () => {
    for (const template of PLAYBOOK_TEMPLATES) {
      for (const cardId of template.cardIds) {
        expect(CARD_DATA, `${template.id}: ${cardId}`).toHaveProperty(cardId);
      }
    }
  });

  it("have unique ids", () => {
    const ids = PLAYBOOK_TEMPLATES.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("contain 3 to 5 distinct cards each", () => {
    for (const template of PLAYBOOK_TEMPLATES) {
      expect(template.cardIds.length, template.id).toBeGreaterThanOrEqual(3);
      expect(template.cardIds.length, template.id).toBeLessThanOrEqual(5);
      expect(new Set(template.cardIds).size, template.id).toBe(
        template.cardIds.length,
      );
    }
  });

  it("keep names and descriptions free of arrows, em dashes and semicolons", () => {
    for (const template of PLAYBOOK_TEMPLATES) {
      for (const text of [template.name, template.description]) {
        expect(text, template.id).not.toMatch(/[→—;]/);
      }
      expect(template.name.length, template.id).toBeLessThan(40);
    }
  });

  it("give every named framework a well-formed https source", () => {
    const named = /\b(ISBAR|iSoBAR|SPIKES|Open Disclosure|SBI|DEAR MAN)\b/;
    for (const template of PLAYBOOK_TEMPLATES) {
      if (named.test(template.description)) {
        expect(template.sources?.length ?? 0, template.id).toBeGreaterThan(0);
      }
      for (const source of template.sources ?? []) {
        expect(source.label.trim(), template.id).not.toBe("");
        expect(new URL(source.url).protocol, template.id).toBe("https:");
      }
    }
  });

  it("keep medical playbooks in their own section, apart from everyday ones", () => {
    for (const template of PLAYBOOK_TEMPLATES) {
      expect(template.section, template.id).toBe(
        template.context === "Clinical" ? "medical" : "everyday",
      );
    }
    expect(PLAYBOOK_TEMPLATES.some((t) => t.section === "everyday")).toBe(true);
  });
});

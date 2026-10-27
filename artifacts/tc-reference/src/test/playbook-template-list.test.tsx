import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PlaybookTemplateList } from "@/components/playbook-template-list";
import { PLAYBOOK_TEMPLATES } from "@/lib/playbook-templates";

describe("PlaybookTemplateList sections", () => {
  it("shows everyday playbooks first and medical ones in a separate labelled section", () => {
    render(<PlaybookTemplateList onUse={() => {}} />);
    const everyday = screen.getByTestId("playbook-section-everyday");
    const medical = screen.getByTestId("playbook-section-medical");
    expect(
      everyday.compareDocumentPosition(medical) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      screen.getByRole("group", { name: "Medical & clinical communication" }),
    ).toBe(medical);
    for (const t of PLAYBOOK_TEMPLATES) {
      const host = t.section === "medical" ? medical : everyday;
      expect(
        within(host).getByTestId(`playbook-template-${t.id}`),
        t.id,
      ).toBeTruthy();
    }
  });
});

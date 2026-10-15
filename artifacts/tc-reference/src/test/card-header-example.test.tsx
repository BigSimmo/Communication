import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardHeader } from "../components/card-detail/card-header";
import { TC001 } from "../lib/cards/TC001";

describe("Card brief example disclosure", () => {
  it("folds the weak/best example behind a 'Show example' toggle on phones", () => {
    render(<CardHeader cardId="TC001" cardData={TC001} />);

    const toggle = screen.getByTestId("card-brief-example-toggle");
    const example = screen.getByTestId("card-brief-ladder");

    expect(toggle.tagName).toBe("BUTTON");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", example.id);
    expect(toggle).toHaveTextContent("Show example");
    // Hidden on phones until opened; md:block shows it from md up via CSS.
    expect(example).toHaveClass("hidden", "md:block");
    expect(toggle).toHaveClass("min-h-11", "md:hidden");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveTextContent("Hide example");
    expect(example).not.toHaveClass("hidden");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(example).toHaveClass("hidden");
  });
});

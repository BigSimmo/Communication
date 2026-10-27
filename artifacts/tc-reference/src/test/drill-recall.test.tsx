import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { DrillRecall } from "@/components/drill-recall";

describe("drill recall prompt", () => {
  it("hides the move until the reader asks for it", () => {
    render(<DrillRecall move="Own it, offer a fix, stop." />);
    expect(screen.queryByText("Own it, offer a fix, stop.")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Show the move" }));
    expect(screen.getByText("Own it, offer a fix, stop.")).toBeTruthy();
  });

  it("can be skipped in one tap", () => {
    render(<DrillRecall move="Own it, offer a fix, stop." />);
    fireEvent.click(screen.getByRole("button", { name: "Skip" }));
    expect(screen.queryByTestId("drill-recall")).toBeNull();
  });
});

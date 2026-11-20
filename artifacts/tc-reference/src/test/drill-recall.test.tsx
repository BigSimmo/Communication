import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { DrillRecall } from "@/components/drill-recall";

describe("drill recall prompt", () => {
  it("hides the move until the reader asks for it", () => {
    render(<DrillRecall move="Own it, offer a fix, stop." />);
    expect(screen.queryByText("Own it, offer a fix, stop.")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Show the move" }));
    expect(screen.getByText("Own it, offer a fix, stop.")).toBeTruthy();
  });

  it("stays hidden when the parent holds the reveal, and tells it on tap", () => {
    const onShow = vi.fn();
    const { rerender } = render(
      <DrillRecall
        move="Own it, offer a fix, stop."
        shown={false}
        onShow={onShow}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Show the move" }));
    expect(onShow).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Own it, offer a fix, stop.")).toBeNull();
    rerender(
      <DrillRecall move="Own it, offer a fix, stop." shown onShow={onShow} />,
    );
    expect(screen.getByText("Own it, offer a fix, stop.")).toBeTruthy();
  });
});

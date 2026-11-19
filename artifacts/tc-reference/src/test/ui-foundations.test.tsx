import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useState } from "react";
import { BottomSheet } from "../components/ui/bottom-sheet";
import { Button } from "../components/ui/button";
import { Chip } from "../components/ui/chip";
import { DockBar } from "../components/ui/dock-bar";
import { ListRow } from "../components/ui/list-row";
import { SegmentedTabs } from "../components/ui/segmented-tabs";
import { CATEGORY_STYLES, categoryStyleFor } from "../lib/design-tokens";
import { LIBRARY_CATEGORIES } from "../lib/data";

const TABS = [
  { id: "use", label: "Use it" },
  { id: "learn", label: "Learn it" },
  { id: "practise", label: "Practise it" },
] as const;

function Tabs({ onChange }: { onChange?: (id: string) => void }) {
  const [value, setValue] = useState<(typeof TABS)[number]["id"]>("use");
  return (
    <SegmentedTabs
      tabs={TABS}
      value={value}
      onChange={(id) => {
        setValue(id);
        onChange?.(id);
      }}
      label="Card sections"
      idBase="card"
    />
  );
}

describe("SegmentedTabs", () => {
  it("exposes a tab list with one selected, focusable tab", () => {
    render(<Tabs />);
    expect(
      screen.getByRole("tablist", { name: "Card sections" }),
    ).toBeInTheDocument();
    const tabs = screen.getAllByRole("tab");
    expect(tabs.map((t) => t.getAttribute("aria-selected"))).toEqual([
      "true",
      "false",
      "false",
    ]);
    expect(tabs.map((t) => t.tabIndex)).toEqual([0, -1, -1]);
    expect(tabs[1]).toHaveAttribute("aria-controls", "card-panel-learn");
  });

  it("selects on click", () => {
    const onChange = vi.fn();
    render(<Tabs onChange={onChange} />);
    fireEvent.click(screen.getByRole("tab", { name: "Practise it" }));
    expect(onChange).toHaveBeenCalledWith("practise");
    expect(screen.getByRole("tab", { name: "Practise it" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("moves with arrow keys, wraps, and supports Home and End", () => {
    render(<Tabs />);
    const current = () => screen.getByRole("tab", { selected: true });
    const selected = () => current().textContent;

    fireEvent.keyDown(current(), { key: "ArrowRight" });
    expect(selected()).toBe("Learn it");
    expect(screen.getByRole("tab", { name: "Learn it" })).toHaveFocus();
    fireEvent.keyDown(current(), { key: "End" });
    expect(selected()).toBe("Practise it");
    fireEvent.keyDown(current(), { key: "ArrowRight" });
    expect(selected()).toBe("Use it");
    fireEvent.keyDown(current(), { key: "ArrowLeft" });
    expect(selected()).toBe("Practise it");
    fireEvent.keyDown(current(), { key: "Home" });
    expect(selected()).toBe("Use it");
  });
});

describe("BottomSheet", () => {
  it("renders nothing while closed", () => {
    render(
      <BottomSheet open={false} onClose={() => {}} title="Settings">
        body
      </BottomSheet>,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("is a labelled modal dialog with action and footer", () => {
    render(
      <BottomSheet
        open
        onClose={() => {}}
        title="Sort and filter"
        action={<button>Reset</button>}
        footer={<button>Show 38 techniques</button>}
      >
        <p>Order</p>
      </BottomSheet>,
    );
    const dialog = screen.getByRole("dialog", { name: "Sort and filter" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(screen.getByRole("button", { name: "Reset" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Show 38 techniques" }),
    ).toBeInTheDocument();
  });

  it("closes on Escape and on the backdrop", () => {
    const onClose = vi.fn();
    render(
      <BottomSheet open onClose={onClose} title="Share" testId="share">
        body
      </BottomSheet>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    fireEvent.click(screen.getByTestId("share-backdrop"));
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});

describe("Chip", () => {
  it("reports selection and shows the dot and count", () => {
    const { rerender } = render(
      <Chip dotColor="var(--cat-voice)" count={4}>
        Voice
      </Chip>,
    );
    const chip = screen.getByRole("button", { name: /Voice/ });
    expect(chip).toHaveAttribute("aria-pressed", "false");
    expect(chip).toHaveTextContent("4");
    expect(screen.getByTestId("chip-dot")).toBeInTheDocument();
    rerender(
      <Chip selected dotColor="var(--cat-voice)" count={4}>
        Voice
      </Chip>,
    );
    expect(chip).toHaveAttribute("aria-pressed", "true");
  });
});

describe("Button", () => {
  it("defaults to a non-submitting button and forwards props", () => {
    const onClick = vi.fn();
    render(
      <Button variant="primary" onClick={onClick}>
        Copy the best line
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Copy the best line" });
    expect(button).toHaveAttribute("type", "button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });
});

describe("ListRow and DockBar", () => {
  it("renders the row slots", () => {
    render(
      <ListRow
        leading={<span>1</span>}
        title="Summary check"
        description="Reflect back the one thing that matters most."
        meta="Clarity"
        trailing={<button aria-label="Save Summary check" />}
      />,
    );
    expect(screen.getByText("Summary check")).toBeInTheDocument();
    expect(screen.getByText("Clarity")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Save Summary check" }),
    ).toBeInTheDocument();
  });

  it("docks its children", () => {
    render(
      <DockBar>
        <button>Search</button>
      </DockBar>,
    );
    expect(screen.getByTestId("dock-bar")).toContainElement(
      screen.getByRole("button", { name: "Search" }),
    );
  });
});

describe("category styles", () => {
  it("covers every Library category with its own colour", () => {
    const names = Object.keys(LIBRARY_CATEGORIES);
    expect(Object.keys(CATEGORY_STYLES).sort()).toEqual([...names].sort());
    expect(new Set(names.map((n) => categoryStyleFor(n).color)).size).toBe(
      names.length,
    );
  });

  it("falls back to a neutral style for an unknown category", () => {
    expect(categoryStyleFor("Something new")).toEqual({
      label: "Something new",
      short: "Something new",
      color: "var(--fg-55)",
    });
  });
});

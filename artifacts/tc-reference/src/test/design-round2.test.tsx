import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CardRefText } from "@/components/card-detail/card-ref-text";
import { useHeaderTitleShown, usePageTitleRef } from "@/lib/page-title";

describe("CardRefText", () => {
  it("links a cited card by its title", () => {
    render(
      <p>
        <CardRefText text="Listen and use receiving feedback (TC103)." />
      </p>,
    );
    const link = screen.getByRole("link", { name: "Receive feedback well" });
    expect(link).toHaveAttribute("href", "/card/TC103");
    expect(screen.queryByText(/TC103/)).not.toBeInTheDocument();
  });

  it("names but does not link inside a control", () => {
    render(
      <button type="button">
        <CardRefText
          text="TC033 Minimal encouragers keeps them talking."
          interactive={false}
        />
      </button>,
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(
      "Minimal encouragers keeps them talking.",
    );
  });

  it("drops a reference to the card being read", () => {
    render(
      <p data-testid="line">
        <CardRefText text={'You: "How so?" (TC003)'} selfId="TC003" />
      </p>,
    );
    expect(screen.getByTestId("line")).toHaveTextContent('You: "How so?"');
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});

function rect(bottom: number, height = 40): DOMRect {
  return {
    top: bottom - height,
    bottom,
    height,
    width: 300,
    left: 0,
    right: 300,
    x: 0,
    y: bottom - height,
    toJSON: () => ({}),
  } as DOMRect;
}

function Harness({ bottom }: { bottom: { current: number } }) {
  const ref = usePageTitleRef<HTMLHeadingElement>();
  const { hasPageTitle, shown } = useHeaderTitleShown();
  return (
    <>
      <p data-testid="state">
        {String(hasPageTitle)} {String(shown)}
      </p>
      <h1
        ref={(el) => {
          if (el) el.getBoundingClientRect = () => rect(bottom.current);
          ref(el);
        }}
      >
        Saved
      </h1>
    </>
  );
}

describe("header large title", () => {
  it("hides the header title while the page title is on screen", () => {
    const bottom = { current: 200 };
    const { unmount } = render(<Harness bottom={bottom} />);
    expect(screen.getByTestId("state")).toHaveTextContent("true false");
    bottom.current = 20;
    act(() => {
      fireEvent(window, new Event("resize"));
    });
    expect(screen.getByTestId("state")).toHaveTextContent("true true");
    unmount();
  });

  it("keeps the header title when the page title is not drawn", () => {
    function SrOnly() {
      const ref = usePageTitleRef<HTMLHeadingElement>();
      const { shown } = useHeaderTitleShown();
      return (
        <h1 ref={ref} data-testid="h">
          {String(shown)}
        </h1>
      );
    }
    // jsdom draws nothing: a zero box counts as screen-reader-only
    render(<SrOnly />);
    expect(screen.getByTestId("h")).toHaveTextContent("true");
  });
});

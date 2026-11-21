import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import Help from "../pages/help";
import { NavProvider } from "../lib/nav-context";
import { LIBRARY_CATEGORIES } from "../lib/data";
import { SITUATIONS } from "../lib/situations";

const CARDS = new Map(
  Object.values(LIBRARY_CATEGORIES)
    .flat()
    .map((c) => [c.id, c]),
);

function renderAt(path: string) {
  const location = memoryLocation({ path, record: true });
  render(
    <NavProvider>
      <Router hook={location.hook}>
        <Help />
      </Router>
    </NavProvider>,
  );
  return location;
}

beforeEach(() => {
  Object.assign(navigator, {
    clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
  });
});

describe("Help me right now", () => {
  it("lists all nine situations, each linking to its answer", () => {
    renderAt("/help");
    expect(
      screen.getByRole("heading", { level: 1, name: "What's happening?" }),
    ).toBeInTheDocument();
    for (const s of SITUATIONS) {
      const link = screen.getByTestId(`help-situation-${s.id}`);
      expect(link).toHaveAttribute("href", `/help/${s.id}`);
      expect(link).toHaveTextContent(s.label);
      expect(link).toHaveTextContent(s.tagline);
    }
  });

  it("shows the scope note on the picker", () => {
    renderAt("/help");
    expect(screen.getByTestId("help-scope-note")).toHaveTextContent(
      "This app helps with words, not clinical risk decisions.",
    );
  });

  it("leads the safety situation with the protocol and 000 note", () => {
    renderAt("/help/distressed-or-unsafe");
    const note = screen.getByTestId("help-safety");
    expect(note).toHaveTextContent("follow your organisation's safety");
    expect(note).toHaveTextContent("call 000");
    // The note comes before the first move in reading order.
    expect(
      note.compareDocumentPosition(screen.getByTestId("help-first")) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("shows no safety note on everyday situations", () => {
    renderAt("/help/say-no");
    expect(screen.queryByTestId("help-safety")).not.toBeInTheDocument();
  });

  it("reaches a line to say in two taps from the picker", async () => {
    const location = renderAt("/help");
    fireEvent.click(screen.getByTestId("help-situation-say-no"));
    expect(location.history?.at(-1)).toBe("/help/say-no");
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "I need to say no",
      }),
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", {
        name: "Copy: I can't take that on right now.",
      }),
    );
    await waitFor(() =>
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        "I can't take that on right now.",
      ),
    );
    expect(await screen.findByTestId("help-copy-status")).toHaveTextContent(
      "Copied",
    );
  });

  it.each(SITUATIONS.map((s) => [s.id, s] as const))(
    "answer screen for %s shows the move, three lines, next step and avoid",
    (_id, s) => {
      renderAt(`/help/${s.id}`);
      const lead = CARDS.get(s.leadCardId)!;
      const next = CARDS.get(s.followOn.cardId)!;
      expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
      expect(screen.getByTestId("help-first")).toHaveTextContent(lead.summary);
      expect(screen.getByTestId("help-first")).toHaveTextContent(lead.title);
      expect(
        screen.getByTestId("help-lines").querySelectorAll("button"),
      ).toHaveLength(3);
      for (const line of s.lines)
        expect(
          screen.getByRole("button", { name: `Copy: ${line}` }),
        ).toBeInTheDocument();
      const follow = screen.getByTestId("help-follow-on");
      expect(follow).toHaveAttribute("href", `/card/${s.followOn.cardId}`);
      expect(follow).toHaveTextContent(next.title);
      expect(screen.getByTestId("help-avoid")).toHaveTextContent(s.avoid);
      expect(screen.getByTestId("help-open-technique")).toHaveAttribute(
        "href",
        `/card/${s.leadCardId}`,
      );
    },
  );

  it("handles an unknown situation with a way back", () => {
    renderAt("/help/not-a-situation");
    expect(
      screen.getByRole("heading", { level: 1, name: "Situation not found" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("help-back")).toHaveAttribute("href", "/help");
  });
});

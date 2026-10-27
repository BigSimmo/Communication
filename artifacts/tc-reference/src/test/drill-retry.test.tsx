import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import Drill from "../pages/drill";
import Playbooks from "../pages/playbooks";
import { PlaybookProvider } from "../lib/playbook-context";
import { loadCard } from "../lib/card-loader";
import { TC001 } from "../lib/cards/TC001";

vi.mock("wouter");
vi.mock("../lib/card-loader", () => ({
  loadCard: vi.fn(),
  loadAllCards: vi.fn(),
}));

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  vi.mocked(useLocation).mockReturnValue(["/drill", vi.fn()]);
});

describe("Drill load failure (F-04)", () => {
  it("offers Retry after a failed load and recovers on success", async () => {
    vi.mocked(loadCard)
      .mockRejectedValueOnce(new Error("offline"))
      .mockResolvedValueOnce(TC001);
    render(<Drill />);

    expect(
      await screen.findByText("Drill content is unavailable right now."),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));

    expect(
      await screen.findByRole("button", { name: /^Good/ }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Retry" })).toBeNull();
    expect(loadCard).toHaveBeenCalledTimes(2);
  });

  it("also offers Retry when the card resolves to nothing", async () => {
    vi.mocked(loadCard).mockResolvedValue(null);
    render(<Drill />);
    expect(
      await screen.findByRole("button", { name: "Retry" }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));
    expect(
      await screen.findByRole("button", { name: "Retry" }),
    ).toBeInTheDocument();
    expect(loadCard).toHaveBeenCalledTimes(2);
  });

  it("shows no Retry while loading", () => {
    vi.mocked(loadCard).mockReturnValue(new Promise(() => {}));
    render(<Drill />);
    expect(screen.getByRole("status")).toHaveTextContent("Loading drill…");
    expect(screen.queryByRole("button", { name: "Retry" })).toBeNull();
  });
});

describe("Playbooks empty state (F-09)", () => {
  it("hides the decorative icon from assistive tech", () => {
    render(
      <PlaybookProvider>
        <Playbooks />
      </PlaybookProvider>,
    );
    const heading = screen.getByText("No playbooks yet");
    const icon = heading.closest("div")!.parentElement!.querySelector("svg");
    expect(icon).toHaveAttribute("aria-hidden", "true");
  });
});

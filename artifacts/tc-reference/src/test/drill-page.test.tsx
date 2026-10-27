import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import Drill from "../pages/drill";
import { loadCard } from "../lib/card-loader";
import { CARD_DATA } from "../lib/cards";
import { CARD_IDS, loadDrillState, loadSRSMap } from "../lib/drill-state";

vi.mock("wouter");
vi.mock("../lib/card-loader", () => ({
  loadCard: vi.fn(),
  loadAllCards: vi.fn(),
}));

const navigate = vi.fn();

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
  vi.useFakeTimers({ shouldAdvanceTime: true });
  vi.setSystemTime(new Date(2026, 2, 10, 9, 0));
  vi.mocked(useLocation).mockReturnValue(["/drill", navigate]);
  vi.mocked(loadCard).mockImplementation(async (id) => CARD_DATA[id] ?? null);
});

afterEach(() => {
  vi.useRealTimers();
});

async function renderDrill() {
  render(<Drill />);
  await screen.findByRole("button", { name: "Good: review later" });
}

describe("Drill page (F-12)", () => {
  it("shows today's task for the first card", async () => {
    await renderDrill();
    const first = CARD_DATA[CARD_IDS[0]];
    expect(screen.getByText(first.drill[0].task)).toBeInTheDocument();
    expect(screen.getByText("Start your streak")).toBeInTheDocument();
  });

  it.each([
    ["Hard: review soon", 1],
    ["Good: review later", 1],
    ["Easy: review much later", 1],
  ])(
    "rating %s completes the drill and schedules a review",
    async (name, interval) => {
      await renderDrill();
      await act(async () => {
        fireEvent.click(screen.getByRole("button", { name }));
      });
      expect(
        screen.getByText("Great work. Come back tomorrow"),
      ).toBeInTheDocument();
      expect(screen.getByText("1 day streak")).toBeInTheDocument();
      expect(loadDrillState()).toMatchObject({
        streak: 1,
        lastCompletionDate: "2026-03-10",
      });
      expect(loadSRSMap()[CARD_IDS[0]].interval).toBe(interval);
      expect(
        screen.queryByRole("button", { name: "Good: review later" }),
      ).toBeNull();
    },
  );

  it("keeps showing today's completion after a remount", async () => {
    await renderDrill();
    await act(async () => {
      fireEvent.click(
        screen.getByRole("button", { name: "Good: review later" }),
      );
    });
    cleanup();
    render(<Drill />);
    expect(
      (await screen.findAllByText("Great work. Come back tomorrow")).length,
    ).toBeGreaterThan(0);
  });

  it("opens the full card", async () => {
    await renderDrill();
    fireEvent.click(screen.getByTestId("drill-view-card"));
    expect(navigate).toHaveBeenCalledWith(`/card/${CARD_IDS[0]}`);
  });

  it("shows the unavailable state when the card can't load", async () => {
    vi.mocked(loadCard).mockRejectedValue(new Error("offline"));
    render(<Drill />);
    expect(
      await screen.findByText("Drill content is unavailable right now."),
    ).toBeInTheDocument();
  });
});

import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import Drill from "../pages/drill";
import { loadCard } from "../lib/card-loader";
import { CARD_DATA } from "../lib/cards";
import {
  CORE_FIRST_CARD_IDS,
  DRILL_STORAGE_KEY,
  SRS_STORAGE_KEY,
  loadDrillState,
  loadSRSMap,
  type DrillState,
} from "../lib/drill-state";
import { drillCardTitle } from "../lib/drill-view";
import { PlaybookProvider } from "../lib/playbook-context";

vi.mock("wouter");
vi.mock("../lib/card-loader", () => ({
  loadCard: vi.fn(),
  loadAllCards: vi.fn(),
}));

const navigate = vi.fn();
const FIRST = CORE_FIRST_CARD_IDS[0];
const SECOND = CORE_FIRST_CARD_IDS[1];

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.clearAllMocks();
  vi.useFakeTimers({ shouldAdvanceTime: true });
  // A Tuesday
  vi.setSystemTime(new Date(2026, 2, 10, 9, 0));
  vi.mocked(useLocation).mockReturnValue(["/drill", navigate]);
  vi.mocked(loadCard).mockImplementation(async (id) => CARD_DATA[id] ?? null);
});

afterEach(() => {
  vi.useRealTimers();
});

function seedDrill(patch: Partial<DrillState>) {
  localStorage.setItem(
    DRILL_STORAGE_KEY,
    JSON.stringify({ ...loadDrillState(), ...patch }),
  );
}

function seedReview(cardId: string, nextReviewDate: string) {
  const map = loadSRSMap();
  map[cardId] = {
    cardId,
    interval: 1,
    repetition: 1,
    efactor: 2.5,
    nextReviewDate,
  };
  localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(map));
}

async function renderDrill() {
  render(
    <PlaybookProvider>
      <Drill />
    </PlaybookProvider>,
  );
  await screen.findByTestId("drill-task-card");
}

const ratingButton = (name: RegExp) => screen.getByRole("button", { name });

async function rateAndFinish(name: RegExp) {
  fireEvent.click(ratingButton(name));
  await act(async () => {
    fireEvent.click(screen.getByTestId("drill-finish"));
  });
}

describe("Drill page: today's task", () => {
  it("shows today's task, the track and the day for the first card", async () => {
    await renderDrill();
    const first = CARD_DATA[FIRST];
    expect(screen.getByText(first.drill[0].task)).toBeInTheDocument();
    expect(screen.getByText(first.drill[0].title)).toBeInTheDocument();
    expect(screen.getByTestId("drill-track-label")).toHaveTextContent(
      `Everything · 1 of ${CORE_FIRST_CARD_IDS.length}`,
    );
    expect(screen.getByText("Day 1 of 7")).toBeInTheDocument();
  });

  it("hides the move until asked, then marks the recall step done", async () => {
    await renderDrill();
    const move = CARD_DATA[FIRST].overview.minimumViableMove;
    expect(screen.queryByText(move)).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Show the move" }));
    expect(screen.getByText(move)).toBeInTheDocument();
    expect(screen.getByText("Done, step 1")).toBeInTheDocument();
  });

  it("shows the task for the day the pace picks, not the day number", async () => {
    // Three days each: the days use the first, middle and last tasks
    seedDrill({ pace: 3, dayIndex: 1 });
    await renderDrill();
    expect(
      screen.getByText(CARD_DATA[FIRST].drill[3].task),
    ).toBeInTheDocument();
    expect(screen.getByText("Day 2 of 3")).toBeInTheDocument();
  });

  it("cannot finish until the technique is rated", async () => {
    await renderDrill();
    const finish = screen.getByTestId("drill-finish");
    expect(finish).toBeDisabled();
    fireEvent.click(ratingButton(/^Getting there/));
    expect(ratingButton(/^Getting there/)).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(finish).toBeEnabled();
    expect(finish).toHaveTextContent("Finish today's drill");
  });

  it("says when each rating brings the technique back", async () => {
    // A technique already reviewed twice: the gaps now differ by rating
    localStorage.setItem(
      SRS_STORAGE_KEY,
      JSON.stringify({
        [FIRST]: {
          cardId: FIRST,
          interval: 6,
          repetition: 2,
          efactor: 2.5,
          nextReviewDate: "2026-03-10",
        },
      }),
    );
    await renderDrill();
    expect(ratingButton(/^Not yet/)).toHaveAccessibleName(
      "Not yet: back tomorrow",
    );
    expect(ratingButton(/^Confident/)).toHaveAccessibleName(
      "Confident: back in 15 days",
    );
  });

  it.each([
    [/^Not yet/, "Not yet"],
    [/^Getting there/, "Getting there"],
    [/^Confident/, "Confident"],
  ])(
    "rating %s finishes the drill and schedules a review",
    async (name, label) => {
      await renderDrill();
      await rateAndFinish(name);
      const done = screen.getByTestId("drill-done");
      expect(done).toHaveTextContent("Day 1 done");
      expect(done).toHaveTextContent(`rated ${label}`);
      expect(screen.getByText("1 day streak")).toBeInTheDocument();
      expect(loadDrillState()).toMatchObject({
        streak: 1,
        dayIndex: 1,
        lastCompletionDate: "2026-03-10",
      });
      expect(loadSRSMap()[FIRST].nextReviewDate).toBe("2026-03-11");
      expect(screen.queryByTestId("drill-rating")).toBeNull();
    },
  );

  it("keeps the place in today's task after leaving and coming back", async () => {
    await renderDrill();
    fireEvent.click(screen.getByRole("button", { name: "Show the move" }));
    fireEvent.change(screen.getByLabelText("Reflect in one line"), {
      target: { value: "I rushed the pause" },
    });
    fireEvent.click(ratingButton(/^Confident/));
    cleanup();
    await renderDrill();
    expect(
      screen.getByText(CARD_DATA[FIRST].overview.minimumViableMove),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Reflect in one line")).toHaveValue(
      "I rushed the pause",
    );
    expect(ratingButton(/^Confident/)).toHaveAttribute("aria-pressed", "true");
  });

  it("opens the full card", async () => {
    await renderDrill();
    fireEvent.click(screen.getByTestId("drill-view-card"));
    expect(navigate).toHaveBeenCalledWith(`/card/${FIRST}`);
  });

  it("shows the unavailable state when the card can't load", async () => {
    vi.mocked(loadCard).mockRejectedValue(new Error("offline"));
    render(<Drill />);
    expect(
      await screen.findByText("Drill content is unavailable right now."),
    ).toBeInTheDocument();
  });
});

describe("Drill page: done for today", () => {
  it("keeps showing today's completion after a remount", async () => {
    await renderDrill();
    await rateAndFinish(/^Getting there/);
    cleanup();
    render(<Drill />);
    expect(await screen.findByTestId("drill-done")).toHaveTextContent(
      "Day 1 done",
    );
  });

  it("shows this week with today marked and what comes tomorrow", async () => {
    await renderDrill();
    await rateAndFinish(/^Getting there/);
    const states = Array.from(
      document.querySelectorAll("[data-day-state]"),
    ).map((el) => el.getAttribute("data-day-state"));
    // Tuesday 10 March 2026: Monday not drilled, today done, the rest ahead
    expect(states).toEqual([
      "open",
      "today",
      "ahead",
      "ahead",
      "ahead",
      "ahead",
      "ahead",
    ]);
    const next = await screen.findByTestId("drill-next");
    expect(next).toHaveTextContent("Tomorrow · Day 2 of 7");
    expect(next).toHaveTextContent(CARD_DATA[FIRST].drill[1].title);
  });

  it("undo puts the drill, the streak and the review back", async () => {
    seedReview(FIRST, "2026-03-10");
    const srsBefore = loadSRSMap()[FIRST];
    await renderDrill();
    const before = loadDrillState();
    await rateAndFinish(/^Confident/);
    expect(loadSRSMap()[FIRST]).not.toEqual(srsBefore);

    await act(async () => {
      fireEvent.click(screen.getByTestId("drill-undo"));
    });
    expect(loadDrillState()).toEqual(before);
    expect(loadSRSMap()[FIRST]).toEqual(srsBefore);
    expect(screen.queryByTestId("drill-done")).toBeNull();
    // The task reopens with the rating still chosen
    expect(ratingButton(/^Confident/)).toHaveAttribute("aria-pressed", "true");
  });

  it("undo removes a review record the drill created", async () => {
    await renderDrill();
    await rateAndFinish(/^Not yet/);
    expect(loadSRSMap()[FIRST]).toBeDefined();
    await act(async () => {
      fireEvent.click(screen.getByTestId("drill-undo"));
    });
    expect(loadSRSMap()[FIRST]).toBeUndefined();
  });

  it("offers no undo for a drill finished in an earlier sitting", async () => {
    await renderDrill();
    await rateAndFinish(/^Getting there/);
    cleanup();
    sessionStorage.clear();
    render(<Drill />);
    await screen.findByTestId("drill-done");
    expect(screen.queryByTestId("drill-undo")).toBeNull();
  });

  it("lets tomorrow's task be done now without adding to the streak", async () => {
    await renderDrill();
    await rateAndFinish(/^Getting there/);
    fireEvent.click(screen.getByTestId("drill-do-next"));
    expect(
      await screen.findByText(CARD_DATA[FIRST].drill[1].task),
    ).toBeInTheDocument();
    expect(screen.getByText("Day 2 of 7")).toBeInTheDocument();

    fireEvent.click(ratingButton(/^Confident/));
    expect(screen.getByTestId("drill-finish")).toHaveTextContent(
      "Finish this task",
    );
    await act(async () => {
      fireEvent.click(screen.getByTestId("drill-finish"));
    });
    expect(screen.getByTestId("drill-done")).toHaveTextContent("Day 2 done");
    expect(loadDrillState()).toMatchObject({ streak: 1, dayIndex: 2 });
  });

  it("marks the end of a technique and names the next one", async () => {
    seedDrill({ pace: 3, dayIndex: 2 });
    await renderDrill();
    await rateAndFinish(/^Confident/);
    expect(screen.getByTestId("drill-done")).toHaveTextContent("Day 3 done");
    expect(screen.getByTestId("drill-milestone")).toHaveTextContent(
      `You have finished ${drillCardTitle(FIRST)}`,
    );
    expect(await screen.findByTestId("drill-next")).toHaveTextContent(
      `Tomorrow · Next technique${drillCardTitle(SECOND)}`,
    );
    // The header still names the technique just finished
    expect(screen.getByTestId("drill-track-label")).toHaveTextContent("· 1 of");
  });
});

describe("Drill page: reviews due", () => {
  it("lists due reviews, most overdue first, without today's technique", async () => {
    seedReview(FIRST, "2026-03-10");
    seedReview("TC001", "2026-03-10");
    seedReview("TC003", "2026-03-05");
    seedReview("TC007", "2026-03-20");
    await renderDrill();
    const list = screen.getByTestId("drill-reviews");
    const rows = within(list).getAllByRole("button");
    expect(rows.map((r) => r.getAttribute("data-testid"))).toEqual([
      "drill-review-TC003",
      "drill-review-TC001",
    ]);
    expect(rows[0]).toHaveTextContent("5 days overdue");
    expect(rows[1]).toHaveTextContent("Due today");
  });

  it("shows no reviews section when nothing is due", async () => {
    await renderDrill();
    expect(screen.queryByTestId("drill-reviews")).toBeNull();
  });

  it("reviewing a technique reschedules it and leaves the drill alone", async () => {
    seedReview("TC003", "2026-03-05");
    await renderDrill();
    fireEvent.click(screen.getByTestId("drill-review-TC003"));

    const sheet = await screen.findByTestId("drill-review-sheet");
    expect(sheet).toHaveTextContent(drillCardTitle("TC003"));
    const move = CARD_DATA.TC003.overview.minimumViableMove;
    expect(within(sheet).queryByText(move)).toBeNull();
    fireEvent.click(
      await within(sheet).findByRole("button", { name: "Show the move" }),
    );
    expect(within(sheet).getByText(move)).toBeInTheDocument();

    fireEvent.click(
      within(sheet).getByRole("button", { name: /^Getting there/ }),
    );
    expect(screen.queryByTestId("drill-review-sheet")).toBeNull();
    expect(screen.queryByTestId("drill-reviews")).toBeNull();
    expect(loadSRSMap().TC003.nextReviewDate).toBe("2026-03-16");
    expect(screen.getByTestId("drill-announce")).toHaveTextContent(
      `${drillCardTitle("TC003")} comes back in 6 days.`,
    );
    expect(loadDrillState().lastCompletionDate).toBeNull();
  });

  it("shows three reviews first and the rest on request", async () => {
    for (const id of ["TC001", "TC003", "TC007", "TC008", "TC010"])
      seedReview(id, "2026-03-09");
    await renderDrill();
    const list = screen.getByTestId("drill-reviews");
    expect(within(list).getAllByTestId(/^drill-review-/)).toHaveLength(3);
    fireEvent.click(within(list).getByRole("button", { name: "Show all 5" }));
    expect(within(list).getAllByTestId(/^drill-review-/)).toHaveLength(5);
  });
});

describe("Drill page: track and pace", () => {
  it("suggests a shorter track to a new reader only", async () => {
    await renderDrill();
    expect(screen.getByTestId("drill-track-hint")).toHaveTextContent(
      "Everything takes about 2 years at a week each. Core 15 takes about 6 weeks.",
    );
    cleanup();
    seedDrill({ cardIndex: 2 });
    await renderDrill();
    expect(screen.queryByTestId("drill-track-hint")).toBeNull();
  });

  it("the suggestion opens the picker on Core at three days each", async () => {
    await renderDrill();
    fireEvent.click(screen.getByTestId("drill-track-hint"));
    expect(screen.getByTestId("drill-track-core")).toBeChecked();
    expect(screen.getByTestId("drill-pace-3")).toBeChecked();
    expect(screen.getByTestId("drill-track-timing")).toHaveTextContent(
      "Takes about 6 weeks",
    );
    await act(async () => {
      fireEvent.click(screen.getByTestId("drill-track-apply"));
    });
    expect(loadDrillState()).toMatchObject({
      track: { kind: "core" },
      pace: 3,
    });
    expect(screen.getByTestId("drill-track-label")).toHaveTextContent(
      "Core 15 · 1 of 15",
    );
    expect(await screen.findByText("Day 1 of 3")).toBeInTheDocument();
    expect(screen.queryByTestId("drill-track-sheet")).toBeNull();
  });

  it("changing only the pace keeps the technique and the streak", async () => {
    seedDrill({
      cardIndex: 4,
      dayIndex: 5,
      streak: 9,
      lastCompletionDate: "2026-03-09",
    });
    await renderDrill();
    fireEvent.click(screen.getByTestId("drill-change-track"));
    expect(screen.getByTestId("drill-track-everything")).toBeChecked();
    expect(screen.queryByTestId("drill-track-restart-note")).toBeNull();
    fireEvent.click(screen.getByTestId("drill-pace-3"));
    await act(async () => {
      fireEvent.click(screen.getByTestId("drill-track-apply"));
    });
    expect(loadDrillState()).toMatchObject({
      track: { kind: "everything" },
      pace: 3,
      cardIndex: 4,
      dayIndex: 2,
      streak: 9,
    });
  });

  it("warns that a new track starts from its first technique", async () => {
    seedDrill({ cardIndex: 4, streak: 9, lastCompletionDate: "2026-03-09" });
    await renderDrill();
    fireEvent.click(screen.getByTestId("drill-change-track"));
    fireEvent.click(screen.getByTestId("drill-track-category"));
    expect(screen.getByTestId("drill-track-restart-note")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /^Resilience/ }));
    await act(async () => {
      fireEvent.click(screen.getByTestId("drill-track-apply"));
    });
    expect(loadDrillState()).toMatchObject({
      track: { kind: "category", category: "Resilience / Recovery" },
      cardIndex: 0,
      dayIndex: 0,
      streak: 9,
    });
    expect(screen.getByTestId("drill-track-label")).toHaveTextContent(
      "Resilience and recovery · 1 of",
    );
  });

  it("drills a saved playbook and names it in the header", async () => {
    localStorage.setItem(
      "tc_playbooks",
      JSON.stringify([
        {
          id: "pb_mine",
          name: "Monday handover",
          description: "",
          cardIds: ["TC003", "TC001"],
        },
      ]),
    );
    await renderDrill();
    fireEvent.click(screen.getByTestId("drill-change-track"));
    fireEvent.click(screen.getByTestId("drill-track-playbook"));
    expect(screen.getByLabelText("Playbook")).toHaveValue("pb_mine");
    await act(async () => {
      fireEvent.click(screen.getByTestId("drill-track-apply"));
    });
    expect(loadDrillState().track).toEqual({
      kind: "playbook",
      playbookId: "pb_mine",
      cardIds: ["TC003", "TC001"],
    });
    expect(screen.getByTestId("drill-track-label")).toHaveTextContent(
      "Monday handover · 1 of 2",
    );
    expect(
      await screen.findByText(CARD_DATA.TC003.drill[0].task),
    ).toBeInTheDocument();
  });

  it("cancel leaves the drill as it was", async () => {
    seedDrill({ cardIndex: 4 });
    await renderDrill();
    const before = loadDrillState();
    fireEvent.click(screen.getByTestId("drill-change-track"));
    fireEvent.click(screen.getByTestId("drill-track-core"));
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(screen.queryByTestId("drill-track-sheet")).toBeNull();
    expect(loadDrillState()).toEqual(before);
  });
});

import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import Playbooks from "../pages/playbooks";
import { BottomTabBar } from "../components/bottom-tab-bar";
import { PLAYBOOK_TEMPLATES } from "../lib/playbook-templates";
import { SRS_STORAGE_KEY, updateSRS } from "../lib/drill-state";
import { useSwipe } from "../hooks/use-swipe";
import { FavouritesProvider } from "../lib/favourites-context";
import { PlaybookProvider } from "../lib/playbook-context";
import { NavProvider } from "../lib/nav-context";
import { QuickModeProvider } from "../lib/quick-mode";
import { ThemeProvider } from "../lib/theme";
import { PdfProvider } from "../lib/pdf-context";

vi.mock("wouter", () => ({
  useLocation: vi.fn(),
  Link: ({
    href,
    children,
    ...props
  }: React.ComponentProps<"a"> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QuickModeProvider>
        <NavProvider>
          <FavouritesProvider>
            <PlaybookProvider>
              <PdfProvider>{children}</PdfProvider>
            </PlaybookProvider>
          </FavouritesProvider>
        </NavProvider>
      </QuickModeProvider>
    </ThemeProvider>
  );
}

beforeEach(() => {
  localStorage.clear();
  vi.mocked(useLocation).mockReturnValue(["/playbooks", vi.fn()]);
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

afterEach(() => {
  window.history.replaceState(null, "", "/");
});

describe("Playbooks template links", () => {
  it("opens the editor with the linked template loaded", () => {
    const template = PLAYBOOK_TEMPLATES[0];
    window.history.replaceState(
      null,
      "",
      `/playbooks?template=${encodeURIComponent(template.id)}`,
    );
    render(
      <Wrapper>
        <Playbooks />
      </Wrapper>,
    );
    expect(screen.getByLabelText(/name/i)).toHaveValue(template.name);
  });

  it("ignores an unknown template id", () => {
    window.history.replaceState(null, "", "/playbooks?template=nope");
    render(
      <Wrapper>
        <Playbooks />
      </Wrapper>,
    );
    expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument();
  });
});

describe("Playbook print", () => {
  it("prints one playbook as a run sheet and clears it afterwards", () => {
    localStorage.setItem(
      "tc_playbooks",
      JSON.stringify([
        {
          id: "pb_print_1",
          name: "Hard news",
          description: "For a difficult update",
          cardIds: ["TC001", "TC002"],
        },
      ]),
    );
    const print = vi.fn();
    vi.stubGlobal("print", print);
    render(
      <Wrapper>
        <Playbooks />
      </Wrapper>,
    );
    expect(screen.queryByTestId("playbook-print-sheet")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Print Hard news" }));

    const sheet = screen.getByTestId("playbook-print-sheet");
    expect(sheet.parentElement).toBe(document.body);
    expect(sheet).toHaveClass("print-target");
    expect(sheet).toHaveTextContent("Hard news");
    expect(sheet.querySelectorAll("li")).toHaveLength(2);
    expect(print).toHaveBeenCalledTimes(1);

    act(() => {
      window.dispatchEvent(new Event("afterprint"));
    });
    expect(screen.queryByTestId("playbook-print-sheet")).toBeNull();
    vi.unstubAllGlobals();
  });
});

describe("Drill tab badge", () => {
  it("shows and announces reviews that are due", () => {
    localStorage.setItem(
      SRS_STORAGE_KEY,
      JSON.stringify({
        TC001: {
          cardId: "TC001",
          interval: 1,
          repetition: 1,
          efactor: 2.5,
          nextReviewDate: "2000-01-01",
        },
      }),
    );
    render(
      <Wrapper>
        <BottomTabBar />
      </Wrapper>,
    );
    expect(screen.getByTestId("nav-tab-drill")).toHaveAccessibleName(
      "Drill, 1 review due",
    );
  });

  it("updates as soon as a due review is rated", () => {
    localStorage.setItem(
      SRS_STORAGE_KEY,
      JSON.stringify({
        TC001: {
          cardId: "TC001",
          interval: 1,
          repetition: 1,
          efactor: 2.5,
          nextReviewDate: "2000-01-01",
        },
      }),
    );
    render(
      <Wrapper>
        <BottomTabBar />
      </Wrapper>,
    );
    act(() => {
      updateSRS("TC001", "confident");
    });
    expect(screen.getByTestId("nav-tab-drill")).toHaveAccessibleName("Drill");
  });

  it("keeps the plain name when nothing is due", () => {
    render(
      <Wrapper>
        <BottomTabBar />
      </Wrapper>,
    );
    expect(screen.getByTestId("nav-tab-drill")).toHaveAccessibleName("Drill");
  });
});

describe("useSwipe", () => {
  function Swiper(props: { onLeft: () => void; onRight: () => void }) {
    const swipe = useSwipe({
      onSwipeLeft: props.onLeft,
      onSwipeRight: props.onRight,
    });
    return <div data-testid="swipe" {...swipe} />;
  }
  const touch = (x: number, y: number) => [{ clientX: x, clientY: y }];
  const drag = (from: [number, number], to: [number, number]) => {
    const el = screen.getByTestId("swipe");
    fireEvent.touchStart(el, { touches: touch(...from) });
    fireEvent.touchEnd(el, { changedTouches: touch(...to) });
  };

  it("fires on a quick sideways swipe in each direction", () => {
    const onLeft = vi.fn();
    const onRight = vi.fn();
    render(<Swiper onLeft={onLeft} onRight={onRight} />);
    drag([300, 200], [180, 210]);
    expect(onLeft).toHaveBeenCalledTimes(1);
    drag([100, 200], [220, 190]);
    expect(onRight).toHaveBeenCalledTimes(1);
  });

  it("ignores short moves and vertical scrolling", () => {
    const onLeft = vi.fn();
    const onRight = vi.fn();
    render(<Swiper onLeft={onLeft} onRight={onRight} />);
    drag([300, 200], [270, 200]);
    drag([300, 200], [220, 400]);
    expect(onLeft).not.toHaveBeenCalled();
    expect(onRight).not.toHaveBeenCalled();
  });
});

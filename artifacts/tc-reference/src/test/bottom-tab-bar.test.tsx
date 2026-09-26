import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useLocation } from "wouter";
import { BottomTabBar } from "../components/bottom-tab-bar";
import { FavouritesProvider } from "../lib/favourites-context";

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

function renderBar() {
  return render(
    <FavouritesProvider>
      <BottomTabBar />
      <input data-testid="text-field" type="text" />
      <input data-testid="checkbox-field" type="checkbox" />
    </FavouritesProvider>,
  );
}

// One scroll event per animation frame, like a real scroll
const scrollTo = (y: number) =>
  act(async () => {
    Object.defineProperty(window, "scrollY", { configurable: true, value: y });
    window.dispatchEvent(new Event("scroll"));
    await new Promise<void>((r) => requestAnimationFrame(() => r()));
  });

beforeEach(() => {
  localStorage.clear();
  vi.mocked(useLocation).mockReturnValue(["/phrases", vi.fn()]);
  Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
  Object.defineProperty(window, "innerHeight", { configurable: true, value: 800 });
  Object.defineProperty(document.documentElement, "scrollHeight", {
    configurable: true,
    value: 6000,
  });
});

describe("BottomTabBar", () => {
  it("marks the current destination", () => {
    renderBar();
    expect(screen.getByTestId("nav-tab-phrases")).toHaveAttribute("aria-current", "page");
    expect(screen.getByTestId("nav-tab-library")).not.toHaveAttribute("aria-current");
  });

  it("hides while scrolling down and returns on scroll up", async () => {
    renderBar();
    const bar = screen.getByTestId("bottom-tab-bar");
    expect(bar).toHaveAttribute("data-hidden", "false");

    await scrollTo(300);
    await waitFor(() => expect(bar).toHaveAttribute("data-hidden", "true"));
    // Hidden links drop out of the tab order
    expect(screen.getByTestId("nav-tab-drill")).toHaveAttribute("tabindex", "-1");

    // Keeps hiding as reading continues
    await scrollTo(900);
    await waitFor(() => expect(bar).toHaveAttribute("data-hidden", "true"));

    await scrollTo(860);
    await waitFor(() => expect(bar).toHaveAttribute("data-hidden", "false"));
    expect(screen.getByTestId("nav-tab-drill")).not.toHaveAttribute("tabindex");
  });

  it("ignores tiny scroll jitter", async () => {
    renderBar();
    const bar = screen.getByTestId("bottom-tab-bar");
    await scrollTo(300);
    await waitFor(() => expect(bar).toHaveAttribute("data-hidden", "true"));
    await scrollTo(296);
    await new Promise((r) => setTimeout(r, 50));
    expect(bar).toHaveAttribute("data-hidden", "true");
  });

  it("reappears on a new route", async () => {
    const { rerender } = renderBar();
    const bar = screen.getByTestId("bottom-tab-bar");
    await scrollTo(300);
    await waitFor(() => expect(bar).toHaveAttribute("data-hidden", "true"));

    vi.mocked(useLocation).mockReturnValue(["/drill", vi.fn()]);
    rerender(
      <FavouritesProvider>
        <BottomTabBar />
      </FavouritesProvider>,
    );
    await waitFor(() => expect(bar).toHaveAttribute("data-hidden", "false"));
  });

  it("gets out of the way of the keyboard while typing", () => {
    renderBar();
    const bar = screen.getByTestId("bottom-tab-bar");

    fireEvent.focusIn(screen.getByTestId("text-field"));
    expect(bar).toHaveAttribute("data-hidden", "true");
    fireEvent.focusOut(screen.getByTestId("text-field"));
    expect(bar).toHaveAttribute("data-hidden", "false");

    // Non-text controls don't summon a keyboard
    fireEvent.focusIn(screen.getByTestId("checkbox-field"));
    expect(bar).toHaveAttribute("data-hidden", "false");
  });

  it("scrolls to top when the current tab is tapped again", () => {
    const scrollSpy = vi.fn();
    window.scrollTo = scrollSpy as unknown as typeof window.scrollTo;
    renderBar();
    fireEvent.click(screen.getByTestId("nav-tab-phrases"));
    expect(scrollSpy).toHaveBeenCalledWith(expect.objectContaining({ top: 0 }));
  });
});

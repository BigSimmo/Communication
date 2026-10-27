import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeProvider, useTheme } from "../lib/theme";

type Listener = (e: { matches: boolean }) => void;

/** A controllable prefers-color-scheme: light media query. */
function mockSystemTheme(light: boolean) {
  const listeners = new Set<Listener>();
  const mql = {
    matches: light,
    addEventListener: (_: string, l: Listener) => listeners.add(l),
    removeEventListener: (_: string, l: Listener) => listeners.delete(l),
  };
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    configurable: true,
    value: vi.fn().mockReturnValue(mql),
  });
  return {
    change(nextLight: boolean) {
      mql.matches = nextLight;
      act(() => listeners.forEach((l) => l({ matches: nextLight })));
    },
    listenerCount: () => listeners.size,
  };
}

function Probe() {
  const { theme, toggle } = useTheme();
  return (
    <button type="button" onClick={toggle}>
      theme:{theme}
    </button>
  );
}

const html = () => document.documentElement;

beforeEach(() => {
  localStorage.clear();
  html().removeAttribute("data-theme");
  html().classList.remove("dark");
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("ThemeProvider (F-06)", () => {
  it("follows the system theme on first visit without persisting it", () => {
    mockSystemTheme(true);
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveTextContent("theme:light");
    expect(html()).toHaveAttribute("data-theme", "light");
    expect(html()).not.toHaveClass("dark");
    expect(localStorage.getItem("tc_theme")).toBeNull();
  });

  it("tracks OS theme changes until the user chooses", () => {
    const system = mockSystemTheme(false);
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    expect(html()).toHaveAttribute("data-theme", "dark");
    system.change(true);
    expect(screen.getByRole("button")).toHaveTextContent("theme:light");
    expect(html()).toHaveAttribute("data-theme", "light");
    expect(localStorage.getItem("tc_theme")).toBeNull();
  });

  it("persists an explicit toggle and then ignores OS changes", () => {
    const system = mockSystemTheme(false);
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    act(() => screen.getByRole("button").click());
    expect(localStorage.getItem("tc_theme")).toBe("light");
    expect(html()).toHaveAttribute("data-theme", "light");
    system.change(false);
    expect(screen.getByRole("button")).toHaveTextContent("theme:light");
  });

  it("uses a stored choice over the system theme and ignores junk values", () => {
    mockSystemTheme(true);
    localStorage.setItem("tc_theme", "dark");
    const { unmount } = render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveTextContent("theme:dark");
    expect(html()).toHaveClass("dark");
    unmount();

    localStorage.setItem("tc_theme", "sepia");
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveTextContent("theme:light");
  });

  it("pins theme-color metas to the active theme", () => {
    mockSystemTheme(false);
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.setAttribute("media", "(prefers-color-scheme: light)");
    document.head.appendChild(meta);
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    expect(meta.getAttribute("content")).toBe("#0f1724");
    expect(meta.hasAttribute("media")).toBe(false);
    meta.remove();
  });

  it("picks up a theme chosen in another tab", () => {
    mockSystemTheme(false);
    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    localStorage.setItem("tc_theme", "light");
    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", { key: "tc_theme", newValue: "light" }),
      );
    });
    expect(screen.getByRole("button")).toHaveTextContent("theme:light");
  });

  it("removes its media listener on unmount", () => {
    const system = mockSystemTheme(false);
    const { unmount } = render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );
    expect(system.listenerCount()).toBe(1);
    unmount();
    expect(system.listenerCount()).toBe(0);
  });
});

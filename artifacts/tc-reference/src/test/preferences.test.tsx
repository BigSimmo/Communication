import { act, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import {
  PREFERENCES_STORAGE_KEY,
  PreferencesSync,
  loadPreferences,
  printInLight,
  sanitisePreferences,
  usePreferences,
} from "../lib/preferences";
import { exportBackup, importBackup } from "../lib/backup";

function Toggle() {
  const { prefs, update } = usePreferences();
  return (
    <button
      type="button"
      onClick={() => update({ largePhrases: !prefs.largePhrases })}
    >
      large:{String(prefs.largePhrases)}
    </button>
  );
}

const html = () => document.documentElement;

beforeEach(() => {
  localStorage.clear();
  html().removeAttribute("data-large-phrases");
  html().removeAttribute("data-theme");
  html().classList.remove("dark");
});

describe("preferences", () => {
  it("reads missing, corrupt and old-shaped records as the defaults", () => {
    expect(loadPreferences()).toEqual({ largePhrases: false });
    localStorage.setItem(PREFERENCES_STORAGE_KEY, "{not json");
    expect(loadPreferences()).toEqual({ largePhrases: false });
    expect(sanitisePreferences([])).toEqual({ largePhrases: false });
    expect(sanitisePreferences({ largePhrases: "yes" })).toEqual({
      largePhrases: false,
    });
    expect(sanitisePreferences({ largePhrases: true, extra: 1 })).toEqual({
      largePhrases: true,
    });
  });

  it("saves the switch and marks <html> so phrase text grows", () => {
    render(
      <>
        <PreferencesSync />
        <Toggle />
      </>,
    );
    expect(html()).not.toHaveAttribute("data-large-phrases");
    act(() => screen.getByRole("button").click());
    expect(screen.getByRole("button")).toHaveTextContent("large:true");
    expect(html()).toHaveAttribute("data-large-phrases", "true");
    expect(JSON.parse(localStorage.getItem(PREFERENCES_STORAGE_KEY)!)).toEqual({
      largePhrases: true,
    });
  });

  it("travels in a backup, and an older backup without it restores", () => {
    localStorage.setItem(
      PREFERENCES_STORAGE_KEY,
      JSON.stringify({ largePhrases: true }),
    );
    const backup = exportBackup();
    expect(backup.data.tc_preferences).toEqual({ largePhrases: true });

    importBackup(
      JSON.stringify({
        app: "tc-reference",
        version: 1,
        exportedAt: "2026-01-01T00:00:00.000Z",
        data: { tc_theme: "dark" },
      }),
    );
    expect(loadPreferences()).toEqual({ largePhrases: false });
  });

  it("prints in the light theme and puts the dark theme back", () => {
    html().setAttribute("data-theme", "dark");
    html().classList.add("dark");
    const stop = printInLight();
    window.dispatchEvent(new Event("beforeprint"));
    expect(html()).toHaveAttribute("data-theme", "light");
    expect(html()).not.toHaveClass("dark");
    window.dispatchEvent(new Event("afterprint"));
    expect(html()).toHaveAttribute("data-theme", "dark");
    expect(html()).toHaveClass("dark");
    stop();
  });
});

import { createContext, useContext, useEffect, useState } from "react";
import { useStorageSync } from "./storage-sync";

type Theme = "light" | "dark";
/** What the person picked in Settings: a fixed theme, or follow the system. */
export type ThemeChoice = Theme | "system";

interface ThemeContextValue {
  theme: Theme;
  /** "system" until the person picks Light or Dark. */
  choice: ThemeChoice;
  toggle: () => void;
  setChoice: (choice: ThemeChoice) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  choice: "system",
  toggle: () => {},
  setChoice: () => {},
});

const STORAGE_KEY = "tc_theme";
const LIGHT_QUERY = "(prefers-color-scheme: light)";

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  // Anything other than the two known values (a hand-edited or legacy entry)
  // is ignored in favour of the system preference.
  return null;
}

function getSystemTheme(): Theme {
  return window.matchMedia?.(LIGHT_QUERY).matches ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  // Tailwind's dark: variant and shadcn components key off the .dark class,
  // so keep it in sync with the data-theme attribute.
  document.documentElement.classList.toggle("dark", theme === "dark");
  // Safari tints its toolbars with theme-color; the stored theme can differ
  // from prefers-color-scheme, so pin the metas to the active theme.
  const color = theme === "dark" ? "#0f1724" : "#f8fafc";
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    m.setAttribute("content", color);
    m.removeAttribute("media");
  });
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Only an explicit choice is persisted. Until the user toggles, the theme
  // follows the system preference, including changes while the app is open.
  const [stored, setStored] = useState<Theme | null>(getStoredTheme);
  const [system, setSystem] = useState<Theme>(getSystemTheme);
  const theme = stored ?? system;

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mql = window.matchMedia?.(LIGHT_QUERY);
    if (!mql?.addEventListener) return;
    const onChange = (e: MediaQueryListEvent) =>
      setSystem(e.matches ? "light" : "dark");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Keep tabs in step when the theme is chosen in another window.
  useStorageSync([STORAGE_KEY], () => setStored(getStoredTheme()));

  // "system" removes the stored key, so the theme follows the device again
  // and a backup carries no theme.
  const setChoice = (choice: ThemeChoice) => {
    const next = choice === "system" ? null : choice;
    setStored(next);
    try {
      if (next) localStorage.setItem(STORAGE_KEY, next);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const toggle = () => setChoice(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider
      value={{ theme, choice: stored ?? "system", toggle, setChoice }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

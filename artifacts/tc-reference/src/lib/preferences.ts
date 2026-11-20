import { useCallback, useEffect, useState } from "react";
import { isRecord, safeParseJSON } from "./storage-validation";
import { useStorageSync } from "./storage-sync";

/**
 * Small display preferences set in the Settings sheet. One JSON object under
 * one key, so a later preference needs no new storage key or backup entry.
 * A missing, corrupt or old-shaped record reads as the defaults.
 */
export interface Preferences {
  /** Show phrases (anything marked `.phrase-text`) at a larger size. */
  largePhrases: boolean;
}

export const PREFERENCES_STORAGE_KEY = "tc_preferences";
export const DEFAULT_PREFERENCES: Preferences = { largePhrases: false };
const CHANGE_EVENT = "tc-preferences-changed";

export function sanitisePreferences(value: unknown): Preferences {
  if (!isRecord(value)) return { ...DEFAULT_PREFERENCES };
  return {
    largePhrases: value.largePhrases === true,
  };
}

export function loadPreferences(): Preferences {
  try {
    const raw = localStorage.getItem(PREFERENCES_STORAGE_KEY);
    return sanitisePreferences(raw === null ? null : safeParseJSON(raw));
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function savePreferences(prefs: Preferences): void {
  try {
    localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(prefs));
  } catch {}
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Reflect preferences on <html> so plain CSS can follow them. */
export function applyPreferences(prefs: Preferences): void {
  const root = document.documentElement;
  if (prefs.largePhrases) root.setAttribute("data-large-phrases", "true");
  else root.removeAttribute("data-large-phrases");
}

/** Read and change preferences; every user stays in step, across tabs too. */
export function usePreferences() {
  const [prefs, setPrefs] = useState<Preferences>(loadPreferences);

  useEffect(() => {
    const refresh = () => setPrefs(loadPreferences());
    window.addEventListener(CHANGE_EVENT, refresh);
    return () => window.removeEventListener(CHANGE_EVENT, refresh);
  }, []);
  useStorageSync([PREFERENCES_STORAGE_KEY], () => setPrefs(loadPreferences()));

  const update = useCallback((patch: Partial<Preferences>) => {
    const next = { ...loadPreferences(), ...patch };
    savePreferences(next);
    setPrefs(next);
  }, []);

  return { prefs, update };
}

/**
 * Paper is white, so print in the light theme whatever is on screen: swap
 * the theme attributes before printing and put them back afterwards.
 */
export function printInLight(win: Window = window): () => void {
  const root = win.document.documentElement;
  let saved: { theme: string | null; dark: boolean } | null = null;
  const before = () => {
    saved = {
      theme: root.getAttribute("data-theme"),
      dark: root.classList.contains("dark"),
    };
    root.setAttribute("data-theme", "light");
    root.classList.remove("dark");
  };
  const after = () => {
    if (!saved) return;
    if (saved.theme === null) root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", saved.theme);
    root.classList.toggle("dark", saved.dark);
    saved = null;
  };
  win.addEventListener("beforeprint", before);
  win.addEventListener("afterprint", after);
  return () => {
    win.removeEventListener("beforeprint", before);
    win.removeEventListener("afterprint", after);
  };
}

/**
 * Mounted once in App: keeps the <html> attributes in step with storage and
 * prints in the light theme.
 */
export function PreferencesSync() {
  const { prefs } = usePreferences();
  useEffect(() => applyPreferences(prefs), [prefs]);
  useEffect(() => printInLight(), []);
  return null;
}

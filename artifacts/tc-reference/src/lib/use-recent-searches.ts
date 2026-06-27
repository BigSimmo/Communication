import { useState, useCallback } from "react";

const STORAGE_KEY = "tc-recent-searches";
const MAX_RECENTS = 5;

function readRecents(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeRecents(recents: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recents));
  } catch {
    // storage unavailable — silently ignore
  }
}

export function useRecentSearches() {
  const [recents, setRecents] = useState<string[]>(() => readRecents());

  const addRecent = useCallback((term: string) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    setRecents((prev) => {
      const deduped = [trimmed, ...prev.filter((r) => r.toLowerCase() !== trimmed.toLowerCase())];
      const capped = deduped.slice(0, MAX_RECENTS);
      writeRecents(capped);
      return capped;
    });
  }, []);

  const clearRecents = useCallback(() => {
    writeRecents([]);
    setRecents([]);
  }, []);

  return { recents, addRecent, clearRecents };
}

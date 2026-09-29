import { useState, useCallback } from "react";
import { safeParseJSON, sanitiseStringArray } from "./storage-validation";

const STORAGE_KEY = "tc-recent-searches";
const MAX_RECENTS = 5;

/**
 * Shape check for stored recents: non-blank strings only, case-insensitively
 * de-duplicated (first occurrence wins, matching addRecent) and capped at
 * MAX_RECENTS. A valid stored list comes back unchanged.
 */
export function sanitiseRecents(value: unknown): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const term of sanitiseStringArray(value)) {
    const key = term.toLowerCase();
    if (!term.trim() || seen.has(key)) continue;
    seen.add(key);
    out.push(term);
    if (out.length === MAX_RECENTS) break;
  }
  return out;
}

function readRecents(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return sanitiseRecents(safeParseJSON(raw));
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
      const deduped = [
        trimmed,
        ...prev.filter((r) => r.toLowerCase() !== trimmed.toLowerCase()),
      ];
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

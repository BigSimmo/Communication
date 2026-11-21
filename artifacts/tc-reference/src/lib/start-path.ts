// Progress through the "Start here" path: which of the core cards the reader
// has opened. Small and optional, but it is the reader's progress, so it
// travels in the backup file (see BACKUP_KEYS) along with the welcome flag.
import { CORE_CARD_IDS, CORE_CARD_SET } from "./data";

const OPENED_KEY = "tc_start_opened";
const WELCOME_KEY = "tc_welcome_dismissed";

/** Core card ids the reader has opened, in path order. */
export function readStartOpened(): string[] {
  try {
    const parsed: unknown = JSON.parse(
      localStorage.getItem(OPENED_KEY) ?? "[]",
    );
    if (!Array.isArray(parsed)) return [];
    const opened = new Set(parsed.filter((id) => typeof id === "string"));
    return CORE_CARD_IDS.filter((id) => opened.has(id));
  } catch {
    return [];
  }
}

export function markStartCardOpened(cardId: string): void {
  if (!CORE_CARD_SET.has(cardId)) return;
  try {
    const opened = readStartOpened();
    if (opened.includes(cardId)) return;
    localStorage.setItem(OPENED_KEY, JSON.stringify([...opened, cardId]));
  } catch {
    // Storage can be full or blocked (private mode); progress is optional.
  }
}

/** First core card not opened yet, or null once the path is finished. */
export function nextStartCard(opened: readonly string[]): string | null {
  const seen = new Set(opened);
  return CORE_CARD_IDS.find((id) => !seen.has(id)) ?? null;
}

export function isWelcomeDismissed(): boolean {
  try {
    return localStorage.getItem(WELCOME_KEY) === "1";
  } catch {
    // Without storage the welcome would return on every visit; skip it.
    return true;
  }
}

export function dismissWelcome(): void {
  try {
    localStorage.setItem(WELCOME_KEY, "1");
  } catch {
    // Storage blocked: nothing to remember.
  }
}

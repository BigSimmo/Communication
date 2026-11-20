// ── Scroll restoration ──
// Leaving the Library saves where the reader was (sessionStorage) against an
// id stamped on the Library's own history entry. Back/Forward lands on that
// same entry and restores; tapping the Library tab pushes a fresh entry with
// no id, so it starts at the top.
const SCROLL_STORAGE_KEY = "tc_library_scroll";
const HISTORY_ENTRY_KEY = "tcLibraryEntry";
// Must match the useScrollDirection threshold below
export const SCROLL_DIRECTION_THRESHOLD = 60;
export const SCROLL_FLIP_THRESHOLD = 12;

export interface SavedLibraryScroll {
  entry: string;
  y: number;
  // A card visible when the reader left, and its distance from the top of
  // the viewport. Restoring against the card is exact even when off screen
  // rows (content-visibility: auto) are laid out with estimated heights.
  anchorId?: string;
  anchorTop?: number;
}

export function readSavedScroll(): SavedLibraryScroll | null {
  try {
    const raw = window.sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof (parsed as SavedLibraryScroll).entry === "string" &&
      typeof (parsed as SavedLibraryScroll).y === "number"
    ) {
      return parsed as SavedLibraryScroll;
    }
  } catch {
    // Storage blocked or corrupt: start at the top
  }
  return null;
}

export function writeSavedScroll(value: SavedLibraryScroll) {
  try {
    window.sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Storage blocked or full: restoration is a nicety, never an error
  }
}

/** Returns this history entry's Library id, stamping a new one if absent. */
export function ensureHistoryEntryId(): { id: string; isNew: boolean } {
  try {
    const state: unknown = window.history.state;
    const existing =
      state && typeof state === "object"
        ? (state as Record<string, unknown>)[HISTORY_ENTRY_KEY]
        : undefined;
    if (typeof existing === "string") return { id: existing, isNew: false };
    const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
    window.history.replaceState(
      {
        ...(state && typeof state === "object" ? state : {}),
        [HISTORY_ENTRY_KEY]: id,
      },
      "",
    );
    return { id, isNew: true };
  } catch {
    return { id: "", isNew: true };
  }
}

/** True when this render is a Back/Forward return with a saved position. */
export function hasPendingRestore(): boolean {
  try {
    const state: unknown = window.history.state;
    const entry =
      state && typeof state === "object"
        ? (state as Record<string, unknown>)[HISTORY_ENTRY_KEY]
        : undefined;
    return typeof entry === "string" && readSavedScroll()?.entry === entry;
  } catch {
    return false;
  }
}

export function scrollWindowTo(top: number) {
  const next = Math.max(0, top);
  if (Math.abs(window.scrollY - next) < 1) return;
  try {
    window.scrollTo({
      top: next,
      behavior: "instant" as ScrollBehavior,
    });
  } catch {
    // jsdom and very old browsers
  }
}

export function findLibraryCard(root: ParentNode, id: string) {
  return Array.from(
    root.querySelectorAll<HTMLElement>("[data-library-card]"),
  ).find((el) => el.dataset.libraryCard === id);
}

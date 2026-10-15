// Last few technique cards the user opened, newest first. Device-local and
// non-essential, so it is not part of the backup file.
const STORAGE_KEY = "tc_recent_cards";
const MAX_RECENT = 6;
const CARD_ID = /^TC\d{3}$/;

export function readRecentCards(): string[] {
  try {
    const parsed: unknown = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "[]",
    );
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((id): id is string => typeof id === "string" && CARD_ID.test(id))
      .slice(0, MAX_RECENT);
  } catch {
    return [];
  }
}

export function recordRecentCard(cardId: string): void {
  if (!CARD_ID.test(cardId)) return;
  try {
    const next = [cardId, ...readRecentCards().filter((id) => id !== cardId)];
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(next.slice(0, MAX_RECENT)),
    );
  } catch {
    // Storage can be full or blocked (private mode); recents are optional.
  }
}

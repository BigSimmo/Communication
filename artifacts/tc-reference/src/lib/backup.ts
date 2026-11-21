/**
 * Export and import of all user data kept in localStorage.
 *
 * The app has no backend, so a JSON backup file is the only way to move
 * favourites, drill progress, playbooks and settings between devices or to
 * survive clearing site data. Only the keys listed in BACKUP_KEYS are ever
 * read or written; anything else in a backup file is rejected.
 */

import { recordBackupExported } from "./data-safety";
import { saveFile } from "./share";

export const BACKUP_APP = "tc-reference";
/**
 * Version 2 added the Start here progress, recent cards and the welcome
 * flag. Version 1 files still restore (those keys are simply absent).
 */
export const BACKUP_VERSION = 2;
/** Oldest backup version this app can still restore. */
export const MIN_BACKUP_VERSION = 1;

/** No real backup comes close; anything bigger is the wrong file. */
export const MAX_BACKUP_BYTES = 5 * 1024 * 1024;

/**
 * The data as it was just before the last restore, so it can be undone.
 * Device-local, like tc_data_safety, and never part of a backup file.
 */
export const RESTORE_SNAPSHOT_KEY = "tc_restore_snapshot";
/** How long Undo restore stays on offer. */
export const RESTORE_SNAPSHOT_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Every localStorage key the app owns, with the top-level shape its value
 * must have. "json-object"/"json-array" values are stored with
 * JSON.stringify; "theme" is stored as the bare string "light" or "dark";
 * "flag" is stored as the bare string "1".
 * Deeper validation stays with each feature's own loader.
 *
 * tc_drill_state holds the drill's track, pace and rounds alongside its
 * place and streak, so they travel in the same entry. Backups made before
 * tracks existed restore unchanged and read as the Everything track at a
 * week per card (see sanitiseDrillState).
 *
 * Device-only bookkeeping stays out: tc_data_safety (when this device last
 * exported a backup, whether it saw the Add to Home Screen hint) and the
 * restore snapshot describe this phone, not the person's data.
 */
export const BACKUP_KEYS = {
  tc_favourites: "json-object",
  // cardIndex, dayIndex, streak, track, pace, rounds, order, ...
  tc_drill_state: "json-object",
  // SM-2 review per card, fed by the Not yet / Getting there / Confident rating.
  tc_srs_reviews: "json-object",
  tc_playbooks: "json-array",
  "tc-recent-searches": "json-array",
  tc_theme: "theme",
  // Display preferences from the Settings sheet (larger phrase text). Older
  // backups lack it and restore as the defaults.
  tc_preferences: "json-object",
  // Start here path: the core cards opened so far (version 2+).
  tc_start_opened: "json-array",
  // Last few cards opened, newest first, for the Library (version 2+).
  tc_recent_cards: "json-array",
  // The welcome panel was dismissed (version 2+).
  tc_welcome_dismissed: "flag",
} as const;

export type BackupKey = keyof typeof BACKUP_KEYS;

/** Keys that version 1 backups never carried, so restoring one keeps them. */
const VERSION_2_KEYS: readonly BackupKey[] = [
  "tc_start_opened",
  "tc_recent_cards",
  "tc_welcome_dismissed",
];

export const BACKUP_KEY_LIST = Object.keys(BACKUP_KEYS) as BackupKey[];

export interface BackupFile {
  app: typeof BACKUP_APP;
  version: number;
  exportedAt: string;
  data: Partial<Record<BackupKey, unknown>>;
}

export interface ImportSummary {
  /** Keys written from the backup. */
  restored: BackupKey[];
  /** Known keys removed because the backup did not include them. */
  cleared: BackupKey[];
}

export class BackupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BackupError";
  }
}

function isKnownKey(key: string): key is BackupKey {
  return Object.prototype.hasOwnProperty.call(BACKUP_KEYS, key);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readKey(key: BackupKey): { ok: true; value: unknown } | { ok: false } {
  let raw: string | null;
  try {
    raw = localStorage.getItem(key);
  } catch {
    return { ok: false };
  }
  if (raw === null) return { ok: false };
  const kind = BACKUP_KEYS[key];
  if (kind === "theme" || kind === "flag") return { ok: true, value: raw };
  try {
    return { ok: true, value: JSON.parse(raw) };
  } catch {
    // Corrupt stored value: leave it out rather than exporting garbage.
    return { ok: false };
  }
}

/** Snapshot every known key that currently has a readable value. */
export function exportBackup(now: Date = new Date()): BackupFile {
  const data: BackupFile["data"] = {};
  for (const key of BACKUP_KEY_LIST) {
    const result = readKey(key);
    if (!result.ok) continue;
    // Skip values import would reject (e.g. a stray [] or unknown theme), so
    // an app-made backup always restores.
    try {
      serialiseValue(key, result.value);
    } catch {
      continue;
    }
    data[key] = result.value;
  }
  return {
    app: BACKUP_APP,
    version: BACKUP_VERSION,
    exportedAt: now.toISOString(),
    data,
  };
}

/** `tc-reference-backup-YYYY-MM-DD.json`, using the local date. */
export function backupFileName(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `tc-reference-backup-${y}-${m}-${d}.json`;
}

export type BackupSaveOutcome = "saved" | "cancelled" | "failed";

/**
 * Save a backup file. Where files can be shared (iPhone, including a Home
 * Screen app, where a download link is unreliable) this opens the share
 * sheet with Save to Files; elsewhere it downloads. The backup time is noted
 * for the backup reminder only when a file was handed over: closing the
 * share sheet records nothing.
 */
export async function saveBackup(
  now: Date = new Date(),
  nav: Navigator | undefined = typeof navigator !== "undefined"
    ? navigator
    : undefined,
): Promise<BackupSaveOutcome> {
  const blob = new Blob([JSON.stringify(exportBackup(now), null, 2)], {
    type: "application/json",
  });
  const outcome = await saveFile(
    blob,
    backupFileName(now),
    "application/json",
    nav,
    { shareOnlyOnIos: true },
  );
  if (outcome === "cancelled") return "cancelled";
  if (outcome !== "shared") return "failed";
  recordBackupExported(now.getTime());
  return "saved";
}

/** Throws a friendly BackupError when a chosen file is too big to be ours. */
export function checkBackupFileSize(file: { size: number }): void {
  if (file.size > MAX_BACKUP_BYTES) {
    throw new BackupError(
      "This file is too large to be a TC Reference backup (over 5 MB). Choose the .json file the app exported.",
    );
  }
}

function serialiseValue(key: BackupKey, value: unknown): string {
  const kind = BACKUP_KEYS[key];
  if (kind === "theme") {
    if (value !== "light" && value !== "dark") {
      throw new BackupError(`"${key}" must be "light" or "dark".`);
    }
    return value;
  }
  if (kind === "flag") {
    if (value !== "1") throw new BackupError(`"${key}" must be "1".`);
    return value;
  }
  if (kind === "json-object" && !isPlainObject(value)) {
    throw new BackupError(`"${key}" must be an object.`);
  }
  if (kind === "json-array" && !Array.isArray(value)) {
    throw new BackupError(`"${key}" must be a list.`);
  }
  let serialised: string | undefined;
  try {
    serialised = JSON.stringify(value);
  } catch {
    serialised = undefined;
  }
  if (typeof serialised !== "string") {
    throw new BackupError(`"${key}" could not be saved as JSON.`);
  }
  return serialised;
}

/**
 * Validate a backup without touching storage. Returns the exact strings that
 * importBackup would write, keyed by known storage key.
 */
/** The version number of an already validated backup file. */
function backupVersion(json: string): number {
  const parsed = JSON.parse(json) as { version: number };
  return parsed.version;
}

export function parseBackup(json: string): Map<BackupKey, string> {
  checkBackupFileSize({ size: json.length });
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    throw new BackupError("This file isn't valid JSON.");
  }
  if (!isPlainObject(parsed) || parsed.app !== BACKUP_APP) {
    throw new BackupError("This file isn't a TC Reference backup.");
  }
  const version = parsed.version;
  const isVersion = typeof version === "number" && Number.isInteger(version);
  if (isVersion && version > BACKUP_VERSION) {
    throw new BackupError(
      "This backup was made by a newer version of TC Reference. Update the app first (close it fully and open it again), then import the file.",
    );
  }
  if (!isVersion || version < MIN_BACKUP_VERSION) {
    throw new BackupError(
      `This backup's version (${String(version)}) isn't one this app recognises.`,
    );
  }
  if (!isPlainObject(parsed.data)) {
    throw new BackupError("The backup has no data section.");
  }
  const unknownKeys = Object.keys(parsed.data).filter((k) => !isKnownKey(k));
  if (unknownKeys.length > 0) {
    throw new BackupError(
      `The backup contains unrecognised data: ${unknownKeys.join(", ")}.`,
    );
  }
  const entries = new Map<BackupKey, string>();
  for (const [key, value] of Object.entries(parsed.data)) {
    if (!isKnownKey(key)) continue; // unreachable, keeps the type narrow
    entries.set(key, serialiseValue(key, value));
  }
  return entries;
}

type StoredValues = Map<BackupKey, string | null>;

function readStoredValues(): StoredValues {
  const values: StoredValues = new Map();
  try {
    for (const key of BACKUP_KEY_LIST) {
      values.set(key, localStorage.getItem(key));
    }
  } catch {
    throw new BackupError("Storage isn't available in this browser.");
  }
  return values;
}

/**
 * Make every known key match `target` (null or absent removes it). Rolls
 * back to `previous` if a write fails part way, then throws a BackupError.
 */
function writeStoredValues(
  target: ReadonlyMap<BackupKey, string | null>,
  previous: StoredValues,
): ImportSummary {
  const restored: BackupKey[] = [];
  const cleared: BackupKey[] = [];
  try {
    for (const key of BACKUP_KEY_LIST) {
      const value = target.get(key) ?? null;
      if (value !== null) {
        localStorage.setItem(key, value);
        restored.push(key);
      } else if (previous.get(key) !== null) {
        localStorage.removeItem(key);
        cleared.push(key);
      }
    }
  } catch {
    // Remove every new value first so a large one can't hold the space an
    // earlier value needs, then put the previous values back.
    let rolledBack = true;
    for (const key of BACKUP_KEY_LIST) {
      try {
        localStorage.removeItem(key);
      } catch {
        rolledBack = false;
      }
    }
    for (const [key, value] of previous) {
      if (value === null) continue;
      try {
        localStorage.setItem(key, value);
      } catch {
        rolledBack = false;
      }
    }
    throw new BackupError(
      rolledBack
        ? "Couldn't save the backup (storage may be full). Your data was not changed."
        : "Couldn't save the backup, and some existing data couldn't be restored. Keep a copy of your latest backup file.",
    );
  }
  return { restored, cleared };
}

export interface RestoreSnapshot {
  /** When the restore this would undo happened (ms since epoch). */
  savedAt: number;
  /** Every known key as stored before that restore; null when absent. */
  data: StoredValues;
}

function removeRestoreSnapshot(): void {
  try {
    localStorage.removeItem(RESTORE_SNAPSHOT_KEY);
  } catch {}
}

/**
 * The data from just before the last restore, while it is recent enough to
 * offer Undo restore. A stale or unreadable snapshot is removed.
 */
export function loadRestoreSnapshot(
  now: number = Date.now(),
): RestoreSnapshot | null {
  let raw: string | null;
  try {
    raw = localStorage.getItem(RESTORE_SNAPSHOT_KEY);
  } catch {
    return null;
  }
  if (raw === null) return null;
  let parsed: unknown = null;
  try {
    parsed = JSON.parse(raw);
  } catch {}
  const savedAt = isPlainObject(parsed) ? parsed.savedAt : undefined;
  const data = isPlainObject(parsed) ? parsed.data : undefined;
  if (
    typeof savedAt !== "number" ||
    !Number.isFinite(savedAt) ||
    !isPlainObject(data) ||
    now - savedAt > RESTORE_SNAPSHOT_MAX_AGE_MS
  ) {
    removeRestoreSnapshot();
    return null;
  }
  const values: StoredValues = new Map();
  for (const key of BACKUP_KEY_LIST) {
    const value = data[key];
    values.set(key, typeof value === "string" ? value : null);
  }
  return { savedAt, data: values };
}

function saveRestoreSnapshot(values: StoredValues, now: number): boolean {
  // An older snapshot must never outlive this restore: if the new one can't
  // be written, Undo would otherwise bring back data from before an earlier
  // restore and silently discard this one.
  removeRestoreSnapshot();
  try {
    localStorage.setItem(
      RESTORE_SNAPSHOT_KEY,
      JSON.stringify({ savedAt: now, data: Object.fromEntries(values) }),
    );
    return true;
  } catch {
    // Storage full: the restore still goes ahead, just without an undo.
    return false;
  }
}

/**
 * Replace the app's stored data with the contents of a backup. Validates the
 * whole file before writing anything, never writes unknown keys, and rolls
 * back to the previous values if a write fails part way. The data it
 * replaces is kept under RESTORE_SNAPSHOT_KEY so undoRestore can bring it
 * back.
 */
export function importBackup(
  json: string,
  now: number = Date.now(),
): ImportSummary & { undoAvailable: boolean } {
  const entries = parseBackup(json);
  const previous = readStoredValues();
  // A version 1 file predates some keys; keep what this device has for them
  // rather than clearing Start here progress, recent cards and the welcome.
  if (backupVersion(json) < 2) {
    for (const key of VERSION_2_KEYS) {
      const current = previous.get(key);
      if (!entries.has(key) && current != null) entries.set(key, current);
    }
  }
  const undoAvailable = saveRestoreSnapshot(previous, now);
  try {
    return { ...writeStoredValues(entries, previous), undoAvailable };
  } catch (err) {
    // Nothing changed, so there is nothing to undo; free the space too.
    if (!undoAvailable) throw err;
    removeRestoreSnapshot();
    // The snapshot may have been what filled storage: try once without it.
    return { ...writeStoredValues(entries, previous), undoAvailable: false };
  }
}

/**
 * Put back the data from just before the last restore and forget the
 * snapshot. Throws a BackupError when there is none, or when a write fails
 * (the current data is then left as it was).
 */
export function undoRestore(now: number = Date.now()): ImportSummary {
  const snapshot = loadRestoreSnapshot(now);
  if (!snapshot) {
    throw new BackupError("There's no restore to undo.");
  }
  const summary = writeStoredValues(snapshot.data, readStoredValues());
  removeRestoreSnapshot();
  return summary;
}

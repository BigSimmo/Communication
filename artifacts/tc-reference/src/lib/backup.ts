/**
 * Export and import of all user data kept in localStorage.
 *
 * The app has no backend, so a JSON backup file is the only way to move
 * favourites, drill progress, playbooks and settings between devices or to
 * survive clearing site data. Only the keys listed in BACKUP_KEYS are ever
 * read or written; anything else in a backup file is rejected.
 */

export const BACKUP_APP = "tc-reference";
export const BACKUP_VERSION = 1;

/**
 * Every localStorage key the app owns, with the top-level shape its value
 * must have. "json-object"/"json-array" values are stored with
 * JSON.stringify; "theme" is stored as the bare string "light" or "dark".
 * Deeper validation stays with each feature's own loader.
 */
export const BACKUP_KEYS = {
  tc_favourites: "json-object",
  tc_drill_state: "json-object",
  tc_srs_reviews: "json-object",
  tc_playbooks: "json-array",
  "tc-recent-searches": "json-array",
  tc_theme: "theme",
} as const;

export type BackupKey = keyof typeof BACKUP_KEYS;

export const BACKUP_KEY_LIST = Object.keys(BACKUP_KEYS) as BackupKey[];

export interface BackupFile {
  app: typeof BACKUP_APP;
  version: typeof BACKUP_VERSION;
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
  if (BACKUP_KEYS[key] === "theme") return { ok: true, value: raw };
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

function serialiseValue(key: BackupKey, value: unknown): string {
  const kind = BACKUP_KEYS[key];
  if (kind === "theme") {
    if (value !== "light" && value !== "dark") {
      throw new BackupError(`"${key}" must be "light" or "dark".`);
    }
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
export function parseBackup(json: string): Map<BackupKey, string> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(json);
  } catch {
    throw new BackupError("This file isn't valid JSON.");
  }
  if (!isPlainObject(parsed) || parsed.app !== BACKUP_APP) {
    throw new BackupError("This file isn't a TC Reference backup.");
  }
  if (parsed.version !== BACKUP_VERSION) {
    throw new BackupError(
      `Unsupported backup version (${String(parsed.version)}). Expected version ${BACKUP_VERSION}.`,
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

/**
 * Replace the app's stored data with the contents of a backup. Validates the
 * whole file before writing anything, never writes unknown keys, and rolls
 * back to the previous values if a write fails part way.
 */
export function importBackup(json: string): ImportSummary {
  const entries = parseBackup(json);

  const previous = new Map<BackupKey, string | null>();
  try {
    for (const key of BACKUP_KEY_LIST) {
      previous.set(key, localStorage.getItem(key));
    }
  } catch {
    throw new BackupError("Storage isn't available in this browser.");
  }

  const restored: BackupKey[] = [];
  const cleared: BackupKey[] = [];
  try {
    for (const key of BACKUP_KEY_LIST) {
      const value = entries.get(key);
      if (value !== undefined) {
        localStorage.setItem(key, value);
        restored.push(key);
      } else if (previous.get(key) !== null) {
        localStorage.removeItem(key);
        cleared.push(key);
      }
    }
  } catch {
    // Remove every imported value first so a large one can't hold the space
    // an earlier value needs, then put the previous values back.
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

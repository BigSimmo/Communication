import { isRecord, safeParseJSON } from "./storage-validation";

/**
 * Keeping saved progress safe on phones.
 *
 * Everything the app saves lives in localStorage. Safari may clear a site's
 * storage after about a week without a visit unless the site was added to
 * the Home Screen, so the app (1) asks the browser to keep its storage,
 * (2) suggests Add to Home Screen once on iPhone/iPad Safari, and (3) gently
 * reminds people with saved data to export a backup every month or so.
 *
 * The bookkeeping is per device and lives under its own key, which is left
 * out of backups on purpose: restoring a backup on a new phone shouldn't say
 * that phone already has a recent backup or has seen the hint.
 */

export const DATA_SAFETY_STORAGE_KEY = "tc_data_safety";

const DAY_MS = 24 * 60 * 60 * 1000;
/** How old the last backup (or first visit, if none) is before a reminder. */
export const BACKUP_REMINDER_AFTER_MS = 30 * DAY_MS;
/** How long "Not now" on the backup reminder keeps it quiet. */
export const BACKUP_SNOOZE_MS = 30 * DAY_MS;

export interface DataSafetyState {
  /** When this device first opened the app (ms since epoch). */
  firstSeenAt: number | null;
  /** Number of separate sessions (tab or app launches) seen. */
  visits: number;
  /** Last time a backup was exported on this device. */
  lastBackupAt: number | null;
  /** The Add to Home Screen hint was dismissed; it never comes back. */
  installHintDismissed: boolean;
  /** "Not now" on the backup reminder, so it waits another month. */
  backupReminderDismissedAt: number | null;
}

const DEFAULT_STATE: DataSafetyState = {
  firstSeenAt: null,
  visits: 0,
  lastBackupAt: null,
  installHintDismissed: false,
  backupReminderDismissedAt: null,
};

function timeOrNull(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? value
    : null;
}

export function sanitiseDataSafety(value: unknown): DataSafetyState {
  if (!isRecord(value)) return { ...DEFAULT_STATE };
  const visits =
    typeof value.visits === "number" && Number.isFinite(value.visits)
      ? Math.max(0, Math.floor(value.visits))
      : 0;
  return {
    firstSeenAt: timeOrNull(value.firstSeenAt),
    visits,
    lastBackupAt: timeOrNull(value.lastBackupAt),
    installHintDismissed: value.installHintDismissed === true,
    backupReminderDismissedAt: timeOrNull(value.backupReminderDismissedAt),
  };
}

export function loadDataSafety(): DataSafetyState {
  try {
    const raw = localStorage.getItem(DATA_SAFETY_STORAGE_KEY);
    return sanitiseDataSafety(raw === null ? null : safeParseJSON(raw));
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function updateDataSafety(
  patch: Partial<DataSafetyState>,
): DataSafetyState {
  const next = { ...loadDataSafety(), ...patch };
  try {
    localStorage.setItem(DATA_SAFETY_STORAGE_KEY, JSON.stringify(next));
  } catch {}
  return next;
}

const SESSION_FLAG = "tc_data_safety_session";

/**
 * Count this launch once per session (a reload in the same tab doesn't
 * count again) and note the first visit. Returns the updated state.
 */
export function recordVisit(now: number = Date.now()): DataSafetyState {
  const state = loadDataSafety();
  let counted = false;
  try {
    counted = sessionStorage.getItem(SESSION_FLAG) === "1";
    if (!counted) sessionStorage.setItem(SESSION_FLAG, "1");
  } catch {}
  if (counted && state.firstSeenAt !== null) return state;
  return updateDataSafety({
    firstSeenAt: state.firstSeenAt ?? now,
    visits: counted ? state.visits : state.visits + 1,
  });
}

/** Call after a backup file has been exported. */
export function recordBackupExported(now: number = Date.now()): void {
  updateDataSafety({ lastBackupAt: now, backupReminderDismissedAt: null });
}

// Keys whose non-empty value means the person has something worth keeping.
const USER_DATA_KEYS = [
  "tc_favourites",
  "tc_drill_state",
  "tc_srs_reviews",
  "tc_playbooks",
] as const;

function hasContent(value: unknown): boolean {
  if (Array.isArray(value)) return value.length > 0;
  if (!isRecord(value)) return false;
  return Object.values(value).some((entry) =>
    Array.isArray(entry) || isRecord(entry) ? hasContent(entry) : true,
  );
}

/** True when saved items, drill progress or playbooks exist on this device. */
export function hasUserData(): boolean {
  for (const key of USER_DATA_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null && hasContent(safeParseJSON(raw))) return true;
    } catch {}
  }
  return false;
}

/** The backup reminder is due: data exists and no backup for 30+ days. */
export function isBackupReminderDue(
  state: DataSafetyState,
  hasData: boolean,
  now: number = Date.now(),
): boolean {
  if (!hasData) return false;
  if (
    state.backupReminderDismissedAt !== null &&
    now - state.backupReminderDismissedAt < BACKUP_SNOOZE_MS
  ) {
    return false;
  }
  const since = state.lastBackupAt ?? state.firstSeenAt;
  if (since === null) return false;
  return now - since >= BACKUP_REMINDER_AFTER_MS;
}

type NavigatorLike = Pick<Navigator, "userAgent" | "maxTouchPoints"> & {
  platform?: string;
  standalone?: boolean;
};

/**
 * iPhone, iPod or iPad running Safari itself. Other iOS browsers put Add to
 * Home Screen in different places, so the Safari steps wouldn't match.
 */
export function isIosSafari(nav: NavigatorLike = navigator): boolean {
  const ua = nav.userAgent ?? "";
  const iDevice =
    /iPhone|iPad|iPod/.test(ua) ||
    // iPadOS reports itself as a Mac; touch gives it away.
    (/Macintosh/.test(ua) && (nav.maxTouchPoints ?? 0) > 1);
  if (!iDevice) return false;
  if (/CriOS|FxiOS|EdgiOS|OPiOS|GSA\/|DuckDuckGo|YaBrowser/.test(ua)) {
    return false;
  }
  return /Safari\//.test(ua) && /Version\//.test(ua);
}

/** Running from the Home Screen (or as an installed app elsewhere). */
export function isStandalone(win: Window = window): boolean {
  const nav = win.navigator as NavigatorLike;
  if (nav.standalone === true) return true;
  try {
    return win.matchMedia?.("(display-mode: standalone)").matches === true;
  } catch {
    return false;
  }
}

/**
 * Show the Add to Home Screen hint: iOS Safari in a browser tab, not yet
 * dismissed, and the person has come back or saved something.
 */
export function shouldShowInstallHint(
  state: DataSafetyState,
  hasData: boolean,
  win: Window = window,
): boolean {
  if (state.installHintDismissed) return false;
  if (!isIosSafari(win.navigator) || isStandalone(win)) return false;
  return state.visits >= 2 || hasData;
}

let persistRequested = false;

/**
 * Ask the browser not to clear this site's storage under pressure. Best
 * effort: unsupported browsers, refusals and errors are all ignored. Runs at
 * most once per page load and skips the prompt-free request when storage is
 * already persistent.
 */
export async function requestPersistentStorage(
  storage: StorageManager | undefined = typeof navigator === "undefined"
    ? undefined
    : navigator.storage,
): Promise<boolean> {
  if (persistRequested) return false;
  persistRequested = true;
  if (!storage || typeof storage.persist !== "function") return false;
  try {
    if (
      typeof storage.persisted === "function" &&
      (await storage.persisted())
    ) {
      return true;
    }
    return await storage.persist();
  } catch {
    return false;
  }
}

/** Test hook: let requestPersistentStorage run again. */
export function resetPersistRequestForTests(): void {
  persistRequested = false;
}

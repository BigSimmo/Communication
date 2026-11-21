import { act, fireEvent, render, screen } from "@testing-library/react";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  BACKUP_REMINDER_AFTER_MS,
  DATA_SAFETY_STORAGE_KEY,
  hasUserData,
  isBackupReminderDue,
  isIosSafari,
  loadDataSafety,
  recordVisit,
  requestPersistentStorage,
  resetPersistRequestForTests,
  sanitiseDataSafety,
  shouldShowInstallHint,
  updateDataSafety,
} from "../lib/data-safety";
import { BACKUP_KEY_LIST } from "../lib/backup";
import {
  DataSafetyNudge,
  NUDGE_DELAY_MS,
} from "../components/data-safety-nudge";
import { BackupSection } from "../components/backup-section";

const IPHONE_SAFARI =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const IPHONE_CHROME =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/126.0 Mobile/15E148 Safari/604.1";
const IPAD_DESKTOP_MODE =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15";
const DESKTOP_CHROME =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

const DAY = 24 * 60 * 60 * 1000;

function fakeWindow(userAgent: string, opts: { standalone?: boolean } = {}) {
  return {
    navigator: { userAgent, maxTouchPoints: 5, standalone: opts.standalone },
    matchMedia: () => ({ matches: false }),
  } as unknown as Window;
}

function setUserAgent(ua: string) {
  Object.defineProperty(window.navigator, "userAgent", {
    configurable: true,
    get: () => ua,
  });
}

const originalUA = window.navigator.userAgent;

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

afterEach(() => {
  setUserAgent(originalUA);
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("data-safety state", () => {
  it("reads missing or corrupt state as defaults", () => {
    expect(loadDataSafety().visits).toBe(0);
    localStorage.setItem(DATA_SAFETY_STORAGE_KEY, "{not json");
    expect(loadDataSafety().installHintDismissed).toBe(false);
    expect(sanitiseDataSafety({ visits: "x", lastBackupAt: -1 })).toMatchObject(
      { visits: 0, lastBackupAt: null },
    );
  });

  it("counts a visit once per session and keeps the first-seen time", () => {
    recordVisit(1000);
    recordVisit(2000);
    expect(loadDataSafety()).toMatchObject({ visits: 1, firstSeenAt: 1000 });
    sessionStorage.clear();
    recordVisit(3000);
    expect(loadDataSafety()).toMatchObject({ visits: 2, firstSeenAt: 1000 });
  });

  it("stays out of backups, so a restored phone starts fresh", () => {
    expect(BACKUP_KEY_LIST).not.toContain(DATA_SAFETY_STORAGE_KEY);
    expect(BACKUP_KEY_LIST).not.toContain("tc_restore_snapshot");
  });

  it("only counts real saved data", () => {
    expect(hasUserData()).toBe(false);
    localStorage.setItem("tc_playbooks", "[]");
    localStorage.setItem("tc_favourites", JSON.stringify({ cards: [] }));
    expect(hasUserData()).toBe(false);
    localStorage.setItem("tc_favourites", JSON.stringify({ cards: ["TC001"] }));
    expect(hasUserData()).toBe(true);
  });
});

describe("backup reminder timing", () => {
  const now = 100 * DAY;
  const base = sanitiseDataSafety({ firstSeenAt: now - 40 * DAY, visits: 3 });

  it("waits for saved data and 30 days", () => {
    expect(isBackupReminderDue(base, false, now)).toBe(false);
    expect(isBackupReminderDue(base, true, now)).toBe(true);
    const recent = { ...base, firstSeenAt: now - 5 * DAY };
    expect(isBackupReminderDue(recent, true, now)).toBe(false);
  });

  it("measures from the last export when there is one", () => {
    const backedUp = { ...base, lastBackupAt: now - 10 * DAY };
    expect(isBackupReminderDue(backedUp, true, now)).toBe(false);
    const old = { ...base, lastBackupAt: now - BACKUP_REMINDER_AFTER_MS };
    expect(isBackupReminderDue(old, true, now)).toBe(true);
  });

  it("stays quiet for a month after Not now", () => {
    const snoozed = { ...base, backupReminderDismissedAt: now - 3 * DAY };
    expect(isBackupReminderDue(snoozed, true, now)).toBe(false);
    const expired = { ...base, backupReminderDismissedAt: now - 31 * DAY };
    expect(isBackupReminderDue(expired, true, now)).toBe(true);
  });
});

describe("Add to Home Screen hint", () => {
  it("detects Safari on iPhone and iPad only", () => {
    expect(isIosSafari({ userAgent: IPHONE_SAFARI, maxTouchPoints: 5 })).toBe(
      true,
    );
    expect(
      isIosSafari({ userAgent: IPAD_DESKTOP_MODE, maxTouchPoints: 5 }),
    ).toBe(true);
    expect(
      isIosSafari({ userAgent: IPAD_DESKTOP_MODE, maxTouchPoints: 0 }),
    ).toBe(false);
    expect(isIosSafari({ userAgent: IPHONE_CHROME, maxTouchPoints: 5 })).toBe(
      false,
    );
    expect(isIosSafari({ userAgent: DESKTOP_CHROME, maxTouchPoints: 0 })).toBe(
      false,
    );
  });

  it("needs a return visit or saved data, and never shows when installed", () => {
    const first = sanitiseDataSafety({ visits: 1 });
    const second = sanitiseDataSafety({ visits: 2 });
    const safari = fakeWindow(IPHONE_SAFARI);
    expect(shouldShowInstallHint(first, false, safari)).toBe(false);
    expect(shouldShowInstallHint(first, true, safari)).toBe(true);
    expect(shouldShowInstallHint(second, false, safari)).toBe(true);
    expect(
      shouldShowInstallHint(
        second,
        true,
        fakeWindow(IPHONE_SAFARI, { standalone: true }),
      ),
    ).toBe(false);
    expect(
      shouldShowInstallHint(
        { ...second, installHintDismissed: true },
        true,
        safari,
      ),
    ).toBe(false);
  });
});

describe("requestPersistentStorage", () => {
  beforeEach(() => resetPersistRequestForTests());

  it("skips the request when storage is already persistent", async () => {
    const persist = vi.fn().mockResolvedValue(true);
    const storage = {
      persisted: vi.fn().mockResolvedValue(true),
      persist,
    } as unknown as StorageManager;
    await expect(requestPersistentStorage(storage)).resolves.toBe(true);
    expect(persist).not.toHaveBeenCalled();
  });

  it("asks once, and survives missing support or errors", async () => {
    const persist = vi.fn().mockRejectedValue(new Error("nope"));
    const storage = {
      persisted: vi.fn().mockResolvedValue(false),
      persist,
    } as unknown as StorageManager;
    await expect(requestPersistentStorage(storage)).resolves.toBe(false);
    await requestPersistentStorage(storage);
    expect(persist).toHaveBeenCalledTimes(1);
    resetPersistRequestForTests();
    await expect(requestPersistentStorage(undefined)).resolves.toBe(false);
  });
});

function renderNudge(path = "/") {
  const { hook } = memoryLocation({ path });
  return render(
    <Router hook={hook}>
      <DataSafetyNudge />
    </Router>,
  );
}

describe("DataSafetyNudge", () => {
  it("shows the install hint on iPhone Safari after a delay and remembers Got it", () => {
    vi.useFakeTimers();
    setUserAgent(IPHONE_SAFARI);
    localStorage.setItem("tc_favourites", JSON.stringify({ cards: ["TC001"] }));
    renderNudge();
    expect(screen.queryByTestId("data-safety-nudge")).toBeNull();
    act(() => vi.advanceTimersByTime(NUDGE_DELAY_MS));
    const nudge = screen.getByTestId("data-safety-nudge");
    expect(nudge).toHaveAttribute("data-nudge", "install");
    expect(nudge).toHaveTextContent("Add to Home Screen");
    fireEvent.click(screen.getByRole("button", { name: "Got it" }));
    expect(screen.queryByTestId("data-safety-nudge")).toBeNull();
    expect(loadDataSafety().installHintDismissed).toBe(true);
  });

  it("stays away on a first visit with nothing saved", () => {
    vi.useFakeTimers();
    setUserAgent(IPHONE_SAFARI);
    renderNudge();
    act(() => vi.advanceTimersByTime(NUDGE_DELAY_MS * 2));
    expect(screen.queryByTestId("data-safety-nudge")).toBeNull();
  });

  it("offers a backup when one is overdue, and Not now snoozes it", () => {
    vi.useFakeTimers();
    setUserAgent(DESKTOP_CHROME);
    localStorage.setItem("tc_playbooks", JSON.stringify([{ id: "p1" }]));
    updateDataSafety({ firstSeenAt: Date.now() - 45 * DAY, visits: 4 });
    renderNudge("/favourites");
    act(() => vi.advanceTimersByTime(NUDGE_DELAY_MS));
    expect(screen.getByTestId("data-safety-nudge")).toHaveAttribute(
      "data-nudge",
      "backup",
    );
    fireEvent.click(screen.getByRole("button", { name: "Not now" }));
    expect(loadDataSafety().backupReminderDismissedAt).not.toBeNull();
  });

  it("does not appear on screens with a bottom dock", () => {
    vi.useFakeTimers();
    setUserAgent(IPHONE_SAFARI);
    updateDataSafety({ visits: 5 });
    renderNudge("/drill");
    act(() => vi.advanceTimersByTime(NUDGE_DELAY_MS));
    expect(screen.queryByTestId("data-safety-nudge")).toBeNull();
  });
});

describe("BackupSection last-backup line", () => {
  it("records the export time and shows it", async () => {
    URL.createObjectURL = vi.fn().mockReturnValue("blob:x");
    URL.revokeObjectURL = vi.fn();
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});
    render(<BackupSection />);
    expect(screen.getByTestId("backup-last")).toHaveTextContent(
      "No backup exported from this device yet.",
    );
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Export backup" }));
    });
    expect(loadDataSafety().lastBackupAt).not.toBeNull();
    expect(screen.getByTestId("backup-last")).toHaveTextContent(
      "Last backup on this device:",
    );
  });

  it("nudges gently when the last backup is old", () => {
    localStorage.setItem("tc_favourites", JSON.stringify({ cards: ["TC001"] }));
    updateDataSafety({
      firstSeenAt: Date.now() - 90 * DAY,
      lastBackupAt: Date.now() - 60 * DAY,
    });
    render(<BackupSection />);
    expect(screen.getByTestId("backup-last")).toHaveTextContent(
      "a fresh one is a good idea",
    );
  });
});

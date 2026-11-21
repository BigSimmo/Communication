import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  BACKUP_KEYS,
  BackupError,
  backupFileName,
  MAX_BACKUP_BYTES,
  RESTORE_SNAPSHOT_KEY,
  RESTORE_SNAPSHOT_MAX_AGE_MS,
  checkBackupFileSize,
  exportBackup,
  importBackup,
  loadRestoreSnapshot,
  saveBackup,
  undoRestore,
} from "../lib/backup";
import { loadDataSafety } from "../lib/data-safety";
import { loadDrillState, loadSRSMap } from "../lib/drill-state";

const SAMPLE = {
  tc_favourites: JSON.stringify({ cardIds: ["TC001"], phrases: [] }),
  tc_drill_state: JSON.stringify({ cardIndex: 3, dayIndex: 1, streak: 2 }),
  tc_srs_reviews: JSON.stringify({ TC001: { interval: 1 } }),
  tc_playbooks: JSON.stringify([{ id: "p1", name: "Mine", steps: [] }]),
  "tc-recent-searches": JSON.stringify(["calm"]),
  tc_theme: "light",
  tc_preferences: JSON.stringify({ largePhrases: true }),
  tc_start_opened: JSON.stringify(["TC001", "TC004"]),
  tc_recent_cards: JSON.stringify(["TC004", "TC001"]),
  tc_welcome_dismissed: "1",
};

function seed() {
  for (const [k, v] of Object.entries(SAMPLE)) localStorage.setItem(k, v);
}

function backupWith(data: Record<string, unknown>, overrides = {}) {
  return JSON.stringify({
    app: "tc-reference",
    version: 1,
    exportedAt: "2026-01-01T00:00:00.000Z",
    data,
    ...overrides,
  });
}

beforeEach(() => {
  localStorage.clear();
});

describe("backup", () => {
  it("covers every storage key the app uses", () => {
    expect(Object.keys(BACKUP_KEYS).sort()).toEqual(Object.keys(SAMPLE).sort());
  });

  it("round-trips all known keys through export and import", () => {
    seed();
    localStorage.setItem("unrelated", "keep me");
    const backup = exportBackup(new Date("2026-02-03T04:05:06Z"));

    expect(backup.app).toBe("tc-reference");
    expect(backup.version).toBe(2);
    expect(backup.data.tc_welcome_dismissed).toBe("1");
    expect(backup.data.tc_recent_cards).toEqual(["TC004", "TC001"]);
    expect(backup.exportedAt).toBe("2026-02-03T04:05:06.000Z");
    expect(backup.data).not.toHaveProperty("unrelated");
    expect(backup.data.tc_theme).toBe("light");
    expect(backup.data.tc_playbooks).toEqual(JSON.parse(SAMPLE.tc_playbooks));

    localStorage.clear();
    localStorage.setItem("tc_theme", "dark");
    const summary = importBackup(JSON.stringify(backup));

    expect([...summary.restored].sort()).toEqual(Object.keys(SAMPLE).sort());
    expect(summary.cleared).toEqual([]);
    for (const [k, v] of Object.entries(SAMPLE)) {
      expect(localStorage.getItem(k)).toBe(v);
    }
  });

  it("exports only keys that exist and skips corrupt values", () => {
    localStorage.setItem("tc_favourites", "{not json");
    localStorage.setItem("tc_theme", "dark");
    expect(exportBackup().data).toEqual({ tc_theme: "dark" });
  });

  it("clears known keys that the backup does not include", () => {
    seed();
    const summary = importBackup(
      backupWith({ tc_theme: "dark" }, { version: 2 }),
    );
    expect(summary.restored).toEqual(["tc_theme"]);
    expect(localStorage.getItem("tc_favourites")).toBeNull();
    expect(localStorage.getItem("tc_theme")).toBe("dark");
  });

  it("keeps keys a version 1 backup never carried", () => {
    localStorage.setItem("tc_favourites", SAMPLE.tc_favourites);
    localStorage.setItem("tc_start_opened", '["TC001"]');
    localStorage.setItem("tc_recent_cards", '["TC002"]');
    localStorage.setItem("tc_welcome_dismissed", "1");
    importBackup(backupWith({ tc_theme: "dark" }, { version: 1 }));
    expect(localStorage.getItem("tc_favourites")).toBeNull();
    expect(localStorage.getItem("tc_start_opened")).toBe('["TC001"]');
    expect(localStorage.getItem("tc_recent_cards")).toBe('["TC002"]');
    expect(localStorage.getItem("tc_welcome_dismissed")).toBe("1");
  });

  it("drops an older restore snapshot when the new one can't be saved", () => {
    localStorage.setItem("tc_theme", "light");
    importBackup(backupWith({ tc_theme: "dark" }, { version: 2 }));
    expect(localStorage.getItem("tc_restore_snapshot")).not.toBeNull();
    const setItem = Storage.prototype.setItem;
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (
      this: Storage,
      key: string,
      value: string,
    ) {
      if (key === "tc_restore_snapshot") {
        throw new DOMException("full", "QuotaExceededError");
      }
      return setItem.call(this, key, value);
    });
    const summary = importBackup(
      backupWith({ tc_theme: "light" }, { version: 2 }),
    );
    expect(summary.undoAvailable).toBe(false);
    expect(localStorage.getItem("tc_restore_snapshot")).toBeNull();
    vi.restoreAllMocks();
  });

  it("rejects a file from another app", () => {
    seed();
    expect(() =>
      importBackup(backupWith({ tc_theme: "dark" }, { app: "other-app" })),
    ).toThrow(/isn't a TC Reference backup/);
    expect(localStorage.getItem("tc_theme")).toBe("light");
  });

  it("accepts the current version and older ones", () => {
    for (const version of [1, 2]) {
      localStorage.clear();
      importBackup(backupWith({ tc_theme: "dark" }, { version }));
      expect(localStorage.getItem("tc_theme")).toBe("dark");
    }
  });

  it("says to update the app for a backup from a newer version", () => {
    seed();
    expect(() =>
      importBackup(backupWith({ tc_theme: "dark" }, { version: 3 })),
    ).toThrow(/made by a newer version of TC Reference\. Update the app/);
    expect(localStorage.getItem("tc_theme")).toBe("light");
  });

  it("rejects a version it doesn't recognise", () => {
    for (const version of [0, "2", 1.5, null]) {
      expect(() =>
        importBackup(backupWith({ tc_theme: "dark" }, { version })),
      ).toThrow(/isn't one this app recognises/);
    }
  });

  it("rejects an oversized file before reading it", () => {
    expect(() => checkBackupFileSize({ size: MAX_BACKUP_BYTES + 1 })).toThrow(
      /too large to be a TC Reference backup/,
    );
    expect(() => checkBackupFileSize({ size: MAX_BACKUP_BYTES })).not.toThrow();
    expect(() => importBackup(" ".repeat(MAX_BACKUP_BYTES + 1))).toThrow(
      /too large/,
    );
  });

  it("only accepts 1 for the welcome flag", () => {
    expect(() =>
      importBackup(backupWith({ tc_welcome_dismissed: "yes" })),
    ).toThrow(/must be "1"/);
  });

  it("rejects unknown keys without writing anything", () => {
    seed();
    expect(() =>
      importBackup(backupWith({ tc_theme: "dark", evil_key: "x" })),
    ).toThrow(/unrecognised data: evil_key/);
    expect(localStorage.getItem("evil_key")).toBeNull();
    expect(localStorage.getItem("tc_theme")).toBe("light");
  });

  it("rejects values of the wrong shape", () => {
    expect(() => importBackup(backupWith({ tc_theme: "purple" }))).toThrow(
      BackupError,
    );
    expect(() => importBackup(backupWith({ tc_playbooks: {} }))).toThrow(
      /must be a list/,
    );
    expect(() => importBackup(backupWith({ tc_favourites: null }))).toThrow(
      /must be an object/,
    );
  });

  it("rejects a missing data section", () => {
    expect(() =>
      importBackup(JSON.stringify({ app: "tc-reference", version: 1 })),
    ).toThrow(/no data section/);
  });

  it("rejects malformed JSON", () => {
    expect(() => importBackup("{oops")).toThrow(/isn't valid JSON/);
    expect(() => importBackup("")).toThrow(BackupError);
  });

  it("names the file with the local date", () => {
    expect(backupFileName(new Date(2026, 8, 7, 12))).toBe(
      "tc-reference-backup-2026-09-07.json",
    );
  });
});

describe("backup edge cases", () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.restoreAllMocks());

  it("leaves invalid stored values out of an export so it restores", () => {
    localStorage.setItem("tc_favourites", "[]");
    localStorage.setItem("tc_theme", "sepia");
    localStorage.setItem("tc_playbooks", "[]");
    const backup = exportBackup();
    expect(backup.data).toEqual({ tc_playbooks: [] });
    expect(() => importBackup(JSON.stringify(backup))).not.toThrow();
  });

  it("restores every previous value when a write runs out of space", () => {
    localStorage.setItem("tc_favourites", SAMPLE.tc_favourites);
    localStorage.setItem("tc_playbooks", SAMPLE.tc_playbooks);
    const setItem = Storage.prototype.setItem;
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (
      this: Storage,
      key: string,
      value: string,
    ) {
      // Every write of the large imported playbooks value runs out of space.
      if (key === "tc_playbooks" && value.length > 100) {
        throw new DOMException("full", "QuotaExceededError");
      }
      return setItem.call(this, key, value);
    });
    const big = [{ id: "p2", name: "x".repeat(200), steps: [] }];
    expect(() =>
      importBackup(
        JSON.stringify({
          app: "tc-reference",
          version: 1,
          exportedAt: "",
          data: { tc_theme: "dark", tc_playbooks: big },
        }),
      ),
    ).toThrow(/not changed/);
    expect(localStorage.getItem("tc_favourites")).toBe(SAMPLE.tc_favourites);
    expect(localStorage.getItem("tc_playbooks")).toBe(SAMPLE.tc_playbooks);
    expect(localStorage.getItem("tc_theme")).toBeNull();
  });
});

describe("drill tracks and pace in backups", () => {
  beforeEach(() => localStorage.clear());

  it("imports a backup made before tracks existed as the Everything track at a week", () => {
    const old = {
      cardIndex: 12,
      dayIndex: 3,
      streak: 9,
      lastCompletionDate: "2026-01-01",
      prevCardIndex: 12,
      prevDayIndex: 2,
    };
    importBackup(
      backupWith({
        tc_drill_state: old,
        tc_srs_reviews: {
          TC004: {
            cardId: "TC004",
            interval: 6,
            repetition: 2,
            efactor: 2.5,
            nextReviewDate: "2026-01-07",
          },
        },
      }),
    );
    expect(loadDrillState()).toEqual({
      ...old,
      track: { kind: "everything" },
      pace: 7,
      rounds: 0,
    });
    expect(loadSRSMap().TC004.interval).toBe(6);
  });

  it("carries track, pace and rounds through export and import", () => {
    const state = {
      cardIndex: 2,
      dayIndex: 1,
      streak: 4,
      lastCompletionDate: "2026-01-01",
      prevCardIndex: 2,
      prevDayIndex: 0,
      order: "core-first",
      track: {
        kind: "playbook",
        playbookId: "p1",
        cardIds: ["TC004", "TC016", "TC006"],
      },
      pace: 3,
      rounds: 1,
    };
    localStorage.setItem("tc_drill_state", JSON.stringify(state));
    const backup = exportBackup();
    localStorage.clear();
    importBackup(JSON.stringify(backup));
    expect(loadDrillState()).toEqual(state);
  });
});

describe("restore snapshot and undo", () => {
  it("keeps the replaced data and puts it back on undo", () => {
    seed();
    localStorage.setItem("unrelated", "keep me");
    const summary = importBackup(backupWith({ tc_theme: "dark" }), 1000);
    expect(summary.undoAvailable).toBe(true);
    expect(localStorage.getItem("tc_favourites")).toBeNull();

    const snapshot = loadRestoreSnapshot(2000);
    expect(snapshot?.savedAt).toBe(1000);
    expect(snapshot?.data.get("tc_favourites")).toBe(SAMPLE.tc_favourites);

    undoRestore(2000);
    for (const [k, v] of Object.entries(SAMPLE)) {
      expect(localStorage.getItem(k)).toBe(v);
    }
    expect(localStorage.getItem("unrelated")).toBe("keep me");
    expect(localStorage.getItem(RESTORE_SNAPSHOT_KEY)).toBeNull();
    expect(() => undoRestore(3000)).toThrow(/no restore to undo/);
  });

  it("undo removes keys that were absent before the restore", () => {
    localStorage.setItem("tc_theme", "light");
    importBackup(backupWith({ tc_theme: "dark", tc_playbooks: [] }), 1000);
    undoRestore(1000);
    expect(localStorage.getItem("tc_theme")).toBe("light");
    expect(localStorage.getItem("tc_playbooks")).toBeNull();
  });

  it("never puts the snapshot in a backup", () => {
    seed();
    importBackup(backupWith({ tc_theme: "dark" }));
    expect(localStorage.getItem(RESTORE_SNAPSHOT_KEY)).not.toBeNull();
    expect(exportBackup().data).not.toHaveProperty(RESTORE_SNAPSHOT_KEY);
    expect(() =>
      importBackup(backupWith({ [RESTORE_SNAPSHOT_KEY]: {} })),
    ).toThrow(/unrecognised data/);
  });

  it("drops a stale or unreadable snapshot", () => {
    importBackup(backupWith({ tc_theme: "dark" }), 1000);
    expect(
      loadRestoreSnapshot(1000 + RESTORE_SNAPSHOT_MAX_AGE_MS + 1),
    ).toBeNull();
    expect(localStorage.getItem(RESTORE_SNAPSHOT_KEY)).toBeNull();
    localStorage.setItem(RESTORE_SNAPSHOT_KEY, "{oops");
    expect(loadRestoreSnapshot()).toBeNull();
  });

  it("an invalid file leaves an earlier snapshot alone", () => {
    seed();
    importBackup(backupWith({ tc_theme: "dark" }), 1000);
    expect(() => importBackup("{oops", 2000)).toThrow();
    expect(loadRestoreSnapshot(2000)?.savedAt).toBe(1000);
  });
});

describe("saveBackup", () => {
  const NOW = new Date("2026-03-04T05:06:07Z");

  const IPHONE_UA =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1";

  function shareNav(
    share: (data: ShareData) => Promise<void>,
    userAgent = IPHONE_UA,
  ) {
    return {
      userAgent,
      maxTouchPoints: 5,
      canShare: (data: ShareData) => Array.isArray(data.files),
      share: vi.fn(share),
    } as unknown as Navigator;
  }

  function stubDownload() {
    URL.createObjectURL = vi.fn().mockReturnValue("blob:x");
    URL.revokeObjectURL = vi.fn();
    return vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});
  }

  afterEach(() => vi.restoreAllMocks());

  it("shares the file and records the backup when the share finishes", async () => {
    localStorage.setItem("tc_theme", "dark");
    const nav = shareNav(async () => {});
    expect(await saveBackup(NOW, nav)).toBe("saved");
    const data = vi.mocked(nav.share).mock.calls[0][0];
    const file = data.files?.[0] as File;
    expect(file.name).toBe(backupFileName(NOW));
    expect(file.type).toBe("application/json");
    expect(JSON.parse(await file.text()).data).toEqual({ tc_theme: "dark" });
    expect(loadDataSafety().lastBackupAt).toBe(NOW.getTime());
  });

  it("records nothing when the share sheet is closed", async () => {
    const click = stubDownload();
    const nav = shareNav(async () => {
      throw new DOMException("Share canceled", "AbortError");
    });
    expect(await saveBackup(NOW, nav)).toBe("cancelled");
    expect(click).not.toHaveBeenCalled();
    expect(loadDataSafety().lastBackupAt).toBeNull();
  });

  it("downloads and records where files can't be shared", async () => {
    const click = stubDownload();
    const nav = {
      canShare: () => false,
      share: vi.fn(),
    } as unknown as Navigator;
    expect(await saveBackup(NOW, nav)).toBe("saved");
    expect(nav.share).not.toHaveBeenCalled();
    expect(click).toHaveBeenCalledTimes(1);
    expect(loadDataSafety().lastBackupAt).toBe(NOW.getTime());
  });

  it("reports a failure when sharing fails another way", async () => {
    const click = stubDownload();
    const nav = shareNav(async () => {
      throw new DOMException("Not allowed", "NotAllowedError");
    });
    expect(await saveBackup(NOW, nav)).toBe("failed");
    expect(click).not.toHaveBeenCalled();
    expect(loadDataSafety().lastBackupAt).toBeNull();
  });

  it("downloads rather than shares on Android and desktop", async () => {
    const click = stubDownload();
    const nav = shareNav(
      async () => {},
      "Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Mobile Safari/537.36",
    );
    expect(await saveBackup(NOW, nav)).toBe("saved");
    expect(nav.share).not.toHaveBeenCalled();
    expect(click).toHaveBeenCalledTimes(1);
  });

  it("reports a failure and records nothing when no download starts", async () => {
    URL.createObjectURL = vi.fn(() => {
      throw new Error("no blobs");
    });
    expect(await saveBackup(NOW, undefined)).toBe("failed");
    expect(loadDataSafety().lastBackupAt).toBeNull();
  });
});

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  BACKUP_KEYS,
  BackupError,
  backupFileName,
  exportBackup,
  importBackup,
} from "../lib/backup";

const SAMPLE = {
  tc_favourites: JSON.stringify({ cardIds: ["TC001"], phrases: [] }),
  tc_drill_state: JSON.stringify({ cardIndex: 3, dayIndex: 1, streak: 2 }),
  tc_srs_reviews: JSON.stringify({ TC001: { interval: 1 } }),
  tc_playbooks: JSON.stringify([{ id: "p1", name: "Mine", steps: [] }]),
  "tc-recent-searches": JSON.stringify(["calm"]),
  tc_theme: "light",
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
    expect(backup.version).toBe(1);
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
    const summary = importBackup(backupWith({ tc_theme: "dark" }));
    expect(summary.restored).toEqual(["tc_theme"]);
    expect(localStorage.getItem("tc_favourites")).toBeNull();
    expect(localStorage.getItem("tc_theme")).toBe("dark");
  });

  it("rejects a file from another app", () => {
    seed();
    expect(() =>
      importBackup(backupWith({ tc_theme: "dark" }, { app: "other-app" })),
    ).toThrow(/isn't a TC Reference backup/);
    expect(localStorage.getItem("tc_theme")).toBe("light");
  });

  it("rejects an unsupported version", () => {
    expect(() =>
      importBackup(backupWith({ tc_theme: "dark" }, { version: 2 })),
    ).toThrow(/Unsupported backup version/);
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
    let quotaHit = false;
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(function (
      this: Storage,
      key: string,
      value: string,
    ) {
      // Fail the first write of the large imported playbooks value only.
      if (!quotaHit && key === "tc_playbooks" && value.length > 100) {
        quotaHit = true;
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

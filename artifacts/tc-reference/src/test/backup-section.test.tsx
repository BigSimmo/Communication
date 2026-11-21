import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { BackupSection } from "../components/backup-section";

const reload = vi.fn();
const originalLocation = window.location;

function backupFile(data: Record<string, unknown>, name = "backup.json") {
  const text = JSON.stringify({
    app: "tc-reference",
    version: 1,
    exportedAt: "2026-01-01T00:00:00.000Z",
    data,
  });
  return new File([text], name, { type: "application/json" });
}

async function choose(file: File) {
  const input = screen.getByLabelText("Choose a backup file to import");
  await act(async () => {
    fireEvent.change(input, { target: { files: [file] } });
  });
}

beforeEach(() => {
  localStorage.clear();
  reload.mockReset();
  Object.defineProperty(window, "location", {
    configurable: true,
    value: { ...originalLocation, reload },
  });
});

afterEach(() => {
  Object.defineProperty(window, "location", {
    configurable: true,
    value: originalLocation,
  });
  vi.restoreAllMocks();
});

describe("BackupSection (F-12)", () => {
  it("exports a JSON download of stored data", async () => {
    localStorage.setItem("tc_theme", "dark");
    const createUrl = vi.fn().mockReturnValue("blob:x");
    URL.createObjectURL = createUrl;
    URL.revokeObjectURL = vi.fn();
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});
    render(<BackupSection />);
    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Export backup" }));
    });
    expect(click).toHaveBeenCalledTimes(1);
    const blob = createUrl.mock.calls[0][0] as Blob;
    expect(blob.type).toBe("application/json");
  });

  it("asks for confirmation, then imports and reloads", async () => {
    localStorage.setItem("tc_theme", "light");
    render(<BackupSection />);
    await choose(backupFile({ tc_theme: "dark" }, "mine.json"));

    expect(screen.getByText("mine.json")).toBeInTheDocument();
    expect(localStorage.getItem("tc_theme")).toBe("light");

    fireEvent.click(screen.getByRole("button", { name: "Replace my data" }));
    expect(localStorage.getItem("tc_theme")).toBe("dark");
    expect(reload).toHaveBeenCalledTimes(1);
  });

  it("cancel leaves data untouched", async () => {
    localStorage.setItem("tc_theme", "light");
    render(<BackupSection />);
    await choose(backupFile({ tc_theme: "dark" }));
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(
      screen.queryByRole("button", { name: "Replace my data" }),
    ).toBeNull();
    expect(localStorage.getItem("tc_theme")).toBe("light");
    expect(reload).not.toHaveBeenCalled();
  });

  it("shows an alert for an invalid file and never offers to import it", async () => {
    render(<BackupSection />);
    await choose(new File(["not json"], "bad.json"));
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Replace my data" }),
    ).toBeNull();
  });

  it("rejects a backup from another app", async () => {
    render(<BackupSection />);
    const file = new File(
      [JSON.stringify({ app: "other", version: 1, data: {} })],
      "x.json",
    );
    await choose(file);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("rejects an oversized file without reading it", async () => {
    render(<BackupSection />);
    const file = new File(["{}"], "huge.json");
    Object.defineProperty(file, "size", { value: 6 * 1024 * 1024 });
    const text = vi.spyOn(file, "text");
    await choose(file);
    expect(screen.getByRole("alert")).toHaveTextContent(/too large/);
    expect(text).not.toHaveBeenCalled();
  });

  it("asks to update the app for a backup from a newer version", async () => {
    render(<BackupSection />);
    const file = new File(
      [JSON.stringify({ app: "tc-reference", version: 99, data: {} })],
      "new.json",
    );
    await choose(file);
    expect(screen.getByRole("alert")).toHaveTextContent(
      /newer version of TC Reference\. Update the app first/,
    );
  });

  it("offers Undo restore after an import and puts the old data back", async () => {
    localStorage.setItem("tc_theme", "light");
    const { unmount } = render(<BackupSection />);
    expect(screen.queryByTestId("backup-undo")).toBeNull();
    await choose(backupFile({ tc_theme: "dark" }));
    fireEvent.click(screen.getByRole("button", { name: "Replace my data" }));
    expect(localStorage.getItem("tc_theme")).toBe("dark");
    unmount();

    // After the reload the section offers the undo.
    render(<BackupSection />);
    expect(screen.getByTestId("backup-undo")).toHaveTextContent(
      "Restored a backup on",
    );
    fireEvent.click(screen.getByRole("button", { name: "Undo restore" }));
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(localStorage.getItem("tc_theme")).toBe("dark");

    fireEvent.click(screen.getByRole("button", { name: "Undo restore" }));
    fireEvent.click(screen.getByRole("button", { name: "Yes, undo" }));
    expect(localStorage.getItem("tc_theme")).toBe("light");
    expect(localStorage.getItem("tc_restore_snapshot")).toBeNull();
    expect(reload).toHaveBeenCalledTimes(2);
  });

  it("closing the share sheet records no backup", async () => {
    const share = vi
      .fn()
      .mockRejectedValue(new DOMException("canceled", "AbortError"));
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: share,
    });
    Object.defineProperty(navigator, "canShare", {
      configurable: true,
      value: () => true,
    });
    // The share sheet is only used for backups on iPhone and iPad.
    Object.defineProperty(navigator, "userAgent", {
      configurable: true,
      value:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
    });
    try {
      render(<BackupSection />);
      await act(async () => {
        fireEvent.click(screen.getByRole("button", { name: "Export backup" }));
      });
      expect(share).toHaveBeenCalledTimes(1);
      expect(screen.getByTestId("backup-last")).toHaveTextContent(
        "No backup exported from this device yet.",
      );
      expect(screen.queryByRole("alert")).toBeNull();
    } finally {
      delete (navigator as { share?: unknown }).share;
      delete (navigator as { canShare?: unknown }).canShare;
      delete (navigator as { userAgent?: unknown }).userAgent;
    }
  });
});

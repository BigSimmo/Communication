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
  it("exports a JSON download of stored data", () => {
    localStorage.setItem("tc_theme", "dark");
    const createUrl = vi.fn().mockReturnValue("blob:x");
    URL.createObjectURL = createUrl;
    URL.revokeObjectURL = vi.fn();
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => {});
    render(<BackupSection />);
    fireEvent.click(screen.getByRole("button", { name: "Export" }));
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
});

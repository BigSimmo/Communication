import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  PlaybookProvider,
  usePlaybooks,
  type Playbook,
} from "../lib/playbook-context";

const KEY = "tc_playbooks";

function renderPlaybooks() {
  return renderHook(() => usePlaybooks(), { wrapper: PlaybookProvider });
}

function stored(): unknown {
  return JSON.parse(localStorage.getItem(KEY) ?? "null");
}

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("PlaybookProvider", () => {
  it("starts empty", () => {
    const { result } = renderPlaybooks();
    expect(result.current.playbooks).toEqual([]);
  });

  it("creates playbooks with unique ids and persists them", () => {
    const { result } = renderPlaybooks();
    let first!: Playbook;
    let second!: Playbook;
    act(() => {
      first = result.current.createPlaybook("Tough 1:1s", "Hard talks", [
        "TC014",
      ]);
    });
    act(() => {
      second = result.current.createPlaybook("Standup", "Daily");
    });

    expect(first).toMatchObject({
      name: "Tough 1:1s",
      description: "Hard talks",
      cardIds: ["TC014"],
    });
    expect(first.id).toMatch(/^pb_[a-z0-9]+$/);
    expect(second.cardIds).toEqual([]);
    expect(second.id).not.toBe(first.id);

    expect(result.current.playbooks).toEqual([first, second]);
    expect(stored()).toEqual([first, second]);
    expect(result.current.getPlaybook(first.id)).toEqual(first);
    expect(result.current.getPlaybook("pb_missing")).toBeUndefined();
  });

  it("updates only the targeted playbook", () => {
    const { result } = renderPlaybooks();
    let a!: Playbook;
    let b!: Playbook;
    act(() => {
      a = result.current.createPlaybook("A", "a");
      b = result.current.createPlaybook("B", "b", ["TC001"]);
    });
    act(() => {
      result.current.updatePlaybook(a.id, "A2", "a2", ["TC002", "TC003"]);
    });
    expect(result.current.playbooks).toEqual([
      { id: a.id, name: "A2", description: "a2", cardIds: ["TC002", "TC003"] },
      b,
    ]);
    expect(stored()).toEqual(result.current.playbooks);

    act(() => {
      result.current.updatePlaybook("pb_missing", "X", "x", []);
    });
    expect(result.current.playbooks).toHaveLength(2);
  });

  it("deletes a playbook", () => {
    const { result } = renderPlaybooks();
    let a!: Playbook;
    let b!: Playbook;
    act(() => {
      a = result.current.createPlaybook("A", "a");
      b = result.current.createPlaybook("B", "b");
    });
    act(() => {
      result.current.deletePlaybook(a.id);
    });
    expect(result.current.playbooks).toEqual([b]);
    expect(stored()).toEqual([b]);
    expect(result.current.getPlaybook(a.id)).toBeUndefined();
  });

  it("reloads persisted playbooks in a new provider", () => {
    const first = renderPlaybooks();
    act(() => {
      first.result.current.createPlaybook("Kept", "across reloads", ["TC005"]);
    });
    const saved = first.result.current.playbooks;
    first.unmount();

    const { result } = renderPlaybooks();
    expect(result.current.playbooks).toEqual(saved);
  });

  it("loads valid stored data unchanged", () => {
    const data: Playbook[] = [
      { id: "pb_1", name: "One", description: "", cardIds: [] },
      {
        id: "pb_2",
        name: "Two",
        description: "d",
        cardIds: ["TC001", "TC002"],
      },
    ];
    localStorage.setItem(KEY, JSON.stringify(data));
    const { result } = renderPlaybooks();
    expect(result.current.playbooks).toEqual(data);
  });

  it.each(["{broken", "null", "{}", '"playbooks"', "3", '{"pb_1":{}}'])(
    "falls back to no playbooks for corrupted storage %s",
    (raw) => {
      localStorage.setItem(KEY, raw);
      const { result } = renderPlaybooks();
      expect(result.current.playbooks).toEqual([]);
      // ...and stays usable
      act(() => {
        result.current.createPlaybook("Fresh", "");
      });
      expect(result.current.playbooks).toHaveLength(1);
    },
  );

  it("keeps valid entries and drops or repairs malformed ones", () => {
    localStorage.setItem(
      KEY,
      JSON.stringify([
        null,
        "pb_x",
        { id: 1, name: "numeric id" },
        { id: "pb_noname" },
        { id: "", name: "empty id" },
        { id: "pb_a", name: "A", description: "a", cardIds: ["TC001"] },
        { id: "pb_a", name: "Duplicate id", description: "", cardIds: [] },
        { id: "pb_b", name: "B", description: 5, cardIds: ["TC002", 3, null] },
        { id: "pb_c", name: "C", cardIds: "TC003" },
      ]),
    );
    const { result } = renderPlaybooks();
    expect(result.current.playbooks).toEqual([
      { id: "pb_a", name: "A", description: "a", cardIds: ["TC001"] },
      { id: "pb_b", name: "B", description: "", cardIds: ["TC002"] },
      { id: "pb_c", name: "C", description: "", cardIds: [] },
    ]);
  });

  it("keeps working when storage writes fail", () => {
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    const { result } = renderPlaybooks();
    act(() => {
      result.current.createPlaybook("In memory", "");
    });
    expect(result.current.playbooks).toHaveLength(1);
  });

  it("throws when used outside the provider", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => usePlaybooks())).toThrow(
      "usePlaybooks must be used within PlaybookProvider",
    );
  });
});

import { createContext, useContext, useState, useEffect } from "react";
import {
  isRecord,
  safeParseJSON,
  sanitiseStringArray,
} from "./storage-validation";

export interface Playbook {
  id: string;
  name: string;
  description: string;
  cardIds: string[];
}

interface PlaybookCtx {
  playbooks: Playbook[];
  createPlaybook: (
    name: string,
    description: string,
    cardIds?: string[],
  ) => Playbook;
  updatePlaybook: (
    id: string,
    name: string,
    description: string,
    cardIds: string[],
  ) => void;
  deletePlaybook: (id: string) => void;
  getPlaybook: (id: string) => Playbook | undefined;
}

const PlaybookContext = createContext<PlaybookCtx | null>(null);

const STORAGE_KEY = "tc_playbooks";

/**
 * Shape check for stored playbooks: keeps entries with a string id and name
 * (description defaults to "", non-string card ids are dropped) and skips
 * duplicate ids, which would otherwise collide as React keys and make
 * update/delete act on several playbooks at once.
 */
export function sanitisePlaybooks(value: unknown): Playbook[] {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  const out: Playbook[] = [];
  for (const entry of value) {
    if (!isRecord(entry)) continue;
    const { id, name, description } = entry;
    if (typeof id !== "string" || !id || typeof name !== "string") continue;
    if (seen.has(id)) continue;
    seen.add(id);
    out.push({
      id,
      name,
      description: typeof description === "string" ? description : "",
      cardIds: sanitiseStringArray(entry.cardIds),
    });
  }
  return out;
}

function loadPlaybooks(): Playbook[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? sanitisePlaybooks(safeParseJSON(stored)) : [];
  } catch {
    return [];
  }
}

export function PlaybookProvider({ children }: { children: React.ReactNode }) {
  const [playbooks, setPlaybooks] = useState<Playbook[]>(loadPlaybooks);

  useEffect(() => {
    // Best-effort: private browsing / quota-exceeded must not crash the app.
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(playbooks));
    } catch {}
  }, [playbooks]);

  const createPlaybook = (
    name: string,
    description: string,
    cardIds: string[] = [],
  ) => {
    const newPlaybook: Playbook = {
      id: "pb_" + Math.random().toString(36).substr(2, 9),
      name,
      description,
      cardIds,
    };
    setPlaybooks((prev) => [...prev, newPlaybook]);
    return newPlaybook;
  };

  const updatePlaybook = (
    id: string,
    name: string,
    description: string,
    cardIds: string[],
  ) => {
    setPlaybooks((prev) =>
      prev.map((pb) =>
        pb.id === id ? { ...pb, name, description, cardIds } : pb,
      ),
    );
  };

  const deletePlaybook = (id: string) => {
    setPlaybooks((prev) => prev.filter((pb) => pb.id !== id));
  };

  const getPlaybook = (id: string) => {
    return playbooks.find((pb) => pb.id === id);
  };

  return (
    <PlaybookContext.Provider
      value={{
        playbooks,
        createPlaybook,
        updatePlaybook,
        deletePlaybook,
        getPlaybook,
      }}
    >
      {children}
    </PlaybookContext.Provider>
  );
}

export function usePlaybooks() {
  const ctx = useContext(PlaybookContext);
  if (!ctx)
    throw new Error("usePlaybooks must be used within PlaybookProvider");
  return ctx;
}

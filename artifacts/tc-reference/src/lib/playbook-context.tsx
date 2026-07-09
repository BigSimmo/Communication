import { createContext, useContext, useState, useEffect } from "react";

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

export function PlaybookProvider({ children }: { children: React.ReactNode }) {
  const [playbooks, setPlaybooks] = useState<Playbook[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(playbooks));
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

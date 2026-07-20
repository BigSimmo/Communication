import { useState } from "react";
import { useLocation } from "wouter";
import {
  BookOpen,
  Plus,
  Check,
  Trash2,
  Edit2,
  Play,
  ChevronRight,
  X,
  Sparkles,
  FolderHeart,
} from "lucide-react";
import { usePlaybooks, Playbook } from "@/lib/playbook-context";
import { LIBRARY_CATEGORIES } from "@/lib/data";

const ALL_CARDS = Object.values(LIBRARY_CATEGORIES).flat();
const CARD_MAP = Object.fromEntries(ALL_CARDS.map((c) => [c.id, c]));

export default function Playbooks() {
  const { playbooks, createPlaybook, updatePlaybook, deletePlaybook } =
    usePlaybooks();
  const [, setLocation] = useLocation();

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleOpenCreate = () => {
    setName("");
    setDescription("");
    setSelectedCards([]);
    setEditingId(null);
    setIsEditing(true);
  };

  const handleOpenEdit = (pb: Playbook) => {
    setName(pb.name);
    setDescription(pb.description);
    setSelectedCards(pb.cardIds);
    setEditingId(pb.id);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!name.trim()) return;
    if (editingId) {
      updatePlaybook(editingId, name, description, selectedCards);
    } else {
      createPlaybook(name, description, selectedCards);
    }
    setIsEditing(false);
  };

  const handleDelete = (pb: Playbook) => {
    if (
      window.confirm(
        `Delete "${pb.name}"? This can't be undone.`,
      )
    ) {
      deletePlaybook(pb.id);
    }
  };

  const handleToggleCardSelection = (cardId: string) => {
    setSelectedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId],
    );
  };

  return (
    <div className="flex flex-col bg-background w-full max-w-2xl mx-auto px-4 md:px-6 py-6 gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--fg-85)" }}
          >
            Playbooks
          </h1>
          <p className="text-[13px]" style={{ color: "var(--fg-38)" }}>
            Chain communication techniques into custom guides.
          </p>
        </div>
        {!isEditing && (
          <button
            onClick={handleOpenCreate}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-bold transition-all shadow-sm active:scale-95"
            style={{
              minHeight: 36,
              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
              color: "#fff",
            }}
          >
            <Plus className="w-4 h-4" /> Create
          </button>
        )}
      </div>

      {isEditing ? (
        <div
          className="flex flex-col gap-4 p-5 rounded-2xl border"
          style={{
            background: "var(--fg-02)",
            borderColor: "var(--fg-08)",
          }}
        >
          <div
            className="flex items-center justify-between border-b pb-3 mb-2"
            style={{ borderColor: "var(--fg-05)" }}
          >
            <h3
              className="font-bold text-[14px]"
              style={{ color: "var(--fg-80)" }}
            >
              {editingId ? "Edit Playbook" : "New Playbook"}
            </h3>
            <button
              onClick={() => setIsEditing(false)}
              aria-label="Close editor"
              className="flex items-center justify-center -mr-1.5 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
              style={{ width: 36, height: 36, color: "var(--fg-30)" }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="text-[11px] font-bold tracking-wider uppercase"
              style={{ color: "var(--fg-38)" }}
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Critical Meeting, Handling Feedback"
              className="w-full text-[13px] px-3.5 py-2.5 rounded-xl outline-none"
              style={{
                background: "var(--fg-05)",
                border: "1px solid var(--fg-08)",
                color: "var(--fg-85)",
              }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="text-[11px] font-bold tracking-wider uppercase"
              style={{ color: "var(--fg-38)" }}
            >
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief purpose of this playbook..."
              className="w-full text-[13px] px-3.5 py-2.5 rounded-xl outline-none min-h-[70px] resize-none"
              style={{
                background: "var(--fg-05)",
                border: "1px solid var(--fg-08)",
                color: "var(--fg-85)",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-[11px] font-bold tracking-wider uppercase"
              style={{ color: "var(--fg-38)" }}
            >
              Select Techniques ({selectedCards.length} selected)
            </label>
            <div
              className="max-h-[220px] overflow-y-auto rounded-xl p-2 flex flex-col gap-1.5 border"
              style={{
                background: "var(--fg-03)",
                borderColor: "var(--fg-05)",
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {ALL_CARDS.map((card) => {
                const isSel = selectedCards.includes(card.id);
                return (
                  <button
                    key={card.id}
                    onClick={() => handleToggleCardSelection(card.id)}
                    aria-pressed={isSel}
                    className="flex items-center justify-between gap-2 text-left px-3 py-2 rounded-lg text-[12px] transition-colors"
                    style={{
                      minHeight: 40,
                      background: isSel
                        ? "rgba(245,158,11,0.08)"
                        : "transparent",
                    }}
                  >
                    <div>
                      <span
                        className="font-bold mr-1.5"
                        style={{ color: isSel ? "#f59e0b" : "var(--fg-40)" }}
                      >
                        {card.id}
                      </span>
                      <span
                        style={{
                          color: isSel ? "var(--fg-85)" : "var(--fg-60)",
                        }}
                      >
                        {card.title}
                      </span>
                    </div>
                    <div
                      className="w-4 h-4 flex-shrink-0 rounded flex items-center justify-center border transition-colors"
                      style={{
                        borderColor: isSel ? "#f59e0b" : "var(--fg-20)",
                        background: isSel ? "#f59e0b" : "transparent",
                      }}
                    >
                      {isSel && (
                        <Check className="w-3 h-3 text-white stroke-[3px]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={!name.trim()}
            className="w-full py-2.5 rounded-xl text-[13px] font-bold transition-all text-white mt-2 disabled:opacity-50"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
            }}
          >
            Save Playbook
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {playbooks.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center p-10 rounded-2xl text-center border gap-3"
              style={{
                borderColor: "var(--fg-08)",
                background: "var(--fg-02)",
              }}
            >
              <FolderHeart
                className="w-10 h-10 stroke-[1.5]"
                style={{ color: "var(--fg-22)" }}
              />
              <div>
                <p
                  className="font-bold text-[14px]"
                  style={{ color: "var(--fg-80)" }}
                >
                  No Playbooks Yet
                </p>
                <p
                  className="text-[12px] max-w-[280px] mx-auto mt-1"
                  style={{ color: "var(--fg-38)" }}
                >
                  Combine multiple communication cards to map out structured
                  dialogues or preparation flows.
                </p>
              </div>
              <button
                onClick={handleOpenCreate}
                className="mt-2 px-4 py-2 rounded-xl text-[12px] font-bold text-white transition-all shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                }}
              >
                Create Playbook
              </button>
            </div>
          ) : (
            playbooks.map((pb) => (
              <div
                key={pb.id}
                className="p-4 rounded-2xl border flex flex-col gap-3 transition-all"
                style={{
                  background: "var(--fg-02)",
                  borderColor: "var(--fg-08)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className="font-bold text-[15px]"
                      style={{ color: "var(--fg-85)" }}
                    >
                      {pb.name}
                    </h3>
                    {pb.description && (
                      <p
                        className="text-[12px] mt-0.5"
                        style={{ color: "var(--fg-38)" }}
                      >
                        {pb.description}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-1 -mr-1.5 flex-shrink-0">
                    <button
                      onClick={() => handleOpenEdit(pb)}
                      aria-label="Edit Playbook"
                      className="flex items-center justify-center rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
                      style={{ width: 36, height: 36 }}
                    >
                      <Edit2
                        className="w-4 h-4"
                        style={{ color: "var(--fg-38)" }}
                      />
                    </button>
                    <button
                      onClick={() => handleDelete(pb)}
                      aria-label="Delete Playbook"
                      className="flex items-center justify-center rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
                      style={{ width: 36, height: 36 }}
                    >
                      <Trash2
                        className="w-4 h-4"
                        style={{ color: "var(--fg-30)" }}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 items-center">
                  {pb.cardIds.map((cid, i) => {
                    const c = CARD_MAP[cid];
                    if (!c) return null;
                    return (
                      <div key={cid} className="flex items-center gap-1">
                        <button
                          onClick={() => setLocation(`/card/${cid}`)}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors active:scale-95"
                          style={{
                            minHeight: 32,
                            background: "var(--fg-05)",
                            border: "1px solid var(--fg-08)",
                            color: "var(--fg-65)",
                          }}
                        >
                          <span
                            className="font-bold"
                            style={{ color: "#f59e0b" }}
                          >
                            {cid}
                          </span>
                          <span>{c.title}</span>
                        </button>
                        {i < pb.cardIds.length - 1 && (
                          <ChevronRight
                            className="w-3.5 h-3.5"
                            style={{ color: "var(--fg-20)" }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

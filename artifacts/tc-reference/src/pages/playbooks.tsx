import { useState, useRef, useEffect } from "react";
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
  AlertTriangle,
} from "lucide-react";
import { usePlaybooks, Playbook } from "@/lib/playbook-context";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { useFocusTrap } from "@/hooks/use-focus-trap";

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
  const [deletingPlaybook, setDeletingPlaybook] = useState<Playbook | null>(
    null,
  );

  const deleteModalRef = useRef<HTMLDivElement>(null);
  const cancelDeleteButtonRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(!!deletingPlaybook, deleteModalRef, {
    initialFocusRef: cancelDeleteButtonRef,
  });

  useEffect(() => {
    if (!deletingPlaybook) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDeletingPlaybook(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [deletingPlaybook]);

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
    setDeletingPlaybook(pb);
  };

  const handleConfirmDelete = () => {
    if (!deletingPlaybook) return;
    deletePlaybook(deletingPlaybook.id);
    setDeletingPlaybook(null);
  };

  const handleToggleCardSelection = (cardId: string) => {
    setSelectedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId],
    );
  };

  return (
    <div className="flex flex-col bg-background w-full max-w-2xl mx-auto px-4 md:px-6 pt-6 pb-[calc(6rem+env(safe-area-inset-bottom,0px))] md:pb-6 gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--fg-85)" }}
          >
            Playbooks
          </h1>
          <p className="text-[13px]" style={{ color: "var(--fg-55)" }}>
            Chain communication techniques into custom guides.
          </p>
        </div>
        {!isEditing && (
          <button
            onClick={handleOpenCreate}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-bold transition-all shadow-sm active:scale-95"
            style={{
              minHeight: 44,
              background:
                "linear-gradient(135deg, var(--brand), var(--brand-bright))",
              color: "var(--brand-contrast)",
            }}
          >
            <Plus className="w-4 h-4" aria-hidden="true" /> Create
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
              {editingId ? "Edit playbook" : "New playbook"}
            </h3>
            <button
              onClick={() => setIsEditing(false)}
              aria-label="Close editor"
              className="flex items-center justify-center -mr-1.5 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
              style={{ width: 44, height: 44, color: "var(--fg-55)" }}
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="playbook-name"
              className="text-[11px] font-bold tracking-wider uppercase"
              style={{ color: "var(--fg-55)" }}
            >
              Name
            </label>
            <input
              id="playbook-name"
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
              htmlFor="playbook-description"
              className="text-[11px] font-bold tracking-wider uppercase"
              style={{ color: "var(--fg-55)" }}
            >
              Description
            </label>
            <textarea
              id="playbook-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief purpose of this playbook…"
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
              style={{ color: "var(--fg-55)" }}
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
                        ? "color-mix(in srgb, var(--brand) 8%, transparent)"
                        : "transparent",
                    }}
                  >
                    <div>
                      <span
                        className="font-bold mr-1.5"
                        style={{
                          color: isSel ? "var(--brand-text)" : "var(--fg-40)",
                        }}
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
                        borderColor: isSel ? "var(--brand)" : "var(--fg-20)",
                        background: isSel ? "var(--brand)" : "transparent",
                      }}
                    >
                      {isSel && (
                        <Check
                          className="w-3 h-3 stroke-[3px]"
                          style={{ color: "var(--brand-contrast)" }}
                        />
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
            className="w-full py-2.5 rounded-xl text-[13px] font-bold transition-all mt-2 disabled:opacity-50 active:scale-95"
            style={{
              minHeight: 44,
              background:
                "linear-gradient(135deg, var(--brand), var(--brand-bright))",
              color: "var(--brand-contrast)",
            }}
          >
            Save playbook
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
                  No playbooks yet
                </p>
                <p
                  className="text-[12px] max-w-[280px] mx-auto mt-1"
                  style={{ color: "var(--fg-55)" }}
                >
                  Combine multiple communication cards to map out structured
                  dialogues or preparation flows.
                </p>
              </div>
              <button
                onClick={handleOpenCreate}
                className="mt-2 px-4 py-2 rounded-xl text-[12px] font-bold transition-all shadow-sm active:scale-95"
                style={{
                  minHeight: 44,
                  background:
                    "linear-gradient(135deg, var(--brand), var(--brand-bright))",
                  color: "var(--brand-contrast)",
                }}
              >
                Create playbook
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
                        style={{ color: "var(--fg-55)" }}
                      >
                        {pb.description}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-1 -mr-1.5 flex-shrink-0">
                    <button
                      onClick={() => handleOpenEdit(pb)}
                      aria-label="Edit playbook"
                      className="flex items-center justify-center rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
                      style={{ width: 44, height: 44 }}
                    >
                      <Edit2
                        className="w-4 h-4"
                        style={{ color: "var(--fg-55)" }}
                      />
                    </button>
                    <button
                      onClick={() => handleDelete(pb)}
                      aria-label="Delete playbook"
                      className="flex items-center justify-center rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
                      style={{ width: 44, height: 44 }}
                    >
                      <Trash2
                        className="w-4 h-4"
                        style={{ color: "var(--fg-50)" }}
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
                          className="tap-target-y flex items-center gap-1 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-colors active:scale-95"
                          style={{
                            minHeight: 36,
                            background: "var(--fg-05)",
                            border: "1px solid var(--fg-08)",
                            color: "var(--fg-65)",
                          }}
                        >
                          <span
                            className="font-bold"
                            style={{ color: "var(--brand-text)" }}
                          >
                            {cid}
                          </span>
                          <span>{c.title}</span>
                        </button>
                        {i < pb.cardIds.length - 1 && (
                          <ChevronRight
                            className="w-3.5 h-3.5"
                            style={{ color: "var(--fg-45)" }}
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

      {deletingPlaybook && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{
            zIndex: "var(--z-modal)" as unknown as number,
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          onClick={() => setDeletingPlaybook(null)}
        >
          <div
            ref={deleteModalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-desc"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl p-5 border flex flex-col gap-4 shadow-xl animate-in fade-in zoom-in-95 duration-150"
            style={{
              background: "var(--surface-dd)",
              borderColor: "var(--fg-10)",
              color: "var(--fg-90)",
            }}
          >
            <div className="flex items-start gap-3.5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent-red) 12%, transparent)",
                  color: "var(--accent-red)",
                }}
              >
                <AlertTriangle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  id="delete-dialog-title"
                  className="font-bold text-[15px] leading-tight"
                  style={{ color: "var(--fg-90)" }}
                >
                  Delete playbook?
                </h3>
                <p
                  id="delete-dialog-desc"
                  className="text-[12px] leading-relaxed"
                  style={{ color: "var(--fg-55)" }}
                >
                  Are you sure you want to delete{" "}
                  <strong style={{ color: "var(--fg-85)" }}>
                    &ldquo;{deletingPlaybook.name}&rdquo;
                  </strong>
                  ? This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 mt-2">
              <button
                ref={cancelDeleteButtonRef}
                onClick={() => setDeletingPlaybook(null)}
                className="px-4 py-2 rounded-xl text-[12px] font-semibold transition-all active:scale-95"
                style={{
                  minHeight: 44,
                  background: "var(--fg-05)",
                  border: "1px solid var(--fg-08)",
                  color: "var(--fg-70)",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 rounded-xl text-[12px] font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-sm active:scale-95"
                style={{ minHeight: 44 }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "wouter";
import {
  ArrowDown,
  ArrowUp,
  Plus,
  Check,
  Trash2,
  Edit2,
  Printer,
  ChevronRight,
  X,
  FolderHeart,
  AlertTriangle,
} from "lucide-react";
import {
  usePlaybooks,
  Playbook,
  PLAYBOOK_DESCRIPTION_MAX_LENGTH,
  PLAYBOOK_NAME_MAX_LENGTH,
} from "@/lib/playbook-context";
import { LIBRARY_CATEGORIES } from "@/lib/data";
import { categoryStyleFor } from "@/lib/design-tokens";
import { Button } from "@/components/ui/button";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { PageIntro } from "@/components/page-intro";
import { PlaybookTemplateList } from "@/components/playbook-template-list";
import {
  PLAYBOOK_TEMPLATES,
  type PlaybookTemplate,
} from "@/lib/playbook-templates";

const ALL_CARDS = Object.values(LIBRARY_CATEGORIES).flat();
const CARD_MAP = Object.fromEntries(ALL_CARDS.map((c) => [c.id, c]));
const CARD_COLOR: Record<string, string> = Object.fromEntries(
  Object.entries(LIBRARY_CATEGORIES).flatMap(([category, cards]) =>
    cards.map((c) => [c.id, categoryStyleFor(category).color]),
  ),
);

const FIELD_LABEL = "text-[13px] font-bold tracking-[0.06em] uppercase";
const FIELD_INPUT =
  "w-full text-[16px] px-3.5 rounded-xl outline-none border border-[var(--fg-08)] bg-[var(--fg-05)] text-[var(--fg-90)] focus:border-[var(--brand)]";

/** The sheet a playbook prints as: its steps in order, one line each. */
function PlaybookPrintSheet({ playbook }: { playbook: Playbook }) {
  const steps = playbook.cardIds.map((id) => CARD_MAP[id]).filter(Boolean);
  return (
    <div
      className="print-target print-playbook"
      aria-hidden="true"
      data-testid="playbook-print-sheet"
    >
      <p className="print-playbook-kicker">Playbook</p>
      <p className="print-playbook-title">{playbook.name}</p>
      {playbook.description && (
        <p className="print-playbook-description">{playbook.description}</p>
      )}
      <ol className="print-playbook-steps">
        {steps.map((c, i) => (
          <li key={c.id}>
            <span className="print-playbook-number">{i + 1}</span>
            <span>
              <span className="print-playbook-step-title">
                {c.title} <span className="print-playbook-code">{c.id}</span>
              </span>
              <span className="print-playbook-step-summary">{c.summary}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function templateFromUrl(): PlaybookTemplate | null {
  try {
    const id = new URLSearchParams(window.location.search).get("template");
    return PLAYBOOK_TEMPLATES.find((t) => t.id === id) ?? null;
  } catch {
    return null;
  }
}

export default function Playbooks() {
  const { playbooks, createPlaybook, updatePlaybook, deletePlaybook } =
    usePlaybooks();
  const [, setLocation] = useLocation();

  // A search result for a template links here as /playbooks?template=<id>:
  // open the editor with that template loaded, as tapping it would.
  const [linked] = useState(templateFromUrl);
  const [isEditing, setIsEditing] = useState(linked !== null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState(linked?.name ?? "");
  const [description, setDescription] = useState(linked?.description ?? "");
  const [selectedCards, setSelectedCards] = useState<string[]>(
    linked?.cardIds ?? [],
  );
  const [pickerQuery, setPickerQuery] = useState("");
  const [deletingPlaybook, setDeletingPlaybook] = useState<Playbook | null>(
    null,
  );

  const [printing, setPrinting] = useState<Playbook | null>(null);

  // Print once the sheet is on the page, and take it away afterwards so an
  // ordinary browser print of this screen is not replaced by it.
  useEffect(() => {
    if (!printing) return;
    const done = () => setPrinting(null);
    window.addEventListener("afterprint", done);
    window.print();
    return () => window.removeEventListener("afterprint", done);
  }, [printing]);

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

  const handleMoveCard = (index: number, delta: -1 | 1) => {
    // Keep focus on the moved card's control so keyboard and screen reader
    // users can keep reordering; fall back to the other arrow at the ends.
    const moved = selectedCards[index];
    const target = index + delta;
    const atEdge = target === 0 || target === selectedCards.length - 1;
    const dir = atEdge
      ? delta < 0
        ? "later"
        : "earlier"
      : delta < 0
        ? "earlier"
        : "later";
    requestAnimationFrame(() => {
      document
        .querySelector<HTMLButtonElement>(`[data-reorder="${moved}-${dir}"]`)
        ?.focus();
    });
    setSelectedCards((prev) => {
      const next = [...prev];
      const [moved] = next.splice(index, 1);
      next.splice(index + delta, 0, moved);
      return next;
    });
  };

  // Templates load into the editor so they can be adjusted before saving
  const handleUseTemplate = (template: PlaybookTemplate) => {
    handleOpenCreate();
    setName(template.name);
    setDescription(template.description);
    setSelectedCards(template.cardIds);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    // The deleted card's buttons are gone, so hand focus to Create
    requestAnimationFrame(() =>
      document
        .querySelector<HTMLButtonElement>("[data-playbook-create]")
        ?.focus(),
    );
  };

  const handleToggleCardSelection = (cardId: string) => {
    setSelectedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId],
    );
  };

  return (
    <div className="flex flex-col bg-background w-full max-w-2xl mx-auto px-4 md:px-6 pt-4 md:pt-6 pb-6 gap-5">
      <PageIntro
        title="Playbooks"
        description="Chain techniques into a step by step plan for a conversation you can see coming."
        action={
          // The empty state carries its own Create button
          !isEditing &&
          playbooks.length > 0 && (
            <Button
              variant="primary"
              size="sm"
              onClick={handleOpenCreate}
              data-playbook-create
            >
              <Plus className="w-4 h-4" aria-hidden="true" /> Create
            </Button>
          )
        }
      />

      {isEditing ? (
        <div
          className="flex flex-col gap-4 p-4 rounded-2xl border bg-[var(--surface-card)]"
          style={{
            borderColor: "var(--fg-07)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div
            className="flex items-center justify-between border-b pb-3 mb-2"
            style={{ borderColor: "var(--fg-05)" }}
          >
            <h3
              className="font-bold text-[17px]"
              style={{ color: "var(--fg-90)" }}
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
              className={FIELD_LABEL}
              style={{ color: "var(--fg-60)" }}
            >
              Name
            </label>
            <input
              id="playbook-name"
              type="text"
              value={name}
              maxLength={PLAYBOOK_NAME_MAX_LENGTH}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Difficult feedback"
              className={`${FIELD_INPUT} h-12`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="playbook-description"
              className={FIELD_LABEL}
              style={{ color: "var(--fg-60)" }}
            >
              Description
            </label>
            <textarea
              id="playbook-description"
              value={description}
              maxLength={PLAYBOOK_DESCRIPTION_MAX_LENGTH}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief purpose of this playbook…"
              className={`${FIELD_INPUT} py-2.5 min-h-[80px] resize-none`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className={FIELD_LABEL} style={{ color: "var(--fg-60)" }}>
              Techniques ({selectedCards.length} selected)
            </label>
            {/* 107 techniques is too many to scan, so let people narrow it */}
            <input
              type="search"
              value={pickerQuery}
              onChange={(e) => setPickerQuery(e.target.value)}
              placeholder="Filter by name or TC code"
              aria-label="Filter techniques"
              className={`${FIELD_INPUT} h-12`}
            />
            <div
              className="max-h-[300px] overflow-y-auto rounded-xl p-2 flex flex-col gap-1 border"
              style={{
                background: "var(--fg-03)",
                borderColor: "var(--fg-05)",
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {Object.entries(LIBRARY_CATEGORIES).map(([category, cards]) => {
                const q = pickerQuery.trim().toLowerCase();
                const matches = cards.filter(
                  (card) =>
                    !q ||
                    card.id.toLowerCase().includes(q) ||
                    card.title.toLowerCase().includes(q),
                );
                if (matches.length === 0) return null;
                return (
                  <div key={category} className="flex flex-col gap-1.5">
                    <p
                      className="flex items-center gap-2 px-3 pt-2 text-[13px] font-bold"
                      style={{ color: "var(--fg-70)" }}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ background: categoryStyleFor(category).color }}
                        aria-hidden="true"
                      />
                      {categoryStyleFor(category).label}
                    </p>
                    {matches.map((card) => {
                      const isSel = selectedCards.includes(card.id);
                      return (
                        <button
                          key={card.id}
                          onClick={() => handleToggleCardSelection(card.id)}
                          aria-pressed={isSel}
                          className="flex items-center justify-between gap-2 text-left px-3 py-2 rounded-lg text-[15px] transition-colors"
                          style={{
                            minHeight: 44,
                            background: isSel
                              ? "color-mix(in srgb, var(--brand) 8%, transparent)"
                              : "transparent",
                          }}
                        >
                          <div>
                            <span
                              className="font-medium"
                              style={{
                                color: isSel ? "var(--fg-90)" : "var(--fg-70)",
                              }}
                            >
                              {card.title}
                            </span>
                            <span
                              className="text-[12px] font-semibold ml-2"
                              style={{ color: "var(--fg-55)" }}
                            >
                              {card.id}
                            </span>
                          </div>
                          <div
                            className="w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border transition-colors"
                            style={{
                              borderColor: isSel
                                ? "var(--brand)"
                                : "var(--fg-20)",
                              background: isSel
                                ? "var(--brand)"
                                : "transparent",
                            }}
                          >
                            {isSel && (
                              <Check
                                className="w-3.5 h-3.5 stroke-[3px]"
                                style={{ color: "var(--brand-contrast)" }}
                              />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Playbooks are sequences, so let people set the running order */}
          {selectedCards.length > 1 && (
            <ol className="flex flex-col gap-1" aria-label="Playbook order">
              {selectedCards.map((id, i) => {
                const title = CARD_MAP[id]?.title ?? id;
                return (
                  <li
                    key={id}
                    className="flex items-center gap-2 text-[15px] rounded-xl pl-3 pr-1 min-h-11"
                    style={{ background: "var(--fg-05)" }}
                  >
                    <span
                      className="w-5 tabular-nums font-bold"
                      style={{ color: "var(--brand-text)" }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="flex-1 min-w-0 truncate"
                      style={{ color: "var(--fg-80)" }}
                    >
                      {title}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleMoveCard(i, -1)}
                      disabled={i === 0}
                      aria-label={`Move ${title} earlier`}
                      data-reorder={`${id}-earlier`}
                      className="w-11 h-11 flex items-center justify-center rounded-full disabled:opacity-30"
                      style={{ color: "var(--fg-70)" }}
                    >
                      <ArrowUp className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMoveCard(i, 1)}
                      disabled={i === selectedCards.length - 1}
                      aria-label={`Move ${title} later`}
                      data-reorder={`${id}-later`}
                      className="w-11 h-11 flex items-center justify-center rounded-full disabled:opacity-30"
                      style={{ color: "var(--fg-70)" }}
                    >
                      <ArrowDown className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ol>
          )}

          <Button
            variant="primary"
            className="w-full mt-2"
            onClick={handleSave}
            disabled={!name.trim()}
          >
            Save playbook
          </Button>
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
                style={{ color: "var(--fg-45)" }}
                aria-hidden="true"
              />
              <div>
                <p
                  className="font-bold text-[17px]"
                  style={{ color: "var(--fg-90)" }}
                >
                  No playbooks yet
                </p>
                <p
                  className="text-[15px] leading-snug max-w-[300px] mx-auto mt-1"
                  style={{ color: "var(--fg-60)" }}
                >
                  Build your own sequence of cards, or start from one of the
                  templates below.
                </p>
              </div>
              <Button
                variant="primary"
                size="sm"
                className="mt-2"
                onClick={handleOpenCreate}
              >
                Create playbook
              </Button>
            </div>
          ) : (
            playbooks.map((pb) => {
              const steps = pb.cardIds.filter((cid) => CARD_MAP[cid]);
              return (
                <article
                  key={pb.id}
                  aria-label={pb.name}
                  data-testid="playbook-card"
                  className="rounded-2xl border flex flex-col bg-[var(--surface-card)] overflow-hidden"
                  style={{
                    borderColor: "var(--fg-07)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="px-4 pt-4 pb-3">
                    <h2
                      className="font-bold text-[18px] leading-snug"
                      style={{ color: "var(--fg-90)" }}
                    >
                      {pb.name}
                    </h2>
                    {pb.description && (
                      <p
                        className="text-[15px] leading-snug mt-1"
                        style={{ color: "var(--fg-60)" }}
                      >
                        {pb.description}
                      </p>
                    )}
                    <p
                      className="text-[13px] font-semibold mt-1.5"
                      style={{ color: "var(--fg-55)" }}
                    >
                      {steps.length} {steps.length === 1 ? "step" : "steps"}
                    </p>
                  </div>

                  {steps.length > 0 && (
                    <ol style={{ borderTop: "1px solid var(--fg-07)" }}>
                      {steps.map((cid, i) => {
                        const c = CARD_MAP[cid];
                        return (
                          <li
                            key={cid}
                            style={
                              i > 0
                                ? { borderTop: "1px solid var(--fg-07)" }
                                : undefined
                            }
                          >
                            <button
                              onClick={() => setLocation(`/card/${cid}`)}
                              className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-[var(--surface-card-hover)] active:bg-[var(--fg-05)]"
                              style={{ minHeight: 56 }}
                            >
                              <span
                                className="w-8 h-8 rounded-[10px] flex items-center justify-center text-[15px] font-bold flex-shrink-0 tabular-nums"
                                style={{
                                  background: `color-mix(in srgb, ${CARD_COLOR[cid]} 16%, transparent)`,
                                  color: "var(--fg-90)",
                                  boxShadow: `inset 0 0 0 1.5px ${CARD_COLOR[cid]}`,
                                }}
                                aria-hidden="true"
                              >
                                {i + 1}
                              </span>
                              <span className="flex-1 min-w-0">
                                <span
                                  className="block text-[16px] font-semibold leading-snug"
                                  style={{ color: "var(--fg-90)" }}
                                >
                                  {c.title}
                                </span>
                                <span
                                  className="block text-[14px] leading-snug mt-0.5"
                                  style={{ color: "var(--fg-60)" }}
                                >
                                  {c.summary}
                                </span>
                              </span>
                              <ChevronRight
                                className="w-4 h-4 flex-shrink-0"
                                style={{ color: "var(--fg-55)" }}
                                aria-hidden="true"
                              />
                            </button>
                          </li>
                        );
                      })}
                    </ol>
                  )}

                  <div
                    className="flex items-center gap-2 px-3 py-2"
                    style={{ borderTop: "1px solid var(--fg-07)" }}
                    data-print-hide
                  >
                    <Button
                      variant="quiet"
                      size="sm"
                      className="px-3"
                      onClick={() => setPrinting(pb)}
                      aria-label={`Print ${pb.name}`}
                      data-testid="playbook-print"
                    >
                      <Printer className="w-4 h-4" aria-hidden="true" />
                      Print
                    </Button>
                    <Button
                      variant="quiet"
                      size="sm"
                      className="px-3"
                      onClick={() => handleOpenEdit(pb)}
                      aria-label="Edit playbook"
                    >
                      <Edit2 className="w-4 h-4" aria-hidden="true" />
                      Edit
                    </Button>
                    <button
                      onClick={() => handleDelete(pb)}
                      aria-label="Delete playbook"
                      className="ml-auto flex items-center justify-center rounded-xl transition-colors hover:bg-[var(--fg-05)] active:scale-95"
                      style={{ width: 44, height: 44 }}
                    >
                      <Trash2
                        className="w-[18px] h-[18px]"
                        style={{ color: "var(--fg-60)" }}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              );
            })
          )}
          <PlaybookTemplateList onUse={handleUseTemplate} />
        </div>
      )}

      {printing &&
        createPortal(<PlaybookPrintSheet playbook={printing} />, document.body)}

      {deletingPlaybook && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{
            zIndex: "var(--z-modal)" as unknown as number,
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          role="presentation"
          onClick={(e) => {
            // Only a click on the backdrop itself dismisses the dialog.
            if (e.target === e.currentTarget) setDeletingPlaybook(null);
          }}
        >
          <div
            ref={deleteModalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-desc"
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
                  className="font-bold text-[17px] leading-tight"
                  style={{ color: "var(--fg-90)" }}
                >
                  Delete playbook?
                </h3>
                <p
                  id="delete-dialog-desc"
                  className="text-[15px] leading-snug"
                  style={{ color: "var(--fg-60)" }}
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
                className="px-4 py-2 rounded-xl text-[15px] font-semibold transition-all active:scale-95"
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
                className="px-4 py-2 rounded-xl text-[15px] font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-sm active:scale-95"
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

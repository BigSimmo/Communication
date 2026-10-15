import { useEffect, useId, useRef } from "react";
import type { RefObject } from "react";
import { createPortal } from "react-dom";
import { Check, X } from "lucide-react";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";

export interface SheetOption {
  value: string | null;
  label: string;
}

export interface SheetGroup {
  /** Heading shown above the chips, e.g. "Category" */
  label: string;
  /** Prefix for chip test ids, e.g. "sheet-category" */
  testId: string;
  options: SheetOption[];
  value: string | null;
  onChange: (value: string | null) => void;
}

interface LibraryFilterSheetProps {
  open: boolean;
  onClose: () => void;
  groups: SheetGroup[];
  resultCount: number;
  /** Number of active choices inside the sheet; Clear all is disabled at 0 */
  activeCount: number;
  onClearAll: () => void;
  id?: string;
  /** Focus target when the sheet closes; defaults to whatever opened it */
  returnFocusRef?: RefObject<HTMLElement | null>;
}

const slugify = (value: string | null) =>
  (value ?? "all").toLowerCase().replace(/[\s/]+/g, "-");

/**
 * Phone filter sheet for the Library: every filter and the sort order as
 * chip groups, so narrow screens don't squeeze four dropdowns into one line.
 * Modal: focus is trapped inside, the page behind doesn't scroll, and
 * Escape, the backdrop or the close button dismiss it.
 */
export function LibraryFilterSheet({
  open,
  onClose,
  groups,
  resultCount,
  activeCount,
  onClearAll,
  id,
  returnFocusRef,
}: LibraryFilterSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useFocusTrap(open, sheetRef, { restoreFocus: !returnFocusRef });
  useBodyScrollLock(open);

  // Return focus explicitly when a target is given: the element focused on
  // open may be gone by the time the sheet closes
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      returnFocusRef?.current?.focus();
    }
  }, [open, returnFocusRef]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  const showLabel = `Show ${resultCount} ${resultCount === 1 ? "technique" : "techniques"}`;

  return createPortal(
    <div
      className="fixed inset-0 flex flex-col justify-end"
      style={{ zIndex: "var(--z-modal)" as unknown as number }}
    >
      <div
        aria-hidden="true"
        data-testid="library-filter-sheet-backdrop"
        onClick={onClose}
        className="absolute inset-0 animate-in fade-in duration-200 motion-reduce:animate-none"
        style={{ background: "rgba(0,0,0,0.5)" }}
      />
      <div
        ref={sheetRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-testid="library-filter-sheet"
        className="relative mx-auto flex w-full max-w-lg flex-col rounded-t-2xl motion-safe:animate-[pdf-sheet-up_260ms_ease_both]"
        style={{
          maxHeight: "85dvh",
          background: "var(--surface-dd)",
          borderTop: "1px solid var(--fg-09)",
          boxShadow: "0 -10px 32px rgba(0,0,0,0.3)",
          color: "var(--fg-90)",
        }}
      >
        <div
          aria-hidden="true"
          className="mx-auto mt-2 h-1 w-9 flex-shrink-0 rounded-full"
          style={{ background: "var(--fg-15)" }}
        />
        <div className="flex flex-shrink-0 items-center justify-between gap-3 pl-4 pr-1.5 pt-1">
          <h2 id={titleId} className="text-[16px] font-bold leading-tight">
            Filters
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            data-testid="library-filter-sheet-close"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[var(--fg-05)]"
            style={{ color: "var(--fg-60)" }}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-2">
          {groups.map((group) => {
            const headingId = `${titleId}-${group.testId}`;
            return (
              <section key={group.testId} className="pt-3">
                <h3
                  id={headingId}
                  className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "var(--fg-50)" }}
                >
                  {group.label}
                </h3>
                <div
                  role="group"
                  aria-labelledby={headingId}
                  className="flex flex-wrap gap-2"
                >
                  {group.options.map((option) => {
                    const selected = group.value === option.value;
                    return (
                      <button
                        key={option.value ?? "__all__"}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => group.onChange(option.value)}
                        data-testid={`${group.testId}-${slugify(option.value)}`}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-semibold transition-colors"
                        style={{
                          background: selected
                            ? "var(--gradient-active)"
                            : "var(--fg-05)",
                          color: selected
                            ? "var(--brand-contrast)"
                            : "var(--fg-70)",
                          border: selected
                            ? "1px solid transparent"
                            : "1px solid var(--fg-08)",
                        }}
                      >
                        {selected && (
                          <Check
                            className="h-3.5 w-3.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                        )}
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div
          className="flex flex-shrink-0 items-center gap-2 px-4 pt-3"
          style={{
            borderTop: "1px solid var(--fg-07)",
            paddingBottom: "max(12px, env(safe-area-inset-bottom, 0px))",
          }}
        >
          <button
            type="button"
            onClick={onClearAll}
            disabled={activeCount === 0}
            data-testid="library-filter-sheet-clear"
            className="min-h-11 flex-shrink-0 rounded-full px-4 text-[13px] font-semibold transition-opacity disabled:opacity-40"
            style={{
              background: "var(--fg-05)",
              border: "1px solid var(--fg-08)",
              color: "var(--fg-70)",
            }}
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={onClose}
            data-testid="library-filter-sheet-show"
            className="min-h-11 min-w-0 flex-1 truncate rounded-full px-4 text-[14px] font-bold transition-transform active:scale-[0.98]"
            style={{
              background: "var(--gradient-active)",
              color: "var(--brand-contrast)",
            }}
          >
            {showLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

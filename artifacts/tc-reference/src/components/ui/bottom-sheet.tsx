import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { useFocusTrap } from "@/hooks/use-focus-trap";

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  title: string;
  /** Right side of the title row, e.g. a Reset button. Defaults to a Done
      button that closes the sheet, so the sheet always holds a focusable
      control for the focus trap. */
  action?: ReactNode;
  /** Pinned below the scrolling content, above the home indicator. */
  footer?: ReactNode;
  children: ReactNode;
  testId?: string;
}

/**
 * Modal sheet that rises from the bottom edge: Settings, Sort and filter,
 * Share. Focus is trapped inside, the page behind does not scroll, and
 * Escape or the backdrop dismiss it. Content scrolls; the footer stays put
 * and clears the home indicator.
 */
export function BottomSheet({
  open,
  onClose,
  title,
  action,
  footer,
  children,
  testId = "bottom-sheet",
}: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useFocusTrap(open, sheetRef);
  useBodyScrollLock(open);

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

  return createPortal(
    <div
      className="fixed inset-0 flex flex-col justify-end"
      style={{ zIndex: "var(--z-modal)" as unknown as number }}
    >
      <div
        aria-hidden="true"
        data-testid={`${testId}-backdrop`}
        onClick={onClose}
        className="absolute inset-0 animate-in fade-in duration-200 motion-reduce:animate-none"
        style={{ background: "rgba(0,0,0,0.5)" }}
      />
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-testid={testId}
        className="relative flex flex-col rounded-t-[28px] animate-in slide-in-from-bottom duration-200 motion-reduce:animate-none"
        style={{
          background: "var(--surface-dd)",
          borderTop: "1px solid var(--fg-15)",
          maxHeight: "calc(100dvh - env(safe-area-inset-top, 0px) - 12px)",
        }}
      >
        <div
          aria-hidden="true"
          className="mx-auto mt-2 h-[5px] w-9 rounded-full flex-none"
          style={{ background: "var(--fg-15)" }}
        />
        <div className="flex items-center justify-between h-[52px] pl-5 pr-2 flex-none">
          <h2
            id={titleId}
            className="text-[22px] font-bold tracking-[-0.01em]"
            style={{ color: "var(--fg-90)" }}
          >
            {title}
          </h2>
          {action ?? (
            <button
              type="button"
              onClick={onClose}
              className="h-11 px-3 text-[17px] font-bold"
              style={{ color: "var(--brand-text)" }}
            >
              Done
            </button>
          )}
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pb-4">
          {children}
        </div>
        <div
          className="flex-none px-5 pt-3"
          style={{
            paddingBottom: "max(16px, env(safe-area-inset-bottom, 0px))",
          }}
        >
          {footer}
        </div>
      </div>
    </div>,
    document.body,
  );
}

import { useEffect } from "react";
import type { RefObject } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface FocusTrapOptions {
  /** Element to focus when the trap activates; defaults to the first focusable element. */
  initialFocusRef?: RefObject<HTMLElement | null>;
  /** Restore focus to the previously focused element when the trap deactivates. Default true. */
  restoreFocus?: boolean;
}

/**
 * Traps Tab / Shift+Tab focus inside `containerRef` while `active` is true.
 * On activation, moves focus into the container (next frame, so freshly
 * mounted content is focusable); on deactivation, optionally restores focus
 * to the element that was focused before the trap opened.
 */
export function useFocusTrap(
  active: boolean,
  containerRef: RefObject<HTMLElement | null>,
  options?: FocusTrapOptions,
) {
  const initialFocusRef = options?.initialFocusRef;
  const restoreFocus = options?.restoreFocus ?? true;

  useEffect(() => {
    if (!active) return;
    if (!containerRef.current) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Read the ref lazily on every use: the trapped container may be swapped
    // for a different element while the trap stays active (e.g. the FAB menu
    // switching between stack and fan layouts).
    const getFocusable = () => {
      const container = containerRef.current;
      if (!container) return [];
      return Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => el.tabIndex !== -1);
    };

    const frame = requestAnimationFrame(() => {
      const target = initialFocusRef?.current ?? getFocusable()[0];
      target?.focus();
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const container = containerRef.current;
      if (!container) return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;
      const inside = current instanceof Node && container.contains(current);
      if (e.shiftKey) {
        if (!inside || current === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (!inside || current === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown, true);
      if (restoreFocus) previouslyFocused?.focus?.();
    };
    // Refs are stable; only the open/closed state should re-run the trap.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
}

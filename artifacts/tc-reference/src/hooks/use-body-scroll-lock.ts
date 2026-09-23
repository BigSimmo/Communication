import { useEffect } from "react";

let lockCount = 0;
let savedOverflow = "";

/**
 * Stops the page behind an overlay from scrolling while `active` is true.
 *
 * Uses `overflow: hidden` on <html> (respected by iOS Safari 16+) rather than
 * the position:fixed trick, so it never fights route changes that scroll to
 * top while an overlay is closing. Ref-counted so stacked overlays (e.g. the
 * PDF sheet opened over search) release the lock only when the last closes.
 */
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const root = document.documentElement;
    if (lockCount === 0) {
      savedOverflow = root.style.overflow;
      root.style.overflow = "hidden";
    }
    lockCount += 1;
    return () => {
      lockCount -= 1;
      if (lockCount === 0) root.style.overflow = savedOverflow;
    };
  }, [active]);
}

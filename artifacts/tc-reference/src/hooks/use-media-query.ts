import { useSyncExternalStore } from "react";

/**
 * Whether a CSS media query matches right now, kept up to date as the
 * window changes. False where matchMedia is missing (tests, old webviews).
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia?.(query);
      mql?.addEventListener?.("change", onChange);
      return () => mql?.removeEventListener?.("change", onChange);
    },
    () => window.matchMedia?.(query)?.matches ?? false,
    () => false,
  );
}

import { useEffect, useRef } from "react";

/**
 * Calls `onChange` when another tab or window changes one of `keys` in
 * localStorage (or clears storage). The browser fires `storage` events only
 * in the *other* documents, so this keeps each tab's in-memory copy fresh and
 * stops the last tab to write from silently overwriting the other's changes.
 */
export function useStorageSync(
  keys: readonly string[],
  onChange: () => void,
): void {
  const handlerRef = useRef(onChange);
  useEffect(() => {
    handlerRef.current = onChange;
  });
  const keyList = keys.join("\u0000");

  useEffect(() => {
    const watched = new Set(keyList.split("\u0000"));
    const handle = (e: StorageEvent) => {
      if (e.storageArea && e.storageArea !== window.localStorage) return;
      if (e.key === null || watched.has(e.key)) handlerRef.current();
    };
    window.addEventListener("storage", handle);
    return () => window.removeEventListener("storage", handle);
  }, [keyList]);
}

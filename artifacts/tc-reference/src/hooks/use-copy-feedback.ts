import { useCallback, useEffect, useRef, useState } from "react";
import { copyToClipboard } from "@/lib/utils";

/**
 * Copy-to-clipboard with transient "copied" feedback, shared by every phrase
 * list. Re-copying restarts the timer, and a newer copy's feedback is never
 * cleared by an older copy's timeout; the pending timer is cancelled on
 * unmount so no state update fires after the component is gone.
 */
export function useCopyFeedback(resetAfterMs = 1600) {
  const [copied, setCopied] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const copy = useCallback(
    async (text: string) => {
      await copyToClipboard(text);
      setCopied(text);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(null), resetAfterMs);
    },
    [resetAfterMs],
  );

  /** Clear feedback immediately (e.g. when an overlay closes). */
  const reset = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCopied(null);
  }, []);

  return { copied, copy, reset };
}

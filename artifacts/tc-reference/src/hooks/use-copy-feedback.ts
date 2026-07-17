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
  // Generation counter: a copy only applies its feedback if no reset, newer
  // copy, or unmount happened while its (async) clipboard write was pending.
  const requestRef = useRef(0);

  useEffect(
    () => () => {
      requestRef.current += 1;
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  const copy = useCallback(
    async (text: string) => {
      const request = ++requestRef.current;
      const succeeded = await copyToClipboard(text);
      if (!succeeded || request !== requestRef.current) return;
      setCopied(text);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(null), resetAfterMs);
    },
    [resetAfterMs],
  );

  /** Clear feedback immediately (e.g. when an overlay closes). */
  const reset = useCallback(() => {
    requestRef.current += 1;
    if (timerRef.current) clearTimeout(timerRef.current);
    setCopied(null);
  }, []);

  return { copied, copy, reset };
}

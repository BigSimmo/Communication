import { useEffect, useRef, useState } from "react";
import { CloudDownload, CircleCheck } from "lucide-react";
import {
  offlineCardsStatus,
  offlineCardsSupported,
  saveAllCards,
  writeOfflineCardsPref,
  type OfflineCardsStatus,
} from "@/lib/offline-cards";

type Phase = "idle" | "saving" | "done" | "error";

const buttonClass =
  "inline-flex items-center justify-center gap-2 text-[13px] font-semibold px-5 min-h-11 rounded-full transition-all active:scale-95 disabled:opacity-60 disabled:active:scale-100";

/** Lets the user save every card for offline use on this device. */
export function OfflineCardsSection() {
  const [supported] = useState(offlineCardsSupported);
  const [status, setStatus] = useState<OfflineCardsStatus | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (supported && navigator.onLine) {
      offlineCardsStatus()
        .then((next) => {
          if (mounted.current) setStatus(next);
        })
        .catch(() => {});
    }
    return () => {
      mounted.current = false;
    };
  }, [supported]);

  const allSaved =
    status !== null && status.total > 0 && status.saved >= status.total;

  const handleSave = async () => {
    setPhase("saving");
    writeOfflineCardsPref(true);
    // Ask the browser not to clear the cache under storage pressure.
    void navigator.storage?.persist?.().catch(() => false);
    try {
      const result = await saveAllCards((next) => {
        if (mounted.current) setStatus(next);
      });
      if (!mounted.current) return;
      setStatus(result);
      setPhase(result.saved >= result.total ? "done" : "error");
    } catch {
      if (mounted.current) setPhase("error");
    }
  };

  let message: string;
  if (!supported) {
    message = "This browser can't save cards for offline use.";
  } else if (phase === "saving" && status) {
    message = `Saving ${status.saved} of ${status.total} cards…`;
  } else if (phase === "saving") {
    message = "Saving cards…";
  } else if (phase === "error") {
    message = status
      ? `Saved ${status.saved} of ${status.total} cards. Check your connection and try again.`
      : "Couldn't reach the server. Check your connection and try again.";
  } else if (allSaved) {
    message = `All ${status.total} cards are saved on this device. New cards are saved automatically after updates.`;
  } else {
    message =
      "Cards you've opened already work offline. Save the rest (about 4 MB) to use any card without a connection. PDFs and other downloads still save when you open them.";
  }

  return (
    <section
      aria-labelledby="offline-cards-heading"
      className="rounded-2xl p-5 mb-4"
      style={{
        background: "var(--fg-02)",
        border: "1px solid var(--fg-06)",
      }}
      data-testid="offline-cards-section"
    >
      <h2
        id="offline-cards-heading"
        className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-2"
        style={{ color: "var(--fg-55)" }}
      >
        Offline cards
      </h2>
      <p
        className="text-[13px] leading-relaxed mb-4"
        style={{ color: "var(--fg-55)" }}
        role="status"
        aria-live="polite"
        data-testid="offline-cards-message"
      >
        {message}
      </p>
      {supported && (
        <button
          type="button"
          onClick={handleSave}
          disabled={phase === "saving" || (allSaved && phase !== "error")}
          className={buttonClass}
          style={{
            background: "color-mix(in srgb, var(--brand) 12%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--brand) 25%, transparent)",
            color: "var(--brand-text)",
          }}
          data-testid="offline-cards-save"
        >
          {allSaved && phase !== "error" ? (
            <CircleCheck className="w-4 h-4" aria-hidden="true" />
          ) : (
            <CloudDownload className="w-4 h-4" aria-hidden="true" />
          )}
          {allSaved && phase !== "error"
            ? "All cards saved"
            : phase === "error"
              ? "Try again"
              : "Save all cards for offline"}
        </button>
      )}
    </section>
  );
}

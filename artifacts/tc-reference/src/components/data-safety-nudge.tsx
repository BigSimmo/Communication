import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Share, ShieldCheck, X } from "lucide-react";
import { useUpdateAvailable } from "@/lib/sw-update";
import { saveBackup } from "@/lib/backup";
import {
  hasUserData,
  isBackupReminderDue,
  loadDataSafety,
  recordVisit,
  requestPersistentStorage,
  shouldShowInstallHint,
  updateDataSafety,
} from "@/lib/data-safety";

type Nudge = "install" | "backup" | null;

/** Wait a moment after arriving so nothing pops up over the first look. */
export const NUDGE_DELAY_MS = 4000;

// Only on screens without a bottom dock, so the card never covers one.
const NUDGE_ROUTES = new Set(["/", "/favourites"]);

// One card per session at most, even across reloads and route changes.
const SHOWN_FLAG = "tc_data_safety_nudge_shown";

function shownThisSession(): boolean {
  try {
    return sessionStorage.getItem(SHOWN_FLAG) === "1";
  } catch {
    return false;
  }
}

function pickNudge(): Nudge {
  if (shownThisSession()) return null;
  const state = loadDataSafety();
  const hasData = hasUserData();
  if (shouldShowInstallHint(state, hasData)) return "install";
  if (isBackupReminderDue(state, hasData)) return "backup";
  return null;
}

/**
 * One calm card at a time about keeping saved progress safe: the Add to Home
 * Screen hint on iPhone/iPad Safari, or a backup reminder after a month
 * without one. Shown at most once per session and always dismissible.
 */
export function DataSafetyNudge() {
  const [location] = useLocation();
  const updateAvailable = useUpdateAvailable();
  const [nudge, setNudge] = useState<Nudge>(null);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    recordVisit();
    void requestPersistentStorage();
  }, []);

  const eligibleRoute = NUDGE_ROUTES.has(location);

  useEffect(() => {
    if (closed || nudge || !eligibleRoute) return;
    const timer = window.setTimeout(() => {
      const next = pickNudge();
      if (next) {
        try {
          sessionStorage.setItem(SHOWN_FLAG, "1");
        } catch {}
      }
      setNudge(next);
    }, NUDGE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [closed, nudge, eligibleRoute]);

  if (!nudge || closed || updateAvailable || !eligibleRoute) return null;

  const dismiss = () => {
    if (nudge === "install") updateDataSafety({ installHintDismissed: true });
    else updateDataSafety({ backupReminderDismissedAt: Date.now() });
    setClosed(true);
  };

  const isInstall = nudge === "install";
  const titleId = "data-safety-nudge-title";

  return (
    <div
      role="region"
      aria-labelledby={titleId}
      data-testid="data-safety-nudge"
      data-nudge={nudge}
      className="data-safety-nudge fixed md:w-[380px] z-50 rounded-2xl p-4 animate-in fade-in slide-in-from-bottom-2 duration-300 motion-reduce:animate-none"
      style={{
        background: "var(--surface-dd)",
        border: "1px solid var(--fg-15)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        color: "var(--fg-90)",
      }}
    >
      <div className="flex items-start gap-3">
        <ShieldCheck
          aria-hidden="true"
          className="w-5 h-5 mt-0.5 flex-shrink-0"
          style={{ color: "var(--brand-text)" }}
        />
        <div className="flex-1 min-w-0">
          <h2 id={titleId} className="text-[15px] font-semibold leading-snug">
            {isInstall ? "Keep your progress safe" : "Time for a backup?"}
          </h2>
          {isInstall ? (
            <>
              <p
                className="mt-1 text-[14px] leading-relaxed"
                style={{ color: "var(--fg-70)" }}
              >
                Safari can clear saved items from sites you haven't opened for a
                while. Add TC Reference to your Home Screen to keep them, and it
                works offline too.
              </p>
              <p
                className="mt-2 text-[14px] leading-relaxed"
                style={{ color: "var(--fg-80)" }}
              >
                Tap{" "}
                <Share
                  aria-label="Share"
                  className="inline w-4 h-4 -mt-0.5"
                  style={{ color: "var(--brand-text)" }}
                />{" "}
                Share, then <strong>Add to Home Screen</strong>.
              </p>
            </>
          ) : (
            <p
              className="mt-1 text-[14px] leading-relaxed"
              style={{ color: "var(--fg-70)" }}
            >
              Your saved items and progress live only on this device. A backup
              file keeps a copy safe if anything happens to it.
            </p>
          )}
          <div className="mt-3 flex gap-2">
            {isInstall ? (
              <button
                type="button"
                onClick={dismiss}
                className="min-h-[44px] px-4 text-sm font-semibold rounded-lg"
                style={{ background: "var(--fg-08)", color: "var(--fg-90)" }}
              >
                Got it
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={async () => {
                    // Closing the share sheet keeps the reminder up.
                    if ((await saveBackup()) === "saved") setClosed(true);
                  }}
                  className="min-h-[44px] px-4 text-sm font-semibold rounded-lg"
                  style={{
                    background: "var(--gradient-active)",
                    color: "#0f1724",
                  }}
                >
                  Back up now
                </button>
                <button
                  type="button"
                  onClick={dismiss}
                  className="min-h-[44px] px-4 text-sm rounded-lg"
                  style={{ color: "var(--fg-65)" }}
                >
                  Not now
                </button>
              </>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="-mr-2 -mt-2 w-11 h-11 flex items-center justify-center rounded-lg flex-shrink-0"
          style={{ color: "var(--fg-55)" }}
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

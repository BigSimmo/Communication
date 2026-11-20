import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Check, ChevronRight, CloudOff, Download } from "lucide-react";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { AppearanceSection } from "@/components/appearance-section";
import { BackupSection } from "@/components/backup-section";
import { OfflineCardsSection } from "@/components/offline-cards-section";
import { categoryStyleFor } from "@/lib/design-tokens";
import { loadDrillState } from "@/lib/drill-state";
import type { DrillPace, DrillTrack } from "@/lib/drill-state";

export function trackLabel(track: DrillTrack): string {
  switch (track.kind) {
    case "core":
      return "Start here";
    case "category":
      return categoryStyleFor(track.category).label;
    case "playbook":
      return "A playbook";
    default:
      return "Everything";
  }
}

export function paceLabel(pace: DrillPace): string {
  if (pace === 1) return "A day each";
  if (pace === 3) return "Three days each";
  return "A week each";
}

/** True when the app runs from the Home Screen rather than in a Safari tab. */
function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  const nav = navigator as Navigator & { standalone?: boolean };
  return (
    nav.standalone === true ||
    window.matchMedia?.("(display-mode: standalone)").matches === true
  );
}

/** Whether the offline worker controls this page, and whether we are online. */
function useOfflineStatus() {
  const read = () => ({
    ready:
      typeof navigator !== "undefined" &&
      Boolean(navigator.serviceWorker?.controller),
    online: typeof navigator === "undefined" ? true : navigator.onLine,
  });
  const [status, setStatus] = useState(read);
  useEffect(() => {
    const refresh = () => setStatus(read());
    window.addEventListener("online", refresh);
    window.addEventListener("offline", refresh);
    navigator.serviceWorker?.addEventListener?.("controllerchange", refresh);
    return () => {
      window.removeEventListener("online", refresh);
      window.removeEventListener("offline", refresh);
      navigator.serviceWorker?.removeEventListener?.(
        "controllerchange",
        refresh,
      );
    };
  }, []);
  return status;
}

function PracticeSection({ onNavigate }: { onNavigate: () => void }) {
  // Read on open; the sheet unmounts when closed, so it is never stale.
  const [drill] = useState(loadDrillState);
  return (
    <section aria-labelledby="practice-heading" className="flex flex-col gap-2">
      <h3 id="practice-heading" className="settings-eyebrow">
        Practice
      </h3>
      <div className="settings-card">
        <Link
          href="/drill"
          onClick={onNavigate}
          className="settings-row"
          data-testid="setting-drill-track"
        >
          <span className="flex-1 min-w-0 flex flex-col gap-0.5">
            <span className="settings-row-title">Drill track</span>
            <span className="settings-row-meta">
              {trackLabel(drill.track)} · {paceLabel(drill.pace)}
            </span>
          </span>
          <span className="sr-only">Change on the Drill tab</span>
          <ChevronRight
            className="w-4 h-4 flex-none"
            style={{ color: "var(--fg-55)" }}
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}

function DeviceSection() {
  const { ready, online } = useOfflineStatus();
  const [standalone] = useState(isStandalone);
  const [showHomeHelp, setShowHomeHelp] = useState(false);

  return (
    <section aria-labelledby="device-heading" className="flex flex-col gap-2">
      <h3 id="device-heading" className="settings-eyebrow">
        This device
      </h3>
      <div className="settings-card">
        <div className="settings-row" data-testid="setting-offline">
          {ready ? (
            <Check
              className="w-5 h-5 flex-none"
              style={{ color: "var(--cat-resilience)" }}
              aria-hidden="true"
            />
          ) : (
            <CloudOff
              className="w-5 h-5 flex-none"
              style={{ color: "var(--fg-55)" }}
              aria-hidden="true"
            />
          )}
          <span className="flex-1 min-w-0 flex flex-col gap-0.5">
            <span className="settings-row-title">
              {ready ? "Available offline" : "Not saved for offline yet"}
            </span>
            <span className="settings-row-meta">
              {ready
                ? online
                  ? "The app and every technique you've opened work without a connection"
                  : "You're offline. Techniques you've opened still work"
                : "Open the app once with a connection and it saves itself"}
            </span>
          </span>
        </div>
        <OfflineCardsSection />
        {standalone ? (
          <div className="settings-row">
            <Download
              className="w-5 h-5 flex-none"
              style={{ color: "var(--fg-55)" }}
              aria-hidden="true"
            />
            <span className="flex-1 min-w-0 flex flex-col gap-0.5">
              <span className="settings-row-title">On your Home Screen</span>
              <span className="settings-row-meta">
                Opens full screen, like an app
              </span>
            </span>
          </div>
        ) : (
          <>
            <button
              type="button"
              className="settings-row w-full text-left"
              aria-expanded={showHomeHelp}
              aria-controls="home-screen-help"
              onClick={() => setShowHomeHelp((v) => !v)}
              data-testid="setting-home-screen"
            >
              <span className="flex-1 min-w-0 flex flex-col gap-0.5">
                <span className="settings-row-title">Add to Home Screen</span>
                <span className="settings-row-meta">
                  Opens full screen, like an app
                </span>
              </span>
              <ChevronRight
                className="w-4 h-4 flex-none transition-transform motion-reduce:transition-none"
                style={{
                  color: "var(--fg-55)",
                  transform: showHomeHelp ? "rotate(90deg)" : undefined,
                }}
                aria-hidden="true"
              />
            </button>
            {showHomeHelp && (
              <ol
                id="home-screen-help"
                className="list-decimal pl-9 pr-4 pb-4 flex flex-col gap-1.5 text-[15px] leading-snug"
                style={{ color: "var(--fg-80)" }}
              >
                <li>Open this page in Safari.</li>
                <li>Tap the Share button at the bottom of the screen.</li>
                <li>Choose Add to Home Screen, then Add.</li>
              </ol>
            )}
          </>
        )}
      </div>
    </section>
  );
}

/**
 * Every device setting in one sheet: theme and phrase size, drill track,
 * offline and Home Screen status, and backup.
 */
export function SettingsSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      title="Settings"
      testId="settings-sheet"
    >
      <div className="flex flex-col gap-[22px] pt-2">
        <AppearanceSection />
        <PracticeSection onNavigate={onClose} />
        <DeviceSection />
        <BackupSection />
      </div>
    </BottomSheet>
  );
}

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { applyUpdate, useUpdateAvailable } from "@/lib/sw-update";

// Shown when a new build has installed in the background. Reloading is the
// user's choice so an in-progress drill or playbook edit is never cut off.
export function UpdateToast() {
  const available = useUpdateAvailable();
  const [dismissed, setDismissed] = useState(false);
  if (!available || dismissed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      data-testid="update-toast"
      className="fixed left-3 right-3 md:left-auto md:right-6 md:w-[360px] z-50 flex items-center gap-3 rounded-2xl px-4 py-3"
      style={{
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 88px)",
        background: "var(--surface-dd)",
        border: "1px solid var(--fg-15)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
      }}
    >
      <RefreshCw
        aria-hidden="true"
        className="w-4 h-4 flex-shrink-0"
        style={{ color: "var(--brand)" }}
      />
      <p className="flex-1 text-sm">A new version is ready.</p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="min-h-[44px] px-3 text-sm rounded-lg"
        style={{ color: "var(--fg-65)" }}
      >
        Later
      </button>
      <button
        type="button"
        onClick={applyUpdate}
        className="min-h-[44px] px-4 text-sm font-semibold rounded-lg"
        style={{ background: "var(--gradient-active)", color: "#0f1724" }}
      >
        Reload
      </button>
    </div>
  );
}

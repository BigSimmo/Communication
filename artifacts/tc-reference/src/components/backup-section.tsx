import { useRef, useState } from "react";
import { Download, Upload } from "lucide-react";
import {
  BackupError,
  backupFileName,
  exportBackup,
  importBackup,
  parseBackup,
} from "@/lib/backup";

const buttonStyle = {
  background: "color-mix(in srgb, var(--brand) 12%, transparent)",
  border: "1px solid color-mix(in srgb, var(--brand) 25%, transparent)",
  color: "var(--brand-text)",
} as const;

const buttonClass =
  "inline-flex items-center justify-center gap-2 text-[13px] font-semibold px-5 min-h-11 rounded-full transition-all active:scale-95";

function errorMessage(err: unknown): string {
  return err instanceof BackupError
    ? err.message
    : "Something went wrong reading that file.";
}

/** Export and import of every locally stored preference and progress key. */
export function BackupSection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState<{ name: string; text: string } | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const handleExport = () => {
    setError(null);
    const blob = new Blob([JSON.stringify(exportBackup(), null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = backupFileName();
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Revoke on the next tick so the download has started first.
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Reset so choosing the same file again still fires change.
    e.target.value = "";
    if (!file) return;
    setError(null);
    setPending(null);
    try {
      const text = await file.text();
      parseBackup(text); // validate before asking to confirm
      setPending({ name: file.name, text });
    } catch (err) {
      setError(errorMessage(err));
    }
  };

  const confirmImport = () => {
    if (!pending) return;
    try {
      importBackup(pending.text);
    } catch (err) {
      setPending(null);
      setError(errorMessage(err));
      return;
    }
    // Every provider read storage on mount; reload so they all pick it up.
    window.location.reload();
  };

  return (
    <section
      aria-labelledby="backup-heading"
      className="rounded-2xl p-5"
      style={{
        background: "var(--fg-02)",
        border: "1px solid var(--fg-06)",
      }}
    >
      <h2
        id="backup-heading"
        className="text-[11px] font-semibold tracking-widest uppercase mb-2"
        style={{ color: "var(--fg-55)" }}
      >
        Back up your data
      </h2>
      <p
        className="text-[13px] leading-relaxed mb-4"
        style={{ color: "var(--fg-55)" }}
      >
        Your favourites, drill progress, playbooks and settings live only on
        this device. Export a backup file to keep them safe or move them to
        another device.
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleExport}
          className={buttonClass}
          style={buttonStyle}
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          Export
        </button>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={buttonClass}
          style={buttonStyle}
        >
          <Upload className="w-4 h-4" aria-hidden="true" />
          Import
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          tabIndex={-1}
          aria-label="Choose a backup file to import"
          onChange={handleFile}
        />
      </div>

      {pending && (
        <div
          className="mt-4 rounded-xl p-4"
          style={{
            background: "color-mix(in srgb, var(--brand) 6%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--brand) 18%, transparent)",
          }}
        >
          <p
            className="text-[13px] leading-relaxed mb-3"
            style={{ color: "var(--fg-80)" }}
          >
            Importing <strong>{pending.name}</strong> replaces your current
            favourites, drill progress, playbooks and settings on this device.
            This can't be undone.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={confirmImport}
              className={buttonClass}
              style={{
                background: "var(--brand)",
                border: "1px solid var(--brand)",
                color: "var(--brand-contrast)",
              }}
            >
              Replace my data
            </button>
            <button
              type="button"
              onClick={() => setPending(null)}
              className={buttonClass}
              style={{
                background: "transparent",
                border: "1px solid var(--fg-10)",
                color: "var(--fg-75)",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {error && (
        <p
          role="alert"
          className="mt-4 text-[13px] leading-relaxed"
          style={{ color: "hsl(var(--destructive))" }}
        >
          {error}
        </p>
      )}
    </section>
  );
}

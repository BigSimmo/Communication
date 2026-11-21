import { useRef, useState } from "react";
import { Download, RotateCcw, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BackupError,
  checkBackupFileSize,
  importBackup,
  loadRestoreSnapshot,
  parseBackup,
  saveBackup,
  undoRestore,
} from "@/lib/backup";
import {
  hasUserData,
  isBackupReminderDue,
  loadDataSafety,
} from "@/lib/data-safety";

function formatBackupDate(ms: number): string {
  return new Date(ms).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

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
  const [confirmUndo, setConfirmUndo] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Read on mount (the sheet unmounts when closed) and after each export.
  const [safety, setSafety] = useState(() => ({
    state: loadDataSafety(),
    hasData: hasUserData(),
  }));
  const [snapshot] = useState(() => loadRestoreSnapshot());
  const lastBackupAt = safety.state.lastBackupAt;
  const reminderDue = isBackupReminderDue(safety.state, safety.hasData);

  const handleExport = async () => {
    setError(null);
    const outcome = await saveBackup();
    if (outcome === "failed") {
      setError("Couldn't save the backup file. Please try again.");
    }
    setSafety({ state: loadDataSafety(), hasData: hasUserData() });
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Reset so choosing the same file again still fires change.
    e.target.value = "";
    if (!file) return;
    setError(null);
    setPending(null);
    setConfirmUndo(false);
    try {
      checkBackupFileSize(file); // before reading a huge file into memory
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

  const handleUndo = () => {
    try {
      undoRestore();
    } catch (err) {
      setConfirmUndo(false);
      setError(errorMessage(err));
      return;
    }
    window.location.reload();
  };

  return (
    <section
      aria-labelledby="backup-heading"
      className="flex flex-col gap-2"
      data-testid="backup-section"
    >
      <h3 id="backup-heading" className="settings-eyebrow">
        Backup
      </h3>
      <p className="settings-row-meta">
        Saved items, drill progress, playbooks and settings live only on this
        device. Export a backup file to keep them safe or move them to another
        device.
      </p>
      <p
        className="settings-row-meta"
        data-testid="backup-last"
        style={reminderDue ? { color: "var(--fg-80)" } : undefined}
      >
        {lastBackupAt !== null
          ? `Last backup on this device: ${formatBackupDate(lastBackupAt)}.`
          : "No backup exported from this device yet."}
        {reminderDue &&
          (lastBackupAt !== null
            ? " It's been a while, so a fresh one is a good idea."
            : " Exporting one now keeps your progress safe.")}
      </p>
      <div className="flex gap-2.5">
        <Button size="sm" className="flex-1" onClick={handleExport}>
          <Download className="w-4 h-4" aria-hidden="true" />
          Export backup
        </Button>
        <Button
          size="sm"
          className="flex-1"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-4 h-4" aria-hidden="true" />
          Import
        </Button>
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

      {snapshot && !pending && (
        <div className="flex items-center gap-2.5" data-testid="backup-undo">
          <p className="settings-row-meta flex-1">
            Restored a backup on {formatBackupDate(snapshot.savedAt)}. Your data
            from before it is kept for 30 days.
          </p>
          <Button
            size="sm"
            onClick={() => {
              setError(null);
              setConfirmUndo(true);
            }}
            aria-expanded={confirmUndo}
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Undo restore
          </Button>
        </div>
      )}

      {snapshot && confirmUndo && !pending && (
        <div
          className="settings-card p-4"
          role="group"
          aria-label="Confirm undo restore"
        >
          <p
            className="text-[15px] leading-relaxed mb-3"
            style={{ color: "var(--fg-80)" }}
          >
            This puts back your saved items, drill progress, playbooks and
            settings from before the restore on{" "}
            {formatBackupDate(snapshot.savedAt)}. Anything changed since then is
            replaced.
          </p>
          <div className="flex gap-2.5">
            <Button
              size="sm"
              variant="primary"
              className="flex-1"
              onClick={handleUndo}
            >
              Yes, undo
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={() => setConfirmUndo(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {pending && (
        <div
          className="settings-card p-4"
          role="group"
          aria-label="Confirm import"
        >
          <p
            className="text-[15px] leading-relaxed mb-3"
            style={{ color: "var(--fg-80)" }}
          >
            Importing <strong>{pending.name}</strong> replaces your current
            saved items, drill progress, playbooks and settings on this device.
            A copy of your current data is kept, so you can undo this here for
            30 days.
          </p>
          <div className="flex gap-2.5">
            <Button
              size="sm"
              variant="primary"
              className="flex-1"
              onClick={confirmImport}
            >
              Replace my data
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={() => setPending(null)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {error && (
        <p
          role="alert"
          className="text-[15px] leading-relaxed"
          style={{ color: "hsl(var(--destructive))" }}
        >
          {error}
        </p>
      )}
    </section>
  );
}

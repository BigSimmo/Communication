import { useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Copy, Check, Share, Image as ImageIcon, Printer } from "lucide-react";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { useTheme } from "@/lib/theme";
import { categoryStyleFor } from "@/lib/design-tokens";
import { copyToClipboard } from "@/lib/utils";
import {
  cardUrl,
  imageFileName,
  printTarget,
  renderShareImage,
  saveImage,
  shareContent,
  shareText,
} from "@/lib/share";
import type { ShareContent, ShareOutcome } from "@/lib/share";

export interface ShareItem {
  /** The phrase, shown large and shared as the text. */
  text: string;
  /** Technique it comes from. */
  cardId?: string;
  cardTitle?: string;
  /** Library category key, for the dot colour. */
  category?: string;
  /** One quiet line under the phrase, e.g. the phrase group. */
  hint?: string;
}

type Mode = "phrase" | "link";

const IMAGE_COLOURS = {
  dark: { background: "#0f1724", text: "#f1f5f9", muted: "#a8b3c7" },
  light: { background: "#f8fafc", text: "#0f172a", muted: "#475569" },
} as const;

/** Resolve a `var(--x)` token to the hex the canvas can paint with. */
function resolveColour(token: string, fallback: string): string {
  const name = /var\((--[\w-]+)\)/.exec(token)?.[1];
  if (!name || typeof getComputedStyle !== "function") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
}

const STATUS: Record<ShareOutcome, string | null> = {
  shared: null,
  cancelled: null,
  copied: "Copied. You can paste it anywhere.",
  failed: "That didn't work in this browser. Try Copy instead.",
};

function ActionButton({
  label,
  icon,
  onClick,
  testId,
}: {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  testId: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testId}
      className="flex flex-1 flex-col items-center gap-2 min-w-0 py-1 rounded-2xl active:scale-95 transition-transform motion-reduce:transition-none"
    >
      <span
        aria-hidden="true"
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ background: "var(--fg-08)", color: "var(--fg-90)" }}
      >
        {icon}
      </span>
      <span
        className="text-[13px] font-medium"
        style={{ color: "var(--fg-80)" }}
      >
        {label}
      </span>
    </button>
  );
}

/**
 * Share a phrase: copy, the system share sheet (copy where there is none),
 * save as an image, or print a one-phrase card. With a card id, a Link mode
 * shares the technique's address instead.
 */
export function ShareSheet({
  item,
  onClose,
}: {
  item: ShareItem | null;
  onClose: () => void;
}) {
  if (!item) return null;
  // Keyed so each new phrase starts on Phrase mode with no leftover message.
  return (
    <ShareSheetBody
      key={`${item.cardId ?? ""}:${item.text}`}
      item={item}
      onClose={onClose}
    />
  );
}

function ShareSheetBody({
  item,
  onClose,
}: {
  item: ShareItem;
  onClose: () => void;
}) {
  const { theme } = useTheme();
  const [mode, setMode] = useState<Mode>("phrase");
  const [status, setStatus] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const cat = item.category ? categoryStyleFor(item.category) : null;
  const link = item.cardId ? cardUrl(item.cardId) : undefined;
  const content: ShareContent =
    mode === "link" && link
      ? { text: item.cardTitle ?? item.text, url: link }
      : { text: item.text, source: item.cardTitle, url: link };

  const report = (outcome: ShareOutcome) => setStatus(STATUS[outcome]);

  const handleCopy = async () => {
    const ok = await copyToClipboard(shareText(content));
    setCopied(ok);
    setStatus(ok ? "Copied. You can paste it anywhere." : STATUS.failed);
  };

  const handleShare = async () => report(await shareContent(content));

  const handleImage = async () => {
    try {
      const colours = IMAGE_COLOURS[theme];
      const blob = await renderShareImage(
        { text: item.text, source: item.cardTitle },
        {
          ...colours,
          accent: resolveColour(cat?.color ?? "", "#f59e0b"),
        },
      );
      const outcome = await saveImage(blob, imageFileName(item.text));
      setStatus(outcome === "failed" ? STATUS.failed : null);
    } catch {
      setStatus(STATUS.failed);
    }
  };

  const modes: { id: Mode; label: string }[] = [
    { id: "phrase", label: "Phrase" },
    ...(link ? [{ id: "link" as const, label: "Link" }] : []),
  ];

  return (
    <BottomSheet open onClose={onClose} title="Share" testId="share-sheet">
      <div className="flex flex-col gap-[18px] pt-1">
        <div
          className="flex flex-col gap-2.5 rounded-[20px] p-5"
          style={{
            background: "var(--fg-05)",
            border: "1px solid var(--fg-08)",
          }}
          data-testid="share-preview"
        >
          {item.cardTitle && (
            <span className="flex items-center gap-1.5 text-[13px] font-semibold">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full"
                style={{ background: cat?.color ?? "var(--brand)" }}
              />
              <span style={{ color: cat?.color ?? "var(--fg-70)" }}>
                {item.cardTitle}
              </span>
            </span>
          )}
          {mode === "link" && link ? (
            <span
              className="text-[15px] break-all"
              style={{ color: "var(--fg-80)" }}
            >
              {link}
            </span>
          ) : (
            <span
              className="font-serif text-[26px] leading-[1.25]"
              style={{ color: "var(--fg-90)" }}
            >
              &ldquo;{item.text}&rdquo;
            </span>
          )}
          {item.hint && mode === "phrase" && (
            <span className="text-[13px]" style={{ color: "var(--fg-60)" }}>
              {item.hint}
            </span>
          )}
        </div>

        {modes.length > 1 && (
          <div
            role="radiogroup"
            aria-label="What to share"
            className="grid gap-0 rounded-[14px] p-[3px]"
            style={{
              gridTemplateColumns: `repeat(${modes.length}, minmax(0, 1fr))`,
              background: "var(--fg-08)",
            }}
          >
            {modes.map((m) => {
              const selected = m.id === mode;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => {
                    setMode(m.id);
                    setStatus(null);
                    setCopied(false);
                  }}
                  className="h-10 rounded-[11px] text-[15px] font-semibold"
                  style={
                    selected
                      ? {
                          background: "var(--surface-dd)",
                          color: "var(--fg-90)",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                        }
                      : { color: "var(--fg-70)" }
                  }
                >
                  {m.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="flex items-start gap-1">
          <ActionButton
            label={copied ? "Copied" : "Copy"}
            testId="share-copy"
            icon={
              copied ? (
                <Check
                  className="w-5 h-5"
                  style={{ color: "var(--brand-text)" }}
                />
              ) : (
                <Copy className="w-5 h-5" />
              )
            }
            onClick={handleCopy}
          />
          <ActionButton
            label="Share"
            testId="share-native"
            icon={<Share className="w-5 h-5" />}
            onClick={handleShare}
          />
          {mode === "phrase" && (
            <ActionButton
              label="Save image"
              testId="share-image"
              icon={<ImageIcon className="w-5 h-5" />}
              onClick={handleImage}
            />
          )}
          {mode === "phrase" && (
            <ActionButton
              label="Print"
              testId="share-print"
              icon={<Printer className="w-5 h-5" />}
              onClick={() => printTarget()}
            />
          )}
        </div>

        <p
          role="status"
          aria-live="polite"
          className="min-h-5 text-[13px] text-center"
          style={{ color: "var(--fg-70)" }}
        >
          {status}
        </p>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <div className="print-target print-phrase-card" aria-hidden="true">
            {item.cardTitle && (
              <p className="print-phrase-source">{item.cardTitle}</p>
            )}
            <p className="print-phrase-text">&ldquo;{item.text}&rdquo;</p>
            {item.hint && <p className="print-phrase-hint">{item.hint}</p>}
            {link && <p className="print-phrase-link">{link}</p>}
          </div>,
          document.body,
        )}
    </BottomSheet>
  );
}

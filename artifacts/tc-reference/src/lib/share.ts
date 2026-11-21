/**
 * Sharing a phrase or a technique: the iPhone share sheet through the Web
 * Share API where the browser has it, and copying to the clipboard where it
 * does not, so every action ends somewhere useful. No network calls.
 */
import { copyToClipboard } from "./utils";

export interface ShareContent {
  /** What is shared: the phrase itself, or a technique's title. */
  text: string;
  /** Where it comes from, e.g. the technique's title. */
  source?: string;
  /** A link back into the app, when there is a page for it. */
  url?: string;
}

export type ShareOutcome = "shared" | "copied" | "cancelled" | "failed";

/** The app address for a technique card, honouring the deploy base path. */
export function cardUrl(
  cardId: string,
  origin: string = typeof window !== "undefined" ? window.location.origin : "",
  base: string = import.meta.env.BASE_URL,
): string {
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${origin}${prefix}card/${encodeURIComponent(cardId)}`;
}

/** The plain text a copy or share carries: the phrase, then its source and link. */
export function shareText({ text, source, url }: ShareContent): string {
  return [text, source ? `From ${source}` : null, url ?? null]
    .filter(Boolean)
    .join("\n");
}

export function canNativeShare(
  nav: Navigator | undefined = typeof navigator !== "undefined"
    ? navigator
    : undefined,
): boolean {
  return typeof nav?.share === "function";
}

function isAbort(err: unknown): boolean {
  return err instanceof DOMException && err.name === "AbortError";
}

/**
 * Open the system share sheet. Where there is none, or it refuses the data,
 * copy the same text instead. Closing the share sheet is "cancelled", not a
 * failure, and does not fall back to copying.
 */
export async function shareContent(
  content: ShareContent,
  nav: Navigator | undefined = typeof navigator !== "undefined"
    ? navigator
    : undefined,
): Promise<ShareOutcome> {
  if (nav && canNativeShare(nav)) {
    const data: ShareData = {
      title: content.source ?? content.text,
      text: content.url
        ? shareText({ ...content, url: undefined })
        : shareText(content),
      ...(content.url ? { url: content.url } : {}),
    };
    if (!nav.canShare || nav.canShare(data)) {
      try {
        await nav.share(data);
        return "shared";
      } catch (err) {
        if (isAbort(err)) return "cancelled";
        // NotAllowedError and friends: fall through to copying.
      }
    }
  }
  return (await copyToClipboard(shareText(content))) ? "copied" : "failed";
}

/** Break text into lines that fit `maxWidth` under the context's font. */
export function wrapLines(
  measure: (s: string) => number,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (line && measure(next) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

interface ImageColours {
  background: string;
  text: string;
  muted: string;
  accent: string;
}

const IMAGE_WIDTH = 1080;
const IMAGE_PADDING = 96;

/**
 * Draw the phrase as a square-ish card image (1080 wide, height to fit) and
 * return it as PNG. Colours come from the caller so the image matches the
 * theme on screen.
 */
export async function renderShareImage(
  content: ShareContent,
  colours: ImageColours,
  doc: Document = document,
): Promise<Blob> {
  const canvas = doc.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not available");

  const inner = IMAGE_WIDTH - IMAGE_PADDING * 2;
  const phraseFont = `500 64px Georgia, "Times New Roman", serif`;
  const metaFont = `600 34px Inter, system-ui, sans-serif`;

  ctx.font = phraseFont;
  const lines = wrapLines(
    (s) => ctx.measureText(s).width,
    `“${content.text}”`,
    inner,
  );
  const lineHeight = 84;
  const sourceBlock = content.source ? 34 + 48 : 0;
  const height = Math.max(
    IMAGE_WIDTH * 0.75,
    IMAGE_PADDING * 2 + sourceBlock + lines.length * lineHeight,
  );
  canvas.width = IMAGE_WIDTH;
  canvas.height = Math.round(height);

  ctx.fillStyle = colours.background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let y = IMAGE_PADDING;
  if (content.source) {
    ctx.fillStyle = colours.accent;
    ctx.beginPath();
    ctx.arc(IMAGE_PADDING + 9, y + 22, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = metaFont;
    ctx.fillStyle = colours.muted;
    ctx.textBaseline = "top";
    ctx.fillText(content.source, IMAGE_PADDING + 32, y + 4, inner - 32);
    y += sourceBlock;
  }

  ctx.font = phraseFont;
  ctx.fillStyle = colours.text;
  ctx.textBaseline = "top";
  for (const line of lines) {
    ctx.fillText(line, IMAGE_PADDING, y);
    y += lineHeight;
  }

  return new Promise((resolve, reject) =>
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("No image"))),
      "image/png",
    ),
  );
}

/** A safe file name from the phrase: `phrase-what-was-that-like.png`. */
export function imageFileName(text: string): string {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40)
    .replace(/-+$/, "");
  return `phrase-${slug || "card"}.png`;
}

/**
 * Hand the image to the share sheet (on iPhone that offers Save Image), or
 * download it where files cannot be shared.
 */
export async function saveImage(
  blob: Blob,
  fileName: string,
  nav: Navigator | undefined = typeof navigator !== "undefined"
    ? navigator
    : undefined,
): Promise<ShareOutcome> {
  return saveFile(blob, fileName, "image/png", nav);
}

/**
 * Hand a file to the share sheet where files can be shared (on iPhone that
 * offers Save to Files, which works from a Home Screen app where a download
 * link may not), otherwise download it through a link. "shared" means the
 * share sheet finished or the download started; closing the share sheet is
 * "cancelled".
 */
export async function saveFile(
  blob: Blob,
  fileName: string,
  type: string,
  nav: Navigator | undefined = typeof navigator !== "undefined"
    ? navigator
    : undefined,
  options: { shareOnlyOnIos?: boolean } = {},
): Promise<ShareOutcome> {
  const file =
    typeof File === "function" ? new File([blob], fileName, { type }) : null;
  // Android and desktop share sheets often have no "save to device" target,
  // so a file the person needs to keep (a backup) downloads there instead.
  const shareAllowed = !options.shareOnlyOnIos || isIosDevice(nav);
  if (shareAllowed && file && nav?.share && nav.canShare?.({ files: [file] })) {
    try {
      await nav.share({ files: [file] });
      return "shared";
    } catch (err) {
      if (isAbort(err)) return "cancelled";
      // The tap's user gesture is spent by now, so a download link would
      // likely be blocked: report the failure rather than claim a save.
      return "failed";
    }
  }
  try {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
    return "shared";
  } catch {
    return "failed";
  }
}

/**
 * Print what is marked `.print-target`. While one is on the page, print.css
 * hides everything else, so the print holds only the phrase card.
 */
export function printTarget(win: Window = window): void {
  win.print();
}

/** iPhone, iPod or iPad (iPadOS reports a Mac with touch), any browser. */
function isIosDevice(nav: Navigator | undefined): boolean {
  const ua = nav?.userAgent ?? "";
  return (
    /iPhone|iPad|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && (nav?.maxTouchPoints ?? 0) > 1)
  );
}

// Production static server for the built app (dist/public).
// `vite preview` is for local checks only; this is what `start` runs in production.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sirv from "sirv";

const root = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "dist",
  "public",
);
const port = Number(process.env.PORT ?? 4173);
const host = process.env.HOST ?? "0.0.0.0";

const IMMUTABLE = "public, max-age=31536000, immutable";
// Files that must be revalidated on every load so new deploys and service
// worker updates are picked up straight away.
const NO_CACHE_FILES = new Set([
  "/",
  "/index.html",
  "/sw.js",
  "/registerSW.js",
  "/manifest.webmanifest",
]);

// Hash the inline scripts in the built index.html (the theme bootstrap) so the
// CSP allows exactly them and nothing else, without drifting from the build.
const inlineScriptHashes = [
  ...readFileSync(path.join(root, "index.html"), "utf8").matchAll(
    /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g,
  ),
].map(
  ([, body]) =>
    `'sha256-${createHash("sha256").update(body).digest("base64")}'`,
);

// The app is fully same-origin: no CDN, analytics or remote API. Framing is
// limited to same-origin because the card page shows its PDFs in an iframe. Inline
// style attributes are used throughout the React UI, so style-src keeps
// 'unsafe-inline'; scripts stay strict.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' ${inlineScriptHashes.join(" ")}`.trim(),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'self'",
  "worker-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const SECURITY_HEADERS = {
  "Content-Security-Policy": CONTENT_SECURITY_POLICY,
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

function setHeaders(res, pathname) {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    res.setHeader(name, value);
  }
  if (pathname.startsWith("/assets/")) {
    res.setHeader("Cache-Control", IMMUTABLE);
  } else if (
    NO_CACHE_FILES.has(pathname) ||
    /^\/workbox-[^/]+\.js$/.test(pathname) ||
    // Extensionless paths are client-side routes served index.html by the SPA fallback.
    !path.posix.basename(pathname).includes(".")
  ) {
    res.setHeader("Cache-Control", "no-cache");
  }
}

const serve = sirv(root, { single: true, etag: true, setHeaders });

const server = createServer((req, res) => serve(req, res));

server.listen(port, host, () => {
  console.log(`Serving ${root} on http://${host}:${port}`);
});

function shutdown(signal) {
  console.log(`${signal} received, closing server`);
  server.close(() => process.exit(0));
  // Drop idle keep-alive sockets so close() can finish, and force exit if
  // in-flight requests take too long.
  server.closeIdleConnections();
  setTimeout(() => process.exit(0), 10_000).unref();
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

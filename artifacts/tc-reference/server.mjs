// Production static server for the built app (dist/public).
// `vite preview` is for local checks only; this is what `start` runs in production.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sirv from "sirv";

const defaultRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "dist",
  "public",
);

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

// Client-side routes (see src/App.tsx). Other extensionless paths still get
// the app shell, so the client can render its Not Found page, but with HTTP
// 404 so crawlers and monitors don't see soft-404s.
const APP_ROUTES = [
  /^\/$/,
  /^\/card\/TC\d{3}\/?$/,
  /^\/(drill|favourites|phrases|playbooks)\/?$/,
  /^\/index\.html$/,
];

export function isAppRoute(pathname) {
  return APP_ROUTES.some((route) => route.test(pathname));
}

// Hash the inline scripts in the built index.html (the theme bootstrap) so the
// CSP allows exactly them and nothing else, without drifting from the build.
function inlineScriptHashes(indexHtml) {
  return [
    ...indexHtml.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g),
  ].map(
    ([, body]) =>
      `'sha256-${createHash("sha256").update(body).digest("base64")}'`,
  );
}

// The app is fully same-origin: no CDN, analytics or remote API. Framing is
// limited to same-origin because the card page shows its PDFs in an iframe. Inline
// style attributes are used throughout the React UI, so style-src keeps
// 'unsafe-inline'; scripts stay strict.
const contentSecurityPolicy = (scriptHashes) =>
  [
    "default-src 'self'",
    `script-src 'self' ${scriptHashes.join(" ")}`.trim(),
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

const securityHeaders = (scriptHashes) => ({
  "Content-Security-Policy": contentSecurityPolicy(scriptHashes),
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
});

function setHeaders(res, pathname, headers) {
  for (const [name, value] of Object.entries(headers)) {
    res.setHeader(name, value);
  }
  // sirv's lookup has no entry for Word files; with nosniff a blank type
  // makes some phones refuse to open the download.
  if (pathname.endsWith(".docx")) {
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    );
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

/** The request handler, exported for tests. `root` must hold index.html. */
export function createRequestHandler(root = defaultRoot) {
  const indexHtml = readFileSync(path.join(root, "index.html"), "utf8");
  const headers = securityHeaders(inlineScriptHashes(indexHtml));
  const serve = sirv(root, {
    single: true,
    etag: true,
    setHeaders: (res, pathname) => setHeaders(res, pathname, headers),
  });
  const notFound = (req, res) => {
    setHeaders(res, "/", headers);
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(req.method === "HEAD" ? undefined : indexHtml);
  };
  return (req, res) => {
    let pathname = "/";
    try {
      pathname = decodeURIComponent(
        new URL(req.url ?? "/", "http://x").pathname,
      );
    } catch {
      return notFound(req, res);
    }
    const extensionless = !path.posix.basename(pathname).includes(".");
    if (extensionless && !isAppRoute(pathname)) return notFound(req, res);
    // Missing files fall through to sirv's SPA fallback only for routes.
    serve(req, res, () => {
      if (extensionless) return notFound(req, res);
      // A missing static file is a plain 404, never the HTML shell.
      setHeaders(res, pathname, headers);
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end(req.method === "HEAD" ? undefined : "Not found");
    });
  };
}

const invokedPath = process.argv[1]
  ? pathToFileURL(path.resolve(process.argv[1])).href
  : "";
if (import.meta.url === invokedPath) {
  const port = Number(process.env.PORT ?? 4173);
  const host = process.env.HOST ?? "0.0.0.0";
  const server = createServer(createRequestHandler());
  server.listen(port, host, () => {
    console.log(`Serving ${defaultRoot} on http://${host}:${port}`);
  });

  const shutdown = (signal) => {
    console.log(`${signal} received, closing server`);
    server.close(() => process.exit(0));
    // Drop idle keep-alive sockets so close() can finish, and force exit if
    // in-flight requests take too long.
    server.closeIdleConnections();
    setTimeout(() => process.exit(0), 10_000).unref();
  };

  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}

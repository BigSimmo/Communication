// @vitest-environment node
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
// @ts-expect-error server.mjs is plain JS without type declarations
import { createRequestHandler, isAppRoute } from "../../server.mjs";

const THEME_SCRIPT = "document.documentElement.dataset.x='1';";
let dir: string;
let server: Server;
let base: string;

beforeAll(async () => {
  dir = mkdtempSync(path.join(tmpdir(), "tc-server-"));
  writeFileSync(
    path.join(dir, "index.html"),
    `<!doctype html><html><head><script>${THEME_SCRIPT}</script><script type="module" src="/assets/index-abc123.js"></script></head><body>app</body></html>`,
  );
  mkdirSync(path.join(dir, "assets"));
  writeFileSync(path.join(dir, "assets/index-abc123.js"), "export {};");
  writeFileSync(path.join(dir, "sw.js"), "self;");
  writeFileSync(path.join(dir, "workbox-1a2b3c.js"), "self;");
  writeFileSync(path.join(dir, "manifest.webmanifest"), "{}");
  writeFileSync(path.join(dir, "robots.txt"), "User-agent: *");
  mkdirSync(path.join(dir, "cards/TC001"), { recursive: true });
  writeFileSync(path.join(dir, "cards/TC001/a.docx"), "doc");
  server = createServer(createRequestHandler(dir));
  await new Promise<void>((done) => server.listen(0, "127.0.0.1", done));
  base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterAll(() => {
  server.close();
  rmSync(dir, { recursive: true, force: true });
});

describe("production server (F-10, F-12)", () => {
  it("sends strict security headers with a CSP hash of the inline script", async () => {
    const res = await fetch(`${base}/`);
    expect(res.status).toBe(200);
    const hash = createHash("sha256").update(THEME_SCRIPT).digest("base64");
    const csp = res.headers.get("content-security-policy")!;
    expect(csp).toContain(`script-src 'self' 'sha256-${hash}'`);
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("frame-ancestors 'self'");
    expect(csp).not.toMatch(/script-src[^;]*unsafe-inline/);
    expect(res.headers.get("x-content-type-options")).toBe("nosniff");
    expect(res.headers.get("x-frame-options")).toBe("SAMEORIGIN");
    expect(res.headers.get("referrer-policy")).toBe(
      "strict-origin-when-cross-origin",
    );
    expect(res.headers.get("permissions-policy")).toContain("camera=()");
  });

  it("caches hashed assets immutably and revalidates the shell and SW", async () => {
    const asset = await fetch(`${base}/assets/index-abc123.js`);
    expect(asset.headers.get("cache-control")).toBe(
      "public, max-age=31536000, immutable",
    );
    for (const file of [
      "/",
      "/index.html",
      "/sw.js",
      "/workbox-1a2b3c.js",
      "/manifest.webmanifest",
      "/drill",
    ]) {
      const res = await fetch(base + file);
      expect(res.status, file).toBe(200);
      expect(res.headers.get("cache-control"), file).toBe("no-cache");
    }
  });

  it("serves the app shell for known client routes", async () => {
    for (const route of ["/drill", "/phrases", "/card/TC001", "/playbooks/"]) {
      const res = await fetch(base + route);
      expect(res.status, route).toBe(200);
      expect(await res.text()).toContain("app");
    }
  });

  it("returns 404 with the app shell for unknown routes", async () => {
    for (const route of ["/nope", "/card/XYZ", "/drill/extra", "/%E0%A4%A"]) {
      const res = await fetch(base + route);
      expect(res.status, route).toBe(404);
      expect(res.headers.get("content-security-policy")).toBeTruthy();
      expect(await res.text()).toContain("app");
    }
    const missingFile = await fetch(`${base}/missing.js`);
    expect(missingFile.status).toBe(404);
    expect(missingFile.headers.get("content-type")).toContain("text/plain");
  });

  it("labels Word downloads with their MIME type", async () => {
    const res = await fetch(`${base}/cards/TC001/a.docx`);
    expect(res.headers.get("content-type")).toContain("wordprocessingml");
  });

  it("matches only real app routes", () => {
    expect(isAppRoute("/")).toBe(true);
    expect(isAppRoute("/card/TC098")).toBe(true);
    expect(isAppRoute("/card/../etc")).toBe(false);
    expect(isAppRoute("/favourites")).toBe(true);
    expect(isAppRoute("/admin")).toBe(false);
  });
});

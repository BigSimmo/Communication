import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { VitePWA } from "vite-plugin-pwa";

const rawPort = process.env.PORT ?? "5173";

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH ?? "/";
const host = process.env.HOST ?? "127.0.0.1";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "apple-touch-icon.png", "robots.txt", "opengraph.jpg"],
      manifest: {
        name: "TC Reference Tool",
        short_name: "TC Reference",
        description:
          "A mobile-first reference library of 98 communication techniques — phrase banks, decision trees, scenarios and daily practice drills.",
        theme_color: "#0f1724",
        background_color: "#0f1724",
        display: "standalone",
        start_url: ".",
        icons: [
          { src: "pwa-icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "pwa-icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      workbox: {
        // App shell (JS/CSS/HTML/fonts/icons) is precached; the per-card PDFs
        // and other downloads are cached on demand instead — precaching every
        // PDF would bloat the initial install for documents most users never
        // open.
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        globIgnores: ["**/cards/**"],
        // The card-data chunk holds all 98 techniques (~2.1 MB) and is core to
        // the app offline, so precache it — the 2 MiB default would drop it.
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/\/cards\//],
        runtimeCaching: [
          {
            // NetworkFirst, not CacheFirst: card PDFs live at stable URLs but
            // are regenerated on every build, so prefer fresh copies online
            // and fall back to the cache offline
            urlPattern: /\/cards\/.*\.(pdf|csv|docx|png)$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "card-downloads",
              // Fall back to the cached copy quickly if the network hangs
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 90 },
            },
          },
        ],
      },
    }),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Split the static card content and third-party code out of the main
        // bundle — better caching, chunks stay under 500 kB, and no per-package
        // allow-list to maintain as dependencies change.
        manualChunks(id: string) {
          // Card content lives in the barrel (src/lib/cards.ts), the per-card
          // modules (src/lib/cards/*.ts) and the shared types (card-types.ts).
          if (id.includes("src/lib/cards") || id.includes("src/lib/card-types"))
            return "card-data";
          if (id.includes("node_modules")) {
            return id.includes("lucide-react") ? "icons" : "vendor";
          }
          return undefined;
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host,
    allowedHosts: [host, "localhost"],
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host,
    allowedHosts: [host, "localhost"],
  },
});

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

// Hosts the dev/preview server will answer for. Vite rejects unknown Host
// headers, so a deployed instance has to allow the domain it is served on:
// Railway injects RAILWAY_PUBLIC_DOMAIN, and ALLOWED_HOSTS covers anything else
// (custom domains, other platforms) as a comma-separated list.
const allowedHosts = [
  host,
  "localhost",
  process.env.RAILWAY_PUBLIC_DOMAIN,
  ...(process.env.ALLOWED_HOSTS ?? "").split(","),
]
  .map((entry) => entry?.trim())
  .filter((entry): entry is string => Boolean(entry));

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "apple-touch-icon.png",
        "pwa-maskable-512.png",
        "robots.txt",
        "opengraph.jpg",
      ],
      manifest: {
        name: "TC Reference Tool",
        short_name: "TC Reference",
        description:
          "A mobile-first reference library of 98 communication techniques — phrase banks, decision trees, scenarios and daily practice drills.",
        id: ".",
        scope: ".",
        orientation: "portrait",
        categories: ["education", "productivity"],
        theme_color: "#0f1724",
        background_color: "#0f1724",
        display: "standalone",
        start_url: ".",
        icons: [
          { src: "pwa-icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-icon-512.png", sizes: "512x512", type: "image/png" },
          // Full-bleed with artwork inside the 80% safe zone so Android masks
          // never expose transparent corners.
          {
            src: "pwa-maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        // App shell (JS/CSS/HTML/fonts/icons) is precached; the per-card PDFs
        // and other downloads are cached on demand instead — precaching every
        // PDF would bloat the initial install for documents most users never
        // open.
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        globIgnores: ["**/cards/**"],
        // Keep enough headroom for non-card app-shell chunks. Individual card
        // scripts are excluded above and cached only after a card is visited.
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
          {
            // Card modules are content-hashed immutable assets. Cache only
            // cards the user visits; never inflate the initial PWA install
            // with all 98 technique payloads.
            urlPattern: /\/assets\/cards\/TC\d{3}-[^/]+\.js$/,
            handler: "CacheFirst",
            options: {
              cacheName: "card-scripts",
              expiration: { maxEntries: 98, maxAgeSeconds: 60 * 60 * 24 * 365 },
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
      "@assets": path.resolve(
        import.meta.dirname,
        "..",
        "..",
        "attached_assets",
      ),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        chunkFileNames(chunkInfo) {
          const facadeId = chunkInfo.facadeModuleId?.replaceAll("\\", "/");
          if (facadeId && /\/src\/lib\/cards\/TC\d{3}\.ts$/.test(facadeId)) {
            return "assets/cards/[name]-[hash].js";
          }
          return "assets/[name]-[hash].js";
        },
        // Keep third-party code stable without merging card modules back into
        // a monolithic chunk. Each import.meta.glob card remains independent.
        manualChunks(id: string) {
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
    allowedHosts,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host,
    allowedHosts,
  },
});

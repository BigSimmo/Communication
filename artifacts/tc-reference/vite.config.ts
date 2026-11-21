import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import { readdirSync } from "node:fs";
import { cardTextIndexPlugin } from "./card-text-index-plugin";
import { cardChunkListPlugin } from "./card-chunk-list-plugin";
import { fontPreloadPlugin } from "./font-preload-plugin";

const rawPort = process.env.PORT ?? "5173";

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const cardsDir = path.resolve(import.meta.dirname, "src/lib/cards");
// Card count drives the manifest copy and the card-scripts cache size, so a
// new card never pushes saved cards out of the offline cache.
const cardCount = readdirSync(cardsDir).filter((file) =>
  /^TC\d{3}\.ts$/.test(file),
).length;

// Ties card-chunks.json to the app build that reads it (see offline-cards.ts).
const cardBuildId =
  process.env.CARD_BUILD_ID ?? `${Date.now().toString(36)}-${cardCount}`;

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
  define: {
    "import.meta.env.VITE_CARD_BUILD_ID": JSON.stringify(cardBuildId),
  },
  plugins: [
    react(),
    tailwindcss(),
    // Slim, precached text index so search and phrases work offline.
    cardTextIndexPlugin(cardsDir),
    // Lists the card chunks for "Save all cards for offline".
    cardChunkListPlugin(cardBuildId),
    // Inter weights painted on every first screen (see main.tsx imports)
    fontPreloadPlugin([400, 600, 700]),
    VitePWA({
      // "prompt": a new build waits until the user accepts the update toast
      // (src/lib/sw-update.ts), which registers the worker itself.
      registerType: "prompt",
      injectRegister: false,
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
        description: `A pocket reference of ${cardCount} communication techniques with phrase banks, decision trees, scenarios and daily practice drills. Works offline.`,
        lang: "en-AU",
        dir: "ltr",
        id: ".",
        scope: ".",
        orientation: "portrait",
        categories: ["education", "productivity"],
        theme_color: "#0f1724",
        background_color: "#0f1724",
        display: "standalone",
        // Fall back gracefully on browsers without standalone support.
        display_override: ["standalone", "minimal-ui"],
        start_url: ".",
        prefer_related_applications: false,
        // Reopen an existing window rather than stacking new ones.
        launch_handler: { client_mode: ["navigate-existing", "auto"] },
        // Long-press shortcuts on the home screen icon (Android, desktop).
        // iOS ignores shortcuts. Launchers show the first few, so the most
        // urgent come first.
        shortcuts: [
          {
            name: "Help me right now",
            short_name: "Help now",
            description: "Pick what's happening and get words to say",
            url: "help",
            icons: [
              { src: "pwa-icon-192.png", sizes: "192x192", type: "image/png" },
            ],
          },
          {
            name: "Search",
            short_name: "Search",
            description: "Search techniques, phrases and playbooks",
            url: "search",
            icons: [
              { src: "pwa-icon-192.png", sizes: "192x192", type: "image/png" },
            ],
          },
          {
            name: "Phrase Bank",
            short_name: "Phrases",
            url: "phrases",
            icons: [
              { src: "pwa-icon-192.png", sizes: "192x192", type: "image/png" },
            ],
          },
          {
            name: "Daily Drill",
            short_name: "Drill",
            url: "drill",
            icons: [
              { src: "pwa-icon-192.png", sizes: "192x192", type: "image/png" },
            ],
          },
          {
            name: "Favourites",
            short_name: "Saved",
            url: "favourites",
            icons: [
              { src: "pwa-icon-192.png", sizes: "192x192", type: "image/png" },
            ],
          },
        ],
        icons: [
          { src: "pwa-icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-icon-512.png", sizes: "512x512", type: "image/png" },
          // Full-bleed with artwork inside the 80% safe zone so Android masks
          // never expose transparent corners.
          {
            src: "pwa-maskable-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "pwa-maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          // Single-colour silhouettes for themed (Android 13+) icons.
          {
            src: "pwa-monochrome-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "monochrome",
          },
          {
            src: "pwa-monochrome-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "monochrome",
          },
        ],
        // Richer install UI on Android/desktop Chrome. Not precached.
        screenshots: [
          {
            src: "screenshots/library-narrow.webp",
            sizes: "780x1688",
            type: "image/webp",
            form_factor: "narrow",
            label: `Library of ${cardCount} communication techniques`,
          },
          {
            src: "screenshots/phrases-narrow.webp",
            sizes: "780x1688",
            type: "image/webp",
            form_factor: "narrow",
            label: "Phrase Bank with tone filters",
          },
          {
            src: "screenshots/card-narrow.webp",
            sizes: "780x1688",
            type: "image/webp",
            form_factor: "narrow",
            label: "A technique card",
          },
          {
            src: "screenshots/library-wide.webp",
            sizes: "1280x800",
            type: "image/webp",
            form_factor: "wide",
            label: "Library on a wide screen",
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
        // Delete precaches left by older workbox versions.
        cleanupOutdatedCaches: true,
        // The precached SPA shell is the offline fallback for every app route.
        // Navigation preload is deliberately off: navigations are answered
        // from precache, so a preload request would only waste bandwidth.
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/\/cards\//],
        runtimeCaching: [
          {
            // Images outside the precache (JPEG/WebP social and install
            // screenshots) — serve cached, refresh in the background.
            urlPattern: ({ request, sameOrigin }) =>
              sameOrigin && request.destination === "image",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "images",
              expiration: { maxEntries: 40, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
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
            // cards the user visits (or saves for offline from Favourites);
            // never inflate the initial PWA install with every card.
            urlPattern: /\/assets\/cards\/TC\d{3}-[^/]+\.js$/,
            handler: "CacheFirst",
            options: {
              cacheName: "card-scripts",
              expiration: {
                maxEntries: cardCount,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      },
    }),
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
          if (facadeId === "\0virtual:card-text-index") {
            return "assets/card-text-data-[hash].js";
          }
          return "assets/[name]-[hash].js";
        },
        // Keep third-party code stable without merging card modules back into
        // a monolithic chunk. Each import.meta.glob card remains independent.
        manualChunks(id: string) {
          if (id.includes("node_modules")) {
            if (id.includes("lucide-react")) return "icons";
            // Search loads lazily with the search screen; keep its engine
            // out of the vendor chunk that every page loads first.
            if (id.includes("minisearch")) return "search-engine";
            return "vendor";
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

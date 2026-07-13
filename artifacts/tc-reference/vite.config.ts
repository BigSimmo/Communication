import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

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
        // Split the static card content and the framework/icon vendors out
        // of the main bundle — better caching and keeps chunks under 500 kB.
        manualChunks(id: string) {
          if (id.includes("src/lib/cards.ts")) return "card-data";
          if (id.includes("node_modules")) {
            if (/[\\/]node_modules[\\/](react|react-dom|scheduler|wouter|@tanstack)[\\/]/.test(id)) {
              return "react-vendor";
            }
            if (id.includes("lucide-react")) return "icons";
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

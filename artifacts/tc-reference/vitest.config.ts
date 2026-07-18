import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    // The full card catalogue (98 modules) makes the CardDetail render tests
    // heavy; generous timeouts keep them reliable on loaded CI machines where a
    // correct-but-slow synchronous render would otherwise trip the 5s default.
    testTimeout: 60000,
    hookTimeout: 60000,
    // Run test files sequentially in a single thread. Forked workers were
    // timing out on startup under load with the larger catalogue; this is
    // reliable and the suite is small enough that lost parallelism costs little.
    pool: "threads",
    fileParallelism: false,
  },
});

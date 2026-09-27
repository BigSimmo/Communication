import { createRoot } from "react-dom/client";
import App from "./App";
// Self-hosted Inter (no CDN request) — required for genuine offline support
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./index.css";

// After a deploy, an open tab can ask for lazy chunks that no longer exist.
// Vite fires vite:preloadError for those; reload once to pick up the new
// build. The timestamp flag stops a reload loop if the chunk is still
// missing afterwards: the error then reaches AppErrorBoundary instead, which
// offers a manual reload.
const PRELOAD_RELOAD_KEY = "tc_preload_reload_at";
const PRELOAD_RELOAD_WINDOW_MS = 30_000;

window.addEventListener("vite:preloadError", (event) => {
  try {
    const last = Number(sessionStorage.getItem(PRELOAD_RELOAD_KEY));
    if (last && Date.now() - last < PRELOAD_RELOAD_WINDOW_MS) return;
    sessionStorage.setItem(PRELOAD_RELOAD_KEY, String(Date.now()));
  } catch {
    // Without the guard a reload could loop, so leave it to the boundary.
    return;
  }
  event.preventDefault();
  window.location.reload();
});

// Once the app has loaded and stayed up past the guard window, clear the flag
// so a later deploy can trigger its own one-time reload.
window.addEventListener("load", () => {
  window.setTimeout(() => {
    try {
      sessionStorage.removeItem(PRELOAD_RELOAD_KEY);
    } catch {}
  }, PRELOAD_RELOAD_WINDOW_MS);
});

createRoot(document.getElementById("root")!).render(<App />);

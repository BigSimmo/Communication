// Renders the iOS launch screens listed in launch-screens.ts into
// public/splash/: the app icon centred on the app background.
//
//   pnpm --filter @workspace/scripts exec tsx ../artifacts/tc-reference/scripts/generate-launch-screens.ts
//
// Uses Playwright's Chromium (already a dev dependency for the e2e tests).
import { mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";
import {
  LAUNCH_SCREENS,
  LAUNCH_SCREEN_BACKGROUND,
  launchScreenFile,
} from "../launch-screens.ts";

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(appDir, "public");
// The rendered app icon (not favicon.svg, whose text depends on installed
// fonts). Its outer square is the background colour, so only the amber tile
// shows: it reads as the Home Screen icon opening into the app.
const icon = readFileSync(path.join(publicDir, "pwa-icon-512.png"));
const iconUrl = `data:image/png;base64,${icon.toString("base64")}`;
const ICON_POINTS = 160;

const browser = await chromium.launch();
try {
  for (const screen of LAUNCH_SCREENS) {
    const page = await browser.newPage({
      viewport: { width: screen.width, height: screen.height },
      deviceScaleFactor: screen.ratio,
    });
    await page.setContent(
      `<!doctype html><html><body style="margin:0;height:100vh;display:grid;place-items:center;background:${LAUNCH_SCREEN_BACKGROUND}">` +
        `<img src="${iconUrl}" width="${ICON_POINTS}" height="${ICON_POINTS}" alt="" style="margin-bottom:6vh">` +
        `</body></html>`,
    );
    const file = path.join(publicDir, launchScreenFile(screen));
    mkdirSync(path.dirname(file), { recursive: true });
    await page.screenshot({ path: file, omitBackground: false });
    await page.close();
    console.log(`wrote ${path.relative(appDir, file)} (${screen.devices})`);
  }
} finally {
  await browser.close();
}

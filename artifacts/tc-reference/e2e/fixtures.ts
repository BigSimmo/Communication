import { expect, test as base, type Page } from "@playwright/test";

/** Main routes every smoke pass visits. */
export const MAIN_ROUTES = [
  "/",
  "/card/TC028",
  "/help",
  "/help/say-no",
  "/search",
  "/phrases",
  "/drill",
  "/playbooks",
  "/favourites",
  "/start",
] as const;

/**
 * Grant clipboard access where the engine supports the permission names.
 * Chromium needs them for navigator.clipboard; WebKit has no such permission
 * and allows writes from a user gesture on a secure (localhost) origin.
 */
export const test = base.extend<{ clipboard: boolean }>({
  clipboard: async ({ context, browserName }, use) => {
    const granted = browserName === "chromium";
    if (granted) {
      await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    }
    await use(granted);
  },
});

export { expect };

/**
 * Wait until the service worker has installed its precache and controls the
 * page. The worker is in "prompt" mode (no clients.claim), so the first
 * visit is only controlled after one reload, as on a real phone.
 */
export async function waitForServiceWorker(page: Page) {
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
  });
  if (await page.evaluate(() => !!navigator.serviceWorker.controller)) return;
  await page.reload();
  await expect
    .poll(() => page.evaluate(() => !!navigator.serviceWorker.controller))
    .toBe(true);
}

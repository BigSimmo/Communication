import { test, expect, waitForServiceWorker } from "./fixtures";

test("Library and Phrase Bank load offline after the first visit", async ({
  page,
  context,
  browserName,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "Library" }),
  ).toBeVisible();
  await waitForServiceWorker(page);

  if (browserName === "webkit") {
    // Playwright's WebKit can't reload a service-worker page while emulating
    // offline ("WebKit encountered an internal error"), so on WebKit check
    // what an offline reload depends on: the worker controls the page and
    // the precache holds the app shell, the card text index and the Phrase
    // Bank chunk. Chromium below does the real offline reload.
    const cached = await page.evaluate(async () => {
      const urls: string[] = [];
      for (const name of await caches.keys()) {
        const cache = await caches.open(name);
        for (const req of await cache.keys()) urls.push(req.url);
      }
      return { controlled: !!navigator.serviceWorker.controller, urls };
    });
    expect(cached.controlled).toBe(true);
    const has = (re: RegExp) => cached.urls.some((u) => re.test(u));
    expect(has(/\/index\.html(\?|$)/)).toBe(true);
    expect(has(/\/assets\/card-text-data-[^/]+\.js/)).toBe(true);
    expect(has(/\/assets\/phrases-[^/]+\.js/)).toBe(true);
    return;
  }

  await context.setOffline(true);
  try {
    await page.reload();
    await expect(
      page.getByRole("heading", { level: 1, name: "Library" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /^Warm vocal baseline/ }),
    ).toBeVisible();

    await page.goto("/phrases");
    await expect(
      page.getByRole("heading", { level: 1, name: "Phrase Bank" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /^Copy: / }).first(),
    ).toBeVisible();

    await page.reload();
    await expect(
      page.getByRole("heading", { level: 1, name: "Phrase Bank" }),
    ).toBeVisible();
  } finally {
    await context.setOffline(false);
  }
});

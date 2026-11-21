import { test, expect, MAIN_ROUTES } from "./fixtures";

/** Wait for the route's content (lazy chunks, card loader) to settle. */
async function settle(page: import("@playwright/test").Page) {
  await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
  await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);
}

for (const route of MAIN_ROUTES) {
  test(`${route} has no console errors and no sideways scroll`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    const response = await page.goto(route);
    expect(response?.status(), "HTTP status").toBe(200);
    await settle(page);

    expect(page.viewportSize()?.width).toBe(393);
    const overflow = await page.evaluate(() => {
      const root = document.documentElement;
      return {
        scrollWidth: root.scrollWidth,
        clientWidth: root.clientWidth,
        bodyScrollWidth: document.body.scrollWidth,
      };
    });
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth);
    expect(overflow.bodyScrollWidth).toBeLessThanOrEqual(overflow.clientWidth);

    expect(errors).toEqual([]);
  });
}

test("tab bar sits on the bottom edge and pads for the home indicator", async ({
  page,
}) => {
  await page.goto("/");
  const viewport = await page.evaluate(() => ({
    fit: document
      .querySelector('meta[name="viewport"]')
      ?.getAttribute("content"),
    height: window.innerHeight,
  }));
  // viewport-fit=cover is what makes env(safe-area-inset-*) non-zero on iPhone
  expect(viewport.fit).toContain("viewport-fit=cover");

  const bar = page.getByRole("navigation", { name: "Main navigation" });
  await expect(bar).toBeVisible();
  const box = await bar.boundingBox();
  expect(box).not.toBeNull();
  expect(Math.round(box!.y + box!.height)).toBe(viewport.height);

  const padding = await bar.evaluate((el) => {
    // Resolve the same expression the bar uses with a known inset, to prove
    // the gap follows env(safe-area-inset-bottom) rather than a fixed value.
    const probe = document.createElement("div");
    probe.style.paddingBottom = "var(--tabbar-gap)";
    el.appendChild(probe);
    const resolved = getComputedStyle(probe).paddingBottom;
    probe.remove();
    const rules = [...document.styleSheets].flatMap((sheet) => {
      try {
        return [...sheet.cssRules].map((rule) => rule.cssText);
      } catch {
        return [];
      }
    });
    return {
      actual: parseFloat(getComputedStyle(el).paddingBottom),
      resolved: parseFloat(resolved),
      usesInset: rules.some((text) =>
        /--tabbar-gap:[^;]*env\(safe-area-inset-bottom/.test(text),
      ),
    };
  });
  expect(padding.usesInset).toBe(true);
  // Emulators report a zero inset, so the 8px floor applies; on a real
  // iPhone the home indicator inset (34px) is larger and wins.
  expect(padding.actual).toBeGreaterThanOrEqual(8);
  expect(padding.actual).toBe(padding.resolved);

  // Every destination is reachable with one tap
  for (const name of ["Library", "Phrases", "Drill", "Playbooks", "Saved"]) {
    await expect(
      bar.getByRole("link", { name: new RegExp(`^${name}`) }),
    ).toBeVisible();
  }
});

test.describe("landscape iPhone with a notch", () => {
  // iPhone 15 turned sideways: 852pt wide, so the sidebar layout. iOS reports
  // a 59pt inset on both sides and 21pt for the home indicator.
  const INSET = 59;
  test.use({ viewport: { width: 852, height: 393 } });

  for (const route of ["/", "/card/TC028", "/phrases", "/search"]) {
    test(`${route} keeps content out of the side safe areas`, async ({
      page,
      browserName,
    }) => {
      // Only Chromium can emulate safe-area insets (via CDP).
      test.skip(browserName !== "chromium", "needs CDP safe-area override");
      const cdp = await page.context().newCDPSession(page);
      await cdp.send("Emulation.setSafeAreaInsetsOverride", {
        insets: { top: 0, left: INSET, right: INSET, bottom: 21 },
      });
      await page.goto(route);
      await expect(page.locator("h1").first()).toBeVisible();
      await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);

      const intruders = await page.evaluate((inset) => {
        const found: string[] = [];
        const selector = "h1, h2, h3, p, a, button, input, [role=tab]";
        for (const el of document.querySelectorAll<HTMLElement>(selector)) {
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) continue;
          // Rows that scroll sideways may run under the edges by design.
          if (el.closest("[class*='overflow-x-auto']")) continue;
          if (r.left < inset - 0.5 || r.right > innerWidth - inset + 0.5) {
            const text = (el.textContent ?? "").trim().slice(0, 30);
            found.push(
              `${el.tagName} "${text}" ${Math.round(r.left)}-${Math.round(r.right)}`,
            );
          }
        }
        return found;
      }, INSET);
      expect(intruders).toEqual([]);
    });
  }
});

test("iOS gets a launch screen for this iPhone, and the manifest allows rotation", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const links = await page.evaluate(() =>
    [
      ...document.querySelectorAll<HTMLLinkElement>(
        'link[rel="apple-touch-startup-image"]',
      ),
    ].map((link) => ({ href: link.href, media: link.media })),
  );
  expect(links.length).toBeGreaterThan(5);
  // Exactly one image is for the iPhone 15 screen (393x852pt @3x). The test
  // runner's emulated screen is the viewport, so match the query text rather
  // than asking matchMedia.
  const iphone15 = links.filter(
    (l) =>
      l.media.includes("(device-width: 393px)") &&
      l.media.includes("(device-height: 852px)") &&
      l.media.includes("(-webkit-device-pixel-ratio: 3)"),
  );
  expect(iphone15).toHaveLength(1);
  expect(iphone15[0].href).toMatch(/\/splash\/launch-1179x2556\.png$/);
  const image = await request.get(iphone15[0].href);
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");

  const manifest = await (await request.get("/manifest.webmanifest")).json();
  expect(manifest.orientation ?? "any").toBe("any");
});

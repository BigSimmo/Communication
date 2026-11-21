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

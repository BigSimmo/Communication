import { createRequire } from "node:module";
import type { Page } from "@playwright/test";
import { test, expect, MAIN_ROUTES } from "./fixtures";

// axe-core runs inside the page. The production CSP (rightly) blocks
// injected scripts, so this spec alone bypasses it to add the engine.
test.use({ bypassCSP: true });

const axePath = createRequire(import.meta.url).resolve("axe-core/axe.min.js");

interface AxeViolation {
  id: string;
  impact: string | null;
  help: string;
  nodes: { target: string[]; html: string }[];
}

/** Wait for the route's lazy chunks and data loaders to settle. */
async function settle(page: Page) {
  await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
  await expect(page.locator('[aria-busy="true"]')).toHaveCount(0);
  await expect(
    page.getByRole("status").filter({ hasText: /^Loading/ }),
  ).toHaveCount(0);
}

async function runAxe(
  page: Page,
  runOnly: { type: "tag" | "rule"; values: string[] },
): Promise<string[]> {
  if (!(await page.evaluate(() => "axe" in window))) {
    await page.addScriptTag({ path: axePath });
  }
  const violations = await page.evaluate(async (only) => {
    const axe = (
      window as unknown as {
        axe: {
          run: (
            ctx: Document,
            opts: object,
          ) => Promise<{ violations: AxeViolation[] }>;
        };
      }
    ).axe;
    const result = await axe.run(document, { runOnly: only });
    return result.violations;
  }, runOnly);
  return violations.flatMap((v) =>
    v.nodes.map(
      (n) =>
        `${v.id} (${v.impact}): ${n.target.join(" ")} ${n.html.slice(0, 120)}`,
    ),
  );
}

for (const route of MAIN_ROUTES) {
  test(`${route} passes the basic axe scan and label-in-name`, async ({
    page,
  }) => {
    await page.goto(route);
    await settle(page);

    // WCAG 2.x A/AA rules that axe reports with certainty.
    expect(
      await runAxe(page, {
        type: "tag",
        values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
      }),
    ).toEqual([]);

    // Visible label text must be part of the accessible name (WCAG 2.5.3),
    // so voice-control users can say what they see. Experimental in axe, so
    // it only runs when named.
    expect(
      await runAxe(page, {
        type: "rule",
        values: ["label-content-name-mismatch"],
      }),
    ).toEqual([]);
  });
}

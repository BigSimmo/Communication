import { test, expect, waitForServiceWorker } from "./fixtures";

test("Library and Phrase Bank load offline after the first visit", async ({
  page,
  context,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: "Library" }),
  ).toBeVisible();
  await waitForServiceWorker(page);

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

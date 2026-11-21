import { test, expect } from "./fixtures";

test.describe("core flows", () => {
  test("Library loads and a card opens", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "Library" }),
    ).toBeVisible();
    const row = page.getByRole("link", { name: /^Warm vocal baseline/ });
    // Centre the row first: scrolled only to the viewport edge it can sit
    // under the fixed tab bar while the header folds away, and the tap
    // lands on the bar instead (seen in WebKit).
    await row.evaluate((el) => el.scrollIntoView({ block: "center" }));
    await row.click();
    await expect(page).toHaveURL(/\/card\/TC028$/);
    await expect(
      page.getByRole("heading", { level: 2, name: "Warm vocal baseline" }),
    ).toBeVisible();
  });

  test("card tabs switch between Use it, Learn it and Practise it", async ({
    page,
  }) => {
    await page.goto("/card/TC028");
    const tabs = page.getByRole("tablist", { name: "Card sections" });
    const useIt = tabs.getByRole("tab", { name: "Use it" });
    const learnIt = tabs.getByRole("tab", { name: "Learn it" });
    const practiseIt = tabs.getByRole("tab", { name: "Practise it" });

    await expect(useIt).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel", { name: "Use it" })).toBeVisible();

    await learnIt.click();
    await expect(learnIt).toHaveAttribute("aria-selected", "true");
    await expect(
      page.getByRole("tabpanel", { name: "Learn it" }),
    ).toBeVisible();

    await practiseIt.click();
    await expect(practiseIt).toHaveAttribute("aria-selected", "true");
    await expect(
      page.getByRole("tabpanel", { name: "Practise it" }),
    ).toBeVisible();

    await useIt.click();
    await expect(useIt).toHaveAttribute("aria-selected", "true");
  });

  test("search finds a technique and Back returns to the results", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: "Search techniques, phrases and playbooks" })
      .click();
    await expect(page).toHaveURL(/\/search/);
    await page
      .getByRole("searchbox", {
        name: "Search techniques, phrases and playbooks",
      })
      .fill("mirroring");
    await expect(page.getByRole("status").first()).toContainText(
      /results? for mirroring/,
    );
    const best = page.getByRole("link", { name: /Best match.*Tactical/ });
    await best.click();
    await expect(page).toHaveURL(/\/card\/TC026$/);
    await expect(
      page.getByRole("heading", { level: 2, name: "Tactical mirroring" }),
    ).toBeVisible();

    await page.goBack();
    await expect(page).toHaveURL(/\/search\?q=mirroring/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Search results" }),
    ).toBeVisible();
    await expect(
      page.getByRole("searchbox", {
        name: "Search techniques, phrases and playbooks",
      }),
    ).toHaveValue("mirroring");
  });

  test("Help me right now opens a situation and copies a line", async ({
    page,
    clipboard,
  }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /^Help me right now/ }).click();
    await expect(
      page.getByRole("heading", { level: 1, name: "What's happening?" }),
    ).toBeVisible();
    await page.getByRole("link", { name: /^I need to say no/ }).click();
    await expect(page).toHaveURL(/\/help\/say-no$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "I need to say no" }),
    ).toBeVisible();

    const line = "I can't take that on right now.";
    await page.getByRole("button", { name: `Copy: ${line}` }).click();
    await expect(
      page.getByRole("status").filter({ hasText: "Copied" }),
    ).toBeVisible();
    if (clipboard) {
      expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
        line,
      );
    }
  });

  test("Phrase Bank filters by tone", async ({ page }) => {
    await page.goto("/phrases");
    await expect(
      page.getByRole("heading", { level: 1, name: "Phrase Bank" }),
    ).toBeVisible();
    const tones = page.getByRole("group", { name: "Filter by tone" });
    const warm = tones.getByRole("button", { name: /^Warm \d+/ });
    const warmCount = (await warm.textContent())?.match(/\d[\d,]*/)?.[0];
    expect(warmCount).toBeTruthy();

    await warm.click();
    await expect(warm).toHaveAttribute("aria-pressed", "true");
    await expect(tones.getByRole("button", { name: /^Any/ })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await expect(
      page.getByText(new RegExp(`^${warmCount} phrases? · Warm$`)),
    ).toBeVisible();
  });

  test("Daily Drill rates today's task", async ({ page }) => {
    await page.goto("/drill");
    await expect(
      page.getByRole("heading", { level: 1, name: "Daily Drill" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Rate it to finish" }),
    ).toBeDisabled();

    const rating = page
      .getByRole("group", { name: "How does this technique feel?" })
      .getByRole("button", { name: "Getting there" });
    await rating.click();
    await expect(rating).toHaveAttribute("aria-pressed", "true");

    const finish = page.getByRole("button", { name: "Finish today's drill" });
    await expect(finish).toBeEnabled();
    await finish.click();
    await expect(finish).toBeHidden();
  });

  test("Saved keeps a favourited card after reload", async ({ page }) => {
    await page.goto("/");
    const heart = page.getByRole("button", {
      name: "Favourite Warm vocal baseline",
    });
    await heart.click();
    await expect(heart).toHaveAttribute("aria-pressed", "true");

    await page.goto("/favourites");
    await page.reload();
    await expect(
      page.getByRole("heading", { level: 1, name: "Saved" }),
    ).toBeVisible();
    await expect(
      page.getByRole("main").getByRole("link", { name: /Warm vocal baseline/ }),
    ).toBeVisible();
  });
});

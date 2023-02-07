import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("bingo board", () => {
  test("Tests board", async ({ page }) => {
    const board = page.locator("section[id='board']");
    await expect(board).toBeVisible();
  });
});

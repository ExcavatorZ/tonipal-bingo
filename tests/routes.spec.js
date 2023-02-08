import { test, expect } from "@playwright/test";

test.describe("main page", () => {
  test("no errors", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("404 Not Found")).not.toBeVisible();
  });
});

test.describe("leaderboards page", () => {
  test("no errors", async ({ page }) => {
    await page.goto("/results");
    await expect(page.getByText("404 Not Found")).not.toBeVisible();
  });
});

test.describe("submit page", () => {
  test("no errors", async ({ page }) => {
    await page.goto("/submit");
    await expect(page.getByText("404 Not Found")).not.toBeVisible();
  });
});

test.describe("reset page", () => {
  test("no errors", async ({ page }) => {
    await page.goto("/reset");
    await expect(page.getByText("404 Not Found")).not.toBeVisible();
  });
});

test.describe("saved boards page", () => {
  test("no errors", async ({ page }) => {
    await page.goto("/boards");
    await expect(page.getByText("404 Not Found")).not.toBeVisible();
  });
});

test.describe("redirect page", () => {
  test("no errors", async ({ page }) => {
    await page.goto("/notapage");
    await expect(page.getByText("404 Not Found")).not.toBeVisible();
  });
});

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://leo-kuo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Leo Kuo/);
});

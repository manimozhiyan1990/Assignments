import { test, expect } from '@playwright/test';

test('Bypass login and test as guest', async ({ page }) => {
  // 1. Open the Yatra home page
  await page.goto('https://www.yatra.com/');

await page.waitForTimeout(5000)// Wait for 5 seconds to allow the page to load
});
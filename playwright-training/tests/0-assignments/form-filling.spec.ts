import { test, expect } from '@playwright/test';

test('Practice Form Automation', async ({ page }) => {

 
  await page.goto('https://demoqa.com/automation-practice-form');


  await expect(page).toHaveURL(/automation-practice-form/);

})
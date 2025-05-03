import { test, expect } from '@playwright/test';

test('Validación de título y búsqueda de producto', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');
  const frame = page.frameLocator('#frame1');
  await expect(frame.locator('h1')).toHaveText('This is a sample page');
});



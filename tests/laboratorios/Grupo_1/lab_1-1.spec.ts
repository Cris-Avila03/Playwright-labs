import { test, expect } from '@playwright/test';

test('Validación de título y búsqueda de producto', async ({ page }) => {
  await page.goto('https://opencart.abstracta.us/');
  await expect(page).toHaveTitle(/Your Store/);
  await page.getByPlaceholder('Search').fill("MacBook");
  await page.getByPlaceholder('Search').press('Enter');
  await expect(page).toHaveURL(/.*MacBook/);
  await expect(page.getByText('Your shopping cart is empty!')).not.toBeVisible();
  await await expect(page.locator('p.price').nth(0)).toBeVisible();
  await page.pause();
});



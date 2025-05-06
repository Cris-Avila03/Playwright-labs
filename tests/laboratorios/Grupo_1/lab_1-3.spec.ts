import { test, expect } from '@playwright/test';

test('Validación de título y resultados', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co');
  await page.getByPlaceholder('Buscar productos, marcas y más…').fill("silla gamer");
  await page.getByPlaceholder('Buscar productos, marcas y más…').press('Enter');
  await expect(page).toHaveURL(/.*silla-gamer/);
  await expect(page.getByText('No hay publicaciones que coincidan con tu búsqueda.')).not.toBeVisible();

  const titulos = page.locator('a.poly-component__title');
  const precios = page.locator('span.andes-money-amount__fraction');
  const totalResultados = await titulos.count();

  expect(await precios.count()).toBeGreaterThanOrEqual(totalResultados);

  for (let i = 0; i < totalResultados; i++) {
    await expect(titulos.nth(i)).toBeVisible();
    await expect(precios.nth(i)).toBeVisible();
  }

});
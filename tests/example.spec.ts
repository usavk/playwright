import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


  //await page.waitForTimeout(3000);
//   const fromElements = page.locator('div').filter({ hasText: /^From$/ });
  // await page.locator('div').filter({ hasText: /^From$/ }).nth(1).click();
  //await page.getByRole('combobox', { name: 'From' }).highlight();



// test('finding bus in redbus',async({page}) => {
//   await page.goto("https://www.redbus.in");
//   await page.getByRole('combobox', { name: 'From' });

//   await page.getByRole('combobox', { name: 'From' }).fill('Mumbai');
//   await page.getByRole('heading', { name: 'Mumbai' }).first().click();
//   await page.getByRole('combobox', { name: 'To' }).click();
//   await page.getByRole('combobox', { name: 'To' }).fill('Chennai');
//   await page.getByRole('heading', { name: 'Chennai', exact: true }).click();
//   await page.getByRole('combobox', { name: 'Select Date of Journey.' }).click();
//   await page.getByRole('button', { name: 'Friday, February 20,' }).click();
//   await page.getByRole('button', { name: 'Search buses' }).click();
//   await expect(page.getByText('buses found').nth(1)).toBeVisible();
// });
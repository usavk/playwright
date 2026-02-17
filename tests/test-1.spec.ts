import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.locator('#FormControl--_R_jahb_').getByRole('button', { name: 'Sign up for GitHub' }).click();
  await expect(page.getByRole('banner')).toContainText('Sign in →');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('df');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('df');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});
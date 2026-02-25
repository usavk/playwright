import {test, expect} from "@playwright/test";

test('Find bus from mumbai to chennai', async({page}) => {
    await page.goto("https://www.redbus.in/");
    await page.locator('div').filter({ hasText: /^From$/ }).nth(1).click();
    await page.getByRole('combobox', { name: 'From' }).fill('mumbai');
    await page.getByRole('combobox', { name: 'From' }).press('Enter');
    await page.getByRole('heading', { name: 'Mumbai', exact: true }).click();
    await page.getByRole('combobox', { name: 'To' }).fill('chennai');
    await page.getByRole('heading', { name: 'Chennai', exact: true }).click();
    await page.getByRole('combobox', { name: 'Select Date of Journey.' }).click();
    await page.getByRole('button', { name: 'Saturday, February 28,' }).click();
    await page.getByRole('button', { name: 'Search buses' }).click();
    await expect(page.getByText('buses found').nth(1)).toBeVisible();
});
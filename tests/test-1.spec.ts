import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


    await test.step("navigate", async () => {
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
    })

    
});

test('test1', async({page}) => {
    await page.goto('https://github.com/');
    await test.step('name',async() => {
        await page.screenshot({ path: 'example.png' });
    });
});

test('vasu',async({page}) => {
    await page.goto("https://youtube.com");
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
    await expect(page.locator('#owner').getByRole('link', { name: 'Testers Talk' })).toBeVisible();

    await expect(page.getByRole('button', { name: 'Subscribe to Testers Talk.' })).toBeVisible();
    
    await expect(page.locator('#above-the-fold')).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');
    await expect(page.getByRole('button', { name: 'Subscribe to Testers Talk.' })).toBeVisible();
    await expect(page.locator('#above-the-fold')).toMatchAriaSnapshot(`- text: /#1 Playwright Tutorial Full Course \\d+ \\| Playwright Testing Tutorial/`);
}); 


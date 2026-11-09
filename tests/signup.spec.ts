import { test, expect } from '@playwright/test';
import { signupPage } from '../pages/signup_page';

/*test.beforeEach(async ({ page }) => {
  test.setTimeout(220_000);
  await page.goto('https://bolt.playrealbrokerage.com/login');
  await page.waitForLoadState('load');
});

test('SignUp', async ({ page }) => {
  // Expect a title "to contain" a substring.
  test.setTimeout(220_000);
  const sp = new signupPage(page);
  await expect(page).toHaveTitle(/Login - Bolt/);
  await sp.clickrealsignup();
  await page.getByTestId('text-input-First Name').fill('muthu');
  await page.getByTestId('text-input-Last Name').fill('kumar');
  await page.getByTestId('text-input-Username').fill('kumar90');
  await page.getByTestId('email-input-Email').fill('kumar@yopmail.com');
  await page.getByTestId('password-input-Password').fill('Akumar1@3kuioA');
  await page.getByTestId('password-input-Password Confirmation').fill('Akumar1@3kuioA');

  await page.getByTestId('consentedToTerms').check();
  await page.getByTestId('consentedToCallMessage').check();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.pause();
});*/

test('google',async ({page})=>{
await page.goto("https://webdriveruniversity.com/");
});
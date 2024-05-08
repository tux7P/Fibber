import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', {name: 'Get started'}).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
});

test('new test', async ({page}) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', {name: 'Get started'}).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
});

test('CV Online registration', async ({page}) => {
  await page.goto('https://test.cv.ee/en');

  await page.getByRole('button', {name: 'Login | Register'}).click();

  await page.getByRole('button', {name: 'Registration'}).click();
  await page.getByRole('button', {name: 'For job seekers'}).click();
  await page.getByRole('button', {name: 'Register with email'}).click();

  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('demo@test.com');

  await page.getByLabel('PasswordIcons / 16 / input').click();
  await page.getByLabel('PasswordIcons / 16 / input').fill('23432423');

  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('Demo');
  await page.getByLabel('First name').press('Tab');

  await page.getByLabel('Last name').fill('Test');

  await page.locator('label').filter({hasText: 'I want to receive CV-Online'}).locator('span').first().click();
  await page.locator('label').filter({hasText: 'I agree to the Terms of use'}).locator('span').first().click();
  await page.locator('label').filter({hasText: 'I agree that my information'}).locator('span').first().click();

  await page.getByRole('button', {name: 'Register', exact: true}).click();
  // await expect(page).toHaveTitle(/Playwright/);
});

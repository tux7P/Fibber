import {Locator, Page} from '@playwright/test';

export class RegisterModalSelectors {
  private readonly page: Page;

  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly inputEmail: Locator;
  readonly inputPassword: Locator;
  readonly registerSuccess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputFirstName = page.locator('input[name="firstName"]');
    this.inputLastName = page.locator('input[name="lastName"]');
    this.inputEmail = page.locator('input[name="email"]');
    this.inputPassword = page.locator('input[name="password"]');
    this.registerSuccess = page.locator('[class="email-registration-success__text"]');
  }

  registerSuccessText(text: string): Locator {
    return this.page.locator('.email-registration-success__text').getByText(text);
  }

  emailValidationError(text: string): Locator {
    return this.page.locator('.input-text-tooltip--error').getByText(text);
  }

  passwordValidationError(text: string): Locator {
    return this.page.locator('.input-password-tooltip--error').getByText(text);
  }
}

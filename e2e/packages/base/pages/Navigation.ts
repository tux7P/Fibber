import {Page} from '@playwright/test';

export class Navigation {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openBaseUrl(): Promise<void> {
    await this.page.goto('https://test.cv.ee/en');
  }

  async isCookiesAcceptanceElementPresent() {
    const cookiesAcceptanceElement = await this.page.$('#c-p-bn');
    return cookiesAcceptanceElement !== null;
  }

  async acceptCookies(): Promise<void> {
    await this.page.locator('#c-p-bn').click();
  }

  async openLoginRegisterModal(): Promise<void> {
    await this.page.getByRole('button', {name: 'Login | Register'}).click();
  }

  async switchToRegistrationTab(): Promise<void> {
    await this.page.getByRole('button', {name: 'Registration'}).click();
  }

  async verifyLoginTabIsOpen(): Promise<void> {}

  async verifyRegistrationTabIsOpen(): Promise<void> {}
}

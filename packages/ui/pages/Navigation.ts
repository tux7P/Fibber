import {Page} from '@playwright/test';

export class Navigation {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openBaseUrlWithEnTranslation(): Promise<void> {
    await this.page.goto('/en');
  }

  async isCookiesBannerPresent() {
    const cookiesBanner = await this.page.$('#cm');
    return cookiesBanner !== null;
  }

  async acceptCookies(): Promise<void> {
    await this.page.locator('#c-p-bn').click();
  }

  async openHomePage(): Promise<void> {
    await this.openBaseUrlWithEnTranslation();

    if (await this.isCookiesBannerPresent()) {
      await this.acceptCookies();
    }

    await this.page.waitForLoadState('domcontentloaded');
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

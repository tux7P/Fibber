import {Page} from '@playwright/test';

export class RegistrationModal {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async chooseRegisterAsJobSeeker(): Promise<void> {
    await this.page.getByRole('button', {name: 'For job seekers'}).click();
  }

  async registerWithEmail(): Promise<void> {
    await this.page.getByRole('button', {name: 'Register with email'}).click();
  }

  async fillRegistrationForm(email: string, firstName: string, lastName: string): Promise<void> {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="firstName"]', firstName);
    await this.page.fill('input[name="lastName"]', lastName);
  }

  async clickRegisterButton(): Promise<void> {
    await this.page.click('button[type="submit"]');
  }

  async closeRegistrationModal(): Promise<void> {
    await this.page.click('button[aria-label="Close"]');
  }
}

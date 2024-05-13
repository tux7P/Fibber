import {expect, Page} from '@playwright/test';
import {RegisterModalSelectors} from '../selectors/RegisterModalSelector';
import {Navigation} from './Navigation';

export class RegistrationModal {
  private readonly page: Page;
  private readonly navigation: Navigation;

  private readonly selectors: RegisterModalSelectors;

  constructor(page: Page) {
    this.page = page;
    this.navigation = new Navigation(page);
    this.selectors = new RegisterModalSelectors(page);
  }

  async clickRegisterAsJobSeeker(): Promise<void> {
    await this.page.getByRole('button', {name: 'For job seekers'}).click();
  }

  async clickRegisterWithEmail(): Promise<void> {
    await this.page.getByRole('button', {name: 'Register with email'}).click();
  }

  async fillRegistrationForm(email: string, password: string, firstName: string, lastName: string): Promise<void> {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('input[name="firstName"]', firstName);
    await this.page.fill('input[name="lastName"]', lastName);
  }

  async clickRegisterButton(): Promise<void> {
    await this.page.click('button[type="submit"]');
  }

  async checkAgreeTerms(): Promise<void> {
    await this.page.locator('label').filter({hasText: 'I agree to the Terms of use'}).locator('span').first().click();
  }

  async checkAgreeGdpr(): Promise<void> {
    await this.page.locator('label').filter({hasText: 'I agree that my information'}).locator('span').first().click();
  }

  async closeRegistrationModal(): Promise<void> {
    await this.page.keyboard.press('Escape');
  }

  async verifyRegistrationModalIsClosed(): Promise<void> {
    await expect(this.page.locator('input[name="email"]')).toBeHidden();
    await expect(this.page.locator('input[name="password"]')).toBeHidden();
    await expect(this.page.locator('input[name="firstName"]')).toBeHidden();
    await expect(this.page.locator('input[name="lastName"]')).toBeHidden();
    await expect(this.page.locator('button[type="submit"]')).toBeHidden();
  }

  async verifyRegistrationIsSuccessful(): Promise<void> {
    await expect(
      this.selectors.registerSuccessText(
        'Your user has been created. Please check your email for the verification link.',
      ),
    ).toBeVisible();
    await expect(this.page.getByRole('button', {name: 'Login'})).toBeVisible();
  }

  async validateRegistrationFormIsVisible(): Promise<void> {
    await expect(this.page.locator('input[name="email"]')).toBeVisible();
    await expect(this.page.locator('input[name="password"]')).toBeVisible();
    await expect(this.page.locator('input[name="firstName"]')).toBeVisible();
    await expect(this.page.locator('input[name="lastName"]')).toBeVisible();
    await expect(this.page.locator('button[type="submit"]')).toBeVisible();
  }

  async goToRegistrationForm(): Promise<void> {
    await this.navigation.openLoginRegisterModal();
    await this.navigation.switchToRegistrationTab();
    await this.clickRegisterAsJobSeeker();
    await this.clickRegisterWithEmail();
    await this.validateRegistrationFormIsVisible();
  }

  async registerNewUser(email: string, password: string, firstName: string, lastName: string): Promise<void> {
    await this.fillRegistrationForm(email, password, firstName, lastName);
    await this.checkAgreeTerms();
    await this.checkAgreeGdpr();
    await this.clickRegisterButton();
  }

  async verifyDuplicateEmailErrorIsDisplayed(): Promise<void> {
    await expect(this.selectors.emailValidationError('This email is already in use.')).toBeVisible();
  }

  async verifyMinimumPasswordErrorIsDisplayed(): Promise<void> {
    await expect(this.selectors.passwordValidationError('Value is too short.')).toBeVisible();
  }
}

import { Page, Locator } from '@playwright/test';

export class signupPage {
  readonly page: Page;
  readonly realsignup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.realsignup = page.getByRole('link', { name: 'Join Real' });
  }

  async clickrealsignup() {
    this.realsignup.click();
  }
}

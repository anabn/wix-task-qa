import { expect, Page } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {
    this.page = page;
  }

  async openedURLIs(link: string) {
     await expect(this.page).toHaveURL(link);
  }
}

export { expect, Page } from "@playwright/test";

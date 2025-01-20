import { expect, Page } from "@playwright/test";
import { locators } from "./productStoreLocators";
import { BasePage } from "./base-page";

export class ProductStoreNavbar extends BasePage {
    constructor(public page: Page) {
        super(page);
    }

    async navigateToTab(tab: string) {
        await this.page.locator(`${locators.navbar}//a[contains(text(), '${tab}')]`).click();
    }

}

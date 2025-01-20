import { expect, Page } from "@playwright/test";
import { locators } from "./productStoreLocators";
import { BasePage } from "../base-page";

export class ProductStoreNavbar extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    async navigateToTab(tab: string) {
        await this.page.locator(locators.getNavbarTab(tab)).click();
        await this.page.waitForLoadState('domcontentloaded', { timeout: 10000 });
    }

}

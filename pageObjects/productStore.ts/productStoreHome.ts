import { expect, Page } from "@playwright/test";
import { locators } from "./productStoreLocators";
import { BasePage } from "../base-page";

export class ProductStoreHome extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    async clickOnCategory(category: string) {
        await this.page.locator(locators.categoryItem, { hasText: category } ).click();
    }

    async clickOnProduct(product: string) {
        await this.page.locator(locators.productItem).first().waitFor({ state: 'visible' });
        await this.page.locator(locators.productItem, { hasText: product } ).click();
    }

}

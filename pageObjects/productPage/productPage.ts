import { expect, Page } from "@playwright/test";
import { locators } from "./productPageLocators";
import { BasePage } from "../base-page";

export class ProductPage extends BasePage {
    
    constructor(public page: Page) {
        super(page);
    }

    async productNameShouldBe(productName: string) {
        await expect(this.page.locator(locators.productName)).toHaveText(productName);
    }

    async productPriceShouldBe(productPrice: number) {
        await expect(this.page.locator(locators.productPrice)).toContainText(`$${productPrice}`);
    }

    async addToCart() {
        await this.page.locator(locators.addToCartButton).waitFor({ state: 'visible' });
        await this.page.locator(locators.addToCartButton).click();
        await this.page.waitForLoadState('networkidle', { timeout: 20000 });
    }

    async acceptConfirmationMessage() {
        this.page.once('dialog', dialog => dialog.accept());
    }

}

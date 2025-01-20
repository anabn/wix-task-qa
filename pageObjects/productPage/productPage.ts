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
        await this.page.locator(locators.addToCartButton).click();
    }

    async confirmationMessageShouldAppear() {
        this.page.on('dialog', dialog => dialog.accept());
    }

}

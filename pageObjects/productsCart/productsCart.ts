import { expect, Page } from "@playwright/test";
import { locators } from "./productsCartLocators";
import { BasePage } from "../base-page";

export class ProductsCart extends BasePage {

    constructor(public page: Page) {
        super(page);
    }

    async shouldContainFollowingProducts(...productNames: string[]) {
        await this.page.locator(locators.productsNames).first().waitFor({ state: 'visible' });
        const addedProducts: string[] = await this.page.locator(locators.productsNames).allTextContents();
        expect(addedProducts).toEqual([...productNames]);
    }

    async shouldNotContainFollowingProduct(productName: string) {
        await this.page.locator(locators.productsNames).first().waitFor({ state: 'visible' });
        const addedProducts: string[] = await this.page.locator(locators.productsNames).allTextContents();
        expect(addedProducts).not.toContain(productName);
    }

    async countOfProductsIs(count: number) {
        await this.page.locator(locators.productPrice).first().waitFor({ state: 'visible' });
        const productCount: number = await this.page.locator(locators.productPrice).count();
        expect(productCount).toBe(count);
    }

     async productPriceShouldBe(productPrice: number) {
        await expect(this.page.locator(locators.productPrice)).toContainText(`$${productPrice}`);
    }

    async totalAmountIs(total: number) {
        await expect(this.page.locator(locators.totalAmount)).toContainText(`${total}`);
    }

    async submitOrder() {
        await this.page.locator(locators.placeOrderButton).click();
    }

}

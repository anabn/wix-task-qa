import { expect, Locator, Page } from "@playwright/test";
import { locators } from "./placeOrderPageLocators";
import { BasePage } from "../base-page";

export class PlaceOrderPage extends BasePage {

    private inputLocator: Locator;
    
    constructor(public page: Page) {
        super(page);
    }

    async fillField(field: string): Promise<this> {
        this.inputLocator = this.page.locator(locators.getInputForLabel(field));
        await this.inputLocator.isVisible();
        return this;
    }

    async withValue(value: string | number) {
        await this.inputLocator.fill(`${value}`);
        return this;
    }

    async isPresent() {
        await expect(this.page.locator(locators.placeOrderModal)).toBeVisible();
    }

    async successSubmissionOrderIsPresent() {
        await expect(this.page.locator(locators.successMessage)).toBeVisible();
    }

    async totalShouldBe(total: number) {
        await expect(this.page.locator(locators.totalAmount)).toContainText(`${total}`);
    }

    async clickOnPurchaseButton() {
        await this.page.locator(locators.getModalButtons('Purchase')).click();
        await this.page.waitForLoadState('networkidle');
    }

}

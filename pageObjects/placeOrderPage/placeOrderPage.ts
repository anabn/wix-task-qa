import { expect, Page } from "@playwright/test";
import { locators } from "./placeOrderPageLocators";
import { BasePage } from "../base-page";

export class PlaceOrderPage extends BasePage {
    
    constructor(public page: Page) {
        super(page);
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

    async enterName(name: string) {
        await this.page.locator(locators.getInputForLabel('name')).fill(name);
    }

    async enterCountry(country: string) {
        await this.page.locator(locators.getInputForLabel('country')).fill(country);
    }

    async enterCity(city: string) {
        await this.page.locator(locators.getInputForLabel('city')).fill(city);
    }

    async enterCard(creditCard: number) {
        await this.page.locator(locators.getInputForLabel('card')).fill(`${creditCard}`);
    }

    async enterMonth(month: number) {
        await this.page.locator(locators.getInputForLabel('month')).fill(`${month}`);
    }

    async enterYear(year: number) {
        await this.page.locator(locators.getInputForLabel('year')).fill(`${year}`);
    }

    async clickOnPurchaseButton() {
        await this.page.locator(locators.getModalButtons('Purchase')).click();
        await this.page.waitForLoadState('networkidle');
    }

}

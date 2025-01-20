import { defineConfig, expect, test } from "@playwright/test";
import { Pages } from "../pageObjects/pages";
import { Tab } from "../enums/navbarTabEnum";
import { Categories } from "../enums/categoriesEnum";

test.describe('@P1 @Regression user can add products to cart', () => { 
  const PHONE_TITLE: string = 'Nokia lumia 1520';
  const PHONE_PRICE: number = 820;

  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });
  
  test("user can add products to cart and receive total amount", async ({ page }) => {
    const pages = Pages(page);
    await pages.productStoreHome.clickOnCategory(Categories.PHONES);
    await pages.productStoreHome.clickOnProduct(PHONE_TITLE);
    await pages.productPage.productNameShouldBe(PHONE_TITLE);
    await pages.productPage.productPriceShouldBe(PHONE_PRICE);
    await pages.productPage.addToCart();
    await pages.productPage.confirmationMessageShouldAppear();

    await pages.productStoreNavbar.navigateToTab(Tab.CART);
    await pages.productsCart.countOfProductsIs(1);
    await pages.productsCart.shouldContainFollowingProducts(PHONE_TITLE);
    await pages.productsCart.shouldNotContainFollowingProduct("not-exisiting product");
    await pages.productsCart.totalAmountIs(PHONE_PRICE);
  });

  test("@P1 @Regression verify user is unable to login with invalid credentials", async ({ page }) => {
    const pages = Pages(page);
  });

});
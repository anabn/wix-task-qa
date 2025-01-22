import { defineConfig, expect, test } from "@playwright/test";
import { Pages } from "../pageObjects/pages";
import { Tab } from "../enums/navbarTabEnum";
import { Categories } from "../enums/categoriesEnum";
import { Product } from "../models/product";
import { User } from "../models/user";

const phone: Product = {
  title: 'Nokia lumia 1520',
  price: 820
};

const laptop: Product = {
  title: 'Dell i7 8gb',
  price: 700
};

const person: User = {
  name: 'Anna',
  country: 'Ukraine',
  city: 'Kyiv',
  creditCard: 1234567891234567,
  month: 8,
  year: 1999,
};

test.describe('@P1 @Regression Users can purchase the selected products', () => {   

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  
  test("Users can add products to their cart and view the total amount", async ({ page }) => {
    const pages = Pages(page);
    await pages.productStoreHome.clickOnCategory(Categories.PHONES);
    await pages.productStoreHome.clickOnProduct(phone.title);
    await pages.productPage.addToCart();
    await pages.productPage.acceptConfirmationMessage();
    await pages.productPage.productNameShouldBe(phone.title);
    await pages.productPage.productPriceShouldBe(phone.price);

    await pages.productStoreNavbar.navigateToTab(Tab.HOME);
    await pages.productStoreHome.clickOnCategory(Categories.LAPTOPS);
    await pages.productStoreHome.clickOnProduct(laptop.title);
    await pages.productPage.productNameShouldBe(laptop.title);
    await pages.productPage.productPriceShouldBe(laptop.price);
    await pages.productPage.addToCart();
    await pages.productPage.acceptConfirmationMessage();

    await pages.productStoreNavbar.navigateToTab(Tab.CART);
    await pages.productsCart.countOfProductsIs(2);
    await pages.productsCart.shouldContainFollowingProducts(laptop.title, phone.title);
    await pages.productsCart.shouldNotContainFollowingProduct("not-exisiting product");
    await pages.productsCart.totalAmountIs(phone.price + laptop.price);
  });

  test("Users can place an order for a selected product without needing to register", async ({ page }) => {
    const pages = Pages(page);
    await pages.productStoreHome.clickOnProduct(phone.title);
    await pages.productPage.addToCart();
    await pages.productPage.acceptConfirmationMessage();
    await pages.productStoreNavbar.navigateToTab(Tab.CART);
    await pages.productsCart.countOfProductsIs(1);
    await pages.productsCart.totalAmountIs(phone.price);
    await pages.productsCart.submitOrder();

    await pages.placeOrderPage.isPresent();
    await pages.placeOrderPage.totalShouldBe(phone.price);
    await (await pages.placeOrderPage.fillField('name')).withValue(person.name);
    await (await pages.placeOrderPage.fillField('country')).withValue(person.country);
    await (await pages.placeOrderPage.fillField('city')).withValue(person.city);
    await (await pages.placeOrderPage.fillField('card')).withValue(person.creditCard);
    await (await pages.placeOrderPage.fillField('month')).withValue(person.month);
    await (await pages.placeOrderPage.fillField('year')).withValue(person.year);
    await pages.placeOrderPage.clickOnPurchaseButton();
    await pages.placeOrderPage.successSubmissionOrderIsPresent();
  });

});

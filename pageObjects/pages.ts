import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { ProductStoreNavbar } from "./productStore.ts/productStoreNavbar";
import { ProductStoreHome } from "./productStore.ts/productStoreHome";
import { ProductPage } from "./productPage/productPage";
import { ProductsCart } from "./productsCart/productsCart";
import { PlaceOrderPage } from "./placeOrderPage/placeOrderPage";

export const Pages = (page: Page) => {
  return {
    productStoreNavbar: new ProductStoreNavbar(page),
    productStoreHome: new ProductStoreHome(page),
    productPage: new ProductPage(page),
    productsCart: new ProductsCart(page),
    placeOrderPage: new PlaceOrderPage(page),
    base: new BasePage(page),
  };
};

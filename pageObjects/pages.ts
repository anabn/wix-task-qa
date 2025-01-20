import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { ProductStoreNavbar } from "./productStoreNavbar";
import { ProductStoreHome } from "./productStoreHome";
import { ProductPage } from "./productPage/productPage";
import { ProductsCart } from "./productsCart/productsCart";

export const Pages = (page: Page) => {
  return {
    productStoreNavbar: new ProductStoreNavbar(page),
    productStoreHome: new ProductStoreHome(page),
    productPage: new ProductPage(page),
    productsCart: new ProductsCart(page),
    base: new BasePage(page),
  };
};


const productDetailRow = '//tr[@class="success"]';

export const locators = {
    productDetailRow : productDetailRow,
    productsNames : `${productDetailRow}/td[2]`,
    productPrice : `${productDetailRow}/td[3]`,

    totalAmount: '//h3[@id="totalp"]',
    placeOrderButton: '//button[text() = "Place Order"]',
}

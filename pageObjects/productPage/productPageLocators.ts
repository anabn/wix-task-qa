const productDetail = '//div[@id="tbodyid"]';

export const locators = {
    productDetail : productDetail,
    productName : `${productDetail}/h2`,
    productPrice : `${productDetail}/h3`,
    addToCartButton: `${productDetail}//a[contains(@class, 'btn btn-success btn-lg')]`,
};

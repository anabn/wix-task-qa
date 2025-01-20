const placeOrderModal = '//div[@id="orderModal"]';

export const locators = {
    placeOrderModal : placeOrderModal,
    totalAmount : '//label[@id="totalm"]',
    successMessage: '//div[contains(@class, "sweet-alert")]',
    getInputForLabel: (label: string) => {
        return `//label[@for='${label}']/following-sibling::input`;
    },
    getModalButtons: (text: string) => {
        return `//button[contains(text(), '${text}')]`;
    },
};

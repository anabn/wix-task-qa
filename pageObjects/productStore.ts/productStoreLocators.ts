const navbar = '//div[@id="navbarExample"]';

export const locators = {
    navbar : navbar,
    categoryItem : '//a[@id="itemc"]',
    productItem : '//div[@class="card-block"]//a',
    getNavbarTab: (tab: string) => {
        return `${locators.navbar}//a[contains(text(), '${tab}')]`;
    },

};

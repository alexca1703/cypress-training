class ShoppingCartPage {
    private proceedToCheckoutButton2: string

    constructor() {
        this.proceedToCheckoutButton2 = ".cart_navigation span";
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton2).click();
    }
}

export { ShoppingCartPage }

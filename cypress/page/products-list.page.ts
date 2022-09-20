class ProductsListPage {
    private addToCartButton: string;
    private proceedToCheckoutButton1: string

    constructor() {
        this.addToCartButton = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckoutButton1 = "[style*='display: block;'] .button-container > a";
    }

    public clickAddCartButton(): void {
        cy.get(this.addToCartButton).click();
    }

    public clickProceedCheckoutButton(): void {
        cy.get(this.proceedToCheckoutButton1).click();
    }
}

export { ProductsListPage }

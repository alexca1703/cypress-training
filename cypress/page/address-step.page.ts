class AddressStepPage {
    private continueCheckoutButton: string

    constructor() {
        this.continueCheckoutButton = "button[name=processAddress]";
    }

    public proceedToCheckout(): void {
        cy.get(this.continueCheckoutButton).click();
    }
}

export { AddressStepPage }

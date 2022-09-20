class AddressStepPage {
    private continueCheckoutButton: string

    constructor() {
        this.continueCheckoutButton = "button[name=processAddress]";
    }

    public clickContinueCheckoutButton(): void {
        cy.get(this.continueCheckoutButton).click();
    }
}

export { AddressStepPage }

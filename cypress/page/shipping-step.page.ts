class ShippingStepPage {
    private acceptTermsCheckbox: string;
    private continueCheckoutButton2: string

    constructor() {
        this.acceptTermsCheckbox = "input[name=cgv]";
        this.continueCheckoutButton2 = "button[name=processCarrier]";
    }

    public checkAcceptTerms(): void {
        cy.get(this.acceptTermsCheckbox).check();
    }

    public proceedToCheckout(): void {
        cy.get(this.continueCheckoutButton2).click();
    }
}

export { ShippingStepPage }

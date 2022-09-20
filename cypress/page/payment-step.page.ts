class PaymentStepPage {
    private paymentOption: string;
    private confirmOrderButton: string;
    private confirmOrderText: string;
    private orderCompleteLabel: string;
    private condition1: string;
    private completeOrderMessage: string;

    constructor() {
        this.paymentOption = ".bankwire";
        this.confirmOrderButton = "button";
        this.confirmOrderText = "I confirm my order";
        this.orderCompleteLabel = "#center_column > div > p > strong";
        this.condition1 = "have.text";
        this.completeOrderMessage = "Your order on My Store is complete.";
    }

    public clickPayByWire(): void {
        cy.get(this.paymentOption).click();
    }

    public clickConfirmOrderButton(): void {
        cy.get(this.confirmOrderButton).contains(this.confirmOrderText).click();
    }

    public checkOrderCompleteMessage(): void {
        cy.get(this.orderCompleteLabel).should(this.condition1,this.completeOrderMessage);
    }
}

export { PaymentStepPage }

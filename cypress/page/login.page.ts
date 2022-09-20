class LoginPage {
    private emailTextbox: string;
    private emailAddress: string;
    private passwordTextbox: string;
    private userPassword: string;
    private signButton: string;
    private signButtonTitle: string;


    constructor() {
        this.emailTextbox = "#email";
        this.emailAddress = "aperdomobo@gmail.com";
        this.passwordTextbox = "#passwd";
        this.userPassword = "WorkshopProtractor";
        this.signButton = "button";
        this.signButtonTitle = "Sign in";
    }

    public enterEmailAdress(): void {
        cy.get(this.emailTextbox).type(this.emailAddress);
    }

    public enterPassword(): void {
        cy.get(this.passwordTextbox).type(this.userPassword);
    }

    public clickSignInButton(): void {
        cy.get(this.signButton).contains(this.signButtonTitle).click();
    }
}

export { LoginPage }

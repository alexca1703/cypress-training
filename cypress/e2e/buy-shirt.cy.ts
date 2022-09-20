import {MenuContentPage, ProductsListPage, ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();


describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productsListPage.clickAddCartButton();
    productsListPage.clickProceedCheckoutButton();
    shoppingCartPage.clickProceedCheckoutButton();
    loginPage.enterEmailAdress();
    loginPage.enterPassword();
    loginPage.clickSignInButton();
    addressStepPage.clickContinueCheckoutButton();
    shippingStepPage.checkAcceptTerms();
    shippingStepPage.clickContinueCheckoutButton();
    paymentStepPage.clickPayByWire();
    paymentStepPage.clickConfirmOrderButton();
    paymentStepPage.checkOrderCompleteMessage();
  });
});

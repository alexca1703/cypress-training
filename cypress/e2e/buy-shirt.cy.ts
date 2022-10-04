import {
  MenuContentPage,
  ProductsListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

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
    productsListPage.addToCart();
    productsListPage.proceedToCheckout();
    shoppingCartPage.proceedToCheckout();
    loginPage.signIn();
    addressStepPage.proceedToCheckout();
    shippingStepPage.checkAcceptTerms();
    shippingStepPage.proceedToCheckout();
    paymentStepPage.payByBankWire();
    paymentStepPage.confirmOrder();
    paymentStepPage.verifyConfirmationMessage();
  });
});

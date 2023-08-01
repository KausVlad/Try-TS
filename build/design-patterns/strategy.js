"use strict";
class CreditCardPaymentMethod {
  processPayment() {
    console.log("Processing credit-card details");
  }
}
class PaypalPaymentMethod {
  processPayment() {
    console.log("Sending the user to PayPal for verification");
  }
}
class GooglePayMethod {
  processPayment() {
    console.log("Sending the user to Google to pay");
  }
}
class CheckoutFlow {
  checkout(selectedPayment) {
    const paymentMethod =
      selectedPayment.toLocaleLowerCase() === "credit-card"
        ? new CreditCardPaymentMethod()
        : selectedPayment.toLocaleLowerCase() === "paypal"
        ? new PaypalPaymentMethod()
        : new GooglePayMethod();
    paymentMethod.processPayment();
  }
}
const checkoutFlow = new CheckoutFlow();
checkoutFlow.checkout("Credit-Card");
//# sourceMappingURL=strategy.js.map

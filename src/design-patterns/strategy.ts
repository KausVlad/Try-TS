interface IPaymentMethod {
  processPayment(): void;
}

class CreditCardPaymentMethod implements IPaymentMethod {
  processPayment() {
    console.log("Processing credit-card details");
  }
}

class PaypalPaymentMethod implements IPaymentMethod {
  processPayment() {
    console.log("Sending the user to PayPal for verification");
  }
}

class GooglePayMethod implements IPaymentMethod {
  processPayment() {
    console.log("Sending the user to Google to pay");
  }
}

class CheckoutFlow {
  checkout(selectedPayment: "credit-card" | "paypal" | "google-pay") {
    const paymentMethod: IPaymentMethod =
      selectedPayment.toLocaleLowerCase() === "credit-card"
        ? new CreditCardPaymentMethod()
        : selectedPayment.toLocaleLowerCase() === "paypal"
        ? new PaypalPaymentMethod()
        : new GooglePayMethod();
    paymentMethod.processPayment();
  }
}

const checkoutFlow = new CheckoutFlow();

checkoutFlow.checkout("paypal");

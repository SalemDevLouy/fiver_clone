import PaymentProcessor from "./paymentprocess.js";

class PayPalAdapter extends PaymentProcessor {
    constructor(paypal) {
        super();
        this.paypal = paypal;
    }

    processPayment(amount) {
        this.paypal.pay(amount);
    }
}

class StripeAdapter extends PaymentProcessor {
    constructor(stripe) {
        super();
        this.stripe = stripe;
    }

    processPayment(amount) {
        this.stripe.charge(amount);
    }
}
export { StripeAdapter, PayPalAdapter };

class PaymentProcessor {
  processPayment(amount) {
    throw new Error("This method should be overridden");
  }
}

export default PaymentProcessor;

class PayPal {
    constructor() {
        console.log("Initialized PayPal API");
    }

    pay(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

export default PayPal;

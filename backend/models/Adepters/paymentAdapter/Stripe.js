class Stripe {
    constructor() {
        console.log("Initialized Stripe API");
    }

    charge(amount) {
        console.log(`Processing Stripe payment of $${amount}`);
    }
}

export default Stripe;

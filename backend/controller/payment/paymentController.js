// // controllers/paymentController.js
// const PayPalAdapter = require('../../models/Adepters/paymentAdapter/paymentAdapter.js');
// const StripeAdapter = require('../../models/Adepters/paymentAdapter/stripeAdapter.js');

// const processPayment = (req, res) => {
//     const { amount, method } = req.body;

//     let paymentAdapter;
//     if (method === 'paypal') {
//         paymentAdapter = new PayPalAdapter();
//     } else if (method === 'stripe') {
//         paymentAdapter = new StripeAdapter();
//     } else {
//         return res.status(400).send("Invalid payment method.");
//     }

//     paymentAdapter.processPayment(amount);
//     res.send(`Payment of ${amount} processed using ${method}`);
// };

// module.exports = { processPayment };

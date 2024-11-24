//import libraries
import express from "express";
import dotenv from "dotenv";
import userRout from "./routes/user.route.js";
import authRout from "./routes/auth.route.js";
import gigRout from "./routes/gig.route.js";
import orderRout from "./routes/order.route.js";
import conversationRout from "./routes/conversation.route.js";
import messageRout from "./routes/message.route.js";
import reviewRout from "./routes/review.route.js";
import testRout from "./routes/test.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//import { Database } from './utils/Database.js';
import { ProductFactory } from "./models/Factory/ProductFactory.js";
import {
  PayPalAdapter,
  StripeAdapter,
} from "./models/Adepters/paymentAdapter/paymentAdapter.js";
import PayPal from "./models/Adepters/paymentAdapter/Paypal.js";
import Stripe from "./models/Adepters/paymentAdapter/Stripe.js";
import ProductManager from "./models/ProductObs/ProductManager.js";
import ProductNotifier from "./models/ProductObs/ProductNotifier.js";
dotenv.config();
const app = express();
// development middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Payment Adapter tasting code

app.post("/pay", (req, res) => {
  const { amount, paymentMethod } = req.body;

  let paymentProcessor;

  switch (paymentMethod) {
    case "paypal":
      const paypal = new PayPal();
      paymentProcessor = new PayPalAdapter(paypal);
      break;
    case "stripe":
      const stripe = new Stripe();
      paymentProcessor = new StripeAdapter(stripe);
      break;
    default:
      return res.status(400).json({ message: "Unsupported payment method" });
  }

  paymentProcessor.processPayment(amount);
  res.json({
    message: `Payment of $${amount} processed using ${paymentMethod}`,
  });
});

//*********************** end **************************** */

// Singleton Pattern tasting code
// const db = new Database();
// db.connect();
//---------------------------------------------

// routes middleware
// app.use("/api/users", userRout);
// app.use("/api/auth", authRout);
// app.use("/api/gigs", gigRout);
// app.use("/api/conversations", conversationRout);
// app.use("/api/messages", messageRout);
// app.use("/api/orders", orderRout);
// app.use("/api/reviews", reviewRout);
// app.use("/api/test", testRout);

//error middleware

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).send(errorMessage);
});

// Product Factory Pattern tasting code

const product = ProductFactory.createProduct("freelanceWork", "design");
product.getDetails();

//Observer pattern tasting code ********************************
const productManager = new ProductManager();
const productNotifier = new ProductNotifier();
productManager.addObserver(productNotifier);

app.post("/addproduct", (req, res) => {
  const { productType, title} = req.body;
  const product = ProductFactory.createProduct(productType,title);
  productManager.addProduct(product);
  res.json({ message: `Product added: ${title}` });
});

// runing server
app.listen(8800, () => {
    
  console.log("Server is running on port 8800");
  console.log("---- SD Louy Dev ------------  MERN ------------  NextJS ---- ");
});

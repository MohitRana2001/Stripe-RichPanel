const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
const app = express();
const db = require('./connect');
const bodyParser = require('body-parser');

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/subscriptionApp', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up MongoDB schemas and models
// const User = require('./models/user');
// const Plan = require('./models/plan');
// const Subscription = require('./models/subscription');

// Set up middleware and routes
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// app.get('/', async (req, res) => {
//   const plans = await Plan.find();
//   res.render('index', { plans });
// });
app.get('/', (req, res) => {
    res.send("Stripe in progress");
  });

// app.post('/subscribe', async (req, res) => {
//   const { planId, token, email } = req.body;

//   try {
//     const plan = await Plan.findById(planId);
//     const customer = await stripe.customers.create({ email: email, source: token });
//     const subscription = await stripe.subscriptions.create({
//       customer: customer.id,
//       items: [{ price: plan.stripePriceId }],
//       billing: 'month', // or 'year'
//     });

//     // Store subscription details in MongoDB
//     const newSubscription = new Subscription({
//       userId: customer.id,
//       planId: planId,
//       stripeSubscriptionId: subscription.id,
//       billingInterval: 'month', // or 'year'
//     });
//     await newSubscription.save();

//     res.render('success', { subscription });
//   } catch (error) {
//     console.error(error);
//     res.send('An error occurred.');
//   }
// });

// Listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, (res) => {
  console.log(`Server is running on port ${PORT}`);
});

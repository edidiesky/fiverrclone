// This is your test secret API key.
import stripe from "stripe";
const stripeClient = stripe(process.env.STRIPE_API_KEY);

const stripeCheckout = async (req, res) => {
  const session = await stripeClient.checkout.sessions.create({
    line_items: [
      {
        amount: 2000,
        currency: 'usd',
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${window.location.origin}/profile`,
    cancel_url: `${window.location.origin}/order`,
  });

  res.json({ url: session.url });
};

export default stripeCheckout;

const express = require("express");
const cors = require("cors");
const { STRIPE_SECRET_KEY, FRONTEND_URL, PORT } = require("./config.js");
const stripe = require("stripe")(STRIPE_SECRET_KEY);

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
  })
);

app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  const items = req.body.items;
  const lineItems = items.map((item) => ({
    price: item.id,
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ url: session.url });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

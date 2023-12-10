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

  const successURL = `${FRONTEND_URL}/success`;
  const cancelURL = `${FRONTEND_URL}/cancel`;

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: successURL,
    cancel_url: cancelURL,
  });

  app.get("/cancel", (req, res) => {
    console.log("Request received on /cancel");
    res.send("Cancelación exitosa");
  });

  res.json({ url: session.url });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

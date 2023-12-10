module.exports = {
  REACT_APP_FRONTEND_URL:
    process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000", // Reemplaza con la URL correcta de tu frontend
  PORT: process.env.PORT || 4000, // Cambiado a 4000 para que coincida con el puerto en tu código
  STRIPE_SECRET_KEY:
    process.env.STRIPE_SECRET_KEY ||
    "sk_test_51OJSkAA0k2whc0wWjIcrhaeQxhwbjT3CMf6EEbSuCga4WYBU4dzqVaWuT05wSzWJ1SUnGNe8mmPWuxfDRJKPuRJb00y4095H20",
};

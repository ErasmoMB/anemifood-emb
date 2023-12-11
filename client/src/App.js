import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacto from "./pages/Contacto";
import LandbotComponent from "./components/LandbotComponent";

const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
const successURL = `${process.env.REACT_APP_FRONTEND_URL}/success`;
const cancelURL = `${process.env.REACT_APP_FRONTEND_URL}/cancel`;

function App() {
  return (
    <Router>
      <div>
        <CartProvider>
          <Navbar
            backendURL={backendURL}
            successURL={successURL}
            cancelURL={cancelURL}
          />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/productos"
                element={<Store backendURL={backendURL} />}
              />
              <Route
                path="/success"
                element={<Success successURL={successURL} />}
              />
              <Route
                path="/cancel"
                element={<Cancel cancelURL={cancelURL} />}
              />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </div>
          <LandbotComponent />
          <Footer />
        </CartProvider>
      </div>
    </Router>
  );
}
export default App;

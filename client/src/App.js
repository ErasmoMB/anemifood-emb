import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./Cart";

// Accede a la variable de entorno REACT_APP_BACKEND_URL
const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";
const successURL = `${process.env.REACT_APP_FRONTEND_URL}/success`;
const cancelURL = `${process.env.REACT_APP_FRONTEND_URL}/cancel`;
function App() {
  return (
    <div>
      <CartProvider>
        {/* Pasa la variable de entorno a Navbar */}
        <Navbar
          backendURL={backendURL}
          successURL={successURL}
          cancelURL={cancelURL}
        />
        <div className="container">
          <BrowserRouter>
            <Routes>
              {/* Pasa la variable de entorno a Store */}
              <Route path="/" element={<Store backendURL={backendURL} />} />
              <Route
                path="/success"
                element={<Success successURL={successURL} />}
              />
              <Route
                path="/cancel"
                element={<Cancel cancelURL={cancelURL} />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;

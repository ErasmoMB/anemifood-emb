import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import carrito from "../assets/images/carrito.png";
import { Cart } from "../Cart";
import CartProduct from "./CartProduct";
import "./navbar.css";

function Navbar() {
  const cart = useContext(Cart);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const checkout = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart.items }),
      }
    );

    try {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData.url);

      if (responseData.url) {
        window.location.assign(responseData.url);
      }
    } catch (error) {
      console.error("Error during checkout:", error.message);
    }
  };

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="AnemiFood Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">
                    Contacto
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src={carrito} alt="AnemiFood Logo" />
                  <span className="cantidad">{productsCount}</span>
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-dark text-white">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Carrito de Compras
                        </h1>
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        {productsCount > 0 ? (
                          <div>
                            {cart.items.map((product, index) => (
                              <CartProduct
                                id={product.id}
                                quantity={product.quantity}
                                key={index}
                              />
                            ))}

                            <h4>
                              Total:{" "}
                              {cart
                                .getTotal()
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")
                                .replace(/\,00/, "")}
                              €
                            </h4>
                          </div>
                        ) : (
                          <h4 className="text-danger">
                            Carrito de compras vacio
                          </h4>
                        )}
                      </div>
                      <div className="modal-footer">
                        {productsCount > 0 ? (
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={checkout}
                          >
                            Checkout
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

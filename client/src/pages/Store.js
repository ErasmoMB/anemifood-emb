import { arrayProducts } from "../Products";
import Product from "../components/Product";
import "./store.css";

function Store() {
  return (
    <div className="store-container container">
      <h1 className="mt-3 title">PREVIENE Y COMBATE LA ANEMIA</h1>
      <div className="row g-4 mt-2 mb-4">
        {arrayProducts.map((product, index) => (
          <div className="col-md-4" key={index}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;

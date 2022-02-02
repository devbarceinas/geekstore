import { useContext } from "react";
import { GeekContext } from "../../context/GeekContext";
import { Product } from "./Product";

import './Products.css';

const Products = () => {

  const {products} = useContext(GeekContext);

  return (
    <div className="products-container">
      {
        products.length === 0
        ? <h3>No hay productos disponibles</h3>
        : products.map((product) => (
          <Product
            key={product._id}
            product={product}
          />
        ))
      }
    </div>
  );
};

export { Products };
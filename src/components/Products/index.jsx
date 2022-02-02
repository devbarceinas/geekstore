import { useContext } from "react";
import { GeekContext } from "../../context/GeekContext";

const Products = () => {

  const {products} = useContext(GeekContext);
  console.log(products);

  return (
    <h1>Products</h1>
  );
};

export { Products };
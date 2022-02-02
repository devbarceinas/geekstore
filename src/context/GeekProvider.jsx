import { useGetProducts } from "../hooks/useGetProducts";
import { GeekContext } from "./GeekContext";

const GeekProvider = ({ children }) => {

  const products = useGetProducts();

  const data = {
    products,
  };

  return (
    <GeekContext.Provider value={data}>
      {children}
    </GeekContext.Provider>
  );
};

export { GeekProvider };
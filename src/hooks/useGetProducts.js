import { useEffect, useState } from 'react';
import { url } from '../config/url';

const useGetProducts = () => {
  const [ products, setProducts ] = useState([]);

  const getProducts = async () => {
    await url.get('/products')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;  
};

export { useGetProducts };
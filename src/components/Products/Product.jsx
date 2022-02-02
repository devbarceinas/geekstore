import './Product.css';

const Product = ({ product }) => {
  const { nombre, precio, imagen } = product;
  console.log(nombre, precio, imagen);
  return (
    <div 
      className='product-container'>
      <div className='product-container--img'>
        <img 
        src={`http://localhost:5000/${imagen}`} 
        alt={nombre}
        className='product-img'
        />
      </div>
      <h3>{nombre}</h3>
      <p className='product-price'>${precio}</p>
    </div>
  );
};

export { Product };

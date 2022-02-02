import { SearchProduct } from '../SearchProduct';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar-container'>
      <h1>{'<GeekStore/>'}</h1>
      <SearchProduct 
        type="text"
        placeholder='Busca tu playera favorita'
      />
      <p>Cart</p>
    </nav>
  );
};

export { NavBar };
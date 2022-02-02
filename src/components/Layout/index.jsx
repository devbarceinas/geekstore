import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout-container'>
      <div className='layout-min'>
        {children}
      </div>
    </div>
  );
};

export { Layout };
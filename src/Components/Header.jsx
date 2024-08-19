import React, { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { CartContext } from '../pages/Menu';

const Header = ({ toggleCart }) => {
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';
  const { cart } = useContext(CartContext) || {};
   const [isMenuOpen, setMenuOpen] = useState(false);
  const cartItemCount = cart ? cart.reduce((acc, item) => acc + (item.quantity || 1), 0) : 0;

  const handleMenuToggle = () => setMenuOpen(!isMenuOpen);

  return (
    <header className='bg-gray-700 p-4 fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex items-center justify-between flex-wrap'>
      <div className='md:hidden flex items-center'>
          <button onClick={handleMenuToggle} className='text-white'>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <a href='./' className='store-name text-2xl font-bold'>Pizza Bar</a>
        
        

        <nav className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-700 md:bg-transparent`}>
          <NavLink to="/" className="text-lg font-bold text-gray-300 hover:text-red-400">Home</NavLink>
          <NavLink to="/menu" className="text-lg font-bold text-gray-200 hover:text-red-400">Menu</NavLink>
          <NavLink to="/storebranches" className="text-lg font-bold text-gray-200 hover:text-red-400">Store Branches</NavLink>
          <NavLink to="/contactus" className="text-lg font-bold text-gray-200 hover:text-red-400">Contact Us</NavLink>
        </nav>

        <div className='flex items-center space-x-4'>
          <img src="/images/logo.png" alt="Logo" className="h-12 w-auto md:h-16" />
          {isMenuPage && (
            <button onClick={toggleCart} className='relative text-white font-bold py-2 px-4 rounded hover:bg-orange-700'>
              <FaShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1'>
                  {cartItemCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

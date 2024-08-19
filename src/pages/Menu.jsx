import React, { useState, useEffect, createContext } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { pizzaGenerator } from '../functions/pizzaGenerator';
import { filterArray } from '../functions/filterArray';
import pizzaArray from '../PizzaArray.json';
import Button from '../Components/Button';
import { sliceArray } from '../functions/sliceArray';
import NeBaButton from '../Components/NeBaButton';
import CartOverlay from '../Components/CartOverlay';

export const CartContext = createContext();

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');

  return savedCart ? JSON.parse(savedCart) : [];
};

const Menu = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [choose, setChoose] = useState('');
  const [currentArr, setCurrentArr] = useState(pizzaArray.slice(0, 3));//
  const [filteredArr, setFilteredArr] = useState(pizzaArray);
  const [pageNumber, setPageNumber] = useState(1);
   const [cart, setCart] = useState(loadCartFromLocalStorage());
  const [isCartOpen, setCartOpen] = useState(false); 
  const [totalPrice, setTotalPrice] = useState(0);
 

const handleAddToCart = (item) => {
  setCart(prevCart => {
    // Find if the item already exists in the cart
    const existingIndex = prevCart.findIndex(cartItem => cartItem.name === item.name);

    let updatedCart;
    if (existingIndex !== -1) {
      // Item already exists, update the quantity
      updatedCart = prevCart.map((cartItem, index) =>
        index === existingIndex
          ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
          : cartItem
      );
    } else {
      // Item does not exist, add it with quantity 1
      updatedCart = [...prevCart, { ...item, quantity: 1 }];
    }

    saveCartToLocalStorage(updatedCart);
     return updatedCart;
  });
};

  
  const handleRemoveFromCart = (id) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item.id !== id);
      saveCartToLocalStorage(updatedCart);
      setTotalPrice(updatedCart.reduce((acc, item) => acc + item.price, 0));
      return updatedCart;
    });
  };
  
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    setTotalPrice(0);
  };
  


  const toggleCart = () => {
    setCartOpen(!isCartOpen);

  };


  // Update filtered array whenever searchTerm or choose changes
  useEffect(() => {
    const newFilteredArr = filterArray(pizzaArray, choose, searchTerm);
    setFilteredArr(newFilteredArr);
    setCurrentArr(sliceArray(newFilteredArr,1)); // Reset to the first page
    setPageNumber(1); // Reset page number
  }, [searchTerm, choose]);

  // Update  when the component first mounts 
  useEffect(() => {
    setCart(loadCartFromLocalStorage());
  }, []);

  // Update total price whenever cart changes
  useEffect(() => {
    const newTotalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);
  
  
  

  const handleNextButtonClick = () => {
    if (pageNumber < Math.ceil(filteredArr.length /6)) {
      setCurrentArr(sliceArray(filteredArr, pageNumber + 1));
      setPageNumber(pageNumber + 1);
    }
  };

  const handleBackButtonClick = () => {
    if (pageNumber > 1) {
      setCurrentArr(sliceArray(filteredArr, pageNumber - 1));
      setPageNumber(pageNumber - 1);
    }
  };

  const handleButtonClick = (pageNumber) => {
    setCurrentArr(sliceArray(filteredArr, pageNumber));
    setPageNumber(pageNumber);
  };

  const buttonGenerator = (pages) => {
    let buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(<Button number={i} key={i} func={() => handleButtonClick(i)} page={pageNumber} />);
    }
    return buttons;
  };

  

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart,totalPrice}}>

    <div>
    <Header toggleCart={toggleCart} cart={cart} />
    <main className='container mx-auto mt-32 '>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <form className='flex flex-col sm:flex-row items-center gap-2 mt-3'>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for order..."
              value={searchTerm}
              className='border rounded px-4 py-2'
            />
            <select className='border-2 h-10' onChange={(e) => setChoose(e.target.value)} value={choose}>
              <option value="">Select a category</option>
              <option value="beer">Beer</option>
              <option value="pasta">Pasta</option>
              <option value="pizza">Pizza</option>
            </select>
          </form>
        </div>
        <div className='mt-2 mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
          {currentArr.length > 0 ? pizzaGenerator(currentArr) : <p>No results found.  try another product.</p>}
        </div>
        <div className='flex justify-center items-center gap-3 mt-4 mb-6'>
          <NeBaButton
            status="Back"
            func={handleBackButtonClick}
            disabled={pageNumber <= 1}
          />
          {buttonGenerator(Math.ceil(filteredArr.length /6))}
          <NeBaButton
            status="Next"
            func={handleNextButtonClick}
            disabled={pageNumber >= Math.ceil(filteredArr.length /6)}
          />
        </div>
     
       
      </main>
      {isCartOpen && <CartOverlay cartItems={cart} closeCart={toggleCart} />}
      <Footer />
      
    </div>
    </CartContext.Provider>

  );
};

export default Menu;
  
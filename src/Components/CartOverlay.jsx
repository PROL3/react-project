import React, { useContext } from 'react';
import { CartContext } from '../pages/Menu';

const CartOverlay = ({ cartItems, closeCart }) => {
  const { handleRemoveFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg z-50 p-4">
      <button
        onClick={closeCart}
        className='text-red-500 absolute top-4 right-4 text-2xl font-bold'
      >
        X
      </button>
      <h2 className='text-2xl font-bold mb-4'>Order Cart </h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between py-2 border-b">
               <span>{item.name} ({item.quantity})</span>
               <span>${item.price * item.quantity}</span>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="font-bold text-right text-gray-500">Total: ${totalPrice}</p>
    </div>
  );
};

export default CartOverlay;

import React, { useContext } from 'react';
import { CartContext } from '../pages/Menu';

const PizzaCard = ({ item }) => {
  const { handleAddToCart } = useContext(CartContext);

  const checkStrongBeer = (isStrong) => {
    return (
      <p className={`text-center ${isStrong ? "text-red-500" : "text-teal-500"}`}>
        The Beer is {isStrong ? "up" : "not up to"} 5%
      </p>
    );
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img className="w-full h-48 object-cover" src={item.image} alt="item image" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Name:</span> {item.name}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Description:</span> {item.description}
        </p>
        {item.type === "pizza"  && item.beer_pairing && (
          <p className="text-gray-700 text-base">
            <span className="font-bold text-blue-500">Best pairing beer:</span> {item.beer_pairing}
          </p>
        )}
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Price:</span> {item.price}$
        </p>
        {item.isStrong !== undefined && checkStrongBeer(item.isStrong)}
        <div className="flex justify-center items-center">
        <button
          onClick={() => handleAddToCart(item)}
          className=" mt-2 bg-gray-900 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add to order
        </button></div>
        
      </div>
    </div>
  );
};

export default PizzaCard;

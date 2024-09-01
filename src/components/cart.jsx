import React from 'react';
import { useCart } from '../context/FavoritesContext'; // Importing the useCart hook

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="flex bg-gray-900 text-gray-700 min-h-screen p-4">
      <main className="w-full p-4">
        <h2 className="text-2xl font-bold text-white mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-white">No items in the cart.</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {cartItems.map((mobile) => (
              <div key={mobile.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg relative">
                <div className="relative">
                  {mobile.inStock && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      In Stock
                    </span>
                  )}
                  <img
                    src={mobile.image}
                    alt={mobile.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold">{mobile.name}</h3>
                <p className="text-yellow-500 mt-2">
                  ${mobile.price} <span className="text-sm">★ {mobile.rating} ({mobile.reviews} reviews)</span>
                </p>
                <button
                  onClick={() => removeFromCart(mobile.id)}
                  className="bg-red-600 py-2 px-4 rounded-lg flex items-center mt-4"
                >
                  REMOVE <i className="fas fa-trash ml-2"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;

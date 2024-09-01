import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();
const CartContext = createContext(); // Add CartContext

export const useFavorites = () => useContext(FavoritesContext);
export const useCart = () => useContext(CartContext); // Add useCart

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Add state for cart items

  const addToFavorites = (mobile) => {
    setFavorites((prevFavorites) => [...prevFavorites, mobile]);
  };

  const addToCart = (mobile) => {
    setCartItems((prevCartItems) => [...prevCartItems, mobile]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    </FavoritesContext.Provider>
  );
};

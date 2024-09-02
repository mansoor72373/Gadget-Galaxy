import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 flex items-center justify-between h-12 px-4 text-white">
      {/* Logo Section */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'text-lg font-bold' : '')}
      >
        Gadget Galaxy
      </NavLink>

      {/* Search Bar */}
      <div className='flex-1 flex justify-center'>
        <input 
          type="text" 
          placeholder='Search' 
          className='p-1 w-[280px] rounded-full text-gray-800 outline-none' 
        />
      </div>

      {/* Navigation Links */}
      <div className='flex space-x-6'>
        <NavLink 
          to="/components/shop" 
          className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          Shop
        </NavLink>
        <NavLink 
          to="/components/favorites" 
          className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          Favorite
        </NavLink>
        <NavLink 
          to="/components/cart" 
          className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          Add to Cart
        </NavLink>
        <NavLink 
          to="/components/login" 
          className={({ isActive }) => isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"}>
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

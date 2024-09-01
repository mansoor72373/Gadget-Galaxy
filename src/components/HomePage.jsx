import React from 'react';
import { NavLink } from 'react-router-dom';
import { mobiles } from '../back-end/data'; // Adjust the path as necessary

const HomePage = () => {
  // Get the first Samsung, Apple, and OnePlus phones from the data
  const samsungPhone = mobiles.find(mobile => mobile.name.includes('Samsung'));
  const applePhone = mobiles.find(mobile => mobile.name.includes('iPhone'));
  const onePlusPhone = mobiles.find(mobile => mobile.name.includes('OnePlus'));

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: `url('/images/hero-banner.jpg')` }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold">Discover the Latest Smartphones</h1>
          <p className="mt-4">Find the best deals on your favorite brands</p>
          <NavLink to="/components/shop" className="mt-6 inline-block bg-blue-600 py-2 px-4 rounded-lg">
            Shop Now
          </NavLink>
        </div>
      </section>

      {/* Featured Products */}
      <section className="p-8 bg-gray-900">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="flex gap-6">
          {/* Samsung Phone */}
          <div className="bg-gray-800 p-4 rounded-lg flex-1">
            <h2 className="text-xl font-bold mb-4">Samsung Phone</h2>
            <img src={samsungPhone.image} alt={samsungPhone.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold">{samsungPhone.name}</h3>
            <p className="text-yellow-500">${samsungPhone.price}</p>
            <NavLink to={`/product/${samsungPhone.id}`} className="mt-4 inline-block bg-blue-600 py-2 px-4 rounded-lg">
              View Details
            </NavLink>
            <div className="mt-6">
              <NavLink to="/shops/SamsungShop" className="inline-block bg-blue-600 py-2 px-4 rounded-lg">
                See More Samsung Phones
              </NavLink>
            </div>
          </div>

          {/* Apple Phone */}
          <div className="bg-gray-800 p-4 rounded-lg flex-1">
            <h2 className="text-xl font-bold mb-4">Apple Phone</h2>
            <img src={applePhone.image} alt={applePhone.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold">{applePhone.name}</h3>
            <p className="text-yellow-500">${applePhone.price}</p>
            <NavLink to={`/product/${applePhone.id}`} className="mt-4 inline-block bg-blue-600 py-2 px-4 rounded-lg">
              View Details
            </NavLink>
            <div className="mt-6">
              <NavLink to="/shops/AppleShop" className="inline-block bg-blue-600 py-2 px-4 rounded-lg">
                See More Apple Phones
              </NavLink>
            </div>
          </div>

          {/* OnePlus Phone */}
          <div className="bg-gray-800 p-4 rounded-lg flex-1">
            <h2 className="text-xl font-bold mb-4">OnePlus Phone</h2>
            <img src={onePlusPhone.image} alt={onePlusPhone.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold">{onePlusPhone.name}</h3>
            <p className="text-yellow-500">${onePlusPhone.price}</p>
            <NavLink to={`/product/${onePlusPhone.id}`} className="mt-4 inline-block bg-blue-600 py-2 px-4 rounded-lg">
              View Details
            </NavLink>
            <div className="mt-6">
              <NavLink to="/shops/OnePlusShop" className="inline-block bg-blue-600 py-2 px-4 rounded-lg">
                See More OnePlus Phones
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;

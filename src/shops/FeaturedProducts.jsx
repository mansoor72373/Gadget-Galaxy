import React from 'react';

const FeaturedProducts = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Product Cards */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <img src="/images/product1.jpg" alt="Product 1" className="w-full h-40 object-cover rounded-lg" />
          <h3 className="mt-4 text-lg font-bold">iPhone 12</h3>
          <p className="text-yellow-500 mt-2">$799</p>
        </div>
        {/* Repeat similar product cards */}
      </div>
    </div>
  );
};

export default FeaturedProducts;

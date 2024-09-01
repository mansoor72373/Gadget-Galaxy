import React from 'react';

const AppleShop = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-2xl font-bold mb-6">Apple Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Product Cards */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <img src="/images/apple-product.jpg" alt="Apple Product" className="w-full h-40 object-cover rounded-lg" />
          <h3 className="mt-4 text-lg font-bold">iPhone 13 Pro</h3>
          <p className="text-yellow-500 mt-2">$999</p>
        </div>
        {/* Repeat similar product cards */}
      </div>
    </div>
  );
};

export default AppleShop;

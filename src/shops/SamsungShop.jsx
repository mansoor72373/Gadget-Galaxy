import React from 'react';
import { mobiles } from '../back-end/data'; // Adjust the path as necessary
import { NavLink } from 'react-router-dom';

const SamsungPhones = () => {
  // Filter Samsung phones from the data
  const samsungPhones = mobiles.filter(mobile => mobile.name.includes('Samsung'));

  return (
    <div className="bg-gray-900 text-white p-8">
      <h2 className="text-2xl font-bold mb-6">All Samsung Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {samsungPhones.map(phone => (
          <div key={phone.id} className="bg-gray-800 p-4 rounded-lg">
            <img src={phone.image} alt={phone.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="mt-4 text-lg font-bold">{phone.name}</h3>
            <p className="text-yellow-500 mt-2">${phone.price}</p>
            <NavLink to={`/product/${phone.id}`} className="mt-4 inline-block bg-blue-600 py-2 px-4 rounded-lg">
              View Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SamsungPhones;

import React, { useState } from 'react';
import { mobiles } from '../back-end/data'; // Importing the data
import { useFavorites, useCart } from '../context/FavoritesContext'; // Importing the useFavorites and useCart hooks

const Shop = () => {
  const { addToFavorites } = useFavorites();
  const { addToCart } = useCart(); // Add this line
  const [notification, setNotification] = useState({ message: '', mobileId: null, type: '' });
  const [search, setSearch] = useState('');
  const [priceSort, setPriceSort] = useState('none');
  const [range, setRange] = useState([0, 1000]); // Example range
  const [rating, setRating] = useState(0);
  const [categories, setCategories] = useState({
    Apple: false,
    Samsung: false,
    Oppo: false,
    outOfStock: false
  });

  const handleAddToFavorites = (mobile) => {
    addToFavorites(mobile);
    setNotification({ message: `Added ${mobile.name} to favorites!`, mobileId: mobile.id, type: 'favorite' });
    setTimeout(() => setNotification({ message: '', mobileId: null, type: '' }), 3000); // Hide notification after 3 seconds
  };

  const handleAddToCart = (mobile) => {
    addToCart(mobile);
    setNotification({ message: `Added ${mobile.name} to cart!`, mobileId: mobile.id, type: 'cart' });
    setTimeout(() => setNotification({ message: '', mobileId: null, type: '' }), 3000); // Hide notification after 3 seconds
  };

  // Filtered and sorted mobiles
  const filteredMobiles = mobiles
    .filter(mobile => 
      mobile.name.toLowerCase().includes(search.toLowerCase()) &&
      (categories[mobile.brand] || !categories[mobile.brand]) &&
      (categories.outOfStock ? mobile.inStock : true) &&
      mobile.price >= range[0] && mobile.price <= range[1] &&
      mobile.rating >= rating
    )
    .sort((a, b) => {
      if (priceSort === 'highToLow') return b.price - a.price;
      if (priceSort === 'lowToHigh') return a.price - b.price;
      return 0;
    });

  return (
    <div className="flex bg-gray-900 text-gray-700 min-h-screen p-4">
      <aside className="w-1/4 h-[700px] p-4 bg-gray-100 rounded-lg">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300"
          />
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-gray-800">Sort by Price</h3>
          <div className="mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                value="highToLow"
                checked={priceSort === 'highToLow'}
                onChange={(e) => setPriceSort(e.target.value)}
                className="mr-2"
              />
              High To Low
            </label>
            <label className="flex items-center mt-2">
              <input
                type="radio"
                name="price"
                value="lowToHigh"
                checked={priceSort === 'lowToHigh'}
                onChange={(e) => setPriceSort(e.target.value)}
                className="mr-2"
              />
              Low to High
            </label>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-gray-800">Sort by Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={range[0]}
            onChange={(e) => setRange([+e.target.value, range[1]])}
            className="w-full mt-2"
          />
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={range[1]}
            onChange={(e) => setRange([range[0], +e.target.value])}
            className="w-full mt-2"
          />
          <p className="text-sm text-gray-600 mt-2">Range: ${range[0]} - ${range[1]}</p>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-gray-800">Sort by Rating</h3>
          <div className="flex space-x-1 mt-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={rating === star}
                  onChange={(e) => setRating(+e.target.value)}
                  className="mr-2"
                />
                {[...Array(star)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-500"></i>
                ))}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-bold text-gray-800">Sort by Categories</h3>
          <div className="mt-2">
            {['Apple', 'Samsung', 'Oppo'].map((brand) => (
              <label key={brand} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={categories[brand]}
                  onChange={(e) => setCategories({ ...categories, [brand]: e.target.checked })}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={categories.outOfStock}
                onChange={(e) => setCategories({ ...categories, outOfStock: e.target.checked })}
                className="mr-2"
              />
              Exclude Out of Stock
            </label>
          </div>
        </div>
        <button
          onClick={() => {
            setSearch('');
            setPriceSort('none');
            setRange([0, 1000]);
            setRating(0);
            setCategories({
              Apple: false,
              Samsung: false,
              Oppo: false,
              outOfStock: false
            });
          }}
          className="bg-red-600 text-white py-2 px-4 rounded-lg w-full"
        >
          Clear Filters
        </button>
      </aside>

      <main className="w-3/4 p-4">
        <div className="grid grid-cols-3 gap-6">
          {filteredMobiles.map((mobile) => (
            <div key={mobile.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg relative">
              {notification.mobileId === mobile.id && notification.message && (
                <div
                  className={`absolute top-[-30px] right-0 text-xs px-2 py-1 rounded-lg ${notification.type === 'cart' ? 'bg-blue-500' : 'bg-green-500'} text-white`}
                >
                  {notification.message}
                </div>
              )}
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
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleAddToCart(mobile)}
                  className="bg-blue-600 text-white py-1 px-2 rounded-lg flex items-center text-sm transition-transform duration-200 transform hover:scale-105"
                >
                  ADD TO CART <i className="fas fa-shopping-cart ml-1"></i>
                </button>
                <button
                  onClick={() => handleAddToFavorites(mobile)}
                  className="bg-gray-600 text-white py-1 px-2 rounded-lg flex items-center text-sm transition-transform duration-200 transform hover:scale-105"
                >
                  WISHLIST <i className="fas fa-heart ml-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;

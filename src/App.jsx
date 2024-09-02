import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Shop from './components/Shop';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUpForm from './components/Signup';
import HomePage from './components/HomePage';
import AppleShop from './shops/AppleShop';
import SamsungShop from './shops/SamsungShop';
import FeaturedProducts from './shops/FeaturedProducts';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components/shop" element={<Shop />} />
        <Route path="/components/favorites" element={<Favorites />} />
        <Route path="/components/cart" element={<Cart />} />
        <Route path="/components/login" element={<Login />} />
        <Route path="/components/signup" element={<SignUpForm />} />
        <Route path="/shops/apple-shop" element={<AppleShop />} />
        <Route path="/shops/samsung-shop" element={<SamsungShop />} />
        <Route path="/shops/featured-products" element={<FeaturedProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

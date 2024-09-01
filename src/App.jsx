import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Shop from './components/Shop'
import Favorites from './components/favorites'
import Cart from './components/cart'
import Login from './components/Login'
import SignUpForm from './components/Signup';
import HomePage from './components/HomePage'
import AppleShop from './shops/AppleShop'
import SamsungShop from './shops/SamsungShop'
import FeaturedProducts from './shops/FeaturedProducts'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/components/Shop" element={<Shop />} />
        <Route path="/components/favorites" element={<Favorites />} />
        <Route path="/components/cart" element={<Cart />} />
        <Route path="/components/Login" element={<Login />} />
        <Route path="/components/Signiup" element={<SignUpForm />} />
        <Route path="/shops/AppleShop" element={<AppleShop />} />
        <Route path="/shops/SamsungShop" element={<SamsungShop />} />
        <Route path="/shops/FeaturedProducts" element={<FeaturedProducts />} />
       
        

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

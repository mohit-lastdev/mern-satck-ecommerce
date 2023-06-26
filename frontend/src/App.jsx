import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Home/Home";
import Nopage from './components/Nopage/Nopage';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';
import LoginSignUp from './components/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/UserAction';
import Profile from './components/User/Profile';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Cart from "./components/Cart/Cart";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:keyword' element={<Products />} />
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<LoginSignUp />} />
          {isAuthenticated && <Route path='/account' element={<Profile />} />}
          {isAuthenticated && <Route path='/me/update' element={<UpdateProfile />} />}
          {isAuthenticated && <Route path='/password/update' element={<UpdatePassword />} />}
          <Route path='/password/forgot' element={<ForgotPassword />} />
          <Route path='/password/reset/:token' element={<ResetPassword />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        {!window.location.href.includes('/search') && < Footer />}

      </BrowserRouter>
    </>
  )
}

export default App

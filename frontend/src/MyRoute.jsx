import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import About from './pages/About';
import Reserve from './pages/Reserve';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import RegisterForm from './pages/Register';

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegisterForm />} />  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoute;

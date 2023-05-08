import { useState, useEffect } from 'react'
import Cart from './components/Cart';
import Menu from './components/Menu';

import './styles/App.css';
import React, { Component } from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
     const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  <div className='layout-inner'>
    <Cart cart={cart} updateCart={updateCart} />
    <Menu cart={cart} updateCart={updateCart} />
  </div>
      <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        
      </div>
    );
  }

}

export default App;

import { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App () {
    const savedCart = localStorage.getItem('cart');
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
    
      <div className='layout-inner'>
        {/* <Cart cart={cart} updateCart={updateCart} />
        <Menu cart={cart} updateCart={updateCart} /> */}
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/menu" element={<Menu cart={cart} updateCart={updateCart} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
    );
  }

export default App;

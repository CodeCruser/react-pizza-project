import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <div  className='flex'>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/menu">Menu</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact</Link></div>
      </div>
    </nav>
  );
}

export default NavBar;

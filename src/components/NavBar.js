import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
import logo from '../assets/logop.png'

function NavBar() {
  return (
    <nav className='navbar'>
      <img src={logo}></img>
      <div  className='flex'>
        <Link to="/" className='flex-child'>Home</Link>
        <Link to="/menu" className='flex-child'>Menu</Link>
        <Link to="/about" className='flex-child'>About</Link>
        <Link to="/contact" className='flex-child'>Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;

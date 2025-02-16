import React from 'react';
import '../components/NAvbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">T-shirt Bazzar</div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for products..." />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="#cart" className="navbar-icon">🛒</a>
        <a href="#wishlist" className="navbar-icon">❤️</a>
        <a href="#login" className="navbar-icon"><i class="fa-solid fa-user"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
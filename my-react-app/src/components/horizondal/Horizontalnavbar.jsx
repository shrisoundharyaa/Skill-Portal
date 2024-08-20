import React from 'react';
import './horizontal.css'; // Include your styles here

function Navbar() {
  return (
    <nav className="horizontal-navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

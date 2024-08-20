import React from 'react';
import './vertical.css'; // Include your styles here

function VerticalNavbar() {
  return (
    <nav className="vertical-navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default VerticalNavbar;

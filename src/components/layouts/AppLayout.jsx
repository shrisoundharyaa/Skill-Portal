// eslint-disable-next-line no-unused-vars
import React from 'react';
import VerticalNavbar from '../vertical/VerticalNavbar';
import HorizontalNavbar from '../horizontal/HorizontalNavbar';
import '../../index.css';
import '../../App.css';


// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
  return (
    <div className="app-container">
      <VerticalNavbar />

        <HorizontalNavbar />  {/* Add the Horizontal Navbar */}
        <div className="page-content">
          {children} {/* Render children routes here */}
        </div>
      </div>
    
  );
}

export default AppLayout;

import React from 'react';
import './HorizontalNavbar.css';
import PersonIcon from '@mui/icons-material/Person'; // MUI icon

const HorizontalNavbar = () => {
  return (
    <nav className="horizontal-navbar">
      <div className="nav-content">
        {/* Other navbar content can go here */}
        <PersonIcon className="profile-icon" />
      </div>
    </nav>
  );
};

export default HorizontalNavbar;

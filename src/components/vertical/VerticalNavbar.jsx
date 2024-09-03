import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './verticalNavbar.css';

function VerticalNavbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [showStudentMenu, setShowStudentMenu] = useState(false);
  const [showFacultyMenu, setShowFacultyMenu] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);

  const handleLinkClick = (pathname) => {
    setActiveLink(pathname);
  };

  const handleToggleSubMenu = (role) => {
    switch (role) {
      case 'student':
        setShowStudentMenu(!showStudentMenu);
        break;
      case 'faculty':
        setShowFacultyMenu(!showFacultyMenu);
        break;
      case 'admin':
        setShowAdminMenu(!showAdminMenu);
        break;
      default:
        break;
    }
  };

  return (
    <div className="total-v-navbar">
      <h1 className="v-navbar-title">Skill Portal</h1>
      <div className={`menu-item ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>
        <Link to="/" className="link-style">
          <DashboardRoundedIcon className="nav-icons" />
          Home
        </Link>
      </div>
      <div className={`menu-item ${activeLink && activeLink.startsWith('/studentdashboard') ? 'active' : ''}`}>
        <div onClick={() => handleToggleSubMenu('student')}>
          <Link to="/studentdashboard" className="link-style">
            <SchoolIcon className="nav-icons" />
            Student Dashboard
          </Link>
        </div>
        {showStudentMenu && (
          <div className="submenu">
            <div className="submenu-item">
              <Link to="/studentdashboard/course-registration" className="submenu-link">
                <AssignmentIcon className="submenu-icon" />
                Course Registration
              </Link>
            </div>
            <div className="submenu-item">
              <Link to="/studentdashboard/dashboard" className="submenu-link">
                <DashboardIcon className="submenu-icon" />
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${activeLink && activeLink.startsWith('/facultydashboard') ? 'active' : ''}`}>
        <div onClick={() => handleToggleSubMenu('faculty')}>
          <Link to="/facultydashboard" className="link-style">
            <PersonIcon className="nav-icons" />
            Faculty Dashboard
          </Link>
        </div>
        {showFacultyMenu && (
          <div className="submenu">
            <div className="submenu-item">
              <Link to="/facultydashboard/course-filling" className="submenu-link">
                <AssignmentIcon className="submenu-icon" />
                Course Filling
              </Link>
            </div>
            <div className="submenu-item">
              <Link to="/facultydashboard/dashboard" className="submenu-link">
                <DashboardIcon className="submenu-icon" />
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className={`menu-item ${activeLink && activeLink.startsWith('/admindashboard') ? 'active' : ''}`}>
        <div onClick={() => handleToggleSubMenu('admin')}>
          <Link to="/admindashboard" className="link-style">
            <AdminPanelSettingsIcon className="nav-icons" />
            Admin Dashboard
          </Link>
        </div>
        {showAdminMenu && (
          <div className="submenu">
            <div className="submenu-item">
              <Link to="/admindashboard/allocating-course" className="submenu-link">
                <AssignmentIcon className="submenu-icon" />
                Allocating Course
              </Link>
            </div>
            <div className="submenu-item">
              <Link to="/admindashboard/allocating-faculty" className="submenu-link">
                <PersonIcon className="submenu-icon" />
                Allocating Faculty
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerticalNavbar;

import { useState } from 'react';
import './FloatingSidebar.css';
// import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RouteIcon from '@mui/icons-material/Route';

import { useNavigate } from 'react-router-dom';

const FloatingSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  

  return (
    <div>
      {/* <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button> */}
      <div
        className={`sidebar ${isHovered || isOpen ? 'open' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul>
          {/* <li onClick={() => navigate('/student')}>
            <HomeIcon className="icon" />
            <span>{isHovered || isOpen ? 'Dashbord' : ''}</span>
          </li> */}
          <li onClick={() => navigate('/courses')}>
            <MapIcon className="icon" />
            <span>{isHovered || isOpen ? 'Courses' : ''}</span>
          </li>
          <li onClick={() => navigate('/progress')}>
            <DirectionsBusIcon className="icon" />
            <span>{isHovered || isOpen ? 'Progress' : ''}</span>
          </li>
          <li onClick={() => navigate('/registration')}>
            <RouteIcon className="icon" />
            <span>{isHovered || isOpen ? 'Courses Available' : ''}</span>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default FloatingSidebar;

import { useState } from 'react';
import './FloatingSidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import RouteIcon from '@mui/icons-material/Route';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import { useNavigate } from 'react-router-dom';

const FloatingSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const toggleSidebar = () => setIsOpen(!isOpen); // Toggle sidebar manually

  return (
    <div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div
        className={`sidebar ${isHovered || isOpen ? 'open' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul>
          <li onClick={() => navigate('/')}>
            <HomeIcon className="icon" />
            <span>{isHovered || isOpen ? 'Home' : ''}</span>
          </li>
          <li onClick={() => navigate('/real')}>
            <MapIcon className="icon" />
            <span>{isHovered || isOpen ? 'Map' : ''}</span>
          </li>
          <li onClick={() => navigate('/buses')}>
            <DirectionsBusIcon className="icon" />
            <span>{isHovered || isOpen ? 'Buses' : ''}</span>
          </li>
          <li onClick={() => navigate('/routes')}>
            <RouteIcon className="icon" />
            <span>{isHovered || isOpen ? 'Routes' : ''}</span>
          </li>
          <li onClick={() => navigate('/depot')}>
            <WarehouseIcon className="icon" />
            <span>{isHovered || isOpen ? 'Depot' : ''}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingSidebar;

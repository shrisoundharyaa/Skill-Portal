import { useState } from 'react';
import './FloatingSidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
// import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
// import RouteIcon from '@mui/icons-material/Route';
// import WarehouseIcon from '@mui/icons-material/Warehouse';
import { useNavigate } from 'react-router-dom';


const AdminFloatingbar = () => {
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
          <li onClick={() => navigate('/admin')}>
            <HomeIcon className="icon" />
            <span>{isHovered || isOpen ? 'Courses' : ''}</span>
          </li>
          <li onClick={() => navigate('/admin/add-course')}>
            <MapIcon className="icon" />
            <span>{isHovered || isOpen ? 'AddCourses' : ''}</span>
          </li>
          {/* <li onClick={() => navigate('/buses')}>
            <DirectionsBusIcon className="icon" />
            <span>{isHovered || isOpen ? 'Progress' : ''}</span>
          </li>
          <li onClick={() => navigate('/routes')}>
            <RouteIcon className="icon" />
            <span>{isHovered || isOpen ? 'Faculty' : ''}</span>
          </li>
          <li onClick={() => navigate('/depot')}>
            <WarehouseIcon className="icon" />
            <span>{isHovered || isOpen ? 'Admin' : ''}</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AdminFloatingbar;

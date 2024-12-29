
import "./TopBar.css"; // Import the separate CSS file
import LogoutIcon from "@mui/icons-material/Logout"; // MUI icon import
import Lerlogo from "../assets/lerlogo.png"; // Import image
const TopBar = () => {
  const handleLogout = () => {
    alert("Logout action triggered!"); // Replace with your actual logout functionality
  };

  return (
    <div className="topbar">
      <div className="logo-container">
        <img
         src={Lerlogo}
          alt="Logo"
          className="topbar-logo"
        />
       
      </div>
      <div> <h1 className="topbar-title">Skill Portal</h1></div>
      <div className="logout-container">
        <LogoutIcon
          className="logout-icon"
          titleAccess="Logout"
          onClick={handleLogout}
        />
        
      </div>
    </div>
  );
};

export default TopBar;




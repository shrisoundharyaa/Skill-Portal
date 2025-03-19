import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar";
import FloatingSidebar from "../../components/FacultyFloatingbar";
function FacultyDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div>
      <TopBar />
      <FloatingSidebar />
      <h2>Faculty Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default FacultyDashboard;

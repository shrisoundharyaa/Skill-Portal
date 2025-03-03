import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" />;
  if (role && userRole !== role) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;

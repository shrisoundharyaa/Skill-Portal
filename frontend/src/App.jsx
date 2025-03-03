import { Routes, Route, Navigate } from "react-router-dom";
// import TopBar from "./components/TopBar";
// import FloatingSidebar from "./components/FloatingSidebar"; 
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import AddCourse from "./pages/admin/AddCourse";

function App() {
  return (
    <>
      {/* <TopBar />
      <FloatingSidebar /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      {/* admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
      


        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </>
  );
}

export default App;

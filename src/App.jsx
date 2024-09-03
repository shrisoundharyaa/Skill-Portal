import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // Import Home page
import StudentDashboard from './pages/student/StudentDashboard';  // Import Student Dashboard
import FacultyDashboard from './pages/faculty/FacultyDashboard';  // Import Faculty Dashboard
import AdminDashboard from './pages/admin/AdminDashboard';  // Import Admin Dashboard
import Courseregister from './pages/student/Courseregister';  // Import Course Register page
import DashboardStud from './pages/student/dashboardstud';  // Import Student-specific Dashboard
import CourseFilling from './pages/faculty/CourseFilling'; // Correct case
import DashboardFacul from './pages/faculty/dashboardfacul';


 
import AppLayout from './components/layouts/AppLayout';  // Import your AppLayout
import AllocatingCourse from './pages/admin/AllocatingCourse';  // Import Admin Allocating Course
import AllocatingFaculty from './pages/admin/AllocatingFaculty';  // Import Admin Allocating Faculty

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<AppLayout><Home /></AppLayout>} />

        {/* Student Dashboard Routes */}
        <Route path="/studentdashboard" element={<AppLayout><StudentDashboard /></AppLayout>} />
        <Route path="/studentdashboard/course-registration" element={<AppLayout><Courseregister /></AppLayout>} />
        <Route path="/studentdashboard/dashboard" element={<AppLayout><DashboardStud /></AppLayout>} />

        {/* Faculty Dashboard Routes */}
        <Route path="/facultydashboard" element={<AppLayout><FacultyDashboard /></AppLayout>} />
        <Route path="/facultydashboard/course-filling" element={<AppLayout><CourseFilling /></AppLayout>} />
        <Route path="/facultydashboard/dashboard" element={<AppLayout><DashboardFacul /></AppLayout>} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/admindashboard" element={<AppLayout><AdminDashboard /></AppLayout>} />
        <Route path="/admindashboard/allocating-course" element={<AppLayout><AllocatingCourse /></AppLayout>} />
        <Route path="/admindashboard/allocating-faculty" element={<AppLayout><AllocatingFaculty /></AppLayout>} />
      </Routes>
    </Router>
  );
}

export default App;

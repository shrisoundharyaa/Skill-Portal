import { useNavigate } from "react-router-dom"; // Import useNavigate
import AdminFloatingbar from "../../components/AdminFloatingbar";
import TopBar from "../../components/TopBar";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css"; // Import CSS file for styling

function AdminDashboard() {
  const navigate = useNavigate(); // Initialize navigate

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7001/admin/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <TopBar />
      <AdminFloatingbar />
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="course-grid">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course._id}
              className="course-card"
              onClick={() => navigate(`/admin/courses/${course.courseId}`)} //  Navigate to CourseDetails
              style={{ cursor: "pointer" }} // Make it look clickable
            >
              <img
                src={course.imageUrl || "https://via.placeholder.com/150"}
                alt={course.name}
                className="course-image"
              />
              <h3 className="course-name">{course.name}</h3>
              <p className="course-description">{course.description}</p>
              <p className="faculty-status">
                <strong>Faculty Status:</strong> {course.facultyStatus || "Pending"}
              </p>
              <p className="student-count">
                <strong>Students Enrolled:</strong> {course.studentsRegistered ? course.studentsRegistered.length : 0}
              </p>
            </div>
          ))
        ) : (
          <p className="no-courses">No courses available</p>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;

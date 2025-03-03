// eslint-disable-next-line no-unused-vars
import React from "react";
import TopBar from "../../components/TopBar";
import FloatingSidebar from "../../components/FloatingSidebar";
import "./StudentDashboard.css";

function StudentDashboard() {
  const studentData = {
    name: "Soundharyaa Shri",
    rollNo: "CSE22001",
    department: "Computer Science",
    profilePic: "/profile-placeholder.png", // Update with actual image
    ongoingCourses: [
      { id: 1, name: "Machine Learning" },
      { id: 2, name: "Cloud Computing" },
    ],
    completedCourses: [
      { id: 1, name: "Data Structures & Algorithms" },
      { id: 2, name: "Database Management Systems" },
    ],
  };

  return (
    <div className="student-dashboard">
      <TopBar title="Student Dashboard" />
      <FloatingSidebar />

      <div className="dashboard-container">
        {/* Profile Section */}
        <div className="student-info">
          <div className="profile-container">
            <img
              src={studentData.profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <h2>{studentData.name}</h2>
            <p><strong>Roll No:</strong> {studentData.rollNo}</p>
            <p><strong>Department:</strong> {studentData.department}</p>
          </div>
        </div>

        {/* Courses Section */}
        <div className="courses-section">
          <div className="course-card">
            <h3>Ongoing Courses</h3>
            <ul>
              {studentData.ongoingCourses.map((course) => (
                <li key={course.id}>{course.name}</li>
              ))}
            </ul>
          </div>

          <div className="course-card">
            <h3>Completed Courses</h3>
            <ul>
              {studentData.completedCourses.map((course) => (
                <li key={course.id}>{course.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
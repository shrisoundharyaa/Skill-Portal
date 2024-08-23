import React, { useState } from 'react';
import './dashboard.css';

function DashboardStud() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    { id: 1, name: 'Web Design', lessons: 10, progress: 50 },
    { id: 2, name: 'JavaScript', lessons: 12, progress: 30 },
  ];

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
  };

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <div className="courses-list">
        {courses.map((course) => (
          <button 
            key={course.id} 
            className="course-button" 
            onClick={() => handleCourseClick(course.id)}
          >
            <h3>{course.name}</h3>
            <p>{course.lessons} Lessons - {course.progress}% Complete</p>
            <div className="course-progress">
              <div className="course-progress-bar" style={{ width: `${course.progress}%` }}></div>
            </div>
          </button>
        ))}
      </div>

      {selectedCourse && (
        <div className="course-content">
          <h2>Course: {courses.find(course => course.id === selectedCourse).name}</h2>
          <div className="attendance-section">
            <h3>Attendance</h3>
            <p>Attendance details for this course will be shown here.</p>
          </div>
          <div className="feedback-form">
            <h3>Feedback Form</h3>
            <form>
              <label>
                Feedback:
                <textarea name="feedback" rows="4" cols="50"></textarea>
              </label>
              <br />
              <button type="submit">Submit Feedback</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardStud;

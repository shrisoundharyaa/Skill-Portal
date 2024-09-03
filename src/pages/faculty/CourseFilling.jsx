import React, { useState } from 'react';
import './CourseFilling.css';

const CourseFilling = () => {
  const [facultyName, setFacultyName] = useState('');
  const [facultyId, setFacultyId] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission and refresh the page
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { facultyName, facultyId, department, selectedCourse };

    // Log data locally or send to backend
    console.log('Form Submitted:', formData);

    // Simulate a submission process (or use an API call)
    try {
      const response = await fetch('https://your-backend-api.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form successfully submitted');
        setSubmitted(true);

        // Refresh the page after submission
        window.location.reload();
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Optionally clear form fields (but will refresh the page anyway)
    setFacultyName('');
    setFacultyId('');
    setDepartment('');
    setSelectedCourse('');
  };

  return (
    <div className="outer-container">
      <div className="course-filling-container">
        <h2>Course Selection Form</h2>

        {/* Success message */}
        {submitted && <p className="success-message">Form submitted successfully!</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="facultyName">Faculty Name:</label>
            <input
              type="text"
              id="facultyName"
              value={facultyName}
              onChange={(e) => setFacultyName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="facultyId">Faculty ID:</label>
            <input
              type="text"
              id="facultyId"
              value={facultyId}
              onChange={(e) => setFacultyId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="" disabled>Select your department</option>
              <option value="CSE">Computer Science & Engineering</option>
              <option value="ECE">Electronics & Communication Engineering</option>
              <option value="MECH">Mechanical Engineering</option>
              <option value="CIVIL">Civil Engineering</option>
              <option value="EEE">Electrical & Electronics Engineering</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course:</label>
            <select
              id="course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              required
            >
              <option value="" disabled>Select a course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
              <option value="course4">Course 4</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CourseFilling;

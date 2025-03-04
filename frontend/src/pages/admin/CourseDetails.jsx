  /* eslint-disable no-unused-vars */
  /* eslint-disable react-hooks/exhaustive-deps */
  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import axios from "axios";
  import "./CourseDetails.css";
  import TopBar from "../../components/TopBar";
  import AdminFloatingbar from "../../components/AdminFloatingbar";

  function CourseDetails() {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [facultyList, setFacultyList] = useState([]);
    const [selectedFaculty, setSelectedFaculty] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [assigning, setAssigning] = useState(false);
    const [requestSent, setRequestSent] = useState(false);

    useEffect(() => {
      fetchFacultyList();
      fetchCourseDetails();
    }, [courseId]);

    // Fetch Course Details
    const fetchCourseDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(`http://localhost:7001/admin/courses/${courseId}`, {
          headers: { "Content-Type": "application/json", Accept: "application/json" },
        });

        console.log("Fetched Course Data:", response.data);
        setCourse(response.data);
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError("Failed to fetch course details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    // Fetch Available Faculty
    const fetchFacultyList = async () => {
      try {
        const response = await axios.get("http://localhost:7001/admin/faculty", {
          headers: { "Content-Type": "application/json", Accept: "application/json" },
        });

        console.log("Fetched Faculty List:", response.data);
        setFacultyList(response.data);
      } catch (err) {
        console.error("Error fetching faculty list:", err);
      }
    };

    // Assign Faculty
    const assignFaculty = async () => {
      if (!selectedFaculty) {
        setError("Please select a faculty member.");
        return;
      }

      setAssigning(true);
      try {
        const response = await axios.post(`http://localhost:7001/admin/courses/${courseId}/assign`, {
          facultyId: selectedFaculty,
        });

        console.log("Faculty Assigned:", response.data);
        fetchCourseDetails(); // Refresh course details
      } catch (err) {
        console.error("Error assigning faculty:", err);
        setError("Failed to assign faculty. Please try again.");
      } finally {
        setAssigning(false);
      }
    };

    // Send Request to Faculty
    const sendFacultyRequest = async () => {
      try {
        const response = await axios.post(
          `http://localhost:7001/admin/courses/${courseId}/request-faculty`,
          {},
          { headers: { "Content-Type": "application/json", Accept: "application/json" } }
        );

        console.log("Faculty Request Sent:", response.data);
        setRequestSent(true);
      } catch (err) {
        console.error("Error sending faculty request:", err);
        setError("Failed to send request. Please try again.");
      }
    };

    if (loading) return <p>Loading...</p>;
    if (error)
      return (
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button onClick={fetchCourseDetails} className="retry-button">Retry</button>
        </div>
      );

    return (
      <div className="course-details-container">
        <TopBar />
        <AdminFloatingbar />

        <h1 className="course-title">{course?.name || "Course Name Not Found"}</h1>
        <p className="course-description">{course?.description || "No description available"}</p>

        {/* Faculty Assignment Section */}
        <div className="faculty-section">
          <h3>Faculty Assignment</h3>
          {course?.assignedFacultyName ? (
            <p><strong>Faculty:</strong> {course.assignedFacultyName}</p>
          ) : (
            <>
              <p><strong>Faculty:</strong> Not Assigned Yet</p>

              {/* Show Faculty Dropdown to Assign */}
              <select
                className="faculty-dropdown"
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
                <option value="">Select Faculty</option>
                {facultyList.map((faculty) => (
                  <option key={faculty.id} value={faculty.id}>
                    {faculty.name}
                  </option>
                ))}
              </select>

              <button
                className="assign-button"
                onClick={assignFaculty}
                disabled={assigning}
              >
                {assigning ? "Assigning..." : "Assign Faculty"}
              </button>

              {/* Send Request to Faculty Option */}
              {!requestSent ? (
                <button className="request-button" onClick={sendFacultyRequest}>
                  Send Request to Faculty
                </button>
              ) : (
                <p className="request-success">Request Sent Successfully ✅</p>
              )}
            </>
          )}
        </div>

        {/* Student Registration Count */}
        <div className="student-section">
          <h3>Registered Students</h3>
          <p><strong>Total:</strong> {course?.studentsRegistered?.length || 0}</p>
        </div>

        {/* Course Materials */}
        <div className="materials-section">
          <h3>Course Materials</h3>
          {course?.materials?.length > 0 ? (
            <ul>
              {course.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          ) : (
            <p>Not added yet</p>
          )}
        </div>
      </div>
    );
  }

  export default CourseDetails;

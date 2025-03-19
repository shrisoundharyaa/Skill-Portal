// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar";
import FloatingSidebar from "../../components/FacultyFloatingbar";
import axios from "axios";

const FacultyCourseRequests = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    const facultyId = localStorage.getItem("facultyId"); // Fetch facultyId from localStorage

    useEffect(() => {
        if (facultyId) {
            fetchCourseRequests();
        } else {
            console.error("Faculty ID not found in localStorage.");
        }
    }, []);

    const fetchCourseRequests = async () => {
        try {
            console.log(`Fetching Course Requests for Faculty ID: ${facultyId}`);
            const response = await axios.get(`http://localhost:7001/faculty/${facultyId}/course-requests`);
            console.log("Course Requests:", response.data);
            setRequests(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching course requests:", error);
            setLoading(false);
        }
    };

    const handleResponse = async (courseId, response) => {
        try {
            console.log(`Responding to Course: ${courseId} with ${response}`);
            await axios.post("http://localhost:7001/faculty/respond-to-course", {
                courseId,
                facultyId,
                response,
            });
            alert(`Course ${response} successfully!`);
            fetchCourseRequests(); // Refresh requests
        } catch (error) {
            console.error("Error updating course request:", error);
        }
    };

    if (loading) return <p>Loading course requests...</p>;

    return (
        <div>
            <TopBar />
            <FloatingSidebar />
            <h2>Pending Course Requests</h2>
            {requests.length === 0 ? (
                <p>No pending course requests.</p>
            ) : (
                <ul>
                    {requests.map((course) => (
                        <li key={course._id}>
                            <strong>{course.name}</strong>
                            <button
                                onClick={() => handleResponse(course._id, "Accepted")}
                                style={{ marginLeft: "10px", backgroundColor: "green", color: "white" }}
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleResponse(course._id, "Rejected")}
                                style={{ marginLeft: "5px", backgroundColor: "red", color: "white" }}
                            >
                                Reject
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FacultyCourseRequests;

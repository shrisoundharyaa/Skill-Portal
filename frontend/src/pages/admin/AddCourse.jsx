import AdminFloatingbar from "../../components/AdminFloatingbar";
import TopBar from "../../components/TopBar";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddCourse.css"; // Import CSS file

const AddCourse = () => {
    const [course, setCourse] = useState({
        courseId: "",
        name: "",
        description: ""
    });

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:7001/admin/add-course", course);
            toast.success(response.data.message || "Course added successfully!");
            setCourse({ courseId: "", name: "", description: "" }); // Clear form after submission
        } catch (error) {
            toast.error("Error adding course: " + error.response?.data?.error);
        }
    };

    return (
        <div className="add-course-container">
            <TopBar />
            <AdminFloatingbar />
            <div className="form-container">
                <h2>Add Course</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Course ID:</label>
                        <input type="text" name="courseId" value={course.courseId} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Course Name:</label>
                        <input type="text" name="name" value={course.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea name="description" value={course.description} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-btn">Add Course</button>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>
    );
};

export default AddCourse;

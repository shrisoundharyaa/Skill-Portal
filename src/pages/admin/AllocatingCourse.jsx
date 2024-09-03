import React, { useState } from 'react';
import './allocatingcourse.css';

const AllocatingCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseDescription, setCourseDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically send the data to your backend API
        const newCourse = {
            name: courseName,
            code: courseCode,
            description: courseDescription,
        };

        console.log('Course Data:', newCourse);

        // Reset form after submission
        setCourseName('');
        setCourseCode('');
        setCourseDescription('');
    };

    return (
        <div className="allocating-course-container">
            <h3>Add New Course</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="courseName">Course Name:</label>
                    <input
                        type="text"
                        id="courseName"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="courseCode">Course Code:</label>
                    <input
                        type="text"
                        id="courseCode"
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="courseDescription">Course Description:</label>
                    <textarea
                        id="courseDescription"
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Add Course
                </button>
            </form>
        </div>
    );
};

export default AllocatingCourse;

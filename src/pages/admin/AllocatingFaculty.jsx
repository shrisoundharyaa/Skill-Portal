import React, { useState, useEffect } from 'react';
import './allocatingfaculty.css';

const AllocatingFaculty = () => {
    const [courses, setCourses] = useState([]);
    const [faculties, setFaculties] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedFaculty, setSelectedFaculty] = useState('');

    useEffect(() => {
        // Fetch available courses and faculties from the backend API
        // Dummy data for demonstration
        setCourses([
            { id: 'course1', name: 'Course 1' },
            { id: 'course2', name: 'Course 2' },
            { id: 'course3', name: 'Course 3' },
        ]);

        setFaculties([
            { id: 'faculty1', name: 'Faculty 1' },
            { id: 'faculty2', name: 'Faculty 2' },
            { id: 'faculty3', name: 'Faculty 3' },
        ]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically send the data to your backend API
        const allocationData = {
            courseId: selectedCourse,
            facultyId: selectedFaculty,
        };

        console.log('Allocation Data:', allocationData);

        // Reset form after submission
        setSelectedCourse('');
        setSelectedFaculty('');
    };

    return (
        <div className="allocating-faculty-container">
            <h3>Assign Faculty to Course</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="course">Select Course:</label>
                    <select
                        id="course"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        required
                    >
                        <option value="">-- Select a Course --</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="faculty">Select Faculty:</label>
                    <select
                        id="faculty"
                        value={selectedFaculty}
                        onChange={(e) => setSelectedFaculty(e.target.value)}
                        required
                    >
                        <option value="">-- Select a Faculty --</option>
                        {faculties.map((faculty) => (
                            <option key={faculty.id} value={faculty.id}>
                                {faculty.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="submit-btn">
                    Assign Faculty
                </button>
            </form>
        </div>
    );
};

export default AllocatingFaculty;

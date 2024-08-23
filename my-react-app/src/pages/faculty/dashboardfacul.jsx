import React, { useState } from 'react';
import './facultydashboard.css';

const FacultyDashboard = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [students, setStudents] = useState([
        { id: 1, name: 'Student 1', present: false, marks: '' },
        { id: 2, name: 'Student 2', present: false, marks: '' },
        { id: 3, name: 'Student 3', present: false, marks: '' },
        { id: 4, name: 'Student 4', present: false, marks: '' },
    ]);

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    const handleInputChange = (index, field, value) => {
        const newStudents = [...students];
        newStudents[index][field] = value;
        setStudents(newStudents);
    };

    const handleSubmit = () => {
        alert('Submitted!');
    };

    return (
        <div className="faculty-dashboard-container">
            <h3 className="dashboard-title">Course</h3>
            
            <div className="course-selection">
                
                <select id="course" value={selectedCourse} onChange={handleCourseChange}>
                    <option value="">-- Select a Course --</option>
                    
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                    <option value="course3">Course 3</option>
                </select>
            </div>

            {selectedCourse && (
                <div className="table-container">
                    <table className="dashboard-table">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Present</th>
                                <th>Daily Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>
                                        <input
                                            className="box-input"
                                            type="checkbox"
                                            checked={student.present}
                                            onChange={(e) =>
                                                handleInputChange(index, 'present', e.target.checked)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="box-input"
                                            type="text"
                                            placeholder="Enter marks"
                                            value={student.marks}
                                            onChange={(e) =>
                                                handleInputChange(index, 'marks', e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="dashboard-submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default FacultyDashboard;

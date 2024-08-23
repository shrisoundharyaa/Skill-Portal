import React, { useState } from 'react';
import './Courseregister.css';

function Courseregister() {
  const [skillType, setSkillType] = useState('');
  const [courseOptions, setCourseOptions] = useState([]);

  const handleSkillChange = (event) => {
    const selectedSkill = event.target.value;
    setSkillType(selectedSkill);

    // Update course options based on the selected skill
    if (selectedSkill === 'night') {
      setCourseOptions(['Night Course 1', 'Night Course 2', 'Night Course 3']);
    } else if (selectedSkill === 'day') {
      setCourseOptions(['Day Course 1', 'Day Course 2', 'Day Course 3']);
    } else {
      setCourseOptions([]);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Skill Registration Form</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Roll Number:</label>
          <input type="text" name="rollNumber" required />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input type="text" name="department" required />
        </div>
        <div className="form-group">
          <label>Skill:</label>
          <select name="skill" value={skillType} onChange={handleSkillChange} required>
            <option value="">Select Skill</option>
            <option value="night">Night Skill</option>
            <option value="day">Day Skill</option>
          </select>
        </div>
        {skillType && (
          <div className="form-group">
            <label>Course:</label>
            <select name="course" required>
              <option value="">Select Course</option>
              {courseOptions.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>
        )}
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default Courseregister;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/api";
import bitLogo from "../../assets/bit-logo.png"; // Correct path

import "./Register.css"; 

function Register() {
  const [user, setUser] = useState({ username: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("User Data Before API Call:", user);
    try {
      await registerUser(user);
      alert("Registration Successful! Please Login.");
      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
      console.error("Register Error:", error.response?.data?.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={bitLogo} alt="BIT Logo" />
        <h2>Skill Portal</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"  
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
          />
            <input
            type="String"
            placeholder="Rollnumber"
            value={user.rollnumber}
            onChange={(e) => setUser({ ...user, rollnumber: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <button onClick={() => navigate("/login")}>Login here</button>
        </p>
      </div>
    </div>
  );
}

export default Register;

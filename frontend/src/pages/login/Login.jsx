import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";
import toast from "react-hot-toast";

 
function Login() {
  const [username, setUsername] = useState("");
  const [rollnumber, setRollnumber] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, rollnumber });
  
      console.log("Login Response:", response.data); // Debugging
  
      localStorage.setItem("token", response.data.token); // Store JWT Token
  
      // Ensure role is correctly retrieved
      const userRole = response.data.role;
      console.log("User Role:", userRole); // Debugging
  
      if (userRole === "admin") navigate("/admin");
      else if (userRole === "faculty") navigate("/faculty");
      else if (userRole === "student") navigate("/student");
      else console.error("Unknown role received:", userRole); // Log unexpected role
  
      toast.success("Login successful!");
    } catch (error) {
      alert("Invalid Credentials");
      console.error("Login Error:", error.response?.data?.message);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="String" placeholder="roll number" value={rollnumber} onChange={(e) => setRollnumber(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

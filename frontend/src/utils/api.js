import axios from "axios";

const API_URL = "http://localhost:7001/api/auth"; // Change this based on your backend URL

// Login API Call
export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

// Register API Call
export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

// Fetch Current User
export const getUser = async (token) => {
  return await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

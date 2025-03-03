const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const register = async (req, res) => {
    try {
        console.log("Incoming Data:", req.body); // Log incoming data

        const { username, rollnumber ,password, role } = req.body;

        // Validate input fields
        if (!username || !rollnumber || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already taken" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username,rollnumber , password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: `User registered with username ${username}` });
    } catch (err) {
        console.error("Registration Error:", err); // Log actual error
        res.status(500).json({ message: "Something went wrong" });
    }
};

const login = async (req, res) => {
    try {
        console.log("Login Data:", req.body); // Log incoming login data

        const { username, rollnumber } = req.body;

        // Find user in database using both username and rollnumber
        const user = await User.findOne({ username, rollnumber });

        if (!user) {
            return res.status(404).json({ message: "Invalid username or roll number" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role }, // Include role in token
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        console.log("User Role:", user.role); // Debugging

        // Send role in response
        res.status(200).json({ token, role: user.role });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Something went wrong" });
    }
};



module.exports = { register, login };

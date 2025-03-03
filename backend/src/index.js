const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors"); 
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const dbConnect = require("./config/dbConnect");
const adminRoutes = require('./routes/adminRoutes');
const facultyRoutes = require("./routes/facultyRoutes");

dbConnect();

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

// Middleware
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/admin", adminRoutes);
app.use("/faculty", facultyRoutes);

// Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

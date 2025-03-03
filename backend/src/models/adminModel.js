const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true }, // Ensure it's required and unique
    name: { type: String, required: true },
    description: { type: String, required: true },
    assignedFaculty: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    studentsRegistered: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    facultyStatus: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;

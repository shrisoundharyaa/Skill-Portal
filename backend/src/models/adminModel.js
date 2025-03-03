const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseId: { type: String, required: true, unique: true }, 
    name: { type: String, required: true },
    description: { type: String, required: true },
    assignedFaculty: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Faculty ID
    assignedFacultyName: { type: String }, // Faculty Name
    assignedFacultyRollNumber: { type: String }, // Faculty Roll Number
    studentsRegistered: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    facultyStatus: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
    materials: [{ type: String }]
});

module.exports = mongoose.model("Course", courseSchema);

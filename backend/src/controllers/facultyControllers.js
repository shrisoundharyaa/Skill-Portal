const Course = require("../models/adminModel");
const User = require("../models/userModel");

const mongoose = require("mongoose");
exports.respondToCourse = async (req, res) => {
    try {
        let { courseId, facultyId, response } = req.body;

        // 🔹 Find course using courseId (string)
        const course = await Course.findOne({ courseId: courseId });
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        // 🔹 Check if faculty is assigned to this course
        if (course.assignedFaculty && course.assignedFaculty.toString() !== facultyId) {
            return res.status(403).json({ error: "Unauthorized! You are not assigned to this course." });
        }

        // 🔹 Validate response
        if (!["Accepted", "Rejected"].includes(response)) {
            return res.status(400).json({ error: "Invalid response. Use 'Accepted' or 'Rejected'." });
        }

        // 🔹 Update status
        course.facultyStatus = response;
        await course.save();

        res.json({ message: `Faculty ${response} the course successfully.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

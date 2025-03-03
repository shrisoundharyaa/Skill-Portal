const User = require("../models/userModel");
const Course = require("../models/adminModel");


// Get all students
exports.getStudents = async (req, res) => {
    try {
        const students = await User.find({ role: "student" });
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all faculty
exports.getFaculty = async (req, res) => {
    try {
        const faculty = await User.find({ role: "faculty" });
        res.json(faculty);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//  Assign faculty to a course


const mongoose = require("mongoose");

exports.assignFaculty = async (req, res) => {
    try {
        const { facultyId, courseId } = req.body;

        // Validate facultyId
        if (!mongoose.Types.ObjectId.isValid(facultyId)) {
            return res.status(400).json({ error: "Invalid facultyId format" });
        }

        // Find faculty by ObjectId
        const faculty = await User.findById(facultyId);
        if (!faculty) {
            return res.status(404).json({ error: "Faculty not found" });
        }

        // Find course by courseId (not _id)
        const course = await Course.findOne({ courseId: courseId });
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        // Assign faculty to the course
        course.assignedFaculty = facultyId;
        await course.save();

        res.json({ message: "Faculty assigned successfully", course });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



//  Add a new course
exports.addCourse = async (req, res) => {
    try {
        console.log("Incoming Course Data:", req.body); // Debugging log

        const { courseId, name, description } = req.body;

        if (!courseId || !name || !description) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if courseId already exists
        const existingCourse = await Course.findOne({ courseId });
        if (existingCourse) {
            return res.status(400).json({ error: "Course ID already exists" });
        }

        const newCourse = new Course({ courseId, name, description });
        await newCourse.save();

        res.json({ message: "Course added successfully", course: newCourse });
    } catch (err) {
        console.error("Add Course Error:", err); // Debugging log
        res.status(500).json({ error: err.message });
    }
};

//courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find(); //.populate("assignedFaculty").populate("studentsRegistered")
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
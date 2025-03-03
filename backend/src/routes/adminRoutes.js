const express = require("express");
const {getStudents, getFaculty , assignFaculty, addCourse,getCourses } = require("../controllers/adminControllers");
const router = express.Router();

// Get all students
router.get("/students", getStudents);

// Get all faculty
router.get("/faculty", getFaculty);

// Assign faculty to course
router.post("/request-faculty", assignFaculty);

// Add a new course
router.post("/add-course", addCourse);
//get courses
router.get("/courses", getCourses);

module.exports = router;

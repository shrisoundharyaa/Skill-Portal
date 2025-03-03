const express = require("express");
const { respondToCourse } = require("../controllers/facultyControllers");
const router = express.Router();

// Faculty Accept/Reject Course
router.post("/respond-course", respondToCourse);

module.exports = router;

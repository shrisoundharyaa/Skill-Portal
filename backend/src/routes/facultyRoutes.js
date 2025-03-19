const express = require("express");
const router = express.Router();
const facultyController = require("../controllers/facultyControllers");

// ✅ Fetch pending course requests
router.get("/:facultyId/course-requests", facultyController.getCourseRequests);

// ✅ Faculty accepts or rejects the course
router.post("/respond-to-course", facultyController.respondToCourse);

module.exports = router;

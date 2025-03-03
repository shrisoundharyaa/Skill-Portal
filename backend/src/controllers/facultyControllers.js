exports.respondToCourse = async (req, res) => {
    try {
        let { courseId, facultyId, response, actionBy } = req.body; // actionBy can be 'admin' or 'faculty'

        // 🔹 Find course using courseId
        const course = await Course.findOne({ courseId: courseId });
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        // 🔹 Validate faculty existence and role
        const faculty = await User.findById(facultyId);
        if (!faculty || faculty.role !== "faculty") {
            return res.status(403).json({ error: "Unauthorized! Only faculty can be assigned." });
        }

        // 🔹 If admin is sending a request to faculty
        if (actionBy === "admin") {
            if (course.assignedFaculty) {
                return res.status(400).json({ error: "Faculty already assigned to this course." });
            }
            course.assignedFaculty = facultyId;
            course.facultyStatus = "Pending"; // Mark as pending
            await course.save();
            return res.json({ message: "Request sent to faculty. Waiting for faculty response." });
        }

        // 🔹 If faculty is responding to the request
        if (actionBy === "faculty") {
            if (!course.assignedFaculty || course.assignedFaculty.toString() !== facultyId) {
                return res.status(403).json({ error: "Unauthorized! You were not requested for this course." });
            }

            // 🔹 Validate faculty response
            if (!["Accepted", "Rejected"].includes(response)) {
                return res.status(400).json({ error: "Invalid response. Use 'Accepted' or 'Rejected'." });
            }

            // 🔹 Update faculty status
            course.facultyStatus = response;
            await course.save();

            return res.json({ message: `Faculty ${response} the course successfully.` });
        }

        res.status(400).json({ error: "Invalid action." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

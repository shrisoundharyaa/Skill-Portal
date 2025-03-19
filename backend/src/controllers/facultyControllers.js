exports.getCourseRequests = async (req, res) => {
    try {
        const { facultyId } = req.params;
        const courses = await Course.find({ assignedFaculty: facultyId, facultyStatus: "Pending" });
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.respondToCourse = async (req, res) => {
    try {
        let { courseId, facultyId, response } = req.body;
        const course = await Course.findOne({ _id: courseId });
        if (!course) return res.status(404).json({ error: "Course not found" });

        const faculty = await User.findById(facultyId);
        if (!faculty || faculty.role !== "faculty") return res.status(403).json({ error: "Unauthorized!" });

        if (course.assignedFaculty.toString() !== facultyId) {
            return res.status(403).json({ error: "Unauthorized! You were not requested for this course." });
        }

        if (!["Accepted", "Rejected"].includes(response)) {
            return res.status(400).json({ error: "Invalid response. Use 'Accepted' or 'Rejected'." });
        }

        course.facultyStatus = response;
        await course.save();
        return res.json({ message: `Faculty ${response} the course successfully.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

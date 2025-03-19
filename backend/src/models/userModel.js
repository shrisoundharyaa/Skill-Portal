const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    rollnumber: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "faculty", "student"],
    },
    coursesAssigned: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Course" 
    }], // Only for faculty
    coursesEnrolled: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Course" 
    }], // Only for students
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);

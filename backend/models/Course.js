const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  studentList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  attendance: [{ studentId: mongoose.Schema.Types.ObjectId, date: Date, present: Boolean }],
});

module.exports = mongoose.model('Course', courseSchema);

import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  courseName: { type: String, required: true },
  facultyId: { type: Schema.Types.ObjectId, ref: 'User' },
  studentList: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  attendance: [{ studentId: Schema.Types.ObjectId, date: Date, present: Boolean }],
});

export default model('Course', courseSchema);

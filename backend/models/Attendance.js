import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User' },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  date: { type: Date, default: Date.now },
  present: { type: Boolean, required: true },
});

 
export default model('Attendance', attendanceSchema);

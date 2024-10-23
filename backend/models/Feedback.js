import { Schema, model } from 'mongoose';

const feedbackSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User' },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  feedbackText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

 
export default model('Feedback', feedbackSchema);

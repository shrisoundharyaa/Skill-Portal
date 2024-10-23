import { Schema, model } from 'mongoose';

const feedbackSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User' },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course' },
  feedbackText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// eslint-disable-next-line no-undef
export default model('Feedback', feedbackSchema);

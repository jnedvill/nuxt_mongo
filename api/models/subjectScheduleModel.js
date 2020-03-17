const mongoose = require('mongoose');

const { Schema } = mongoose;

const subjectScheduleSchema = new Schema(
  {
    subject_id: {
      type: String,
      required: 'teacher_id cannot be blank'
    },
    date_type: {
      type: String,
      required: 'date_type cannot be blank'
    },
    class_hour: {
      type: Number,
      required: 'class_hour cannot be blank'
    },
    class_id: {
      type: String,
      required: 'class_id cannot be blank'
    }
  },
  { collection: 'subject_schedule' }
);

module.exports = mongoose.model('subjectSchedule', subjectScheduleSchema);
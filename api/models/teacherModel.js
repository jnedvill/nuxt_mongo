const mongoose = require('mongoose');

const { Schema } = mongoose;

const teacherSchema = new Schema(
  {
    username: {
      type: String,
      required: 'username cannot be blank'
    },
    password: {
      type: String,
      required: 'password cannot be blank'
    },
    name: {
      type: String,
      required: 'name cannot be blank'
    },
    homeroom_flg: {
      type: Boolean,
      required: 'homeroom_flg  cannot be blank'
    },
    lessons_quantity: {
      type: Number,
      required: 'lessons_quantity  cannot be blank'
    },
    busy: {
      type: Array,
      default: []
    }
  },
  { collection: 'teacher' }
);

module.exports = mongoose.model('teacher', teacherSchema);
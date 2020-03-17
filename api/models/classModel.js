const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema(
  {
    name: {
      type: String,
      required: 'name cannot be blank'
    },
    grade: {
      type: Number,
      required: 'grade cannot be blank'
    }
  },
  { collection: 'class' }
);

module.exports = mongoose.model('class', classSchema);
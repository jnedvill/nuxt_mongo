const mongoose = require('mongoose');

const { Schema } = mongoose;

const subjectSchema = new Schema(
  {
    name: {
      type: String,
      required: 'name cannot be blank'
    }
  },
  { collection: 'subject' }
);

module.exports = mongoose.model('subject', subjectSchema);
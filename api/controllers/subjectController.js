const mongoose = require('mongoose');
const subject = mongoose.model('subject');

exports.list_all_subjects = (req, res) => {
  subject.find({}, (err, subjects) => {
    if (err) res.send(err);
    res.json(subjects);
  });
};

exports.create_a_subject = (req, res) => {
  const newsubject = new subject(req.body);
  newsubject.save((err, subject) => {
    if (err) res.send(err);
    res.json(subject);
  });
};

exports.read_a_subject = (req, res) => {
  subject.findById(req.params.subjectId, (err, subject) => {
    if (err) res.send(err);
    res.json(subject);
  });
};

exports.update_a_subject = (req, res) => {
  subject.findOneAndUpdate(
    { _id: req.params.subjectId },
    req.body,
    { new: true },
    (err, subject) => {
      if (err) res.send(err);
      res.json(subject);
    }
  );
};

exports.delete_a_subject = (req, res) => {
  subject.deleteOne({ _id: req.params.subjectId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'subject successfully deleted',
      _id: req.params.subjectId
    });
  });
};

exports.delete_schedules_of_subject = (req, res) => {
  subjectSchedule.deleteMany({ subject_id: req.body.subject_id }, err => {
    if (err) res.send(err);
    res.json({
      message: 'schedules of subject successfully deleted',
      _id: req.params.scheduleId
    });
  });
};
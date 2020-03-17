const mongoose = require('mongoose');
const subjectSchedule = mongoose.model('subjectSchedule');

exports.list_all_subject_schedules = (req, res) => {
  subjectSchedule.find({}, (err, schedules) => {
    if (err) res.send(err);
    res.json(schedules);
  });
};

exports.create_a_subject_schedule = (req, res) => {
  const newSubjectSchedule = new subjectSchedule(req.body);
  newSubjectSchedule.save((err, schedule) => {
    if (err) res.send(err);
    res.json(schedule);
  });
};

exports.read_a_subject_schedule = (req, res) => {
  subjectSchedule.find({teacher_id: req.params.subjectScheduleId}, (err, schedule) => {
    if (err) res.send(err);
    res.json(schedule);
  });
};

exports.update_a_subject_schedule = (req, res) => {
  subjectSchedule.findOneAndUpdate(
    {_id: req.params.subjectScheduleId},
    req.body,
    {new: true},
    (err, schedule) => {
      if (err) res.send(err);
      res.json(schedule);
    }
  );
};

exports.delete_a_subject_schedule = (req, res) => {
  subjectSchedule.deleteOne({
    date_type: req.body.date_type
    , class_hour: req.body.class_hour
    , class_id: req.body.class_id
  }, err => {
    if (err) res.send(err);
    res.json({
      message: 'subject schedule successfully deleted',
      _id: req.params.subjectScheduleId
    });
  });
};

exports.delete_subject_schedules = (req, res) => {
  subjectSchedule.remove({}, function (err) {
    res.json({
      message: 'subject schedules successfully deleted'
    });
  });
};
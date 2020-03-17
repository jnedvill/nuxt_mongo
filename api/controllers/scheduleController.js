const mongoose = require('mongoose');
const schedule = mongoose.model('schedule');

exports.list_all_schedules = (req, res) => {
  schedule.find({}, (err, schedules) => {
    if (err) res.send(err);
    res.json(schedules);
  });
};

exports.create_a_schedule = (req, res) => {
  const newSchedule = new schedule(req.body);
  newSchedule.save((err, schedule) => {
    if (err) res.send(err);
    res.json(schedule);
  });
};

exports.read_a_schedule = (req, res) => {
  schedule.find({teacher_id: req.params.scheduleId}, (err, schedule) => {
    if (err) res.send(err);
    res.json(schedule);
  });
};

exports.update_a_schedule = (req, res) => {
  schedule.findOneAndUpdate(
    {_id: req.params.scheduleId},
    req.body,
    {new: true},
    (err, schedule) => {
      if (err) res.send(err);
      res.json(schedule);
    }
  );
};

exports.delete_a_schedule = (req, res) => {
  schedule.deleteOne({
    date_type: req.body.date_type
    , class_hour: req.body.class_hour
    , class_id: req.body.class_id
  }, err => {
    if (err) res.send(err);
    res.json({
      message: 'schedule successfully deleted',
      _id: req.params.scheduleId
    });
  });
};

exports.delete_schedules = (req, res) => {
  schedule.remove({}, function (err) {
    res.json({
      message: 'schedules successfully deleted'
    });
  });
};
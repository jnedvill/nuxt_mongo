let mongoose = require('mongoose');
let teacher = mongoose.model('teacher');
let schedule = mongoose.model('schedule');

exports.list_all_teachers = (req, res) => {
  teacher.find({}, (err, teachers) => {
    if (err) res.send(err);
    res.json(teachers);
  });
};

exports.create_a_teacher = (req, res) => {
  const newteacher = new teacher(req.body);
  newteacher.save((err, teacher) => {
    if (err) res.send(err);
    res.json(teacher);
  });
};

exports.read_a_teacher = (req, res) => {
  teacher.findById(req.params.teacherId, (err, teacher) => {
    if (err) res.send(err);
    res.json(teacher);
  });
};

exports.update_a_teacher = (req, res) => {
  teacher.findOneAndUpdate(
    {_id: req.params.teacherId},
    req.body,
    {new: true},
    (err, teacher) => {
      if (err) res.send(err);
      res.json(teacher);
    }
  );
};

exports.delete_a_teacher = (req, res) => {
  teacher.deleteOne({_id: req.params.teacherId}, err => {
    if (err) res.send(err);
    res.json({
      message: 'teacher successfully deleted',
      _id: req.params.teacherId
    });
  });
};

exports.delete_schedules_of_teacher = (req, res) => {
  schedule.deleteMany({teacher_id: req.body.teacher_id}, err => {
    if (err) res.send(err);
    res.json({
      message: 'schedules of teacher successfully deleted'
    });
  });
};

exports.delete_schedules_of_teacher_busy = (req, res) => {
  let msg = 'schedules of teacher successfully deleted';
  for (let i = 0; i < req.body.busy.length; i++) {
    schedule.deleteMany({
      teacher_id: req.body._id,
      date_type: req.body.busy[i].substring(0, 3),
      class_hour: req.body.busy[i].substring(3, 4)
    }, err => {
      if (err) {
        msg = err;
      }
    });
  }
  res.send(req.body)
};
const mongoose = require('mongoose');
const classModel = mongoose.model('class');

exports.list_all_classes = (req, res) => {
  classModel.find({}, (err, classes) => {
    if (err) res.send(err);
    res.json(classes);
  });
};

exports.create_a_class = (req, res) => {
  const newClass = new classModel(req.body);
  newClass.save((err, classObj) => {
    if (err) res.send(err);
    res.json(classObj);
  });
};

exports.read_a_class = (req, res) => {
  classModel.findById(req.params.classId, (err, classObj) => {
    if (err) res.send(err);
    res.json(classObj);
  });
};

exports.update_a_class = (req, res) => {
  classModel.findOneAndUpdate(
    { _id: req.params.classId },
    req.body,
    { new: true },
    (err, classObj) => {
      if (err) res.send(err);
      res.json(classObj);
    }
  );
};

exports.delete_a_class = (req, res) => {
  classModel.deleteOne({ _id: req.params.classId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'class successfully deleted',
      _id: req.params.classId
    });
  });
};

exports.delete_schedules_of_class = (req, res) => {
  schedule.deleteMany({ class_id: req.body.class_id }, err => {
    if (err) res.send(err);
    res.json({
      message: 'schedules of class successfully deleted',
      _id: req.params.scheduleId
    });
  });
};

exports.list_all_classes_grade = (req, res) => {
  classModel.find({grade: req.params.gradeId}, (err, classObj) => {
    if (err) res.send(err);
    res.json(classObj);
  });
};
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
let teacher = mongoose.model('teacher');
const config = require('./../../config.js');

exports.login = (req, res) => {
  let token = jwt.sign({username: req.body.username}, config.secret, {expiresIn: 86400});
  if (req.body.username == "admin" && req.body.password == "zxc") {
    req.session.authUser = {
      account: 'admin',
      token: token
    }
    res.json({
      account: 'admin',
      token: token
    });
  } else {
    teacher.find({username: req.body.username, password: req.body.password}, function (err, teachers) {
      if (teachers.length > 0) {
        req.session.authUser = {
          account: 'user',
          teacherId: teachers[0]._id,
          token: token
        }
        res.json({
          account: 'user',
          teacherId: teachers[0]._id,
          token: token
        });
      } else {
        res.json({
          account: 'failed'
        });
      }
    });
  }
};

exports.logout = (req, res) => {
  delete req.session.authUser;
  res.json({ ok: true });
};

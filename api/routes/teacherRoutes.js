const teacherController = require('../controllers/teacherController');
let middleware = require('./../../middleware/authAPI');
module.exports = app => {
  app.get('/teachers', middleware.checkToken, teacherController.list_all_teachers);
  app.post('/teachers', middleware.checkToken, teacherController.create_a_teacher);
  app.put('/teachers', middleware.checkToken, teacherController.delete_schedules_of_teacher);

  app.put('/teachersDeleteSchedules', middleware.checkToken, teacherController.delete_schedules_of_teacher_busy);

  app.get('/teachers/:teacherId', middleware.checkToken, teacherController.read_a_teacher);
  app.put('/teachers/:teacherId', middleware.checkToken, teacherController.update_a_teacher);
  app.delete('/teachers/:teacherId', middleware.checkToken, teacherController.delete_a_teacher);

};

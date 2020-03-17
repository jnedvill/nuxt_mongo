const teacherController = require('../controllers/teacherController');

module.exports = app => {
  app.get('/teachers', teacherController.list_all_teachers);
  app.post('/teachers', teacherController.create_a_teacher);
  app.put('/teachers', teacherController.delete_schedules_of_teacher);

  app.put('/teachersDeleteSchedules', teacherController.delete_schedules_of_teacher_busy);

  app.get('/teachers/:teacherId', teacherController.read_a_teacher);
  app.put('/teachers/:teacherId', teacherController.update_a_teacher);
  app.delete('/teachers/:teacherId', teacherController.delete_a_teacher);

};

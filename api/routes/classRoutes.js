const classController = require('../controllers/classController');

module.exports = app => {
  app.get('/classes', classController.list_all_classes);
  app.post('/classes', classController.create_a_class);
  app.put('/classes', classController.delete_schedules_of_class);

  app.get('/classes/grade/:gradeId', classController.list_all_classes_grade);

  app.get('/classes/:classId', classController.read_a_class);
  app.put('/classes/:classId', classController.update_a_class);
  app.delete('/classes/:classId', classController.delete_a_class);

};

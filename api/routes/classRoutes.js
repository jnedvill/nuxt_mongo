const classController = require('../controllers/classController');
let middleware = require('./../../middleware/authAPI');
module.exports = app => {
  app.get('/classes', middleware.checkToken, classController.list_all_classes);
  app.post('/classes', middleware.checkToken, classController.create_a_class);
  app.put('/classes', middleware.checkToken, classController.delete_schedules_of_class);

  app.get('/classes/grade/:gradeId', middleware.checkToken, classController.list_all_classes_grade);

  app.get('/classes/:classId', middleware.checkToken, classController.read_a_class);
  app.put('/classes/:classId', middleware.checkToken, classController.update_a_class);
  app.delete('/classes/:classId', middleware.checkToken, classController.delete_a_class);

};

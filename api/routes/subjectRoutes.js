const subjectController = require('../controllers/subjectController');
let middleware = require('./../../middleware/authAPI');
module.exports = app => {
  app.get('/subjects', middleware.checkToken, subjectController.list_all_subjects);
  app.post('/subjects', middleware.checkToken, subjectController.create_a_subject);
  app.put('/subjects', middleware.checkToken, subjectController.delete_schedules_of_subject);

  app.get('/subjects/:subjectId', middleware.checkToken, subjectController.read_a_subject);
  app.put('/subjects/:subjectId', middleware.checkToken, subjectController.update_a_subject);
  app.delete('/subjects/:subjectId', middleware.checkToken, subjectController.delete_a_subject);

};

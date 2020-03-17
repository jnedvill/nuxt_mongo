const subjectController = require('../controllers/subjectController');

module.exports = app => {
  app.get('/subjects', subjectController.list_all_subjects);
  app.post('/subjects', subjectController.create_a_subject);
  app.put('/subjects', subjectController.delete_schedules_of_subject);

  app.get('/subjects/:subjectId', subjectController.read_a_subject);
  app.put('/subjects/:subjectId', subjectController.update_a_subject);
  app.delete('/subjects/:subjectId', subjectController.delete_a_subject);

};

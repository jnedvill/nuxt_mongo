const subjectScheduleController = require('../controllers/subjectScheduleController');
let middleware = require('./../../middleware/authAPI');
module.exports = app => {
  app.get('/subjectSchedules', middleware.checkToken, subjectScheduleController.list_all_subject_schedules);
  app.post('/subjectSchedules', middleware.checkToken, subjectScheduleController.create_a_subject_schedule);
  app.put('/subjectSchedules', middleware.checkToken, subjectScheduleController.delete_a_subject_schedule);
  app.delete('/subjectSchedules', middleware.checkToken, subjectScheduleController.delete_subject_schedules);

  app.get('/subjectSchedules/:subjectSchedulesId', middleware.checkToken, subjectScheduleController.read_a_subject_schedule);
  app.put('/subjectSchedules/:subjectSchedulesId', middleware.checkToken, subjectScheduleController.update_a_subject_schedule);

};

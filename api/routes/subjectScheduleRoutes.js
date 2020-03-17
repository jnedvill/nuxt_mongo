const subjectScheduleController = require('../controllers/subjectScheduleController');

module.exports = app => {
  app.get('/subjectSchedules', subjectScheduleController.list_all_subject_schedules);
  app.post('/subjectSchedules', subjectScheduleController.create_a_subject_schedule);
  app.put('/subjectSchedules', subjectScheduleController.delete_a_subject_schedule);
  app.delete('/subjectSchedules', subjectScheduleController.delete_subject_schedules);

  app.get('/subjectSchedules/:subjectSchedulesId', subjectScheduleController.read_a_subject_schedule);
  app.put('/subjectSchedules/:subjectSchedulesId', subjectScheduleController.update_a_subject_schedule);

};

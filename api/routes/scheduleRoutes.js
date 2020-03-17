const scheduleController = require('../controllers/scheduleController');

module.exports = app => {
  app.get('/schedules', scheduleController.list_all_schedules);
  app.post('/schedules', scheduleController.create_a_schedule);
  app.put('/schedules', scheduleController.delete_a_schedule);
  app.delete('/schedules', scheduleController.delete_schedules);

  app.get('/schedules/:scheduleId', scheduleController.read_a_schedule);
  app.put('/schedules/:scheduleId', scheduleController.update_a_schedule);

};

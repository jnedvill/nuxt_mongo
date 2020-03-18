const scheduleController = require('../controllers/scheduleController');
let middleware = require('./../../middleware/authAPI');
module.exports = app => {
  app.get('/schedules', middleware.checkToken, scheduleController.list_all_schedules);
  app.post('/schedules', middleware.checkToken, scheduleController.create_a_schedule);
  app.put('/schedules', middleware.checkToken, scheduleController.delete_a_schedule);
  app.delete('/schedules', middleware.checkToken, scheduleController.delete_schedules);

  app.get('/schedules/:scheduleId', middleware.checkToken, scheduleController.read_a_schedule);
  app.put('/schedules/:scheduleId', middleware.checkToken, scheduleController.update_a_schedule);

};

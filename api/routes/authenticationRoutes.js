const authenticationController = require('../controllers/authenticationController');
let middleware = require('./../../middleware/authAPI');
module.exports = app => {
  app
  .route('/api/login')
  .post(authenticationController.login);

  app
  .route('/api/logout')
  .post(authenticationController.logout);
};

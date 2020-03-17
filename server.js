const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const app = require('express')();
const cors = require('cors'); // Allows calls from other domains

// Body parser, to access `req.body`
app.use(bodyParser.json());

global.teacher = require('./api/models/teacherModel');
global.subject = require('./api/models/subjectModel');
global.class = require('./api/models/classModel');
global.schedule = require('./api/models/scheduleModel');
global.subjectSchedule = require('./api/models/subjectScheduleModel');
const teacherRoutes = require('./api/routes/teacherRoutes');
const subjectRoutes = require('./api/routes/subjectRoutes');
const classRoutes = require('./api/routes/classRoutes');
const scheduleRoutes = require('./api/routes/scheduleRoutes');
const subjectScheduleRoutes = require('./api/routes/subjectScheduleRoutes');
const authenticationRoutes = require('./api/routes/authenticationRoutes');

// Sessions to create `req.session`
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 86400000 }
}));

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb://localhost:27017/training',
  {useNewUrlParser: true}
);

app.use(cors());

let config = require('./nuxt.config.js')

// We instantiate Nuxt.js with the options
const isProd = process.env.NODE_ENV === 'production'
config.dev = !isProd

const nuxt = new Nuxt(config)

// No build in production
if (!isProd) {
  const builder = new Builder(nuxt)
  builder.build()
}
teacherRoutes(app);
subjectRoutes(app);
classRoutes(app);
scheduleRoutes(app);
subjectScheduleRoutes(app);
authenticationRoutes(app);

app.use(nuxt.render)
app.listen(3000)

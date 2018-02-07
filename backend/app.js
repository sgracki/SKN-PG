const express = require('express')
const app = express()
const secrets = require('./secrets');
const mongoose = require('mongoose');
const passportConf = require('./passport');
const passport = require('passport');
const path = require('path');
var compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('flash');

mongoose.connect(secrets.db);
mongoose.connection.on('error', function () {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});
mongoose.Promise = global.Promise;

var userController = require('./routes/user');
app.set('port', process.env.PORT || 3005);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
    store: new MongoStore({url: secrets.db, autoReconnect: true})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});

app.use('/', express.static('../frontend'));
app.use('/admin', passportConf.isAuthenticated, express.static('../admin'));

app.use('/api/admin', (passportConf.isAuthenticated && passportConf.isAdmin), require('./routes/api_admin'));
app.use('/api/posts', require('./routes/api_posts'));

app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
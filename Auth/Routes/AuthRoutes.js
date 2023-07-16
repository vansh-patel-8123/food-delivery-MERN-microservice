const routes = require('express').Router();

// importing Controllers
const {logInCtrl, logOutCtrl } = require('../Controllers/LogCtrl.Auth');
const {registerCtrl} = require('../Controllers/RegisterCtrl.Auth');

// Routes
routes.post('/register',registerCtrl);
// routes.post('/login',logInCtrl);
// routes.post('/logout',logOutCtrl);

module.exports = routes;


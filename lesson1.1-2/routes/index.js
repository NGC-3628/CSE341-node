const routes = require('express').Router();
const lesson1controllers = require('../controllers/lesson1')

routes.get('/', lesson1controllers.homeRoute);
routes.get('/profile', lesson1controllers.profileRoute);
routes.get('/login', lesson1controllers.loginRoute);
 

module.exports = routes;

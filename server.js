//express web server
/*
const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello, This isaac Iturralde Puente");
});
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
*/

//this process is very cool. You can access to different routes like /lang, /setting, /home, /contact.
//WOW!!
const express = require('express');
const app = express();
const router = express.Router();
const lesson1controllers = require('./controllers/lesson1')
 
router.get('/home', (req, res) => {
  res.send('Hello World, This is home router');
});
 
router.get('/profile', lesson1controllers.profileRoute);
 
router.get('/login', lesson1controllers.loginRoute);
 
router.get('/logout', (req, res) => {
  res.send('Hello World, This is logout router');
});
 
app.use('/', router);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
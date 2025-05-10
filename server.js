//this process is very cool. You can access to different routes like /lang, /setting, /home, /contact.
//WOW!!
const express = require('express');
const app = express();
 
app.use('/', require('./routes'));
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});












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
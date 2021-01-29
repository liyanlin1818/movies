// Start the application server. It will serve the application on 4000 port
// CMD: npm run server
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Task = require('./api/models/movieDBModel'), //created model loading here
  bodyParser = require('body-parser');
 

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/users'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/movieDBRoutes'); //importing route
routes(app); //register the route


app.listen(port, () => {
    console.log('Server started on: ' + port);
});
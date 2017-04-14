// MODULES
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors= require('cors');
var config = require('./config.js');
var app = express();
var port = 5000;
var corsOptions = {
	origin: 'http://localhost:5000'
};


var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
//sessions is a property on the req object
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret,
}));
//Step 3: Serving static files -- just how static works
console.log(__dirname)


app.post("/api/login" , userCtrl.login );
app.get("/api/profiles" , profileCtrl.getFriendsProfile );









app.listen(port, function(){
    console.log("listening on port 5000");
});

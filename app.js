/*
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World123!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/
var express = require('express');
var path = require('path');
var bodyPaser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
	//console.log('Hello World');
	//res.send('Hello World Saravanan aha How are you?');
	res.render('index', {title: 'Welcome', subtitle: 'How are you today Saravanan?'});
});
app.get('/about', function(req,res){
	console.log(res.render('about'));
});
app.get('/contact', function(req,res){
	res.render('contact');
});

var jade = require('jade'),
    locals = {name: "Saravanan"},
    html   = jade.renderFile('views/emailTemplate.jade', locals);
//console.log(html);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});


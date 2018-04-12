var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var post = require('./routes/post');
var app = express();


var FB = require('facebook-node');
FB.setApiVersion("v2.2");

FB.setAccessToken('EAACEdEose0cBAPFCGZCElHHKf9ZCtQSCZBmyCcgYmVNxZCzCfvcRNOzSl46iSiGGIlXTo9cExkvJYWbZBm53bZCyTjaGr0N0hfhm425k5L6zeQFO7s6ZCwPZBPHu4lp1ZAwAJ3ZBpZBV7WDjt4gURAsS3owuiFPvmSmyzdZAsZBGLOVowoK9Atj1Cv9ZA7ZCjHWbmZCWkTYZCuGZAeSTOPngZDZD');
 
var body = 'Test api!!!';


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/post', post);

// catch 404 and forward to error handler

// app.use('/post', function(req,res){
// 	FB.api('me/feed', 'post', { message: body}, function (res) {
//  		 if(!res || res.error) {
//    		 console.log(!res ? 'error occurred' : res.error);
//     	return;
//   	}
//   	console.log('Post Id: ' + res.id);
// 	});
// })
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

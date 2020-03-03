const http = require('http');
const app = require('./backend/app');

var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

// var app1 = express();




const port = process.env.PORT || 3000;

app.set('port', port);
const server = http.createServer(app);

server.listen(port);


// //email code

// var mail = require('./nodeMailerWithTemp');

// /**
// * Don't forget to change your receipient details here
// * I need to modeify this as most people who followed this tutorial always end up sending mail to me instead
// */
// var receiver = 'premchandran563@gmail.com';
// var username = 'prem';
// var name = 'prem1';
// var passwordToken = 'http://gmail.com/personalacc';
// mail.sendPasswordReset(receiver, username, name, passwordToken);

// // view engine setup
// app1.set('views', path.join(__dirname, 'views'));
// app1.set('view engine', 'ejs');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app1.use(logger('dev'));
// app1.use(bodyParser.json());
// app1.use(bodyParser.urlencoded({ extended: false }));
// app1.use(cookieParser());
// app1.use(express.static(path.join(__dirname, 'public')));

// app1.use('/', routes);
// app1.use('/users', users);

// // catch 404 and forward to error handler
// app1.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app1.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app1.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


// module.exports = app1;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var moment = require('moment')
//导入cors模块,该模块为跨域所用
var cors = require('cors');
app.use(cors());
//解析表单的插件
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
//创建数据库连接对象
var mysql = require('mysql');

function getDb() {
  var connection = mysql.createConnection({
    host: 'plustut.cxsxaix1kweg.ap-northeast-2.rds.amazonaws.com',
    user: 'xinsu',
    password: 'catherine100529',
    database: 'plustut',
    multipleStatements: true
  });
  connection.connect();
  return connection;
}

app.get('/', function (req, res) {
  var obj = {
    name: "hcoder",
    version: 1.1
  };
  res.json(obj);
});

app.get('/api/getteachers', function (req, res) {
  var db = getDb();
  db.query('select * from teachers', null, function (err, result) {
    console.log(err);
    res.json(result);
  });
});

app.get('/api/get_classes', function(req, res) {
  var db = getDb();
  db.query('select * from classes', null, function(err, result) {
    res.json(result);
  });
});

app.get('/api/get_articles', function(req, res) {
  var db = getDb();
  db.query('select * from articles', null, function(err, result) {
    res.json(result);
  });
});

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
//配置服务端口
var server = app.listen(3000, function () {

  var host = server.address().address;

  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})

//https://www.codementor.io/@wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq
var express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3000;
var mysql = require('mysql');
const mysqlCon = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'raju$365',
    database : 'first_python'
});
 
// connect to database
mysqlCon.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  });
mysqlCon.ping( (err) => { console.log(err)})
mysqlCon.query('SELECT * from tasks', function (err, rows, fields) {
    if (err) throw err
  
    console.log('The solution is: ', rows)
  })
console.log('connection',mysqlCon.state);
app.listen(port);
console.log('API server started on: ' + port);

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//var routes = require('./route/appRoute'); //importing route
//routes(app); //register the route
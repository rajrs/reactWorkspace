//https://www.codementor.io/@wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq
// folow https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
 mysql = require('mysql')
 Mycon = require('./db');
port = process.env.PORT || 3000;

/*const mysqlCon = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'raju$365',
    database : 'first_python'
});*/
 
// connect to database
/*mysqlCon.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
  });*/
  //console.log('connection',mysqlCon.state);
  Mycon.query('SELECT * from tasks', function (err, rows, fields) {
     if (err) throw err  
        console.log('The solution is: ', rows)   
    })

//console.log('connection',mysqlCon.state);
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('hello world')
  })
//var routes = require('./route/appRoute'); //importing route
//routes(app); //register the route
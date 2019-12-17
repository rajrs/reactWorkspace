//https://www.codementor.io/@wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq
//https://www.terlici.com/2015/08/13/mysql-node-express.html
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
        //console.log('The solution is: ', rows)   
    })

//console.log('connection',mysqlCon.state);
var server= app.listen(port);
var host = server.address().address;  
var port = server.address().port;  
  //console.log(server);
  console.log('Example app listening at http://%s:%s', host, port);  
  console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname })
})
  app.get('/test',(req,res)=>{ 
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
})
app.post('/login', function (req, res) {
    console.log(req.body.user);
    res.send('POST request to the homepage')
})
app.get('/users/:userId/books/:bookId', function (req, res) {
  console.log(req.route.path,)
  res.send(`<h1>${req.method} ${req.params.userId}</h1>`);
})
//var routes = require('./route/appRoute'); //importing route
//routes(app); //register the route
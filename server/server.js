//https://www.codementor.io/@wapjude/creating-a-simple-rest-api-with-expressjs-in-5min-bbtmk51mq
//https://www.terlici.com/2015/08/13/mysql-node-express.html
// folow https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
  require('rootpath')();
  var express = require('express'),
  cors = require('cors'),
  jwt = require('_helpers/jwt'),
  helmet = require('helmet'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3030,
  errorHandler = require('_helpers/error-handler')
  app = express();

  var server= app.listen(port);
  console.log('API server started on: ' + port);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(bodyParser.json());
  app.use(cors()); 
 
  //importing route
  var routes = require('./route/appRoute'); 
  //register the route
  routes(app); 



  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  //   next();
  // });
  // app.get('/', function (req, res) {
  //     res.sendFile('index.html', { root: __dirname })
  // })
  //   app.get('/test',(req,res)=>{ 
  //     res.setHeader('Content-Type', 'application/json');
  //     res.end(JSON.stringify({ a: 1 }));
  // })
  // app.post('/login', function (req, res) {
  //     console.log(req.body.user);
  //     res.send('POST request to the homepage')
  // })
  // app.get('/users/:userId/books/:bookId', function (req, res) {
  //   console.log(req.route.path,)
  //   res.send(`<h1>${req.method} ${req.params.userId} book id${req.params.bookId}</h1>`);
  // })
 //mysql = require('mysql')
  //Mycon = require('./db'); 

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
  /*Mycon.query('SELECT * from tasks', function (err, rows, fields) {
     if (err) throw err  
        console.log('The solution is: ', rows)   
    })*/

//console.log('connection',mysqlCon.state);

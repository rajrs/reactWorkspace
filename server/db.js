'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'raju$365',
    database : 'first_python'
});

connection.connect(function(err) {
    if (err) {
        throw err}
    else{
        console.log('connection established')
    }
});

module.exports = connection;
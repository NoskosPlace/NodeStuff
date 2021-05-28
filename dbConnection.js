          
var mysql = require('mysql');
var mySQLConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'storee'
});
exports.mySQLConnection = mySQLConnection;

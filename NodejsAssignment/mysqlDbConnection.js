// mysqlDbConnection.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',       // replace with your MySQL password
  database: 'stock_market'
});

module.exports = connection;

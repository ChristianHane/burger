const mysql = require('mysql');

const connection = mysql.createConnection({
 port: 3306,
 host: 'localhost',
 user: 'root',
 password: 'abc123',
 database: 'burger_db'
})

connection.connect(err => {
  if (err) {
    console.log('Connection error: ' + err.stack);
    return;
  }
  console.log('Connected as id: ' + connection.threadId);
})

module.exports = connection;
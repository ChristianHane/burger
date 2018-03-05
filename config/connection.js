const mysql = require('mysql');

require('dotenv').config()

let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
  })
};

connection.connect(err => {
  if (err) {
    console.log('Connection error: ' + err.stack);
    return;
  }
  console.log('Connected as id: ' + connection.threadId);
})

module.exports = connection;
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'danang',
  password: 'danang',
  database: 'dua_tiga_paskal',
});

conn.connect();

module.exports = conn;

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: process.env.DB_PASSWORD || '',
    database: 'votedb',
    dateStrings: 'date'
});
conn.connect();

module.exports = conn;
let mysql = require('mysql');

let db = mysql.createPool({
    connectionLimit : 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gallery'
});

module.exports = db;
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "127.0.0.1",   
    port: "3306",        
    user: "sjrnfl7",
    password: "sjrnfl7",
    database: "EUNYOU",
    connectionLimit: 5   
}).promise();   

module.exports = pool;
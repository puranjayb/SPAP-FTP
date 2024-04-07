const mysql = require('mysql2');
require('dotenv').config({ path: 'config/.env' });

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.getConnection((err, connection) => {
    if (err) {
        console.error(`Error connecting to database: ${err}`);
    } else {
        console.log(`Connected to database`);
    }
});

module.exports = connection;
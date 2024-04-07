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

connection.getConnection((err, conn) => {
    if (err) {
        console.log('Error connecting to database \n' + err);
        return;
    }
    console.log('Connected to database');
    conn.release();
});

module.exports = connection.promise();

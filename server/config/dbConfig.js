const { Sequelize } = require('sequelize');
require('dotenv').config({ path: 'config/.env' });

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

async function testConnection() {
  try {
    await connection.authenticate();
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

testConnection();

module.exports = connection;

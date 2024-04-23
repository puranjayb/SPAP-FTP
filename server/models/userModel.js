const { DataTypes } = require('sequelize');
const connection = require('../config/dbConfigSequelize');

const User = connection.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = User;
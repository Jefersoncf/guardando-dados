const Sequelize = require('sequelize');

const db = require('./db');

const Message = db.sequelize.define('info_messages',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Message;
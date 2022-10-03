const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Company = sequelize.define('Company', {
    name: {
        type: DataTypes.CHAR(128),
        allowNull: false,
        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" }
        }
    },
    description: {
        type: DataTypes.CHAR(128),
        allowNull: false,
        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" }
        }
    },
});

module.exports = Company;
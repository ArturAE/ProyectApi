const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Department = sequelize.define('Department', {
    department: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" }
        }
    },
    job: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" }
        }
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { args: true, msg: "You must enter your salary" }
        }
    }
});

module.exports = Department;
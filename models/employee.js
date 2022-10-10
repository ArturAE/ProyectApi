const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Employee = sequelize.define('Employee', {
    first_name: {
        type: DataTypes.CHAR(128),
        allowNull: false,
        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" }
        }
    },
    last_name: {
        type: DataTypes.CHAR(128),
        allowNull: false,

        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" }
        }
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            len: { args: [10, 10], msg: 'Phone Number is invalid' },
            isInt: { args: true, msg: "You must enter Phone Number" }
        }
    },
    address: {
        type: DataTypes.CHAR(128),
        allowNull: false,
        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" },
        }
    },
    email: {
        type: DataTypes.CHAR(64),
        unique: true,
        allowNull: false,
        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" },
            isEmail: true
        }
    },
    department: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        validate: {
            isLowercase: { args: true, msg: "Write in lowercase" },
        }
    }
});

module.exports = Employee;
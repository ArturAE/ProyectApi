const Employee = require('../models/employee.js');

//CREATE
async function createEmployee(req, res) {
    const body = req.body;
    const employee = await Employee.create(body);
    res.status(201).json(employee);
}

//READ
//all
async function getEmployees(req, res) {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
}
//single
async function getEmployee(req, res) {
    const id = req.params.id;
    const employee = await Employee.findByPk(id);
    res.status(200).json(employee);
}


//UPDATE
async function updateEmployee(req, res) {
    const id = req.params.id;
    const employee = req.body;
    await Employee.update(employee, {
        where: { id }
    });
    const employee_updated = await Employee.findByPk(id);
    res.status(200).json(employee_updated);
}

//DELETE
async function deleteEmployee(req, res) {
    const id = req.params.id;
    const employee_deleted = Employee.destroy({
        where: { id }
    })
    res.status(200).json(employee_deleted);
}

module.exports = {
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
}
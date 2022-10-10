const Department = require('../models/Department.js');

//CREATE
async function createDepartment(req, res) {
    const body = req.body;
    const department = await Department.create(body);
    res.status(201).json(department);
}

//READ
//all
async function getDepartments(req, res) {
    const departments = await Department.findAll();
    res.status(200).json(departments);
}
//single
async function getDepartment(req, res) {
    const id = req.params.id;
    const department = await Department.findByPk(id);
    res.status(200).json(department);
}


//UPDATE
async function updateDepartment(req, res) {
    const id = req.params.id;
    const department = req.body;
    await Department.update(department, {
        where: { id }
    });
    const department_updated = await Department.findByPk(id);
    res.status(200).json(department_updated);
}

//DELETE
async function deleteDepartment(req, res) {
    const id = req.params.id;
    const department_deleted = Department.destroy({
        where: { id }
    })
    res.status(200).json(department_deleted);
}

module.exports = {
    createDepartment,
    getDepartments,
    getDepartment,
    updateDepartment,
    deleteDepartment
}
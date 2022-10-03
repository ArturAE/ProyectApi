const Company = require('../models/company.js');

//CREATE
async function createCompany(req, res) {
    const body = req.body;
    const company = await Company.create(body);
    res.status(201).json(company);
}

//READ
//all
async function getCompanys(req, res) {
    const companys = await Company.findAll();
    res.status(200).json(companys);
}
//single
async function getCompany(req, res) {
    const id = req.params.id;
    const company = await Company.findByPk(id);
    res.status(200).json(company);
}


//UPDATE
async function updateCompany(req, res) {
    const id = req.params.id;
    const company = req.body;
    await Company.update(company, {
        where: { id }
    });
    const company_updated = await Company.findByPk(id);
    res.status(200).json(company_updated);
}

//DELETE
async function deleteCompany(req, res) {
    const id = req.params.id;
    const company_deleted = Company.destroy({
        where: { id }
    })
    res.status(200).json(company_deleted);
}

module.exports = {
    createCompany,
    getCompanys,
    getCompany,
    updateCompany,
    deleteCompany
}
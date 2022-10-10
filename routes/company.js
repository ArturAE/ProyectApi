const router = require('express').Router();
const {
    createCompany,
    getCompanys,
    getCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company.js');

router.get('/', getCompanys);
router.get('/:id', getCompany);
router.post('/', createCompany);
router.patch('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router;
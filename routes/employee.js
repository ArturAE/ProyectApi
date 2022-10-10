const router = require('express').Router();
const {
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee.js');

router.get('/', getEmployees);
router.get('/:id', getEmployee);
router.post('/', createEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router; 
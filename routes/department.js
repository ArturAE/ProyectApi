const router = require('express').Router();
const {
    createDepartment,
    getDepartments,
    getDepartment,
    updateDepartment,
    deleteDepartment
} = require('../controllers/department.js');

router.get('/', getDepartments);
router.get('/:id', getDepartment);
router.post('/', createDepartment);
router.patch('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

module.exports = router; 
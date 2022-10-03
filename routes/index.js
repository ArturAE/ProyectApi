const router = require('express').Router();
const employee = require('./employee.js');
const company = require('./company.js');
const department = require('./department.js');
const user = require('./user.js');

router.get('/', (req, res) => {
    res.json({ 'info': 'Welcome to Proyect API' });
});

router.use('/employee', employee);
router.use('/company', company);
router.use('/department', department);
router.use('/user', user);

module.exports = router;
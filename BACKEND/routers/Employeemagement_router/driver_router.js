const express = require("express");
const router = express.Router();
const spc = require("../../controllers/Employeemanagement_controll/driver_controll");

router.post('/add_driver', spc.driverRegistration);
router.get('/get_driver', spc.driverDisplay);

module.exports = router;

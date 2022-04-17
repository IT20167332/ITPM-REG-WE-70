const express = require("express");
const router = express.Router();
const spc = require("../../controllers/Employeemanagement_controll/driver_controll");

//Driver Routes
router.post('/add_driver', spc.driverRegistration);
router.get('/get_driver', spc.driverDisplay);
router.put("/update_driver/:id", spc.updateDriver);
router.delete("/delete_driver/:id", spc.deleteDriver);

module.exports = router;

const express = require("express");
const router = express.Router();
const spc = require("../../controllers/Employeemanagement_controll/conductor_controll");

router.post('/add_conductor', spc.conductorRegistration);
router.get('/get_conductor', spc.conductorDisplay);

module.exports = router;

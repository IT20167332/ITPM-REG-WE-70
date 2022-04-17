const express = require("express");
const router = express.Router();
const spc = require("../../controllers/Employeemanagement_controll/conductor_controll");

//Conductor Routes
router.post('/add_conductor', spc.conductorRegistration);
router.get('/get_conductor', spc.conductorDisplay);
router.put("/update_conductor/:id", spc.updateConductor);
router.delete("/delete_conductor/:id", spc.deleteConductor);

module.exports = router;

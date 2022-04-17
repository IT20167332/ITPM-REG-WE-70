const express = require("express");
const router = express.Router();
const spc = require('../../controllers/busControl/busControl');

router.post('/add_bus',spc.AddBus);
router.get('/show_bus_details',spc.getData);

module.exports = router;
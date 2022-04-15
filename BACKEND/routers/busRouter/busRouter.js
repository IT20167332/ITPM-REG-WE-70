const express = require("express");
const router = express.Router();
const spc = require('../../controllers/busControl/busControl');

router.post('/add_bus',spc.AddBus);

module.exports = router;
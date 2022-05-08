const express = require("express");
const router = express.Router();
const spc = require('../../controllers/busControl/busControl');

router.post('/add_bus',spc.AddBus);
router.get('/show_bus_details',spc.getData);
router.put('/update_bus_details/:id',spc.updateBus);

module.exports = router;
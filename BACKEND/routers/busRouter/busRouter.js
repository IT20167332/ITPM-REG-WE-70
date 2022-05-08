const express = require("express");
const router = express.Router();
const spc = require('../../controllers/busControl/busControl');

router.post('/add_bus',spc.AddBus);
router.get('/show_bus_details',spc.getData);
router.put('/update_bus_details/:id',spc.updateBus);
router.get('/show_bus_by_id/:id',spc.getDataById);
router.delete('/delete_bus/:id',spc.deleteBus);

module.exports = router;
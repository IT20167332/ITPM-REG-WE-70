const express = require("express");
const router = express.Router();
const spc = require('../../controllers/booking_controlls/timeTable_controlls');

router.post('/add_time_row', spc.addNewTimeRow);
router.get('/get_time_row', spc.getAllTimeRow);
router.get('/get_select_time_row/:from/:to', spc.getSelectTimeRow);
router.get('/get_select_time_by_id/:id', spc.getSelectTimeById);
router.put('/set_array',spc.updateSeatArray);

module.exports = router;
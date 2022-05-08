const express = require("express");
const router = express.Router();
const spc = require('../../controllers/booking_controlls/booking_controll');

router.post('/add_booking', spc.addNewBooking);
router.delete('/delete_booking', spc.deleteBooking);

module.exports = router;
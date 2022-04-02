const express = require("express");
const router = express.Router();
const spc = require('../controllers/admin_controll');

router.post('/add_admin',spc.AddAdmin);
router.post('/signin',spc.signin);
router.post('/checkadmin',spc.checkAdmin)

module.exports = router;
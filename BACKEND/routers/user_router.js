const express = require("express")
const router = express.Router()
const spc = require('../controllers/user_controll')

router.post("/add",spc.addUser)
router.post("/signin",spc.signin)
router.get("/getuser/:id",spc.getUser)
module.exports = router;
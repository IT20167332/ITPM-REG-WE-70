const express = require("express");
const router = express.Router();
const spc = require('../controllers/category_controll');

router.post('/addcategory',spc.addCategory);
router.delete('/deletecategory/:id',spc.deleteCategory);
router.get('/getcategory',spc.getCategory);
router.get('/getallcategory',spc.getAllCategory);

module.exports = router;
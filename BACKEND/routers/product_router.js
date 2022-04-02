const express = require("express");
const router = express.Router();
const multer = require('multer');

const Storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().split(':')+file.originalname);
    }
});

const FileFilter = (req, file, cb) =>{
    
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
        cb(null, true);
    }else{
        cb(null, false);
    } 
}
const uploas = multer({
    storage: Storage ,
    limits: {
        fileSize: 1024*1024*10
    },
    fileFilter: FileFilter
});

const spc = require('../controllers/product_controll')

router.post("/add",uploas.single('productImage'),spc.addProduct)
router.get("/get/:count",spc.getTopFive)
router.put("/view_update/:id",spc.viewUpdate)
router.get("/getg/:category",spc.getForDrawing)
router.get("/getfortable/:sort/:type",spc.getForTable)
router.post("/delete",spc.deleteProduct)
router.put("/update",spc.updateProduct)

module.exports = router;
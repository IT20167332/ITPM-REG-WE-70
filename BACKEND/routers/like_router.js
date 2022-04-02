const express = require("express");
const router = express.Router();
const spc = require('../controllers/like_controll');

router.post("/add",spc.addLike);
router.get('/get_like_count/:id',spc.getLikeCount);
router.get('/is_user_like/:uid/:pid',spc.isThisUserLike);
router.delete('/like_delete/:uid/:pid',spc.deleteLike);

module.exports = router;